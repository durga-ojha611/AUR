"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import Navbar from "./components/navbar/Navbar";
import MobileMenu from "./components/mobile/MobileMenu";
import Homepage from "./components/Homepage";
import RankingsEngine from "./components/RankingsEngine";
import InstitutionDirectory from "./components/InstitutionDirectory";
import ComparisonDock from "./components/ComparisonDock";
import ComparisonMatrix from "./components/ComparisonMatrix";
import UniversityProfile from "./components/UniversityProfile";
import FloatingChatAssistant from "./components/FloatingChatAssistant";
import AnalyticsDashboard from "./components/AnalyticsDashboard";
import AdminConsole from "./components/AdminConsole";
import Login from "./components/Login";
import UserDashboard from "./components/UserDashboard";
import UniversitiesList from "./components/UniversitiesList";
import Methodology from "./components/Methodology";
import EventsAndAwards from "./components/EventsAndAwards";
import FacultyStudentAwards from "./components/FacultyStudentAwards";
import Membership from "./components/Membership";
import LoginModal from "./components/LoginModal";
import { useSidebar } from "./components/navigation/SidebarContext";
import { useUniversityData } from "./components/data/UniversityDataProvider";
import { Article } from "./data";
import Sidebar from "./components/sidebar/Sidebar";

// How long (ms) a guest may browse before the nudge popup appears
const GUEST_NUDGE_DELAY_MS = 30_000;

export default function AppContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { universities } = useUniversityData();

  const {
    activeView,
    handleViewChange,
    selectedUniId,
    setSelectedUniId,
    selectedUniIds,
    handleToggleCompare,
    handleRemoveCompare,
    handleClearCompare,
    searchQuery,
    setSearchQuery,
    isLoggedIn,
  } = useSidebar();

  const [savedUniIds, setSavedUniIds] = useState<string[]>([]);
  const [settingsAutoRecalc, setSettingsAutoRecalc] = useState(true);
  const [settingsRealtimeSearch, setSettingsRealtimeSearch] = useState(true);
  const [settingsAnalyticsTelemetry, setSettingsAnalyticsTelemetry] = useState(false);

  // ── Login modal state ──────────────────────────────────────────────────
  const [showLoginModal, setShowLoginModal] = useState(false);
  // "nudge" = timed soft prompt (dismissible), "gate" = hard gate (not dismissible)
  const [modalReason, setModalReason] = useState<"nudge" | "gate">("nudge");

  // Timed nudge: show popup after GUEST_NUDGE_DELAY_MS if not logged in
  useEffect(() => {
    if (isLoggedIn) return;
    const timer = setTimeout(() => {
      setModalReason("nudge");
      setShowLoginModal(true);
    }, GUEST_NUDGE_DELAY_MS);
    return () => clearTimeout(timer);
  }, [isLoggedIn]);

  // Gate: if a guest navigates to the membership view, intercept and show modal
  useEffect(() => {
    if (activeView === "membership" && !isLoggedIn) {
      setModalReason("gate");
      setShowLoginModal(true);
      // Bounce them back to home so the URL doesn't stay on membership
      handleViewChange("home");
    }
  }, [activeView, isLoggedIn]);

  const view = activeView;
  const id = selectedUniId;
  const viewKey = view + (id ?? "");

  const handleToggleSave = (uniId: string) =>
    setSavedUniIds((prev) =>
      prev.includes(uniId) ? prev.filter((id) => id !== uniId) : [...prev, uniId]
    );

  const handleUniversitySelect = (uniId: string) => setSelectedUniId(uniId);
  const handleBackToRankings   = () => setSelectedUniId(null);
  const handleArticleSelect    = (article: Article) => router.push(`/blogs/${article.id}`);

  const savedUniversities = universities.filter((u) => savedUniIds.includes(u.id));
  const showSidebar = view !== "home" && view !== "login" && view !== "admin";

  return (
    <div
      className={`${
        view === "home"
          ? "bg-gradient-to-b from-amber-50/50 via-white to-blue-50 dark:bg-none dark:bg-cyber-black"
          : "aur-page"
      } flex min-h-screen flex-col transition-colors duration-300`}
    >
      {/* ── Top Navigation Bar ── */}
      {view !== "login" && view !== "admin" && <Navbar />}

      {/* ── Main Layout ── */}
      <div className="flex-grow flex w-full">
        {showSidebar && <Sidebar />}

        <main
          className={`flex-1 flex flex-col min-w-0 pb-20 md:pb-0 ${
            view === "home" || view === "login" || view === "admin"
              ? "p-0"
              : "px-4 pt-4 lg:px-8 lg:pt-8"
          }`}
          style={{ isolation: "isolate" }}
        >
          <div key={viewKey} className="flex flex-col flex-grow">

            {view === "home" && (
              <Homepage
                onSearchSubmit={(q) => setSearchQuery(q)}
                onUniversitySelect={handleUniversitySelect}
                onArticleSelect={handleArticleSelect}
                onViewChange={handleViewChange}
              />
            )}

            {view === "universities" && (
              <UniversitiesList
                onUniversitySelect={handleUniversitySelect}
                onViewChange={handleViewChange}
                savedUniIds={savedUniIds}
                onToggleSave={handleToggleSave}
              />
            )}

            {(view === "rankings" || view === "countries") && (
              <RankingsEngine
                searchQuery={searchQuery}
                onSearchQueryChange={setSearchQuery}
                selectedUniIds={selectedUniIds}
                onToggleCompare={handleToggleCompare}
                onUniversitySelect={handleUniversitySelect}
              />
            )}

            {view === "universities" && (
              <InstitutionDirectory onUniversitySelect={handleUniversitySelect} />
            )}

            {view === "profile" && id && (
              <UniversityProfile
                universityId={id}
                onBack={handleBackToRankings}
                onViewChange={handleViewChange}
                savedUniIds={savedUniIds}
                onToggleSave={handleToggleSave}
              />
            )}

            {view === "analytics"     && <AnalyticsDashboard />}
            {view === "methodology"   && <Methodology />}

            {/* Membership — only rendered when logged in (gate handled above) */}
            {view === "membership" && isLoggedIn && <Membership />}

            {view === "events"        && <EventsAndAwards />}
            {view === "faculty-awards" && <FacultyStudentAwards />}
            {view === "admin"         && <AdminConsole />}
            {view === "login"         && <Login />}
            {view === "saved"         && <ComparisonMatrix />}

            {view === "settings" && (
              <UserDashboard
                savedUniversities={savedUniversities}
                onUniversitySelect={handleUniversitySelect}
                onNavigateToRankings={() => handleViewChange("rankings")}
                settings={{
                  autoRecalc: settingsAutoRecalc,
                  realtimeSearch: settingsRealtimeSearch,
                  analyticsTelemetry: settingsAnalyticsTelemetry,
                }}
                onSettingsChange={(key, val) => {
                  if (key === "autoRecalc") setSettingsAutoRecalc(val);
                  if (key === "realtimeSearch") setSettingsRealtimeSearch(val);
                  if (key === "analyticsTelemetry") setSettingsAnalyticsTelemetry(val);
                }}
                onResetCache={() => {
                  if (confirm("Reset configs and clear filters?")) {
                    localStorage.clear();
                    window.location.reload();
                  }
                }}
                onSignOut={() => handleViewChange("login")}
              />
            )}
          </div>
        </main>
      </div>

      {/* ── Mobile nav & comparison dock ── */}
      {view !== "login" && view !== "admin" && <MobileMenu />}
      {view !== "login" && view !== "admin" && (
        <ComparisonDock
          selectedIds={selectedUniIds}
          onRemove={handleRemoveCompare}
          onClearAll={handleClearCompare}
          onUniversitySelect={handleUniversitySelect}
        />
      )}
      {view !== "login" && view !== "admin" && <FloatingChatAssistant />}

      {/* ── Login / Signup Modal ── */}
      {showLoginModal && (
        <LoginModal
          dismissible={modalReason === "nudge"}
          onClose={() => setShowLoginModal(false)}
        />
      )}
    </div>
  );
}
