"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Search, Bell, Sun, Moon, Menu, X, ChevronDown,
  User, Shield, LogOut, Maximize2, Minimize2, SlidersHorizontal
} from "lucide-react";
import { useSidebar } from "../navigation/SidebarContext";
import { useToast } from "../feedback/ToastContext";
import { TOP_NAV_LINKS } from "../navigation/config";

export default function Navbar() {
  const { showToast } = useToast();
  const {
    theme, toggleTheme,
    isMobileOpen, setIsMobileOpen,
    activeView, handleViewChange,
    filters, setFilters,
  } = useSidebar();

  const [searchVal, setSearchVal] = useState(filters.searchQuery);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifMenu, setShowNotifMenu] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showNavFilter, setShowNavFilter] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* ── Scroll detection ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Fullscreen ── */
  const toggleFullscreen = () => {
    const docEl = document.documentElement as any;
    const doc = document as any;
    if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement) {
      const req = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullscreen;
      req?.call(docEl).then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      const exit = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen;
      exit?.call(doc).then(() => setIsFullscreen(false)).catch(() => {});
    }
  };
  useEffect(() => {
    const handler = () => {
      const doc = document as any;
      setIsFullscreen(!!(doc.fullscreenElement || doc.mozFullScreenElement || doc.webkitFullscreenElement));
    };
    document.addEventListener("fullscreenchange", handler);
    document.addEventListener("webkitfullscreenchange", handler);
    return () => {
      document.removeEventListener("fullscreenchange", handler);
      document.removeEventListener("webkitfullscreenchange", handler);
    };
  }, []);

  const profileRef  = useRef<HTMLDivElement>(null);
  const notifRef    = useRef<HTMLDivElement>(null);
  const navFilterRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setSearchVal(filters.searchQuery); }, [filters.searchQuery]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (profileRef.current   && !profileRef.current.contains(e.target as Node))   setShowProfileMenu(false);
      if (notifRef.current     && !notifRef.current.contains(e.target as Node))      setShowNotifMenu(false);
      if (navFilterRef.current && !navFilterRef.current.contains(e.target as Node))  setShowNavFilter(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFilters((prev) => ({ ...prev, searchQuery: searchVal }));
    handleViewChange("rankings");
  };
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value);
    setFilters((prev) => ({ ...prev, searchQuery: e.target.value }));
  };

  /* ── Color palette ── */
  const navBg = scrolled ? "#EFF6FF" : "transparent"; /* Pill color when scrolled */
  const linkColor = scrolled ? "#64748B" : "rgba(255,255,255,0.7)"; 
  const linkActiveColor = scrolled ? "#1E293B" : "#FFFFFF";
  const iconColor = scrolled ? "#64748B" : "rgba(255,255,255,0.7)";
  const iconHoverColor = scrolled ? "#1E293B" : "#FFFFFF";
  const accentColor = "#2563EB";

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 w-full"
      style={{ 
        paddingTop: scrolled ? "12px" : "0", 
        paddingLeft: scrolled ? "24px" : "0", 
        paddingRight: scrolled ? "24px" : "0", 
        transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)" 
      }}
    >
      <nav
        style={{
          background: navBg,
          borderRadius: scrolled ? "100px" : "0px",
          border: scrolled ? "1px solid rgba(37,99,235,0.12)" : "1px solid transparent",
          borderBottom: scrolled ? "1px solid rgba(37,99,235,0.12)" : "1px solid rgba(255,255,255,0.05)",
          boxShadow: scrolled ? "0 8px 32px rgba(37,99,235,0.12), 0 2px 8px rgba(37,99,235,0.06)" : "none",
          transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
          maxWidth: scrolled ? "1400px" : "100%",
          margin: "0 auto",
        }}
      >
        <div
          className="flex items-center justify-between"
          style={{ height: "80px", padding: "0 24px" }}
        >

          {/* ── Logo ── */}
          <div
            onClick={() => handleViewChange("home")}
            className="flex items-center cursor-pointer shrink-0 select-none group"
            style={{ gap: "8px", mixBlendMode: scrolled ? "multiply" : "screen" }}
          >
            <Image
              src="/logo.png"
              alt="Asia University Rankings"
              width={240}
              height={80}
              priority
              unoptimized={true}
              quality={100}
              style={{ 
                height: "64px", 
                width: "auto", 
                objectFit: "contain",
                filter: scrolled ? "none" : "invert(1) grayscale(1) brightness(2)",
                transition: "opacity 0.2s, filter 0.4s" 
              }}
            />
          </div>

          {/* ── Desktop Nav Links (center) ── */}
          <nav className="hidden md:flex items-center" style={{ gap: "4px" }}>
            {TOP_NAV_LINKS.map((link) => {
              const isActive = activeView === link.view;
              const isRankings = link.view === "rankings";
              return (
                <div key={link.label} className="relative flex items-center">
                  <button
                    onClick={() => handleViewChange(link.view)}
                    className="relative px-3 py-2 text-[13px] font-bold uppercase tracking-wider transition-colors font-sans flex items-center"
                    style={{
                      color: isActive ? linkActiveColor : linkColor,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = linkActiveColor;
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.color = linkColor;
                    }}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-[2px] w-4 rounded-full transition-all duration-300"
                        style={{ background: scrolled ? accentColor : "#FFFFFF" }}
                      />
                    )}
                  </button>

                  {/* Quick filter beside Rankings */}
                  {isRankings && (
                    <div className="relative" ref={navFilterRef}>
                      <button
                        type="button"
                        onClick={() => setShowNavFilter(!showNavFilter)}
                        style={{
                          padding: "6px",
                          borderRadius: "8px",
                          border: "none",
                          background: showNavFilter ? "rgba(37,99,235,0.15)" : "transparent",
                          color: showNavFilter ? accentColor : iconColor,
                          cursor: "pointer",
                          transition: "all 0.15s ease",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <SlidersHorizontal style={{ width: "14px", height: "14px" }} />
                      </button>

                      {showNavFilter && (
                        <div style={{
                          position: "absolute", top: "calc(100% + 8px)", left: "0",
                          width: "260px", background: "var(--aur-surface)",
                          border: "1px solid var(--aur-border)", borderRadius: "16px",
                          boxShadow: "0 16px 40px rgba(0,0,0,0.20)", padding: "16px", zIndex: 60,
                          animation: "slideDown 0.25s cubic-bezier(0.16,1,0.3,1) both",
                        }}>
                          <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--aur-text-muted)", marginBottom: "12px" }}>Quick Filters</p>
                          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                            <div>
                              <label style={{ fontSize: "10px", fontWeight: 700, color: "var(--aur-text)", display: "block", marginBottom: "4px" }}>Region / Country</label>
                              <select value={filters.country}
                                onChange={(e) => setFilters(prev => ({ ...prev, country: e.target.value }))}
                                style={{ width: "100%", fontSize: "12px", padding: "8px 10px", borderRadius: "10px", border: "1px solid var(--aur-border)", background: "var(--aur-surface-2)", color: "var(--aur-text)" }}>
                                <option value="">All Regions</option>
                                <option value="Singapore">Singapore</option>
                                <option value="China">China</option>
                                <option value="Japan">Japan</option>
                                <option value="Uzbekistan">Uzbekistan</option>
                                <option value="India">India</option>
                              </select>
                            </div>
                            <div>
                              <label style={{ fontSize: "10px", fontWeight: 700, color: "var(--aur-text)", display: "block", marginBottom: "4px" }}>Max Tuition ($)</label>
                              <input type="range" min="0" max="50000" step="1000"
                                value={filters.tuitionRange[1]}
                                onChange={(e) => setFilters(prev => ({ ...prev, tuitionRange: [prev.tuitionRange[0], parseInt(e.target.value)] }))}
                                style={{ width: "100%", accentColor: accentColor }} />
                              <div style={{ textAlign: "right", fontSize: "10px", fontFamily: "monospace", color: "var(--aur-text-muted)", marginTop: "2px" }}>
                                ${filters.tuitionRange[1].toLocaleString()}
                              </div>
                            </div>
                            <button
                              onClick={() => { setShowNavFilter(false); handleViewChange("rankings"); }}
                              style={{ width: "100%", padding: "10px", background: "#1E293B", color: "#fff", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", borderRadius: "10px", border: "none", cursor: "pointer", transition: "background 0.15s" }}
                              onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = accentColor)}
                              onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#1E293B")}
                            >
                              Apply &amp; View Results
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Universities quick link */}
            <button
              onClick={() => handleViewChange("universities")}
              className="relative px-3 py-2 text-[13px] font-bold uppercase tracking-wider transition-colors font-sans flex items-center"
              style={{ color: activeView === "universities" ? linkActiveColor : linkColor }}
              onMouseEnter={(e) => { e.currentTarget.style.color = linkActiveColor; }}
              onMouseLeave={(e) => { if (activeView !== "universities") e.currentTarget.style.color = linkColor; }}
            >
              Universities
            </button>

            <button
              onClick={() => handleViewChange("analytics")}
              className="relative px-3 py-2 text-[13px] font-bold uppercase tracking-wider transition-colors font-sans flex items-center"
              style={{ color: activeView === "analytics" ? linkActiveColor : linkColor }}
              onMouseEnter={(e) => { e.currentTarget.style.color = linkActiveColor; }}
              onMouseLeave={(e) => { if (activeView !== "analytics") e.currentTarget.style.color = linkColor; }}
            >
              Analytics
            </button>
          </nav>

          {/* ── Right Actions ── */}
          <div className="flex items-center" style={{ gap: "6px" }}>

            {/* Search Bar */}
            <div className="hidden lg:block">
              <form onSubmit={handleSearchSubmit}>
                <div
                  className="flex items-center px-4 h-[36px] rounded-full border transition-all overflow-hidden"
                  style={{
                    background: scrolled ? "rgba(37,99,235,0.04)" : "rgba(255,255,255,0.1)",
                    borderColor: scrolled ? "rgba(37,99,235,0.1)" : "rgba(255,255,255,0.2)",
                    width: "220px",
                  }}
                >
                  <Search className="h-3.5 w-3.5 shrink-0" style={{ color: scrolled ? "rgba(37,99,235,0.5)" : "rgba(255,255,255,0.5)" }} />
                  <input
                    type="text"
                    placeholder="Search universities..."
                      color: "#1E293B", outline: "none", width: "180px",
                      transition: "all 0.2s ease",
                    }}
                    onFocus={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = accentColor; (e.currentTarget as HTMLInputElement).style.boxShadow = "0 0 0 3px rgba(37,99,235,0.15)"; }}
                    onBlur={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "rgba(37,99,235,0.15)"; (e.currentTarget as HTMLInputElement).style.boxShadow = "none"; }}
                  />
                </div>
              </form>
            </div>

            {/* Theme toggle */}
            <button type="button" onClick={toggleTheme}
              style={{ padding: "8px", borderRadius: "10px", border: "none", background: "transparent", color: iconColor, cursor: "pointer", transition: "all 0.15s ease", display: "flex", alignItems: "center" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(37,99,235,0.08)"; (e.currentTarget as HTMLButtonElement).style.color = iconHoverColor; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = iconColor; }}
            >
              {theme === "dark" ? <Sun style={{ width: "16px", height: "16px" }} /> : <Moon style={{ width: "16px", height: "16px" }} />}
            </button>

            {/* Fullscreen */}
            <button type="button" onClick={toggleFullscreen}
              style={{ padding: "8px", borderRadius: "10px", border: "none", background: "transparent", color: iconColor, cursor: "pointer", transition: "all 0.15s ease", display: "flex", alignItems: "center" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(37,99,235,0.08)"; (e.currentTarget as HTMLButtonElement).style.color = iconHoverColor; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = iconColor; }}
            >
              {isFullscreen ? <Minimize2 style={{ width: "16px", height: "16px" }} /> : <Maximize2 style={{ width: "16px", height: "16px" }} />}
            </button>

            {/* Notifications */}
            <div className="relative" ref={notifRef}>
              <button type="button" onClick={() => setShowNotifMenu(!showNotifMenu)}
                style={{ padding: "8px", borderRadius: "10px", border: "none", background: "transparent", color: iconColor, cursor: "pointer", position: "relative", transition: "all 0.15s ease", display: "flex", alignItems: "center" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(37,99,235,0.08)"; (e.currentTarget as HTMLButtonElement).style.color = iconHoverColor; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = iconColor; }}
              >
                <Bell style={{ width: "16px", height: "16px" }} />
                <span style={{ position: "absolute", top: "7px", right: "7px", width: "6px", height: "6px", borderRadius: "50%", background: accentColor, border: "1.5px solid #EFF6FF" }} />
              </button>

              {showNotifMenu && (
                <div style={{
                  position: "absolute", right: "0", top: "calc(100% + 8px)",
                  width: "320px", background: "var(--aur-surface)",
                  border: "1px solid var(--aur-border)", borderRadius: "16px",
                  boxShadow: "0 16px 40px rgba(0,0,0,0.20)", overflow: "hidden", zIndex: 60,
                  animation: "slideDown 0.25s cubic-bezier(0.16,1,0.3,1) both",
                }}>
                  <div style={{ padding: "12px 16px", borderBottom: "1px solid var(--aur-border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--aur-text)" }}>Notifications</span>
                    <span style={{ fontSize: "10px", fontWeight: 700, color: "#1D4ED8", background: "#DBEAFE", padding: "2px 8px", borderRadius: "100px" }}>3 New</span>
                  </div>
                  <div style={{ maxHeight: "260px", overflowY: "auto" }}>
                    {[
                      { id: 1, title: "QS Rankings 2026 Released", time: "10 min ago", desc: "Updated analytical scores and recalculation models.", isNew: true },
                      { id: 2, title: "Uzbekistan Medical Open", time: "2 hrs ago", desc: "Samarkand & Tashkent accepting applications.", isNew: true },
                      { id: 3, title: "Data Audit Completed", time: "1 day ago", desc: "All regional models audited successfully.", isNew: false },
                    ].map((n) => (
                      <div key={n.id} style={{ padding: "12px 16px", borderBottom: "1px solid var(--aur-border)", background: n.isNew ? "rgba(37,99,235,0.04)" : "transparent" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "2px" }}>
                          <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--aur-text)" }}>{n.title}</span>
                          <span style={{ fontSize: "10px", color: "var(--aur-text-muted)", marginLeft: "8px", flexShrink: 0 }}>{n.time}</span>
                        </div>
                        <p style={{ fontSize: "11px", color: "var(--aur-text-muted)", lineHeight: 1.5, margin: 0 }}>{n.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Profile */}
            <div className="relative" ref={profileRef} style={{ borderLeft: "1px solid rgba(37,99,235,0.15)", paddingLeft: "10px", marginLeft: "2px" }}>
              <button type="button" onClick={() => setShowProfileMenu(!showProfileMenu)}
                style={{ display: "flex", alignItems: "center", gap: "6px", border: "none", background: "transparent", cursor: "pointer", padding: "4px" }}
              >
                <div style={{ width: "32px", height: "32px", borderRadius: "10px", background: "rgba(37,99,235,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "#1E293B", fontSize: "11px", fontWeight: 700 }}>
                  US
                </div>
                <ChevronDown style={{ width: "12px", height: "12px", color: iconColor }} />
              </button>

              {showProfileMenu && (
                <div style={{
                  position: "absolute", right: "0", top: "calc(100% + 8px)",
                  width: "210px", background: "var(--aur-surface)",
                  border: "1px solid var(--aur-border)", borderRadius: "16px",
                  boxShadow: "0 16px 40px rgba(0,0,0,0.20)", overflow: "hidden", zIndex: 60,
                  animation: "slideDown 0.25s cubic-bezier(0.16,1,0.3,1) both",
                }}>
                  <div style={{ padding: "12px 16px", borderBottom: "1px solid var(--aur-border)" }}>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--aur-text)" }}>Dr. John Doe</div>
                    <div style={{ fontSize: "11px", color: "var(--aur-text-muted)", marginTop: "1px" }}>j.doe@university.edu</div>
                  </div>
                  {[
                    { label: "My Profile", icon: User, action: () => {} },
                    { label: "Admin Console", icon: Shield, action: () => handleViewChange("admin") },
                  ].map((item) => (
                    <button key={item.label}
                      onClick={() => { item.action(); setShowProfileMenu(false); }}
                      style={{ width: "100%", textAlign: "left", padding: "10px 16px", display: "flex", alignItems: "center", gap: "10px", border: "none", background: "transparent", cursor: "pointer", fontSize: "13px", color: "var(--aur-text)", transition: "background 0.15s" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "var(--aur-hover)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "transparent")}
                    >
                      <item.icon style={{ width: "14px", height: "14px", color: "var(--aur-text-muted)" }} />
                      {item.label}
                    </button>
                  ))}
                  <div style={{ borderTop: "1px solid var(--aur-border)", margin: "4px 0" }} />
                  <button
                    onClick={() => { handleViewChange("login"); setShowProfileMenu(false); }}
                    style={{ width: "100%", textAlign: "left", padding: "10px 16px", display: "flex", alignItems: "center", gap: "10px", border: "none", background: "transparent", cursor: "pointer", fontSize: "13px", color: "#ef4444", transition: "background 0.15s" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#fff1f2")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "transparent")}
                  >
                    <LogOut style={{ width: "14px", height: "14px" }} />
                    Sign Out
                  </button>
                </div>
              )}
            </div>

            {/* GET STARTED CTA */}
            <button
              onClick={() => handleViewChange("rankings")}
              style={{
                padding: "10px 20px",
                background: accentColor,
                color: "#fff",
                fontSize: "13px",
                fontWeight: 700,
                borderRadius: "100px",
                border: "none",
                cursor: "pointer",
                whiteSpace: "nowrap",
                letterSpacing: "0.02em",
                transition: "all 0.2s cubic-bezier(0.16,1,0.3,1)",
                boxShadow: "0 2px 8px rgba(37,99,235,0.30)",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#1D4ED8"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 16px rgba(37,99,235,0.45)"; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = accentColor; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 2px 8px rgba(37,99,235,0.30)"; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; }}
            >
              GET STARTED
            </button>

            {/* Mobile hamburger */}
            <button type="button"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              style={{ padding: "8px", borderRadius: "10px", border: "none", background: "transparent", color: iconColor, cursor: "pointer", display: "none", alignItems: "center" }}
              className="md:hidden flex"
            >
              {isMobileOpen ? <X style={{ width: "20px", height: "20px" }} /> : <Menu style={{ width: "20px", height: "20px" }} />}
            </button>

          </div>
        </div>
      </nav>
    </div>
  );
}
