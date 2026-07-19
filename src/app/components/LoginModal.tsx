"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  X,
  ArrowRight,
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  AlertCircle,
} from "lucide-react";
import { useSidebar } from "./navigation/SidebarContext";

// ─── Password strength ─────────────────────────────────────────────────────
function pwStrength(pw: string): { score: number; label: string; color: string } {
  if (!pw) return { score: 0, label: "", color: "" };
  let s = 0;
  if (pw.length >= 8) s++;
  if (pw.length >= 12) s++;
  if (/[A-Z]/.test(pw)) s++;
  if (/[0-9]/.test(pw)) s++;
  if (/[^A-Za-z0-9]/.test(pw)) s++;
  if (s <= 1) return { score: 1, label: "Weak",      color: "#ef4444" };
  if (s <= 2) return { score: 2, label: "Fair",      color: "#f97316" };
  if (s <= 3) return { score: 3, label: "Good",      color: "#eab308" };
  if (s <= 4) return { score: 4, label: "Strong",    color: "#22c55e" };
  return       { score: 5, label: "Excellent", color: "#10b981" };
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
      <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z" fill="#34A853"/>
      <path d="M3.964 10.707c-.18-.54-.282-1.117-.282-1.707s.102-1.167.282-1.707V4.961H.957C.347 6.175 0 7.55 0 9s.348 2.825.957 4.039l3.007-2.332z" fill="#FBBC05"/>
      <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.961L3.964 6.293C4.672 4.165 6.656 3.58 9 3.58z" fill="#EA4335"/>
    </svg>
  );
}

interface LoginModalProps {
  /** When true the user can dismiss this modal (timed nudge). When false it is a hard gate (e.g. Membership page). */
  dismissible?: boolean;
  onClose: () => void;
}

export default function LoginModal({ dismissible = true, onClose }: LoginModalProps) {
  const { login, handleViewChange } = useSidebar();

  const [isLogin, setIsLogin]         = useState(true);
  const [email, setEmail]             = useState("");
  const [password, setPassword]       = useState("");
  const [name, setName]               = useState("");
  const [confirmPw, setConfirmPw]     = useState("");
  const [showPw, setShowPw]           = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [keepIn, setKeepIn]           = useState(false);
  const [loading, setLoading]         = useState(false);
  const [error, setError]             = useState("");

  const strength = pwStrength(password);
  const pwsMatch = confirmPw === "" || password === confirmPw;

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const switchMode = (toLogin: boolean) => {
    setIsLogin(toLogin);
    setError("");
    setPassword("");
    setConfirmPw("");
  };

  const handleSocialLogin = () => {
    login();
    onClose();
    handleViewChange("home");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) { setError("Email and password are required."); return; }

    if (!isLogin) {
      if (!pwsMatch)        { setError("Passwords do not match."); return; }
      if (strength.score < 3) { setError("Please choose a stronger password."); return; }
      if (!name.trim())    { setError("Full Name is required."); return; }
    }

    setLoading(true);
    try {
      await new Promise(r => setTimeout(r, 900));

      if (isLogin) {
        if (email === "admin" && password === "admin") {
          login();
          onClose();
          handleViewChange("admin");
          return;
        } else if (password.length >= 6 && email.includes("@")) {
          login();
          onClose();
          handleViewChange("home");
          return;
        } else {
          throw new Error("Invalid credentials. Try a valid email + 6+ char password.");
        }
      } else {
        login();
        onClose();
        handleViewChange("home");
      }
    } catch (err: any) {
      setError(err.message || "Authentication failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    /* ── Backdrop ── */
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.65)", backdropFilter: "blur(6px)" }}
      onClick={dismissible ? (e) => { if (e.target === e.currentTarget) onClose(); } : undefined}
    >
      {/* ── Modal card ── */}
      <div
        className="relative w-full max-w-md bg-white shadow-2xl overflow-hidden"
        style={{
          borderRadius: 0,
          animation: "modalSlideIn 0.4s cubic-bezier(0.16,1,0.3,1) both",
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Gradient accent bar at top */}
        <div style={{ height: 4, background: "linear-gradient(90deg, #1C2531 0%, #E8A020 50%, #1C2531 100%)" }} />

        {/* Close button */}
        {dismissible && (
          <button
            onClick={onClose}
            aria-label="Close login dialog"
            className="absolute top-4 right-4 z-10 p-1.5 rounded-none text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <X size={18} />
          </button>
        )}

        <div className="px-8 py-7">
          {/* Header */}
          <div className="mb-5">
            {/* Logo row */}
            <div className="flex items-center gap-2 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="AUR" style={{ height: 32, width: "auto" }} />
            </div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.45rem", fontWeight: 700, color: "#1C2531", letterSpacing: "-0.02em", marginBottom: "0.25rem" }}>
              {isLogin ? "Welcome back" : "Join AUR"}
            </h2>
            <p style={{ fontSize: "0.85rem", color: "#64748b" }}>
              {isLogin
                ? "Sign in to access all platform features"
                : "Create your free account to get started"}
            </p>
          </div>

          {/* Tab pills */}
          <div style={{ display: "flex", background: "#F1F5F9", padding: 4, marginBottom: "1.5rem", gap: 4 }}>
            {(["Sign In", "Sign Up"] as const).map((label, i) => {
              const active = (i === 0) === isLogin;
              return (
                <button
                  key={label}
                  onClick={() => switchMode(i === 0)}
                  style={{
                    flex: 1,
                    padding: "0.55rem 1rem",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.07em",
                    textTransform: "uppercase",
                    border: "none",
                    borderRadius: 0,
                    background: active ? "#1C2531" : "transparent",
                    color: active ? "#fff" : "#64748b",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
            {/* Name (signup) */}
            {!isLogin && (
              <Field label="Full Name">
                <FieldInput icon={<User size={15} />} id="modal-name" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Dr. Jane Smith" autoComplete="name" required={!isLogin} />
              </Field>
            )}

            {/* Email */}
            <Field label={isLogin ? "Email or Username" : "Email"}>
              <FieldInput icon={<Mail size={15} />} id="modal-email" type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder={isLogin ? "email or username" : "you@institution.edu"} autoComplete="email" required />
            </Field>

            {/* Password */}
            <Field label="Password">
              <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                <span style={{ position: "absolute", left: "0.85rem", color: "#94a3b8", pointerEvents: "none" }}><Lock size={15} /></span>
                <input
                  id="modal-password"
                  type={showPw ? "text" : "password"}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  autoComplete={isLogin ? "current-password" : "new-password"}
                  style={inputStyle}
                />
                <button type="button" onClick={() => setShowPw(v => !v)} style={eyeStyle} aria-label={showPw ? "Hide" : "Show"}>
                  {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
              {!isLogin && password && (
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginTop: 6 }}>
                  <div style={{ display: "flex", gap: 3, flex: 1 }}>
                    {[1,2,3,4,5].map(i => (
                      <div key={i} style={{ height: 3, flex: 1, background: i <= strength.score ? strength.color : "#e2e8f0", transition: "background 0.3s" }} />
                    ))}
                  </div>
                  <span style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: strength.color, whiteSpace: "nowrap" }}>{strength.label}</span>
                </div>
              )}
            </Field>

            {/* Confirm password (signup) */}
            {!isLogin && (
              <Field label="Confirm Password">
                <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                  <span style={{ position: "absolute", left: "0.85rem", color: "#94a3b8", pointerEvents: "none" }}><Lock size={15} /></span>
                  <input
                    id="modal-confirm"
                    type={showConfirm ? "text" : "password"}
                    value={confirmPw}
                    onChange={e => setConfirmPw(e.target.value)}
                    placeholder="••••••••"
                    required={!isLogin}
                    autoComplete="new-password"
                    style={{ ...inputStyle, borderColor: !pwsMatch ? "#fca5a5" : undefined }}
                  />
                  <button type="button" onClick={() => setShowConfirm(v => !v)} style={eyeStyle}>
                    {showConfirm ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
                {!pwsMatch && (
                  <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 4, fontSize: "0.75rem", color: "#dc2626", fontWeight: 600 }}>
                    <AlertCircle size={13} /> Passwords do not match
                  </div>
                )}
              </Field>
            )}

            {/* Remember / forgot */}
            {isLogin && (
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: -4 }}>
                <label style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.78rem", color: "#64748b", cursor: "pointer" }}>
                  <input type="checkbox" checked={keepIn} onChange={e => setKeepIn(e.target.checked)} style={{ accentColor: "#E8A020" }} />
                  Keep me signed in
                </label>
                <button type="button" style={{ fontSize: "0.75rem", fontWeight: 700, color: "#64748b", background: "none", border: "none", cursor: "pointer" }}>
                  Forgot password?
                </button>
              </div>
            )}

            {/* Error */}
            {error && (
              <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "0.75rem 1rem", background: "#fef2f2", border: "1px solid #fecaca", fontSize: "0.8rem", fontWeight: 500, color: "#b91c1c" }}>
                <AlertCircle size={14} style={{ flexShrink: 0 }} />
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              id="modal-submit-btn"
              disabled={loading || (!isLogin && !pwsMatch && confirmPw !== "")}
              style={{
                width: "100%",
                padding: "0.9rem",
                marginTop: "0.5rem",
                background: loading ? "#64748b" : "#1C2531",
                color: "#fff",
                border: "none",
                borderRadius: 0,
                fontSize: "0.88rem",
                fontWeight: 700,
                letterSpacing: "0.04em",
                cursor: loading ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                transition: "background 0.2s",
              }}
              onMouseEnter={e => { if (!loading) (e.currentTarget as HTMLButtonElement).style.background = "#E8A020"; }}
              onMouseLeave={e => { if (!loading) (e.currentTarget as HTMLButtonElement).style.background = "#1C2531"; }}
            >
              {loading ? (
                <><span style={{ width: 15, height: 15, border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#fff", borderRadius: "50%", animation: "lp-spin 0.65s linear infinite", display: "inline-block" }} /> Authenticating…</>
              ) : (
                <>{isLogin ? "Sign In" : "Create Account"} <ArrowRight size={15} /></>
              )}
            </button>

            {/* Divider */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", margin: "0.25rem 0" }}>
              <div style={{ flex: 1, height: 1, background: "#e2e8f0" }} />
              <span style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#94a3b8", whiteSpace: "nowrap" }}>or continue with</span>
              <div style={{ flex: 1, height: 1, background: "#e2e8f0" }} />
            </div>

            {/* Google */}
            <button
              type="button"
              id="modal-google-btn"
              onClick={handleSocialLogin}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                padding: "0.8rem 1rem",
                background: "#fff",
                border: "1px solid #e2e8f0",
                borderRadius: 0,
                fontSize: "0.82rem", fontWeight: 700, color: "#1C2531",
                cursor: "pointer",
                boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#94a3b8"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#e2e8f0"; }}
            >
              <GoogleIcon /> Continue with Google
            </button>
          </form>

          {/* Footer toggle */}
          <div style={{ marginTop: "1.25rem", textAlign: "center", fontSize: "0.8rem", color: "#64748b" }}>
            {isLogin ? (
              <>Don&apos;t have an account?{" "}
                <button onClick={() => switchMode(false)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "0.8rem", fontWeight: 700, color: "#1C2531", textDecoration: "underline", textUnderlineOffset: 2 }}>
                  Sign up free
                </button>
              </>
            ) : (
              <>Already have an account?{" "}
                <button onClick={() => switchMode(true)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "0.8rem", fontWeight: 700, color: "#1C2531", textDecoration: "underline", textUnderlineOffset: 2 }}>
                  Sign in
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes modalSlideIn {
          0%   { opacity: 0; transform: translateY(28px) scale(0.97); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes lp-spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}

// ─── Small helpers ─────────────────────────────────────────────────────────
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label style={{ fontSize: "0.67rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1C2531", opacity: 0.65 }}>{label}</label>
      {children}
    </div>
  );
}

interface FieldInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: React.ReactNode;
}
function FieldInput({ icon, ...props }: FieldInputProps) {
  return (
    <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
      <span style={{ position: "absolute", left: "0.85rem", color: "#94a3b8", pointerEvents: "none" }}>{icon}</span>
      <input {...props} style={inputStyle} />
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "#F8FAFC",
  border: "1px solid #e2e8f0",
  borderRadius: 0,
  padding: "0.78rem 2.5rem 0.78rem 2.5rem",
  fontSize: "0.88rem",
  color: "#1C2531",
  fontFamily: "var(--font-sans)",
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s",
};

const eyeStyle: React.CSSProperties = {
  position: "absolute",
  right: "0.85rem",
  background: "none",
  border: "none",
  cursor: "pointer",
  color: "#94a3b8",
  display: "flex",
  alignItems: "center",
  padding: 2,
};
