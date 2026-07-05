(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/components/RankingsEngine.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RankingsEngine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-table/build/lib/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$table$2d$core$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/table-core/build/lib/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sliders-horizontal.mjs [app-client] (ecmascript) <export default as SlidersHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.mjs [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.mjs [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.mjs [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-check-big.mjs [app-client] (ecmascript) <export default as CheckSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square.mjs [app-client] (ecmascript) <export default as Square>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.mjs [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.mjs [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.mjs [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FilterX$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel-x.mjs [app-client] (ecmascript) <export default as FilterX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$navigation$2f$SidebarContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/navigation/SidebarContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
// Preset weights
const DEFAULT_WEIGHTS = {
    citations: 20,
    research: 20,
    employability: 20,
    intlStudents: 20,
    teaching: 20
};
function RankingsEngine({ searchQuery, onSearchQueryChange, selectedUniIds, onToggleCompare, onUniversitySelect }) {
    _s();
    const focusRing = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--aur-text)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]";
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const { filters } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$navigation$2f$SidebarContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"])();
    // 1. Core State
    const [sorting, setSorting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: "calculatedRank",
            desc: false
        }
    ]);
    const [locations, setLocations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedSubjects, setSelectedSubjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedLanguages, setSelectedLanguages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isWeightsDrawerOpen, setIsWeightsDrawerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Custom metric weights state
    const [weights, setWeights] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_WEIGHTS);
    // 2. Deserialize state from URL Search Params on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RankingsEngine.useEffect": ()=>{
            const locParam = searchParams.get("locations");
            const subParam = searchParams.get("subjects");
            const langParam = searchParams.get("languages");
            const searchParam = searchParams.get("search");
            const wCit = searchParams.get("w_cit");
            const wRes = searchParams.get("w_res");
            const wEmp = searchParams.get("w_emp");
            const wIntl = searchParams.get("w_intl");
            const wTeach = searchParams.get("w_teach");
            if (locParam) setLocations(locParam.split(","));
            if (subParam) setSelectedSubjects(subParam.split(","));
            if (langParam) setSelectedLanguages(langParam.split(","));
            if (searchParam) onSearchQueryChange(searchParam);
            if (wCit || wRes || wEmp || wIntl || wTeach) {
                setWeights({
                    citations: wCit ? parseInt(wCit) : DEFAULT_WEIGHTS.citations,
                    research: wRes ? parseInt(wRes) : DEFAULT_WEIGHTS.research,
                    employability: wEmp ? parseInt(wEmp) : DEFAULT_WEIGHTS.employability,
                    intlStudents: wIntl ? parseInt(wIntl) : DEFAULT_WEIGHTS.intlStudents,
                    teaching: wTeach ? parseInt(wTeach) : DEFAULT_WEIGHTS.teaching
                });
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["RankingsEngine.useEffect"], []);
    // 3. Serialize state back to URL query strings smoothly
    // We use window.history.replaceState to prevent Next.js from triggering heavy  flushes or re-renders
    const serializeStateToUrl = (newSearch, newLocs, newSubs, newLangs, newWeights)=>{
        const params = new URLSearchParams();
        if (newSearch) params.set("search", newSearch);
        if (newLocs.length > 0) params.set("locations", newLocs.join(","));
        if (newSubs.length > 0) params.set("subjects", newSubs.join(","));
        if (newLangs.length > 0) params.set("languages", newLangs.join(","));
        // Only serialize  weights if they differ from default
        if (JSON.stringify(newWeights) !== JSON.stringify(DEFAULT_WEIGHTS)) {
            params.set("w_cit", newWeights.citations.toString());
            params.set("w_res", newWeights.research.toString());
            params.set("w_emp", newWeights.employability.toString());
            params.set("w_intl", newWeights.intlStudents.toString());
            params.set("w_teach", newWeights.teaching.toString());
        }
        const queryString = params.toString();
        const url = queryString ? `?view=rankings&${queryString}` : "?view=rankings";
        window.history.replaceState({
            ...window.history.state,
            as: url,
            url
        }, "", url);
    };
    const handleSearchChange = (val)=>{
        onSearchQueryChange(val);
        serializeStateToUrl(val, locations, selectedSubjects, selectedLanguages, weights);
    };
    const handleLocationToggle = (loc)=>{
        const next = locations.includes(loc) ? locations.filter((l)=>l !== loc) : [
            ...locations,
            loc
        ];
        setLocations(next);
        serializeStateToUrl(searchQuery, next, selectedSubjects, selectedLanguages, weights);
    };
    const handleSubjectToggle = (sub)=>{
        const next = selectedSubjects.includes(sub) ? selectedSubjects.filter((s)=>s !== sub) : [
            ...selectedSubjects,
            sub
        ];
        setSelectedSubjects(next);
        serializeStateToUrl(searchQuery, locations, next, selectedLanguages, weights);
    };
    const handleLanguageToggle = (lang)=>{
        const next = selectedLanguages.includes(lang) ? selectedLanguages.filter((l)=>l !== lang) : [
            ...selectedLanguages,
            lang
        ];
        setSelectedLanguages(next);
        serializeStateToUrl(searchQuery, locations, selectedSubjects, next, weights);
    };
    const handleWeightChange = (key, val)=>{
        const next = {
            ...weights,
            [key]: val
        };
        setWeights(next);
        serializeStateToUrl(searchQuery, locations, selectedSubjects, selectedLanguages, next);
    };
    const handleResetFilters = ()=>{
        setLocations([]);
        setSelectedSubjects([]);
        setSelectedLanguages([]);
        onSearchQueryChange("");
        setWeights(DEFAULT_WEIGHTS);
        router.replace("?view=rankings");
    };
    // 4. Data Processing: Client-Side Custom Weights Recalculation Engine
    const processedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RankingsEngine.useMemo[processedData]": ()=>{
            const totalWeight = weights.citations + weights.research + weights.employability + weights.intlStudents + weights.teaching;
            // Apply  formula weights to recalculate scores dynamically
            const recalculated = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_UNIVERSITIES"].map({
                "RankingsEngine.useMemo[processedData].recalculated": (uni)=>{
                    let calculatedScore = uni.overall;
                    if (totalWeight > 0) {
                        calculatedScore = (uni.citations * weights.citations + uni.research * weights.research + uni.employability * weights.employability + uni.intlStudents * weights.intlStudents + uni.teaching * weights.teaching) / totalWeight;
                    }
                    return {
                        ...uni,
                        calculatedScore: Math.round(calculatedScore * 10) / 10
                    };
                }
            }["RankingsEngine.useMemo[processedData].recalculated"]);
            // Re-rank based on recalculated scores
            const sorted = [
                ...recalculated
            ].sort({
                "RankingsEngine.useMemo[processedData].sorted": (a, b)=>b.calculatedScore - a.calculatedScore
            }["RankingsEngine.useMemo[processedData].sorted"]);
            return sorted.map({
                "RankingsEngine.useMemo[processedData]": (uni, index)=>({
                        ...uni,
                        calculatedRank: index + 1
                    })
            }["RankingsEngine.useMemo[processedData]"]);
        }
    }["RankingsEngine.useMemo[processedData]"], [
        weights
    ]);
    // 5. Apply filters
    const deferredSearchQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"])(searchQuery);
    const filteredData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RankingsEngine.useMemo[filteredData]": ()=>{
            return processedData.filter({
                "RankingsEngine.useMemo[filteredData]": (uni)=>{
                    // 1. Search Query (combine props.searchQuery and filters.searchQuery)
                    const query = (filters.searchQuery || deferredSearchQuery || "").toLowerCase();
                    const matchesSearch = query === "" || uni.name.toLowerCase().includes(query) || uni.location.toLowerCase().includes(query);
                    // 2. Location (combine locations state and filters.country)
                    const matchesLoc = (locations.length === 0 || locations.includes(uni.location)) && (filters.country === "" || uni.location === filters.country);
                    // 3. Subject (combine selectedSubjects state and filters.subjects)
                    const matchesSub = (selectedSubjects.length === 0 || uni.subjects.some({
                        "RankingsEngine.useMemo[filteredData]": (sub)=>selectedSubjects.includes(sub)
                    }["RankingsEngine.useMemo[filteredData]"])) && (filters.subjects.length === 0 || uni.subjects.some({
                        "RankingsEngine.useMemo[filteredData]": (sub)=>filters.subjects.includes(sub)
                    }["RankingsEngine.useMemo[filteredData]"]));
                    // 4. Language filter (keep existing local language filter)
                    const matchesLang = selectedLanguages.length === 0 || uni.languages.some({
                        "RankingsEngine.useMemo[filteredData]": (lang)=>selectedLanguages.includes(lang)
                    }["RankingsEngine.useMemo[filteredData]"]);
                    // 5. QS Rank Range (calculatedRank is from processedData)
                    const rank = uni.calculatedRank;
                    const matchesRank = rank >= filters.qsRange[0] && rank <= filters.qsRange[1];
                    // 6. Tuition Range
                    const tuitionVal = parseInt(uni.tuition.replace(/[^0-9]/g, "")) || 0;
                    const matchesTuition = tuitionVal >= filters.tuitionRange[0] && tuitionVal <= filters.tuitionRange[1];
                    // 7. Public / Private
                    let matchesType = true;
                    if (filters.isPublic !== null) {
                        // Prefer data-driven flag if present; fall back to legacy ID-based rule for compatibility.
                        const legacyIsPublic = ![
                            "akfa-univ",
                            "tashkent-webster",
                            "yonsei",
                            "korea-univ"
                        ].includes(uni.id);
                        const isPublic = typeof uni.isPublic === "boolean" ? uni.isPublic : legacyIsPublic;
                        matchesType = isPublic === filters.isPublic;
                    }
                    // 8. Scholarship Only
                    let matchesScholarship = true;
                    if (filters.scholarshipOnly) {
                        // Prefer data-driven flag if present; fall back to legacy ID-based rule for compatibility.
                        const legacyHasScholarship = [
                            "tsinghua",
                            "nus",
                            "peking",
                            "tokyo",
                            "samarkand-med",
                            "tashkent-med",
                            "akfa-univ",
                            "malaya"
                        ].includes(uni.id);
                        const hasScholarship = typeof uni.hasScholarship === "boolean" ? uni.hasScholarship : legacyHasScholarship;
                        matchesScholarship = hasScholarship;
                    }
                    return matchesSearch && matchesLoc && matchesSub && matchesLang && matchesRank && matchesTuition && matchesType && matchesScholarship;
                }
            }["RankingsEngine.useMemo[filteredData]"]);
        }
    }["RankingsEngine.useMemo[filteredData]"], [
        processedData,
        deferredSearchQuery,
        locations,
        selectedSubjects,
        selectedLanguages,
        filters
    ]);
    // 6. Extract unique values for filter dropdown options
    const uniqueLocations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RankingsEngine.useMemo[uniqueLocations]": ()=>Array.from(new Set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_UNIVERSITIES"].map({
                "RankingsEngine.useMemo[uniqueLocations]": (u)=>u.location
            }["RankingsEngine.useMemo[uniqueLocations]"]))).sort()
    }["RankingsEngine.useMemo[uniqueLocations]"], []);
    const uniqueSubjects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RankingsEngine.useMemo[uniqueSubjects]": ()=>Array.from(new Set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_UNIVERSITIES"].flatMap({
                "RankingsEngine.useMemo[uniqueSubjects]": (u)=>u.subjects
            }["RankingsEngine.useMemo[uniqueSubjects]"]))).sort()
    }["RankingsEngine.useMemo[uniqueSubjects]"], []);
    const uniqueLanguages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RankingsEngine.useMemo[uniqueLanguages]": ()=>Array.from(new Set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_UNIVERSITIES"].flatMap({
                "RankingsEngine.useMemo[uniqueLanguages]": (u)=>u.languages
            }["RankingsEngine.useMemo[uniqueLanguages]"]))).sort()
    }["RankingsEngine.useMemo[uniqueLanguages]"], []);
    const rankingInsights = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RankingsEngine.useMemo[rankingInsights]": ()=>{
            const data = filteredData;
            const total = data.length || 1;
            const countryCounts = data.reduce({
                "RankingsEngine.useMemo[rankingInsights].countryCounts": (acc, uni)=>{
                    acc.set(uni.location, (acc.get(uni.location) ?? 0) + 1);
                    return acc;
                }
            }["RankingsEngine.useMemo[rankingInsights].countryCounts"], new Map());
            const topCountry = Array.from(countryCounts.entries()).sort({
                "RankingsEngine.useMemo[rankingInsights]": (a, b)=>b[1] - a[1]
            }["RankingsEngine.useMemo[rankingInsights]"])[0]?.[0] ?? "N/A";
            const averageScore = data.reduce({
                "RankingsEngine.useMemo[rankingInsights]": (sum, uni)=>sum + uni.calculatedScore
            }["RankingsEngine.useMemo[rankingInsights]"], 0) / total;
            const medicineCount = data.filter({
                "RankingsEngine.useMemo[rankingInsights]": (uni)=>uni.hasMedicine
            }["RankingsEngine.useMemo[rankingInsights]"]).length;
            const mostImproved = data.map({
                "RankingsEngine.useMemo[rankingInsights]": (uni)=>({
                        uni,
                        improvement: uni.history.length > 1 ? uni.history[uni.history.length - 1] - uni.history[0] : 0
                    })
            }["RankingsEngine.useMemo[rankingInsights]"]).sort({
                "RankingsEngine.useMemo[rankingInsights]": (a, b)=>b.improvement - a.improvement
            }["RankingsEngine.useMemo[rankingInsights]"])[0];
            return [
                {
                    label: "Top Country",
                    value: topCountry,
                    detail: `${countryCounts.get(topCountry) ?? 0} matching institutions`,
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"]
                },
                {
                    label: "Average Score",
                    value: averageScore.toFixed(1),
                    detail: "Across visible results",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"]
                },
                {
                    label: "Medicine Programs",
                    value: medicineCount.toString(),
                    detail: `${Math.round(medicineCount / total * 100)}% of current index`,
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"]
                },
                {
                    label: "Most Improved",
                    value: mostImproved?.uni.name.split(" ")[0] ?? "N/A",
                    detail: mostImproved && mostImproved.improvement > 0 ? `+${mostImproved.improvement} rank movement` : "Stable ranking set",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"]
                }
            ];
        }
    }["RankingsEngine.useMemo[rankingInsights]"], [
        filteredData
    ]);
    // 7. Column Definitions for @tanstack/react-table
    const columns = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RankingsEngine.useMemo[columns]": ()=>[
                {
                    id: "calculatedRank",
                    header: "Rank",
                    accessorKey: "calculatedRank",
                    cell: {
                        "RankingsEngine.useMemo[columns]": ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `aur-rank-badge aur-tabular ${row.original.calculatedRank <= 3 ? "aur-rank-badge--elite" : ""}`,
                                children: row.original.calculatedRank
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 345,
                                columnNumber: 11
                            }, this)
                    }["RankingsEngine.useMemo[columns]"]
                },
                {
                    id: "name",
                    header: "University Name",
                    accessorKey: "name",
                    cell: {
                        "RankingsEngine.useMemo[columns]": ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-left font-sans font-bold text-slate-900 hover:text-amber-700 dark:text-slate-100 dark:hover:text-cyber-yellow transition-colors cursor-pointer",
                                onClick: {
                                    "RankingsEngine.useMemo[columns]": ()=>onUniversitySelect(row.original.id)
                                }["RankingsEngine.useMemo[columns]"],
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "truncate max-w-[11rem] sm:max-w-[17rem] lg:max-w-[21rem]",
                                        children: row.original.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                        lineNumber: 360,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center text-[10px] text-slate-400 font-mono font-medium uppercase mt-0.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                className: "h-3 w-3 mr-1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                lineNumber: 362,
                                                columnNumber: 15
                                            }, this),
                                            row.original.location
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                        lineNumber: 361,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 359,
                                columnNumber: 11
                            }, this)
                    }["RankingsEngine.useMemo[columns]"]
                },
                {
                    id: "calculatedScore",
                    header: "Score",
                    accessorKey: "calculatedScore",
                    cell: {
                        "RankingsEngine.useMemo[columns]": ({ getValue })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "aur-score-pill aur-tabular text-[var(--aur-text)]",
                                children: getValue().toFixed(1)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 373,
                                columnNumber: 11
                            }, this)
                    }["RankingsEngine.useMemo[columns]"]
                },
                {
                    id: "citations",
                    header: "Citations",
                    accessorKey: "citations",
                    cell: {
                        "RankingsEngine.useMemo[columns]": ({ getValue })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-slate-600 dark:text-slate-300 aur-tabular",
                                children: getValue().toFixed(0)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 383,
                                columnNumber: 11
                            }, this)
                    }["RankingsEngine.useMemo[columns]"]
                },
                {
                    id: "research",
                    header: "Research",
                    accessorKey: "research",
                    cell: {
                        "RankingsEngine.useMemo[columns]": ({ getValue })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-slate-600 dark:text-slate-300 aur-tabular",
                                children: getValue().toFixed(0)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 391,
                                columnNumber: 11
                            }, this)
                    }["RankingsEngine.useMemo[columns]"]
                },
                {
                    id: "employability",
                    header: "Employability",
                    accessorKey: "employability",
                    cell: {
                        "RankingsEngine.useMemo[columns]": ({ getValue })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-slate-600 dark:text-slate-300 aur-tabular",
                                children: getValue().toFixed(0)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 399,
                                columnNumber: 11
                            }, this)
                    }["RankingsEngine.useMemo[columns]"]
                },
                {
                    id: "tuition",
                    header: "Tuition / Yr",
                    accessorKey: "tuition",
                    cell: {
                        "RankingsEngine.useMemo[columns]": ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex min-w-[5.5rem] justify-end font-mono text-xs text-slate-500 dark:text-slate-300 bg-slate-50 dark:bg-cyber-gray border border-slate-200 dark:border-cyber-border px-1.5 py-0.5",
                                children: row.original.tuition
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 407,
                                columnNumber: 11
                            }, this)
                    }["RankingsEngine.useMemo[columns]"]
                },
                {
                    id: "compare",
                    header: "Compare",
                    cell: {
                        "RankingsEngine.useMemo[columns]": ({ row })=>{
                            const isSelected = selectedUniIds.includes(row.original.id);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: {
                                    "RankingsEngine.useMemo[columns]": ()=>onToggleCompare(row.original.id)
                                }["RankingsEngine.useMemo[columns]"],
                                className: `aur-btn-ghost aur-focus-ring ${focusRing} ${isSelected ? "aur-btn-ghost--active" : ""}`,
                                children: isSelected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__["CheckSquare"], {
                                            className: "h-3.5 w-3.5 text-[var(--aur-text)]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                            lineNumber: 427,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px]",
                                            children: "Added"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                            lineNumber: 428,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__["Square"], {
                                            className: "h-3.5 w-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                            lineNumber: 432,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px]",
                                            children: "Compare"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                            lineNumber: 433,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 418,
                                columnNumber: 13
                            }, this);
                        }
                    }["RankingsEngine.useMemo[columns]"]
                }
            ]
    }["RankingsEngine.useMemo[columns]"], [
        selectedUniIds,
        onToggleCompare,
        onUniversitySelect
    ]);
    // 8. TanStack Table Instance
    const table = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useReactTable"])({
        data: filteredData,
        columns,
        state: {
            sorting
        },
        onSortingChange: setSorting,
        getCoreRowModel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$table$2d$core$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreRowModel"])(),
        getSortedRowModel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$table$2d$core$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSortedRowModel"])(),
        getFilteredRowModel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$table$2d$core$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFilteredRowModel"])()
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "aur-rankings-shell mx-auto w-full max-w-[1600px] px-3 sm:px-5 lg:px-8 py-6 sm:py-8 font-sans flex-grow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "aur-rankings-hero mb-6 sm:mb-8 aur-hero-accent flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "aur-caption",
                                children: "Engine & Analytics Database"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 463,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "aur-section-title text-3xl md:text-4xl leading-tight mt-2",
                                children: "Asia Institutional Ranking Table"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 464,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-[var(--aur-text-muted)] font-mono mt-3 tracking-wide",
                                children: [
                                    "Index refreshed Â· Jun 2026 Â· ",
                                    filteredData.length,
                                    " institutions indexed"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 467,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                        lineNumber: 462,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setIsWeightsDrawerOpen(true),
                        className: `aur-rankings-action mt-2 md:mt-0 inline-flex w-full sm:w-auto items-center justify-center px-5 py-2.5 text-[10px] font-bold uppercase tracking-wider transition-all aur-focus-ring ${focusRing}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__["SlidersHorizontal"], {
                                className: "h-4 w-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 478,
                                columnNumber: 11
                            }, this),
                            "Weights Recalculator"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                        lineNumber: 473,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                lineNumber: 461,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "aur-rankings-insights grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8",
                children: rankingInsights.map((insight)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "aur-rankings-insight-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "aur-caption block text-slate-400 dark:text-slate-500",
                                                children: insight.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                lineNumber: 488,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-1 truncate text-xl font-bold text-slate-900 dark:text-white",
                                                children: insight.value
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                lineNumber: 491,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                        lineNumber: 487,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "aur-rankings-insight-icon",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(insight.icon, {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                            lineNumber: 496,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                        lineNumber: 495,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 486,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400",
                                children: insight.detail
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 499,
                                columnNumber: 13
                            }, this)
                        ]
                    }, insight.label, true, {
                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                        lineNumber: 485,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                lineNumber: 483,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "aur-filter-deck aur-rankings-filter grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5 mb-6 sm:mb-8 items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "sm:col-span-2 xl:col-span-4 aur-caption text-slate-400 dark:text-slate-500 -mb-1",
                        children: "Refine index"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                        lineNumber: 508,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex min-h-[5.75rem] flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "aur-caption block text-slate-400 dark:text-slate-500 mb-2",
                                children: "Search"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 514,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Search...",
                                        value: searchQuery,
                                        onChange: (e)=>handleSearchChange(e.target.value),
                                        className: "aur-input pl-9"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                        lineNumber: 518,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "absolute left-3 top-2.5 h-3.5 w-3.5 text-[var(--aur-text-muted)]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                        lineNumber: 525,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 517,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                        lineNumber: 513,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex min-h-[5.75rem] flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "aur-caption block text-slate-400 dark:text-slate-500 mb-2",
                                children: "Location"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 531,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    onChange: (e)=>{
                                        if (e.target.value) handleLocationToggle(e.target.value);
                                        e.target.value = "";
                                    },
                                    className: "aur-input",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "Filter Location..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                            lineNumber: 542,
                                            columnNumber: 15
                                        }, this),
                                        uniqueLocations.map((loc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: loc,
                                                children: [
                                                    loc,
                                                    " ",
                                                    locations.includes(loc) ? "âœ“" : ""
                                                ]
                                            }, loc, true, {
                                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                lineNumber: 544,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                    lineNumber: 535,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 534,
                                columnNumber: 11
                            }, this),
                            locations.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-h-6 flex flex-wrap gap-1 mt-1.5",
                                children: locations.map((loc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        onClick: ()=>handleLocationToggle(loc),
                                        className: "inline-flex max-w-full items-center rounded-sm text-[9px] font-mono border border-slate-350 bg-white dark:bg-cyber-gray dark:border-cyber-border text-slate-700 dark:text-slate-300 px-1.5 py-0.5 cursor-pointer hover:border-red-500 hover:text-red-500",
                                        children: [
                                            loc,
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "h-2.5 w-2.5 ml-1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                lineNumber: 559,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, loc, true, {
                                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                        lineNumber: 554,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 552,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                        lineNumber: 530,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex min-h-[5.75rem] flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "aur-caption block text-slate-400 dark:text-slate-500 mb-2",
                                children: "Subject Focus"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 568,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    onChange: (e)=>{
                                        if (e.target.value) handleSubjectToggle(e.target.value);
                                        e.target.value = "";
                                    },
                                    className: "aur-input",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "Filter Subject..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                            lineNumber: 579,
                                            columnNumber: 15
                                        }, this),
                                        uniqueSubjects.map((sub)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: sub,
                                                children: [
                                                    sub,
                                                    " ",
                                                    selectedSubjects.includes(sub) ? "âœ“" : ""
                                                ]
                                            }, sub, true, {
                                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                lineNumber: 581,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                    lineNumber: 572,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 571,
                                columnNumber: 11
                            }, this),
                            selectedSubjects.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-h-6 flex flex-wrap gap-1 mt-1.5",
                                children: selectedSubjects.map((sub)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        onClick: ()=>handleSubjectToggle(sub),
                                        className: "inline-flex max-w-full items-center rounded-sm text-[9px] font-mono border border-slate-350 bg-white dark:bg-cyber-gray dark:border-cyber-border text-slate-700 dark:text-slate-300 px-1.5 py-0.5 cursor-pointer hover:border-red-500 hover:text-red-500",
                                        children: [
                                            sub,
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "h-2.5 w-2.5 ml-1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                lineNumber: 596,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, sub, true, {
                                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                        lineNumber: 591,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 589,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                        lineNumber: 567,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex min-h-[5.75rem] flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "aur-caption block text-slate-400 dark:text-slate-500 mb-2",
                                children: "Language"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 605,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    onChange: (e)=>{
                                        if (e.target.value) handleLanguageToggle(e.target.value);
                                        e.target.value = "";
                                    },
                                    className: "aur-input",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "Filter Language..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                            lineNumber: 616,
                                            columnNumber: 15
                                        }, this),
                                        uniqueLanguages.map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: lang,
                                                children: [
                                                    lang,
                                                    " ",
                                                    selectedLanguages.includes(lang) ? "âœ“" : ""
                                                ]
                                            }, lang, true, {
                                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                lineNumber: 618,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                    lineNumber: 609,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 608,
                                columnNumber: 11
                            }, this),
                            selectedLanguages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-h-6 flex flex-wrap gap-1 mt-1.5",
                                children: selectedLanguages.map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        onClick: ()=>handleLanguageToggle(lang),
                                        className: "inline-flex max-w-full items-center rounded-sm text-[9px] font-mono border border-slate-350 bg-white dark:bg-cyber-gray dark:border-cyber-border text-slate-700 dark:text-slate-300 px-1.5 py-0.5 cursor-pointer hover:border-red-500 hover:text-red-500",
                                        children: [
                                            lang,
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "h-2.5 w-2.5 ml-1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                lineNumber: 633,
                                                columnNumber: 26
                                            }, this)
                                        ]
                                    }, lang, true, {
                                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                        lineNumber: 628,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 626,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                        lineNumber: 604,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                lineNumber: 507,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider",
                        children: [
                            "Total: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-750 dark:text-slate-100 font-mono",
                                children: filteredData.length
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 643,
                                columnNumber: 18
                            }, this),
                            " matching institutions"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                        lineNumber: 642,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleResetFilters,
                        className: "aur-rankings-reset inline-flex w-fit items-center text-[10px] font-bold uppercase tracking-wider transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                className: "h-3 w-3 mr-1"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 649,
                                columnNumber: 11
                            }, this),
                            "Reset All Filters"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                        lineNumber: 645,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                lineNumber: 641,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "aur-table-wrap aur-rankings-table relative overflow-x-auto select-none rounded-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "aur-table table-fixed min-w-[760px] w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            className: "sticky top-0 z-10 aur-thead-shadow",
                            children: table.getHeaderGroups().map((headerGroup)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "border-b border-[var(--aur-border)]",
                                    children: headerGroup.headers.map((header, idx)=>{
                                        const isPinnedCol = idx < 2; // rank and name columns pinned
                                        const columnId = header.column.id;
                                        const isMobileHiddenCol = columnId === "citations" || columnId === "research" || columnId === "employability" || columnId === "tuition";
                                        const widthClass = columnId === "calculatedRank" ? "w-14 min-w-[56px] max-w-[56px]" : columnId === "name" ? "w-[14rem] min-w-[14rem] sm:w-[18rem] sm:min-w-[18rem] lg:w-[22rem] lg:min-w-[22rem]" : columnId === "compare" ? "w-28 min-w-[112px]" : "w-24 min-w-[96px]";
                                        const alignClass = columnId === "calculatedScore" || columnId === "citations" || columnId === "research" || columnId === "employability" ? "text-right" : "";
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: `px-3 sm:px-4 py-3 text-left font-bold select-none ${isPinnedCol ? idx === 0 ? `aur-rankings-th sticky left-0 z-20 border-r border-white/10 ${widthClass}` : `aur-rankings-th sticky left-[56px] z-20 border-r border-white/10 ${widthClass}` : ""} ${widthClass} ${alignClass} ${isMobileHiddenCol ? "hidden sm:table-cell" : ""} ${header.column.getCanSort() ? "cursor-pointer hover:text-[var(--aur-text)]" : ""}`,
                                            onClick: header.column.getToggleSortingHandler(),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `flex items-center space-x-1.5 ${alignClass ? "justify-end" : ""}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flexRender"])(header.column.columnDef.header, header.getContext())
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                        lineNumber: 698,
                                                        columnNumber: 25
                                                    }, this),
                                                    header.column.getCanSort() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "shrink-0",
                                                        children: header.column.getIsSorted() === "asc" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                            className: "h-3 w-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                            lineNumber: 702,
                                                            columnNumber: 31
                                                        }, this) : header.column.getIsSorted() === "desc" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            className: "h-3 w-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                            lineNumber: 704,
                                                            columnNumber: 31
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                            lineNumber: 706,
                                                            columnNumber: 31
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                        lineNumber: 700,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                lineNumber: 697,
                                                columnNumber: 23
                                            }, this)
                                        }, header.id, false, {
                                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                            lineNumber: 684,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, headerGroup.id, false, {
                                    fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                    lineNumber: 659,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                            lineNumber: 657,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: "font-sans text-[var(--aur-text-secondary)]",
                            children: [
                                table.getRowModel().rows.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "group",
                                        children: row.getVisibleCells().map((cell, idx)=>{
                                            const isPinnedCol = idx < 2;
                                            const columnId = cell.column.id;
                                            const isMobileHiddenCol = columnId === "citations" || columnId === "research" || columnId === "employability" || columnId === "tuition";
                                            const widthClass = columnId === "calculatedRank" ? "w-14 min-w-[56px] max-w-[56px]" : columnId === "name" ? "w-[14rem] min-w-[14rem] sm:w-[18rem] sm:min-w-[18rem] lg:w-[22rem] lg:min-w-[22rem]" : columnId === "compare" ? "w-28 min-w-[112px]" : "w-24 min-w-[96px]";
                                            const alignClass = columnId === "calculatedScore" || columnId === "citations" || columnId === "research" || columnId === "employability" ? "text-right" : "";
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: `px-3 sm:px-4 py-3 align-middle ${isPinnedCol ? idx === 0 ? `sticky-pin sticky left-0 z-10 border-r border-[var(--aur-border)] font-bold text-[var(--aur-text)] ${widthClass}` : `sticky-pin sticky left-[56px] z-10 border-r border-[var(--aur-border)] font-bold text-[var(--aur-text)] ${widthClass}` : ""} ${widthClass} ${alignClass} ${isMobileHiddenCol ? "hidden sm:table-cell" : ""}`,
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flexRender"])(cell.column.columnDef.cell, cell.getContext())
                                            }, cell.id, false, {
                                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                lineNumber: 744,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, row.id, false, {
                                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                        lineNumber: 719,
                                        columnNumber: 15
                                    }, this)),
                                filteredData.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        colSpan: columns.length,
                                        className: "py-16 px-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center text-center max-w-md mx-auto",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex h-12 w-12 items-center justify-center border border-[var(--aur-border)] bg-[var(--aur-surface-2)] rounded-xl mb-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FilterX$3e$__["FilterX"], {
                                                        className: "h-5 w-5 text-[var(--aur-text-muted)]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                        lineNumber: 765,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                    lineNumber: 764,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "aur-caption mb-2",
                                                    children: "No matches"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                    lineNumber: 767,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-serif text-lg font-semibold text-[var(--aur-text)] mb-2",
                                                    children: "No institutions match your filters"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                    lineNumber: 768,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-[var(--aur-text-muted)] leading-relaxed mb-6",
                                                    children: "Try widening location, subject, or rank rangesâ€”or reset all filters to browse the full index."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                    lineNumber: 771,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: handleResetFilters,
                                                    className: `aur-btn-primary px-5 py-2.5 aur-focus-ring ${focusRing}`,
                                                    children: "Reset all filters"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                    lineNumber: 774,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                            lineNumber: 763,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                        lineNumber: 762,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                    lineNumber: 761,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                            lineNumber: 717,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/RankingsEngine.tsx",
                    lineNumber: 656,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                lineNumber: 655,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "aur-panel aur-rankings-pagination flex items-center justify-between px-3 sm:px-4 py-3 mt-4 rounded-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-1 justify-between sm:hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>table.previousPage(),
                                disabled: !table.getCanPreviousPage(),
                                className: `relative inline-flex items-center border border-[var(--aur-border)] bg-[var(--aur-surface-2)] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[var(--aur-text)] hover:bg-[var(--aur-surface-hover)] disabled:opacity-50 rounded-lg ${focusRing}`,
                                children: "Previous"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 792,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>table.nextPage(),
                                disabled: !table.getCanNextPage(),
                                className: `relative ml-3 inline-flex items-center border border-[var(--aur-border)] bg-[var(--aur-surface-2)] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[var(--aur-text)] hover:bg-[var(--aur-surface-hover)] disabled:opacity-50 rounded-lg ${focusRing}`,
                                children: "Next"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 799,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                        lineNumber: 791,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden sm:flex sm:flex-1 sm:items-center sm:justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] text-[var(--aur-text-muted)] font-bold uppercase tracking-widest",
                                    children: [
                                        "Showing page ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-[var(--aur-text)]",
                                            children: table.getState().pagination.pageIndex + 1
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                            lineNumber: 810,
                                            columnNumber: 28
                                        }, this),
                                        " of",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-[var(--aur-text)]",
                                            children: table.getPageCount()
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                            lineNumber: 811,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                    lineNumber: 809,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 808,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "isolate inline-flex -space-x-px rounded-md shadow-sm",
                                    "aria-label": "Pagination",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>table.previousPage(),
                                            disabled: !table.getCanPreviousPage(),
                                            className: `relative inline-flex items-center border border-[var(--aur-border)] bg-[var(--aur-surface)] px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-[var(--aur-text-secondary)] hover:bg-[var(--aur-surface-hover)] disabled:opacity-50 rounded-l-md transition-colors ${focusRing}`,
                                            children: "Previous"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                            lineNumber: 816,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>table.nextPage(),
                                            disabled: !table.getCanNextPage(),
                                            className: `relative inline-flex items-center border border-l-0 border-[var(--aur-border)] bg-[var(--aur-surface)] px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-[var(--aur-text-secondary)] hover:bg-[var(--aur-surface-hover)] disabled:opacity-50 rounded-r-md transition-colors ${focusRing}`,
                                            children: "Next"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                            lineNumber: 823,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                    lineNumber: 815,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 814,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                        lineNumber: 807,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                lineNumber: 790,
                columnNumber: 7
            }, this),
            isWeightsDrawerOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 overflow-hidden font-sans",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity",
                        onClick: ()=>setIsWeightsDrawerOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                        lineNumber: 838,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-y-0 right-0 pl-10 max-w-full flex",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-screen max-w-md bg-[var(--aur-surface)] border-l border-[var(--aur-border)] flex flex-col justify-between shadow-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 border-b border-[var(--aur-border)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] uppercase font-bold tracking-widest text-[var(--aur-text-muted)]",
                                                            children: "Calculations Lab"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                            lineNumber: 846,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-serif text-xl font-bold text-[var(--aur-text)] mt-0.5",
                                                            children: "Recalculate Rank Weights"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                            lineNumber: 849,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                    lineNumber: 845,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setIsWeightsDrawerOpen(false),
                                                    className: "p-1 hover:bg-[var(--aur-hover)] rounded-lg text-[var(--aur-text-muted)] hover:text-[var(--aur-text)]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        className: "h-5 w-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                        lineNumber: 857,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                    lineNumber: 853,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                            lineNumber: 844,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[var(--aur-text-secondary)] text-xs mt-3 leading-relaxed",
                                            children: "Modify the relative priority weights below. The system automatically recalculates total scores using instant frontend arithmetic."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                            lineNumber: 860,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                    lineNumber: 843,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 overflow-y-auto p-6 space-y-6",
                                    children: [
                                        {
                                            key: "citations",
                                            label: "Citations Impact",
                                            desc: "Scientific citation frequency per paper"
                                        },
                                        {
                                            key: "research",
                                            label: "Research Metric",
                                            desc: "Academic staff peer assessment"
                                        },
                                        {
                                            key: "employability",
                                            label: "Employability Ratio",
                                            desc: "Alumni professional career placement"
                                        },
                                        {
                                            key: "intlStudents",
                                            label: "International Ratio",
                                            desc: "Percentage of international students enrolled"
                                        },
                                        {
                                            key: "teaching",
                                            label: "Teaching Staff",
                                            desc: "Faculty-to-student metrics ratio"
                                        }
                                    ].map((slider)=>{
                                        const currentValue = weights[slider.key];
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "text-xs font-bold text-[var(--aur-text)] block",
                                                                    children: slider.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                                    lineNumber: 879,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] text-[var(--aur-text-muted)] block",
                                                                    children: slider.desc
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                                    lineNumber: 880,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                            lineNumber: 878,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-xs font-bold text-[var(--aur-text)] bg-[var(--aur-surface-2)] px-2 py-0.5 border border-[var(--aur-border-strong)] rounded-md",
                                                            children: [
                                                                currentValue,
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                            lineNumber: 882,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                    lineNumber: 877,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "range",
                                                    min: "0",
                                                    max: "100",
                                                    step: "5",
                                                    value: currentValue,
                                                    onChange: (e)=>handleWeightChange(slider.key, parseInt(e.target.value)),
                                                    className: "w-full cursor-pointer",
                                                    style: {
                                                        accentColor: "var(--aur-text)"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                    lineNumber: 886,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, slider.key, true, {
                                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                            lineNumber: 876,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                    lineNumber: 866,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 border-t border-[var(--aur-border)] bg-[var(--aur-surface-2)] flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setWeights(DEFAULT_WEIGHTS);
                                                serializeStateToUrl(searchQuery, locations, selectedSubjects, selectedLanguages, DEFAULT_WEIGHTS);
                                            },
                                            className: "inline-flex items-center text-xs font-bold uppercase tracking-wider text-[var(--aur-text-muted)] hover:text-[var(--aur-text)] transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                                    className: "h-4 w-4 mr-1.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                    lineNumber: 910,
                                                    columnNumber: 19
                                                }, this),
                                                "Default Weights"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                            lineNumber: 903,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsWeightsDrawerOpen(false),
                                            className: "aur-btn-primary px-6 py-2.5",
                                            children: "Apply Recalculation"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                            lineNumber: 913,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                    lineNumber: 902,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                            lineNumber: 840,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                        lineNumber: 839,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                lineNumber: 837,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/RankingsEngine.tsx",
        lineNumber: 458,
        columnNumber: 5
    }, this);
}
_s(RankingsEngine, "GN6eBlswG0csVoZR62ylMM5MWCY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$navigation$2f$SidebarContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useReactTable"]
    ];
});
_c = RankingsEngine;
var _c;
__turbopack_context__.k.register(_c, "RankingsEngine");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_components_RankingsEngine_tsx_0358710._.js.map