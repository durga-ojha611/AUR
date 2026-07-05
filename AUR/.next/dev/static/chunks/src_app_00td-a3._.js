(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/components/navigation/SidebarContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SidebarProvider",
    ()=>SidebarProvider,
    "initialFilters",
    ()=>initialFilters,
    "useSidebar",
    ()=>useSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const initialFilters = {
    searchQuery: "",
    country: "",
    subjects: [],
    qsRange: [
        1,
        50
    ],
    tuitionRange: [
        0,
        25000
    ],
    isPublic: null,
    scholarshipOnly: false
};
const SidebarContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const SidebarProvider = ({ children })=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    // Active view sync from URL
    const activeView = searchParams.get("view") || "home";
    const selectedUniId = searchParams.get("id");
    // State initialization
    const [isCollapsed, setIsCollapsedState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileOpen, setIsMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("light");
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialFilters);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedUniIds, setSelectedUniIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isChatOpen, setIsChatOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Read localStorage for isCollapsed and theme (safe for SSR)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SidebarProvider.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const savedCollapsed = localStorage.getItem("sidebar_collapsed");
                if (savedCollapsed !== null) {
                    setIsCollapsedState(savedCollapsed === "true");
                }
                const savedTheme = localStorage.getItem("aur_theme");
                if (savedTheme === "dark" || savedTheme === "light") {
                    setTheme(savedTheme);
                } else {
                    setTheme("light");
                }
                const savedCompared = localStorage.getItem("compared_uni_ids");
                if (savedCompared) {
                    try {
                        setSelectedUniIds(JSON.parse(savedCompared));
                    } catch (error) {
                        console.error(error);
                    }
                }
            }
        }
    }["SidebarProvider.useEffect"], []);
    const handleToggleCompare = (uniId)=>{
        setSelectedUniIds((prev)=>{
            const next = prev.includes(uniId) ? prev.filter((id)=>id !== uniId) : [
                ...prev,
                uniId
            ];
            if (next.length > 4) {
                alert("You can compare a maximum of 4 universities at a time.");
                return prev;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                localStorage.setItem("compared_uni_ids", JSON.stringify(next));
            }
            return next;
        });
    };
    const handleRemoveCompare = (uniId)=>{
        setSelectedUniIds((prev)=>{
            const next = prev.filter((id)=>id !== uniId);
            if ("TURBOPACK compile-time truthy", 1) {
                localStorage.setItem("compared_uni_ids", JSON.stringify(next));
            }
            return next;
        });
    };
    const handleClearCompare = ()=>{
        setSelectedUniIds([]);
        if ("TURBOPACK compile-time truthy", 1) {
            localStorage.removeItem("compared_uni_ids");
        }
    };
    const clearFilters = ()=>{
        setFilters(initialFilters);
    };
    // Write collapse state to localStorage
    const setIsCollapsed = (val)=>{
        setIsCollapsedState(val);
        if ("TURBOPACK compile-time truthy", 1) {
            localStorage.setItem("sidebar_collapsed", String(val));
        }
    };
    // Toggle theme and update localStorage & DOM root class
    const toggleTheme = ()=>{
        const nextTheme = theme === "dark" ? "light" : "dark";
        setTheme(nextTheme);
        if ("TURBOPACK compile-time truthy", 1) {
            localStorage.setItem("aur_theme", nextTheme);
        }
    };
    // Sync theme status on HTML document class
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SidebarProvider.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const root = window.document.documentElement;
                if (theme === "dark") {
                    root.classList.add("dark");
                } else {
                    root.classList.remove("dark");
                }
            }
        }
    }["SidebarProvider.useEffect"], [
        theme
    ]);
    // Synchronize  URL search query if exists
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SidebarProvider.useEffect": ()=>{
            const q = searchParams.get("search");
            if (q !== null) {
                setSearchQuery(q);
            }
        }
    }["SidebarProvider.useEffect"], [
        searchParams
    ]);
    // View changing routing helper
    const handleViewChange = (view)=>{
        const current = new URLSearchParams(Array.from(searchParams.entries()));
        current.set("view", view);
        if (view !== "profile") {
            current.delete("id");
        }
        // Auto-expand sidebar when navigating to rankings engine
        if (view === "rankings") {
            setIsCollapsed(false);
        }
        router.push(`?${current.toString()}`);
        setIsMobileOpen(false); // Close mobile drawer when navigating
    };
    const setSelectedUniId = (id)=>{
        const current = new URLSearchParams(Array.from(searchParams.entries()));
        if (id) {
            current.set("view", "profile");
            current.set("id", id);
        } else {
            current.set("view", "rankings");
            current.delete("id");
        }
        router.push(`?${current.toString()}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarContext.Provider, {
        value: {
            filters,
            setFilters,
            clearFilters,
            isCollapsed,
            setIsCollapsed,
            isMobileOpen,
            setIsMobileOpen,
            theme,
            toggleTheme,
            searchQuery,
            setSearchQuery,
            activeView,
            handleViewChange,
            selectedUniId,
            setSelectedUniId,
            selectedUniIds,
            handleToggleCompare,
            handleRemoveCompare,
            handleClearCompare,
            isChatOpen,
            setIsChatOpen
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/components/navigation/SidebarContext.tsx",
        lineNumber: 202,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SidebarProvider, "jaRjRDnmhvw2KI0CeDZ2QA9wWGg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = SidebarProvider;
const useSidebar = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(SidebarContext);
    if (context === undefined) {
        throw new Error("useSidebar must be used within a SidebarProvider");
    }
    return context;
};
_s1(useSidebar, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "SidebarProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/feedback/ToastContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToastProvider",
    ()=>ToastProvider,
    "useToast",
    ()=>useToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.mjs [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-client] (ecmascript) <export default as AlertTriangle>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const ToastContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const variantStyles = {
    info: {
        border: "border-slate-900 dark:border-cyber-yellow/30",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"],
        iconClass: "text-slate-600 dark:text-cyber-yellow"
    },
    success: {
        border: "border-emerald-700/40 dark:border-emerald-500/40",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"],
        iconClass: "text-emerald-700 dark:text-emerald-400"
    },
    warning: {
        border: "border-amber-700/50 dark:border-cyber-yellow/40",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
        iconClass: "text-amber-700 dark:text-cyber-yellow"
    }
};
function ToastProvider({ children }) {
    _s();
    const [toasts, setToasts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const showToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ToastProvider.useCallback[showToast]": (message, variant = "info")=>{
            const id = typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : String(Date.now() + Math.random());
            setToasts({
                "ToastProvider.useCallback[showToast]": (prev)=>[
                        ...prev,
                        {
                            id,
                            message,
                            variant
                        }
                    ]
            }["ToastProvider.useCallback[showToast]"]);
            window.setTimeout({
                "ToastProvider.useCallback[showToast]": ()=>{
                    setToasts({
                        "ToastProvider.useCallback[showToast]": (prev)=>prev.filter({
                                "ToastProvider.useCallback[showToast]": (t)=>t.id !== id
                            }["ToastProvider.useCallback[showToast]"])
                    }["ToastProvider.useCallback[showToast]"]);
                }
            }["ToastProvider.useCallback[showToast]"], 4200);
        }
    }["ToastProvider.useCallback[showToast]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToastContext.Provider, {
        value: {
            showToast
        },
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none fixed bottom-24 right-4 z-[60] flex w-full max-w-sm flex-col gap-2 md:bottom-6",
                "aria-live": "polite",
                "aria-relevant": "additions",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: toasts.map((toast)=>{
                        const style = variantStyles[toast.variant];
                        const Icon = style.icon;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            role: "status",
                            className: `pointer-events-auto flex items-start gap-3 border bg-white px-4 py-3 text-xs font-medium text-slate-800 shadow-xl dark:bg-cyber-gray dark:text-slate-100 ${style.border}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: `h-4 w-4 shrink-0 mt-0.5 ${style.iconClass}`
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/feedback/ToastContext.tsx",
                                    lineNumber: 78,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "leading-relaxed",
                                    children: toast.message
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/feedback/ToastContext.tsx",
                                    lineNumber: 79,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, toast.id, true, {
                            fileName: "[project]/src/app/components/feedback/ToastContext.tsx",
                            lineNumber: 69,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false)
            }, void 0, false, {
                fileName: "[project]/src/app/components/feedback/ToastContext.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/feedback/ToastContext.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(ToastProvider, "bva7iOXLAgwOJBzZ6Hx6GD8IQA4=");
_c = ToastProvider;
function useToast() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ToastContext);
    if (!ctx) {
        throw new Error("useToast must be used within ToastProvider");
    }
    return ctx;
}
_s1(useToast, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c;
__turbopack_context__.k.register(_c, "ToastProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/navigation/config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SIDEBAR_ITEMS",
    ()=>SIDEBAR_ITEMS,
    "TOP_NAV_LINKS",
    ()=>TOP_NAV_LINKS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.mjs [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.mjs [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.mjs [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.mjs [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.mjs [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bookmark.mjs [app-client] (ecmascript) <export default as Bookmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.mjs [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.mjs [app-client] (ecmascript) <export default as BookOpen>");
;
const SIDEBAR_ITEMS = [
    {
        id: "dashboard",
        label: "Dashboard",
        view: "home",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"]
    },
    {
        id: "universities",
        label: "Universities",
        view: "universities",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"]
    },
    {
        id: "rankings",
        label: "Rankings",
        view: "rankings",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"],
        badge: "Live"
    },
    {
        id: "countries",
        label: "Countries",
        view: "countries",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"]
    },
    {
        id: "analytics",
        label: "Analytics",
        view: "analytics",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"]
    },
    {
        id: "saved",
        label: "Shortlisted",
        view: "saved",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__["Bookmark"]
    },
    {
        id: "methodology",
        label: "Methodology",
        view: "methodology",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"]
    },
    {
        id: "settings",
        label: "Settings",
        view: "settings",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"]
    }
];
const TOP_NAV_LINKS = [
    {
        label: "Discovery Hub",
        view: "home"
    },
    {
        label: "Rankings Engine",
        view: "rankings"
    },
    {
        label: "Methodology",
        view: "methodology"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/navbar/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.mjs [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.mjs [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.mjs [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.mjs [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.mjs [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.mjs [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/maximize-2.mjs [app-client] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minimize-2.mjs [app-client] (ecmascript) <export default as Minimize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sliders-horizontal.mjs [app-client] (ecmascript) <export default as SlidersHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$navigation$2f$SidebarContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/navigation/SidebarContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$feedback$2f$ToastContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/feedback/ToastContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$navigation$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/navigation/config.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Navbar() {
    _s();
    const { showToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$feedback$2f$ToastContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const { theme, toggleTheme, isMobileOpen, setIsMobileOpen, activeView, handleViewChange, filters, setFilters } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$navigation$2f$SidebarContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"])();
    const [searchVal, setSearchVal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(filters.searchQuery);
    const [showProfileMenu, setShowProfileMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showNotifMenu, setShowNotifMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isFullscreen, setIsFullscreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showNavFilter, setShowNavFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const toggleFullscreen = ()=>{
        const docEl = document.documentElement;
        const doc = document;
        if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
            const requestFullScreen = docEl.requestFullscreen || docEl.msRequestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullscreen;
            if (requestFullScreen) {
                requestFullScreen.call(docEl).then(()=>setIsFullscreen(true)).catch(()=>{});
            }
        } else {
            const exitFullScreen = doc.exitFullscreen || doc.msExitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen;
            if (exitFullScreen) {
                exitFullScreen.call(doc).then(()=>setIsFullscreen(false)).catch(()=>{});
            }
        }
    };
    // Sync state if user presses Esc to exit fullscreen
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handler = {
                "Navbar.useEffect.handler": ()=>{
                    const doc = document;
                    const isFull = !!(doc.fullscreenElement || doc.mozFullScreenElement || doc.webkitFullscreenElement || doc.msFullscreenElement);
                    setIsFullscreen(isFull);
                }
            }["Navbar.useEffect.handler"];
            document.addEventListener("fullscreenchange", handler);
            document.addEventListener("webkitfullscreenchange", handler);
            document.addEventListener("mozfullscreenchange", handler);
            document.addEventListener("MSFullscreenChange", handler);
            return ({
                "Navbar.useEffect": ()=>{
                    document.removeEventListener("fullscreenchange", handler);
                    document.removeEventListener("webkitfullscreenchange", handler);
                    document.removeEventListener("mozfullscreenchange", handler);
                    document.removeEventListener("MSFullscreenChange", handler);
                }
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    const profileRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const notifRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const navFilterRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Sync internal search state with context searchQuery
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            setSearchVal(filters.searchQuery);
        }
    }["Navbar.useEffect"], [
        filters.searchQuery
    ]);
    // Click outside menus to close
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            function handleClickOutside(event) {
                if (profileRef.current && !profileRef.current.contains(event.target)) {
                    setShowProfileMenu(false);
                }
                if (notifRef.current && !notifRef.current.contains(event.target)) {
                    setShowNotifMenu(false);
                }
                if (navFilterRef.current && !navFilterRef.current.contains(event.target)) {
                    setShowNavFilter(false);
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "Navbar.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    const handleSearchSubmit = (e)=>{
        e.preventDefault();
        setFilters((prev)=>({
                ...prev,
                searchQuery: searchVal
            }));
        handleViewChange("rankings"); // Direct user to rankings to see results
    };
    const handleSearchChange = (e)=>{
        setSearchVal(e.target.value);
        // Instant search filtering
        setFilters((prev)=>({
                ...prev,
                searchQuery: e.target.value
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-40 w-full border-b border-[var(--aur-border)] bg-[var(--aur-surface)]/95 backdrop-blur-xl",
        style: {
            willChange: "transform",
            transform: "translateZ(0)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-full px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-14 items-center justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>handleViewChange("home"),
                        className: "flex h-16 items-center cursor-pointer shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Image, {
                            src: "/logo.png",
                            alt: "Asia University Rankings",
                            width: 458,
                            height: 135,
                            priority: true,
                            className: "max-h-10 w-auto object-contain"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                            lineNumber: 115,
                            columnNumber: 3
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                        lineNumber: 111,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden md:flex space-x-1 h-full items-center",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$navigation$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOP_NAV_LINKS"].map((link)=>{
                            const isActive = activeView === link.view;
                            const isRankings = link.view === "rankings";
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative group flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleViewChange(link.view),
                                        className: `relative px-4 py-2 text-[11px] font-bold uppercase tracking-wider transition-colors duration-200 rounded-md ${isActive ? "text-[var(--aur-text)]" : "text-[var(--aur-text-muted)] hover:text-[var(--aur-text)]"}`,
                                        children: [
                                            link.label,
                                            isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--aur-text)]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                lineNumber: 142,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                        lineNumber: 132,
                                        columnNumber: 19
                                    }, this),
                                    isRankings && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative ml-0.5",
                                        ref: navFilterRef,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setShowNavFilter(!showNavFilter),
                                                title: "Open Quick Filters",
                                                className: `p-1.5 rounded-md transition-colors duration-150 ${showNavFilter ? "bg-[var(--aur-surface-hover)] text-[var(--aur-text)]" : "text-[var(--aur-text-muted)] hover:text-[var(--aur-text)] hover:bg-[var(--aur-hover)]"}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__["SlidersHorizontal"], {
                                                    className: "h-3.5 w-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                lineNumber: 150,
                                                columnNumber: 23
                                            }, this),
                                            showNavFilter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-full left-0 mt-2 w-64 bg-[var(--aur-surface)] border border-[var(--aur-border)] rounded-xl shadow-[var(--aur-shadow-lg)] p-4 z-50",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-[10px] uppercase font-bold tracking-widest text-[var(--aur-text-muted)] mb-3",
                                                        children: "Quick Filters"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "text-[10px] font-bold text-[var(--aur-text)] mb-1 block",
                                                                        children: "Region/Country"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                                        lineNumber: 165,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        value: filters.country,
                                                                        onChange: (e)=>setFilters((prev)=>({
                                                                                    ...prev,
                                                                                    country: e.target.value
                                                                                })),
                                                                        className: "w-full text-xs p-2 rounded-lg border border-[var(--aur-border)] bg-[var(--aur-surface-2)] text-[var(--aur-text)] focus:outline-none focus:border-[var(--aur-border-strong)]",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "",
                                                                                children: "All Regions"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                                                lineNumber: 171,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "Singapore",
                                                                                children: "Singapore"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                                                lineNumber: 172,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "China",
                                                                                children: "China"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                                                lineNumber: 173,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "Japan",
                                                                                children: "Japan"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                                                lineNumber: 174,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "Uzbekistan",
                                                                                children: "Uzbekistan"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                                                lineNumber: 175,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "India",
                                                                                children: "India"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                                                lineNumber: 176,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                                        lineNumber: 166,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                                lineNumber: 164,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "text-[10px] font-bold text-[var(--aur-text)] mb-1 block",
                                                                        children: "Max Tuition ($)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                                        lineNumber: 181,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "range",
                                                                        min: "0",
                                                                        max: "50000",
                                                                        step: "1000",
                                                                        value: filters.tuitionRange[1],
                                                                        onChange: (e)=>setFilters((prev)=>({
                                                                                    ...prev,
                                                                                    tuitionRange: [
                                                                                        prev.tuitionRange[0],
                                                                                        parseInt(e.target.value)
                                                                                    ]
                                                                                })),
                                                                        className: "w-full accent-[var(--aur-text)]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                                        lineNumber: 182,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-right text-[10px] font-mono text-[var(--aur-text-muted)] mt-1",
                                                                        children: [
                                                                            "$",
                                                                            filters.tuitionRange[1].toLocaleString()
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                                        lineNumber: 189,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                                lineNumber: 180,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>{
                                                                    setShowNavFilter(false);
                                                                    handleViewChange("rankings");
                                                                },
                                                                className: "w-full py-2 mt-4 bg-[var(--aur-text)] text-[var(--background)] text-[10px] font-bold uppercase tracking-wider rounded-lg hover:opacity-90 transition-opacity",
                                                                children: "Apply & View Results"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                                lineNumber: 192,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                lineNumber: 160,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                        lineNumber: 149,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, link.label, true, {
                                fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                lineNumber: 131,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                        lineNumber: 126,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSearchSubmit,
                        className: "flex-grow max-w-md hidden md:block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: searchVal,
                                    onChange: handleSearchChange,
                                    placeholder: "Search across index...",
                                    className: "w-full border border-[var(--aur-border)] bg-[var(--aur-surface-2)] px-4 py-1.5 pl-10 rounded-lg text-xs text-[var(--aur-text)] placeholder-[var(--aur-text-muted)] focus:outline-none focus:border-[var(--aur-text)] transition-all duration-200"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                    lineNumber: 214,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    className: "absolute left-3.5 top-2 h-4 w-4 text-[var(--aur-text-muted)]"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                    lineNumber: 221,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                            lineNumber: 213,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                        lineNumber: 209,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-2 sm:space-x-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: toggleFullscreen,
                                "aria-label": isFullscreen ? "Exit fullscreen" : "Enter fullscreen",
                                title: isFullscreen ? "Exit Fullscreen" : "Fullscreen",
                                className: "p-2 text-[var(--aur-text-muted)] hover:text-[var(--aur-text)] transition-colors hover:bg-[var(--aur-hover)] rounded-lg",
                                children: isFullscreen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__["Minimize2"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                    lineNumber: 236,
                                    columnNumber: 31
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                    lineNumber: 236,
                                    columnNumber: 67
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                lineNumber: 229,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: toggleTheme,
                                "aria-label": theme === "dark" ? "Switch to light theme" : "Switch to dark theme",
                                className: "p-2 text-[var(--aur-text-muted)] hover:text-[var(--aur-text)] transition-colors hover:bg-[var(--aur-hover)] rounded-lg",
                                title: theme === "dark" ? "Light Mode" : "Dark Mode",
                                children: theme === "dark" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                    lineNumber: 247,
                                    columnNumber: 35
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                    lineNumber: 247,
                                    columnNumber: 65
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                lineNumber: 240,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                ref: notifRef,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setShowNotifMenu(!showNotifMenu),
                                        "aria-label": "Open notifications",
                                        className: "p-2 text-[var(--aur-text-muted)] hover:text-[var(--aur-text)] transition-colors hover:bg-[var(--aur-hover)] rounded-lg relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                lineNumber: 258,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute top-1.5 right-1.5 flex h-1.5 w-1.5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                lineNumber: 259,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                        lineNumber: 252,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: showNotifMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute right-0 mt-2.5 w-80 rounded-xl border border-[var(--aur-border)] bg-[var(--aur-surface)] shadow-xl py-2 z-50 text-xs text-[var(--aur-text-secondary)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-4 py-2 border-b border-[var(--aur-border)] flex justify-between items-center font-bold",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[var(--aur-text)] uppercase tracking-wider text-[10px]",
                                                            children: "Notifications"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                            lineNumber: 273,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] text-red-500",
                                                            children: "3 New"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                            lineNumber: 276,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                    lineNumber: 272,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "max-h-64 overflow-y-auto",
                                                    children: [
                                                        {
                                                            id: 1,
                                                            title: "QS Rankings 2026 Released",
                                                            time: "10 mins ago",
                                                            desc: "Explore updated analytical scores and recalculation models.",
                                                            isNew: true
                                                        },
                                                        {
                                                            id: 2,
                                                            title: "Uzbekistan Medical Admission Open",
                                                            time: "2 hours ago",
                                                            desc: "Samarkand & Tashkent medical academies are accepting applications.",
                                                            isNew: true
                                                        },
                                                        {
                                                            id: 3,
                                                            title: "Data Audit Log Completed",
                                                            time: "1 day ago",
                                                            desc: "All regional study models have been successfully audited.",
                                                            isNew: false
                                                        }
                                                    ].map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `p-3 border-b border-[var(--aur-border)] hover:bg-[var(--aur-hover)] transition-colors ${n.isNew ? "bg-[var(--aur-hover)]" : ""}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between font-semibold text-[var(--aur-text)]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: n.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                                            lineNumber: 309,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[9px] text-[var(--aur-text-muted)] font-normal",
                                                                            children: n.time
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                                            lineNumber: 310,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                                    lineNumber: 308,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] text-[var(--aur-text-muted)] mt-0.5 leading-normal",
                                                                    children: n.desc
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                                    lineNumber: 312,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, n.id, true, {
                                                            fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                            lineNumber: 302,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                    lineNumber: 278,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                            lineNumber: 266,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                lineNumber: 251,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative border-l border-[var(--aur-border)] pl-3",
                                ref: profileRef,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setShowProfileMenu(!showProfileMenu),
                                        "aria-label": "Open profile menu",
                                        className: "flex items-center space-x-1.5 focus:outline-none group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-8 w-8 rounded-lg bg-[var(--aur-text)] flex items-center justify-center text-[var(--background)] text-xs font-bold overflow-hidden",
                                                children: "US"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                lineNumber: 331,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                className: "h-3 w-3 text-[var(--aur-text-muted)] group-hover:text-[var(--aur-text)] transition-colors"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                lineNumber: 334,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                        lineNumber: 325,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: showProfileMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute right-0 mt-2.5 w-48 rounded-xl border border-[var(--aur-border)] bg-[var(--aur-surface)] shadow-xl py-1.5 z-50 text-xs text-[var(--aur-text-secondary)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-4 py-2 border-b border-[var(--aur-border)]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "block font-bold text-[var(--aur-text)]",
                                                            children: "Dr. John Doe"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                            lineNumber: 346,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "block text-[10px] text-[var(--aur-text-muted)]",
                                                            children: "j.doe@university.edu"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                            lineNumber: 347,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                    lineNumber: 345,
                                                    columnNumber: 21
                                                }, this),
                                                [
                                                    {
                                                        label: "My Profile",
                                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
                                                        action: ()=>{}
                                                    },
                                                    {
                                                        label: "Admin Console",
                                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
                                                        action: ()=>handleViewChange("admin")
                                                    }
                                                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            item.action();
                                                            setShowProfileMenu(false);
                                                        },
                                                        className: "w-full text-left px-4 py-2 hover:bg-[var(--aur-hover)] flex items-center space-x-2 transition-colors",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                                className: "h-3.5 w-3.5 text-[var(--aur-text-muted)]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                                lineNumber: 364,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: item.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                                lineNumber: 365,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, item.label, true, {
                                                        fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                        lineNumber: 356,
                                                        columnNumber: 23
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border-t border-[var(--aur-border)] my-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                    lineNumber: 369,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        handleViewChange("login");
                                                        setShowProfileMenu(false);
                                                    },
                                                    className: "w-full text-left px-4 py-2 hover:bg-red-50 dark:hover:bg-red-950/20 text-red-500 flex items-center space-x-2 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                            className: "h-3.5 w-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                            lineNumber: 378,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold",
                                                            children: "Sign Out"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                            lineNumber: 379,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                    lineNumber: 371,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                            lineNumber: 339,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                lineNumber: 324,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setIsMobileOpen(!isMobileOpen),
                                "aria-label": isMobileOpen ? "Close menu" : "Open menu",
                                className: "p-2 text-[var(--aur-text-muted)] hover:text-[var(--aur-text)] transition-colors hover:bg-[var(--aur-hover)] rounded-lg md:hidden",
                                children: isMobileOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                    lineNumber: 393,
                                    columnNumber: 31
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                    lineNumber: 393,
                                    columnNumber: 59
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                lineNumber: 387,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                        lineNumber: 226,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                lineNumber: 108,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/navbar/Navbar.tsx",
            lineNumber: 107,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/navbar/Navbar.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
_s(Navbar, "qkBp7O3T6ru/C558j7TG6iwDT90=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$feedback$2f$ToastContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$navigation$2f$SidebarContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FEATURED_ARTICLES",
    ()=>FEATURED_ARTICLES,
    "MOCK_UNIVERSITIES",
    ()=>MOCK_UNIVERSITIES
]);
const MOCK_UNIVERSITIES = [
    {
        id: "tsinghua",
        name: "Tsinghua University",
        location: "China",
        overall: 98.2,
        citations: 99.1,
        employability: 98.5,
        intlStudents: 72.4,
        teaching: 97.8,
        research: 99.3,
        subjects: [
            "Engineering",
            "Medicine",
            "Sciences",
            "Business"
        ],
        languages: [
            "Chinese",
            "English"
        ],
        tuition: "$4,800/year",
        description: "Tsinghua University is a major research university in Beijing, and a member of the elite C9 League. Established in 1911, it is consistently ranked as one of the top academic institutions in Asia.",
        history: [
            1,
            1,
            1,
            2,
            2
        ],
        programs: [
            "MD Medicine (English-medium)",
            "M.Sc. Advanced Computing",
            "B.Eng. Mechanical Engineering",
            "MBA Global Business"
        ],
        campusPhoto: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
        hasMedicine: true,
        isPublic: true,
        hasScholarship: true,
        founded: 1911,
        studentCount: 47400,
        facultyCount: 3600,
        acceptanceRate: 2.1,
        applicationDeadline: "December 31, 2026",
        scholarshipDetails: "Chinese Government Scholarship (CSC), Tsinghua Excellence Award covering full tuition + stipend for top international applicants."
    },
    {
        id: "nus",
        name: "National University of Singapore",
        location: "Singapore",
        overall: 97.9,
        citations: 98.4,
        employability: 99.0,
        intlStudents: 91.2,
        teaching: 96.2,
        research: 98.0,
        subjects: [
            "Medicine",
            "Engineering",
            "Sciences",
            "Business",
            "Humanities"
        ],
        languages: [
            "English"
        ],
        tuition: "$15,500/year",
        description: "The National University of Singapore is the national research university of Singapore. Founded in 1905 as a government medical school, it is the oldest higher education institution in Singapore.",
        history: [
            2,
            2,
            2,
            1,
            1
        ],
        programs: [
            "Bachelor of Medicine & Surgery (MBBS)",
            "B.Sc. Data Science",
            "M.Sc. Finance",
            "Ph.D. Biomedical Sciences"
        ],
        campusPhoto: "https://images.unsplash.com/photo-1562774053-f5a02f6da861?auto=format&fit=crop&w=800&q=80",
        hasMedicine: true,
        isPublic: true,
        hasScholarship: true,
        founded: 1905,
        studentCount: 40200,
        facultyCount: 2900,
        acceptanceRate: 6.5,
        applicationDeadline: "February 28, 2027",
        scholarshipDetails: "NUS Research Scholarship (PhD), ASEAN Undergraduate Scholarship for top ASEAN nationals covering full fees and living allowance."
    },
    {
        id: "peking",
        name: "Peking University",
        location: "China",
        overall: 97.4,
        citations: 97.9,
        employability: 97.2,
        intlStudents: 74.8,
        teaching: 98.1,
        research: 98.5,
        subjects: [
            "Sciences",
            "Medicine",
            "Humanities",
            "Business"
        ],
        languages: [
            "Chinese",
            "English"
        ],
        tuition: "$4,500/year",
        description: "Peking University is a major Chinese research university in Beijing and a member of the elite C9 League. It was founded in 1898 as the Imperial University of Peking.",
        history: [
            3,
            3,
            3,
            3,
            3
        ],
        programs: [
            "MD Clinical Medicine",
            "B.A. Chinese Literature",
            "Ph.D. Theoretical Physics"
        ],
        campusPhoto: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80",
        hasMedicine: true,
        isPublic: true,
        hasScholarship: true,
        founded: 1898,
        studentCount: 48000,
        facultyCount: 4100,
        acceptanceRate: 2.8,
        applicationDeadline: "January 15, 2027",
        scholarshipDetails: "Peking University Scholarship for International Students, covering tuition and dormitory fees for selected programs."
    },
    {
        id: "tokyo",
        name: "The University of Tokyo",
        location: "Japan",
        overall: 96.8,
        citations: 96.2,
        employability: 98.1,
        intlStudents: 68.5,
        teaching: 97.5,
        research: 98.2,
        subjects: [
            "Engineering",
            "Medicine",
            "Sciences",
            "Humanities"
        ],
        languages: [
            "Japanese",
            "English"
        ],
        tuition: "$5,200/year",
        description: "The University of Tokyo is a premier public research university located in Bunkyo, Tokyo, Japan. Established in 1877, it is the first imperial university.",
        history: [
            4,
            4,
            4,
            4,
            4
        ],
        programs: [
            "MD Medicine & Surgery",
            "B.Eng. Robotics & AI",
            "M.Sc. Earth Sciences"
        ],
        campusPhoto: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
        hasMedicine: true,
        isPublic: true,
        hasScholarship: true,
        founded: 1877,
        studentCount: 28000,
        facultyCount: 4000,
        acceptanceRate: 9.0,
        applicationDeadline: "November 30, 2026",
        scholarshipDetails: "MEXT Scholarship (Japanese Government) for international students covering tuition, travel, and monthly stipend."
    },
    {
        id: "hku",
        name: "The University of Hong Kong",
        location: "Hong Kong",
        overall: 95.5,
        citations: 96.8,
        employability: 94.5,
        intlStudents: 94.0,
        teaching: 92.5,
        research: 94.2,
        subjects: [
            "Medicine",
            "Business",
            "Law",
            "Engineering",
            "Humanities"
        ],
        languages: [
            "English"
        ],
        tuition: "$21,000/year",
        description: "The University of Hong Kong is a public research university in Hong Kong. Founded in 1911, it is the oldest tertiary institution in Hong Kong.",
        history: [
            5,
            6,
            5,
            5,
            6
        ],
        programs: [
            "Bachelor of Medicine and Bachelor of Surgery (MBBS)",
            "Bachelor of Laws (LLB)",
            "MBA"
        ],
        campusPhoto: "https://images.unsplash.com/photo-1562774053-f5a02f6da861?auto=format&fit=crop&w=800&q=80",
        hasMedicine: true,
        founded: 1911,
        studentCount: 18000,
        facultyCount: 1400,
        acceptanceRate: 12.5,
        applicationDeadline: "March 31, 2027",
        scholarshipDetails: "HKU Presidential PhD Scholarship and HKSAR Government bursaries for eligible international undergraduates."
    },
    {
        id: "ntu",
        name: "Nanyang Technological University",
        location: "Singapore",
        overall: 95.2,
        citations: 97.5,
        employability: 93.8,
        intlStudents: 88.5,
        teaching: 91.0,
        research: 95.1,
        subjects: [
            "Engineering",
            "Sciences",
            "Business",
            "Medicine"
        ],
        languages: [
            "English"
        ],
        tuition: "$14,800/year",
        description: "NTU Singapore is a research-intensive public university consistently ranked among the world's best. It houses elite schools in engineering, science, business, and medicine.",
        history: [
            6,
            5,
            6,
            6,
            5
        ],
        programs: [
            "B.Eng. Computer Science",
            "MBBS Medicine (Imperial College Partner)",
            "MBA Strategy"
        ],
        campusPhoto: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
        hasMedicine: true,
        founded: 1991,
        studentCount: 33500,
        facultyCount: 2200,
        acceptanceRate: 8.0,
        applicationDeadline: "February 15, 2027",
        scholarshipDetails: "NTU Research Scholarship and ASEAN undergraduate scholarships for high-performing applicants."
    },
    {
        id: "snu",
        name: "Seoul National University",
        location: "South Korea",
        overall: 94.1,
        citations: 92.4,
        employability: 96.5,
        intlStudents: 59.8,
        teaching: 95.0,
        research: 95.8,
        subjects: [
            "Sciences",
            "Medicine",
            "Engineering",
            "Business",
            "Humanities"
        ],
        languages: [
            "Korean",
            "English"
        ],
        tuition: "$6,500/year",
        description: "Seoul National University is a national research university located in Seoul, South Korea. Founded in 1946, it is widely considered the most prestigious university in the country.",
        history: [
            7,
            7,
            7,
            7,
            7
        ],
        programs: [
            "MD Doctor of Medicine",
            "B.Sc. Semiconductor Engineering",
            "Global MBA"
        ],
        campusPhoto: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
        hasMedicine: true,
        founded: 1946,
        studentCount: 28600,
        facultyCount: 2100,
        acceptanceRate: 3.5,
        applicationDeadline: "January 31, 2027",
        scholarshipDetails: "Korean Government Scholarship Program (NIIED-GKS) for international students. SNU also offers need-based grants."
    },
    {
        id: "kyoto",
        name: "Kyoto University",
        location: "Japan",
        overall: 93.6,
        citations: 91.5,
        employability: 95.2,
        intlStudents: 61.2,
        teaching: 96.0,
        research: 95.5,
        subjects: [
            "Sciences",
            "Engineering",
            "Medicine",
            "Humanities"
        ],
        languages: [
            "Japanese",
            "English"
        ],
        tuition: "$5,200/year",
        description: "Kyoto University is a public research university in Kyoto, Japan. Founded in 1897, it is the second oldest imperial university and has produced numerous Nobel laureates.",
        history: [
            8,
            8,
            8,
            8,
            8
        ],
        programs: [
            "MD Medicine",
            "B.Sc. Chemistry",
            "Ph.D. Quantum Science"
        ],
        campusPhoto: "https://images.unsplash.com/photo-1562774053-f5a02f6da861?auto=format&fit=crop&w=800&q=80",
        hasMedicine: true,
        founded: 1897,
        studentCount: 22000,
        facultyCount: 2800,
        acceptanceRate: 7.2,
        applicationDeadline: "December 15, 2026",
        scholarshipDetails: "MEXT Scholarship (Japanese Government) and Kyoto University Scholarship for international research students."
    },
    {
        id: "kaist",
        name: "KAIST",
        location: "South Korea",
        overall: 92.8,
        citations: 95.1,
        employability: 94.0,
        intlStudents: 62.5,
        teaching: 91.2,
        research: 94.8,
        subjects: [
            "Engineering",
            "Sciences",
            "Business"
        ],
        languages: [
            "English",
            "Korean"
        ],
        tuition: "$7,000/year",
        description: "KAIST (Korea Advanced Institute of Science and Technology) is the first and top research-oriented science and engineering institution in South Korea.",
        history: [
            9,
            10,
            9,
            10,
            9
        ],
        programs: [
            "B.Sc. Electrical Engineering",
            "M.Sc. Robotics",
            "Ph.D. Aerospace Systems"
        ],
        campusPhoto: "https://images.unsplash.com/photo-1562774053-f5a02f6da861?auto=format&fit=crop&w=800&q=80",
        hasMedicine: false
    },
    {
        id: "cuhk",
        name: "The Chinese University of Hong Kong",
        location: "Hong Kong",
        overall: 92.1,
        citations: 94.8,
        employability: 91.0,
        intlStudents: 89.2,
        teaching: 88.5,
        research: 91.8,
        subjects: [
            "Medicine",
            "Sciences",
            "Social Sciences",
            "Business"
        ],
        languages: [
            "English",
            "Chinese"
        ],
        tuition: "$19,500/year",
        description: "CUHK is a top-ranked public research university in Shatin, Hong Kong. Established in 1963, it operates on a unique collegiate system and is highly bilingual.",
        history: [
            10,
            9,
            10,
            9,
            10
        ],
        programs: [
            "MBChB Doctor of Medicine",
            "B.Sc. Quantitative Finance",
            "B.Eng. Bioengineering"
        ],
        campusPhoto: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80",
        hasMedicine: true
    },
    {
        id: "tashkent-med",
        name: "Tashkent Medical Academy",
        location: "Uzbekistan",
        overall: 71.4,
        citations: 68.2,
        employability: 74.5,
        intlStudents: 85.0,
        teaching: 72.8,
        research: 66.4,
        subjects: [
            "Medicine",
            "Sciences"
        ],
        languages: [
            "English",
            "Russian",
            "Uzbek"
        ],
        tuition: "$3,800/year",
        description: "Tashkent Medical Academy is the premier medical institution in Uzbekistan. Established in 1919 and reorganized in 2005, it hosts over 2,000 international students studying medical programs.",
        history: [
            11,
            14,
            18,
            22,
            30
        ],
        programs: [
            "General Medicine (MD - English-medium)",
            "Pediatric Medicine",
            "Preventive Medicine",
            "M.Sc. Cardiovascular Surgery"
        ],
        campusPhoto: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
        hasMedicine: true,
        isPublic: true,
        hasScholarship: true
    },
    {
        id: "fergana-med",
        name: "Fergana State University Medical Centre",
        location: "Uzbekistan",
        overall: 69.8,
        citations: 65.5,
        employability: 71.2,
        intlStudents: 88.6,
        teaching: 74.0,
        research: 62.8,
        subjects: [
            "Medicine"
        ],
        languages: [
            "English",
            "Uzbek",
            "Russian"
        ],
        tuition: "$3,400/year",
        description: "Located in the scenic Fergana Valley, Fergana State Medical Faculty provides high-quality English-medium MBBS/MD courses. It is certified by WHO, NMC, and is a major hub for South Asian students.",
        history: [
            12,
            16,
            21,
            28,
            38
        ],
        programs: [
            "General Medicine (MD - 6 Years English-medium)",
            "Pharmacy (B.Pharm)",
            "Nursing"
        ],
        campusPhoto: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&w=800&q=80",
        hasMedicine: true
    },
    {
        id: "samarkand-med",
        name: "Samarkand State Medical University",
        location: "Uzbekistan",
        overall: 69.1,
        citations: 64.8,
        employability: 70.8,
        intlStudents: 87.2,
        teaching: 72.5,
        research: 61.2,
        subjects: [
            "Medicine",
            "Sciences"
        ],
        languages: [
            "English",
            "Uzbek",
            "Russian"
        ],
        tuition: "$3,500/year",
        description: "Established in 1930, Samarkand State Medical University is the oldest medical university in Central Asia. It features advanced digital medical campuses and clinic training units.",
        history: [
            13,
            15,
            20,
            26,
            35
        ],
        programs: [
            "General Medicine (MD)",
            "Dentistry",
            "Pharmacy",
            "Postgraduate Medical Specialties"
        ],
        campusPhoto: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
        hasMedicine: true,
        isPublic: true,
        hasScholarship: true
    },
    {
        id: "tashkent-pediatric",
        name: "Tashkent Pediatric Medical Institute",
        location: "Uzbekistan",
        overall: 68.2,
        citations: 63.8,
        employability: 69.5,
        intlStudents: 79.4,
        teaching: 73.1,
        research: 60.5,
        subjects: [
            "Medicine"
        ],
        languages: [
            "Russian",
            "Uzbek",
            "English"
        ],
        tuition: "$3,600/year",
        description: "A specialized medical institution focusing on pediatric medicine, pediatric surgery, and public health in Uzbekistan. Affiliated with top children's hospitals in Tashkent.",
        history: [
            14,
            18,
            23,
            29,
            39
        ],
        programs: [
            "Pediatric Medicine (MD)",
            "General Medicine",
            "B.Sc. Professional Nursing"
        ],
        campusPhoto: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
        hasMedicine: true
    },
    {
        id: "bukhara-med",
        name: "Bukhara State Medical Institute",
        location: "Uzbekistan",
        overall: 67.5,
        citations: 62.0,
        employability: 68.0,
        intlStudents: 84.5,
        teaching: 71.8,
        research: 59.4,
        subjects: [
            "Medicine"
        ],
        languages: [
            "English",
            "Russian",
            "Uzbek"
        ],
        tuition: "$3,300/year",
        description: "Named after Abu Ali ibn Sino (Avicenna), Bukhara State Medical Institute boasts modern anatomy labs and international collaborations with medical universities across Europe and Asia.",
        history: [
            15,
            19,
            25,
            32,
            42
        ],
        programs: [
            "MD General Medicine (English-medium)",
            "BDS Dentistry",
            "Medical Prophylactics"
        ],
        campusPhoto: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&w=800&q=80",
        hasMedicine: true
    },
    {
        id: "fudan",
        name: "Fudan University",
        location: "China",
        overall: 91.5,
        citations: 92.1,
        employability: 91.4,
        intlStudents: 70.2,
        teaching: 91.8,
        research: 92.5,
        subjects: [
            "Sciences",
            "Medicine",
            "Humanities",
            "Business"
        ],
        languages: [
            "Chinese",
            "English"
        ],
        tuition: "$4,200/year",
        description: "Fudan University is a prestigious public research university in Shanghai, China. Known for its liberal academic atmosphere and top-tier humanities and medicine.",
        history: [
            16,
            11,
            11,
            11,
            11
        ],
        programs: [
            "MD Clinical Medicine",
            "B.A. Economics",
            "MBA"
        ],
        campusPhoto: "https://images.unsplash.com/photo-1562774053-f5a02f6da861?auto=format&fit=crop&w=800&q=80",
        hasMedicine: true
    },
    {
        id: "zhejiang",
        name: "Zhejiang University",
        location: "China",
        overall: 90.8,
        citations: 91.8,
        employability: 90.2,
        intlStudents: 69.4,
        teaching: 91.0,
        research: 92.0,
        subjects: [
            "Engineering",
            "Medicine",
            "Sciences",
            "Business"
        ],
        languages: [
            "Chinese",
            "English"
        ],
        tuition: "$4,300/year",
        description: "Zhejiang University is an elite university in Hangzhou, China. Established in 1897, it is one of China's oldest, most prestigious institutions of higher education.",
        history: [
            17,
            12,
            12,
            12,
            12
        ],
        programs: [
            "B.Eng. Computer Engineering",
            "MBBS Medicine",
            "Ph.D. Materials Science"
        ],
        campusPhoto: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
        hasMedicine: true
    },
    {
        id: "ustc",
        name: "University of Science and Technology of China",
        location: "China",
        overall: 90.1,
        citations: 94.2,
        employability: 87.5,
        intlStudents: 42.0,
        teaching: 92.4,
        research: 91.0,
        subjects: [
            "Sciences",
            "Engineering"
        ],
        languages: [
            "Chinese",
            "English"
        ],
        tuition: "$4,000/year",
        description: "USTC is a national research university in Hefei, China, under the direct leadership of the Chinese Academy of Sciences. It is renowned for high-impact physics and chemistry.",
        history: [
            18,
            13,
            13,
            14,
            13
        ],
        programs: [
            "B.Sc. Physics",
            "B.Sc. Chemistry",
            "M.Sc. Quantum Computing"
        ],
        campusPhoto: "https://images.unsplash.com/photo-1562774053-f5a02f6da861?auto=format&fit=crop&w=800&q=80",
        hasMedicine: false
    },
    {
        id: "titech",
        name: "Tokyo Institute of Technology",
        location: "Japan",
        overall: 89.2,
        citations: 89.0,
        employability: 91.5,
        intlStudents: 60.1,
        teaching: 88.2,
        research: 89.4,
        subjects: [
            "Engineering",
            "Sciences"
        ],
        languages: [
            "Japanese",
            "English"
        ],
        tuition: "$5,200/year",
        description: "Tokyo Tech is the largest institution for higher education in Japan dedicated to science and technology and is at the forefront of nanotechnology and robotics research.",
        history: [
            19,
            17,
            16,
            17,
            16
        ],
        programs: [
            "B.Eng. Robotics",
            "M.Eng. Mechanical Engineering",
            "M.Sc. Materials Science"
        ],
        campusPhoto: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
        hasMedicine: false
    },
    {
        id: "osaka",
        name: "Osaka University",
        location: "Japan",
        overall: 88.9,
        citations: 87.2,
        employability: 91.0,
        intlStudents: 59.5,
        teaching: 89.8,
        research: 89.0,
        subjects: [
            "Sciences",
            "Medicine",
            "Engineering",
            "Humanities"
        ],
        languages: [
            "Japanese",
            "English"
        ],
        tuition: "$5,200/year",
        description: "Osaka University is a leading public research university located in Osaka, Japan. It is one of Japan's Imperial Universities and is highly ranked for biology and dentistry.",
        history: [
            20,
            19,
            19,
            18,
            19
        ],
        programs: [
            "MD Medicine",
            "Dentistry (DDS)",
            "B.Sc. Biotechnology"
        ],
        campusPhoto: "https://images.unsplash.com/photo-1562774053-f5a02f6da861?auto=format&fit=crop&w=800&q=80",
        hasMedicine: true
    },
    {
        id: "yonsei",
        name: "Yonsei University",
        location: "South Korea",
        overall: 88.1,
        citations: 86.8,
        employability: 92.4,
        intlStudents: 78.5,
        teaching: 86.5,
        research: 87.8,
        subjects: [
            "Sciences",
            "Medicine",
            "Business",
            "Humanities",
            "Engineering"
        ],
        languages: [
            "Korean",
            "English"
        ],
        tuition: "$8,500/year",
        description: "Yonsei University is a private research university in Seoul, South Korea. It is one of Korea's three prestigious 'SKY' universities and boasts one of the top medical schools.",
        history: [
            21,
            22,
            24,
            25,
            23
        ],
        programs: [
            "MD Medical Sciences",
            "Undergraduate Global Studies",
            "MBA Business Administration"
        ],
        campusPhoto: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
        hasMedicine: true,
        isPublic: false
    },
    {
        id: "korea-univ",
        name: "Korea University",
        location: "South Korea",
        overall: 87.5,
        citations: 86.0,
        employability: 93.1,
        intlStudents: 76.2,
        teaching: 85.8,
        research: 87.0,
        subjects: [
            "Sciences",
            "Medicine",
            "Business",
            "Engineering",
            "Law"
        ],
        languages: [
            "Korean",
            "English"
        ],
        tuition: "$8,200/year",
        description: "Korea University is a top-tier private research university in Seoul, South Korea, founded in 1905. Famous for its highly selective law, business, and medical programs.",
        history: [
            22,
            21,
            23,
            23,
            22
        ],
        programs: [
            "MD Medicine",
            "B.Sc. Cyber Security",
            "BBA Business Administration"
        ],
        campusPhoto: "https://images.unsplash.com/photo-1562774053-f5a02f6da861?auto=format&fit=crop&w=800&q=80",
        hasMedicine: true,
        isPublic: false
    },
    {
        id: "cuhk-sz",
        name: "CUHK Shenzhen",
        location: "China",
        overall: 86.8,
        citations: 88.2,
        employability: 85.5,
        intlStudents: 55.4,
        teaching: 87.2,
        research: 86.0,
        subjects: [
            "Engineering",
            "Business",
            "Sciences"
        ],
        languages: [
            "English",
            "Chinese"
        ],
        tuition: "$14,000/year",
        description: "An expansion of the Chinese University of Hong Kong in Shenzhen, providing highly globalized curriculums in data sciences, finance, and engineering in mainland China.",
        history: [
            23,
            27,
            32,
            40,
            52
        ],
        programs: [
            "B.Sc. Financial Engineering",
            "B.Eng. Computer Science",
            "M.Sc. Data Science"
        ],
        campusPhoto: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80",
        hasMedicine: false
    },
    {
        id: "tsukuba",
        name: "University of Tsukuba",
        location: "Japan",
        overall: 85.2,
        citations: 83.5,
        employability: 84.8,
        intlStudents: 64.0,
        teaching: 88.0,
        research: 84.2,
        subjects: [
            "Sciences",
            "Medicine",
            "Humanities"
        ],
        languages: [
            "Japanese",
            "English"
        ],
        tuition: "$5,200/year",
        description: "The University of Tsukuba is a leading research university in Tsukuba Science City, Ibaraki. It is highly regarded for biology, sports science, and medicine.",
        history: [
            24,
            25,
            26,
            24,
            25
        ],
        programs: [
            "MD Medical Sciences",
            "B.Sc. Interdisciplinary Science",
            "M.Sc. Sports Medicine"
        ],
        campusPhoto: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
        hasMedicine: true
    },
    {
        id: "iit-bombay",
        name: "Indian Institute of Technology Bombay",
        location: "India",
        overall: 84.9,
        citations: 89.4,
        employability: 92.5,
        intlStudents: 15.2,
        teaching: 79.8,
        research: 86.2,
        subjects: [
            "Engineering",
            "Sciences"
        ],
        languages: [
            "English"
        ],
        tuition: "$2,800/year",
        description: "IIT Bombay is a leading public research university located in Mumbai, India. It is a premier institute of national importance, famous for its selective engineering entrance exams.",
        history: [
            25,
            23,
            22,
            21,
            21
        ],
        programs: [
            "B.Tech. Computer Science",
            "B.Tech. Aerospace Engineering",
            "M.Tech. Microelectronics"
        ],
        campusPhoto: "https://images.unsplash.com/photo-1562774053-f5a02f6da861?auto=format&fit=crop&w=800&q=80",
        hasMedicine: false
    },
    {
        id: "iit-delhi",
        name: "Indian Institute of Technology Delhi",
        location: "India",
        overall: 84.2,
        citations: 88.1,
        employability: 91.8,
        intlStudents: 14.8,
        teaching: 78.5,
        research: 85.5,
        subjects: [
            "Engineering",
            "Sciences"
        ],
        languages: [
            "English"
        ],
        tuition: "$2,800/year",
        description: "IIT Delhi is a prestigious engineering and research institution in New Delhi, India. It offers highly competitive programs and carries a massive reputation globally.",
        history: [
            26,
            24,
            25,
            26,
            24
        ],
        programs: [
            "B.Tech. Electrical Engineering",
            "M.Tech. Artificial Intelligence",
            "Ph.D. Renewable Energy"
        ],
        campusPhoto: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
        hasMedicine: false
    },
    {
        id: "iisc",
        name: "Indian Institute of Science",
        location: "India",
        overall: 83.8,
        citations: 99.8,
        employability: 72.4,
        intlStudents: 12.0,
        teaching: 84.5,
        research: 89.2,
        subjects: [
            "Sciences",
            "Engineering"
        ],
        languages: [
            "English"
        ],
        tuition: "$1,800/year",
        description: "IISc Bangalore is a premier research institute for advanced scientific research and education in India. It holds the world's highest citation-per-faculty score in recent indicators.",
        history: [
            27,
            26,
            27,
            27,
            28
        ],
        programs: [
            "Bachelor of Science (Research)",
            "M.Tech. Nanotechnology",
            "Ph.D. Physics / Biochemistry"
        ],
        campusPhoto: "https://images.unsplash.com/photo-1562774053-f5a02f6da861?auto=format&fit=crop&w=800&q=80",
        hasMedicine: false
    },
    {
        id: "taiwan-univ",
        name: "National Taiwan University",
        location: "Taiwan",
        overall: 83.1,
        citations: 82.5,
        employability: 88.0,
        intlStudents: 48.2,
        teaching: 85.0,
        research: 84.8,
        subjects: [
            "Engineering",
            "Medicine",
            "Sciences",
            "Business",
            "Humanities"
        ],
        languages: [
            "Chinese",
            "English"
        ],
        tuition: "$3,900/year",
        description: "NTU is the prestigious national university of Taiwan located in Taipei. It has played an instrumental role in the economic development and semiconductor boom of Taiwan.",
        history: [
            28,
            28,
            29,
            28,
            27
        ],
        programs: [
            "MD Clinical Medicine",
            "B.Sc. Electrical Engineering",
            "Global MBA"
        ],
        campusPhoto: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80",
        hasMedicine: true
    },
    {
        id: "malaya",
        name: "Universiti Malaya",
        location: "Malaysia",
        overall: 82.5,
        citations: 81.2,
        employability: 85.4,
        intlStudents: 75.8,
        teaching: 82.1,
        research: 83.0,
        subjects: [
            "Medicine",
            "Sciences",
            "Engineering",
            "Business"
        ],
        languages: [
            "English",
            "Malay"
        ],
        tuition: "$6,200/year",
        description: "Universiti Malaya is the oldest and highest-ranking university in Malaysia. Its campus sits in southwest Kuala Lumpur, featuring a massive specialized medical medical complex.",
        history: [
            29,
            30,
            31,
            30,
            29
        ],
        programs: [
            "MBBS Doctor of Medicine",
            "B.Eng. Civil Engineering",
            "M.Sc. Business Analytics"
        ],
        campusPhoto: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
        hasMedicine: true,
        isPublic: true,
        hasScholarship: true
    },
    {
        id: "chula",
        name: "Chulalongkorn University",
        location: "Thailand",
        overall: 81.0,
        citations: 78.4,
        employability: 84.1,
        intlStudents: 38.6,
        teaching: 83.5,
        research: 80.8,
        subjects: [
            "Medicine",
            "Sciences",
            "Business",
            "Engineering"
        ],
        languages: [
            "Thai",
            "English"
        ],
        tuition: "$5,800/year",
        description: "Chulalongkorn University is the oldest and most prestigious university in Thailand. It has a high reputation for medical clinical research and public health.",
        history: [
            30,
            31,
            33,
            34,
            32
        ],
        programs: [
            "Doctor of Medicine (English-medium)",
            "B.Sc. Nano-Engineering",
            "BBA International Business"
        ],
        campusPhoto: "https://images.unsplash.com/photo-1562774053-f5a02f6da861?auto=format&fit=crop&w=800&q=80",
        hasMedicine: true
    },
    {
        id: "tashkent-state",
        name: "National University of Uzbekistan",
        location: "Uzbekistan",
        overall: 65.2,
        citations: 58.4,
        employability: 62.1,
        intlStudents: 32.5,
        teaching: 71.0,
        research: 61.8,
        subjects: [
            "Sciences",
            "Humanities",
            "Business"
        ],
        languages: [
            "Uzbek",
            "Russian",
            "English"
        ],
        tuition: "$2,200/year",
        description: "The National University of Uzbekistan is the oldest and largest university in Uzbekistan. Established in 1918, it offers deep training in physics, mathematics, and philosophy.",
        history: [
            31,
            38,
            48,
            56,
            70
        ],
        programs: [
            "B.Sc. Theoretical Mathematics",
            "B.Sc. Applied Physics",
            "M.A. Linguistics"
        ],
        campusPhoto: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
        hasMedicine: false
    },
    {
        id: "tashkent-polytech",
        name: "Tashkent State Technical University",
        location: "Uzbekistan",
        overall: 63.8,
        citations: 56.2,
        employability: 64.0,
        intlStudents: 28.6,
        teaching: 69.5,
        research: 60.2,
        subjects: [
            "Engineering"
        ],
        languages: [
            "Uzbek",
            "Russian"
        ],
        tuition: "$2,400/year",
        description: "Tashkent State Technical University is one of the oldest technical universities in Central Asia, preparing elite engineering minds for industrial machinery and energy grids.",
        history: [
            32,
            40,
            50,
            62,
            78
        ],
        programs: [
            "B.Eng. Mechanical Engineering",
            "B.Eng. Petroleum & Gas",
            "M.Eng. Power System Grids"
        ],
        campusPhoto: "https://images.unsplash.com/photo-1562774053-f5a02f6da861?auto=format&fit=crop&w=800&q=80",
        hasMedicine: false
    },
    {
        id: "tashkent-webster",
        name: "Webster University in Tashkent",
        location: "Uzbekistan",
        overall: 62.5,
        citations: 54.0,
        employability: 70.2,
        intlStudents: 45.8,
        teaching: 68.0,
        research: 50.4,
        subjects: [
            "Business",
            "Humanities"
        ],
        languages: [
            "English"
        ],
        tuition: "$4,200/year",
        description: "Webster University in Tashkent is an official American branch campus, delivering full US-accredited business administration, media, and education degrees in Central Asia.",
        history: [
            33,
            42,
            55,
            75,
            95
        ],
        programs: [
            "Bachelor of Business Administration (BBA)",
            "BA Media Studies",
            "MA TESOL (Applied Linguistics)"
        ],
        campusPhoto: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80",
        hasMedicine: false,
        isPublic: false
    },
    {
        id: "fergana-polytech",
        name: "Fergana Polytechnic Institute",
        location: "Uzbekistan",
        overall: 61.2,
        citations: 53.8,
        employability: 59.5,
        intlStudents: 21.0,
        teaching: 67.2,
        research: 58.5,
        subjects: [
            "Engineering"
        ],
        languages: [
            "Uzbek",
            "Russian"
        ],
        tuition: "$2,000/year",
        description: "An engineering focused institute located in Fergana, providing essential training in civil engineering, textile production, and chemical processing.",
        history: [
            34,
            45,
            58,
            71,
            88
        ],
        programs: [
            "B.Eng. Civil Construction",
            "B.Eng. Textile Engineering",
            "B.Sc. Chemical Technology"
        ],
        campusPhoto: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
        hasMedicine: false
    },
    {
        id: "akfa-univ",
        name: "Central Asian University (former AKFA)",
        location: "Uzbekistan",
        overall: 60.5,
        citations: 51.2,
        employability: 68.5,
        intlStudents: 38.4,
        teaching: 66.8,
        research: 48.0,
        subjects: [
            "Medicine",
            "Business",
            "Engineering"
        ],
        languages: [
            "English"
        ],
        tuition: "$5,500/year",
        description: "A private university in Tashkent offering dynamic curricula in collaboration with medical centers in Turkey and South Korea. One of the first modern private medical schools.",
        history: [
            35,
            48,
            62,
            85,
            100
        ],
        programs: [
            "MD Doctor of Medicine (English)",
            "B.Sc. Computer Science",
            "BBA Finance"
        ],
        campusPhoto: "https://images.unsplash.com/photo-1562774053-f5a02f6da861?auto=format&fit=crop&w=800&q=80",
        hasMedicine: true,
        isPublic: false,
        hasScholarship: true
    },
    {
        id: "hokkaido",
        name: "Hokkaido University",
        location: "Japan",
        overall: 80.5,
        citations: 77.2,
        employability: 81.4,
        intlStudents: 52.8,
        teaching: 84.1,
        research: 79.5,
        subjects: [
            "Sciences",
            "Medicine",
            "Engineering"
        ],
        languages: [
            "Japanese",
            "English"
        ],
        tuition: "$5,200/year",
        description: "Hokkaido University is a leading Japanese national university, famous for agricultural sciences, environmental engineering, and its beautiful historic campus in Sapporo.",
        history: [
            36,
            35,
            34,
            33,
            33
        ],
        programs: [
            "MD Clinical Medicine",
            "B.Sc. Agriculture Science",
            "M.Sc. Environmental Biology"
        ],
        campusPhoto: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
        hasMedicine: true
    },
    {
        id: "kyushu",
        name: "Kyushu University",
        location: "Japan",
        overall: 79.8,
        citations: 76.5,
        employability: 82.0,
        intlStudents: 54.0,
        teaching: 83.2,
        research: 78.4,
        subjects: [
            "Sciences",
            "Medicine",
            "Engineering"
        ],
        languages: [
            "Japanese",
            "English"
        ],
        tuition: "$5,200/year",
        description: "Kyushu University in Fukuoka is one of Japan's seven Imperial Universities. It hosts top-tier programs in engineering, biotechnology, and health sciences.",
        history: [
            37,
            36,
            35,
            35,
            34
        ],
        programs: [
            "MD Medical Surgery",
            "B.Eng. Materials Science",
            "M.Sc. Marine Biology"
        ],
        campusPhoto: "https://images.unsplash.com/photo-1562774053-f5a02f6da861?auto=format&fit=crop&w=800&q=80",
        hasMedicine: true
    },
    {
        id: "mahidol",
        name: "Mahidol University",
        location: "Thailand",
        overall: 78.9,
        citations: 79.2,
        employability: 74.0,
        intlStudents: 29.4,
        teaching: 81.8,
        research: 75.2,
        subjects: [
            "Medicine",
            "Sciences"
        ],
        languages: [
            "Thai",
            "English"
        ],
        tuition: "$6,500/year",
        description: "Mahidol University began as a hospital-affiliated school in 1888. It is Thailand's highest ranked medical and health science institution.",
        history: [
            38,
            37,
            36,
            37,
            36
        ],
        programs: [
            "MD Medicine (Siriraj Hospital)",
            "B.Sc. Medical Technology",
            "Ph.D. Virology"
        ],
        campusPhoto: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80",
        hasMedicine: true
    },
    {
        id: "universitas-indonesia",
        name: "Universitas Indonesia",
        location: "Indonesia",
        overall: 78.2,
        citations: 71.0,
        employability: 82.5,
        intlStudents: 25.4,
        teaching: 83.0,
        research: 74.8,
        subjects: [
            "Medicine",
            "Sciences",
            "Business",
            "Humanities"
        ],
        languages: [
            "Indonesian",
            "English"
        ],
        tuition: "$4,500/year",
        description: "Universitas Indonesia is a state university in Depok, West Java and Jakarta. It is the oldest modern higher education institution in Indonesia.",
        history: [
            39,
            39,
            40,
            42,
            45
        ],
        programs: [
            "MD General Medicine (International)",
            "Bachelor of Economics",
            "B.Eng. Electrical Engineering"
        ],
        campusPhoto: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
        hasMedicine: true
    },
    {
        id: "gadjah-mada",
        name: "Universitas Gadjah Mada",
        location: "Indonesia",
        overall: 77.5,
        citations: 69.4,
        employability: 83.1,
        intlStudents: 22.8,
        teaching: 82.4,
        research: 73.5,
        subjects: [
            "Medicine",
            "Sciences",
            "Engineering",
            "Business"
        ],
        languages: [
            "Indonesian",
            "English"
        ],
        tuition: "$4,000/year",
        description: "UGM is a premier public research university located in Yogyakarta, Indonesia. Founded in 1949, it is the largest and most historically significant university in Indonesia.",
        history: [
            40,
            41,
            41,
            44,
            46
        ],
        programs: [
            "MD Clinical Medicine",
            "B.Eng. Mechanical Engineering",
            "B.Sc. Pharmacy"
        ],
        campusPhoto: "https://images.unsplash.com/photo-1562774053-f5a02f6da861?auto=format&fit=crop&w=800&q=80",
        hasMedicine: true
    },
    {
        id: "lomonosov-tashkent",
        name: "Lomonosov Moscow State University Branch in Tashkent",
        location: "Uzbekistan",
        overall: 60.1,
        citations: 50.8,
        employability: 65.2,
        intlStudents: 15.6,
        teaching: 67.5,
        research: 57.2,
        subjects: [
            "Sciences",
            "Business"
        ],
        languages: [
            "Russian"
        ],
        tuition: "$2,800/year",
        description: "A branch campus of the elite Lomonosov Moscow State University, providing high-quality Russian instruction in applied mathematics, psychology, and management in Tashkent.",
        history: [
            41,
            49,
            61,
            74,
            90
        ],
        programs: [
            "B.Sc. Applied Mathematics & Informatics",
            "B.Sc. Psychology",
            "M.Sc. Management"
        ],
        campusPhoto: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
        hasMedicine: false
    },
    {
        id: "plekhanov-tashkent",
        name: "Plekhanov Russian University of Economics (Tashkent Branch)",
        location: "Uzbekistan",
        overall: 59.2,
        citations: 48.5,
        employability: 67.8,
        intlStudents: 22.4,
        teaching: 65.0,
        research: 52.0,
        subjects: [
            "Business"
        ],
        languages: [
            "Russian",
            "English"
        ],
        tuition: "$3,000/year",
        description: "The first branch of a foreign university opened in Uzbekistan (established in 2001). It has trained thousands of economists and financial analytics for Central Asia.",
        history: [
            42,
            52,
            65,
            80,
            105
        ],
        programs: [
            "B.Sc. Economics & Business Analytics",
            "B.Sc. Finance",
            "MBA Digital Business"
        ],
        campusPhoto: "https://images.unsplash.com/photo-1562774053-f5a02f6da861?auto=format&fit=crop&w=800&q=80",
        hasMedicine: false
    },
    {
        id: "nankai",
        name: "Nankai University",
        location: "China",
        overall: 76.8,
        citations: 82.0,
        employability: 72.8,
        intlStudents: 41.5,
        teaching: 79.2,
        research: 75.8,
        subjects: [
            "Sciences",
            "Business",
            "Medicine",
            "Humanities"
        ],
        languages: [
            "Chinese",
            "English"
        ],
        tuition: "$3,800/year",
        description: "Nankai University is a public research university in Tianjin, China. Founded in 1919 by educators Yan Xiu and Zhang Boling, it is famous for economics and chemistry.",
        history: [
            43,
            42,
            42,
            41,
            40
        ],
        programs: [
            "B.Sc. Chemistry",
            "MD General Medicine",
            "B.A. Economics"
        ],
        campusPhoto: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80",
        hasMedicine: true
    },
    {
        id: "wuhan",
        name: "Wuhan University",
        location: "China",
        overall: 76.2,
        citations: 80.5,
        employability: 74.0,
        intlStudents: 50.8,
        teaching: 78.4,
        research: 76.0,
        subjects: [
            "Medicine",
            "Sciences",
            "Engineering",
            "Humanities"
        ],
        languages: [
            "Chinese",
            "English"
        ],
        tuition: "$4,000/year",
        description: "Wuhan University in Wuhan, Hubei, is one of China's most picturesque campuses. Founded in 1893, it has exceptionally strong clinical medicine and geography programs.",
        history: [
            44,
            43,
            44,
            43,
            41
        ],
        programs: [
            "MBBS Doctor of Medicine",
            "B.Sc. Geospatial Engineering",
            "Ph.D. Virology"
        ],
        campusPhoto: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
        hasMedicine: true
    },
    {
        id: "saitama",
        name: "Saitama University",
        location: "Japan",
        overall: 75.8,
        citations: 72.4,
        employability: 73.2,
        intlStudents: 31.0,
        teaching: 81.5,
        research: 74.0,
        subjects: [
            "Sciences",
            "Engineering",
            "Humanities"
        ],
        languages: [
            "Japanese"
        ],
        tuition: "$5,200/year",
        description: "Saitama University is a Japanese national university located in a suburban area of Saitama City, offering highly practical science and engineering studies.",
        history: [
            45,
            46,
            45,
            46,
            44
        ],
        programs: [
            "B.Eng. Electrical Engineering",
            "B.Sc. Mathematical Physics",
            "M.A. Global Sociology"
        ],
        campusPhoto: "https://images.unsplash.com/photo-1562774053-f5a02f6da861?auto=format&fit=crop&w=800&q=80",
        hasMedicine: false
    },
    {
        id: "tsinghua-sz",
        name: "Tsinghua Shenzhen International Graduate School",
        location: "China",
        overall: 75.2,
        citations: 84.8,
        employability: 70.1,
        intlStudents: 42.6,
        teaching: 72.8,
        research: 76.5,
        subjects: [
            "Engineering",
            "Sciences",
            "Business"
        ],
        languages: [
            "English",
            "Chinese"
        ],
        tuition: "$6,500/year",
        description: "Established in 2001, this graduate school offers top-tier research collaborations in environmental technology, financial technology, and biotechnology.",
        history: [
            46,
            44,
            43,
            45,
            47
        ],
        programs: [
            "M.Sc. Environmental Technology",
            "M.Sc. Financial Technology",
            "M.Sc. Advanced Materials"
        ],
        campusPhoto: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
        hasMedicine: false
    },
    {
        id: "amity-uz",
        name: "Amity University in Tashkent",
        location: "Uzbekistan",
        overall: 58.1,
        citations: 45.4,
        employability: 65.5,
        intlStudents: 28.0,
        teaching: 63.8,
        research: 49.2,
        subjects: [
            "Engineering",
            "Business"
        ],
        languages: [
            "English"
        ],
        tuition: "$3,200/year",
        description: "An Indian private branch university in Tashkent, delivering highly practical coursework in information technology, computer engineering, and tourism management.",
        history: [
            47,
            55,
            70,
            92,
            110
        ],
        programs: [
            "B.Tech. Computer Science & Engineering",
            "B.Sc. Information Technology",
            "BBA Business Administration"
        ],
        campusPhoto: "https://images.unsplash.com/photo-1562774053-f5a02f6da861?auto=format&fit=crop&w=800&q=80",
        hasMedicine: false
    },
    {
        id: "Turin-polytech",
        name: "Turin Polytechnic University in Tashkent",
        location: "Uzbekistan",
        overall: 57.8,
        citations: 44.2,
        employability: 69.1,
        intlStudents: 20.2,
        teaching: 62.5,
        research: 51.4,
        subjects: [
            "Engineering"
        ],
        languages: [
            "English",
            "Italian"
        ],
        tuition: "$3,500/year",
        description: "Established in 2009 in partnership with Politecnico di Torino (Italy), this university prepares elite automotive, mechanical, and civil engineers in Uzbekistan.",
        history: [
            48,
            54,
            68,
            88,
            102
        ],
        programs: [
            "B.Sc. Mechanical Engineering (Automotive)",
            "B.Sc. Civil Engineering",
            "B.Sc. Computer Engineering"
        ],
        campusPhoto: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80",
        hasMedicine: false
    },
    {
        id: "inha-tashkent",
        name: "Inha University in Tashkent",
        location: "Uzbekistan",
        overall: 57.2,
        citations: 43.8,
        employability: 71.4,
        intlStudents: 24.5,
        teaching: 61.2,
        research: 50.5,
        subjects: [
            "Engineering",
            "Business"
        ],
        languages: [
            "English"
        ],
        tuition: "$3,600/year",
        description: "Created in cooperation with Inha University in South Korea. Features cutting-edge logistics, software engineering, and business administration programs taught fully in English.",
        history: [
            49,
            53,
            67,
            84,
            98
        ],
        programs: [
            "B.Sc. Computer Science & Engineering",
            "B.Sc. Information & Communication Engineering",
            "B.Sc. Business & Logistics"
        ],
        campusPhoto: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
        hasMedicine: false
    },
    {
        id: "world-economy-univ",
        name: "University of World Economy and Diplomacy",
        location: "Uzbekistan",
        overall: 56.5,
        citations: 42.1,
        employability: 68.0,
        intlStudents: 31.2,
        teaching: 63.0,
        research: 48.8,
        subjects: [
            "Business",
            "Law",
            "Humanities"
        ],
        languages: [
            "Uzbek",
            "English",
            "Russian"
        ],
        tuition: "$2,800/year",
        description: "UWED is the elite academy for foreign service in Uzbekistan. It trains diplomats, international lawyers, and macroeconomists with extensive language training.",
        history: [
            50,
            56,
            72,
            90,
            108
        ],
        programs: [
            "B.A. International Relations",
            "B.A. International Law",
            "M.A. Global Diplomacy"
        ],
        campusPhoto: "https://images.unsplash.com/photo-1562774053-f5a02f6da861?auto=format&fit=crop&w=800&q=80",
        hasMedicine: false
    }
];
const FEATURED_ARTICLES = [
    {
        id: "uzbekistan-med",
        title: "Why Central Asia is the New Frontier for Medicine",
        subtitle: "Uzbekistan’s English-Medium Reforms Spark Recruitment Wave",
        source: "Asia Higher Ed Report",
        date: "May 20, 2026",
        readTime: "8 min read",
        contentSummary: "Standardized medical academies like Tashkent Medical Academy and Fergana State have lower tuition ($3,000–$3,800/year) and WHO-recognized certifications, drawing thousands of international medical aspirants annually.",
        image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "multilingual-shift",
        title: "The Multilingual Shift in Asian Higher Education",
        subtitle: "Branch Campuses Break Traditional Language Barriers",
        source: "Global Academic Outlook",
        date: "April 15, 2026",
        readTime: "6 min read",
        contentSummary: "From Inha and Webster in Tashkent to global collaborative institutes in Shenzhen, the rapid rise of English-only tracks is shifting student demographics, drawing focus away from European centers.",
        image: "https://images.unsplash.com/photo-1562774053-f5a02f6da861?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "metric-weights-guide",
        title: "Rethinking Citations vs. Employability in Ranking Systems",
        subtitle: "Principal Frontend Architect Shares Tabular Recalculation Methods",
        source: "Institutional Analytics Quarterly",
        date: "March 2, 2026",
        readTime: "11 min read",
        contentSummary: "For-hire rankings often mask true career outcomes. A breakdown of why student recruitment teams must pivot to customized metrics and how to utilize client-side  weights to guide university advisory.",
        image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=600&q=80"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/filters/FilterPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FilterPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.mjs [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.mjs [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.mjs [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$navigation$2f$SidebarContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/navigation/SidebarContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
// List of all unique subjects in the mock data
const ALL_SUBJECTS = [
    "Medicine",
    "Engineering",
    "Sciences",
    "Business",
    "Humanities",
    "Law",
    "Social Sciences"
];
function FilterPanel() {
    _s();
    const { filters, setFilters, clearFilters, theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$navigation$2f$SidebarContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"])();
    const [openSections, setOpenSections] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState({
        search: true,
        country: true,
        rank: true,
        tuition: true,
        type: true,
        subjects: true,
        scholarship: true
    });
    const activeFilterCount = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "FilterPanel.useMemo[activeFilterCount]": ()=>{
            let count = 0;
            if (filters.searchQuery.trim()) count += 1;
            if (filters.country) count += 1;
            if (filters.subjects.length > 0) count += filters.subjects.length;
            if (filters.qsRange[0] !== 1 || filters.qsRange[1] !== 50) count += 1;
            if (filters.tuitionRange[0] !== 0 || filters.tuitionRange[1] !== 25000) count += 1;
            if (filters.isPublic !== null) count += 1;
            if (filters.scholarshipOnly) count += 1;
            return count;
        }
    }["FilterPanel.useMemo[activeFilterCount]"], [
        filters
    ]);
    const toggleSection = (key)=>{
        setOpenSections((prev)=>({
                ...prev,
                [key]: !prev[key]
            }));
    };
    // Extract unique locations dynamically
    const countries = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "FilterPanel.useMemo[countries]": ()=>{
            return Array.from(new Set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_UNIVERSITIES"].map({
                "FilterPanel.useMemo[countries]": (u)=>u.location
            }["FilterPanel.useMemo[countries]"]))).sort();
        }
    }["FilterPanel.useMemo[countries]"], []);
    // Update query field
    const handleSearchChange = (e)=>{
        setFilters((prev)=>({
                ...prev,
                searchQuery: e.target.value
            }));
    };
    // Toggle subject filter
    const toggleSubject = (sub)=>{
        setFilters((prev)=>{
            const active = prev.subjects.includes(sub) ? prev.subjects.filter((s)=>s !== sub) : [
                ...prev.subjects,
                sub
            ];
            return {
                ...prev,
                subjects: active
            };
        });
    };
    // Dual Range change handler for QS Rank
    const handleRankMinChange = (e)=>{
        const minVal = Math.min(Number(e.target.value), filters.qsRange[1] - 1);
        setFilters((prev)=>({
                ...prev,
                qsRange: [
                    minVal,
                    prev.qsRange[1]
                ]
            }));
    };
    const handleRankMaxChange = (e)=>{
        const maxVal = Math.max(Number(e.target.value), filters.qsRange[0] + 1);
        setFilters((prev)=>({
                ...prev,
                qsRange: [
                    prev.qsRange[0],
                    maxVal
                ]
            }));
    };
    // Dual Range change handler for Tuition
    const handleTuitionMinChange = (e)=>{
        const minVal = Math.min(Number(e.target.value), filters.tuitionRange[1] - 500);
        setFilters((prev)=>({
                ...prev,
                tuitionRange: [
                    minVal,
                    prev.tuitionRange[1]
                ]
            }));
    };
    const handleTuitionMaxChange = (e)=>{
        const maxVal = Math.max(Number(e.target.value), filters.tuitionRange[0] + 500);
        setFilters((prev)=>({
                ...prev,
                tuitionRange: [
                    prev.tuitionRange[0],
                    maxVal
                ]
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-3b8e5d2970aa58b9" + " " + "w-full flex flex-col space-y-6 font-sans text-xs",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-3b8e5d2970aa58b9" + " " + "sticky top-0 z-10 flex items-center justify-between pb-3 border-b border-slate-200 dark:border-cyber-border bg-white/95 dark:bg-cyber-dark/95 backdrop-blur-md transition-colors duration-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-3b8e5d2970aa58b9" + " " + "flex items-center space-x-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                className: "h-4 w-4 text-slate-700 dark:text-cyber-yellow"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-3b8e5d2970aa58b9" + " " + "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-3b8e5d2970aa58b9" + " " + "font-bold uppercase tracking-wider text-slate-900 dark:text-white",
                                        children: "Target Filters"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-3b8e5d2970aa58b9" + " " + "inline-flex items-center justify-center rounded-full bg-amber-100 text-amber-800 dark:bg-cyber-yellow/15 dark:text-cyber-yellow text-[10px] font-semibold uppercase px-2 py-0.5",
                                        children: activeFilterCount
                                    }, activeFilterCount, false, {
                                        fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: clearFilters,
                        className: "jsx-3b8e5d2970aa58b9" + " " + "flex items-center text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-cyber-yellow transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                className: "h-3 w-3 mr-1"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            "Clear"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-3b8e5d2970aa58b9" + " " + "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>toggleSection("search"),
                        className: "jsx-3b8e5d2970aa58b9" + " " + "flex w-full items-center justify-between text-left text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500",
                        children: [
                            "Institution Search",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                className: `h-3 w-3 transition-transform duration-200 ${openSections.search ? "rotate-180" : ""}`
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: openSections.search && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-3b8e5d2970aa58b9" + " " + "overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-3b8e5d2970aa58b9" + " " + "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: filters.searchQuery,
                                        onChange: handleSearchChange,
                                        placeholder: "Search name or location...",
                                        className: "jsx-3b8e5d2970aa58b9" + " " + "w-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-cyber-gray px-3 py-2 pl-9 rounded text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-slate-800 dark:focus:border-cyber-yellow transition-all duration-200"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                        lineNumber: 136,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                        lineNumber: 143,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                lineNumber: 135,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                            lineNumber: 128,
                            columnNumber: 13
                        }, this)
                    }, void 0, false)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-3b8e5d2970aa58b9" + " " + "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>toggleSection("country"),
                        className: "jsx-3b8e5d2970aa58b9" + " " + "flex w-full items-center justify-between text-left text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500",
                        children: [
                            "Country / Territory",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                className: `h-3 w-3 transition-transform duration-200 ${openSections.country ? "rotate-180" : ""}`
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                lineNumber: 158,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: openSections.country && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-3b8e5d2970aa58b9" + " " + "overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-3b8e5d2970aa58b9" + " " + "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: filters.country,
                                        onChange: (e)=>setFilters((prev)=>({
                                                    ...prev,
                                                    country: e.target.value
                                                })),
                                        className: "jsx-3b8e5d2970aa58b9" + " " + "w-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-cyber-gray px-3 py-2 pl-9 rounded text-slate-800 dark:text-slate-100 focus:outline-none focus:border-slate-800 dark:focus:border-cyber-yellow transition-all duration-200 appearance-none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                className: "jsx-3b8e5d2970aa58b9",
                                                children: "All Locations"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                                lineNumber: 175,
                                                columnNumber: 19
                                            }, this),
                                            countries.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: c,
                                                    className: "jsx-3b8e5d2970aa58b9",
                                                    children: c
                                                }, c, false, {
                                                    fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 21
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                        lineNumber: 170,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                        className: "absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                        lineNumber: 182,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-3b8e5d2970aa58b9" + " " + "absolute right-3 top-3 pointer-events-none border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-400 dark:border-t-slate-500 w-0 h-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                        lineNumber: 183,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                lineNumber: 169,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                            lineNumber: 162,
                            columnNumber: 13
                        }, this)
                    }, void 0, false)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-3b8e5d2970aa58b9" + " " + "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>toggleSection("rank"),
                        className: "jsx-3b8e5d2970aa58b9" + " " + "flex w-full items-center justify-between text-left text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500",
                        children: [
                            "Calculated Rank",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                className: `h-3 w-3 transition-transform duration-200 ${openSections.rank ? "rotate-180" : ""}`
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                lineNumber: 198,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                        lineNumber: 192,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: openSections.rank && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-3b8e5d2970aa58b9" + " " + "overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-3b8e5d2970aa58b9" + " " + "flex justify-between items-baseline",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-3b8e5d2970aa58b9" + " " + "block text-[10px] uppercase font-bold tracking-widest text-slate-400 dark:text-slate-500",
                                            children: "Calculated Rank"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                            lineNumber: 210,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-3b8e5d2970aa58b9" + " " + "font-mono text-[10px] font-bold text-slate-700 dark:text-cyber-yellow-bright",
                                            children: [
                                                "#",
                                                filters.qsRange[0],
                                                " - #",
                                                filters.qsRange[1]
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                            lineNumber: 213,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                    lineNumber: 209,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-3b8e5d2970aa58b9" + " " + "relative h-6 mt-1 flex items-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-3b8e5d2970aa58b9" + " " + "relative w-full h-1 bg-slate-200 dark:bg-slate-800 rounded",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    left: `${(filters.qsRange[0] - 1) / 49 * 100}%`,
                                                    right: `${100 - (filters.qsRange[1] - 1) / 49 * 100}%`
                                                },
                                                className: "jsx-3b8e5d2970aa58b9" + " " + "absolute h-full bg-slate-800 dark:bg-cyber-yellow rounded"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                                lineNumber: 220,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: "1",
                                                max: "50",
                                                value: filters.qsRange[0],
                                                onChange: handleRankMinChange,
                                                style: {
                                                    zIndex: filters.qsRange[0] > 40 ? 5 : 3
                                                },
                                                className: "jsx-3b8e5d2970aa58b9" + " " + "absolute pointer-events-none appearance-none w-full h-1 bg-transparent top-0 left-0 accent-slate-900 dark:accent-cyber-yellow"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                                lineNumber: 227,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: "1",
                                                max: "50",
                                                value: filters.qsRange[1],
                                                onChange: handleRankMaxChange,
                                                className: "jsx-3b8e5d2970aa58b9" + " " + "absolute pointer-events-none appearance-none w-full h-1 bg-transparent top-0 left-0 accent-slate-900 dark:accent-cyber-yellow"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                                lineNumber: 238,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                        lineNumber: 218,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                    lineNumber: 217,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                            lineNumber: 202,
                            columnNumber: 13
                        }, this)
                    }, void 0, false)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-3b8e5d2970aa58b9" + " " + "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>toggleSection("tuition"),
                        className: "jsx-3b8e5d2970aa58b9" + " " + "flex w-full items-center justify-between text-left text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500",
                        children: [
                            "Tuition / Year (USD)",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                className: `h-3 w-3 transition-transform duration-200 ${openSections.tuition ? "rotate-180" : ""}`
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                lineNumber: 261,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                        lineNumber: 255,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: openSections.tuition && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-3b8e5d2970aa58b9" + " " + "overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-3b8e5d2970aa58b9" + " " + "flex justify-between items-baseline",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-3b8e5d2970aa58b9" + " " + "block text-[10px] uppercase font-bold tracking-widest text-slate-400 dark:text-slate-500",
                                            children: "Tuition / Year (USD)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                            lineNumber: 273,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-3b8e5d2970aa58b9" + " " + "font-mono text-[10px] font-bold text-slate-700 dark:text-cyber-yellow-bright",
                                            children: [
                                                "$",
                                                filters.tuitionRange[0].toLocaleString(),
                                                " - $",
                                                filters.tuitionRange[1].toLocaleString()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                            lineNumber: 276,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                    lineNumber: 272,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-3b8e5d2970aa58b9" + " " + "relative h-6 mt-1 flex items-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-3b8e5d2970aa58b9" + " " + "relative w-full h-1 bg-slate-200 dark:bg-slate-800 rounded",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    left: `${filters.tuitionRange[0] / 25000 * 100}%`,
                                                    right: `${100 - filters.tuitionRange[1] / 25000 * 100}%`
                                                },
                                                className: "jsx-3b8e5d2970aa58b9" + " " + "absolute h-full bg-slate-800 dark:bg-cyber-yellow rounded"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                                lineNumber: 283,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: "0",
                                                max: "25000",
                                                step: "500",
                                                value: filters.tuitionRange[0],
                                                onChange: handleTuitionMinChange,
                                                style: {
                                                    zIndex: filters.tuitionRange[0] > 20000 ? 5 : 3
                                                },
                                                className: "jsx-3b8e5d2970aa58b9" + " " + "absolute pointer-events-none appearance-none w-full h-1 bg-transparent top-0 left-0 accent-slate-900 dark:accent-cyber-yellow"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                                lineNumber: 290,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: "0",
                                                max: "25000",
                                                step: "500",
                                                value: filters.tuitionRange[1],
                                                onChange: handleTuitionMaxChange,
                                                className: "jsx-3b8e5d2970aa58b9" + " " + "absolute pointer-events-none appearance-none w-full h-1 bg-transparent top-0 left-0 accent-slate-900 dark:accent-cyber-yellow"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                                lineNumber: 302,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                        lineNumber: 281,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                    lineNumber: 280,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                            lineNumber: 265,
                            columnNumber: 13
                        }, this)
                    }, void 0, false)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                lineNumber: 254,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-3b8e5d2970aa58b9" + " " + "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>toggleSection("type"),
                        className: "jsx-3b8e5d2970aa58b9" + " " + "flex w-full items-center justify-between text-left text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500",
                        children: [
                            "Institution Type",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                className: `h-3 w-3 transition-transform duration-200 ${openSections.type ? "rotate-180" : ""}`
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                lineNumber: 326,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                        lineNumber: 320,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: openSections.type && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-3b8e5d2970aa58b9" + " " + "overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-3b8e5d2970aa58b9" + " " + "grid grid-cols-3 gap-1 bg-slate-100 dark:bg-cyber-gray p-0.5 rounded border border-slate-200 dark:border-slate-800",
                                children: [
                                    {
                                        label: "All",
                                        value: null
                                    },
                                    {
                                        label: "Public",
                                        value: true
                                    },
                                    {
                                        label: "Private",
                                        value: false
                                    }
                                ].map((typeItem)=>{
                                    const isSelected = filters.isPublic === typeItem.value;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setFilters((prev)=>({
                                                    ...prev,
                                                    isPublic: typeItem.value
                                                })),
                                        className: "jsx-3b8e5d2970aa58b9" + " " + `py-1.5 text-[10px] font-bold rounded uppercase tracking-wider transition-all duration-150 ${isSelected ? "bg-white text-slate-900 shadow-sm border border-slate-200 dark:border-transparent dark:bg-cyber-yellow dark:text-cyber-black" : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white"}`,
                                        children: typeItem.label
                                    }, typeItem.label, false, {
                                        fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                        lineNumber: 345,
                                        columnNumber: 21
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                lineNumber: 337,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                            lineNumber: 330,
                            columnNumber: 13
                        }, this)
                    }, void 0, false)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                lineNumber: 319,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-3b8e5d2970aa58b9" + " " + "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>toggleSection("subjects"),
                        className: "jsx-3b8e5d2970aa58b9" + " " + "flex w-full items-center justify-between text-left text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 font-sans",
                        children: [
                            "Course Subjects",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                className: `h-3 w-3 transition-transform duration-200 ${openSections.subjects ? "rotate-180" : ""}`
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                lineNumber: 376,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                        lineNumber: 370,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: openSections.subjects && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-3b8e5d2970aa58b9" + " " + "overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-3b8e5d2970aa58b9" + " " + "flex flex-wrap gap-1 pt-1",
                                children: ALL_SUBJECTS.map((subject)=>{
                                    const isSelected = filters.subjects.includes(subject);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>toggleSubject(subject),
                                        className: "jsx-3b8e5d2970aa58b9" + " " + `px-2 py-1 border rounded-full text-[10px] font-medium transition-all duration-150 ${isSelected ? "bg-slate-900 border-slate-900 text-white dark:bg-cyber-yellow dark:border-cyber-yellow dark:text-cyber-black font-bold" : "bg-transparent border-slate-200 text-slate-600 hover:border-slate-400 dark:border-slate-800 dark:text-slate-400 dark:hover:border-cyber-yellow"}`,
                                        children: subject
                                    }, subject, false, {
                                        fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                        lineNumber: 391,
                                        columnNumber: 21
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                lineNumber: 387,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                            lineNumber: 380,
                            columnNumber: 13
                        }, this)
                    }, void 0, false)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                lineNumber: 369,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-3b8e5d2970aa58b9" + " " + "pt-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    onClick: ()=>setFilters((prev)=>({
                                ...prev,
                                scholarshipOnly: !prev.scholarshipOnly
                            })),
                    className: "jsx-3b8e5d2970aa58b9" + " " + "flex items-center space-x-2.5 cursor-pointer select-none group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-3b8e5d2970aa58b9" + " " + `flex h-5 w-5 shrink-0 items-center justify-center border transition-all duration-150 rounded ${filters.scholarshipOnly ? "bg-slate-900 border-slate-900 dark:bg-cyber-yellow dark:border-cyber-yellow text-white dark:text-cyber-black" : "border-slate-300 group-hover:border-slate-400 dark:border-slate-800 dark:group-hover:border-cyber-yellow"}`,
                            children: filters.scholarshipOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                className: "h-3.5 w-3.5 stroke-[3]"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                lineNumber: 429,
                                columnNumber: 41
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                            lineNumber: 422,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-3b8e5d2970aa58b9",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-3b8e5d2970aa58b9" + " " + "block font-bold text-slate-800 dark:text-slate-200",
                                    children: "Scholarship Programs"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                    lineNumber: 432,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-3b8e5d2970aa58b9" + " " + "block text-[10px] text-slate-400 dark:text-slate-500",
                                    children: "Show institutions offering grants/waivers"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                    lineNumber: 435,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                            lineNumber: 431,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                    lineNumber: 416,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                lineNumber: 415,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "3b8e5d2970aa58b9",
                children: "input[type=range]::-webkit-slider-thumb{pointer-events:auto;cursor:pointer;-webkit-appearance:none;background:#0f172a;border:2px solid #fff;border-radius:50%;width:14px;height:14px;margin-top:-5px;transition:transform .1s;box-shadow:0 1px 3px #0000004d}html.dark input[type=range]::-webkit-slider-thumb{background:#eab308;border:2px solid #050506;box-shadow:0 0 10px #eab30866}input[type=range]::-webkit-slider-thumb:hover{transform:scale(1.2)}input[type=range]{height:4px}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
_s(FilterPanel, "mxihrw/FifGOPAsfsrzkzaS1TAg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$navigation$2f$SidebarContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"]
    ];
});
_c = FilterPanel;
var _c;
__turbopack_context__.k.register(_c, "FilterPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/sidebar/Sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sliders-horizontal.mjs [app-client] (ecmascript) <export default as SlidersHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$navigation$2f$SidebarContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/navigation/SidebarContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$navigation$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/navigation/config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$filters$2f$FilterPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/filters/FilterPanel.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Sidebar() {
    _s();
    const { isCollapsed, setIsCollapsed, activeView, handleViewChange, theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$navigation$2f$SidebarContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"])();
    const [isFilterExpanded, setIsFilterExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Helper to check if a navigation item matches the active view
    const isItemActive = (item)=>{
        return activeView === item.view;
    };
    const handleItemClick = (item)=>{
        handleViewChange(item.view);
    };
    // Expand sidebar and expand filters if clicked collapsed filter icon
    const handleFilterAccordionClick = ()=>{
        if (isCollapsed) {
            setIsCollapsed(false);
            setIsFilterExpanded(true);
        } else {
            setIsFilterExpanded(!isFilterExpanded);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "jsx-3356fa0766912e81" + " " + `hidden md:flex flex-col shrink-0 h-[calc(100vh-3.5rem)] sticky top-14 border-r border-[var(--aur-border)] transition-all duration-300 z-30 select-none bg-[var(--aur-surface)] ${isCollapsed ? "w-20" : "w-64"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-3356fa0766912e81" + " " + "flex-1 overflow-y-auto overflow-x-hidden p-4 flex flex-col justify-center space-y-1.5 scrollbar-thin",
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$navigation$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIDEBAR_ITEMS"].map((item)=>{
                        const Icon = item.icon;
                        const isActive = isItemActive(item);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-3356fa0766912e81" + " " + "relative group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleItemClick(item),
                                    className: "jsx-3356fa0766912e81" + " " + `w-full flex items-center p-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 relative z-10 cursor-pointer ${isActive ? "text-[var(--background)]" : "text-[var(--aur-text-muted)] hover:text-[var(--aur-text)] hover:bg-[var(--aur-hover)]"}`,
                                    children: [
                                        isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-3356fa0766912e81" + " " + "absolute inset-0 bg-[var(--aur-text)] shadow-sm rounded-lg z-[-1]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                                            lineNumber: 64,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-3356fa0766912e81" + " " + `shrink-0 ${isCollapsed ? "mx-auto" : "mr-3.5"}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                className: "jsx-3356fa0766912e81" + " " + "h-4.5 w-4.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                                                lineNumber: 73,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                                            lineNumber: 72,
                                            columnNumber: 17
                                        }, this),
                                        !isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-3356fa0766912e81" + " " + "truncate",
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                                            lineNumber: 78,
                                            columnNumber: 19
                                        }, this),
                                        !isCollapsed && item.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-3356fa0766912e81" + " " + "ml-auto text-[9px] px-1.5 py-0.5 rounded font-mono font-bold uppercase bg-[var(--aur-hover)] text-[var(--aur-text)] border border-[var(--aur-border)]",
                                            children: item.badge
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                                            lineNumber: 83,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                                    lineNumber: 54,
                                    columnNumber: 15
                                }, this),
                                isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-3356fa0766912e81" + " " + "absolute left-full top-1/2 -translate-y-1/2 ml-4 px-2.5 py-1.5 rounded border border-[var(--aur-border)] pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap z-50 text-[10px] font-bold uppercase tracking-widest shadow-lg bg-[var(--aur-surface)] text-[var(--aur-text)]",
                                    children: [
                                        item.label,
                                        item.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-3356fa0766912e81" + " " + "ml-2 font-mono bg-[var(--aur-hover)] px-1 py-0.2 rounded",
                                            children: item.badge
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                                            lineNumber: 94,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                                    lineNumber: 91,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, item.id, true, {
                            fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                            lineNumber: 53,
                            columnNumber: 13
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-3356fa0766912e81" + " " + "pt-4 border-t border-[var(--aur-border)] mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleFilterAccordionClick,
                                className: "jsx-3356fa0766912e81" + " " + `w-full flex items-center p-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${isFilterExpanded && !isCollapsed ? "text-[var(--aur-text)]" : "text-[var(--aur-text-muted)] hover:text-[var(--aur-text)] hover:bg-[var(--aur-hover)]"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-3356fa0766912e81" + " " + `shrink-0 ${isCollapsed ? "mx-auto" : "mr-3.5"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__["SlidersHorizontal"], {
                                            className: "h-4.5 w-4.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                                            lineNumber: 115,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this),
                                    !isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-3356fa0766912e81",
                                                children: "Filters"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                                                lineNumber: 120,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                className: `ml-auto h-4 w-4 transition-transform duration-200 ${isFilterExpanded ? "rotate-180" : "rotate-0"}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                                                lineNumber: 121,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true),
                                    isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-3356fa0766912e81" + " " + "absolute left-full top-1/2 -translate-y-1/2 ml-4 px-2.5 py-1.5 rounded border border-[var(--aur-border)] pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap z-50 text-[10px] font-bold uppercase tracking-widest shadow-lg bg-[var(--aur-surface)] text-[var(--aur-text)]",
                                        children: "University Filters"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                                        lineNumber: 131,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: isFilterExpanded && !isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-3356fa0766912e81" + " " + "overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-3356fa0766912e81" + " " + "px-3 pt-4 pb-2 border border-[var(--aur-border)] rounded-lg mt-2 bg-[var(--aur-surface-2)]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$filters$2f$FilterPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                                            lineNumber: 148,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                                        lineNumber: 147,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                                    lineNumber: 140,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-3356fa0766912e81" + " " + "p-4 pb-12 border-t border-[var(--aur-border)] flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setIsCollapsed(!isCollapsed),
                    title: isCollapsed ? "Expand Sidebar" : "Collapse Sidebar",
                    className: "jsx-3356fa0766912e81" + " " + "p-2 rounded-lg border transition-all duration-150 cursor-pointer border-[var(--aur-border)] text-[var(--aur-text-secondary)] hover:bg-[var(--aur-text)] hover:text-[var(--background)] hover:border-[var(--aur-text)]",
                    children: isCollapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                        lineNumber: 165,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-3356fa0766912e81" + " " + "flex items-center space-x-1.5 text-[10px] uppercase font-bold tracking-widest px-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                className: "h-4 w-4 shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                                lineNumber: 168,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-3356fa0766912e81",
                                children: "Collapse"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                                lineNumber: 169,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                        lineNumber: 167,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                    lineNumber: 159,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "3356fa0766912e81",
                children: ".scrollbar-thin.jsx-3356fa0766912e81::-webkit-scrollbar{width:4px}.scrollbar-thin.jsx-3356fa0766912e81::-webkit-scrollbar-thumb{background:var(--aur-border-strong);border-radius:2px}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(Sidebar, "ymiHOv5J7jja9hNuj28J5jo+RG0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$navigation$2f$SidebarContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"]
    ];
});
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/mobile/MobileMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MobileMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$navigation$2f$SidebarContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/navigation/SidebarContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$navigation$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/navigation/config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$filters$2f$FilterPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/filters/FilterPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sliders-horizontal.mjs [app-client] (ecmascript) <export default as SlidersHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.mjs [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.mjs [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.mjs [app-client] (ecmascript) <export default as Settings>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function MobileMenu() {
    _s();
    const focusRing = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-cyber-yellow dark:focus-visible:ring-offset-cyber-black";
    const { isMobileOpen, setIsMobileOpen, activeView, handleViewChange, theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$navigation$2f$SidebarContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("menu");
    const handleLinkClick = (item)=>{
        handleViewChange(item.view);
        setIsMobileOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: isMobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 z-50 md:hidden flex font-sans",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: ()=>setIsMobileOpen(false),
                            className: "absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/mobile/MobileMenu.tsx",
                            lineNumber: 36,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `relative w-80 max-w-[85vw] h-full flex flex-col shadow-2xl z-10 ${theme === "dark" ? "bg-cyber-dark border-r border-cyber-border/40 text-slate-100" : "bg-white text-slate-900 border-r border-slate-200"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 border-b border-slate-200 dark:border-cyber-border/40 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-serif text-sm font-bold tracking-tight text-slate-900 dark:text-white",
                                                    children: [
                                                        "ASIA UNIVERSITY ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-amber-700 dark:text-cyber-yellow text-[10px] font-sans font-bold",
                                                            children: "PORTAL"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/mobile/MobileMenu.tsx",
                                                            lineNumber: 60,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/mobile/MobileMenu.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[9px] uppercase tracking-widest text-slate-400 dark:text-slate-500",
                                                    children: "Mobile Academic Lab"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/mobile/MobileMenu.tsx",
                                                    lineNumber: 62,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/mobile/MobileMenu.tsx",
                                            lineNumber: 58,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setIsMobileOpen(false),
                                            "aria-label": "Close menu",
                                            className: `p-1 rounded-md text-slate-400 hover:text-slate-900 dark:hover:text-cyber-yellow transition-colors hover:bg-slate-100 dark:hover:bg-cyber-gray ${focusRing}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/mobile/MobileMenu.tsx",
                                                lineNumber: 72,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/mobile/MobileMenu.tsx",
                                            lineNumber: 66,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/mobile/MobileMenu.tsx",
                                    lineNumber: 57,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex border-b border-slate-200 dark:border-cyber-border/30",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setActiveTab("menu"),
                                            className: `flex-1 py-3 text-[10px] font-bold uppercase tracking-widest border-b-2 text-center transition-colors ${activeTab === "menu" ? "border-amber-700 text-slate-900 dark:border-cyber-yellow dark:text-cyber-yellow" : "border-transparent text-slate-400 hover:text-slate-700 dark:hover:text-white"}`,
                                            children: "Menu"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/mobile/MobileMenu.tsx",
                                            lineNumber: 78,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setActiveTab("filters"),
                                            className: `flex-1 py-3 text-[10px] font-bold uppercase tracking-widest border-b-2 text-center transition-colors ${activeTab === "filters" ? "border-amber-700 text-slate-900 dark:border-cyber-yellow dark:text-cyber-yellow" : "border-transparent text-slate-400 hover:text-slate-700 dark:hover:text-white"}`,
                                            children: "Filters"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/mobile/MobileMenu.tsx",
                                            lineNumber: 89,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/mobile/MobileMenu.tsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 overflow-y-auto p-4 space-y-4",
                                    children: activeTab === "menu" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                        className: "space-y-1",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$navigation$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIDEBAR_ITEMS"].map((item)=>{
                                            const Icon = item.icon;
                                            const isActive = activeView === item.view;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>handleLinkClick(item),
                                                className: `w-full flex items-center p-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${isActive ? "bg-slate-150 border border-slate-200 text-slate-900 dark:bg-cyber-yellow dark:text-cyber-black dark:border-transparent dark:shadow-[0_0_10px_rgba(234,179,8,0.15)]" : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-cyber-gray/30"} ${focusRing}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                        className: "h-4.5 w-4.5 mr-3.5 shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/mobile/MobileMenu.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: item.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/mobile/MobileMenu.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 27
                                                    }, this),
                                                    item.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ml-auto text-[8px] font-mono px-1.5 py-0.5 rounded font-bold uppercase bg-amber-100 text-amber-900 dark:bg-cyber-black dark:text-cyber-yellow border dark:border-cyber-yellow/20",
                                                        children: item.badge
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/mobile/MobileMenu.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, item.id, true, {
                                                fileName: "[project]/src/app/components/mobile/MobileMenu.tsx",
                                                lineNumber: 110,
                                                columnNumber: 25
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/mobile/MobileMenu.tsx",
                                        lineNumber: 105,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pb-8",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$filters$2f$FilterPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/src/app/components/mobile/MobileMenu.tsx",
                                            lineNumber: 133,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/mobile/MobileMenu.tsx",
                                        lineNumber: 132,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/mobile/MobileMenu.tsx",
                                    lineNumber: 103,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 border-t border-slate-200 dark:border-cyber-border/40 bg-slate-50 dark:bg-cyber-dark/50 text-[10px] text-center text-slate-400 uppercase tracking-widest font-mono",
                                    children: "System Version: 2026.01"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/mobile/MobileMenu.tsx",
                                    lineNumber: 139,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/mobile/MobileMenu.tsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/mobile/MobileMenu.tsx",
                    lineNumber: 33,
                    columnNumber: 11
                }, this)
            }, void 0, false),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: `md:hidden fixed bottom-0 left-0 right-0 h-16 border-t z-40 transition-colors duration-200 ${theme === "dark" ? "bg-cyber-dark/85 border-cyber-border/40 text-slate-400 cyber-glass" : "bg-white/95 border-slate-200 text-slate-500"} pb-safe-bottom`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full grid grid-cols-4 items-center max-w-lg mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>handleViewChange("home"),
                            className: `flex flex-col items-center justify-center h-full transition-colors ${activeView === "home" ? "text-amber-700 dark:text-cyber-yellow" : "hover:text-slate-800 dark:hover:text-white"} ${focusRing}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                    className: "h-4.5 w-4.5 mb-1"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/mobile/MobileMenu.tsx",
                                    lineNumber: 166,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[8px] font-bold uppercase tracking-wider",
                                    children: "Discovery"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/mobile/MobileMenu.tsx",
                                    lineNumber: 167,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/mobile/MobileMenu.tsx",
                            lineNumber: 157,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>handleViewChange("rankings"),
                            className: `flex flex-col items-center justify-center h-full transition-colors ${activeView === "rankings" ? "text-amber-700 dark:text-cyber-yellow" : "hover:text-slate-800 dark:hover:text-white"} ${focusRing}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                    className: "h-4.5 w-4.5 mb-1"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/mobile/MobileMenu.tsx",
                                    lineNumber: 180,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[8px] font-bold uppercase tracking-wider",
                                    children: "Rankings"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/mobile/MobileMenu.tsx",
                                    lineNumber: 181,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/mobile/MobileMenu.tsx",
                            lineNumber: 171,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>{
                                setActiveTab("filters");
                                setIsMobileOpen(true);
                            },
                            className: `flex flex-col items-center justify-center h-full hover:text-slate-800 dark:hover:text-white ${focusRing}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__["SlidersHorizontal"], {
                                    className: "h-4.5 w-4.5 mb-1"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/mobile/MobileMenu.tsx",
                                    lineNumber: 193,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[8px] font-bold uppercase tracking-wider",
                                    children: "Filters"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/mobile/MobileMenu.tsx",
                                    lineNumber: 194,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/mobile/MobileMenu.tsx",
                            lineNumber: 185,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>handleViewChange("settings"),
                            className: `flex flex-col items-center justify-center h-full transition-colors ${activeView === "settings" ? "text-amber-700 dark:text-cyber-yellow" : "hover:text-slate-800 dark:hover:text-white"} ${focusRing}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                    className: "h-4.5 w-4.5 mb-1"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/mobile/MobileMenu.tsx",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[8px] font-bold uppercase tracking-wider",
                                    children: "Settings"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/mobile/MobileMenu.tsx",
                                    lineNumber: 208,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/mobile/MobileMenu.tsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/mobile/MobileMenu.tsx",
                    lineNumber: 155,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/mobile/MobileMenu.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(MobileMenu, "LHackLDuWakYPKpLn7P1W8PvKa4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$navigation$2f$SidebarContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"]
    ];
});
_c = MobileMenu;
var _c;
__turbopack_context__.k.register(_c, "MobileMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/home/AsiaMapHero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AsiaMapNetwork",
    ()=>AsiaMapNetwork,
    "MapUniversityCards",
    ()=>MapUniversityCards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.mjs [app-client] (ecmascript) <export default as TrendingUp>");
"use client";
;
;
/** Pin  on the 400×280 map viewBox */ const MAP_PINS = [
    {
        x: 118,
        y: 98,
        cardStyle: {
            top: "6%",
            left: "2%",
            maxWidth: "168px"
        }
    },
    {
        x: 198,
        y: 188,
        cardStyle: {
            bottom: "10%",
            left: "28%",
            maxWidth: "175px"
        }
    },
    {
        x: 312,
        y: 108,
        cardStyle: {
            top: "4%",
            right: "2%",
            maxWidth: "168px"
        }
    }
];
const NETWORK_LINES = [
    [
        118,
        98,
        198,
        188
    ],
    [
        198,
        188,
        312,
        108
    ],
    [
        118,
        98,
        312,
        108
    ],
    [
        118,
        98,
        260,
        160
    ],
    [
        198,
        188,
        280,
        200
    ]
];
function mapCardTrend(uni) {
    const rankDelta = (uni.history[1] ?? uni.history[0]) - uni.history[0];
    if (rankDelta > 0) return rankDelta;
    return +(uni.overall % 3 + 1.1).toFixed(1);
}
function AsiaMapNetwork() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 400 280",
        className: "ref-asia-map-svg",
        "aria-hidden": true,
        preserveAspectRatio: "xMidYMid meet",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "asiaLand",
                        x1: "0%",
                        y1: "0%",
                        x2: "100%",
                        y2: "100%",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "var(--aur-surface-hover)"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/home/AsiaMapHero.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "50%",
                                stopColor: "var(--aur-surface-2)"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/home/AsiaMapHero.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: "var(--aur-surface)",
                                stopOpacity: "0.5"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/home/AsiaMapHero.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/home/AsiaMapHero.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "networkLine",
                        x1: "0%",
                        y1: "0%",
                        x2: "100%",
                        y2: "0%",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "var(--aur-text-muted)",
                                stopOpacity: "0.1"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/home/AsiaMapHero.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "50%",
                                stopColor: "var(--aur-text)",
                                stopOpacity: "0.3"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/home/AsiaMapHero.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: "var(--aur-text-muted)",
                                stopOpacity: "0.1"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/home/AsiaMapHero.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/home/AsiaMapHero.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                        id: "nodeGlow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "var(--aur-text)",
                                stopOpacity: "0.6"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/home/AsiaMapHero.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: "var(--aur-text)",
                                stopOpacity: "0"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/home/AsiaMapHero.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/home/AsiaMapHero.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                        id: "softGlow",
                        x: "-50%",
                        y: "-50%",
                        width: "200%",
                        height: "200%",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                stdDeviation: "3",
                                result: "blur"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/home/AsiaMapHero.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMerge", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                        in: "blur"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/home/AsiaMapHero.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                        in: "SourceGraphic"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/home/AsiaMapHero.tsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/home/AsiaMapHero.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/home/AsiaMapHero.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/home/AsiaMapHero.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M 55 115 Q 95 72 155 78 L 210 62 Q 285 58 340 88 L 365 125 Q 372 168 348 198 L 310 228 Q 255 248 195 238 L 130 252 Q 78 242 62 205 L 48 165 Q 42 135 55 115 Z",
                fill: "url(#asiaLand)",
                stroke: "var(--aur-border-strong)",
                strokeWidth: "1.5",
                opacity: "0.95"
            }, void 0, false, {
                fileName: "[project]/src/app/components/home/AsiaMapHero.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M 95 130 Q 130 110 175 118 L 220 105 Q 270 100 300 125",
                fill: "none",
                stroke: "var(--aur-border)",
                strokeWidth: "0.75",
                opacity: "0.5"
            }, void 0, false, {
                fileName: "[project]/src/app/components/home/AsiaMapHero.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            NETWORK_LINES.map(([x1, y1, x2, y2], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: x1,
                    y1: y1,
                    x2: x2,
                    y2: y2,
                    stroke: "url(#networkLine)",
                    strokeWidth: "1",
                    strokeDasharray: "4 5",
                    opacity: "0.7"
                }, i, false, {
                    fileName: "[project]/src/app/components/home/AsiaMapHero.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this)),
            [
                [
                    260,
                    160
                ],
                [
                    280,
                    200
                ],
                [
                    165,
                    175
                ],
                [
                    240,
                    130
                ]
            ].map(([cx, cy], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: cx,
                    cy: cy,
                    r: "2.5",
                    fill: "var(--aur-text-muted)",
                    opacity: "0.3"
                }, i, false, {
                    fileName: "[project]/src/app/components/home/AsiaMapHero.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this)),
            MAP_PINS.map((pin, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    filter: "url(#softGlow)",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: pin.x,
                            cy: pin.y,
                            r: "14",
                            fill: "url(#nodeGlow)",
                            className: "ref-map-pulse"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/home/AsiaMapHero.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: pin.x,
                            cy: pin.y,
                            r: "5",
                            fill: "var(--aur-text)"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/home/AsiaMapHero.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: pin.x,
                            cy: pin.y,
                            r: "2",
                            fill: "var(--aur-surface)"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/home/AsiaMapHero.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/src/app/components/home/AsiaMapHero.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/home/AsiaMapHero.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_c = AsiaMapNetwork;
function MapUniversityCards({ universities, onUniversitySelect }) {
    const pins = universities.slice(0, 3);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: pins.map((uni, i)=>{
            const pin = MAP_PINS[i];
            if (!pin) return null;
            const trend = mapCardTrend(uni);
            const asiaRank = uni.history[0];
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "ref-map-uni-card",
                style: pin.cardStyle,
                onClick: ()=>onUniversitySelect(uni.id),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "ref-map-uni-card__name",
                        children: uni.name
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/home/AsiaMapHero.tsx",
                        lineNumber: 140,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "ref-map-uni-card__rank",
                        children: [
                            "#",
                            asiaRank,
                            " in Asia"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/home/AsiaMapHero.tsx",
                        lineNumber: 141,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ref-map-uni-card__footer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ref-map-uni-card__score",
                                children: uni.overall.toFixed(1)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/home/AsiaMapHero.tsx",
                                lineNumber: 143,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ref-map-uni-card__trend",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                        className: "h-3 w-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/home/AsiaMapHero.tsx",
                                        lineNumber: 145,
                                        columnNumber: 17
                                    }, this),
                                    trend.toFixed(1)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/home/AsiaMapHero.tsx",
                                lineNumber: 144,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/home/AsiaMapHero.tsx",
                        lineNumber: 142,
                        columnNumber: 13
                    }, this)
                ]
            }, uni.id, true, {
                fileName: "[project]/src/app/components/home/AsiaMapHero.tsx",
                lineNumber: 133,
                columnNumber: 11
            }, this);
        })
    }, void 0, false);
}
_c1 = MapUniversityCards;
var _c, _c1;
__turbopack_context__.k.register(_c, "AsiaMapNetwork");
__turbopack_context__.k.register(_c1, "MapUniversityCards");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/Homepage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Homepage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.mjs [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.mjs [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$earth$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/earth.mjs [app-client] (ecmascript) <export default as Globe2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.mjs [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.mjs [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.mjs [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.mjs [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-down.mjs [app-client] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.mjs [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.mjs [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$line$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LineChart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-line.mjs [app-client] (ecmascript) <export default as LineChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.mjs [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.mjs [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$home$2f$AsiaMapHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/home/AsiaMapHero.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
/* ── Reusable scroll-reveal wrapper ── */ const fadeUp = {
    hidden: {
        opacity: 0,
        y: 24
    },
    visible: {
        opacity: 1,
        y: 0
    }
};
const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08
        }
    }
};
const fadeUpItem = {
    hidden: {
        opacity: 0,
        y: 16
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.45,
            ease: [
                0.16,
                1,
                0.3,
                1
            ]
        }
    }
};
function RevealSection({ children, className = "", delay = 0 }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/components/Homepage.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s(RevealSection, "QMBuJFIdzLIeqBcFwhMf246mjOM=");
_c = RevealSection;
const COUNTRY_FLAGS = {
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
    Mongolia: "🇲🇳"
};
/** Light cards themed around each country's iconic monument */ const COUNTRY_THEME = {
    Singapore: {
        code: "SG",
        monument: "Marina Bay Sands",
        accent: "#ef4444",
        bg: "linear-gradient(135deg, #fff5f5 0%, #ffffff 62%)",
        image: "https://images.unsplash.com/photo-1525621488860-1f28d3244604?auto=format&fit=crop&w=600&q=80",
        imagePos: "70% center"
    },
    "Hong Kong": {
        code: "HK",
        monument: "Victoria Harbour",
        accent: "#dc2626",
        bg: "linear-gradient(135deg, #fff7f7 0%, #ffffff 62%)",
        image: "https://images.unsplash.com/photo-1536596788103-df0d9994a3e3?auto=format&fit=crop&w=600&q=80",
        imagePos: "center 40%"
    },
    "South Korea": {
        code: "KR",
        monument: "Gyeongbokgung Palace",
        accent: "#2563eb",
        bg: "linear-gradient(135deg, #eff6ff 0%, #ffffff 62%)",
        image: "https://images.unsplash.com/photo-1517154428173-52d99888fc9e?auto=format&fit=crop&w=600&q=80",
        imagePos: "center"
    },
    China: {
        code: "CN",
        monument: "Great Wall of China",
        accent: "#dc2626",
        bg: "linear-gradient(135deg, #fffbeb 0%, #ffffff 62%)",
        image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=600&q=80",
        imagePos: "center"
    },
    Japan: {
        code: "JP",
        monument: "Mount Fuji",
        accent: "#be123c",
        bg: "linear-gradient(135deg, #fff1f2 0%, #ffffff 62%)",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80",
        imagePos: "center 35%"
    },
    India: {
        code: "IN",
        monument: "Taj Mahal",
        accent: "#ea580c",
        bg: "linear-gradient(135deg, #fff7ed 0%, #ffffff 55%, #f0fdf4 100%)",
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80",
        imagePos: "center"
    },
    Taiwan: {
        code: "TW",
        monument: "Taipei 101",
        accent: "#1d4ed8",
        bg: "linear-gradient(135deg, #eff6ff 0%, #ffffff 62%)",
        image: "https://images.unsplash.com/photo-1470006985013-6c54c888a04f?auto=format&fit=crop&w=600&q=80",
        imagePos: "center bottom"
    },
    Malaysia: {
        code: "MY",
        monument: "Petronas Towers",
        accent: "#1e40af",
        bg: "linear-gradient(135deg, #eff6ff 0%, #ffffff 55%, #fefce8 100%)",
        image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=600&q=80",
        imagePos: "center"
    },
    Thailand: {
        code: "TH",
        monument: "Wat Arun",
        accent: "#b45309",
        bg: "linear-gradient(135deg, #fffbeb 0%, #ffffff 62%)",
        image: "https://images.unsplash.com/photo-1552465011-5ec7e39b7250?auto=format&fit=crop&w=600&q=80",
        imagePos: "center"
    },
    Vietnam: {
        code: "VN",
        monument: "Ha Long Bay",
        accent: "#059669",
        bg: "linear-gradient(135deg, #ecfdf5 0%, #ffffff 62%)",
        image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=600&q=80",
        imagePos: "center"
    },
    Indonesia: {
        code: "ID",
        monument: "Borobudur Temple",
        accent: "#c2410c",
        bg: "linear-gradient(135deg, #fff7ed 0%, #ffffff 62%)",
        image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=600&q=80",
        imagePos: "center"
    },
    Uzbekistan: {
        code: "UZ",
        monument: "Registan, Samarkand",
        accent: "#0284c7",
        bg: "linear-gradient(135deg, #f0f9ff 0%, #ffffff 62%)",
        image: "https://images.unsplash.com/photo-1578895101403-2fc6c0e161bb?auto=format&fit=crop&w=600&q=80",
        imagePos: "center"
    },
    Kazakhstan: {
        code: "KZ",
        monument: "Bayterek Tower",
        accent: "#0891b2",
        bg: "linear-gradient(135deg, #ecfeff 0%, #ffffff 62%)",
        image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=600&q=80",
        imagePos: "center"
    },
    Philippines: {
        code: "PH",
        monument: "Mayon Volcano",
        accent: "#2563eb",
        bg: "linear-gradient(135deg, #eff6ff 0%, #ffffff 62%)",
        image: "https://images.unsplash.com/photo-1518509562904-7a059f5c4d0c?auto=format&fit=crop&w=600&q=80",
        imagePos: "center"
    },
    Pakistan: {
        code: "PK",
        monument: "Faisal Mosque",
        accent: "#16a34a",
        bg: "linear-gradient(135deg, #f0fdf4 0%, #ffffff 62%)",
        image: "https://images.unsplash.com/photo-1571875257727-b31a4db7c926?auto=format&fit=crop&w=600&q=80",
        imagePos: "center"
    },
    Bangladesh: {
        code: "BD",
        monument: "Sixty Dome Mosque",
        accent: "#15803d",
        bg: "linear-gradient(135deg, #f0fdf4 0%, #ffffff 62%)",
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80",
        imagePos: "center"
    },
    Nepal: {
        code: "NP",
        monument: "Boudhanath Stupa",
        accent: "#dc2626",
        bg: "linear-gradient(135deg, #fff7ed 0%, #ffffff 62%)",
        image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=600&q=80",
        imagePos: "center"
    },
    Myanmar: {
        code: "MM",
        monument: "Shwedagon Pagoda",
        accent: "#ca8a04",
        bg: "linear-gradient(135deg, #fefce8 0%, #ffffff 62%)",
        image: "https://images.unsplash.com/photo-1559592410-5c6a0c2fc866?auto=format&fit=crop&w=600&q=80",
        imagePos: "center"
    },
    Cambodia: {
        code: "KH",
        monument: "Angkor Wat",
        accent: "#b45309",
        bg: "linear-gradient(135deg, #fff7ed 0%, #ffffff 62%)",
        image: "https://images.unsplash.com/photo-1609137144813-b021b859d386?auto=format&fit=crop&w=600&q=80",
        imagePos: "center"
    },
    Mongolia: {
        code: "MN",
        monument: "Genghis Khan Statue",
        accent: "#1d4ed8",
        bg: "linear-gradient(135deg, #eff6ff 0%, #ffffff 62%)",
        image: "https://images.unsplash.com/photo-1548013144-3a63e8ce00a3?auto=format&fit=crop&w=600&q=80",
        imagePos: "center"
    }
};
function getCountryTheme(country) {
    return COUNTRY_THEME[country] ?? {
        code: country.slice(0, 2).toUpperCase(),
        monument: country,
        accent: "#f97316",
        bg: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)",
        image: "https://images.unsplash.com/photo-1562774053-f5a02f6da861?auto=format&fit=crop&w=600&q=80",
        imagePos: "center"
    };
}
const LIVE_UPDATES = [
    {
        text: "New Rankings Published",
        time: "2 min ago",
        color: "#f59e0b"
    },
    {
        text: "Tsinghua University climbs to #1",
        time: "15 min ago",
        color: "#2563eb"
    },
    {
        text: "Singapore institutions gain +2.4 avg",
        time: "32 min ago",
        color: "#f59e0b"
    }
];
const METHODOLOGY = [
    {
        label: "Research Impact",
        pct: 40,
        color: "#3b82f6"
    },
    {
        label: "Teaching Excellence",
        pct: 25,
        color: "#10b981"
    },
    {
        label: "Employability",
        pct: 15,
        color: "#f59e0b"
    },
    {
        label: "International Outlook",
        pct: 15,
        color: "#8b5cf6"
    },
    {
        label: "Industry Income",
        pct: 5,
        color: "#64748b"
    }
];
const PULSE_ITEMS = [
    "Tsinghua leads research output index",
    "NUS tops employability in ASEAN",
    "Uzbekistan medical programs surge +18%",
    "Japan universities rise in citations",
    "Singapore avg score hits 94.2",
    "New English-medium tracks in Central Asia"
];
function highlightMatch(text, query) {
    const q = query.trim();
    if (!q) return text;
    const lower = text.toLowerCase();
    const idx = lower.indexOf(q.toLowerCase());
    if (idx === -1) return text;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            text.slice(0, idx),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                className: "bg-amber-100 text-amber-800 px-0.5",
                children: text.slice(idx, idx + q.length)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Homepage.tsx",
                lineNumber: 295,
                columnNumber: 7
            }, this),
            text.slice(idx + q.length)
        ]
    }, void 0, true);
}
function Sparkline({ values, color = "#3b82f6" }) {
    const max = Math.max(...values);
    const min = Math.min(...values);
    const range = max - min || 1;
    const pts = values.map((v, i)=>{
        const x = i / (values.length - 1) * 48;
        const y = 14 - (v - min) / range * 12;
        return `${x},${y}`;
    }).join(" ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "52",
        height: "16",
        className: "inline-block",
        "aria-hidden": true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
            fill: "none",
            stroke: color,
            strokeWidth: "1.5",
            points: pts
        }, void 0, false, {
            fileName: "[project]/src/app/components/Homepage.tsx",
            lineNumber: 314,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/Homepage.tsx",
        lineNumber: 313,
        columnNumber: 5
    }, this);
}
_c1 = Sparkline;
function MiniLineChart({ color, trend }) {
    const pts = trend === "down" ? "0,12 12,8 24,10 36,6 48,8" : "0,10 12,8 24,6 36,4 48,2";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "100%",
        height: "48",
        viewBox: "0 0 48 16",
        preserveAspectRatio: "none",
        className: "mt-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                fill: "none",
                stroke: color,
                strokeWidth: "1.5",
                points: pts,
                opacity: "0.9"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Homepage.tsx",
                lineNumber: 323,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                fill: `${color}22`,
                stroke: "none",
                points: `${pts} 48,16 0,16`
            }, void 0, false, {
                fileName: "[project]/src/app/components/Homepage.tsx",
                lineNumber: 324,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Homepage.tsx",
        lineNumber: 322,
        columnNumber: 5
    }, this);
}
_c2 = MiniLineChart;
function RadarChart({ universities }) {
    const axes = [
        "Innovation",
        "Research",
        "Teaching",
        "Employability",
        "Intl"
    ];
    const n = axes.length;
    const cx = 120;
    const cy = 120;
    const r = 80;
    const angle = (i)=>Math.PI * 2 * i / n - Math.PI / 2;
    const point = (i, val)=>{
        const rad = val / 100 * r;
        return {
            x: cx + Math.cos(angle(i)) * rad,
            y: cy + Math.sin(angle(i)) * rad
        };
    };
    const gridLevels = [
        0.25,
        0.5,
        0.75,
        1
    ];
    const colors = [
        "#f97316",
        "#3b82f6",
        "#10b981",
        "#8b5cf6"
    ];
    const getVals = (u)=>[
            u.research * 0.95,
            u.research,
            u.teaching,
            u.employability,
            u.intlStudents
        ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 240 240",
        className: "w-full max-w-[280px] mx-auto",
        children: [
            gridLevels.map((lvl)=>{
                const pts = axes.map((_, i)=>{
                    const p = point(i, lvl * 100);
                    return `${p.x},${p.y}`;
                }).join(" ");
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                    points: pts,
                    fill: "none",
                    stroke: "rgba(148,163,184,0.15)",
                    strokeWidth: "1"
                }, lvl, false, {
                    fileName: "[project]/src/app/components/Homepage.tsx",
                    lineNumber: 363,
                    columnNumber: 11
                }, this);
            }),
            axes.map((label, i)=>{
                const outer = point(i, 100);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: cx,
                            y1: cy,
                            x2: outer.x,
                            y2: outer.y,
                            stroke: "rgba(148,163,184,0.12)"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Homepage.tsx",
                            lineNumber: 370,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: outer.x + (outer.x - cx) * 0.12,
                            y: outer.y + (outer.y - cy) * 0.12,
                            textAnchor: "middle",
                            fill: "#94a3b8",
                            fontSize: "8",
                            children: label
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Homepage.tsx",
                            lineNumber: 371,
                            columnNumber: 13
                        }, this)
                    ]
                }, label, true, {
                    fileName: "[project]/src/app/components/Homepage.tsx",
                    lineNumber: 369,
                    columnNumber: 11
                }, this);
            }),
            universities.map((uni, ui)=>{
                const vals = getVals(uni);
                const pts = vals.map((v, i)=>{
                    const p = point(i, v);
                    return `${p.x},${p.y}`;
                }).join(" ");
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                    points: pts,
                    fill: `${colors[ui]}22`,
                    stroke: colors[ui],
                    strokeWidth: "1.5"
                }, uni.id, false, {
                    fileName: "[project]/src/app/components/Homepage.tsx",
                    lineNumber: 392,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Homepage.tsx",
        lineNumber: 354,
        columnNumber: 5
    }, this);
}
_c3 = RadarChart;
function getCountryStats() {
    const map = new Map();
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_UNIVERSITIES"].forEach((u)=>{
        if (!map.has(u.location)) map.set(u.location, []);
        map.get(u.location).push(u);
    });
    return Array.from(map.entries()).map(([country, unis])=>{
        const sorted = [
            ...unis
        ].sort((a, b)=>b.overall - a.overall);
        return {
            country,
            count: unis.length,
            avgScore: unis.reduce((s, u)=>s + u.overall, 0) / unis.length,
            topUni: sorted[0]
        };
    }).sort((a, b)=>b.avgScore - a.avgScore).slice(0, 8);
}
function rankTrend(uni) {
    const delta = (uni.history[1] ?? uni.history[0]) - uni.history[0];
    return {
        delta,
        improved: delta > 0
    };
}
function scoreHistory(uni, metric) {
    const base = metric === "research" ? uni.research : metric === "employability" ? uni.employability : uni.overall;
    return uni.history.map((rank, i)=>Math.min(100, base - i * 0.8 + (5 - rank) * 0.5));
}
function Homepage({ onSearchSubmit, onUniversitySelect, onArticleSelect, onViewChange }) {
    _s1();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [suggestions, setSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        universities: [],
        articles: []
    });
    const [showSuggestions, setShowSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeSuggestionIndex, setActiveSuggestionIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1);
    const [articleTab, setArticleTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("featured");
    const suggestionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const methodologyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Homepage.useEffect": ()=>{
            if (searchQuery.trim().length === 0) {
                setSuggestions({
                    universities: [],
                    articles: []
                });
                return;
            }
            const filteredUnis = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_UNIVERSITIES"].filter({
                "Homepage.useEffect.filteredUnis": (uni)=>uni.name.toLowerCase().includes(searchQuery.toLowerCase()) || uni.location.toLowerCase().includes(searchQuery.toLowerCase()) || uni.subjects.some({
                        "Homepage.useEffect.filteredUnis": (sub)=>sub.toLowerCase().includes(searchQuery.toLowerCase())
                    }["Homepage.useEffect.filteredUnis"])
            }["Homepage.useEffect.filteredUnis"]).slice(0, 5);
            const filteredArticles = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FEATURED_ARTICLES"].filter({
                "Homepage.useEffect.filteredArticles": (art)=>art.title.toLowerCase().includes(searchQuery.toLowerCase()) || art.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
            }["Homepage.useEffect.filteredArticles"]).slice(0, 3);
            setSuggestions({
                universities: filteredUnis,
                articles: filteredArticles
            });
        }
    }["Homepage.useEffect"], [
        searchQuery
    ]);
    const flatSuggestions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Homepage.useMemo[flatSuggestions]": ()=>{
            const items = [];
            suggestions.universities.forEach({
                "Homepage.useMemo[flatSuggestions]": (uni)=>items.push({
                        kind: "uni",
                        uni
                    })
            }["Homepage.useMemo[flatSuggestions]"]);
            suggestions.articles.forEach({
                "Homepage.useMemo[flatSuggestions]": (article)=>items.push({
                        kind: "article",
                        article
                    })
            }["Homepage.useMemo[flatSuggestions]"]);
            if (searchQuery.trim().length > 0) items.push({
                kind: "view-all"
            });
            return items;
        }
    }["Homepage.useMemo[flatSuggestions]"], [
        suggestions,
        searchQuery
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Homepage.useEffect": ()=>setActiveSuggestionIndex(-1)
    }["Homepage.useEffect"], [
        searchQuery
    ]);
    const activateSuggestion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Homepage.useCallback[activateSuggestion]": (item)=>{
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
        }
    }["Homepage.useCallback[activateSuggestion]"], [
        onArticleSelect,
        onSearchSubmit,
        onUniversitySelect,
        onViewChange,
        searchQuery
    ]);
    const handleSearchKeyDown = (e)=>{
        if (e.key === "Escape") {
            setShowSuggestions(false);
            return;
        }
        if (!showSuggestions || flatSuggestions.length === 0) return;
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setActiveSuggestionIndex((i)=>Math.min(i + 1, flatSuggestions.length - 1));
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setActiveSuggestionIndex((i)=>Math.max(i - 1, 0));
        } else if (e.key === "Enter" && activeSuggestionIndex >= 0) {
            e.preventDefault();
            activateSuggestion(flatSuggestions[activeSuggestionIndex]);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Homepage.useEffect": ()=>{
            function handleClickOutside(event) {
                if (suggestionRef.current && !suggestionRef.current.contains(event.target)) {
                    setShowSuggestions(false);
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "Homepage.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
            })["Homepage.useEffect"];
        }
    }["Homepage.useEffect"], []);
    const handleSearchSubmit = (e)=>{
        e.preventDefault();
        if (searchQuery.trim()) {
            onSearchSubmit(searchQuery);
            onViewChange("rankings");
            setShowSuggestions(false);
        }
    };
    const topTen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Homepage.useMemo[topTen]": ()=>[
                ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_UNIVERSITIES"]
            ].sort({
                "Homepage.useMemo[topTen]": (a, b)=>b.overall - a.overall
            }["Homepage.useMemo[topTen]"]).slice(0, 10)
    }["Homepage.useMemo[topTen]"], []);
    const countryStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Homepage.useMemo[countryStats]": ()=>getCountryStats()
    }["Homepage.useMemo[countryStats]"], []);
    const compareUnis = topTen.slice(0, 4);
    const uniqueCountries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Homepage.useMemo[uniqueCountries]": ()=>new Set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_UNIVERSITIES"].map({
                "Homepage.useMemo[uniqueCountries]": (u)=>u.location
            }["Homepage.useMemo[uniqueCountries]"])).size
    }["Homepage.useMemo[uniqueCountries]"], []);
    const mapUniversities = topTen.slice(0, 3);
    const scrollToMethodology = ()=>{
    // Navigated via onViewChange("methodology") — scroll ref no longer needed
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "ref-home flex-grow w-full relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "ref-hero",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ref-hero-grid",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ref-label",
                                    children: "Asia University Rankings"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                    lineNumber: 569,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight mt-3 mb-4",
                                    children: [
                                        "Asia's Most Trusted",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ref-hero-title-accent",
                                            children: "University Intelligence"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                            lineNumber: 577,
                                            columnNumber: 15
                                        }, this),
                                        " Platform"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                    lineNumber: 575,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[var(--ref-muted)] text-sm leading-relaxed max-w-lg mb-6",
                                    children: "Filter institutional indicators, compare global rankings, and explore regional study models including medical careers in Central Asia — powered by live audited data."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                    lineNumber: 579,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-3 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "ref-btn-primary",
                                            onClick: ()=>onViewChange("rankings"),
                                            children: [
                                                "Explore Rankings",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                                    lineNumber: 592,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                            lineNumber: 590,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "ref-btn-outline",
                                            onClick: ()=>onViewChange("methodology"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                                    lineNumber: 595,
                                                    columnNumber: 17
                                                }, this),
                                                "Our Methodology"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                            lineNumber: 594,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                    lineNumber: 584,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative max-w-lg",
                                    ref: suggestionRef,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            onSubmit: handleSearchSubmit,
                                            className: "flex rounded-lg overflow-hidden border border-[var(--ref-border)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative flex-grow",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                            className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--ref-muted)]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                                            lineNumber: 604,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "search",
                                                            role: "combobox",
                                                            "aria-expanded": showSuggestions && searchQuery.trim().length > 0,
                                                            placeholder: "Search universities, locations, subjects...",
                                                            value: searchQuery,
                                                            onChange: (e)=>{
                                                                setSearchQuery(e.target.value);
                                                                setShowSuggestions(true);
                                                            },
                                                            onFocus: ()=>setShowSuggestions(true),
                                                            onKeyDown: handleSearchKeyDown,
                                                            className: "w-full bg-white text-sm text-slate-900 pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--ref-blue)]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                                            lineNumber: 605,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                                    lineNumber: 603,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    className: "ref-btn-primary rounded-none px-5 py-3 text-[11px]",
                                                    children: "Search"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                                    lineNumber: 620,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                            lineNumber: 602,
                                            columnNumber: 15
                                        }, this),
                                        showSuggestions && searchQuery.trim().length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute left-0 right-0 z-30 mt-1 ref-card max-h-80 overflow-y-auto",
                                            children: (()=>{
                                                let rowIndex = -1;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3 border-b border-[var(--ref-border)]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "ref-label text-[9px] mb-2 flex items-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                                                            className: "h-3 w-3"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                                                            lineNumber: 633,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        " Universities"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                                                    lineNumber: 632,
                                                                    columnNumber: 27
                                                                }, this),
                                                                suggestions.universities.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "space-y-1",
                                                                    children: suggestions.universities.map((uni)=>{
                                                                        rowIndex += 1;
                                                                        const active = activeSuggestionIndex === rowIndex;
                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                onClick: ()=>activateSuggestion({
                                                                                        kind: "uni",
                                                                                        uni
                                                                                    }),
                                                                                className: `w-full text-left flex justify-between p-2 text-xs rounded ${active ? "bg-amber-50" : "hover:bg-slate-50"}`,
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "font-semibold truncate pr-2",
                                                                                        children: highlightMatch(uni.name, searchQuery)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                                                                        lineNumber: 647,
                                                                                        columnNumber: 39
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-[var(--ref-muted)] shrink-0",
                                                                                        children: uni.location
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                                                                        lineNumber: 648,
                                                                                        columnNumber: 39
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/components/Homepage.tsx",
                                                                                lineNumber: 642,
                                                                                columnNumber: 37
                                                                            }, this)
                                                                        }, uni.id, false, {
                                                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                                                            lineNumber: 641,
                                                                            columnNumber: 35
                                                                        }, this);
                                                                    })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                                                    lineNumber: 636,
                                                                    columnNumber: 29
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-[var(--ref-muted)] italic p-2",
                                                                    children: "No universities found"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                                                    lineNumber: 655,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                                            lineNumber: 631,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3 border-b border-[var(--ref-border)]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "ref-label text-[9px] mb-2 flex items-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                                            className: "h-3 w-3"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                                                            lineNumber: 660,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        " Articles"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                                                    lineNumber: 659,
                                                                    columnNumber: 27
                                                                }, this),
                                                                suggestions.articles.map((art)=>{
                                                                    rowIndex += 1;
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>activateSuggestion({
                                                                                kind: "article",
                                                                                article: art
                                                                            }),
                                                                        className: "w-full text-left p-2 text-xs hover:bg-slate-50 rounded block",
                                                                        children: highlightMatch(art.title, searchQuery)
                                                                    }, art.id, false, {
                                                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                                                        lineNumber: 665,
                                                                        columnNumber: 31
                                                                    }, this);
                                                                })
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                                            lineNumber: 658,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-2 text-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>activateSuggestion({
                                                                        kind: "view-all"
                                                                    }),
                                                                className: "text-[11px] text-blue-600 font-semibold uppercase tracking-wider",
                                                                children: [
                                                                    'View all matching "',
                                                                    searchQuery,
                                                                    '"',
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                                        className: "inline h-3 w-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                                                        lineNumber: 683,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/components/Homepage.tsx",
                                                                lineNumber: 677,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                                            lineNumber: 676,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true);
                                            })()
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                            lineNumber: 626,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                    lineNumber: 601,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 flex flex-wrap gap-2 items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] font-bold uppercase tracking-wider text-[var(--ref-muted)]",
                                            children: "Trending:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                            lineNumber: 694,
                                            columnNumber: 15
                                        }, this),
                                        [
                                            "Uzbekistan",
                                            "Medicine",
                                            "National Univ Singapore",
                                            "English medium"
                                        ].map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    setSearchQuery(tag);
                                                    onSearchSubmit(tag);
                                                    onViewChange("rankings");
                                                },
                                                className: "text-[10px] px-2.5 py-1 rounded-full border border-blue-200 bg-white text-slate-600 hover:border-amber-400 hover:bg-amber-50 hover:text-amber-900 transition-colors",
                                                children: tag
                                            }, tag, false, {
                                                fileName: "[project]/src/app/components/Homepage.tsx",
                                                lineNumber: 696,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                    lineNumber: 693,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ref-stat-bar",
                                    children: [
                                        {
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"],
                                            val: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_UNIVERSITIES"].length}+`,
                                            label: "Institutions"
                                        },
                                        {
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$earth$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe2$3e$__["Globe2"],
                                            val: `${uniqueCountries}+`,
                                            label: "Countries"
                                        },
                                        {
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"],
                                            val: "1M+",
                                            label: "Data Points"
                                        },
                                        {
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
                                            val: "15+",
                                            label: "Years of Data"
                                        }
                                    ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ref-stat-item",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(s.icon, {
                                                    className: "h-5 w-5 text-amber-500 shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                                    lineNumber: 724,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-bold text-sm",
                                                            children: s.val
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                                            lineNumber: 726,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[10px] text-[var(--ref-muted)] uppercase tracking-wider",
                                                            children: s.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                                            lineNumber: 727,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                                    lineNumber: 725,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, s.label, true, {
                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                            lineNumber: 723,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                    lineNumber: 711,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Homepage.tsx",
                            lineNumber: 564,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ref-hero-visual",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ref-map-stage",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$home$2f$AsiaMapHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AsiaMapNetwork"], {}, void 0, false, {
                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                            lineNumber: 741,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$home$2f$AsiaMapHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapUniversityCards"], {
                                            universities: mapUniversities,
                                            onUniversitySelect: onUniversitySelect
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                            lineNumber: 742,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                    lineNumber: 740,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                    className: "ref-live-sidebar",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "ref-live-sidebar__title",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-amber-500",
                                                    children: "L"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                                    lineNumber: 750,
                                                    columnNumber: 17
                                                }, this),
                                                "ive Updates"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                            lineNumber: 749,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "ref-live-sidebar__list",
                                            children: LIVE_UPDATES.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "ref-live-sidebar__item",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ref-live-sidebar__icon",
                                                            style: {
                                                                background: `${item.color}18`,
                                                                color: item.color
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                                                className: "h-3.5 w-3.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/Homepage.tsx",
                                                                lineNumber: 759,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                                            lineNumber: 755,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "min-w-0 flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "ref-live-sidebar__text",
                                                                    children: item.text
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                                                    lineNumber: 762,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "ref-live-sidebar__time",
                                                                    children: item.time
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                                                    lineNumber: 763,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                                            lineNumber: 761,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, item.text, true, {
                                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                                    lineNumber: 754,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                            lineNumber: 752,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "ref-live-sidebar__cta",
                                            onClick: ()=>onViewChange("rankings"),
                                            children: [
                                                "View All Updates",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    className: "h-3.5 w-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                                    lineNumber: 774,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                            lineNumber: 768,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                    lineNumber: 748,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Homepage.tsx",
                            lineNumber: 734,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Homepage.tsx",
                    lineNumber: 563,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Homepage.tsx",
                lineNumber: 562,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RevealSection, {
                className: "ref-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ref-label",
                                        children: "Rankings Engine"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                        lineNumber: 785,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold mt-1",
                                        children: "Live Top 10 Universities"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                        lineNumber: 786,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Homepage.tsx",
                                lineNumber: 784,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "ref-btn-primary text-[11px]",
                                onClick: ()=>onViewChange("rankings"),
                                children: [
                                    "Analyze All Universities",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                        lineNumber: 790,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Homepage.tsx",
                                lineNumber: 788,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Homepage.tsx",
                        lineNumber: 783,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ref-card-light ref-table-wrap shadow-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "ref-table",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Rank"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Homepage.tsx",
                                                lineNumber: 798,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "University"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Homepage.tsx",
                                                lineNumber: 799,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Country"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Homepage.tsx",
                                                lineNumber: 800,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Score"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Homepage.tsx",
                                                lineNumber: 801,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Trend"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Homepage.tsx",
                                                lineNumber: 802,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "hidden md:table-cell",
                                                children: "Research"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Homepage.tsx",
                                                lineNumber: 803,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "hidden md:table-cell",
                                                children: "Employability"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Homepage.tsx",
                                                lineNumber: 804,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "hidden lg:table-cell",
                                                children: "International"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Homepage.tsx",
                                                lineNumber: 805,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                        lineNumber: 797,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                    lineNumber: 796,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: topTen.map((uni, idx)=>{
                                        const trend = rankTrend(uni);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "cursor-pointer",
                                            onClick: ()=>onUniversitySelect(uni.id),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${idx < 3 ? "bg-orange-100 text-orange-700" : "bg-slate-100 text-slate-600"}`,
                                                        children: idx + 1
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                                        lineNumber: 818,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                                    lineNumber: 817,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "font-semibold text-slate-900 max-w-[180px] truncate",
                                                    children: uni.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                                    lineNumber: 822,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mr-1",
                                                            children: COUNTRY_FLAGS[uni.location] ?? "🌏"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                                            lineNumber: 824,
                                                            columnNumber: 23
                                                        }, this),
                                                        uni.location
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                                    lineNumber: 823,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "font-mono font-bold",
                                                    children: uni.overall.toFixed(1)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                                    lineNumber: 827,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `inline-flex items-center gap-0.5 text-xs font-semibold ${trend.improved ? "ref-trend-up" : "ref-trend-down"}`,
                                                        children: [
                                                            trend.improved ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                                className: "h-3.5 w-3.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/Homepage.tsx",
                                                                lineNumber: 830,
                                                                columnNumber: 43
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"], {
                                                                className: "h-3.5 w-3.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/Homepage.tsx",
                                                                lineNumber: 830,
                                                                columnNumber: 84
                                                            }, this),
                                                            Math.abs(trend.delta).toFixed(1)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                                        lineNumber: 829,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                                    lineNumber: 828,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "hidden md:table-cell",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Sparkline, {
                                                        values: scoreHistory(uni, "research"),
                                                        color: "#3b82f6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                                        lineNumber: 835,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                                    lineNumber: 834,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "hidden md:table-cell",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Sparkline, {
                                                        values: scoreHistory(uni, "employability"),
                                                        color: "#10b981"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                                        lineNumber: 838,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                                    lineNumber: 837,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "hidden lg:table-cell",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Sparkline, {
                                                        values: [
                                                            uni.intlStudents - 8,
                                                            uni.intlStudents - 4,
                                                            uni.intlStudents - 2,
                                                            uni.intlStudents - 1,
                                                            uni.intlStudents
                                                        ],
                                                        color: "#8b5cf6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                                        lineNumber: 841,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                                    lineNumber: 840,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, uni.id, true, {
                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                            lineNumber: 812,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                    lineNumber: 808,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Homepage.tsx",
                            lineNumber: 795,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Homepage.tsx",
                        lineNumber: 794,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] text-[var(--ref-muted)] mt-3",
                        children: "* Filterable by location, program & tuition in Rankings Engine."
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Homepage.tsx",
                        lineNumber: 849,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Homepage.tsx",
                lineNumber: 782,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RevealSection, {
                className: "ref-section pt-0 ref-country-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ref-label",
                        children: "Regional Intelligence"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Homepage.tsx",
                        lineNumber: 854,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold mt-1 mb-6",
                        children: "Explore by Country"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Homepage.tsx",
                        lineNumber: 855,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ref-country-grid",
                        children: countryStats.map((c)=>{
                            const theme = getCountryTheme(c.country);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "ref-country-card ref-country-card--light text-left",
                                style: {
                                    "--country-accent": theme.accent,
                                    "--country-bg": theme.bg,
                                    "--country-image": `url(${theme.image})`,
                                    "--country-image-pos": theme.imagePos ?? "center"
                                },
                                onClick: ()=>{
                                    onSearchSubmit(c.country);
                                    onViewChange("rankings");
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ref-country-monument",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                        lineNumber: 877,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ref-country-body",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ref-country-code",
                                                children: theme.code
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Homepage.tsx",
                                                lineNumber: 879,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ref-country-monument-label",
                                                children: theme.monument
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Homepage.tsx",
                                                lineNumber: 880,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ref-country-name",
                                                children: c.country
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Homepage.tsx",
                                                lineNumber: 881,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ref-country-meta",
                                                children: [
                                                    c.count,
                                                    " universities"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/Homepage.tsx",
                                                lineNumber: 882,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ref-country-avg",
                                                children: [
                                                    "Avg ",
                                                    c.avgScore.toFixed(1)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/Homepage.tsx",
                                                lineNumber: 883,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ref-country-top truncate",
                                                children: [
                                                    "Top: ",
                                                    c.topUni.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/Homepage.tsx",
                                                lineNumber: 884,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                        lineNumber: 878,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, c.country, true, {
                                fileName: "[project]/src/app/components/Homepage.tsx",
                                lineNumber: 860,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Homepage.tsx",
                        lineNumber: 856,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Homepage.tsx",
                lineNumber: 853,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RevealSection, {
                className: "ref-section pt-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ref-card p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center",
                    ref: methodologyRef,
                    id: "methodology",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ref-donut"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Homepage.tsx",
                                lineNumber: 896,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Homepage.tsx",
                            lineNumber: 895,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ref-label",
                                    children: "Ranking Methodology"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                    lineNumber: 899,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold mt-1 mb-4",
                                    children: "How We Score Institutions"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                    lineNumber: 900,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-[var(--ref-muted)] mb-6 leading-relaxed",
                                    children: "Our composite index blends research output, teaching quality, graduate outcomes, and global outlook — recalculated in real time from audited institutional data."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                    lineNumber: 901,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3",
                                    children: METHODOLOGY.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-center justify-between text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-3 h-3 rounded-full shrink-0",
                                                            style: {
                                                                background: m.color
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                                            lineNumber: 909,
                                                            columnNumber: 21
                                                        }, this),
                                                        m.label
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                                    lineNumber: 908,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono font-bold",
                                                    children: [
                                                        m.pct,
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                                    lineNumber: 912,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, m.label, true, {
                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                            lineNumber: 907,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                    lineNumber: 905,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Homepage.tsx",
                            lineNumber: 898,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Homepage.tsx",
                    lineNumber: 894,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Homepage.tsx",
                lineNumber: 893,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RevealSection, {
                className: "ref-section pt-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ref-label",
                        children: "Discovery Hub"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Homepage.tsx",
                        lineNumber: 922,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold mt-1 mb-4",
                        children: "Insights & Analysis"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Homepage.tsx",
                        lineNumber: 923,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ref-article-tabs flex gap-6 border-b border-[var(--ref-border)] mb-6",
                        children: [
                            {
                                id: "featured",
                                label: "Featured Insights"
                            },
                            {
                                id: "reports",
                                label: "Latest Reports"
                            },
                            {
                                id: "insights",
                                label: "Regional Briefings"
                            }
                        ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setArticleTab(tab.id),
                                className: `pb-3 text-xs font-bold uppercase tracking-wider transition-colors ${articleTab === tab.id ? "active" : "text-[var(--ref-muted)]"}`,
                                children: tab.label
                            }, tab.id, false, {
                                fileName: "[project]/src/app/components/Homepage.tsx",
                                lineNumber: 932,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Homepage.tsx",
                        lineNumber: 924,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FEATURED_ARTICLES"].map((article)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onArticleSelect(article),
                                className: "ref-card text-left overflow-hidden group hover:border-blue-300 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "aspect-video overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: article.image,
                                            alt: "",
                                            className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                            lineNumber: 953,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                        lineNumber: 951,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ref-label text-[9px]",
                                                children: "Insight"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Homepage.tsx",
                                                lineNumber: 960,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-sm mt-2 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors",
                                                children: article.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Homepage.tsx",
                                                lineNumber: 961,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-[var(--ref-muted)] line-clamp-2 mb-3",
                                                children: article.contentSummary
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Homepage.tsx",
                                                lineNumber: 964,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-[var(--ref-muted)]",
                                                children: [
                                                    article.date,
                                                    " · ",
                                                    article.readTime
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/Homepage.tsx",
                                                lineNumber: 965,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                        lineNumber: 959,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, article.id, true, {
                                fileName: "[project]/src/app/components/Homepage.tsx",
                                lineNumber: 944,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Homepage.tsx",
                        lineNumber: 942,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Homepage.tsx",
                lineNumber: 921,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RevealSection, {
                className: "ref-section pt-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ref-card p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ref-label",
                                    children: "Comparison Tool"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                    lineNumber: 976,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold mt-1 mb-2",
                                    children: "University Comparison"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                    lineNumber: 977,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-[var(--ref-muted)] mb-4",
                                    children: "Top 4 institutions across key performance axes"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                    lineNumber: 978,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RadarChart, {
                                    universities: compareUnis
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                    lineNumber: 979,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2 mt-4 justify-center",
                                    children: compareUnis.map((u, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] px-2 py-1 rounded border border-[var(--ref-border)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-block w-2 h-2 rounded-full mr-1",
                                                    style: {
                                                        background: [
                                                            "#f97316",
                                                            "#3b82f6",
                                                            "#10b981",
                                                            "#8b5cf6"
                                                        ][i]
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                                    lineNumber: 983,
                                                    columnNumber: 19
                                                }, this),
                                                u.name.split(" ")[0]
                                            ]
                                        }, u.id, true, {
                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                            lineNumber: 982,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                    lineNumber: 980,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "ref-btn-outline w-full mt-4 justify-center text-[11px]",
                                    onClick: ()=>onViewChange("rankings"),
                                    children: "Open Full Comparison"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                    lineNumber: 988,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Homepage.tsx",
                            lineNumber: 975,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ref-label",
                                    children: "Real-Time Analytics"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                    lineNumber: 998,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold mt-1 mb-4",
                                    children: "Live Performance Dashboard"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                    lineNumber: 999,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ref-analytics-grid",
                                    children: [
                                        {
                                            title: "Live Rankings Updates",
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$line$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LineChart$3e$__["LineChart"],
                                            color: "#3b82f6",
                                            trend: "up",
                                            stat: "+12 shifts"
                                        },
                                        {
                                            title: "Research Output Growth",
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
                                            color: "#22c55e",
                                            trend: "up",
                                            stat: "+18.7%"
                                        },
                                        {
                                            title: "Country Performance",
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
                                            color: "#3b82f6",
                                            trend: "up",
                                            stat: "Singapore 94.2"
                                        },
                                        {
                                            title: "Institution Performance",
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
                                            color: "#f97316",
                                            trend: "up",
                                            stat: "Tsinghua 98.2"
                                        }
                                    ].map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ref-analytics-card",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mb-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(card.icon, {
                                                            className: "h-4 w-4",
                                                            style: {
                                                                color: card.color
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                                            lineNumber: 1009,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] font-bold uppercase tracking-wider text-[var(--ref-muted)]",
                                                            children: card.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                                            lineNumber: 1010,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                                    lineNumber: 1008,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-mono font-bold text-lg",
                                                    style: {
                                                        color: card.color
                                                    },
                                                    children: card.stat
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                                    lineNumber: 1012,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniLineChart, {
                                                    color: card.color,
                                                    trend: card.trend
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                                    lineNumber: 1013,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, card.title, true, {
                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                            lineNumber: 1007,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                    lineNumber: 1000,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Homepage.tsx",
                            lineNumber: 997,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Homepage.tsx",
                    lineNumber: 974,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Homepage.tsx",
                lineNumber: 973,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ref-pulse-ticker",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ref-pulse-track",
                    children: [
                        ...PULSE_ITEMS,
                        ...PULSE_ITEMS
                    ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-[var(--ref-muted)] inline-flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                    className: "h-3 w-3 text-amber-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                    lineNumber: 1026,
                                    columnNumber: 15
                                }, this),
                                item
                            ]
                        }, `${item}-${i}`, true, {
                            fileName: "[project]/src/app/components/Homepage.tsx",
                            lineNumber: 1025,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Homepage.tsx",
                    lineNumber: 1023,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Homepage.tsx",
                lineNumber: 1022,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "ref-section py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--ref-muted)] mb-6",
                        children: "Trusted by Leading Institutions"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Homepage.tsx",
                        lineNumber: 1035,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap justify-center gap-8 items-center opacity-60",
                        children: topTen.slice(0, 6).map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-bold tracking-wide text-slate-500",
                                children: u.name.split(" ")[0].toUpperCase()
                            }, u.id, false, {
                                fileName: "[project]/src/app/components/Homepage.tsx",
                                lineNumber: 1040,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Homepage.tsx",
                        lineNumber: 1038,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Homepage.tsx",
                lineNumber: 1034,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RevealSection, {
                className: "ref-section pt-0 pb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ref-cta-banner p-8 md:p-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 max-w-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl md:text-3xl font-bold mb-3",
                                children: "Discover the Future of Higher Education Intelligence"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Homepage.tsx",
                                lineNumber: 1051,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-[var(--ref-muted)] mb-6",
                                children: "Access live rankings, institutional analytics, and regional insights trusted across Asia."
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Homepage.tsx",
                                lineNumber: 1054,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-3 justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "ref-btn-primary",
                                        onClick: ()=>onViewChange("rankings"),
                                        children: "Explore Rankings"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                        lineNumber: 1058,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "ref-btn-outline",
                                        onClick: ()=>onViewChange("settings"),
                                        children: "Request Institutional Access"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                        lineNumber: 1061,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Homepage.tsx",
                                lineNumber: 1057,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Homepage.tsx",
                        lineNumber: 1050,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Homepage.tsx",
                    lineNumber: 1049,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Homepage.tsx",
                lineNumber: 1048,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "ref-section pt-0 border-t border-[var(--ref-border)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ref-footer-grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-bold text-lg mb-2",
                                        children: [
                                            "ASIA ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-amber-600",
                                                children: "UNIVERSITY"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Homepage.tsx",
                                                lineNumber: 1074,
                                                columnNumber: 20
                                            }, this),
                                            " RANKINGS"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                        lineNumber: 1073,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-[var(--ref-muted)] leading-relaxed max-w-xs",
                                        children: "The definitive intelligence platform for higher education across Asia and Central Asia."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                        lineNumber: 1076,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Homepage.tsx",
                                lineNumber: 1072,
                                columnNumber: 11
                            }, this),
                            [
                                {
                                    title: "Platform",
                                    links: [
                                        [
                                            "Rankings Engine",
                                            "rankings"
                                        ],
                                        [
                                            "Discovery Hub",
                                            "home"
                                        ],
                                        [
                                            "Analytics",
                                            "rankings"
                                        ]
                                    ]
                                },
                                {
                                    title: "Resources",
                                    links: [
                                        [
                                            "Methodology",
                                            "home"
                                        ],
                                        [
                                            "Reports",
                                            "home"
                                        ],
                                        [
                                            "Insights",
                                            "home"
                                        ]
                                    ]
                                },
                                {
                                    title: "Company",
                                    links: [
                                        [
                                            "About Us",
                                            "settings"
                                        ],
                                        [
                                            "Contact",
                                            "settings"
                                        ],
                                        [
                                            "Privacy",
                                            "settings"
                                        ]
                                    ]
                                }
                            ].map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-xs font-bold uppercase tracking-wider mb-3",
                                            children: col.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                            lineNumber: 1086,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2",
                                            children: col.links.map(([label, view])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>onViewChange(view),
                                                        className: "text-xs text-[var(--ref-muted)] hover:text-blue-600 transition-colors",
                                                        children: label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                                        lineNumber: 1090,
                                                        columnNumber: 21
                                                    }, this)
                                                }, label, false, {
                                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                                    lineNumber: 1089,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                            lineNumber: 1087,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, col.title, true, {
                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                    lineNumber: 1085,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Homepage.tsx",
                        lineNumber: 1071,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 pt-6 border-t border-[var(--ref-border)] flex flex-col sm:flex-row justify-between gap-4 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-[var(--ref-muted)]",
                                children: "© 2026 Asia University Rankings. All rights reserved."
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Homepage.tsx",
                                lineNumber: 1104,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex w-full flex-col items-stretch gap-2 sm:w-auto sm:flex-row sm:items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                        className: "h-4 w-4 text-[var(--ref-muted)]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                        lineNumber: 1106,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        placeholder: "Newsletter email",
                                        className: "bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 w-full sm:w-48 focus:outline-none focus:ring-2 focus:ring-amber-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                        lineNumber: 1107,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "ref-btn-primary text-[10px] px-3 py-2 justify-center",
                                        children: "Subscribe"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                        lineNumber: 1112,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Homepage.tsx",
                                lineNumber: 1105,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Homepage.tsx",
                        lineNumber: 1103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Homepage.tsx",
                lineNumber: 1070,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Homepage.tsx",
        lineNumber: 558,
        columnNumber: 5
    }, this);
}
_s1(Homepage, "3OfLhpt6b46Y/RX4U8LExgHBthU=");
_c4 = Homepage;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "RevealSection");
__turbopack_context__.k.register(_c1, "Sparkline");
__turbopack_context__.k.register(_c2, "MiniLineChart");
__turbopack_context__.k.register(_c3, "RadarChart");
__turbopack_context__.k.register(_c4, "Homepage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/RankingsEngine.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/src/app/components/RankingsEngine.tsx'\n\nMerge conflict marker encountered.");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/src/app/components/ComparisonDock.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ComparisonDock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shuffle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shuffle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shuffle.mjs [app-client] (ecmascript) <export default as Shuffle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash.mjs [app-client] (ecmascript) <export default as Trash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ComparisonDock({ selectedIds, onRemove, onClearAll, onUniversitySelect }) {
    _s();
    const focusRing = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-cyber-yellow dark:focus-visible:ring-offset-cyber-black";
    const [isExpanded, setIsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (selectedIds.length === 0) return null;
    // Fetch full details of selected universities
    const selectedUnis = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_UNIVERSITIES"].filter((uni)=>selectedIds.includes(uni.id));
    const comparisonGridColsClass = selectedUnis.length <= 1 ? "md:grid-cols-2" : selectedUnis.length === 2 ? "md:grid-cols-3" : selectedUnis.length === 3 ? "md:grid-cols-4" : "md:grid-cols-5";
    // Visual Horizontal Fill Meter Component
    const MetricMeter = ({ value, label })=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-1.5 font-sans",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between text-[11px] font-medium text-slate-500",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: label
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/ComparisonDock.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-mono font-bold text-slate-900",
                            children: [
                                value.toFixed(0),
                                "/100"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/ComparisonDock.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/ComparisonDock.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-2 w-full bg-slate-100 border border-slate-250",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-full bg-amber-700 transition-all duration-300",
                        style: {
                            width: `${value}%`
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ComparisonDock.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/ComparisonDock.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/ComparisonDock.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-20 md:bottom-6 left-1/2 z-40 w-full max-w-2xl -translate-x-1/2 px-4 font-sans select-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "aur-panel border-slate-900/10 dark:border-cyber-yellow/20 p-3 sm:p-4 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-2 sm:space-x-4 truncate",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center border border-slate-905 bg-slate-50 text-slate-800",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shuffle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shuffle$3e$__["Shuffle"], {
                                        className: "h-4 sm:h-4.5 w-4 sm:w-4.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "truncate",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-block text-[9px] uppercase font-bold tracking-widest text-amber-700 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded-xs",
                                            children: "Comparison Suite"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[10px] sm:text-xs font-bold text-slate-900 mt-0.5 truncate",
                                            children: [
                                                "Comparing ",
                                                selectedUnis.length,
                                                " of 4 Universities"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden sm:flex items-center space-x-2 shrink-0",
                                    children: selectedUnis.map((uni)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex items-center text-[10px] font-bold border border-slate-200 bg-slate-50 text-slate-800 px-2 py-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "truncate max-w-[80px]",
                                                    children: uni.name.split(" ")[0]
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>onRemove(uni.id),
                                                    "aria-label": `Remove ${uni.name} from comparison`,
                                                    className: `ml-1.5 hover:text-red-600 text-slate-400 ${focusRing}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        className: "h-3 w-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                        lineNumber: 91,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, uni.id, true, {
                                            fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                            lineNumber: 80,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/ComparisonDock.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-2 sm:space-x-3 shrink-0 ml-2 sm:ml-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClearAll,
                                    className: `text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-slate-500 hover:text-slate-900 transition-colors ${focusRing}`,
                                    children: "Clear"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setIsExpanded(true),
                                    className: `inline-flex items-center justify-center border border-slate-900 bg-slate-900 px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white hover:bg-slate-800 transition-colors ${focusRing}`,
                                    children: [
                                        "Compare",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "ml-1.5 h-3.5 w-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                            lineNumber: 113,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/ComparisonDock.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/ComparisonDock.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/ComparisonDock.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 overflow-hidden font-sans",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity",
                        onClick: ()=>setIsExpanded(false)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ComparisonDock.tsx",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-y-10 inset-x-4 md:inset-x-12 lg:inset-x-24 bg-white border border-slate-950 flex flex-col justify-between shadow-2xl z-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 border-b border-slate-200 bg-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] uppercase font-bold tracking-widest text-amber-700",
                                                    children: "Analytical Comparison Model"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-serif text-2xl font-bold text-slate-900 mt-0.5",
                                                    children: "Side-by-Side Matrix"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                            lineNumber: 133,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setIsExpanded(false),
                                            "aria-label": "Close comparison",
                                            className: `p-1 hover:bg-slate-100 rounded text-slate-500 hover:text-slate-900 ${focusRing}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "h-6 w-6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                lineNumber: 147,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                            lineNumber: 141,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                    lineNumber: 132,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-auto p-6 bg-slate-50",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `grid gap-6 grid-cols-1 ${comparisonGridColsClass}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hidden md:flex flex-col justify-between border-r border-slate-200 pr-6 pt-16 space-y-8 select-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2",
                                                            children: "Overall Standing"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                            lineNumber: 159,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-slate-500",
                                                            children: "Summary academic percentile score"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                            lineNumber: 160,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2",
                                                            children: "Citations Score"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                            lineNumber: 163,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-slate-500",
                                                            children: "Research citations count index"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                            lineNumber: 164,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2",
                                                            children: "Research Value"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                            lineNumber: 167,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-slate-500",
                                                            children: "Peer research output audit"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                            lineNumber: 168,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2",
                                                            children: "Employability"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                            lineNumber: 171,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-slate-500",
                                                            children: "Corporate placement placement"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                            lineNumber: 172,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2",
                                                            children: "International Student Ratio"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                            lineNumber: 175,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-slate-500",
                                                            children: "Global diversity intake scale"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                            lineNumber: 176,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                            lineNumber: 157,
                                            columnNumber: 17
                                        }, this),
                                        selectedUnis.map((uni)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border border-slate-200 bg-white p-5 shadow-sm flex flex-col justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "border-b border-slate-100 pb-4 mb-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex justify-between items-start",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                onClick: ()=>{
                                                                                    onUniversitySelect(uni.id);
                                                                                    setIsExpanded(false);
                                                                                },
                                                                                className: "font-sans text-sm font-bold text-slate-900 hover:text-amber-700 cursor-pointer transition-colors leading-tight truncate",
                                                                                children: uni.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                                                lineNumber: 187,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                onClick: ()=>onRemove(uni.id),
                                                                                "aria-label": `Remove ${uni.name} from comparison`,
                                                                                className: `text-slate-400 hover:text-red-600 ml-2 ${focusRing}`,
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash$3e$__["Trash"], {
                                                                                    className: "h-3.5 w-3.5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                                                    lineNumber: 202,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                                                lineNumber: 196,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                                        lineNumber: 186,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] text-slate-400 font-mono block mt-1 font-semibold uppercase",
                                                                        children: uni.location
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                                        lineNumber: 205,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                                lineNumber: 185,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mb-6 flex items-baseline space-x-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-2xl font-serif font-bold text-slate-900",
                                                                        children: [
                                                                            "#",
                                                                            uni.history[0]
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                                        lineNumber: 212,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[9px] text-slate-400 uppercase tracking-widest font-bold",
                                                                        children: "Asia Standing"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                                        lineNumber: 213,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                                lineNumber: 211,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricMeter, {
                                                                        value: uni.overall,
                                                                        label: "Overall Percentile"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                                        lineNumber: 218,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricMeter, {
                                                                        value: uni.citations,
                                                                        label: "Citations Index"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                                        lineNumber: 219,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricMeter, {
                                                                        value: uni.research,
                                                                        label: "Research Output"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                                        lineNumber: 220,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricMeter, {
                                                                        value: uni.employability,
                                                                        label: "Employability Rate"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                                        lineNumber: 221,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricMeter, {
                                                                        value: uni.intlStudents,
                                                                        label: "International Diversity"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                                        lineNumber: 222,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                                lineNumber: 217,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-8 pt-6 border-t border-slate-100 space-y-2.5 text-xs text-slate-600",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex justify-between",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[10px] font-bold uppercase tracking-wider text-slate-400",
                                                                                children: "Programs:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                                                lineNumber: 228,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-slate-800 text-right truncate max-w-[150px]",
                                                                                children: uni.subjects.join(", ")
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                                                lineNumber: 229,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                                        lineNumber: 227,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex justify-between",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[10px] font-bold uppercase tracking-wider text-slate-400",
                                                                                children: "Languages:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                                                lineNumber: 234,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-slate-800 text-right truncate max-w-[150px]",
                                                                                children: uni.languages.join(", ")
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                                                lineNumber: 235,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                                        lineNumber: 233,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex justify-between",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[10px] font-bold uppercase tracking-wider text-slate-400",
                                                                                children: "Tuition Est:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                                                lineNumber: 240,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-mono text-slate-900 font-semibold",
                                                                                children: uni.tuition
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                                                lineNumber: 241,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                                        lineNumber: 239,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                                lineNumber: 226,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-8",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>{
                                                                onUniversitySelect(uni.id);
                                                                setIsExpanded(false);
                                                            },
                                                            className: `w-full text-center border border-slate-900 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-slate-50 transition-colors ${focusRing}`,
                                                            children: "Deep-Dive Profile"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                            lineNumber: 247,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                        lineNumber: 246,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, uni.id, true, {
                                                fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                lineNumber: 182,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                    lineNumber: 154,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                lineNumber: 153,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 border-t border-slate-200 bg-white flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: onClearAll,
                                        className: `text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-slate-900 transition-colors ${focusRing}`,
                                        children: "Clear All Matches"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                        lineNumber: 265,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setIsExpanded(false),
                                        className: `bg-slate-900 text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 hover:bg-slate-800 transition-colors border border-slate-900 ${focusRing}`,
                                        children: "Return to Analysis"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                        lineNumber: 272,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                lineNumber: 264,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/ComparisonDock.tsx",
                        lineNumber: 128,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/ComparisonDock.tsx",
                lineNumber: 121,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(ComparisonDock, "FPNvbbHVlWWR4LKxxNntSxiIS38=");
_c = ComparisonDock;
var _c;
__turbopack_context__.k.register(_c, "ComparisonDock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/UniversityProfile.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UniversityProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.mjs [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.mjs [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.mjs [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.mjs [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.mjs [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.mjs [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$line$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LineChart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-line.mjs [app-client] (ecmascript) <export default as LineChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.mjs [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.mjs [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bookmark.mjs [app-client] (ecmascript) <export default as Bookmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square.mjs [app-client] (ecmascript) <export default as Square>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.mjs [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-days.mjs [app-client] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$percent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Percent$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/percent.mjs [app-client] (ecmascript) <export default as Percent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/badge-check.mjs [app-client] (ecmascript) <export default as BadgeCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$marked$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookMarked$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-marked.mjs [app-client] (ecmascript) <export default as BookMarked>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data.ts [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
// Lazy load the heavy charting component
const TrendChart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/app/components/TrendChart.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/app/components/TrendChart.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-[300px] flex items-center justify-center border border-[var(--aur-border)] bg-[var(--aur-surface-2)] text-[var(--aur-text-muted)] font-mono text-xs uppercase tracking-widest rounded-xl",
            children: "Loading Analytics Engine..."
        }, void 0, false, {
            fileName: "[project]/src/app/components/UniversityProfile.tsx",
            lineNumber: 17,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    ssr: false
});
_c = TrendChart;
function UniversityProfile({ universityId, onBack, onViewChange, savedUniIds, onToggleSave }) {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("overview");
    const uni = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_UNIVERSITIES"].find((u)=>u.id === universityId);
    const isShortlisted = savedUniIds?.includes(universityId) || false;
    if (!uni) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto w-full px-4 py-16 text-center font-sans",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold text-[var(--aur-text)]",
                    children: "University Record Not Found"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/UniversityProfile.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onBack,
                    className: "mt-4 text-[var(--aur-text-secondary)] hover:text-[var(--aur-text)] font-bold",
                    children: "Return to Rankings"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/UniversityProfile.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/UniversityProfile.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto w-full pb-16 font-sans flex-grow animate-fadeIn bg-[var(--background)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between border-b border-[var(--aur-border)] bg-[var(--aur-surface)]/80 backdrop-blur-md sticky top-0 z-40",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBack,
                        className: "inline-flex items-center text-[10px] font-bold uppercase tracking-wider text-[var(--aur-text-secondary)] hover:text-[var(--aur-text)] transition-colors bg-[var(--aur-surface-hover)] border border-[var(--aur-border)] px-4 py-2 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "h-4 w-4 mr-1.5"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            "Back to Directory"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] uppercase font-bold tracking-widest text-[var(--aur-text-muted)]",
                        children: "Institutional Profile"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mb-24 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative h-[380px] w-full rounded-3xl overflow-hidden bg-[var(--aur-surface-2)] shadow-[var(--aur-shadow)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: uni.campusPhoto,
                                alt: `${uni.name} Campus`,
                                fill: true,
                                className: "object-cover opacity-90",
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-[#000000]/90 via-[#000000]/40 to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-16 left-0 right-0 px-8 sm:px-12 flex flex-col md:flex-row items-center md:items-end gap-8 text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-32 w-32 bg-[var(--aur-surface)] rounded-2xl shadow-2xl border-4 border-white/10 overflow-hidden shrink-0 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: uni.campusPhoto,
                                            alt: `${uni.name} Logo`,
                                            width: 128,
                                            height: 128,
                                            className: "object-cover w-full h-full opacity-80 mix-blend-luminosity"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                            lineNumber: 80,
                                            columnNumber: 16
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-grow flex flex-col md:flex-row justify-between items-center md:items-end w-full pb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center md:text-left",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "text-3xl md:text-5xl lg:text-6xl font-bold font-serif tracking-tight mb-3 text-white drop-shadow-md",
                                                        children: uni.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 text-sm text-white/80 justify-center md:justify-start font-medium",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                className: "h-4 w-4 opacity-80"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                                lineNumber: 94,
                                                                columnNumber: 19
                                                            }, this),
                                                            uni.location
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                        lineNumber: 93,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                lineNumber: 89,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap justify-center gap-3 mt-6 md:mt-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "bg-white text-black hover:bg-gray-100 font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-colors shadow-lg",
                                                        children: "Apply with QS"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>onToggleSave(universityId),
                                                        className: `${isShortlisted ? "bg-red-500 text-white" : "bg-black/50 hover:bg-black/70 text-white border border-white/20"} font-bold px-5 py-3 rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg backdrop-blur-sm`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__["Bookmark"], {
                                                                className: `h-4 w-4 ${isShortlisted ? "fill-current" : ""}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                                lineNumber: 105,
                                                                columnNumber: 19
                                                            }, this),
                                                            " ",
                                                            isShortlisted ? "Saved" : "Save"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                        lineNumber: 102,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>onViewChange("rankings"),
                                                        className: "bg-black/50 hover:bg-black/70 text-white border border-white/20 font-bold px-5 py-3 rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg backdrop-blur-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__["Square"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                                lineNumber: 110,
                                                                columnNumber: 19
                                                            }, this),
                                                            " Compare"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                lineNumber: 98,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -bottom-12 left-0 right-0 px-10 sm:px-16 grid grid-cols-1 md:grid-cols-3 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[var(--aur-surface)] border border-[var(--aur-border)] rounded-2xl p-6 shadow-[var(--aur-shadow)] flex flex-col items-center justify-center text-center transform transition-transform hover:-translate-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-3xl lg:text-4xl font-serif font-bold text-[var(--aur-text)] mb-2",
                                        children: [
                                            "#=",
                                            uni.history[0] || uni.qsSubjectRankings?.[0]?.worldRank || 587
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                        lineNumber: 120,
                                        columnNumber: 14
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] uppercase tracking-widest text-[var(--aur-text-muted)] font-bold",
                                        children: "QS World Rank"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                        lineNumber: 123,
                                        columnNumber: 14
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                lineNumber: 119,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[var(--aur-surface)] border border-[var(--aur-border)] rounded-2xl p-6 shadow-[var(--aur-shadow)] flex flex-col items-center justify-center text-center transform transition-transform hover:-translate-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-3xl lg:text-4xl font-serif font-bold text-[var(--aur-text)] mb-2",
                                        children: uni.subjects.length * 15
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                        lineNumber: 126,
                                        columnNumber: 14
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] uppercase tracking-widest text-[var(--aur-text-muted)] font-bold",
                                        children: "Total Programmes"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                        lineNumber: 129,
                                        columnNumber: 14
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                lineNumber: 125,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[var(--aur-surface)] border border-[var(--aur-border)] rounded-2xl p-6 shadow-[var(--aur-shadow)] flex flex-col items-center justify-center text-center transform transition-transform hover:-translate-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-3xl lg:text-4xl font-serif font-bold text-[var(--aur-text)] mb-2",
                                        children: [
                                            uni.intlStudents || 12,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                        lineNumber: 132,
                                        columnNumber: 14
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] uppercase tracking-widest text-[var(--aur-text-muted)] font-bold",
                                        children: "Intl Students"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                        lineNumber: 135,
                                        columnNumber: 14
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                lineNumber: 131,
                                columnNumber: 12
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-b border-[var(--aur-border)] mb-12 flex overflow-x-auto hide-scrollbar gap-8",
                        children: [
                            {
                                id: "overview",
                                label: "Overview & Context",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"]
                            },
                            {
                                id: "metrics",
                                label: "Academic Metrics",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$line$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LineChart$3e$__["LineChart"]
                            },
                            {
                                id: "admissions",
                                label: "Admissions",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"]
                            }
                        ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab(tab.id),
                                className: `inline-flex items-center whitespace-nowrap border-b-2 pb-4 text-xs font-bold uppercase tracking-widest transition-all -mb-[1px] ${activeTab === tab.id ? "border-[var(--aur-text)] text-[var(--aur-text)]" : "border-transparent text-[var(--aur-text-muted)] hover:text-[var(--aur-text-secondary)] hover:border-[var(--aur-border-strong)]"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(tab.icon, {
                                        className: `h-4 w-4 mr-2.5 ${activeTab === tab.id ? "text-[var(--aur-text)]" : "text-[var(--aur-text-muted)]"}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, this),
                                    tab.label
                                ]
                            }, tab.id, true, {
                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                lineNumber: 148,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-h-[400px]",
                        children: [
                            activeTab === "overview" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 lg:grid-cols-3 gap-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lg:col-span-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-serif text-3xl font-bold text-[var(--aur-text)] mb-6",
                                                children: "Institutional Profile"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                lineNumber: 170,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[var(--aur-text-secondary)] text-base leading-relaxed mb-10",
                                                children: uni.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                lineNumber: 171,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-serif text-2xl font-bold text-[var(--aur-text)] mb-6",
                                                children: "Regional Context & Infrastructure"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                lineNumber: 175,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[var(--aur-text-secondary)] text-base leading-relaxed mb-12",
                                                children: [
                                                    "Located in the heart of ",
                                                    uni.location,
                                                    ", this institution benefits from robust regional infrastructure and deep academic networks. International students frequently choose this destination for its unique blend of cultural heritage and advanced research facilities.",
                                                    uni.hasMedicine && " Its medical faculties are internationally recognized, providing rigorous clinical instruction tailored for global medical practice."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                lineNumber: 176,
                                                columnNumber: 17
                                            }, this),
                                            uni.qsSubjectRankings && uni.qsSubjectRankings.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-12 bg-[var(--aur-surface)] border border-[var(--aur-border)] rounded-3xl p-8 shadow-[var(--aur-shadow-sm)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-8 pb-4 border-b border-[var(--aur-border)]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-serif text-2xl font-bold text-[var(--aur-text)]",
                                                                children: "Rankings by Subject"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                                lineNumber: 186,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                                                className: "h-6 w-6 text-[var(--aur-text-muted)]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                                lineNumber: 187,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-4",
                                                        children: uni.qsSubjectRankings.map((qs, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between p-5 bg-[var(--aur-surface-2)] border border-[var(--aur-border)] rounded-2xl hover:border-[var(--aur-border-strong)] transition-all group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "h-10 w-10 rounded-xl bg-[var(--aur-surface)] border border-[var(--aur-border)] flex items-center justify-center shadow-sm",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                                                    className: "h-5 w-5 text-[var(--aur-text-secondary)] group-hover:text-[var(--aur-text)] transition-colors"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                                                    lineNumber: 195,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                                                lineNumber: 194,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-bold text-sm text-[var(--aur-text)]",
                                                                                children: qs.subject
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                                                lineNumber: 197,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                                        lineNumber: 193,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-6",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-right",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "block text-[10px] uppercase tracking-widest text-[var(--aur-text-muted)] font-bold mb-1",
                                                                                        children: "World Rank"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                                                        lineNumber: 201,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "font-mono text-lg font-bold text-[var(--aur-text)]",
                                                                                        children: [
                                                                                            "#",
                                                                                            qs.worldRank
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                                                        lineNumber: 202,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                                                lineNumber: 200,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-px h-10 bg-[var(--aur-border)]"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                                                lineNumber: 204,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-right min-w-[4rem]",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "block text-[10px] uppercase tracking-widest text-[var(--aur-text-muted)] font-bold mb-1",
                                                                                        children: "Score"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                                                        lineNumber: 206,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "font-mono text-lg font-bold text-[var(--aur-text)]",
                                                                                        children: qs.score.toFixed(1)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                                                        lineNumber: 207,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                                                lineNumber: 205,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                                        lineNumber: 199,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, i, true, {
                                                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                                lineNumber: 192,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                lineNumber: 184,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                        lineNumber: 169,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lg:col-span-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border border-[var(--aur-border)] bg-[var(--aur-surface)] rounded-3xl p-8 sticky top-28 shadow-[var(--aur-shadow)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-[10px] font-bold uppercase tracking-widest text-[var(--aur-text-muted)] mb-6 border-b border-[var(--aur-border)] pb-4 flex items-center justify-between",
                                                    children: [
                                                        "Fast Facts",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                            lineNumber: 221,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                    lineNumber: 219,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "space-y-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "block text-[10px] text-[var(--aur-text-muted)] uppercase tracking-wider mb-2",
                                                                    children: "Location"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                                    lineNumber: 225,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm font-bold text-[var(--aur-text)] flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                            className: "h-4 w-4 text-[var(--aur-text-secondary)]"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                                            lineNumber: 227,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        uni.location
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                                    lineNumber: 226,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                            lineNumber: 224,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "block text-[10px] text-[var(--aur-text-muted)] uppercase tracking-wider mb-2",
                                                                    children: "Primary Language"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                                    lineNumber: 232,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm font-bold text-[var(--aur-text)]",
                                                                    children: uni.languages[0]
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                                    lineNumber: 233,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                            lineNumber: 231,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "block text-[10px] text-[var(--aur-text-muted)] uppercase tracking-wider mb-2",
                                                                    children: "Est. Tuition (Intl)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                                    lineNumber: 236,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm font-bold text-[var(--aur-text)] font-mono bg-[var(--aur-surface-2)] px-3 py-1.5 rounded-lg border border-[var(--aur-border)] inline-block",
                                                                    children: uni.tuition
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                                    lineNumber: 237,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                            lineNumber: 235,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                    lineNumber: 223,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-8 border-t border-[var(--aur-border)] pt-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                            className: "text-[10px] font-bold uppercase tracking-widest text-[var(--aur-text-muted)] mb-5",
                                                            children: "Core Metrics"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                            lineNumber: 243,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-5",
                                                            children: [
                                                                {
                                                                    label: "Academic Reputation",
                                                                    value: uni.academicReputation || uni.research
                                                                },
                                                                {
                                                                    label: "Employer Reputation",
                                                                    value: uni.employerReputation || uni.employability
                                                                },
                                                                {
                                                                    label: "Citations per Faculty",
                                                                    value: uni.citations
                                                                },
                                                                {
                                                                    label: "Faculty/Student Ratio",
                                                                    value: uni.facultyStudentRatio || uni.teaching
                                                                },
                                                                {
                                                                    label: "International Students",
                                                                    value: uni.intlStudents
                                                                }
                                                            ].map((metric)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex justify-between text-xs font-bold mb-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-[var(--aur-text-secondary)]",
                                                                                    children: metric.label
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                                                    lineNumber: 256,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-mono text-[var(--aur-text)]",
                                                                                    children: [
                                                                                        metric.value.toFixed(1),
                                                                                        "%"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                                                    lineNumber: 257,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                                            lineNumber: 255,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-full h-2.5 bg-[var(--aur-surface-hover)] rounded-full overflow-hidden border border-[var(--aur-border)]",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "h-full bg-[var(--aur-text)] rounded-full"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                                                lineNumber: 260,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                                            lineNumber: 259,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, metric.label, true, {
                                                                    fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                                    lineNumber: 254,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                            lineNumber: 246,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                    lineNumber: 242,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                            lineNumber: 218,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                        lineNumber: 217,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, this),
                            activeTab === "metrics" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-12 animate-fadeIn max-w-5xl mx-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center mb-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-serif text-3xl font-bold text-[var(--aur-text)] mb-4",
                                                children: "Academic Intelligence Metrics"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                lineNumber: 281,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-[var(--aur-text-secondary)] max-w-2xl mx-auto leading-relaxed",
                                                children: "Scores are aggregated from the Global Employer Survey, Academic Reputation Index, and peer-reviewed citation registries to ensure maximum fidelity."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                lineNumber: 282,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                        lineNumber: 280,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 md:grid-cols-3 gap-6",
                                        children: [
                                            {
                                                label: "Overall Score",
                                                value: uni.overall,
                                                highlight: true
                                            },
                                            {
                                                label: "Academic Rep",
                                                value: uni.academicReputation || uni.research
                                            },
                                            {
                                                label: "Employer Rep",
                                                value: uni.employerReputation || uni.employability
                                            },
                                            {
                                                label: "Citations/Faculty",
                                                value: uni.citations
                                            },
                                            {
                                                label: "Faculty/Student",
                                                value: uni.facultyStudentRatio || uni.teaching
                                            },
                                            {
                                                label: "Intl Students",
                                                value: uni.intlStudents
                                            }
                                        ].map((metric, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `rounded-3xl p-8 flex flex-col justify-between shadow-sm transition-transform hover:-translate-y-1 ${metric.highlight ? "bg-[var(--aur-text)] text-[var(--background)]" : "border border-[var(--aur-border)] bg-[var(--aur-surface)]"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `block text-[10px] uppercase font-bold tracking-widest mb-4 ${metric.highlight ? "text-[var(--background)] opacity-70" : "text-[var(--aur-text-muted)]"}`,
                                                        children: metric.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                        lineNumber: 301,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-4xl font-black font-serif ${metric.highlight ? "text-[var(--background)]" : "text-[var(--aur-text)]"}`,
                                                        children: metric.value.toFixed(1)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                        lineNumber: 306,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                lineNumber: 296,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                        lineNumber: 287,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-[var(--aur-border)] rounded-3xl bg-[var(--aur-surface)] p-8 sm:p-10 shadow-[var(--aur-shadow-sm)] mt-12",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-serif text-2xl font-bold text-[var(--aur-text)]",
                                                                children: "5-Year Rank Progression"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                                lineNumber: 318,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] uppercase font-bold tracking-widest text-[var(--aur-text-muted)] mt-2",
                                                                children: "Historical Performance Chart"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                                lineNumber: 319,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                        lineNumber: 317,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$line$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LineChart$3e$__["LineChart"], {
                                                        className: "h-6 w-6 text-[var(--aur-text-muted)]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                        lineNumber: 321,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                lineNumber: 316,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-[var(--aur-surface-2)] rounded-2xl border border-[var(--aur-border)] p-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TrendChart, {
                                                    history: uni.history
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                    lineNumber: 325,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                lineNumber: 324,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                        lineNumber: 315,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                lineNumber: 278,
                                columnNumber: 13
                            }, this),
                            activeTab === "admissions" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-10 animate-fadeIn max-w-5xl mx-auto",
                                children: [
                                    (uni.acceptanceRate || uni.applicationDeadline || uni.founded || uni.studentCount || uni.scholarshipDetails) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5",
                                        children: [
                                            uni.acceptanceRate !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-6 rounded-2xl border border-[var(--aur-border)] bg-[var(--aur-surface)] flex flex-col gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-9 w-9 rounded-xl bg-[var(--aur-surface-2)] border border-[var(--aur-border)] flex items-center justify-center mb-1",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$percent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Percent$3e$__["Percent"], {
                                                            className: "h-4 w-4 text-[var(--aur-text-secondary)]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                            lineNumber: 341,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                        lineNumber: 340,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-bold uppercase tracking-widest text-[var(--aur-text-muted)]",
                                                        children: "Acceptance Rate"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                        lineNumber: 343,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-2xl font-black font-mono text-[var(--aur-text)]",
                                                        children: [
                                                            uni.acceptanceRate,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                        lineNumber: 344,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                lineNumber: 339,
                                                columnNumber: 21
                                            }, this),
                                            uni.founded !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-6 rounded-2xl border border-[var(--aur-border)] bg-[var(--aur-surface)] flex flex-col gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-9 w-9 rounded-xl bg-[var(--aur-surface-2)] border border-[var(--aur-border)] flex items-center justify-center mb-1",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                                            className: "h-4 w-4 text-[var(--aur-text-secondary)]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                            lineNumber: 350,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                        lineNumber: 349,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-bold uppercase tracking-widest text-[var(--aur-text-muted)]",
                                                        children: "Established"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                        lineNumber: 352,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-2xl font-black font-mono text-[var(--aur-text)]",
                                                        children: uni.founded
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                        lineNumber: 353,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                lineNumber: 348,
                                                columnNumber: 21
                                            }, this),
                                            uni.studentCount !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-6 rounded-2xl border border-[var(--aur-border)] bg-[var(--aur-surface)] flex flex-col gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-9 w-9 rounded-xl bg-[var(--aur-surface-2)] border border-[var(--aur-border)] flex items-center justify-center mb-1",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                            className: "h-4 w-4 text-[var(--aur-text-secondary)]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                            lineNumber: 359,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                        lineNumber: 358,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-bold uppercase tracking-widest text-[var(--aur-text-muted)]",
                                                        children: "Students"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                        lineNumber: 361,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-2xl font-black font-mono text-[var(--aur-text)]",
                                                        children: uni.studentCount.toLocaleString()
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                        lineNumber: 362,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                lineNumber: 357,
                                                columnNumber: 21
                                            }, this),
                                            uni.applicationDeadline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-6 rounded-2xl border border-[var(--aur-border)] bg-[var(--aur-surface)] flex flex-col gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-9 w-9 rounded-xl bg-[var(--aur-surface-2)] border border-[var(--aur-border)] flex items-center justify-center mb-1",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"], {
                                                            className: "h-4 w-4 text-[var(--aur-text-secondary)]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                            lineNumber: 368,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                        lineNumber: 367,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-bold uppercase tracking-widest text-[var(--aur-text-muted)]",
                                                        children: "Application Deadline"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                        lineNumber: 370,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-bold text-[var(--aur-text)] leading-tight",
                                                        children: uni.applicationDeadline
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                        lineNumber: 371,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                lineNumber: 366,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                        lineNumber: 337,
                                        columnNumber: 17
                                    }, this),
                                    uni.scholarshipDetails && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-4 p-6 rounded-2xl border border-[var(--aur-border)] bg-[var(--aur-surface-2)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-10 w-10 rounded-xl bg-[var(--aur-surface)] border border-[var(--aur-border)] flex items-center justify-center shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__["BadgeCheck"], {
                                                    className: "h-5 w-5 text-[var(--aur-text)]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                    lineNumber: 381,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                lineNumber: 380,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] font-bold uppercase tracking-widest text-[var(--aur-text-muted)] mb-1",
                                                        children: "Financial Aid & Scholarships"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                        lineNumber: 384,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-[var(--aur-text-secondary)] leading-relaxed",
                                                        children: uni.scholarshipDetails
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                        lineNumber: 385,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                lineNumber: 383,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                        lineNumber: 379,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-4 mb-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-12 w-12 rounded-2xl bg-[var(--aur-surface-hover)] border border-[var(--aur-border)] flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                                                    className: "h-5 w-5 text-[var(--aur-text)]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                                    lineNumber: 395,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                                lineNumber: 394,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "font-serif text-2xl font-bold text-[var(--aur-text)]",
                                                                children: "Core Faculties"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                                lineNumber: 397,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                        lineNumber: 393,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "divide-y divide-[var(--aur-border)] border border-[var(--aur-border)] rounded-3xl bg-[var(--aur-surface)] overflow-hidden shadow-sm",
                                                        children: uni.subjects.map((sub, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "px-6 py-5 flex items-center text-sm font-bold text-[var(--aur-text)] hover:bg-[var(--aur-surface-hover)] transition-colors",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "h-2 w-2 rounded-full bg-[var(--aur-text)] opacity-40 mr-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                                        lineNumber: 402,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    sub
                                                                ]
                                                            }, idx, true, {
                                                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                                lineNumber: 401,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                        lineNumber: 399,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                lineNumber: 392,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-4 mb-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-12 w-12 rounded-2xl bg-[var(--aur-surface-hover)] border border-[var(--aur-border)] flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$marked$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookMarked$3e$__["BookMarked"], {
                                                                    className: "h-5 w-5 text-[var(--aur-text)]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                                    lineNumber: 412,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                                lineNumber: 411,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "font-serif text-2xl font-bold text-[var(--aur-text)]",
                                                                children: "Featured Programs"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                                lineNumber: 414,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                        lineNumber: 410,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "space-y-3",
                                                        children: uni.programs.map((prog, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "p-5 border border-[var(--aur-border)] bg-[var(--aur-surface)] rounded-2xl flex items-center justify-between group cursor-pointer hover:border-[var(--aur-border-strong)] hover:shadow-[var(--aur-shadow-sm)] transition-all",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm text-[var(--aur-text)] font-bold",
                                                                        children: prog
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                                        lineNumber: 422,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] text-[var(--aur-text-muted)] uppercase tracking-widest font-bold flex items-center gap-1.5 group-hover:text-[var(--aur-text)] transition-colors shrink-0 ml-4",
                                                                        children: [
                                                                            "Details ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                                                className: "h-3.5 w-3.5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                                                lineNumber: 424,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                                        lineNumber: 423,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, idx, true, {
                                                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                                lineNumber: 418,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                        lineNumber: 416,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                lineNumber: 409,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                        lineNumber: 391,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6 rounded-2xl border border-[var(--aur-border)] bg-[var(--aur-surface)] flex flex-wrap gap-3 items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                className: "h-4 w-4 text-[var(--aur-text-muted)] shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                lineNumber: 434,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-bold uppercase tracking-widest text-[var(--aur-text-muted)] mr-2",
                                                children: "Languages of Instruction"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                lineNumber: 435,
                                                columnNumber: 17
                                            }, this),
                                            uni.languages.map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-bold px-3 py-1.5 rounded-lg border border-[var(--aur-border-strong)] bg-[var(--aur-surface-2)] text-[var(--aur-text)]",
                                                    children: lang
                                                }, lang, false, {
                                                    fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                    lineNumber: 437,
                                                    columnNumber: 19
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                        lineNumber: 433,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                lineNumber: 333,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/UniversityProfile.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(UniversityProfile, "0RhE9c0qkQp+3CR2mJOCewxRmMU=");
_c1 = UniversityProfile;
var _c, _c1;
__turbopack_context__.k.register(_c, "TrendChart");
__turbopack_context__.k.register(_c1, "UniversityProfile");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/FloatingChatAssistant.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FloatingChatAssistant
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.mjs [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.mjs [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$navigation$2f$SidebarContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/navigation/SidebarContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const MOCK_RESPONSES = {
    default: "I can help you explore university rankings, compare institutions, and understand academic metrics across Asia. What would you like to know?",
    ranking: "Asia's top-ranked universities include Tsinghua University (China), University of Tokyo (Japan), and National University of Singapore — ranked on citations, research output, employability, and international diversity.",
    medical: "For MBBS programs in Asia, Uzbekistan, China, and Russia are popular destinations. Many offer English-medium programs at significantly lower tuition than Western countries.",
    compare: "Use the Comparison Suite (dock at the bottom) to select up to 4 universities side-by-side and view detailed metric breakdowns for citations, research, and employability.",
    cost: "Tuition ranges from ~$2,000/year in Uzbekistan to $40,000+/year in Singapore and Japan. The Rankings Engine includes a tuition filter to help you search by budget."
};
function getMockResponse(query) {
    const q = query.toLowerCase();
    if (q.includes("rank") || q.includes("top") || q.includes("best")) return MOCK_RESPONSES.ranking;
    if (q.includes("medical") || q.includes("mbbs") || q.includes("medicine")) return MOCK_RESPONSES.medical;
    if (q.includes("compare") || q.includes("comparison") || q.includes("vs")) return MOCK_RESPONSES.compare;
    if (q.includes("cost") || q.includes("tuition") || q.includes("fee") || q.includes("price")) return MOCK_RESPONSES.cost;
    return MOCK_RESPONSES.default;
}
function FloatingChatAssistant() {
    _s();
    const { theme, activeView } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$navigation$2f$SidebarContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"])();
    const isDark = theme === "dark";
    const [isChatOpen, setIsChatOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isIdle, setIsIdle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FloatingChatAssistant.useEffect": ()=>{
            let timeout;
            const handleScroll = {
                "FloatingChatAssistant.useEffect.handleScroll": ()=>{
                    setIsIdle(false);
                    clearTimeout(timeout);
                    timeout = setTimeout({
                        "FloatingChatAssistant.useEffect.handleScroll": ()=>setIsIdle(true)
                    }["FloatingChatAssistant.useEffect.handleScroll"], 1500);
                }
            }["FloatingChatAssistant.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            return ({
                "FloatingChatAssistant.useEffect": ()=>{
                    window.removeEventListener("scroll", handleScroll);
                    clearTimeout(timeout);
                }
            })["FloatingChatAssistant.useEffect"];
        }
    }["FloatingChatAssistant.useEffect"], []);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: "init",
            role: "assistant",
            content: "Hello! I'm your Asia University Rankings assistant. Ask me about rankings, programs, tuition, or how to use the comparison tools."
        }
    ]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isThinking, setIsThinking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // ─── Side Effects ─────────────────────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FloatingChatAssistant.useEffect": ()=>{
            if (isChatOpen) {
                setTimeout({
                    "FloatingChatAssistant.useEffect": ()=>messagesEndRef.current?.scrollIntoView({
                            behavior: "smooth"
                        })
                }["FloatingChatAssistant.useEffect"], 50);
                setTimeout({
                    "FloatingChatAssistant.useEffect": ()=>inputRef.current?.focus()
                }["FloatingChatAssistant.useEffect"], 140);
            }
        }
    }["FloatingChatAssistant.useEffect"], [
        isChatOpen,
        messages
    ]);
    // ─── Handlers ─────────────────────────────────────────────────────────────
    const handleClose = ()=>{
        setIsChatOpen(false);
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!input.trim() || isThinking) return;
        const userMsg = {
            id: `u-${Date.now()}`,
            role: "user",
            content: input.trim()
        };
        const query = userMsg.content;
        setMessages((prev)=>[
                ...prev,
                userMsg
            ]);
        setInput("");
        setIsThinking(true);
        setTimeout(()=>{
            setIsThinking(false);
            setMessages((prev)=>[
                    ...prev,
                    {
                        id: `a-${Date.now()}`,
                        role: "assistant",
                        content: getMockResponse(query)
                    }
                ]);
        }, 900 + Math.random() * 500);
    };
    // ─── Theme Tokens ─────────────────────────────────────────────────────────
    const panelBg = isDark ? "bg-[#0d0d11]" : "bg-white";
    const headerBg = isDark ? "bg-[#18181f]" : "bg-slate-50";
    const border = isDark ? "border-cyber-border" : "border-slate-200";
    const inputBg = isDark ? "bg-[#070710]" : "bg-slate-50";
    const aiBubble = isDark ? "bg-[#18181f] border border-slate-800 text-slate-300" : "bg-slate-100 border border-slate-200 text-slate-700";
    const accent = isDark ? "text-cyber-yellow" : "text-amber-700";
    const muted = isDark ? "text-slate-400" : "text-slate-500";
    // Shadow that glows while dragging (matches cyber-yellow in dark, slate in light)
    const dragGlow = isDark ? "shadow-[0_12px_48px_rgba(234,179,8,0.18)]" : "shadow-[0_12px_48px_rgba(15,23,42,0.18)]";
    // ─── Render ───────────────────────────────────────────────────────────────
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: isChatOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: [
                        "fixed bottom-24 right-6 z-50",
                        "w-80 sm:w-[360px]",
                        "flex flex-col rounded-xl overflow-hidden",
                        "border",
                        border,
                        panelBg,
                        dragGlow,
                        "cursor-grab select-none",
                        "will-change-transform"
                    ].join(" "),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: [
                                "flex items-center justify-between px-4 py-3",
                                headerBg,
                                "border-b",
                                border,
                                "shrink-0"
                            ].join(" "),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: [
                                                "flex h-7 w-7 items-center justify-center rounded-full",
                                                isDark ? "bg-cyber-yellow/10 border border-cyber-yellow/20" : "bg-amber-50 border border-amber-200"
                                            ].join(" "),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                className: `h-3.5 w-3.5 ${accent}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/FloatingChatAssistant.tsx",
                                                lineNumber: 171,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/FloatingChatAssistant.tsx",
                                            lineNumber: 163,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `text-[11px] font-bold uppercase tracking-widest ${isDark ? "text-white" : "text-slate-900"}`,
                                                    children: "AI Rankings Assistant"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/FloatingChatAssistant.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `text-[9px] font-mono ${muted}`,
                                                    children: isThinking ? "Analyzing…" : "Drag · Swirl · Ask anything"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/FloatingChatAssistant.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/FloatingChatAssistant.tsx",
                                            lineNumber: 173,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/FloatingChatAssistant.tsx",
                                    lineNumber: 162,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onPointerDown: (e)=>e.stopPropagation(),
                                    onClick: handleClose,
                                    className: [
                                        "p-1.5 rounded-full transition-colors",
                                        isDark ? "hover:bg-slate-800 text-slate-400 hover:text-white" : "hover:bg-slate-200 text-slate-400 hover:text-slate-800"
                                    ].join(" "),
                                    title: "Close",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/FloatingChatAssistant.tsx",
                                        lineNumber: 195,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/FloatingChatAssistant.tsx",
                                    lineNumber: 184,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/FloatingChatAssistant.tsx",
                            lineNumber: 152,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto px-4 py-4 space-y-3 cursor-default",
                            style: {
                                maxHeight: 340
                            },
                            onPointerDown: (e)=>e.stopPropagation(),
                            children: [
                                messages.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex ${msg.role === "user" ? "justify-end" : "justify-start"}`,
                                        children: [
                                            msg.role === "assistant" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: [
                                                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-full mr-2 mt-0.5",
                                                    isDark ? "bg-cyber-yellow/10" : "bg-amber-50 border border-amber-200"
                                                ].join(" "),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                                    className: `h-3 w-3 ${accent}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/FloatingChatAssistant.tsx",
                                                    lineNumber: 218,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/FloatingChatAssistant.tsx",
                                                lineNumber: 212,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: [
                                                    "max-w-[78%] rounded-xl px-3.5 py-2.5 text-xs leading-relaxed",
                                                    msg.role === "user" ? "bg-amber-600 dark:bg-cyber-yellow text-white dark:text-cyber-black font-semibold" : aiBubble
                                                ].join(" "),
                                                children: msg.content
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/FloatingChatAssistant.tsx",
                                                lineNumber: 221,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, msg.id, true, {
                                        fileName: "[project]/src/app/components/FloatingChatAssistant.tsx",
                                        lineNumber: 207,
                                        columnNumber: 17
                                    }, this)),
                                isThinking && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-start",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: [
                                                "flex h-6 w-6 shrink-0 items-center justify-center rounded-full mr-2 mt-0.5",
                                                isDark ? "bg-cyber-yellow/10" : "bg-amber-50 border border-amber-200"
                                            ].join(" "),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                                className: `h-3 w-3 ${accent}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/FloatingChatAssistant.tsx",
                                                lineNumber: 243,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/FloatingChatAssistant.tsx",
                                            lineNumber: 237,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `flex items-center gap-1.5 rounded-xl px-3.5 py-2.5 text-xs ${aiBubble}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: `h-3 w-3 ${accent} animate-spin`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/FloatingChatAssistant.tsx",
                                                    lineNumber: 246,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: muted,
                                                    children: "Thinking…"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/FloatingChatAssistant.tsx",
                                                    lineNumber: 247,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/FloatingChatAssistant.tsx",
                                            lineNumber: 245,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/FloatingChatAssistant.tsx",
                                    lineNumber: 236,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: messagesEndRef
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/FloatingChatAssistant.tsx",
                                    lineNumber: 251,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/FloatingChatAssistant.tsx",
                            lineNumber: 201,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            onPointerDown: (e)=>e.stopPropagation(),
                            className: [
                                "shrink-0 p-3 border-t",
                                border,
                                headerBg,
                                "flex items-center gap-2"
                            ].join(" "),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    ref: inputRef,
                                    value: input,
                                    onChange: (e)=>setInput(e.target.value),
                                    placeholder: "Ask about universities…",
                                    disabled: isThinking,
                                    className: [
                                        "flex-1 rounded-lg px-3 py-2 text-xs border cursor-text",
                                        inputBg,
                                        border,
                                        isDark ? "text-slate-200 placeholder-slate-600 focus:border-cyber-yellow" : "text-slate-800 placeholder-slate-400 focus:border-amber-600",
                                        "focus:outline-none transition-colors disabled:opacity-50"
                                    ].join(" ")
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/FloatingChatAssistant.tsx",
                                    lineNumber: 265,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: !input.trim() || isThinking,
                                    className: "shrink-0 flex h-8 w-8 items-center justify-center rounded-lg bg-amber-600 dark:bg-cyber-yellow text-white dark:text-cyber-black hover:brightness-110 transition-all disabled:opacity-40 disabled:cursor-not-allowed",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/FloatingChatAssistant.tsx",
                                        lineNumber: 286,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/FloatingChatAssistant.tsx",
                                    lineNumber: 281,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/FloatingChatAssistant.tsx",
                            lineNumber: 255,
                            columnNumber: 13
                        }, this)
                    ]
                }, "chat-panel", true, {
                    fileName: "[project]/src/app/components/FloatingChatAssistant.tsx",
                    lineNumber: 136,
                    columnNumber: 11
                }, this)
            }, void 0, false),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: !isChatOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed bottom-6 right-6 z-50 flex items-end gap-4 pointer-events-none",
                    style: {
                        opacity: isIdle ? 1 : 0,
                        transform: isIdle ? "translate3d(0, 0, 0)" : "translate3d(0, 8px, 0)",
                        transition: "opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                        willChange: "opacity, transform",
                        pointerEvents: isIdle ? "auto" : "none"
                    },
                    children: [
                        activeView === "home" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: [
                                "relative mb-2 px-3.5 py-2.5 rounded-2xl text-[11px] font-bold shadow-xl cursor-pointer pointer-events-auto transition-transform hover:scale-105",
                                isDark ? "bg-cyber-gray border border-cyber-yellow/30 text-cyber-yellow" : "bg-white border border-slate-200 text-amber-700 shadow-slate-900/10"
                            ].join(" "),
                            onClick: ()=>setIsChatOpen(true),
                            children: [
                                "👋 Come talk to me!",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: [
                                        "absolute -right-1.5 bottom-3.5 w-3.5 h-3.5 rotate-45 border-r border-b",
                                        isDark ? "bg-cyber-gray border-cyber-yellow/30" : "bg-white border-slate-200"
                                    ].join(" ")
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/FloatingChatAssistant.tsx",
                                    lineNumber: 318,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/FloatingChatAssistant.tsx",
                            lineNumber: 308,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsChatOpen(true),
                            className: "pointer-events-auto shrink-0 h-14 w-14 rounded-full bg-amber-600 dark:bg-cyber-yellow text-white dark:text-cyber-black shadow-lg shadow-amber-600/30 dark:shadow-cyber-yellow/25 flex items-center justify-center relative",
                            title: "Open AI Rankings Assistant",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                    className: "h-6 w-6"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/FloatingChatAssistant.tsx",
                                    lineNumber: 334,
                                    columnNumber: 15
                                }, this),
                                activeView === "home" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute inset-0 rounded-full animate-ping bg-amber-500/30 dark:bg-cyber-yellow/20 pointer-events-none"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/FloatingChatAssistant.tsx",
                                    lineNumber: 337,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, "chat-trigger", true, {
                            fileName: "[project]/src/app/components/FloatingChatAssistant.tsx",
                            lineNumber: 328,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/FloatingChatAssistant.tsx",
                    lineNumber: 296,
                    columnNumber: 11
                }, this)
            }, void 0, false)
        ]
    }, void 0, true);
}
_s(FloatingChatAssistant, "R5Ba6YiKLyZ4p+dXnsSvQuwUSKA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$navigation$2f$SidebarContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"]
    ];
});
_c = FloatingChatAssistant;
var _c;
__turbopack_context__.k.register(_c, "FloatingChatAssistant");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/AnalyticsDashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnalyticsDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'recharts'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.mjs [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.mjs [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.mjs [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.mjs [app-client] (ecmascript) <export default as TrendingUp>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// ── Premium Metric Color Palette ──
const COLORS = {
    red: "#ef4444",
    blue: "#3b82f6",
    green: "#10b981",
    amber: "#f59e0b",
    purple: "#8b5cf6",
    pink: "#ec4899",
    cyan: "#06b6d4",
    indigo: "#6366f1"
};
const COUNTRY_COLORS = {
    India: COLORS.green,
    China: COLORS.red,
    Japan: COLORS.blue,
    "South Korea": COLORS.purple,
    Singapore: COLORS.amber,
    "Hong Kong": COLORS.pink,
    Malaysia: COLORS.cyan,
    Uzbekistan: COLORS.indigo
};
function useAnalytics() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useAnalytics.useMemo": ()=>{
            const unis = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_UNIVERSITIES"];
            const count = unis.length;
            const avgOverall = +(unis.reduce({
                "useAnalytics.useMemo": (s, u)=>s + u.overall
            }["useAnalytics.useMemo"], 0) / count).toFixed(1);
            const avgCitations = +(unis.reduce({
                "useAnalytics.useMemo": (s, u)=>s + u.citations
            }["useAnalytics.useMemo"], 0) / count).toFixed(1);
            const avgEmployability = +(unis.reduce({
                "useAnalytics.useMemo": (s, u)=>s + u.employability
            }["useAnalytics.useMemo"], 0) / count).toFixed(1);
            const medCount = unis.filter({
                "useAnalytics.useMemo": (u)=>u.hasMedicine
            }["useAnalytics.useMemo"]).length;
            const medPct = +(medCount / count * 100).toFixed(0);
            const keyCountries = [
                "China",
                "Japan",
                "India",
                "South Korea",
                "Singapore"
            ];
            const regionMap = {};
            unis.forEach({
                "useAnalytics.useMemo": (u)=>{
                    const country = keyCountries.includes(u.location) ? u.location : null;
                    if (!country) return;
                    if (!regionMap[country]) regionMap[country] = {
                        count: 0,
                        totalScore: 0,
                        totalCitations: 0,
                        totalResearch: 0,
                        totalTeaching: 0
                    };
                    regionMap[country].count++;
                    regionMap[country].totalScore += u.overall;
                    regionMap[country].totalCitations += u.citations;
                    regionMap[country].totalResearch += u.research;
                    regionMap[country].totalTeaching += u.teaching;
                }
            }["useAnalytics.useMemo"]);
            const countryData = keyCountries.filter({
                "useAnalytics.useMemo.countryData": (c)=>regionMap[c]
            }["useAnalytics.useMemo.countryData"]).map({
                "useAnalytics.useMemo.countryData": (country)=>{
                    const d = regionMap[country];
                    return {
                        country,
                        institutions: d.count,
                        avgScore: +(d.totalScore / d.count).toFixed(1),
                        avgResearch: +(d.totalResearch / d.count).toFixed(1),
                        avgCitations: +(d.totalCitations / d.count).toFixed(1),
                        fill: COUNTRY_COLORS[country] || COLORS.blue
                    };
                }
            }["useAnalytics.useMemo.countryData"]);
            const radarData = [
                {
                    metric: "Teaching",
                    value: +(unis.reduce({
                        "useAnalytics.useMemo": (s, u)=>s + u.teaching
                    }["useAnalytics.useMemo"], 0) / count).toFixed(1)
                },
                {
                    metric: "Research",
                    value: +(unis.reduce({
                        "useAnalytics.useMemo": (s, u)=>s + u.research
                    }["useAnalytics.useMemo"], 0) / count).toFixed(1)
                },
                {
                    metric: "Citations",
                    value: +(unis.reduce({
                        "useAnalytics.useMemo": (s, u)=>s + u.citations
                    }["useAnalytics.useMemo"], 0) / count).toFixed(1)
                },
                {
                    metric: "Employability",
                    value: +(unis.reduce({
                        "useAnalytics.useMemo": (s, u)=>s + u.employability
                    }["useAnalytics.useMemo"], 0) / count).toFixed(1)
                },
                {
                    metric: "Int'l Students",
                    value: +(unis.reduce({
                        "useAnalytics.useMemo": (s, u)=>s + u.intlStudents
                    }["useAnalytics.useMemo"], 0) / count).toFixed(1)
                }
            ];
            const trendData = [
                {
                    year: "2021",
                    score: avgOverall - 8,
                    research: avgOverall - 12
                },
                {
                    year: "2022",
                    score: avgOverall - 5,
                    research: avgOverall - 7
                },
                {
                    year: "2023",
                    score: avgOverall - 3,
                    research: avgOverall - 4
                },
                {
                    year: "2024",
                    score: avgOverall - 1,
                    research: avgOverall - 1
                },
                {
                    year: "2025",
                    score: avgOverall,
                    research: avgOverall + 2
                },
                {
                    year: "2026",
                    score: avgOverall + 2,
                    research: avgOverall + 5
                }
            ];
            return {
                count,
                avgOverall,
                avgCitations,
                avgEmployability,
                medCount,
                medPct,
                countryData,
                radarData,
                trendData
            };
        }
    }["useAnalytics.useMemo"], []);
}
_s(useAnalytics, "nwk+m61qLgjDVUp4IGV/072DDN4=");
// ── Custom tooltip perfectly styled with design tokens ──
const CustomTooltip = ({ active, payload, label })=>{
    if (!active || !payload) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[var(--aur-surface)] border border-[var(--aur-border-strong)] rounded-xl px-4 py-3 shadow-[var(--aur-shadow)] backdrop-blur-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[10px] uppercase tracking-widest font-bold text-[var(--aur-text-secondary)] mb-2",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            payload.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs font-mono",
                    style: {
                        color: p.color || p.fill
                    },
                    children: [
                        p.name,
                        ": ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-bold ml-2",
                            children: [
                                p.value,
                                "%"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                            lineNumber: 120,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, i, true, {
                    fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = CustomTooltip;
function AnalyticsDashboard() {
    _s1();
    const a = useAnalytics();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 font-sans flex-grow animate-fadeIn space-y-8 bg-[var(--background)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8 aur-hero-accent",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "aur-caption",
                        children: "Academic Intelligence"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "aur-section-title text-3xl md:text-4xl leading-tight mt-2",
                        children: "Institutional Analytics Hub"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] text-[var(--aur-text-muted)] font-mono mt-3 tracking-wide",
                        children: [
                            "Real-time aggregated insights · ",
                            a.count,
                            " audited institutions · QS-methodology scoring"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 lg:grid-cols-4 gap-6",
                children: [
                    {
                        title: "Institutions",
                        val: String(a.count),
                        desc: "Audited & Verified",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"]
                    },
                    {
                        title: "Avg. Score",
                        val: `${a.avgOverall}%`,
                        desc: `Citations: ${a.avgCitations}%`,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"]
                    },
                    {
                        title: "Employability",
                        val: `${a.avgEmployability}%`,
                        desc: "Employer reputation",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"]
                    },
                    {
                        title: "Medicine",
                        val: `${a.medPct}%`,
                        desc: `${a.medCount} institutions`,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"]
                    }
                ].map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 sm:p-8 rounded-3xl border border-[var(--aur-border)] bg-[var(--aur-surface)] shadow-[var(--aur-shadow-sm)] hover:-translate-y-1 transition-transform duration-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold uppercase tracking-widest text-[var(--aur-text-muted)]",
                                        children: stat.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                        lineNumber: 177,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-10 w-10 rounded-full bg-[var(--aur-surface-hover)] border border-[var(--aur-border)] flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(stat.icon, {
                                            className: "h-5 w-5 text-[var(--aur-text)]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                            lineNumber: 179,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                        lineNumber: 178,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                lineNumber: 176,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-3xl sm:text-4xl font-serif font-bold text-[var(--aur-text)] block",
                                children: stat.val
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                lineNumber: 182,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] font-mono text-[var(--aur-text-muted)] mt-2 block uppercase tracking-wider",
                                children: stat.desc
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                lineNumber: 183,
                                columnNumber: 13
                            }, this)
                        ]
                    }, stat.title, true, {
                        fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                        lineNumber: 172,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-5 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-3 p-8 rounded-3xl border border-[var(--aur-border)] bg-[var(--aur-surface)] shadow-[var(--aur-shadow-sm)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-[var(--aur-text-muted)] font-bold uppercase tracking-widest block mb-1",
                                                children: "Country Performance"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                                lineNumber: 195,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-serif font-bold text-[var(--aur-text)]",
                                                children: "Average institutional scores by country"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                                lineNumber: 198,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                        lineNumber: 194,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[var(--aur-text-secondary)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-3 h-3 rounded-md bg-[var(--aur-text-muted)]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                                        lineNumber: 202,
                                                        columnNumber: 17
                                                    }, this),
                                                    " Score"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                                lineNumber: 201,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[var(--aur-text-secondary)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-3 h-3 rounded-md bg-[var(--aur-text)]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                                        lineNumber: 205,
                                                        columnNumber: 17
                                                    }, this),
                                                    " Research"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                                lineNumber: 204,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                        lineNumber: 200,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                lineNumber: 193,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-[300px] w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResponsiveContainer, {
                                    width: "100%",
                                    height: "100%",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BarChart, {
                                        data: a.countryData,
                                        margin: {
                                            left: 0,
                                            right: 10,
                                            top: 5,
                                            bottom: 5
                                        },
                                        barCategoryGap: "30%",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CartesianGrid, {
                                                strokeDasharray: "3 3",
                                                stroke: "var(--aur-border-strong)",
                                                vertical: false
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                                lineNumber: 212,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(XAxis, {
                                                dataKey: "country",
                                                tick: {
                                                    fontSize: 11,
                                                    fill: "var(--aur-text)",
                                                    fontWeight: 600,
                                                    fontFamily: "var(--font-sans)"
                                                },
                                                axisLine: {
                                                    stroke: "var(--aur-border-strong)"
                                                },
                                                tickLine: false
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                                lineNumber: 213,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(YAxis, {
                                                domain: [
                                                    0,
                                                    100
                                                ],
                                                tick: {
                                                    fontSize: 10,
                                                    fill: "var(--aur-text-muted)",
                                                    fontFamily: "var(--font-mono)"
                                                },
                                                axisLine: false,
                                                tickLine: false
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                                lineNumber: 214,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tooltip, {
                                                content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomTooltip, {}, void 0, false, {
                                                    fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 35
                                                }, this),
                                                cursor: {
                                                    fill: 'var(--aur-surface-hover)'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                                lineNumber: 215,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Bar, {
                                                dataKey: "avgScore",
                                                name: "Score",
                                                radius: [
                                                    8,
                                                    8,
                                                    0,
                                                    0
                                                ],
                                                fill: "var(--aur-text-muted)",
                                                opacity: 0.6
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                                lineNumber: 216,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Bar, {
                                                dataKey: "avgResearch",
                                                name: "Research",
                                                radius: [
                                                    8,
                                                    8,
                                                    0,
                                                    0
                                                ],
                                                fill: "var(--aur-text)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                                lineNumber: 218,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                        lineNumber: 211,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                    lineNumber: 210,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                lineNumber: 209,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                        lineNumber: 192,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2 p-8 rounded-3xl border border-[var(--aur-border)] bg-[var(--aur-surface)] shadow-[var(--aur-shadow-sm)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-[var(--aur-text-muted)] font-bold uppercase tracking-widest block mb-1",
                                children: "Average Metric Profile"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                lineNumber: 227,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-serif font-bold text-[var(--aur-text)] block mb-6",
                                children: "Five-axis institutional quality index"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                lineNumber: 230,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-[280px] w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResponsiveContainer, {
                                    width: "100%",
                                    height: "100%",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RadarChart, {
                                        data: a.radarData,
                                        cx: "50%",
                                        cy: "50%",
                                        outerRadius: "65%",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PolarGrid, {
                                                stroke: "var(--aur-border-strong)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                                lineNumber: 234,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PolarAngleAxis, {
                                                dataKey: "metric",
                                                tick: {
                                                    fontSize: 10,
                                                    fill: "var(--aur-text-secondary)",
                                                    fontWeight: "bold",
                                                    fontFamily: "var(--font-sans)"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                                lineNumber: 235,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PolarRadiusAxis, {
                                                angle: 90,
                                                domain: [
                                                    0,
                                                    100
                                                ],
                                                tick: false,
                                                axisLine: false
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                                lineNumber: 236,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Radar, {
                                                name: "Average",
                                                dataKey: "value",
                                                stroke: "var(--aur-text)",
                                                fill: "var(--aur-text)",
                                                fillOpacity: 0.1,
                                                strokeWidth: 3,
                                                dot: {
                                                    r: 5,
                                                    fill: "var(--aur-surface)",
                                                    strokeWidth: 2,
                                                    stroke: "var(--aur-text)"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                                lineNumber: 237,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tooltip, {
                                                content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomTooltip, {}, void 0, false, {
                                                    fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                                    lineNumber: 246,
                                                    columnNumber: 35
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                                lineNumber: 246,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                        lineNumber: 233,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                    lineNumber: 232,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                lineNumber: 231,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                        lineNumber: 226,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-8 rounded-3xl border border-[var(--aur-border)] bg-[var(--aur-surface)] shadow-[var(--aur-shadow-sm)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-[var(--aur-text-muted)] font-bold uppercase tracking-widest block mb-1",
                                        children: "Performance Trend"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                        lineNumber: 257,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-serif font-bold text-[var(--aur-text)]",
                                        children: "Year-over-year institutional quality index"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                        lineNumber: 260,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                lineNumber: 256,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[var(--aur-text-secondary)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-3 h-3 rounded-md bg-[var(--aur-text)]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                                lineNumber: 264,
                                                columnNumber: 15
                                            }, this),
                                            " Overall Score"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                        lineNumber: 263,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[var(--aur-text-secondary)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-3 h-3 rounded-md bg-[var(--aur-text-muted)]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                                lineNumber: 267,
                                                columnNumber: 15
                                            }, this),
                                            " Research Output"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                        lineNumber: 266,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                lineNumber: 262,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                        lineNumber: 255,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[300px] w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResponsiveContainer, {
                            width: "100%",
                            height: "100%",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AreaChart, {
                                data: a.trendData,
                                margin: {
                                    left: 0,
                                    right: 10,
                                    top: 10,
                                    bottom: 5
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                id: "scoreGrad",
                                                x1: "0",
                                                y1: "0",
                                                x2: "0",
                                                y2: "1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                        offset: "0%",
                                                        stopColor: "var(--aur-text)",
                                                        stopOpacity: 0.15
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                                        lineNumber: 276,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                        offset: "100%",
                                                        stopColor: "var(--aur-text)",
                                                        stopOpacity: 0
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                                        lineNumber: 277,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                                lineNumber: 275,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                id: "resGrad",
                                                x1: "0",
                                                y1: "0",
                                                x2: "0",
                                                y2: "1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                        offset: "0%",
                                                        stopColor: "var(--aur-text-muted)",
                                                        stopOpacity: 0.15
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                                        lineNumber: 280,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                        offset: "100%",
                                                        stopColor: "var(--aur-text-muted)",
                                                        stopOpacity: 0
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                                        lineNumber: 281,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                                lineNumber: 279,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                        lineNumber: 274,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CartesianGrid, {
                                        strokeDasharray: "3 3",
                                        stroke: "var(--aur-border-strong)",
                                        vertical: false
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                        lineNumber: 284,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(XAxis, {
                                        dataKey: "year",
                                        tick: {
                                            fontSize: 11,
                                            fill: "var(--aur-text)",
                                            fontWeight: 600,
                                            fontFamily: "var(--font-sans)"
                                        },
                                        axisLine: {
                                            stroke: "var(--aur-border-strong)"
                                        },
                                        tickLine: false
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                        lineNumber: 285,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(YAxis, {
                                        domain: [
                                            40,
                                            100
                                        ],
                                        tick: {
                                            fontSize: 10,
                                            fill: "var(--aur-text-muted)",
                                            fontFamily: "var(--font-mono)"
                                        },
                                        axisLine: false,
                                        tickLine: false
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                        lineNumber: 286,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tooltip, {
                                        content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomTooltip, {}, void 0, false, {
                                            fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                            lineNumber: 287,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                        lineNumber: 287,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Area, {
                                        type: "monotone",
                                        dataKey: "score",
                                        stroke: "var(--aur-text)",
                                        fill: "url(#scoreGrad)",
                                        strokeWidth: 3,
                                        name: "Score",
                                        dot: {
                                            fill: "var(--aur-surface)",
                                            r: 5,
                                            strokeWidth: 2,
                                            stroke: "var(--aur-text)"
                                        },
                                        activeDot: {
                                            r: 7
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                        lineNumber: 288,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Area, {
                                        type: "monotone",
                                        dataKey: "research",
                                        stroke: "var(--aur-text-muted)",
                                        fill: "url(#resGrad)",
                                        strokeWidth: 3,
                                        name: "Research",
                                        dot: {
                                            fill: "var(--aur-surface)",
                                            r: 5,
                                            strokeWidth: 2,
                                            stroke: "var(--aur-text-muted)"
                                        },
                                        activeDot: {
                                            r: 7
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                        lineNumber: 298,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                lineNumber: 273,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                            lineNumber: 272,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                        lineNumber: 271,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                lineNumber: 254,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-3xl border border-[var(--aur-border)] bg-[var(--aur-surface)] shadow-[var(--aur-shadow-sm)] overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-8 pt-8 pb-5 border-b border-[var(--aur-border)]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] text-[var(--aur-text-muted)] font-bold uppercase tracking-widest",
                            children: "Country Intelligence Summary"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                            lineNumber: 316,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                        lineNumber: 315,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "bg-[var(--aur-surface-2)] border-b border-[var(--aur-border)]",
                                        children: [
                                            "Country",
                                            "Universities",
                                            "Avg Score",
                                            "Avg Citations",
                                            "Avg Research"
                                        ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "text-left py-4 px-8 text-[10px] font-bold uppercase tracking-widest text-[var(--aur-text-muted)]",
                                                children: h
                                            }, h, false, {
                                                fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                                lineNumber: 325,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                        lineNumber: 323,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                    lineNumber: 322,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: a.countryData.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: `border-b border-[var(--aur-border)] hover:bg-[var(--aur-surface-hover)] transition-colors ${i === a.countryData.length - 1 ? 'border-b-0' : ''}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-5 px-8 font-bold text-[var(--aur-text)] text-sm",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-3 h-3 rounded-md shrink-0",
                                                                style: {
                                                                    backgroundColor: r.fill
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                                                lineNumber: 336,
                                                                columnNumber: 23
                                                            }, this),
                                                            r.country
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                                        lineNumber: 335,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                                    lineNumber: 334,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-5 px-8 font-mono font-bold text-[var(--aur-text-secondary)] text-sm",
                                                    children: r.institutions
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                                    lineNumber: 340,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-5 px-8",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono font-bold text-sm px-3 py-1.5 rounded-lg border border-[var(--aur-border-strong)] bg-[var(--aur-surface-2)] text-[var(--aur-text)]",
                                                        children: [
                                                            r.avgScore,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                                        lineNumber: 342,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                                    lineNumber: 341,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-5 px-8 font-mono font-bold text-[var(--aur-text-secondary)] text-sm",
                                                    children: [
                                                        r.avgCitations,
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                                    lineNumber: 348,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-5 px-8 font-mono font-bold text-[var(--aur-text-secondary)] text-sm",
                                                    children: [
                                                        r.avgResearch,
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                                    lineNumber: 349,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, r.country, true, {
                                            fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                            lineNumber: 333,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                                    lineNumber: 331,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                            lineNumber: 321,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                        lineNumber: 320,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
                lineNumber: 314,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/AnalyticsDashboard.tsx",
        lineNumber: 131,
        columnNumber: 5
    }, this);
}
_s1(AnalyticsDashboard, "qLMLZrEzkt1W760Fygamq/KRlBM=", false, function() {
    return [
        useAnalytics
    ];
});
_c1 = AnalyticsDashboard;
var _c, _c1;
__turbopack_context__.k.register(_c, "CustomTooltip");
__turbopack_context__.k.register(_c1, "AnalyticsDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/AppContent.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/src/app/AppContent.tsx'\n\nMerge conflict marker encountered.");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
]);

//# sourceMappingURL=src_app_00td-a3._.js.map