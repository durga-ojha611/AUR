/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useMemo } from "react";
import { Search, MapPin, Lock } from "lucide-react";
import { University } from "../data";
import { useSidebar } from "./navigation/SidebarContext";
import { useUniversityData } from "./data/UniversityDataProvider";
import { useAuthGate } from "./auth/AuthGate";
import { PREVIEW_LIMIT } from "./navigation/config";

const COUNTRY_FLAGS: Record<string, string> = {
  China: "", Japan: "", "South Korea": "", Singapore: "",
  "Hong Kong": "", India: "", Taiwan: "", Malaysia: "",
  Thailand: "", Indonesia: "", Uzbekistan: "",
};

interface Props { onUniversitySelect: (id: string) => void; }

function UniversityCard({ uni, rank, onClick }: { uni: University; rank: number; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="group bg-[var(--aur-surface)] border border-[var(--aur-border)] hover:border-[var(--aur-border-strong)] rounded-[20px] overflow-hidden cursor-pointer transition-all duration-300 shadow-[var(--aur-shadow)] hover:shadow-[var(--aur-shadow-lg)] hover:-translate-y-1 flex flex-col h-full"
    >
      {/* Top Image Section */}
      <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
        <img
          src={uni.campusPhoto}
          alt={`${uni.name} Campus`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
        
        {/* Rank Badge */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-amber-500 text-white font-mono text-[11px] font-bold shadow-sm">
          #{rank}
        </div>

        {/* Med Badge */}
        {uni.hasMedicine && (
          <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-rose-500 text-white font-bold text-[9px] uppercase tracking-wider shadow-sm">
            Med
          </div>
        )}

        {/* University Logo - Bottom Left */}
        {uni.logo && (
          <div className="absolute bottom-3 left-3 h-12 w-12 bg-white rounded-lg shadow-md overflow-hidden border border-slate-200 flex items-center justify-center">
            <img
              src={uni.logo}
              alt={`${uni.name} Logo`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="aur-section-title text-[18px] group-hover:text-[var(--aur-accent)] transition-colors leading-snug line-clamp-2">
            {uni.name}
          </h3>
          <div className="flex items-center gap-1.5 mt-2 text-[13px] text-slate-500">
            <span>{COUNTRY_FLAGS[uni.location] ?? ""}</span>
            <span className="font-medium">{uni.location}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
          <div>
            <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Tuition</div>
            <div className="text-[12px] font-bold text-slate-700 font-mono mt-0.5">{uni.tuition}</div>
          </div>
          <div className="text-right">
            <div className="text-[10px] text-[var(--aur-text-muted)] uppercase font-bold tracking-wider">Score</div>
            <div className="text-[16px] font-extrabold text-[var(--aur-accent)] font-mono mt-0.5">{uni.overall.toFixed(1)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function InstitutionDirectory({ onUniversitySelect }: Props) {
  const { universities, loading, error } = useUniversityData();
  const { isAuthenticated, promptSignIn } = useAuthGate();
  const ALL_COUNTRIES = useMemo(
    () => ["All", ...Array.from(new Set(universities.map((u) => u.location))).sort()],
    [universities]
  );
  const { searchQuery: search, setSearchQuery: setSearch } = useSidebar();
  const [country, setCountry] = useState("All");
  const [medOnly, setMedOnly] = useState(false);

  const filtered = useMemo(() =>
    universities.filter((u) => {
      const q = search.toLowerCase();
      return (
        (!search || u.name.toLowerCase().includes(q) || u.location.toLowerCase().includes(q)) &&
        (country === "All" || u.location === country) &&
        (!medOnly || u.hasMedicine)
      );
    }),
    [universities, search, country, medOnly]
  );

  // Preview gating: logged-out visitors see at most PREVIEW_LIMIT institutions.
  const totalMatches = filtered.length;
  const isPreviewCapped = !isAuthenticated && totalMatches > PREVIEW_LIMIT;
  const visible = isPreviewCapped ? filtered.slice(0, PREVIEW_LIMIT) : filtered;

  return (
    <div className="w-full min-h-screen bg-slate-50/60 pb-12">
      {/* ── TOP BAR ── */}
      <div className="bg-white border-b border-slate-100 px-4 md:px-8 py-5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
            <div>
              <h1 className="font-serif text-2xl font-bold text-slate-900">Institution Directory</h1>
              <p className="text-[12px] text-slate-400 mt-0.5">{universities.length} universities across Asia</p>
            </div>
            <span className="text-[11px] text-slate-400 font-semibold bg-slate-50 border border-slate-200/60 px-3 py-1.5 rounded-lg self-start md:self-auto">
              {filtered.length} result{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>

          {/* Filters row */}
          <div className="flex flex-wrap gap-2.5 items-center">
            {/* Search */}
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name or country…"
                className="w-full pl-9 pr-4 py-2 rounded-lg bg-slate-50 border border-slate-200 text-[13px] text-slate-700 placeholder-slate-400 focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>

            {/* Country */}
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="text-[12px] font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-amber-400 cursor-pointer"
            >
              {ALL_COUNTRIES.map((c) => (
                <option key={c} value={c}>
                  {c === "All" ? "All Countries" : `${c}`}
                </option>
              ))}
            </select>

            {/* Med toggle */}
            <button
              onClick={() => setMedOnly((v) => !v)}
              className={`text-[11px] font-bold px-3.5 py-2 rounded-lg border transition-all ${
                medOnly
                  ? "bg-rose-500 text-white border-rose-500 shadow-sm"
                  : "bg-slate-50 text-slate-500 border-slate-200 hover:border-rose-300 hover:text-rose-500"
              }`}
            >
              Medicine Only
            </button>
          </div>
        </div>
      </div>

      {/* ── CARD GRID ── */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
        {error && !loading && (
          <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
            Live rankings couldn&apos;t be loaded right now — showing a bundled sample instead. Please try again later.
          </div>
        )}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="bg-[var(--aur-surface)] border border-[var(--aur-border)] rounded-[20px] overflow-hidden animate-pulse"
              >
                <div className="h-44 w-full bg-slate-100" />
                <div className="p-5 space-y-3">
                  <div className="h-4 w-3/4 bg-slate-100 rounded" />
                  <div className="h-3 w-1/2 bg-slate-100 rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="py-20 text-center bg-white rounded-2xl border border-slate-100 max-w-lg mx-auto mt-6">
            <MapPin className="h-8 w-8 text-amber-250 mx-auto mb-2" />
            <p className="text-slate-400 text-sm">No universities found matching your filters.</p>
            <button
              onClick={() => { setSearch(""); setCountry("All"); setMedOnly(false); }}
              className="mt-3 text-amber-500 text-[12px] font-bold hover:text-amber-600 underline underline-offset-2"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visible.map((uni, i) => (
                <UniversityCard
                  key={uni.id}
                  uni={uni}
                  rank={i + 1}
                  onClick={() => onUniversitySelect(uni.id)}
                />
              ))}
            </div>

            {isPreviewCapped && (
              <div className="relative mt-8 overflow-hidden rounded-2xl border border-[#1A365D]/15 bg-gradient-to-b from-white to-[#1A365D]/[0.06] px-6 py-10 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1A365D]/10 text-[#1A365D]">
                  <Lock className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1A365D]">
                  {totalMatches - PREVIEW_LIMIT} more institutions
                </h3>
                <p className="mx-auto mt-2 mb-6 max-w-sm text-sm leading-relaxed text-slate-500">
                  You&apos;re viewing {PREVIEW_LIMIT} of {totalMatches}. Create a free account to explore the full directory, compare institutions, and save your shortlist.
                </p>
                <button
                  type="button"
                  onClick={() => promptSignIn(`Sign in to browse all ${totalMatches} institutions.`)}
                  className="rounded-lg bg-[#1A365D] px-6 py-3 text-sm font-bold text-white shadow-md transition-colors hover:bg-blue-900"
                >
                  Unlock all {totalMatches} institutions
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
