"use client";

import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";

import {
  Search,
  BookOpen,
  GraduationCap,
  ChevronRight,
  MapPin,
  Globe2,
  BarChart3,
  Database,
  Clock,
  TrendingUp,
  TrendingDown,
  ArrowRight,
  Bell,
  Building2,
  LineChart,
  Activity,
  Mail,
} from "lucide-react";
import { MOCK_UNIVERSITIES, FEATURED_ARTICLES, University, Article } from "../data";
import "./home/ref-home.css";

/* ── Reusable scroll-reveal wrapper ── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const fadeUpItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

function RevealSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  
  return (
    <div
      ref={ref}
      className={className}
    >
      {children}
    </div>
  );
}

type SuggestionPick =
  | { kind: "uni"; uni: University }
  | { kind: "article"; article: Article }
  | { kind: "view-all" };

const COUNTRY_FLAGS: Record<string, string> = {
  China: "🇨🇳",
  Singapore: "🇸🇬",
  Japan: "🇯🇵",
  "South Korea": "🇰🇷",
  India: "🇮🇳",
  Malaysia: "🇲🇾",
  Thailand: "🇹🇭",
  Vietnam: "🇻🇳",
  Indonesia: "🇮🇩",
  Uzbekistan: "🇺🇿",
  Kazakhstan: "🇰🇿",
  Taiwan: "🇹🇼",
  "Hong Kong": "🇭🇰",
  Philippines: "🇵🇭",
  Pakistan: "🇵🇰",
  Bangladesh: "🇧🇩",
  Nepal: "🇳🇵",
  Myanmar: "🇲🇲",
  Cambodia: "🇰🇭",
  Mongolia: "🇲🇳",
};

/** Light cards themed around each country's iconic monument */
const COUNTRY_THEME: Record<
  string,
  { code: string; monument: string; accent: string; bg: string; image: string; imagePos?: string }
> = {
  Singapore: {
    code: "SG",
    monument: "Marina Bay Sands",
    accent: "#ef4444",
    bg: "linear-gradient(135deg, #fff5f5 0%, #ffffff 62%)",
    image: "https://images.unsplash.com/photo-1525621488860-1f28d3244604?auto=format&fit=crop&w=600&q=80",
    imagePos: "70% center",
  },
  "Hong Kong": {
    code: "HK",
    monument: "Victoria Harbour",
    accent: "#dc2626",
    bg: "linear-gradient(135deg, #fff7f7 0%, #ffffff 62%)",
    image: "https://images.unsplash.com/photo-1536596788103-df0d9994a3e3?auto=format&fit=crop&w=600&q=80",
    imagePos: "center 40%",
  },
  "South Korea": {
    code: "KR",
    monument: "Gyeongbokgung Palace",
    accent: "#2563eb",
    bg: "linear-gradient(135deg, #eff6ff 0%, #ffffff 62%)",
    image: "https://images.unsplash.com/photo-1517154428173-52d99888fc9e?auto=format&fit=crop&w=600&q=80",
    imagePos: "center",
  },
  China: {
    code: "CN",
    monument: "Great Wall of China",
    accent: "#dc2626",
    bg: "linear-gradient(135deg, #fffbeb 0%, #ffffff 62%)",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=600&q=80",
    imagePos: "center",
  },
  Japan: {
    code: "JP",
    monument: "Mount Fuji",
    accent: "#be123c",
    bg: "linear-gradient(135deg, #fff1f2 0%, #ffffff 62%)",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80",
    imagePos: "center 35%",
  },
  India: {
    code: "IN",
    monument: "Taj Mahal",
    accent: "#ea580c",
    bg: "linear-gradient(135deg, #fff7ed 0%, #ffffff 55%, #f0fdf4 100%)",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80",
    imagePos: "center",
  },
  Taiwan: {
    code: "TW",
    monument: "Taipei 101",
    accent: "#1d4ed8",
    bg: "linear-gradient(135deg, #eff6ff 0%, #ffffff 62%)",
    image: "https://images.unsplash.com/photo-1470006985013-6c54c888a04f?auto=format&fit=crop&w=600&q=80",
    imagePos: "center bottom",
  },
  Malaysia: {
    code: "MY",
    monument: "Petronas Towers",
    accent: "#1e40af",
    bg: "linear-gradient(135deg, #eff6ff 0%, #ffffff 55%, #fefce8 100%)",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=600&q=80",
    imagePos: "center",
  },
  Thailand: {
    code: "TH",
    monument: "Wat Arun",
    accent: "#b45309",
    bg: "linear-gradient(135deg, #fffbeb 0%, #ffffff 62%)",
    image: "https://images.unsplash.com/photo-1552465011-5ec7e39b7250?auto=format&fit=crop&w=600&q=80",
    imagePos: "center",
  },
  Vietnam: {
    code: "VN",
    monument: "Ha Long Bay",
    accent: "#059669",
    bg: "linear-gradient(135deg, #ecfdf5 0%, #ffffff 62%)",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=600&q=80",
    imagePos: "center",
  },
  Indonesia: {
    code: "ID",
    monument: "Borobudur Temple",
    accent: "#c2410c",
    bg: "linear-gradient(135deg, #fff7ed 0%, #ffffff 62%)",
    image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=600&q=80",
    imagePos: "center",
  },
  Uzbekistan: {
    code: "UZ",
    monument: "Registan, Samarkand",
    accent: "#0284c7",
    bg: "linear-gradient(135deg, #f0f9ff 0%, #ffffff 62%)",
    image: "https://images.unsplash.com/photo-1578895101403-2fc6c0e161bb?auto=format&fit=crop&w=600&q=80",
    imagePos: "center",
  },
  Kazakhstan: {
    code: "KZ",
    monument: "Bayterek Tower",
    accent: "#0891b2",
    bg: "linear-gradient(135deg, #ecfeff 0%, #ffffff 62%)",
    image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=600&q=80",
    imagePos: "center",
  },
  Philippines: {
    code: "PH",
    monument: "Mayon Volcano",
    accent: "#2563eb",
    bg: "linear-gradient(135deg, #eff6ff 0%, #ffffff 62%)",
    image: "https://images.unsplash.com/photo-1518509562904-7a059f5c4d0c?auto=format&fit=crop&w=600&q=80",
    imagePos: "center",
  },
  Pakistan: {
    code: "PK",
    monument: "Faisal Mosque",
    accent: "#16a34a",
    bg: "linear-gradient(135deg, #f0fdf4 0%, #ffffff 62%)",
    image: "https://images.unsplash.com/photo-1571875257727-b31a4db7c926?auto=format&fit=crop&w=600&q=80",
    imagePos: "center",
  },
  Bangladesh: {
    code: "BD",
    monument: "Sixty Dome Mosque",
    accent: "#15803d",
    bg: "linear-gradient(135deg, #f0fdf4 0%, #ffffff 62%)",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80",
    imagePos: "center",
  },
  Nepal: {
    code: "NP",
    monument: "Boudhanath Stupa",
    accent: "#dc2626",
    bg: "linear-gradient(135deg, #fff7ed 0%, #ffffff 62%)",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=600&q=80",
    imagePos: "center",
  },
  Myanmar: {
    code: "MM",
    monument: "Shwedagon Pagoda",
    accent: "#ca8a04",
    bg: "linear-gradient(135deg, #fefce8 0%, #ffffff 62%)",
    image: "https://images.unsplash.com/photo-1559592410-5c6a0c2fc866?auto=format&fit=crop&w=600&q=80",
    imagePos: "center",
  },
  Cambodia: {
    code: "KH",
    monument: "Angkor Wat",
    accent: "#b45309",
    bg: "linear-gradient(135deg, #fff7ed 0%, #ffffff 62%)",
    image: "https://images.unsplash.com/photo-1609137144813-b021b859d386?auto=format&fit=crop&w=600&q=80",
    imagePos: "center",
  },
  Mongolia: {
    code: "MN",
    monument: "Genghis Khan Statue",
    accent: "#1d4ed8",
    bg: "linear-gradient(135deg, #eff6ff 0%, #ffffff 62%)",
    image: "https://images.unsplash.com/photo-1548013144-3a63e8ce00a3?auto=format&fit=crop&w=600&q=80",
    imagePos: "center",
  },
};

function getCountryTheme(country: string) {
  return (
    COUNTRY_THEME[country] ?? {
      code: country.slice(0, 2).toUpperCase(),
      monument: country,
      accent: "#f97316",
      bg: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)",
      image: "https://images.unsplash.com/photo-1562774053-f5a02f6da861?auto=format&fit=crop&w=600&q=80",
      imagePos: "center",
    }
  );
}

const LIVE_UPDATES = [
  { text: "New Rankings Published", time: "2 min ago", color: "#f59e0b" },
  { text: "Tsinghua University climbs to #1", time: "15 min ago", color: "#2563eb" },
  { text: "Singapore institutions gain +2.4 avg", time: "32 min ago", color: "#f59e0b" },
];

const METHODOLOGY = [
  { label: "Research Impact", pct: 40, color: "#3b82f6" },
  { label: "Teaching Excellence", pct: 25, color: "#10b981" },
  { label: "Employability", pct: 15, color: "#f59e0b" },
  { label: "International Outlook", pct: 15, color: "#8b5cf6" },
  { label: "Industry Income", pct: 5, color: "#64748b" },
];

const PULSE_ITEMS = [
  "Tsinghua leads research output index",
  "NUS tops employability in ASEAN",
  "Uzbekistan medical programs surge +18%",
  "Japan universities rise in citations",
  "Singapore avg score hits 94.2",
  "New English-medium tracks in Central Asia",
];

function highlightMatch(text: string, query: string) {
  const q = query.trim();
  if (!q) return text;
  const lower = text.toLowerCase();
  const idx = lower.indexOf(q.toLowerCase());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="bg-amber-100 text-amber-800 px-0.5">{text.slice(idx, idx + q.length)}</mark>
      {text.slice(idx + q.length)}
    </>
  );
}

function Sparkline({ values, color = "#3b82f6" }: { values: number[]; color?: string }) {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;
  const pts = values
    .map((v, i) => {
      const x = (i / (values.length - 1)) * 48;
      const y = 14 - ((v - min) / range) * 12;
      return `${x},${y}`;
    })
    .join(" ");
  return (
    <svg width="52" height="16" className="inline-block" aria-hidden>
      <polyline fill="none" stroke={color} strokeWidth="1.5" points={pts} />
    </svg>
  );
}

function MiniLineChart({ color, trend }: { color: string; trend?: "up" | "down" }) {
  const pts = trend === "down" ? "0,12 12,8 24,10 36,6 48,8" : "0,10 12,8 24,6 36,4 48,2";
  return (
    <svg width="100%" height="48" viewBox="0 0 48 16" preserveAspectRatio="none" className="mt-2">
      <polyline fill="none" stroke={color} strokeWidth="1.5" points={pts} opacity="0.9" />
      <polyline fill={`${color}22`} stroke="none" points={`${pts} 48,16 0,16`} />
    </svg>
  );
}

function RadarChart({ universities }: { universities: University[] }) {
  const axes = ["Innovation", "Research", "Teaching", "Employability", "Intl"];
  const n = axes.length;
  const cx = 120;
  const cy = 120;
  const r = 80;

  const angle = (i: number) => (Math.PI * 2 * i) / n - Math.PI / 2;
  const point = (i: number, val: number) => {
    const rad = (val / 100) * r;
    return { x: cx + Math.cos(angle(i)) * rad, y: cy + Math.sin(angle(i)) * rad };
  };

  const gridLevels = [0.25, 0.5, 0.75, 1];
  const colors = ["#f97316", "#3b82f6", "#10b981", "#8b5cf6"];

  const getVals = (u: University) => [
    u.research * 0.95,
    u.research,
    u.teaching,
    u.employability,
    u.intlStudents,
  ];

  return (
    <svg viewBox="0 0 240 240" className="w-full max-w-[280px] mx-auto">
      {gridLevels.map((lvl) => {
        const pts = axes
          .map((_, i) => {
            const p = point(i, lvl * 100);
            return `${p.x},${p.y}`;
          })
          .join(" ");
        return (
          <polygon key={lvl} points={pts} fill="none" stroke="rgba(148,163,184,0.15)" strokeWidth="1" />
        );
      })}
      {axes.map((label, i) => {
        const outer = point(i, 100);
        return (
          <g key={label}>
            <line x1={cx} y1={cy} x2={outer.x} y2={outer.y} stroke="rgba(148,163,184,0.12)" />
            <text
              x={outer.x + (outer.x - cx) * 0.12}
              y={outer.y + (outer.y - cy) * 0.12}
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="8"
            >
              {label}
            </text>
          </g>
        );
      })}
      {universities.map((uni, ui) => {
        const vals = getVals(uni);
        const pts = vals
          .map((v, i) => {
            const p = point(i, v);
            return `${p.x},${p.y}`;
          })
          .join(" ");
        return (
          <polygon
            key={uni.id}
            points={pts}
            fill={`${colors[ui]}22`}
            stroke={colors[ui]}
            strokeWidth="1.5"
          />
        );
      })}
    </svg>
  );
}

function getCountryStats() {
  const map = new Map<string, University[]>();
  MOCK_UNIVERSITIES.forEach((u) => {
    if (!map.has(u.location)) map.set(u.location, []);
    map.get(u.location)!.push(u);
  });
  return Array.from(map.entries())
    .map(([country, unis]) => {
      const sorted = [...unis].sort((a, b) => b.overall - a.overall);
      return {
        country,
        count: unis.length,
        avgScore: unis.reduce((s, u) => s + u.overall, 0) / unis.length,
        topUni: sorted[0],
      };
    })
    .sort((a, b) => b.avgScore - a.avgScore)
    .slice(0, 8);
}

function rankTrend(uni: University) {
  const delta = (uni.history[1] ?? uni.history[0]) - uni.history[0];
  return { delta, improved: delta > 0 };
}

function scoreHistory(uni: University, metric: "research" | "employability" | "overall") {
  const base = metric === "research" ? uni.research : metric === "employability" ? uni.employability : uni.overall;
  return uni.history.map((rank, i) => Math.min(100, base - i * 0.8 + (5 - rank) * 0.5));
}

interface HomepageProps {
  onSearchSubmit: (query: string) => void;
  onUniversitySelect: (id: string) => void;
  onArticleSelect: (article: Article) => void;
  onViewChange: (view: string) => void;
}

export default function Homepage({
  onSearchSubmit,
  onUniversitySelect,
  onArticleSelect,
  onViewChange,
}: HomepageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<{ universities: University[]; articles: Article[] }>({
    universities: [],
    articles: [],
  });
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  const [articleTab, setArticleTab] = useState<"featured" | "reports" | "insights">("featured");

  const suggestionRef = useRef<HTMLDivElement>(null);
  const methodologyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchQuery.trim().length === 0) {
      setSuggestions({ universities: [], articles: [] });
      return;
    }
    const filteredUnis = MOCK_UNIVERSITIES.filter(
      (uni) =>
        uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        uni.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        uni.subjects.some((sub) => sub.toLowerCase().includes(searchQuery.toLowerCase()))
    ).slice(0, 5);
    const filteredArticles = FEATURED_ARTICLES.filter(
      (art) =>
        art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 3);
    setSuggestions({ universities: filteredUnis, articles: filteredArticles });
  }, [searchQuery]);

  const flatSuggestions = useMemo((): SuggestionPick[] => {
    const items: SuggestionPick[] = [];
    suggestions.universities.forEach((uni) => items.push({ kind: "uni", uni }));
    suggestions.articles.forEach((article) => items.push({ kind: "article", article }));
    if (searchQuery.trim().length > 0) items.push({ kind: "view-all" });
    return items;
  }, [suggestions, searchQuery]);

  useEffect(() => setActiveSuggestionIndex(-1), [searchQuery]);

  const activateSuggestion = useCallback(
    (item: SuggestionPick) => {
      if (item.kind === "uni") {
        onUniversitySelect(item.uni.id);
        setShowSuggestions(false);
      } else if (item.kind === "article") {
        onArticleSelect(item.article);
        setShowSuggestions(false);
      } else {
        onSearchSubmit(searchQuery);
        onViewChange("rankings");
        setShowSuggestions(false);
      }
    },
    [onArticleSelect, onSearchSubmit, onUniversitySelect, onViewChange, searchQuery]
  );

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      setShowSuggestions(false);
      return;
    }
    if (!showSuggestions || flatSuggestions.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveSuggestionIndex((i) => Math.min(i + 1, flatSuggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveSuggestionIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && activeSuggestionIndex >= 0) {
      e.preventDefault();
      activateSuggestion(flatSuggestions[activeSuggestionIndex]);
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (suggestionRef.current && !suggestionRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearchSubmit(searchQuery);
      onViewChange("rankings");
      setShowSuggestions(false);
    }
  };

  const topTen = useMemo(
    () => [...MOCK_UNIVERSITIES].sort((a, b) => b.overall - a.overall).slice(0, 10),
    []
  );

  const countryStats = useMemo(() => getCountryStats(), []);
  const compareUnis = topTen.slice(0, 4);
  const uniqueCountries = useMemo(() => new Set(MOCK_UNIVERSITIES.map((u) => u.location)).size, []);

  const TESTIMONIALS = [
    { text: "The data at AUR is life-changing. It helped me bridge the gap between choosing the right university and guessing.", name: "Priya S.", role: "NUS Graduate", color: "#EBAA40" },
    { text: "I gained immense clarity through AUR's structured rankings and regional breakdowns.", name: "Arjun M.", role: "IIT Bombay Alumni", color: "#8BB19E" },
    { text: "A truly user-friendly platform that provides perfect guidance for students choosing Asian universities.", name: "Li Wei", role: "Tsinghua Student", color: "#7AAFB0" },
    { text: "AUR offers a unique ecosystem for data-driven university selection you simply can't find anywhere else.", name: "Yuki T.", role: "UTokyo Applicant", color: "#1C2531" },
    { text: "The ranking methodology is well-balanced and clearly structured, providing a solid analytical foundation.", name: "Sana K.", role: "Osaka University", color: "#EBAA40" },
    { text: "I feel much more confident in my university choice thanks to AUR's transparent data insights.", name: "Raj P.", role: "BITS Pilani", color: "#8BB19E" },
    { text: "Everything about AUR is designed to help students make informed decisions. Truly transformative.", name: "Min J.", role: "Seoul Nat'l Univ.", color: "#7AAFB0" },
    { text: "The perfect place to compare institutions, research programs, and explore Central Asia opportunities.", name: "Asel N.", role: "Samarkand Medical", color: "#1C2531" },
  ];

  const ACHIEVEMENTS = [
    { emoji: "🏆", title: "Featured in QS Asia Rankings 2026", desc: "Recognized as a leading data intelligence platform for higher education in the Asia Pacific region." },
    { emoji: "🎓", title: "Partnership with 50+ Institutions", desc: "Formal data partnerships with over 50 leading Asian universities ensuring real-time accuracy." },
    { emoji: "🌏", title: "Invited to Asia Education Summit", desc: "Our team represented AUR at the Asia Education Innovation Summit in Singapore." },
    { emoji: "📊", title: "1 Million Data Points Analyzed", desc: "In 2025, AUR crossed 1 million verified data points across research, employment, and faculty metrics." },
    { emoji: "🩺", title: "Central Asia Medical Hub Guide", desc: "Asia's most comprehensive guide to medical education in Uzbekistan, Kazakhstan and Central Asia." },
    { emoji: "🤝", title: "Knowledge Partner – UniExpo 2026", desc: "Served as Knowledge Partner at UniExpo 2026 helping students navigate Asian university choices." },
  ];

  return (
    <div className="ref-home flex-grow w-full relative">

      {/* ── HERO ── */}
      <section className="ref-hero">
        <div className="ref-hero-grid">
          <div className="ref-hero-centered">
            <span className="ref-hero-eyebrow">Asia University Rankings — 2026</span>
            <h1
              className="text-[clamp(2.75rem,7vw,5.25rem)] font-medium leading-[1.08] mb-6"
              style={{ color: "var(--sf-charcoal)", letterSpacing: "-0.03em" }}
            >
              No matter how dark the path,<br />
              <span className="sf-underline">AUR stands beside you.</span>
            </h1>
            <p
              className="text-lg leading-relaxed max-w-2xl mx-auto mb-10 font-normal"
              style={{ color: "rgba(28,37,49,0.68)" }}
            >
              Asia University Rankings provides the tools, data, and global network
              needed to turn your academic foundation into a professional legacy.
            </p>
            <div className="sf-hero-ctas">
              <button type="button" className="ref-btn-primary" onClick={() => onViewChange("rankings")}>
                Explore Rankings <ChevronRight className="h-4 w-4" />
              </button>
              <button type="button" className="ref-btn-outline" onClick={() => onViewChange("methodology")}>
                Learn More
              </button>
            </div>
          </div>
          <div className="ref-hero-image-wrap mt-8">
            <img
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1600&q=80"
              alt="University Campus"
            />
          </div>
        </div>
      </section>

      {/* ── LOGO BAND ── */}
      <div className="sf-logo-band">
        <p>Mentors from Leading Global Companies</p>
        <div className="sf-logo-list">
          {[
            { label: "Google",      color: "#4285F4" },
            { label: "Microsoft",   color: "#737373" },
            { label: "Infosys",     color: "#0056b3" },
            { label: "Wipro",       color: "#2B529B" },
            { label: "Accenture",   color: "#A100FF" },
            { label: "Amazon",      color: "#FF9900" },
            { label: "Meta",        color: "#1877F2" },
          ].map((co) => (
            <span key={co.label} className="sf-logo-item" style={{ color: co.color }}>
              {co.label}
            </span>
          ))}
        </div>
      </div>

      {/* ── BENTO STATS ── */}
      <RevealSection className="ref-section ref-section-alt">
        <div className="mb-10">
          <p className="ref-label mb-2">By The Numbers</p>
          <h2 className="text-3xl font-semibold" style={{ color: "var(--sf-charcoal)", letterSpacing: "-0.02em" }}>
            Making a Difference in the Student Community
          </h2>
          <p className="text-sm mt-3" style={{ color: "var(--sf-slate)" }}>
            At AUR, we are dedicated to making a positive impact through data, mentorship, and global access.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1 — Amber */}
          <div className="sf-bento-card" style={{ background: "var(--sf-amber)", color: "var(--sf-charcoal)" }}>
            <div className="sf-bento-num">1,500+</div>
            <div className="sf-bento-label">Students Reached Online</div>
            <div className="sf-bento-desc">
              Our online platform reached over 1,500 students with precise, accessible university intelligence.
            </div>
          </div>
          {/* Card 2 — Photo */}
          <div className="sf-bento-card md:col-span-2 p-0 overflow-hidden min-h-[280px]" style={{ borderRadius: "28px" }}>
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80"
              alt="Graduation"
              className="w-full h-full object-cover"
              style={{ minHeight: "280px" }}
            />
          </div>
          {/* Card 3 — Sage */}
          <div className="sf-bento-card" style={{ background: "var(--sf-sage)", color: "#fff" }}>
            <div className="sf-bento-num">30+</div>
            <div className="sf-bento-label">Countries Covered</div>
            <div className="sf-bento-desc">
              Regional intelligence from East Asia, South Asia, Southeast Asia, and Central Asia.
            </div>
          </div>
          {/* Card 4 — Teal */}
          <div className="sf-bento-card" style={{ background: "var(--sf-teal)", color: "var(--sf-charcoal)" }}>
            <div className="sf-bento-num">1M+</div>
            <div className="sf-bento-label">Data Points Analyzed</div>
            <div className="sf-bento-desc">
              Every ranking, citation count, and employability score traceable to source.
            </div>
          </div>
          {/* Card 5 — Charcoal */}
          <div className="sf-bento-card" style={{ background: "var(--sf-charcoal)", color: "#fff" }}>
            <div className="sf-bento-num">15+</div>
            <div className="sf-bento-label">Years of Historical Data</div>
            <div className="sf-bento-desc">
              Longitudinal trend analysis spanning over a decade of academic performance shifts.
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ── ACHIEVEMENTS GRID ── */}
      <RevealSection className="ref-section">
        <div className="mb-10">
          <p className="ref-label mb-2">Our Achievements</p>
          <h2 className="text-3xl font-semibold" style={{ color: "var(--sf-charcoal)", letterSpacing: "-0.02em" }}>
            Celebrating Milestones
          </h2>
          <p className="text-sm mt-3" style={{ color: "var(--sf-slate)" }}>
            Success stories from our journey of empowering students and institutions across Asia.
          </p>
        </div>
        <div className="sf-achieve-grid">
          {ACHIEVEMENTS.map((a) => (
            <div key={a.title} className="sf-achieve-card">
              <div className="sf-achieve-icon">{a.emoji}</div>
              <div className="sf-achieve-title">{a.title}</div>
              <div className="sf-achieve-desc">{a.desc}</div>
            </div>
          ))}
        </div>
      </RevealSection>

      {/* ── TESTIMONIALS MARQUEE ── */}
      <RevealSection className="ref-section ref-section-alt overflow-hidden">
        <div className="text-center mb-10">
          <p className="ref-label mb-2">Community Feedback</p>
          <h2 className="text-3xl font-semibold" style={{ color: "var(--sf-charcoal)", letterSpacing: "-0.02em" }}>
            Voices from Our Students
          </h2>
        </div>
        <div className="sf-testimonial-track-outer mb-5">
          <div className="sf-testimonial-track">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <div key={i} className="sf-testimonial-card">
                <div className="sf-testimonial-stars">★★★★★</div>
                <p className="sf-testimonial-text">{t.text}</p>
                <div className="sf-testimonial-author">
                  <div className="sf-testimonial-avatar" style={{ background: t.color }}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="sf-testimonial-name">{t.name}</div>
                    <div className="sf-testimonial-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="sf-testimonial-track-outer">
          <div className="sf-testimonial-track-2">
            {[...TESTIMONIALS.slice(4), ...TESTIMONIALS, ...TESTIMONIALS.slice(0, 4)].map((t, i) => (
              <div key={i} className="sf-testimonial-card">
                <div className="sf-testimonial-stars">★★★★★</div>
                <p className="sf-testimonial-text">{t.text}</p>
                <div className="sf-testimonial-author">
                  <div className="sf-testimonial-avatar" style={{ background: t.color }}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="sf-testimonial-name">{t.name}</div>
                    <div className="sf-testimonial-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>


      {/* ── Live Top 10 ── */}
      <RevealSection className="ref-section">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
          <div>
            <span className="ref-label">Rankings Engine</span>
            <h2 className="text-2xl font-bold mt-1">Live Top 10 Universities</h2>
          </div>
          <button type="button" className="ref-btn-primary text-[11px]" onClick={() => onViewChange("rankings")}>
            Analyze All Universities
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="ref-card-light ref-table-wrap shadow-lg">
          <table className="ref-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>University</th>
                <th>Country</th>
                <th>Score</th>
                <th>Trend</th>
                <th className="hidden md:table-cell">Research</th>
                <th className="hidden md:table-cell">Employability</th>
                <th className="hidden lg:table-cell">International</th>
              </tr>
            </thead>
            <tbody>
              {topTen.map((uni, idx) => {
                const trend = rankTrend(uni);
                return (
                  <tr
                    key={uni.id}
                    className="cursor-pointer"
                    onClick={() => onUniversitySelect(uni.id)}
                  >
                    <td>
                      <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${
                        idx === 0 ? "bg-[var(--ref-amber)] text-white"
                        : idx < 3 ? "bg-[var(--ref-amber-light)] text-[var(--ref-amber-dark)]"
                        : "bg-[var(--aur-surface-2)] text-[var(--aur-text-muted)]"
                      }`}>
                        {idx + 1}
                      </span>
                    </td>
                    <td className="font-semibold text-slate-900 max-w-[180px] truncate">{uni.name}</td>
                    <td>
                      <span className="mr-1">{COUNTRY_FLAGS[uni.location] ?? "🌏"}</span>
                      {uni.location}
                    </td>
                    <td className="font-mono font-bold">{uni.overall.toFixed(1)}</td>
                    <td>
                      <span className={`inline-flex items-center gap-0.5 text-xs font-semibold ${trend.improved ? "ref-trend-up" : "ref-trend-down"}`}>
                        {trend.improved ? <TrendingUp className="h-3.5 w-3.5" /> : <TrendingDown className="h-3.5 w-3.5" />}
                        {Math.abs(trend.delta).toFixed(1)}
                      </span>
                    </td>
                    <td className="hidden md:table-cell">
                      <Sparkline values={scoreHistory(uni, "research")} color="#3b82f6" />
                    </td>
                    <td className="hidden md:table-cell">
                      <Sparkline values={scoreHistory(uni, "employability")} color="#10b981" />
                    </td>
                    <td className="hidden lg:table-cell">
                      <Sparkline values={[uni.intlStudents - 8, uni.intlStudents - 4, uni.intlStudents - 2, uni.intlStudents - 1, uni.intlStudents]} color="#8b5cf6" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="text-[10px] text-[var(--ref-muted)] mt-3">* Filterable by location, program &amp; tuition in Rankings Engine.</p>
      </RevealSection>

      {/* ── Explore by Country (light cards, per-country theme) ── */}
      <RevealSection className="ref-section pt-0 ref-country-section">
        <span className="ref-label">Regional Intelligence</span>
        <h2 className="text-2xl font-bold mt-1 mb-6">Explore by Country</h2>
        <div className="ref-country-grid"    >
          {countryStats.map((c) => {
            const theme = getCountryTheme(c.country);
            return (
              <button 
                key={c.country}
                type="button"
                className="ref-country-card ref-country-card--light text-left"
                style={
                  {
                    "--country-accent": theme.accent,
                    "--country-bg": theme.bg,
                    "--country-image": `url(${theme.image})`,
                    "--country-image-pos": theme.imagePos ?? "center",
                  } as React.CSSProperties
                }
                onClick={() => {
                  onSearchSubmit(c.country);
                  onViewChange("rankings");
                }}
              >
                <div className="ref-country-monument" aria-hidden="true" />
                <div className="ref-country-body">
                  <span className="ref-country-code">{theme.code}</span>
                  <span className="ref-country-monument-label">{theme.monument}</span>
                  <div className="ref-country-name">{c.country}</div>
                  <div className="ref-country-meta">{c.count} universities</div>
                  <div className="ref-country-avg" style={{ color: "var(--ref-amber-dark)" }}>Avg {c.avgScore.toFixed(1)}</div>
                  <div className="ref-country-top truncate">Top: {c.topUni.name}</div>
                </div>
              </button>
            );
          })}
        </div>
      </RevealSection>

      {/* ── Methodology ── */}
      <RevealSection className="ref-section pt-0">
        <div className="ref-card p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center" ref={methodologyRef} id="methodology">
          <div className="flex justify-center">
            <div className="ref-donut" />
          </div>
          <div>
            <span className="ref-label">Ranking Methodology</span>
            <h2 className="text-2xl font-bold mt-1 mb-4">How We Score Institutions</h2>
            <p className="text-sm text-[var(--ref-muted)] mb-6 leading-relaxed">
              Our composite index blends research output, teaching quality, graduate outcomes, and global outlook
              — recalculated in real time from audited institutional data.
            </p>
            <ul className="space-y-3">
              {METHODOLOGY.map((m) => (
                <li key={m.label} className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full shrink-0" style={{ background: m.color }} />
                    {m.label}
                  </span>
                  <span className="font-mono font-bold">{m.pct}%</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </RevealSection>

      {/* ── Discovery Hub ── */}
      <RevealSection className="ref-section pt-0">
        <span className="ref-label">Discovery Hub</span>
        <h2 className="text-2xl font-bold mt-1 mb-4">Insights &amp; Analysis</h2>
        <div className="ref-article-tabs flex gap-6 border-b border-[var(--ref-border)] mb-6">
          {(
            [
              { id: "featured" as const, label: "Featured Insights" },
              { id: "reports" as const, label: "Latest Reports" },
              { id: "insights" as const, label: "Regional Briefings" },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setArticleTab(tab.id)}
              className={`pb-3 text-xs font-bold uppercase tracking-wider transition-colors ${articleTab === tab.id ? "active" : "text-[var(--ref-muted)]"}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"    >
          {FEATURED_ARTICLES.map((article) => (
            <button
              key={article.id}
              type="button"
              
              onClick={() => onArticleSelect(article)}
              className="ref-card text-left overflow-hidden group hover:border-blue-300 transition-colors"
            >
              <div className="aspect-video overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={article.image}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <span className="ref-label text-[9px]">Insight</span>
                <h3 className="font-bold text-sm mt-2 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-xs text-[var(--ref-muted)] line-clamp-2 mb-3">{article.contentSummary}</p>
                <span className="text-[10px] text-[var(--ref-muted)]">{article.date} · {article.readTime}</span>
              </div>
            </button>
          ))}
        </div>
      </RevealSection>

      {/* ── Comparison + Analytics ── */}
      <RevealSection className="ref-section pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="ref-card p-6">
            <span className="ref-label">Comparison Tool</span>
            <h2 className="text-xl font-bold mt-1 mb-2">University Comparison</h2>
            <p className="text-xs text-[var(--ref-muted)] mb-4">Top 4 institutions across key performance axes</p>
            <RadarChart universities={compareUnis} />
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              {compareUnis.map((u, i) => (
                <span key={u.id} className="text-[10px] px-2 py-1 rounded border border-[var(--ref-border)]">
                  <span className="inline-block w-2 h-2 rounded-full mr-1" style={{ background: ["#f97316", "#3b82f6", "#10b981", "#8b5cf6"][i] }} />
                  {u.name.split(" ")[0]}
                </span>
              ))}
            </div>
            <button
              type="button"
              className="ref-btn-outline w-full mt-4 justify-center text-[11px]"
              onClick={() => onViewChange("rankings")}
            >
              Open Full Comparison
            </button>
          </div>

          <div>
            <span className="ref-label">Real-Time Analytics</span>
            <h2 className="text-xl font-bold mt-1 mb-4">Live Performance Dashboard</h2>
            <div className="ref-analytics-grid">
              {[
                { title: "Live Rankings Updates", icon: LineChart, stat: "+12 shifts" },
                { title: "Research Output Growth", icon: Activity, stat: "+18.7%" },
                { title: "Country Performance", icon: BarChart3, stat: "Singapore 94.2" },
                { title: "Institution Performance", icon: TrendingUp, stat: "Tsinghua 98.2" },
              ].map((card) => (
                <div key={card.title} className="ref-analytics-card">
                  <div className="flex items-center gap-2 mb-1">
                    <card.icon className="h-4 w-4" style={{ color: "#1E293B" }} />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--ref-muted)]">{card.title}</span>
                  </div>
                  <div className="font-mono font-bold text-lg" style={{ color: "#1E293B" }}>{card.stat}</div>
                  <MiniLineChart color="#64748B" trend="up" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ── Pulse Ticker ── */}
      <div className="ref-pulse-ticker">
        <div className="ref-pulse-track">
          {[...PULSE_ITEMS, ...PULSE_ITEMS].map((item, i) => (
            <span key={`${item}-${i}`} className="text-xs text-[var(--ref-muted)] inline-flex items-center gap-2">
              <Activity className="h-3 w-3" style={{ color: "#64748B" }} />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── Trusted By ── */}
      <section className="ref-section py-8">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--ref-muted)] mb-6">
          Trusted by Leading Institutions
        </p>
        <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
          {topTen.slice(0, 6).map((u) => (
            <span key={u.id} className="text-sm font-bold tracking-wide text-slate-500">
              {u.name.split(" ")[0].toUpperCase()}
            </span>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <RevealSection className="ref-section pt-0 pb-16">
        <div className="sf-cta-banner p-12 md:p-20">
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--sf-amber)" }}>
              Ready to Forge Your Future?
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-5 text-white" style={{ letterSpacing: "-0.02em" }}>
              Join thousands of students bridging the gap between academics and industry excellence.
            </h2>
            <p className="text-base mb-10" style={{ color: "rgba(255,255,255,0.60)" }}>
              Access live rankings, institutional analytics, and regional insights trusted across Asia.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                type="button"
                onClick={() => onViewChange("rankings")}
                className="inline-flex items-center gap-2 font-semibold text-sm px-7 py-3.5 rounded-full transition-all"
                style={{ background: "var(--sf-amber)", color: "var(--sf-charcoal)", border: "2px solid var(--sf-amber)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#fff"; (e.currentTarget as HTMLButtonElement).style.borderColor = "#fff"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "var(--sf-amber)"; (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--sf-amber)"; }}
              >
                Get Started Now <ChevronRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => onViewChange("methodology")}
                className="inline-flex items-center gap-2 font-semibold text-sm px-7 py-3.5 rounded-full transition-all"
                style={{ background: "transparent", color: "rgba(255,255,255,0.80)", border: "2px solid rgba(255,255,255,0.30)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.10)"; (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.60)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.30)"; }}
              >
                Contact Admissions
              </button>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ── Footer ── */}
      <footer style={{ background: "var(--sf-charcoal)", color: "rgba(255,255,255,0.70)" }}>
        <div className="ref-section py-16">
          <div className="ref-footer-grid">
            {/* Brand col */}
            <div>
              <div className="font-bold text-xl mb-3 text-white tracking-tight">
                ASIA <span style={{ color: "var(--sf-amber)" }}>UNIVERSITY</span> RANKINGS
              </div>
              <p className="text-xs leading-relaxed max-w-xs mb-6" style={{ color: "rgba(255,255,255,0.50)" }}>
                Empowering next-gen innovators and bridging the gap between academic foundation and industry excellence.
              </p>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" style={{ color: "var(--sf-amber)" }} />
                <input
                  type="email"
                  placeholder="Subscribe to newsletter"
                  className="rounded-lg px-3 py-1.5 text-xs w-44 focus:outline-none"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", color: "#fff" }}
                />
                <button
                  type="button"
                  className="text-xs font-bold px-4 py-1.5 rounded-full transition-all"
                  style={{ background: "var(--sf-amber)", color: "var(--sf-charcoal)" }}
                >
                  Subscribe
                </button>
              </div>
            </div>

            {/* Link cols */}
            {[
              { title: "Explore", links: [["Rankings Engine", "rankings"], ["Universities", "universities"], ["Analytics", "analytics"], ["Methodology", "methodology"]] },
              { title: "Resources", links: [["Insights Hub", "home"], ["Reports", "home"], ["Regional Guides", "home"], ["Compare Tool", "rankings"]] },
              { title: "Connect", links: [["About AUR", "settings"], ["Contact Us", "settings"], ["Privacy Policy", "settings"], ["Terms of Service", "settings"]] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-4 text-white">{col.title}</h4>
                <ul className="space-y-3">
                  {col.links.map(([label, view]) => (
                    <li key={label}>
                      <button
                        type="button"
                        onClick={() => onViewChange(view)}
                        className="text-xs transition-colors hover:text-white"
                        style={{ color: "rgba(255,255,255,0.50)" }}
                      >
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
              © 2026 Asia University Rankings. All rights reserved.
            </span>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service", "Refund Policy"].map((t) => (
                <button key={t} type="button" onClick={() => onViewChange("settings")}
                  className="text-xs transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.35)" }}>
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
