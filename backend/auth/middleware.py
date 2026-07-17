from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy import func
from uuid import UUID

from database.connections import get_db
from database.models import User, UserMembership, MembershipTier
from auth.jwt import decode_access_token

security = HTTPBearer()
security_optional = HTTPBearer(auto_error=False)


async def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(security),
    db: AsyncSession = Depends(get_db),
) -> User:
    token = credentials.credentials
    payload = decode_access_token(token)  # raises 401 if invalid

    user_id: str = payload.get("sub")
    if user_id is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token payload missing subject",
        )

    try:
        user_uuid = UUID(user_id)
    except ValueError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token subject",
        )

    result = await db.execute(select(User).where(User.id == user_uuid))
    user = result.scalar_one_or_none()

    if user is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="User not found",
        )
    return user


async def get_current_user_optional(
    credentials: HTTPAuthorizationCredentials | None = Depends(security_optional),
    db: AsyncSession = Depends(get_db),
) -> User | None:
    """
    Like get_current_user, but returns None instead of raising 401
    when there's no token or the token is invalid/expired.
    Used for endpoints that behave differently for logged-in users
    but shouldn't block anonymous access entirely.
    """
    if credentials is None:
        return None

    try:
        payload = decode_access_token(credentials.credentials)
    except HTTPException:
        return None

    user_id: str = payload.get("sub")
    if user_id is None:
        return None

    try:
        user_uuid = UUID(user_id)
    except ValueError:
        return None

    result = await db.execute(select(User).where(User.id == user_uuid))
    return result.scalar_one_or_none()


async def require_admin(user: User = Depends(get_current_user)) -> User:
    if user.role != "admin":
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Admin access required",
        )
    return user
def require_tier(*allowed_tiers: str):
    async def _check_tier(
        user: User = Depends(get_current_user),
        db: AsyncSession = Depends(get_db),
    ) -> User:
        result = await db.execute(
            select(UserMembership)
            .join(MembershipTier, UserMembership.tier_id == MembershipTier.id)
            .where(
                UserMembership.user_id == user.id,
                UserMembership.status == "active",
                UserMembership.end_date > func.now(),
                MembershipTier.name.in_(allowed_tiers),
            )
        )
        membership = result.scalar_one_or_none()
        if membership is None:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail=f"This feature requires one of these memberships: {', '.join(allowed_tiers)}",
            )
        return user
    return _check_tier
