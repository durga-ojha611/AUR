"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, SlidersHorizontal, ChevronDown } from "lucide-react";
import { useSidebar } from "../navigation/SidebarContext";
import { SIDEBAR_ITEMS, NavItem } from "../navigation/config";
import FilterPanel from "../filters/FilterPanel";

export default function Sidebar() {
  const {
    isCollapsed,
    setIsCollapsed,
    activeView,
    handleViewChange,
    theme,
  } = useSidebar();

  const [isFilterExpanded, setIsFilterExpanded] = useState(false);

  const isItemActive = (item: NavItem) => activeView === item.view;
  const handleItemClick = (item: NavItem) => handleViewChange(item.view);

  const handleFilterAccordionClick = () => {
    if (isCollapsed) {
      setIsCollapsed(false);
      setIsFilterExpanded(true);
    } else {
      setIsFilterExpanded(!isFilterExpanded);
    }
  };

  return (
    <aside
      className={`hidden md:flex flex-col shrink-0 h-[calc(100vh-60px)] sticky top-[60px] border-r transition-all duration-300 z-30 select-none ${
        isCollapsed ? "w-20" : "w-64"
      }`}
      style={{ background: "var(--aur-surface)", borderColor: "var(--aur-border)" }}
    >
      {/* Nav Items */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden p-3 flex flex-col space-y-0.5">
        {SIDEBAR_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = isItemActive(item);
          return (
            <div key={item.id} className="relative group">
              <button
                onClick={() => handleItemClick(item)}
                style={{
                  width: "100%", display: "flex", alignItems: "center",
                  padding: "10px 12px", borderRadius: "12px",
                  fontSize: "11px", fontWeight: 700,
                  textTransform: "uppercase", letterSpacing: "0.06em",
                  border: "none", cursor: "pointer",
                  transition: "all 0.18s ease",
                  background: isActive ? "#E8A020" : "transparent",
                  color: isActive ? "#fff" : "var(--aur-text-muted)",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLButtonElement).style.background = "var(--aur-hover)";
                    (e.currentTarget as HTMLButtonElement).style.color = "var(--aur-text)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                    (e.currentTarget as HTMLButtonElement).style.color = "var(--aur-text-muted)";
                  }
                }}
              >
                {/* Icon */}
                <div style={{ flexShrink: 0, ...(isCollapsed ? { margin: "0 auto" } : { marginRight: "12px" }) }}>
                  <Icon style={{ width: "16px", height: "16px" }} />
                </div>

                {/* Label */}
                {!isCollapsed && (
                  <span style={{ flexGrow: 1, textAlign: "left", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {item.label}
                  </span>
                )}

                {/* Badge */}
                {!isCollapsed && item.badge && (
                  <span style={{
                    fontSize: "8px", padding: "2px 6px", borderRadius: "100px",
                    fontWeight: 700, textTransform: "uppercase", marginLeft: "auto",
                    background: isActive ? "rgba(255,255,255,0.25)" : "#FDF3E0",
                    color: isActive ? "#fff" : "#C88010",
                    border: isActive ? "1px solid rgba(255,255,255,0.3)" : "1px solid rgba(232,160,32,0.25)",
                  }}>
                    {item.badge}
                  </span>
                )}
              </button>

              {/* Collapsed tooltip */}
              {isCollapsed && (
                <div
                  className="group-hover:opacity-100"
                  style={{
                    position: "absolute", left: "calc(100% + 12px)", top: "50%",
                    transform: "translateY(-50%)",
                    padding: "6px 12px", background: "#3D4A5A", color: "#fff",
                    fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em",
                    textTransform: "uppercase", borderRadius: "8px",
                    whiteSpace: "nowrap", pointerEvents: "none",
                    opacity: 0, zIndex: 60, transition: "opacity 0.15s ease",
                    boxShadow: "0 4px 16px rgba(61,74,90,0.25)",
                  }}
                >
                  {item.label}
                </div>
              )}
            </div>
          );
        })}

        {/* Filter Accordion */}
        <div style={{ paddingTop: "12px", borderTop: "1px solid var(--aur-border)", marginTop: "8px" }}>
          <button
            onClick={handleFilterAccordionClick}
            style={{
              width: "100%", display: "flex", alignItems: "center",
              padding: "10px 12px", borderRadius: "12px",
              fontSize: "11px", fontWeight: 700, textTransform: "uppercase",
              letterSpacing: "0.06em", border: "none", cursor: "pointer",
              transition: "all 0.18s ease",
              background: isFilterExpanded && !isCollapsed ? "rgba(232,160,32,0.08)" : "transparent",
              color: isFilterExpanded && !isCollapsed ? "#C88010" : "var(--aur-text-muted)",
            }}
          >
            <div style={{ flexShrink: 0, ...(isCollapsed ? { margin: "0 auto" } : { marginRight: "12px" }) }}>
              <SlidersHorizontal style={{ width: "16px", height: "16px" }} />
            </div>
            {!isCollapsed && (
              <>
                <span style={{ flexGrow: 1, textAlign: "left" }}>Filters</span>
                <ChevronDown style={{
                  width: "14px", height: "14px", transition: "transform 0.2s",
                  transform: isFilterExpanded ? "rotate(180deg)" : "none",
                }} />
              </>
            )}
          </button>

          {isFilterExpanded && !isCollapsed && (
            <div style={{ marginTop: "8px", padding: "12px", borderRadius: "12px", border: "1px solid var(--aur-border)", background: "var(--aur-surface-2)" }}>
              <FilterPanel />
            </div>
          )}
        </div>
      </div>

      {/* Collapse Button */}
      <div style={{ padding: "12px", borderTop: "1px solid var(--aur-border)", display: "flex", justifyContent: "center" }}>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          style={{
            padding: "8px 14px", borderRadius: "10px",
            border: "1.5px solid var(--aur-border)",
            background: "transparent", color: "var(--aur-text-muted)",
            cursor: "pointer", transition: "all 0.18s ease",
            display: "flex", alignItems: "center", gap: "6px",
            fontSize: "10px", fontWeight: 700,
            textTransform: "uppercase", letterSpacing: "0.08em",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "#3D4A5A";
            (e.currentTarget as HTMLButtonElement).style.color = "#fff";
            (e.currentTarget as HTMLButtonElement).style.borderColor = "#3D4A5A";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "transparent";
            (e.currentTarget as HTMLButtonElement).style.color = "var(--aur-text-muted)";
            (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--aur-border)";
          }}
          title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          {isCollapsed
            ? <ChevronRight style={{ width: "16px", height: "16px" }} />
            : <><ChevronLeft style={{ width: "16px", height: "16px" }} /><span>Collapse</span></>
          }
        </button>
      </div>
    </aside>
  );
}
