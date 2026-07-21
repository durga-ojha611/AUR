"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  MapPin,
  X,
  GraduationCap,
  BookOpen,
  Award,
  ChevronDown,
} from "lucide-react";
import { University } from "../data";
import { useSidebar } from "./navigation/SidebarContext";
import { useUniversityData } from "./data/UniversityDataProvider";

// Shown when a campus photo is missing or fails to load
const FALLBACK_CAMPUS_IMAGE =
  "https://images.unsplash.com/photo-1562774053-f5a02f6da861?auto=format&fit=crop&w=800&q=80";

// ── UniversityCard ───────────────────────────────────────────────────────────
interface CardProps {
  uni: University;
  rank: number;
  onClick: () => void;
}

function UniversityCard({ uni, rank, onClick }: CardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      onClick={onClick}
      className="group bg-white border border-slate-100 hover:border-slate-300 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5 flex flex-col h-full"
    >
      {/* Campus Image */}
      <div className="relative h-48 w-full bg-slate-100 overflow-hidden shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element -- requires onError fallback not available in next/image */}
        <img
          src={imgError || !uni.campusPhoto ? FALLBACK_CAMPUS_IMAGE : uni.campusPhoto}
          alt={`${uni.name} campus`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={() => setImgError(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent pointer-events-none" />

        {/* Rank badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-white/90 backdrop-blur-sm text-slate-800 font-mono text-[11px] font-bold shadow border border-white/60">
            <Award className="w-3 h-3 text-amber-500" />
            #{rank}
          </span>
        </div>

        {/* Medicine badge */}
        {uni.hasMedicine && (
          <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-rose-500 text-white font-bold text-[9px] uppercase tracking-wider shadow">
            Med
          </span>
        )}

        {/* University logo */}
        {uni.logo && (
          <div className="absolute bottom-3 left-3 h-10 w-10 bg-white rounded-xl shadow-md overflow-hidden border-2 border-white/80 flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo is a local /public path */}
            <img
              src={uni.logo}
              alt={`${uni.name} logo`}
              className="w-full h-full object-contain p-1"
              loading="lazy"
            />
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4 flex-1 flex flex-col justify-between gap-3">
        <div>
          <h3 className="font-semibold text-slate-900 text-[15px] group-hover:text-[var(--aur-accent)] transition-colors leading-snug line-clamp-2 tracking-tight">
            {uni.name}
          </h3>
          <div className="flex items-center gap-1 mt-1.5 text-[12px] text-slate-500">
            <MapPin className="w-3 h-3 shrink-0" />
            <span>{uni.location}</span>
          </div>

          {/* Subject chips */}
          {uni.subjects.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2.5">
              {uni.subjects.slice(0, 3).map((s) => (
                <span
                  key={s}
                  className="px-2 py-0.5 bg-slate-50 border border-slate-100 text-slate-500 text-[10px] font-medium rounded-md"
                >
                  {s}
                </span>
              ))}
              {uni.subjects.length > 3 && (
                <span className="px-2 py-0.5 bg-slate-50 border border-slate-100 text-slate-400 text-[10px] font-medium rounded-md">
                  +{uni.subjects.length - 3}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-100">
          <div>
            <div className="text-[10px] text-slate-400 uppercase font-semibold tracking-wider">Tuition</div>
            <div className="text-[12px] font-bold text-slate-700 font-mono mt-0.5">{uni.tuition}</div>
          </div>
          <div className="text-right">
            <div className="text-[10px] text-slate-400 uppercase font-semibold tracking-wider">Score</div>
            <div className="text-[18px] font-extrabold text-[var(--aur-accent)] font-mono mt-0.5 leading-none">
              {uni.overall.toFixed(1)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── InstitutionDirectory ─────────────────────────────────────────────────────
interface Props {
  onUniversitySelect: (id: string) => void;
}

export default function InstitutionDirectory({ onUniversitySelect }: Props) {
  const { universities } = useUniversityData();

  const { searchQuery: search, setSearchQuery: setSearch } = useSidebar();
  const [country, setCountry] = useState("All");
  const [medOnly, setMedOnly] = useState(false);

  const countryList = useMemo(
    () => Array.from(new Set(universities.map((u) => u.location))).sort(),
    [universities]
  );

  const hasActiveFilters = search !== "" || country !== "All" || medOnly;

  const filtered = useMemo(
    () =>
      universities.filter((u) => {
        const q = search.toLowerCase();
        return (
          (!search ||
            u.name.toLowerCase().includes(q) ||
            u.location.toLowerCase().includes(q)) &&
          (country === "All" || u.location === country) &&
          (!medOnly || u.hasMedicine)
        );
      }),
    [universities, search, country, medOnly]
  );

  const clearFilters = () => {
    setSearch("");
    setCountry("All");
    setMedOnly(false);
  };

  return (
    <div className="w-full min-h-screen bg-slate-50/60 pb-16">

      {/* ── PAGE HEADER ── */}
      <div className="bg-white border-b border-slate-100 px-4 md:px-8 py-6">
        <div className="max-w-7xl mx-auto space-y-5">

          {/* Title row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <div className="flex items-center gap-1.5 mb-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[var(--aur-accent)]" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--aur-accent)]">
                  Institution Directory
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Explore Asian Universities
              </h1>
              <p className="text-[13px] text-slate-500 mt-1">
                Browse{" "}
                <span className="font-semibold text-slate-700">
                  {universities.length.toLocaleString()}
                </span>{" "}
                ranked institutions across{" "}
                <span className="font-semibold text-slate-700">
                  {countryList.length}
                </span>{" "}
                countries
              </p>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg transition-colors"
                >
                  <X className="w-3 h-3" />
                  Clear filters
                </button>
              )}
              <span className="text-[11px] font-semibold text-slate-500 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg">
                {filtered.length.toLocaleString()} result{filtered.length !== 1 ? "s" : ""}
              </span>
            </div>
          </div>

          {/* ── FILTER ROW ── */}
          <div className="flex flex-wrap gap-2 items-center">

            {/* Search */}
            <div className="relative flex-1 min-w-[200px] max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400 pointer-events-none" />
              <input
                id="institution-search"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name or country…"
                className="w-full pl-9 pr-8 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[13px] text-slate-700 placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:bg-white transition-all"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Country dropdown */}
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
              <select
                id="country-filter"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="appearance-none pl-8 pr-8 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[13px] font-medium text-slate-700 focus:outline-none focus:border-slate-400 focus:bg-white transition-all cursor-pointer"
              >
                <option value="All">All Countries</option>
                {countryList.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
            </div>

            {/* Medicine Only toggle */}
            <button
              id="med-only-toggle"
              onClick={() => setMedOnly((v) => !v)}
              className={`flex items-center gap-1.5 text-[11px] font-bold px-3.5 py-2.5 rounded-xl border transition-all shrink-0 ${
                medOnly
                  ? "bg-rose-500 text-white border-rose-500 shadow-sm"
                  : "bg-white text-slate-600 border-slate-200 hover:border-rose-300 hover:text-rose-600"
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              Medicine Only
            </button>
          </div>
        </div>
      </div>

      {/* ── CARD GRID ── */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">

        {/* Active country label */}
        {country !== "All" && (
          <div className="flex items-center gap-2 mb-5">
            <MapPin className="w-4 h-4 text-slate-400" />
            <span className="text-[13px] font-semibold text-slate-700">{country}</span>
            <span className="text-[12px] text-slate-400">
              — {filtered.length} institution{filtered.length !== 1 ? "s" : ""}
            </span>
            <button
              onClick={() => setCountry("All")}
              className="ml-auto flex items-center gap-1 text-[11px] font-semibold text-slate-400 hover:text-slate-700 transition-colors"
            >
              <X className="w-3 h-3" /> Show all
            </button>
          </div>
        )}

        {filtered.length === 0 ? (
          <div className="py-24 text-center bg-white rounded-2xl border border-slate-100 max-w-sm mx-auto">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
              <Search className="w-5 h-5 text-slate-400" />
            </div>
            <h3 className="text-slate-700 font-semibold text-base mb-1">No results found</h3>
            <p className="text-slate-400 text-sm mb-5">
              Try adjusting your search or filters.
            </p>
            <button
              onClick={clearFilters}
              className="text-[var(--aur-accent)] text-[12px] font-bold hover:underline underline-offset-2"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((uni, i) => (
              <UniversityCard
                key={uni.id}
                uni={uni}
                rank={i + 1}
                onClick={() => onUniversitySelect(uni.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
