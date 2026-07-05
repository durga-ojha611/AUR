module.exports = [
"[project]/src/app/components/navigation/SidebarContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SidebarProvider",
    ()=>SidebarProvider,
    "useSidebar",
    ()=>useSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const initialFilters = {
    country: "",
    qsRange: [
        1,
        50
    ],
    tuitionRange: [
        0,
        25000
    ],
    isPublic: null,
    subjects: [],
    scholarshipOnly: false,
    searchQuery: ""
};
const SidebarContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const SidebarProvider = ({ children })=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    // Active view sync from URL
    const activeView = searchParams.get("view") || "home";
    const selectedUniId = searchParams.get("id");
    // State initialization
    const [isCollapsed, setIsCollapsedState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileOpen, setIsMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("light");
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialFilters);
    // Read localStorage for isCollapsed and theme (safe for SSR)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, []);
    // Write collapse state to localStorage
    const setIsCollapsed = (val)=>{
        setIsCollapsedState(val);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    };
    // Toggle theme and update localStorage & DOM root class
    const toggleTheme = ()=>{
        const nextTheme = theme === "dark" ? "light" : "dark";
        setTheme(nextTheme);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    };
    // Sync theme status on HTML document class
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, [
        theme
    ]);
    // Synchronize initial URL search query if exists
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const q = searchParams.get("search");
        if (q) {
            setFilters((prev)=>({
                    ...prev,
                    searchQuery: q
                }));
        }
    }, [
        searchParams
    ]);
    // View changing routing helper
    const handleViewChange = (view)=>{
        const current = new URLSearchParams(Array.from(searchParams.entries()));
        current.set("view", view);
        if (view !== "profile") {
            current.delete("id");
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
    // Reset filters helper
    const clearFilters = ()=>{
        setFilters({
            ...initialFilters,
            // Retain the query unless it was cleared
            searchQuery: ""
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarContext.Provider, {
        value: {
            isCollapsed,
            setIsCollapsed,
            isMobileOpen,
            setIsMobileOpen,
            theme,
            toggleTheme,
            filters,
            setFilters,
            clearFilters,
            activeView,
            handleViewChange,
            selectedUniId,
            setSelectedUniId
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/components/navigation/SidebarContext.tsx",
        lineNumber: 145,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const useSidebar = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(SidebarContext);
    if (context === undefined) {
        throw new Error("useSidebar must be used within a SidebarProvider");
    }
    return context;
};
}),
"[project]/src/app/components/feedback/ToastContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToastProvider",
    ()=>ToastProvider,
    "useToast",
    ()=>useToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.mjs [app-ssr] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-ssr] (ecmascript) <export default as AlertTriangle>");
"use client";
;
;
;
;
const ToastContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const variantStyles = {
    info: {
        border: "border-slate-900 dark:border-cyber-yellow/30",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"],
        iconClass: "text-slate-600 dark:text-cyber-yellow"
    },
    success: {
        border: "border-emerald-700/40 dark:border-emerald-500/40",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"],
        iconClass: "text-emerald-700 dark:text-emerald-400"
    },
    warning: {
        border: "border-amber-700/50 dark:border-cyber-yellow/40",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
        iconClass: "text-amber-700 dark:text-cyber-yellow"
    }
};
function ToastProvider({ children }) {
    const [toasts, setToasts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const showToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((message, variant = "info")=>{
        const id = typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : String(Date.now() + Math.random());
        setToasts((prev)=>[
                ...prev,
                {
                    id,
                    message,
                    variant
                }
            ]);
        window.setTimeout(()=>{
            setToasts((prev)=>prev.filter((t)=>t.id !== id));
        }, 4200);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToastContext.Provider, {
        value: {
            showToast
        },
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none fixed bottom-24 right-4 z-[60] flex w-full max-w-sm flex-col gap-2 md:bottom-6",
                "aria-live": "polite",
                "aria-relevant": "additions",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    children: toasts.map((toast)=>{
                        const style = variantStyles[toast.variant];
                        const Icon = style.icon;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            role: "status",
                            initial: {
                                opacity: 0,
                                y: 12,
                                scale: 0.98
                            },
                            animate: {
                                opacity: 1,
                                y: 0,
                                scale: 1
                            },
                            exit: {
                                opacity: 0,
                                x: 24,
                                scale: 0.98
                            },
                            transition: {
                                duration: 0.2
                            },
                            className: `pointer-events-auto flex items-start gap-3 border bg-white px-4 py-3 text-xs font-medium text-slate-800 shadow-xl dark:bg-cyber-gray dark:text-slate-100 ${style.border}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: `h-4 w-4 shrink-0 mt-0.5 ${style.iconClass}`
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/feedback/ToastContext.tsx",
                                    lineNumber: 78,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                }, void 0, false, {
                    fileName: "[project]/src/app/components/feedback/ToastContext.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
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
function useToast() {
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ToastContext);
    if (!ctx) {
        throw new Error("useToast must be used within ToastProvider");
    }
    return ctx;
}
}),
"[project]/src/app/components/navigation/config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SIDEBAR_ITEMS",
    ()=>SIDEBAR_ITEMS,
    "TOP_NAV_LINKS",
    ()=>TOP_NAV_LINKS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.mjs [app-ssr] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.mjs [app-ssr] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.mjs [app-ssr] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.mjs [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.mjs [app-ssr] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bookmark.mjs [app-ssr] (ecmascript) <export default as Bookmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.mjs [app-ssr] (ecmascript) <export default as Settings>");
;
const SIDEBAR_ITEMS = [
    {
        id: "dashboard",
        label: "Dashboard",
        view: "home",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"]
    },
    {
        id: "universities",
        label: "Universities",
        view: "profile",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"]
    },
    {
        id: "rankings",
        label: "Rankings",
        view: "rankings",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"],
        badge: "Live"
    },
    {
        id: "countries",
        label: "Countries",
        view: "rankings",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"]
    },
    {
        id: "analytics",
        label: "Analytics",
        view: "analytics",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"]
    },
    {
        id: "saved",
        label: "Saved Items",
        view: "saved",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__["Bookmark"]
    },
    {
        id: "settings",
        label: "Settings",
        view: "settings",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"]
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
        label: "Institutional Analytics",
        view: "analytics"
    }
];
}),
"[project]/src/app/components/navbar/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.mjs [app-ssr] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.mjs [app-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.mjs [app-ssr] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.mjs [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.mjs [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.mjs [app-ssr] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$navigation$2f$SidebarContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/navigation/SidebarContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$feedback$2f$ToastContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/feedback/ToastContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$navigation$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/navigation/config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function Navbar() {
    const { showToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$feedback$2f$ToastContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const focusRing = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-cyber-yellow dark:focus-visible:ring-offset-cyber-black";
    const { theme, toggleTheme, isMobileOpen, setIsMobileOpen, activeView, handleViewChange, filters, setFilters } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$navigation$2f$SidebarContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSidebar"])();
    const [searchVal, setSearchVal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(filters.searchQuery);
    const [showProfileMenu, setShowProfileMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showNotifMenu, setShowNotifMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const profileRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const notifRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Sync internal search state with context searchQuery
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setSearchVal(filters.searchQuery);
    }, [
        filters.searchQuery
    ]);
    // Click outside menus to close
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function handleClickOutside(event) {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setShowProfileMenu(false);
            }
            if (notifRef.current && !notifRef.current.contains(event.target)) {
                setShowNotifMenu(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>document.removeEventListener("mousedown", handleClickOutside);
    }, []);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-40 w-full border-b border-slate-200/80 dark:border-cyber-border bg-white/90 dark:bg-cyber-dark/90 backdrop-blur-xl shadow-[0_1px_0_rgba(15,23,42,0.04)] dark:shadow-[0_1px_0_rgba(234,179,8,0.08)] transition-all duration-300",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-full px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-16 items-center justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>handleViewChange("home"),
                        className: "flex cursor-pointer items-center space-x-3 text-slate-900 dark:text-white shrink-0 group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-10 w-10 items-center justify-center border-2 border-slate-900 bg-slate-900 text-white font-serif text-xl font-bold dark:border-cyber-yellow dark:bg-transparent dark:text-cyber-yellow dark:shadow-[0_0_10px_rgba(234,179,8,0.2)] group-hover:scale-105 transition-transform duration-200",
                                children: "A"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden sm:block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "font-serif text-md font-bold leading-tight tracking-tight dark:font-sans dark:tracking-wider",
                                        children: [
                                            "ASIA UNIVERSITY",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-amber-700 dark:text-cyber-yellow font-sans text-xs font-semibold tracking-widest uppercase ml-0.5",
                                                children: "RANKINGS"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                lineNumber: 79,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[9px] uppercase tracking-widest text-slate-400 dark:text-slate-500 font-medium",
                                        children: "Futuristic Analytics Engine"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden md:flex space-x-1 h-full items-center",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$navigation$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TOP_NAV_LINKS"].map((link)=>{
                            const isActive = activeView === link.view;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleViewChange(link.view),
                                className: `relative px-4 py-2 text-[11px] font-bold uppercase tracking-wider transition-colors duration-200 rounded-md ${isActive ? "text-slate-900 dark:text-cyber-yellow" : "text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"}`,
                                children: [
                                    link.label,
                                    isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        layoutId: "activeTabUnderline",
                                        className: "absolute bottom-0 left-0 right-0 h-0.5 bg-amber-700 dark:bg-cyber-yellow",
                                        transition: {
                                            type: "spring",
                                            stiffness: 380,
                                            damping: 30
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                        lineNumber: 105,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, link.label, true, {
                                fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                lineNumber: 94,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSearchSubmit,
                        className: "flex-grow max-w-md hidden md:block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: searchVal,
                                    onChange: handleSearchChange,
                                    placeholder: "Search across index...",
                                    className: "w-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-cyber-gray/50 px-4 py-1.5 pl-10 rounded-full text-xs text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-slate-800 dark:focus:border-cyber-yellow transition-all duration-200"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                    lineNumber: 122,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    className: "absolute left-3.5 top-2 h-4 w-4 text-slate-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                    lineNumber: 129,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                            lineNumber: 121,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-2 sm:space-x-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: toggleTheme,
                                "aria-label": theme === "dark" ? "Switch to light theme" : "Switch to dark theme",
                                className: `p-2 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-cyber-yellow transition-colors hover:bg-slate-100 dark:hover:bg-cyber-gray rounded-full ${focusRing}`,
                                title: theme === "dark" ? "Light Editorial Theme" : "Dark Futuristic Theme",
                                children: theme === "dark" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                    lineNumber: 144,
                                    columnNumber: 35
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                    lineNumber: 144,
                                    columnNumber: 65
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                ref: notifRef,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setShowNotifMenu(!showNotifMenu),
                                        "aria-label": "Open notifications",
                                        className: `p-2 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-cyber-yellow transition-colors hover:bg-slate-100 dark:hover:bg-cyber-gray rounded-full relative ${focusRing}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                lineNumber: 155,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute top-1 right-1 flex h-2 w-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-600 dark:bg-cyber-yellow opacity-75"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "relative inline-flex rounded-full h-2 w-2 bg-amber-700 dark:bg-cyber-yellow-bright"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                lineNumber: 156,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                        children: showNotifMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                y: 10
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            exit: {
                                                opacity: 0,
                                                y: 10
                                            },
                                            className: "absolute right-0 mt-2.5 w-80 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-cyber-gray shadow-xl py-2 z-50 text-xs text-slate-700 dark:text-slate-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-4 py-2 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center font-bold",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-900 dark:text-white uppercase tracking-wider text-[10px]",
                                                            children: "Notifications"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                            lineNumber: 171,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] text-amber-700 dark:text-cyber-yellow",
                                                            children: "3 New"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                            lineNumber: 174,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                    ].map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `p-3 border-b border-slate-50 dark:border-slate-800/50 hover:bg-slate-50 dark:hover:bg-cyber-dark/40 transition-colors ${n.isNew ? "bg-amber-50/20 dark:bg-cyber-yellow/5" : ""}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between font-semibold text-slate-900 dark:text-white",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: n.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                                            lineNumber: 207,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[9px] text-slate-400 font-normal",
                                                                            children: n.time
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                                            lineNumber: 208,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                                    lineNumber: 206,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 leading-normal",
                                                                    children: n.desc
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                                    lineNumber: 210,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, n.id, true, {
                                                            fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                            lineNumber: 164,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                        lineNumber: 162,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                lineNumber: 148,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative border-l border-slate-200 dark:border-slate-800 pl-3",
                                ref: profileRef,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setShowProfileMenu(!showProfileMenu),
                                        "aria-label": "Open profile menu",
                                        className: `flex items-center space-x-1.5 focus:outline-none group ${focusRing}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-8 w-8 rounded-full border border-slate-350 dark:border-cyber-yellow bg-slate-900 flex items-center justify-center text-white text-xs font-bold overflow-hidden shadow-sm dark:shadow-[0_0_8px_rgba(234,179,8,0.1)]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full h-full flex items-center justify-center bg-gradient-to-tr from-slate-950 to-slate-800 text-cyber-yellow font-bold text-xs uppercase",
                                                    children: "US"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                lineNumber: 229,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                className: "h-3 w-3 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-cyber-yellow transition-colors"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                lineNumber: 235,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                        lineNumber: 223,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                        children: showProfileMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                y: 10
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            exit: {
                                                opacity: 0,
                                                y: 10
                                            },
                                            className: "absolute right-0 mt-2.5 w-48 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-cyber-gray shadow-xl py-1.5 z-50 text-xs text-slate-700 dark:text-slate-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-4 py-2 border-b border-slate-100 dark:border-slate-800",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "block font-bold text-slate-900 dark:text-white",
                                                            children: "Dr. John Doe"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                            lineNumber: 247,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "block text-[10px] text-slate-400 dark:text-slate-500",
                                                            children: "j.doe@university.edu"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                            lineNumber: 248,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                    lineNumber: 246,
                                                    columnNumber: 21
                                                }, this),
                                                [
                                                    {
                                                        label: "My Profile",
                                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
                                                        action: ()=>{}
                                                    },
                                                    {
                                                        label: "Admin Console",
                                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
                                                        action: ()=>{}
                                                    }
                                                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            item.action();
                                                            setShowProfileMenu(false);
                                                        },
                                                        className: "w-full text-left px-4 py-2 hover:bg-slate-50 dark:hover:bg-cyber-dark/40 flex items-center space-x-2 transition-colors",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                                className: "h-3.5 w-3.5 text-slate-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                                lineNumber: 265,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: item.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                                lineNumber: 266,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, item.label, true, {
                                                        fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                        lineNumber: 257,
                                                        columnNumber: 23
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border-t border-slate-100 dark:border-slate-800 my-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                    lineNumber: 270,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        showToast("Signing out of your session…", "info");
                                                        setShowProfileMenu(false);
                                                    },
                                                    className: "w-full text-left px-4 py-2 hover:bg-red-50 dark:hover:bg-red-950/20 text-red-600 dark:text-red-400 flex items-center space-x-2 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                            className: "h-3.5 w-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                            lineNumber: 279,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold",
                                                            children: "Sign Out"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                            lineNumber: 280,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                                    lineNumber: 272,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                            lineNumber: 240,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                        lineNumber: 238,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                lineNumber: 222,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setIsMobileOpen(!isMobileOpen),
                                "aria-label": isMobileOpen ? "Close menu" : "Open menu",
                                className: `p-2 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-cyber-yellow transition-colors hover:bg-slate-100 dark:hover:bg-cyber-gray rounded-md md:hidden ${focusRing}`,
                                children: isMobileOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                    lineNumber: 294,
                                    columnNumber: 31
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                    lineNumber: 294,
                                    columnNumber: 59
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                                lineNumber: 288,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                        lineNumber: 134,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/navbar/Navbar.tsx",
                lineNumber: 66,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/navbar/Navbar.tsx",
            lineNumber: 65,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/navbar/Navbar.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
        hasScholarship: true
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
        hasScholarship: true
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
        hasScholarship: true
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
        hasScholarship: true
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
        hasMedicine: true
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
        hasMedicine: true
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
        hasMedicine: true
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
        hasMedicine: true
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
        contentSummary: "For-hire rankings often mask true career outcomes. A breakdown of why student recruitment teams must pivot to customized metrics and how to utilize client-side custom weights to guide university advisory.",
        image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=600&q=80"
    }
];
}),
"[project]/src/app/components/filters/FilterPanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FilterPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.mjs [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.mjs [app-ssr] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.mjs [app-ssr] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$navigation$2f$SidebarContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/navigation/SidebarContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data.ts [app-ssr] (ecmascript)");
"use client";
;
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
    const { filters, setFilters, clearFilters, theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$navigation$2f$SidebarContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSidebar"])();
    // Extract unique locations dynamically
    const countries = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        return Array.from(new Set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOCK_UNIVERSITIES"].map((u)=>u.location))).sort();
    }, []);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-3b8e5d2970aa58b9" + " " + "w-full flex flex-col space-y-6 font-sans text-xs",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-3b8e5d2970aa58b9" + " " + "sticky top-0 z-10 flex items-center justify-between pb-3 border-b border-slate-200 dark:border-cyber-border bg-white/95 dark:bg-cyber-dark/95 backdrop-blur-md transition-colors duration-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-3b8e5d2970aa58b9" + " " + "flex items-center space-x-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                className: "h-4 w-4 text-slate-700 dark:text-cyber-yellow"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-3b8e5d2970aa58b9" + " " + "font-bold uppercase tracking-wider text-slate-900 dark:text-white",
                                children: "Target Filters"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: clearFilters,
                        className: "jsx-3b8e5d2970aa58b9" + " " + "flex items-center text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-cyber-yellow transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                className: "h-3 w-3 mr-1"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            "Clear"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-3b8e5d2970aa58b9" + " " + "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "jsx-3b8e5d2970aa58b9" + " " + "block text-[10px] uppercase font-bold tracking-widest text-slate-400 dark:text-slate-500",
                        children: "Institution Search"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-3b8e5d2970aa58b9" + " " + "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: filters.searchQuery,
                                onChange: handleSearchChange,
                                placeholder: "Search name or location...",
                                className: "jsx-3b8e5d2970aa58b9" + " " + "w-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-cyber-gray px-3 py-2 pl-9 rounded text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-slate-800 dark:focus:border-cyber-yellow transition-all duration-200"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-3b8e5d2970aa58b9" + " " + "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "jsx-3b8e5d2970aa58b9" + " " + "block text-[10px] uppercase font-bold tracking-widest text-slate-400 dark:text-slate-500",
                        children: "Country / Territory"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-3b8e5d2970aa58b9" + " " + "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: filters.country,
                                onChange: (e)=>setFilters((prev)=>({
                                            ...prev,
                                            country: e.target.value
                                        })),
                                className: "jsx-3b8e5d2970aa58b9" + " " + "w-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-cyber-gray px-3 py-2 pl-9 rounded text-slate-800 dark:text-slate-100 focus:outline-none focus:border-slate-800 dark:focus:border-cyber-yellow transition-all duration-200 appearance-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        className: "jsx-3b8e5d2970aa58b9",
                                        children: "All Locations"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this),
                                    countries.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: c,
                                            className: "jsx-3b8e5d2970aa58b9",
                                            children: c
                                        }, c, false, {
                                            fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                            lineNumber: 106,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                className: "absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-3b8e5d2970aa58b9" + " " + "absolute right-3 top-3 pointer-events-none border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-400 dark:border-t-slate-500 w-0 h-0"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-3b8e5d2970aa58b9" + " " + "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-3b8e5d2970aa58b9" + " " + "flex justify-between items-baseline",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "jsx-3b8e5d2970aa58b9" + " " + "block text-[10px] uppercase font-bold tracking-widest text-slate-400 dark:text-slate-500",
                                children: "Calculated Rank"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-3b8e5d2970aa58b9" + " " + "font-mono text-[10px] font-bold text-slate-700 dark:text-cyber-yellow-bright",
                                children: [
                                    "#",
                                    filters.qsRange[0],
                                    " - #",
                                    filters.qsRange[1]
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-3b8e5d2970aa58b9" + " " + "relative h-6 mt-1 flex items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-3b8e5d2970aa58b9" + " " + "relative w-full h-1 bg-slate-200 dark:bg-slate-800 rounded",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        left: `${(filters.qsRange[0] - 1) / 49 * 100}%`,
                                        right: `${100 - (filters.qsRange[1] - 1) / 49 * 100}%`
                                    },
                                    className: "jsx-3b8e5d2970aa58b9" + " " + "absolute h-full bg-slate-800 dark:bg-cyber-yellow rounded"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                    lineNumber: 137,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "range",
                                    min: "1",
                                    max: "50",
                                    value: filters.qsRange[1],
                                    onChange: handleRankMaxChange,
                                    className: "jsx-3b8e5d2970aa58b9" + " " + "absolute pointer-events-none appearance-none w-full h-1 bg-transparent top-0 left-0 accent-slate-900 dark:accent-cyber-yellow"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-3b8e5d2970aa58b9" + " " + "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-3b8e5d2970aa58b9" + " " + "flex justify-between items-baseline",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "jsx-3b8e5d2970aa58b9" + " " + "block text-[10px] uppercase font-bold tracking-widest text-slate-400 dark:text-slate-500",
                                children: "Tuition / Year (USD)"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-3b8e5d2970aa58b9" + " " + "font-mono text-[10px] font-bold text-slate-700 dark:text-cyber-yellow-bright",
                                children: [
                                    "$",
                                    filters.tuitionRange[0].toLocaleString(),
                                    " - $",
                                    filters.tuitionRange[1].toLocaleString()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-3b8e5d2970aa58b9" + " " + "relative h-6 mt-1 flex items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-3b8e5d2970aa58b9" + " " + "relative w-full h-1 bg-slate-200 dark:bg-slate-800 rounded",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        left: `${filters.tuitionRange[0] / 25000 * 100}%`,
                                        right: `${100 - filters.tuitionRange[1] / 25000 * 100}%`
                                    },
                                    className: "jsx-3b8e5d2970aa58b9" + " " + "absolute h-full bg-slate-800 dark:bg-cyber-yellow rounded"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                    lineNumber: 173,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                    lineNumber: 180,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "range",
                                    min: "0",
                                    max: "25000",
                                    step: "500",
                                    value: filters.tuitionRange[1],
                                    onChange: handleTuitionMaxChange,
                                    className: "jsx-3b8e5d2970aa58b9" + " " + "absolute pointer-events-none appearance-none w-full h-1 bg-transparent top-0 left-0 accent-slate-900 dark:accent-cyber-yellow"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                            lineNumber: 171,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-3b8e5d2970aa58b9" + " " + "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "jsx-3b8e5d2970aa58b9" + " " + "block text-[10px] uppercase font-bold tracking-widest text-slate-400 dark:text-slate-500",
                        children: "Institution Type"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                        lineNumber: 207,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setFilters((prev)=>({
                                            ...prev,
                                            isPublic: typeItem.value
                                        })),
                                className: "jsx-3b8e5d2970aa58b9" + " " + `py-1.5 text-[10px] font-bold rounded uppercase tracking-wider transition-all duration-150 ${isSelected ? "bg-white text-slate-900 shadow-sm border border-slate-200 dark:border-transparent dark:bg-cyber-yellow dark:text-cyber-black" : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white"}`,
                                children: typeItem.label
                            }, typeItem.label, false, {
                                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                lineNumber: 218,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                        lineNumber: 210,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                lineNumber: 206,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-3b8e5d2970aa58b9" + " " + "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "jsx-3b8e5d2970aa58b9" + " " + "block text-[10px] uppercase font-bold tracking-widest text-slate-400 dark:text-slate-500 font-sans",
                        children: "Course Subjects"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                        lineNumber: 237,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-3b8e5d2970aa58b9" + " " + "flex flex-wrap gap-1",
                        children: ALL_SUBJECTS.map((subject)=>{
                            const isSelected = filters.subjects.includes(subject);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>toggleSubject(subject),
                                className: "jsx-3b8e5d2970aa58b9" + " " + `px-2 py-1 border rounded-full text-[10px] font-medium transition-all duration-150 ${isSelected ? "bg-slate-900 border-slate-900 text-white dark:bg-cyber-yellow dark:border-cyber-yellow dark:text-cyber-black font-bold" : "bg-transparent border-slate-200 text-slate-600 hover:border-slate-400 dark:border-slate-800 dark:text-slate-400 dark:hover:border-cyber-yellow"}`,
                                children: subject
                            }, subject, false, {
                                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                lineNumber: 244,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                        lineNumber: 240,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                lineNumber: 236,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-3b8e5d2970aa58b9" + " " + "pt-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    onClick: ()=>setFilters((prev)=>({
                                ...prev,
                                scholarshipOnly: !prev.scholarshipOnly
                            })),
                    className: "jsx-3b8e5d2970aa58b9" + " " + "flex items-center space-x-2.5 cursor-pointer select-none group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-3b8e5d2970aa58b9" + " " + `flex h-5 w-5 shrink-0 items-center justify-center border transition-all duration-150 rounded ${filters.scholarshipOnly ? "bg-slate-900 border-slate-900 dark:bg-cyber-yellow dark:border-cyber-yellow text-white dark:text-cyber-black" : "border-slate-300 group-hover:border-slate-400 dark:border-slate-800 dark:group-hover:border-cyber-yellow"}`,
                            children: filters.scholarshipOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                className: "h-3.5 w-3.5 stroke-[3]"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                lineNumber: 276,
                                columnNumber: 41
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                            lineNumber: 269,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-3b8e5d2970aa58b9",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-3b8e5d2970aa58b9" + " " + "block font-bold text-slate-800 dark:text-slate-200",
                                    children: "Scholarship Programs"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                    lineNumber: 279,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-3b8e5d2970aa58b9" + " " + "block text-[10px] text-slate-400 dark:text-slate-500",
                                    children: "Show institutions offering grants/waivers"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                                    lineNumber: 282,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                            lineNumber: 278,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                    lineNumber: 263,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
                lineNumber: 262,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "3b8e5d2970aa58b9",
                children: "input[type=range]::-webkit-slider-thumb{pointer-events:auto;cursor:pointer;-webkit-appearance:none;background:#0f172a;border:2px solid #fff;border-radius:50%;width:14px;height:14px;margin-top:-5px;transition:transform .1s;box-shadow:0 1px 3px #0000004d}html.dark input[type=range]::-webkit-slider-thumb{background:#eab308;border:2px solid #050506;box-shadow:0 0 10px #eab30866}input[type=range]::-webkit-slider-thumb:hover{transform:scale(1.2)}input[type=range]{height:4px}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/filters/FilterPanel.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/components/sidebar/Sidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sliders-horizontal.mjs [app-ssr] (ecmascript) <export default as SlidersHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$navigation$2f$SidebarContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/navigation/SidebarContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$navigation$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/navigation/config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$filters$2f$FilterPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/filters/FilterPanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function Sidebar() {
    const { isCollapsed, setIsCollapsed, activeView, handleViewChange, theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$navigation$2f$SidebarContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSidebar"])();
    const [isFilterExpanded, setIsFilterExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "jsx-db66acb31f98a60a" + " " + `hidden md:flex flex-col shrink-0 h-[calc(100vh-4rem)] sticky top-16 border-r transition-all duration-300 z-30 select-none ${isCollapsed ? "w-20" : "w-64"} ${theme === "dark" ? "bg-cyber-dark/40 border-cyber-border/40 cyber-glass" : "bg-slate-50 border-slate-200"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-db66acb31f98a60a" + " " + "flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-1.5 scrollbar-thin",
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$navigation$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SIDEBAR_ITEMS"].map((item)=>{
                        const Icon = item.icon;
                        const isActive = isItemActive(item);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-db66acb31f98a60a" + " " + "relative group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleItemClick(item),
                                    className: "jsx-db66acb31f98a60a" + " " + `w-full flex items-center p-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 relative z-10 ${isActive ? "text-slate-900 dark:text-cyber-black" : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200/40 dark:hover:bg-cyber-gray/30"}`,
                                    children: [
                                        isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            layoutId: "sidebarActiveBackground",
                                            className: "absolute inset-0 bg-white shadow-sm border border-slate-200 dark:border-transparent dark:bg-cyber-yellow dark:shadow-[0_0_12px_rgba(234,179,8,0.2)] rounded-lg z-[-1]",
                                            transition: {
                                                type: "spring",
                                                stiffness: 350,
                                                damping: 28
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                                            lineNumber: 68,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-db66acb31f98a60a" + " " + `shrink-0 ${isCollapsed ? "mx-auto" : "mr-3.5"}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                className: "jsx-db66acb31f98a60a" + " " + "h-4.5 w-4.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                                                lineNumber: 77,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                                            lineNumber: 76,
                                            columnNumber: 17
                                        }, this),
                                        !isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-db66acb31f98a60a" + " " + "truncate",
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                                            lineNumber: 82,
                                            columnNumber: 19
                                        }, this),
                                        !isCollapsed && item.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-db66acb31f98a60a" + " " + "ml-auto text-[9px] px-1.5 py-0.5 rounded font-mono font-bold uppercase bg-amber-100 text-amber-900 dark:bg-cyber-black dark:text-cyber-yellow-bright border dark:border-cyber-yellow/20",
                                            children: item.badge
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                                            lineNumber: 87,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                                    lineNumber: 58,
                                    columnNumber: 15
                                }, this),
                                isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-db66acb31f98a60a" + " " + `absolute left-full top-1/2 -translate-y-1/2 ml-4 px-2.5 py-1.5 rounded border pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap z-50 text-[10px] font-bold uppercase tracking-widest shadow-lg ${theme === 'dark' ? 'bg-cyber-gray border-cyber-yellow/20 text-cyber-yellow-bright' : 'bg-slate-900 border-slate-900 text-white'}`,
                                    children: [
                                        item.label,
                                        item.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-db66acb31f98a60a" + " " + "ml-2 font-mono bg-amber-500/10 px-1 py-0.2 rounded",
                                            children: item.badge
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                                            lineNumber: 102,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                                    lineNumber: 95,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, item.id, true, {
                            fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                            lineNumber: 57,
                            columnNumber: 13
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-db66acb31f98a60a" + " " + "pt-4 border-t border-slate-200 dark:border-cyber-border/40 mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleFilterAccordionClick,
                                className: "jsx-db66acb31f98a60a" + " " + `w-full flex items-center p-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 ${isFilterExpanded && !isCollapsed ? "text-slate-900 dark:text-cyber-yellow-bright" : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"} hover:bg-slate-200/40 dark:hover:bg-cyber-gray/30`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-db66acb31f98a60a" + " " + `shrink-0 ${isCollapsed ? "mx-auto" : "mr-3.5"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__["SlidersHorizontal"], {
                                            className: "h-4.5 w-4.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                                            lineNumber: 123,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this),
                                    !isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-db66acb31f98a60a",
                                                children: "Filters"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                                                lineNumber: 128,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                className: `ml-auto h-4 w-4 transition-transform duration-200 ${isFilterExpanded ? "rotate-180" : "rotate-0"}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                                                lineNumber: 129,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true),
                                    isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-db66acb31f98a60a" + " " + `absolute left-full top-1/2 -translate-y-1/2 ml-4 px-2.5 py-1.5 rounded border pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap z-50 text-[10px] font-bold uppercase tracking-widest shadow-lg ${theme === 'dark' ? 'bg-cyber-gray border-cyber-yellow/20 text-cyber-yellow-bright' : 'bg-slate-900 border-slate-900 text-white'}`,
                                        children: "University Filters"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                initial: false,
                                children: isFilterExpanded && !isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        height: 0,
                                        opacity: 0
                                    },
                                    animate: {
                                        height: "auto",
                                        opacity: 1
                                    },
                                    exit: {
                                        height: 0,
                                        opacity: 0
                                    },
                                    transition: {
                                        duration: 0.25,
                                        ease: "easeInOut"
                                    },
                                    className: "overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-db66acb31f98a60a" + " " + "px-3 pt-4 pb-2 border border-slate-200/50 dark:border-cyber-border/20 rounded-lg mt-2 bg-slate-100/50 dark:bg-cyber-dark/30",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$filters$2f$FilterPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                                            lineNumber: 160,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                                        lineNumber: 159,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                                    lineNumber: 152,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-db66acb31f98a60a" + " " + "p-4 border-t border-slate-200 dark:border-cyber-border/40 flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setIsCollapsed(!isCollapsed),
                    title: isCollapsed ? "Expand Sidebar" : "Collapse Sidebar",
                    className: "jsx-db66acb31f98a60a" + " " + `p-2 rounded-lg border transition-all duration-150 ${theme === "dark" ? "bg-cyber-gray border-cyber-border/30 text-cyber-yellow hover:bg-cyber-yellow hover:text-cyber-black" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900"}`,
                    children: isCollapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                        lineNumber: 181,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-db66acb31f98a60a" + " " + "flex items-center space-x-1.5 text-[10px] uppercase font-bold tracking-widest px-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                className: "h-4 w-4 shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                                lineNumber: 184,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-db66acb31f98a60a",
                                children: "Collapse"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                                lineNumber: 185,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                        lineNumber: 183,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                    lineNumber: 171,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "db66acb31f98a60a",
                children: ".scrollbar-thin.jsx-db66acb31f98a60a::-webkit-scrollbar{width:4px}.scrollbar-thin.jsx-db66acb31f98a60a::-webkit-scrollbar-thumb{background:#0000001a;border-radius:2px}html.dark.jsx-db66acb31f98a60a .scrollbar-thin.jsx-db66acb31f98a60a::-webkit-scrollbar-thumb{background:#eab3081a}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/sidebar/Sidebar.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/components/mobile/MobileMenu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MobileMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$navigation$2f$SidebarContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/navigation/SidebarContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$navigation$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/navigation/config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$filters$2f$FilterPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/filters/FilterPanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sliders-horizontal.mjs [app-ssr] (ecmascript) <export default as SlidersHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.mjs [app-ssr] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.mjs [app-ssr] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.mjs [app-ssr] (ecmascript) <export default as Settings>");
"use client";
;
;
;
;
;
;
;
function MobileMenu() {
    const focusRing = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-cyber-yellow dark:focus-visible:ring-offset-cyber-black";
    const { isMobileOpen, setIsMobileOpen, activeView, handleViewChange, theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$navigation$2f$SidebarContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSidebar"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("menu");
    const handleLinkClick = (item)=>{
        handleViewChange(item.view);
        setIsMobileOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isMobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 z-50 md:hidden flex font-sans",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            onClick: ()=>setIsMobileOpen(false),
                            className: "absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/mobile/MobileMenu.tsx",
                            lineNumber: 36,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                x: "-100%"
                            },
                            animate: {
                                x: 0
                            },
                            exit: {
                                x: "-100%"
                            },
                            transition: {
                                type: "spring",
                                stiffness: 300,
                                damping: 30
                            },
                            className: `relative w-80 max-w-[85vw] h-full flex flex-col shadow-2xl z-10 ${theme === "dark" ? "bg-cyber-dark border-r border-cyber-border/40 text-slate-100" : "bg-white text-slate-900 border-r border-slate-200"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 border-b border-slate-200 dark:border-cyber-border/40 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-serif text-sm font-bold tracking-tight text-slate-900 dark:text-white",
                                                    children: [
                                                        "ASIA UNIVERSITY ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setIsMobileOpen(false),
                                            "aria-label": "Close menu",
                                            className: `p-1 rounded-md text-slate-400 hover:text-slate-900 dark:hover:text-cyber-yellow transition-colors hover:bg-slate-100 dark:hover:bg-cyber-gray ${focusRing}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex border-b border-slate-200 dark:border-cyber-border/30",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setActiveTab("menu"),
                                            className: `flex-1 py-3 text-[10px] font-bold uppercase tracking-widest border-b-2 text-center transition-colors ${activeTab === "menu" ? "border-amber-700 text-slate-900 dark:border-cyber-yellow dark:text-cyber-yellow" : "border-transparent text-slate-400 hover:text-slate-700 dark:hover:text-white"}`,
                                            children: "Menu"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/mobile/MobileMenu.tsx",
                                            lineNumber: 78,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 overflow-y-auto p-4 space-y-4",
                                    children: activeTab === "menu" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                        className: "space-y-1",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$navigation$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SIDEBAR_ITEMS"].map((item)=>{
                                            const Icon = item.icon;
                                            const isActive = activeView === item.view;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>handleLinkClick(item),
                                                className: `w-full flex items-center p-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${isActive ? "bg-slate-150 border border-slate-200 text-slate-900 dark:bg-cyber-yellow dark:text-cyber-black dark:border-transparent dark:shadow-[0_0_10px_rgba(234,179,8,0.15)]" : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-cyber-gray/30"} ${focusRing}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                        className: "h-4.5 w-4.5 mr-3.5 shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/mobile/MobileMenu.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: item.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/mobile/MobileMenu.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 27
                                                    }, this),
                                                    item.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pb-8",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$filters$2f$FilterPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            }, void 0, false, {
                fileName: "[project]/src/app/components/mobile/MobileMenu.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: `md:hidden fixed bottom-0 left-0 right-0 h-16 border-t z-40 transition-colors duration-200 ${theme === "dark" ? "bg-cyber-dark/85 border-cyber-border/40 text-slate-400 cyber-glass" : "bg-white/95 border-slate-200 text-slate-500"} pb-safe-bottom`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full grid grid-cols-4 items-center max-w-lg mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>handleViewChange("home"),
                            className: `flex flex-col items-center justify-center h-full transition-colors ${activeView === "home" ? "text-amber-700 dark:text-cyber-yellow" : "hover:text-slate-800 dark:hover:text-white"} ${focusRing}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                    className: "h-4.5 w-4.5 mb-1"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/mobile/MobileMenu.tsx",
                                    lineNumber: 166,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>handleViewChange("rankings"),
                            className: `flex flex-col items-center justify-center h-full transition-colors ${activeView === "rankings" ? "text-amber-700 dark:text-cyber-yellow" : "hover:text-slate-800 dark:hover:text-white"} ${focusRing}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                    className: "h-4.5 w-4.5 mb-1"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/mobile/MobileMenu.tsx",
                                    lineNumber: 180,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>{
                                setActiveTab("filters");
                                setIsMobileOpen(true);
                            },
                            className: `flex flex-col items-center justify-center h-full hover:text-slate-800 dark:hover:text-white ${focusRing}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__["SlidersHorizontal"], {
                                    className: "h-4.5 w-4.5 mb-1"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/mobile/MobileMenu.tsx",
                                    lineNumber: 193,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>handleViewChange("settings"),
                            className: `flex flex-col items-center justify-center h-full transition-colors ${activeView === "settings" ? "text-amber-700 dark:text-cyber-yellow" : "hover:text-slate-800 dark:hover:text-white"} ${focusRing}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                    className: "h-4.5 w-4.5 mb-1"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/mobile/MobileMenu.tsx",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
"[project]/src/app/components/home/enterprise-utils.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TrendLine",
    ()=>TrendLine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function TrendLine({ data }) {
    const w = 64;
    const h = 20;
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;
    const pts = data.map((v, i)=>{
        const x = i / (data.length - 1) * w;
        const y = h - (v - min) / range * (h - 2) - 1;
        return `${x},${y}`;
    }).join(" ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: w,
        height: h,
        "aria-hidden": true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.25",
            points: pts,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: "text-[#9A7B4F]"
        }, void 0, false, {
            fileName: "[project]/src/app/components/home/enterprise-utils.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/home/enterprise-utils.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/components/Homepage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Homepage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.mjs [app-ssr] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$home$2f$enterprise$2d$utils$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/home/enterprise-utils.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const COUNTRIES = [
    "Singapore",
    "China",
    "Japan",
    "South Korea",
    "India",
    "Hong Kong",
    "Malaysia",
    "Thailand"
];
const METHODOLOGY = [
    {
        label: "Research impact",
        pct: 40
    },
    {
        label: "Teaching excellence",
        pct: 25
    },
    {
        label: "Employability",
        pct: 20
    },
    {
        label: "International outlook",
        pct: 10
    },
    {
        label: "Innovation",
        pct: 5
    }
];
function RankChange({ uni }) {
    const delta = uni.history[1] - uni.history[0];
    if (delta === 0) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
        className: "h-3 w-3 text-[#A8A29E]"
    }, void 0, false, {
        fileName: "[project]/src/app/components/Homepage.tsx",
        lineNumber: 36,
        columnNumber: 27
    }, this);
    if (delta > 0) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "inline-flex items-center gap-0.5 font-[family-name:var(--font-mono)] text-[11px] text-[#2D6A4F]",
        children: [
            "↑",
            delta
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Homepage.tsx",
        lineNumber: 39,
        columnNumber: 7
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "inline-flex items-center gap-0.5 font-[family-name:var(--font-mono)] text-[11px] text-[#9B4D4D]",
        children: [
            "↓",
            Math.abs(delta)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Homepage.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
function Homepage({ onUniversitySelect, onArticleSelect, onViewChange }) {
    const topTen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOCK_UNIVERSITIES"]
        ].sort((a, b)=>b.overall - a.overall).slice(0, 10), []);
    const topThree = topTen.slice(0, 3);
    const countryStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return COUNTRIES.map((country)=>{
            const unis = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOCK_UNIVERSITIES"].filter((u)=>u.location === country);
            const avg = unis.length ? unis.reduce((s, u)=>s + u.overall, 0) / unis.length : 0;
            const lead = [
                ...unis
            ].sort((a, b)=>b.overall - a.overall)[0];
            return {
                country,
                count: unis.length,
                avg,
                lead
            };
        }).filter((c)=>c.count > 0);
    }, []);
    const [leadArticle, ...moreArticles] = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FEATURED_ARTICLES"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[var(--aur-paper)] text-[var(--aur-ink)] -mx-4 sm:mx-0 font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "border-b border-[var(--aur-rule)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto px-5 sm:px-8 pt-14 pb-16 lg:pt-20 lg:pb-24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] font-medium tracking-[0.22em] uppercase text-[var(--aur-bronze)] mb-6",
                                        children: "Asia University Rankings"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "font-[family-name:var(--font-display)] text-[2.35rem] sm:text-5xl lg:text-[3.1rem] leading-[1.12] font-medium text-[var(--aur-ink)] tracking-[-0.02em]",
                                        children: "University intelligence for institutions that measure what matters."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-6 text-[17px] leading-[1.65] text-[var(--aur-muted)] max-w-[34rem]",
                                        children: "Rankings, research output, employability, and regional benchmarks—built for analysts, policymakers, and admissions teams across Asia."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                        lineNumber: 86,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-10 flex flex-wrap gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>onViewChange("rankings"),
                                                className: "inline-flex items-center gap-2 bg-[var(--aur-ink)] text-[var(--aur-paper)] px-6 py-3 text-[13px] font-medium tracking-wide hover:bg-[#2A2F38] transition-colors",
                                                children: [
                                                    "Open rankings index",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/Homepage.tsx",
                                                lineNumber: 91,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "inline-flex items-center gap-2 border border-[var(--aur-rule)] bg-white px-6 py-3 text-[13px] font-medium text-[var(--aur-ink)] hover:border-[var(--aur-ink)] transition-colors",
                                                children: "Methodology brief"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Homepage.tsx",
                                                lineNumber: 99,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                        className: "mt-14 grid grid-cols-3 gap-6 pt-8 border-t border-[var(--aur-rule)] max-w-md",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                        className: "text-[11px] uppercase tracking-wider text-[var(--aur-muted)]",
                                                        children: "Indexed"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                        className: "font-[family-name:var(--font-mono)] text-xl mt-1 text-[var(--aur-ink)]",
                                                        children: "45+"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/Homepage.tsx",
                                                lineNumber: 107,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                        className: "text-[11px] uppercase tracking-wider text-[var(--aur-muted)]",
                                                        children: "Regions"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                                        lineNumber: 112,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                        className: "font-[family-name:var(--font-mono)] text-xl mt-1 text-[var(--aur-ink)]",
                                                        children: "12"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                                        lineNumber: 113,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/Homepage.tsx",
                                                lineNumber: 111,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                        className: "text-[11px] uppercase tracking-wider text-[var(--aur-muted)]",
                                                        children: "Updated"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                        className: "font-[family-name:var(--font-mono)] text-xl mt-1 text-[var(--aur-ink)]",
                                                        children: "Jun ’26"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/Homepage.tsx",
                                                lineNumber: 115,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Homepage.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border border-[var(--aur-rule)] bg-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-5 py-4 border-b border-[var(--aur-rule)] flex justify-between items-baseline",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] uppercase tracking-[0.18em] text-[var(--aur-muted)]",
                                                children: "Index snapshot"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Homepage.tsx",
                                                lineNumber: 125,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-[family-name:var(--font-mono)] text-[11px] text-[var(--aur-muted)]",
                                                children: "Live"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Homepage.tsx",
                                                lineNumber: 128,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                        lineNumber: 124,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        children: topThree.map((uni, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "border-b border-[var(--aur-rule)] last:border-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>onUniversitySelect(uni.id),
                                                    className: "w-full text-left px-5 py-4 hover:bg-[var(--aur-paper)] transition-colors group",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "min-w-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-[family-name:var(--font-mono)] text-[11px] text-[var(--aur-bronze)]",
                                                                        children: String(i + 1).padStart(2, "0")
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                                                        lineNumber: 142,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-[family-name:var(--font-display)] text-lg font-medium text-[var(--aur-ink)] mt-1 leading-snug group-hover:text-[var(--aur-bronze)] transition-colors",
                                                                        children: uni.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                                                        lineNumber: 145,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[12px] text-[var(--aur-muted)] mt-0.5",
                                                                        children: uni.location
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                                                        lineNumber: 148,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/components/Homepage.tsx",
                                                                lineNumber: 141,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-right shrink-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-[family-name:var(--font-mono)] text-2xl font-medium text-[var(--aur-ink)]",
                                                                        children: uni.overall.toFixed(1)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                                                        lineNumber: 151,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-2 flex justify-end",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$home$2f$enterprise$2d$utils$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TrendLine"], {
                                                                            data: uni.history
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                                                            lineNumber: 155,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                                                        lineNumber: 154,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/components/Homepage.tsx",
                                                                lineNumber: 150,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 21
                                                }, this)
                                            }, uni.id, false, {
                                                fileName: "[project]/src/app/components/Homepage.tsx",
                                                lineNumber: 134,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>onViewChange("rankings"),
                                        className: "w-full px-5 py-3.5 text-[12px] font-medium text-[var(--aur-muted)] hover:text-[var(--aur-ink)] hover:bg-[var(--aur-paper)] transition-colors text-left border-t border-[var(--aur-rule)]",
                                        children: "View full table →"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                        lineNumber: 163,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Homepage.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Homepage.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Homepage.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Homepage.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 lg:py-20 border-b border-[var(--aur-rule)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto px-5 sm:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-medium text-[var(--aur-ink)]",
                                            children: "Top institutions"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                            lineNumber: 180,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[14px] text-[var(--aur-muted)] mt-2",
                                            children: "Composite score from audited institutional data."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                            lineNumber: 183,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                    lineNumber: 179,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>onViewChange("rankings"),
                                    className: "text-[13px] font-medium text-[var(--aur-bronze)] hover:text-[var(--aur-ink)] transition-colors",
                                    children: "Full rankings"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                    lineNumber: 187,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Homepage.tsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border border-[var(--aur-rule)] bg-white overflow-x-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full text-left text-[13px] min-w-[640px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "border-b border-[var(--aur-ink)] text-[10px] uppercase tracking-[0.14em] text-[var(--aur-muted)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-3 font-medium w-14",
                                                    children: "#"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-3 font-medium",
                                                    children: "Institution"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-3 font-medium w-20",
                                                    children: "Δ"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-3 font-medium text-right w-20",
                                                    children: "Score"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-3 font-medium text-right hidden md:table-cell",
                                                    children: "Research"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-3 font-medium text-right hidden md:table-cell",
                                                    children: "Employ"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-3 font-medium hidden lg:table-cell w-24",
                                                    children: "5yr"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-3 w-8"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                            lineNumber: 199,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                        lineNumber: 198,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: topTen.map((uni, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "border-b border-[var(--aur-rule)] last:border-0 hover:bg-[var(--aur-paper)] transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3.5 font-[family-name:var(--font-mono)] text-[var(--aur-ink)]",
                                                        children: i + 1
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                                        lineNumber: 216,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3.5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>onUniversitySelect(uni.id),
                                                            className: "text-left group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-medium text-[var(--aur-ink)] group-hover:text-[var(--aur-bronze)] transition-colors",
                                                                    children: uni.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                                                    lineNumber: 225,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "block text-[12px] text-[var(--aur-muted)] mt-0.5",
                                                                    children: uni.location
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                                                    lineNumber: 228,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                                            lineNumber: 220,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                                        lineNumber: 219,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3.5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RankChange, {
                                                            uni: uni
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                                            lineNumber: 232,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                                        lineNumber: 231,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3.5 text-right font-[family-name:var(--font-mono)] font-medium",
                                                        children: uni.overall.toFixed(1)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                                        lineNumber: 234,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3.5 text-right font-[family-name:var(--font-mono)] text-[var(--aur-muted)] hidden md:table-cell",
                                                        children: uni.research
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                                        lineNumber: 237,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3.5 text-right font-[family-name:var(--font-mono)] text-[var(--aur-muted)] hidden md:table-cell",
                                                        children: uni.employability
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                                        lineNumber: 240,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3.5 hidden lg:table-cell",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$home$2f$enterprise$2d$utils$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TrendLine"], {
                                                            data: uni.history
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                                            lineNumber: 244,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                                        lineNumber: 243,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3.5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                            className: "h-4 w-4 text-[var(--aur-muted)]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                                            lineNumber: 247,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                                        lineNumber: 246,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, uni.id, true, {
                                                fileName: "[project]/src/app/components/Homepage.tsx",
                                                lineNumber: 212,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                        lineNumber: 210,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Homepage.tsx",
                                lineNumber: 197,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Homepage.tsx",
                            lineNumber: 196,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Homepage.tsx",
                    lineNumber: 177,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Homepage.tsx",
                lineNumber: 176,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 lg:py-20 border-b border-[var(--aur-rule)] bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto px-5 sm:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-medium text-[var(--aur-ink)] mb-10",
                            children: "By country"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Homepage.tsx",
                            lineNumber: 260,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--aur-rule)] border border-[var(--aur-rule)]",
                            children: countryStats.map(({ country, count, avg, lead })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>onViewChange("rankings"),
                                    className: "bg-white p-5 text-left hover:bg-[var(--aur-paper)] transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-medium text-[var(--aur-ink)]",
                                            children: country
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                            lineNumber: 271,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[12px] text-[var(--aur-muted)] mt-3",
                                            children: [
                                                count,
                                                " institutions · avg",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-[family-name:var(--font-mono)] text-[var(--aur-ink)]",
                                                    children: avg.toFixed(1)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                                    lineNumber: 274,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                            lineNumber: 272,
                                            columnNumber: 17
                                        }, this),
                                        lead && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-[var(--aur-muted)] mt-2 pt-2 border-t border-[var(--aur-rule)] truncate",
                                            children: [
                                                "Leading: ",
                                                lead.name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                            lineNumber: 279,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, country, true, {
                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                    lineNumber: 265,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Homepage.tsx",
                            lineNumber: 263,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Homepage.tsx",
                    lineNumber: 259,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Homepage.tsx",
                lineNumber: 258,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 lg:py-20 border-b border-[var(--aur-rule)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-medium text-[var(--aur-ink)]",
                                    children: "How we score"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                    lineNumber: 293,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[15px] leading-relaxed text-[var(--aur-muted)] mt-4",
                                    children: "Weights are published, adjustable in the rankings engine, and aligned with how research councils and employers evaluate outcomes—not vanity metrics."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                    lineNumber: 296,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Homepage.tsx",
                            lineNumber: 292,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-4",
                            children: METHODOLOGY.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-[13px] mb-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[var(--aur-ink)]",
                                                    children: m.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                                    lineNumber: 305,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-[family-name:var(--font-mono)] text-[var(--aur-muted)]",
                                                    children: [
                                                        m.pct,
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                                    lineNumber: 306,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                            lineNumber: 304,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-[3px] bg-[var(--aur-rule)]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-full bg-[var(--aur-bronze)]",
                                                style: {
                                                    width: `${m.pct}%`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Homepage.tsx",
                                                lineNumber: 309,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                            lineNumber: 308,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, m.label, true, {
                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                    lineNumber: 303,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Homepage.tsx",
                            lineNumber: 301,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Homepage.tsx",
                    lineNumber: 291,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Homepage.tsx",
                lineNumber: 290,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 lg:py-20 border-b border-[var(--aur-rule)] bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto px-5 sm:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-medium text-[var(--aur-ink)] mb-10",
                            children: "Reports & analysis"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Homepage.tsx",
                            lineNumber: 323,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid lg:grid-cols-12 gap-8",
                            children: [
                                leadArticle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>onArticleSelect(leadArticle),
                                    className: "lg:col-span-7 text-left group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "aspect-[16/10] bg-cover bg-center border border-[var(--aur-rule)]",
                                            style: {
                                                backgroundImage: `url(${leadArticle.image})`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                            lineNumber: 333,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] uppercase tracking-wider text-[var(--aur-bronze)] mt-5",
                                            children: [
                                                leadArticle.source,
                                                " · ",
                                                leadArticle.date
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                            lineNumber: 337,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-[family-name:var(--font-display)] text-2xl font-medium text-[var(--aur-ink)] mt-2 group-hover:text-[var(--aur-bronze)] transition-colors leading-snug",
                                            children: leadArticle.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                            lineNumber: 340,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[14px] text-[var(--aur-muted)] mt-2 leading-relaxed",
                                            children: leadArticle.subtitle
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                            lineNumber: 343,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                    lineNumber: 328,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "lg:col-span-5 divide-y divide-[var(--aur-rule)] border-t border-b border-[var(--aur-rule)]",
                                    children: moreArticles.map((article)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>onArticleSelect(article),
                                                className: "w-full text-left py-5 hover:bg-[var(--aur-paper)] px-1 transition-colors group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] uppercase tracking-wider text-[var(--aur-muted)]",
                                                        children: article.source
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                                        lineNumber: 354,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-medium text-[var(--aur-ink)] mt-1.5 group-hover:text-[var(--aur-bronze)] transition-colors leading-snug",
                                                        children: article.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                                        lineNumber: 355,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/Homepage.tsx",
                                                lineNumber: 349,
                                                columnNumber: 19
                                            }, this)
                                        }, article.id, false, {
                                            fileName: "[project]/src/app/components/Homepage.tsx",
                                            lineNumber: 348,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                    lineNumber: 346,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Homepage.tsx",
                            lineNumber: 326,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Homepage.tsx",
                    lineNumber: 322,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Homepage.tsx",
                lineNumber: 321,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-[var(--aur-ink)] text-[var(--aur-paper)] py-16 lg:py-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto px-5 sm:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid sm:grid-cols-3 gap-10 sm:gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-[family-name:var(--font-mono)] text-3xl font-medium",
                                        children: "2,847"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                        lineNumber: 371,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[13px] text-[#A8A29E] mt-2",
                                        children: "Records refreshed in the last cycle"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                        lineNumber: 372,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Homepage.tsx",
                                lineNumber: 370,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-[family-name:var(--font-mono)] text-3xl font-medium",
                                        children: "+11.8%"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                        lineNumber: 375,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[13px] text-[#A8A29E] mt-2",
                                        children: "Median research index, year on year"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                        lineNumber: 376,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Homepage.tsx",
                                lineNumber: 374,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-[family-name:var(--font-mono)] text-3xl font-medium",
                                        children: "52"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                        lineNumber: 379,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[13px] text-[#A8A29E] mt-2",
                                        children: "Economies in the regional sample"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Homepage.tsx",
                                        lineNumber: 380,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Homepage.tsx",
                                lineNumber: 378,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Homepage.tsx",
                        lineNumber: 369,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Homepage.tsx",
                    lineNumber: 368,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Homepage.tsx",
                lineNumber: 367,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 lg:py-24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto px-5 sm:px-8 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-[family-name:var(--font-display)] text-2xl sm:text-[2rem] font-medium text-[var(--aur-ink)] max-w-lg mx-auto leading-snug",
                            children: "Start with the index. Go deeper with comparison and custom weights."
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Homepage.tsx",
                            lineNumber: 389,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 flex flex-wrap justify-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>onViewChange("rankings"),
                                    className: "bg-[var(--aur-ink)] text-[var(--aur-paper)] px-7 py-3 text-[13px] font-medium hover:bg-[#2A2F38] transition-colors",
                                    children: "Explore rankings"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                    lineNumber: 393,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "border border-[var(--aur-rule)] px-7 py-3 text-[13px] font-medium text-[var(--aur-ink)] hover:border-[var(--aur-ink)] transition-colors",
                                    children: "Institutional access"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Homepage.tsx",
                                    lineNumber: 400,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Homepage.tsx",
                            lineNumber: 392,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Homepage.tsx",
                    lineNumber: 388,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Homepage.tsx",
                lineNumber: 387,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Homepage.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/components/RankingsEngine.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RankingsEngine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-table/build/lib/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$table$2d$core$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/table-core/build/lib/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sliders-horizontal.mjs [app-ssr] (ecmascript) <export default as SlidersHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.mjs [app-ssr] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.mjs [app-ssr] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-check-big.mjs [app-ssr] (ecmascript) <export default as CheckSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square.mjs [app-ssr] (ecmascript) <export default as Square>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.mjs [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2d$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FilterX$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel-x.mjs [app-ssr] (ecmascript) <export default as FilterX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$navigation$2f$SidebarContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/navigation/SidebarContext.tsx [app-ssr] (ecmascript)");
"use client";
;
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
    const focusRing = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-cyber-yellow dark:focus-visible:ring-offset-cyber-black";
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const { filters } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$navigation$2f$SidebarContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSidebar"])();
    // 1. Core State
    const [sorting, setSorting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: "calculatedRank",
            desc: false
        }
    ]);
    const [locations, setLocations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedSubjects, setSelectedSubjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedLanguages, setSelectedLanguages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isWeightsDrawerOpen, setIsWeightsDrawerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Custom metric weights state
    const [weights, setWeights] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_WEIGHTS);
    // 2. Deserialize state from URL Search Params on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    }, []);
    // 3. Serialize state back to URL query strings smoothly
    // We use window.history.replaceState to prevent Next.js from triggering heavy layout flushes or re-renders
    const serializeStateToUrl = (newSearch, newLocs, newSubs, newLangs, newWeights)=>{
        const params = new URLSearchParams();
        if (newSearch) params.set("search", newSearch);
        if (newLocs.length > 0) params.set("locations", newLocs.join(","));
        if (newSubs.length > 0) params.set("subjects", newSubs.join(","));
        if (newLangs.length > 0) params.set("languages", newLangs.join(","));
        // Only serialize custom weights if they differ from default
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
    const processedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const totalWeight = weights.citations + weights.research + weights.employability + weights.intlStudents + weights.teaching;
        // Apply custom formula weights to recalculate scores dynamically
        const recalculated = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOCK_UNIVERSITIES"].map((uni)=>{
            let calculatedScore = uni.overall;
            if (totalWeight > 0) {
                calculatedScore = (uni.citations * weights.citations + uni.research * weights.research + uni.employability * weights.employability + uni.intlStudents * weights.intlStudents + uni.teaching * weights.teaching) / totalWeight;
            }
            return {
                ...uni,
                calculatedScore: Math.round(calculatedScore * 10) / 10
            };
        });
        // Re-rank based on recalculated scores
        const sorted = [
            ...recalculated
        ].sort((a, b)=>b.calculatedScore - a.calculatedScore);
        return sorted.map((uni, index)=>({
                ...uni,
                calculatedRank: index + 1
            }));
    }, [
        weights
    ]);
    // 5. Apply filters
    const deferredSearchQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDeferredValue"])(searchQuery);
    const filteredData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return processedData.filter((uni)=>{
            // 1. Search Query (combine props.searchQuery and filters.searchQuery)
            const query = (filters.searchQuery || deferredSearchQuery || "").toLowerCase();
            const matchesSearch = query === "" || uni.name.toLowerCase().includes(query) || uni.location.toLowerCase().includes(query);
            // 2. Location (combine locations state and filters.country)
            const matchesLoc = (locations.length === 0 || locations.includes(uni.location)) && (filters.country === "" || uni.location === filters.country);
            // 3. Subject (combine selectedSubjects state and filters.subjects)
            const matchesSub = (selectedSubjects.length === 0 || uni.subjects.some((sub)=>selectedSubjects.includes(sub))) && (filters.subjects.length === 0 || uni.subjects.some((sub)=>filters.subjects.includes(sub)));
            // 4. Language filter (keep existing local language filter)
            const matchesLang = selectedLanguages.length === 0 || uni.languages.some((lang)=>selectedLanguages.includes(lang));
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
        });
    }, [
        processedData,
        deferredSearchQuery,
        locations,
        selectedSubjects,
        selectedLanguages,
        filters
    ]);
    // 6. Extract unique values for filter dropdown options
    const uniqueLocations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Array.from(new Set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOCK_UNIVERSITIES"].map((u)=>u.location))).sort(), []);
    const uniqueSubjects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Array.from(new Set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOCK_UNIVERSITIES"].flatMap((u)=>u.subjects))).sort(), []);
    const uniqueLanguages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Array.from(new Set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOCK_UNIVERSITIES"].flatMap((u)=>u.languages))).sort(), []);
    // 7. Column Definitions for @tanstack/react-table
    const columns = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            {
                id: "calculatedRank",
                header: "Rank",
                accessorKey: "calculatedRank",
                cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `aur-rank-badge aur-tabular ${row.original.calculatedRank <= 3 ? "aur-rank-badge--elite" : ""}`,
                        children: row.original.calculatedRank
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                        lineNumber: 293,
                        columnNumber: 11
                    }, this)
            },
            {
                id: "name",
                header: "University Name",
                accessorKey: "name",
                cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-left font-sans font-bold text-slate-900 hover:text-amber-700 transition-colors cursor-pointer",
                        onClick: ()=>onUniversitySelect(row.original.id),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "truncate max-w-[200px] sm:max-w-xs",
                                children: row.original.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 308,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center text-[10px] text-slate-400 font-mono font-medium uppercase mt-0.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                        className: "h-3 w-3 mr-1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                        lineNumber: 310,
                                        columnNumber: 15
                                    }, this),
                                    row.original.location
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 309,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                        lineNumber: 307,
                        columnNumber: 11
                    }, this)
            },
            {
                id: "calculatedScore",
                header: "Score",
                accessorKey: "calculatedScore",
                cell: ({ getValue })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "aur-score-pill aur-tabular text-slate-900 dark:text-slate-100",
                        children: getValue().toFixed(1)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                        lineNumber: 321,
                        columnNumber: 11
                    }, this)
            },
            {
                id: "citations",
                header: "Citations",
                accessorKey: "citations",
                cell: ({ getValue })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-slate-600 aur-tabular",
                        children: getValue().toFixed(0)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                        lineNumber: 331,
                        columnNumber: 11
                    }, this)
            },
            {
                id: "research",
                header: "Research",
                accessorKey: "research",
                cell: ({ getValue })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-slate-600 aur-tabular",
                        children: getValue().toFixed(0)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                        lineNumber: 339,
                        columnNumber: 11
                    }, this)
            },
            {
                id: "employability",
                header: "Employability",
                accessorKey: "employability",
                cell: ({ getValue })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-slate-600 aur-tabular",
                        children: getValue().toFixed(0)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                        lineNumber: 347,
                        columnNumber: 11
                    }, this)
            },
            {
                id: "tuition",
                header: "Tuition / Yr",
                accessorKey: "tuition",
                cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-xs text-slate-500 bg-slate-50 border border-slate-200 px-1.5 py-0.5",
                        children: row.original.tuition
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                        lineNumber: 355,
                        columnNumber: 11
                    }, this)
            },
            {
                id: "compare",
                header: "Compare",
                cell: ({ row })=>{
                    const isSelected = selectedUniIds.includes(row.original.id);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>onToggleCompare(row.original.id),
                        className: `aur-btn-ghost aur-focus-ring ${focusRing} ${isSelected ? "aur-btn-ghost--active" : ""}`,
                        children: isSelected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__["CheckSquare"], {
                                    className: "h-3.5 w-3.5 text-amber-700"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                    lineNumber: 375,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px]",
                                    children: "Added"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                    lineNumber: 376,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__["Square"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                    lineNumber: 380,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px]",
                                    children: "Compare"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                    lineNumber: 381,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                        lineNumber: 366,
                        columnNumber: 13
                    }, this);
                }
            }
        ], [
        selectedUniIds,
        onToggleCompare,
        onUniversitySelect
    ]);
    // 8. TanStack Table Instance
    const table = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useReactTable"])({
        data: filteredData,
        columns,
        state: {
            sorting
        },
        onSortingChange: setSorting,
        getCoreRowModel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$table$2d$core$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCoreRowModel"])(),
        getSortedRowModel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$table$2d$core$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSortedRowModel"])(),
        getFilteredRowModel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$table$2d$core$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFilteredRowModel"])(),
        getPaginationRowModel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$table$2d$core$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPaginationRowModel"])(),
        initialState: {
            pagination: {
                pageSize: 15
            }
        }
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto max-w-full px-4 sm:px-6 lg:px-8 py-8 font-sans flex-grow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8 aur-hero-accent flex flex-col md:flex-row md:items-end md:justify-between gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "aur-caption",
                                children: "Engine & Analytics Database"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 417,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "aur-section-title text-3xl md:text-4xl leading-tight mt-2",
                                children: "Asia Institutional Ranking Table"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 418,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-slate-500 dark:text-slate-400 font-mono mt-3 tracking-wide",
                                children: [
                                    "Index refreshed · Jun 2026 · ",
                                    filteredData.length,
                                    " institutions indexed"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 421,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                        lineNumber: 416,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setIsWeightsDrawerOpen(true),
                        className: `mt-2 md:mt-0 inline-flex items-center justify-center border border-amber-600/30 bg-gradient-to-b from-amber-50 to-white dark:from-cyber-gray dark:to-cyber-dark dark:text-cyber-yellow dark:border-cyber-yellow/30 hover:border-amber-700 hover:shadow-md text-amber-900 px-5 py-2.5 text-[10px] font-bold uppercase tracking-wider transition-all aur-focus-ring ${focusRing}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__["SlidersHorizontal"], {
                                className: "h-4 w-4 mr-2 text-amber-700"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 432,
                                columnNumber: 11
                            }, this),
                            "Weights Recalculator"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                        lineNumber: 427,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                lineNumber: 415,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "aur-filter-deck grid grid-cols-1 md:grid-cols-4 gap-5 mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "md:col-span-4 aur-caption text-slate-400 dark:text-slate-500 -mb-2",
                        children: "Refine index"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                        lineNumber: 439,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "aur-caption block text-slate-400 dark:text-slate-500 mb-2",
                                children: "Search"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 445,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Search...",
                                        value: searchQuery,
                                        onChange: (e)=>handleSearchChange(e.target.value),
                                        className: "aur-input pl-9"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                        lineNumber: 449,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                        lineNumber: 456,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 448,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                        lineNumber: 444,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "aur-caption block text-slate-400 dark:text-slate-500 mb-2",
                                children: "Location"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 462,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    onChange: (e)=>{
                                        if (e.target.value) handleLocationToggle(e.target.value);
                                        e.target.value = "";
                                    },
                                    className: "aur-input",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "Filter Location..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                            lineNumber: 473,
                                            columnNumber: 15
                                        }, this),
                                        uniqueLocations.map((loc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: loc,
                                                children: [
                                                    loc,
                                                    " ",
                                                    locations.includes(loc) ? "✓" : ""
                                                ]
                                            }, loc, true, {
                                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                lineNumber: 475,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                    lineNumber: 466,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 465,
                                columnNumber: 11
                            }, this),
                            locations.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-1 mt-1.5",
                                children: locations.map((loc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        onClick: ()=>handleLocationToggle(loc),
                                        className: "inline-flex items-center text-[9px] font-mono border border-slate-350 bg-white text-slate-700 px-1.5 py-0.5 cursor-pointer hover:border-red-500 hover:text-red-500",
                                        children: [
                                            loc,
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "h-2 w-2 ml-1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                lineNumber: 490,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, loc, true, {
                                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                        lineNumber: 485,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 483,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                        lineNumber: 461,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "aur-caption block text-slate-400 dark:text-slate-500 mb-2",
                                children: "Subject Focus"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 499,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    onChange: (e)=>{
                                        if (e.target.value) handleSubjectToggle(e.target.value);
                                        e.target.value = "";
                                    },
                                    className: "aur-input",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "Filter Subject..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                            lineNumber: 510,
                                            columnNumber: 15
                                        }, this),
                                        uniqueSubjects.map((sub)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: sub,
                                                children: [
                                                    sub,
                                                    " ",
                                                    selectedSubjects.includes(sub) ? "✓" : ""
                                                ]
                                            }, sub, true, {
                                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                lineNumber: 512,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                    lineNumber: 503,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 502,
                                columnNumber: 11
                            }, this),
                            selectedSubjects.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-1 mt-1.5",
                                children: selectedSubjects.map((sub)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        onClick: ()=>handleSubjectToggle(sub),
                                        className: "inline-flex items-center text-[9px] font-mono border border-slate-350 bg-white text-slate-700 px-1.5 py-0.5 cursor-pointer hover:border-red-500 hover:text-red-500",
                                        children: [
                                            sub,
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "h-2 w-2 ml-1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                lineNumber: 527,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, sub, true, {
                                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                        lineNumber: 522,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 520,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                        lineNumber: 498,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "aur-caption block text-slate-400 dark:text-slate-500 mb-2",
                                children: "Language"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 536,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    onChange: (e)=>{
                                        if (e.target.value) handleLanguageToggle(e.target.value);
                                        e.target.value = "";
                                    },
                                    className: "aur-input",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "Filter Language..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                            lineNumber: 547,
                                            columnNumber: 15
                                        }, this),
                                        uniqueLanguages.map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: lang,
                                                children: [
                                                    lang,
                                                    " ",
                                                    selectedLanguages.includes(lang) ? "✓" : ""
                                                ]
                                            }, lang, true, {
                                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                lineNumber: 549,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                    lineNumber: 540,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 539,
                                columnNumber: 11
                            }, this),
                            selectedLanguages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-1 mt-1.5",
                                children: selectedLanguages.map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        onClick: ()=>handleLanguageToggle(lang),
                                        className: "inline-flex items-center text-[9px] font-mono border border-slate-350 bg-white text-slate-700 px-1.5 py-0.5 cursor-pointer hover:border-red-500 hover:text-red-500",
                                        children: [
                                            lang,
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "h-2 w-2 ml-1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                lineNumber: 564,
                                                columnNumber: 26
                                            }, this)
                                        ]
                                    }, lang, true, {
                                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                        lineNumber: 559,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 557,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                        lineNumber: 535,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                lineNumber: 438,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider",
                        children: [
                            "Total: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-750 font-mono",
                                children: filteredData.length
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 574,
                                columnNumber: 18
                            }, this),
                            " matching institutions"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                        lineNumber: 573,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleResetFilters,
                        className: "inline-flex items-center text-[10px] font-bold uppercase tracking-wider text-amber-700 hover:text-amber-800 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                className: "h-3 w-3 mr-1"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 580,
                                columnNumber: 11
                            }, this),
                            "Reset All Filters"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                        lineNumber: 576,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                lineNumber: 572,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "aur-table-wrap relative overflow-x-auto select-none rounded-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "aur-table table-fixed w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            className: "sticky top-0 z-10 aur-thead-shadow",
                            children: table.getHeaderGroups().map((headerGroup)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "border-b border-slate-200 dark:border-slate-800",
                                    children: headerGroup.headers.map((header, idx)=>{
                                        const isPinnedCol = idx < 2; // rank and name columns pinned
                                        const columnId = header.column.id;
                                        const isMobileHiddenCol = columnId === "citations" || columnId === "research" || columnId === "employability" || columnId === "tuition";
                                        const widthClass = columnId === "calculatedRank" ? "w-14 min-w-[56px] max-w-[56px]" : columnId === "name" ? "w-[18rem] min-w-[18rem] sm:w-[22rem] sm:min-w-[22rem]" : columnId === "compare" ? "w-28 min-w-[112px]" : "w-24 min-w-[96px]";
                                        const alignClass = columnId === "calculatedScore" || columnId === "citations" || columnId === "research" || columnId === "employability" ? "text-right" : "";
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: `px-4 py-3 text-left font-bold select-none ${isPinnedCol ? idx === 0 ? `sticky left-0 bg-[#1e293b] dark:bg-[#18181f] z-20 border-r border-white/10 ${widthClass}` : `sticky left-[56px] bg-[#1e293b] dark:bg-[#18181f] z-20 border-r border-white/10 ${widthClass}` : ""} ${widthClass} ${alignClass} ${isMobileHiddenCol ? "hidden sm:table-cell" : ""} ${header.column.getCanSort() ? "cursor-pointer hover:text-amber-300 dark:hover:text-cyber-yellow-bright" : ""}`,
                                            onClick: header.column.getToggleSortingHandler(),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `flex items-center space-x-1.5 ${alignClass ? "justify-end" : ""}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flexRender"])(header.column.columnDef.header, header.getContext())
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                        lineNumber: 629,
                                                        columnNumber: 25
                                                    }, this),
                                                    header.column.getCanSort() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "shrink-0",
                                                        children: header.column.getIsSorted() === "asc" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                            className: "h-3 w-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                            lineNumber: 633,
                                                            columnNumber: 31
                                                        }, this) : header.column.getIsSorted() === "desc" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            className: "h-3 w-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                            lineNumber: 635,
                                                            columnNumber: 31
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                            lineNumber: 637,
                                                            columnNumber: 31
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                        lineNumber: 631,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                lineNumber: 628,
                                                columnNumber: 23
                                            }, this)
                                        }, header.id, false, {
                                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                            lineNumber: 615,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, headerGroup.id, false, {
                                    fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                    lineNumber: 590,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                            lineNumber: 588,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: "font-sans text-slate-700 dark:text-slate-300",
                            children: [
                                table.getRowModel().rows.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "group",
                                        children: row.getVisibleCells().map((cell, idx)=>{
                                            const isPinnedCol = idx < 2;
                                            const columnId = cell.column.id;
                                            const isMobileHiddenCol = columnId === "citations" || columnId === "research" || columnId === "employability" || columnId === "tuition";
                                            const widthClass = columnId === "calculatedRank" ? "w-14 min-w-[56px] max-w-[56px]" : columnId === "name" ? "w-[18rem] min-w-[18rem] sm:w-[22rem] sm:min-w-[22rem]" : columnId === "compare" ? "w-28 min-w-[112px]" : "w-24 min-w-[96px]";
                                            const alignClass = columnId === "calculatedScore" || columnId === "citations" || columnId === "research" || columnId === "employability" ? "text-right" : "";
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: `px-4 py-3 align-middle ${isPinnedCol ? idx === 0 ? `sticky-pin sticky left-0 z-10 border-r border-slate-200/80 dark:border-cyber-border/40 font-bold text-slate-900 dark:text-white ${widthClass}` : `sticky-pin sticky left-[56px] z-10 border-r border-slate-200/80 dark:border-cyber-border/40 font-bold text-slate-900 dark:text-white ${widthClass}` : ""} ${widthClass} ${alignClass} ${isMobileHiddenCol ? "hidden sm:table-cell" : ""}`,
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flexRender"])(cell.column.columnDef.cell, cell.getContext())
                                            }, cell.id, false, {
                                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                lineNumber: 675,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, row.id, false, {
                                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                        lineNumber: 650,
                                        columnNumber: 15
                                    }, this)),
                                filteredData.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        colSpan: columns.length,
                                        className: "py-16 px-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center text-center max-w-md mx-auto",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex h-12 w-12 items-center justify-center border border-slate-200 dark:border-cyber-border bg-slate-50 dark:bg-cyber-gray mb-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2d$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FilterX$3e$__["FilterX"], {
                                                        className: "h-5 w-5 text-amber-700 dark:text-cyber-yellow"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                        lineNumber: 696,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                    lineNumber: 695,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "aur-caption mb-2",
                                                    children: "No matches"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                    lineNumber: 698,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-serif text-lg font-semibold text-slate-900 dark:text-white mb-2",
                                                    children: "No institutions match your filters"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                    lineNumber: 699,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-6",
                                                    children: "Try widening location, subject, or rank ranges—or reset all filters to browse the full index."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                    lineNumber: 702,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: handleResetFilters,
                                                    className: `aur-btn-primary px-5 py-2.5 aur-focus-ring ${focusRing}`,
                                                    children: "Reset all filters"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                    lineNumber: 705,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                            lineNumber: 694,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                        lineNumber: 693,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                    lineNumber: 692,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                            lineNumber: 648,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/RankingsEngine.tsx",
                    lineNumber: 587,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                lineNumber: 586,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "aur-panel flex items-center justify-between px-4 py-3 mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-1 justify-between sm:hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>table.previousPage(),
                                disabled: !table.getCanPreviousPage(),
                                className: `relative inline-flex items-center border border-slate-300 bg-white px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 ${focusRing}`,
                                children: "Previous"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 723,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>table.nextPage(),
                                disabled: !table.getCanNextPage(),
                                className: `relative ml-3 inline-flex items-center border border-slate-300 bg-white px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 ${focusRing}`,
                                children: "Next"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 730,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                        lineNumber: 722,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden sm:flex sm:flex-1 sm:items-center sm:justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] text-slate-400 font-semibold uppercase tracking-wider",
                                    children: [
                                        "Showing page ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-slate-700",
                                            children: table.getState().pagination.pageIndex + 1
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                            lineNumber: 741,
                                            columnNumber: 28
                                        }, this),
                                        " of",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-slate-700",
                                            children: table.getPageCount()
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                            lineNumber: 742,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                    lineNumber: 740,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 739,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "isolate inline-flex -space-x-px",
                                    "aria-label": "Pagination",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>table.previousPage(),
                                            disabled: !table.getCanPreviousPage(),
                                            className: `relative inline-flex items-center border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-500 hover:bg-slate-50 disabled:opacity-50 ${focusRing}`,
                                            children: "Previous"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                            lineNumber: 747,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>table.nextPage(),
                                            disabled: !table.getCanNextPage(),
                                            className: `relative inline-flex items-center border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-500 hover:bg-slate-50 disabled:opacity-50 ${focusRing}`,
                                            children: "Next"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                            lineNumber: 754,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                    lineNumber: 746,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                lineNumber: 745,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                        lineNumber: 738,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                lineNumber: 721,
                columnNumber: 7
            }, this),
            isWeightsDrawerOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 overflow-hidden font-sans",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity",
                        onClick: ()=>setIsWeightsDrawerOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                        lineNumber: 769,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-y-0 right-0 pl-10 max-w-full flex",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-screen max-w-md bg-white border-l border-slate-900 flex flex-col justify-between shadow-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 border-b border-slate-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] uppercase font-bold tracking-widest text-amber-700",
                                                            children: "Calculations Lab"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                            lineNumber: 777,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-serif text-xl font-bold text-slate-900 mt-0.5",
                                                            children: "Recalculate Rank Weights"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                            lineNumber: 780,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                    lineNumber: 776,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setIsWeightsDrawerOpen(false),
                                                    className: "p-1 hover:bg-slate-100 rounded text-slate-500 hover:text-slate-900",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        className: "h-5 w-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                        lineNumber: 788,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                    lineNumber: 784,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                            lineNumber: 775,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-500 text-xs mt-3 leading-relaxed",
                                            children: "Modify the relative priority weights below. The system automatically recalculates total scores using instant frontend arithmetic."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                            lineNumber: 791,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                    lineNumber: 774,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "text-xs font-bold text-slate-900 block",
                                                                    children: slider.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                                    lineNumber: 810,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] text-slate-400 block",
                                                                    children: slider.desc
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                                    lineNumber: 811,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                            lineNumber: 809,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 border border-amber-200 rounded",
                                                            children: [
                                                                currentValue,
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                            lineNumber: 813,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                    lineNumber: 808,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "range",
                                                    min: "0",
                                                    max: "100",
                                                    step: "5",
                                                    value: currentValue,
                                                    onChange: (e)=>handleWeightChange(slider.key, parseInt(e.target.value)),
                                                    className: "w-full accent-amber-700 cursor-pointer bg-slate-100"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                    lineNumber: 817,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, slider.key, true, {
                                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                            lineNumber: 807,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                    lineNumber: 797,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 border-t border-slate-200 bg-slate-50 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setWeights(DEFAULT_WEIGHTS);
                                                serializeStateToUrl(searchQuery, locations, selectedSubjects, selectedLanguages, DEFAULT_WEIGHTS);
                                            },
                                            className: "inline-flex items-center text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-slate-900 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                                    className: "h-4 w-4 mr-1.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                                    lineNumber: 840,
                                                    columnNumber: 19
                                                }, this),
                                                "Default Weights"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                            lineNumber: 833,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsWeightsDrawerOpen(false),
                                            className: "bg-slate-900 text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 hover:bg-slate-800 transition-colors border border-slate-900",
                                            children: "Apply Recalculation"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                            lineNumber: 843,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/RankingsEngine.tsx",
                                    lineNumber: 832,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/RankingsEngine.tsx",
                            lineNumber: 771,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/RankingsEngine.tsx",
                        lineNumber: 770,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/RankingsEngine.tsx",
                lineNumber: 768,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/RankingsEngine.tsx",
        lineNumber: 412,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/components/ComparisonDock.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ComparisonDock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shuffle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shuffle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shuffle.mjs [app-ssr] (ecmascript) <export default as Shuffle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash.mjs [app-ssr] (ecmascript) <export default as Trash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function ComparisonDock({ selectedIds, onRemove, onClearAll, onUniversitySelect }) {
    const focusRing = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-cyber-yellow dark:focus-visible:ring-offset-cyber-black";
    const [isExpanded, setIsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    if (selectedIds.length === 0) return null;
    // Fetch full details of selected universities
    const selectedUnis = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOCK_UNIVERSITIES"].filter((uni)=>selectedIds.includes(uni.id));
    const comparisonGridColsClass = selectedUnis.length <= 1 ? "md:grid-cols-2" : selectedUnis.length === 2 ? "md:grid-cols-3" : selectedUnis.length === 3 ? "md:grid-cols-4" : "md:grid-cols-5";
    // Visual Horizontal Fill Meter Component
    const MetricMeter = ({ value, label })=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-1.5 font-sans",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between text-[11px] font-medium text-slate-500",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: label
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/ComparisonDock.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-2 w-full bg-slate-100 border border-slate-250",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-20 md:bottom-6 left-1/2 z-40 w-full max-w-2xl -translate-x-1/2 px-4 font-sans select-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "aur-panel border-slate-900/10 dark:border-cyber-yellow/20 p-3 sm:p-4 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-2 sm:space-x-4 truncate",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center border border-slate-905 bg-slate-50 text-slate-800",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shuffle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shuffle$3e$__["Shuffle"], {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "truncate",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-block text-[9px] uppercase font-bold tracking-widest text-amber-700 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded-xs",
                                            children: "Comparison Suite"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden sm:flex items-center space-x-2 shrink-0",
                                    children: selectedUnis.map((uni)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex items-center text-[10px] font-bold border border-slate-200 bg-slate-50 text-slate-800 px-2 py-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "truncate max-w-[80px]",
                                                    children: uni.name.split(" ")[0]
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>onRemove(uni.id),
                                                    "aria-label": `Remove ${uni.name} from comparison`,
                                                    className: `ml-1.5 hover:text-red-600 text-slate-400 ${focusRing}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-2 sm:space-x-3 shrink-0 ml-2 sm:ml-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClearAll,
                                    className: `text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-slate-500 hover:text-slate-900 transition-colors ${focusRing}`,
                                    children: "Clear"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setIsExpanded(true),
                                    className: `inline-flex items-center justify-center border border-slate-900 bg-slate-900 px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white hover:bg-slate-800 transition-colors ${focusRing}`,
                                    children: [
                                        "Compare",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
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
            isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 overflow-hidden font-sans",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity",
                        onClick: ()=>setIsExpanded(false)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ComparisonDock.tsx",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-y-10 inset-x-4 md:inset-x-12 lg:inset-x-24 bg-white border border-slate-950 flex flex-col justify-between shadow-2xl z-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 border-b border-slate-200 bg-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] uppercase font-bold tracking-widest text-amber-700",
                                                    children: "Analytical Comparison Model"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setIsExpanded(false),
                                            "aria-label": "Close comparison",
                                            className: `p-1 hover:bg-slate-100 rounded text-slate-500 hover:text-slate-900 ${focusRing}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-auto p-6 bg-slate-50",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `grid gap-6 grid-cols-1 ${comparisonGridColsClass}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hidden md:flex flex-col justify-between border-r border-slate-200 pr-6 pt-16 space-y-8 select-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2",
                                                            children: "Overall Standing"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                            lineNumber: 159,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2",
                                                            children: "Citations Score"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                            lineNumber: 163,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2",
                                                            children: "Research Value"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                            lineNumber: 167,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2",
                                                            children: "Employability"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                            lineNumber: 171,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2",
                                                            children: "International Student Ratio"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                            lineNumber: 175,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                        selectedUnis.map((uni)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border border-slate-200 bg-white p-5 shadow-sm flex flex-col justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "border-b border-slate-100 pb-4 mb-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex justify-between items-start",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
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
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                onClick: ()=>onRemove(uni.id),
                                                                                "aria-label": `Remove ${uni.name} from comparison`,
                                                                                className: `text-slate-400 hover:text-red-600 ml-2 ${focusRing}`,
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash$3e$__["Trash"], {
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
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mb-6 flex items-baseline space-x-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricMeter, {
                                                                        value: uni.overall,
                                                                        label: "Overall Percentile"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                                        lineNumber: 218,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricMeter, {
                                                                        value: uni.citations,
                                                                        label: "Citations Index"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                                        lineNumber: 219,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricMeter, {
                                                                        value: uni.research,
                                                                        label: "Research Output"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                                        lineNumber: 220,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricMeter, {
                                                                        value: uni.employability,
                                                                        label: "Employability Rate"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                                        lineNumber: 221,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricMeter, {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-8 pt-6 border-t border-slate-100 space-y-2.5 text-xs text-slate-600",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex justify-between",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[10px] font-bold uppercase tracking-wider text-slate-400",
                                                                                children: "Programs:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                                                lineNumber: 228,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex justify-between",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[10px] font-bold uppercase tracking-wider text-slate-400",
                                                                                children: "Languages:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                                                lineNumber: 234,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex justify-between",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[10px] font-bold uppercase tracking-wider text-slate-400",
                                                                                children: "Tuition Est:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                                                                lineNumber: 240,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-8",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 border-t border-slate-200 bg-white flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: onClearAll,
                                        className: `text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-slate-900 transition-colors ${focusRing}`,
                                        children: "Clear All Matches"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/ComparisonDock.tsx",
                                        lineNumber: 265,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}),
"[project]/src/app/components/UniversityProfile.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UniversityProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.mjs [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.mjs [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.mjs [app-ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.mjs [app-ssr] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.mjs [app-ssr] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.mjs [app-ssr] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$line$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LineChart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-line.mjs [app-ssr] (ecmascript) <export default as LineChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data.ts [app-ssr] (ecmascript)");
;
"use client";
;
;
;
;
;
;
// Lazy load the heavy charting component
const TrendChart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/src/app/components/TrendChart.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-[300px] flex items-center justify-center border border-slate-200 bg-slate-50 text-slate-400 font-mono text-xs uppercase tracking-widest",
            children: "Loading Analytics Engine..."
        }, void 0, false, {
            fileName: "[project]/src/app/components/UniversityProfile.tsx",
            lineNumber: 12,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    ssr: false
});
function UniversityProfile({ universityId, onBack, onViewChange }) {
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("overview");
    const uni = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOCK_UNIVERSITIES"].find((u)=>u.id === universityId);
    if (!uni) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-full px-4 py-16 text-center font-sans",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold text-slate-900",
                    children: "University Record Not Found"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/UniversityProfile.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onBack,
                    className: "mt-4 text-amber-700 hover:underline",
                    children: "Return to Rankings"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/UniversityProfile.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/UniversityProfile.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto max-w-full px-4 sm:px-6 lg:px-8 py-8 font-sans flex-grow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onBack,
                    className: "inline-flex items-center text-[10px] font-bold uppercase tracking-wider text-slate-500 hover:text-slate-900 transition-colors",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            className: "h-4 w-4 mr-1.5"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/UniversityProfile.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        "Back to Results"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/UniversityProfile.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border border-slate-200 bg-white shadow-sm mb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:col-span-1 relative aspect-video md:aspect-auto border-b md:border-b-0 md:border-r border-slate-200 bg-slate-100",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: uni.campusPhoto,
                                alt: `${uni.name} Campus`,
                                fill: true,
                                className: "object-cover",
                                sizes: "(max-width: 768px) 100vw, 33vw",
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/UniversityProfile.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:col-span-2 p-6 md:p-8 flex flex-col justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap items-center gap-2 mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center text-[10px] font-bold uppercase tracking-widest text-slate-500 border border-slate-200 px-2 py-0.5 bg-slate-50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                            className: "h-3 w-3 mr-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                            lineNumber: 72,
                                                            columnNumber: 19
                                                        }, this),
                                                        uni.location
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 17
                                                }, this),
                                                uni.hasMedicine && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center text-[10px] font-bold uppercase tracking-widest text-amber-700 border border-amber-200 px-2 py-0.5 bg-amber-50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                                            className: "h-3 w-3 mr-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                            lineNumber: 77,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Medical Faculty Certified"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                            lineNumber: 70,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "font-serif text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-2",
                                            children: uni.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                            lineNumber: 83,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap items-center gap-x-6 gap-y-2 space-x-0 text-sm text-slate-600 font-mono mt-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                            className: "h-4 w-4 mr-1.5 text-slate-400 shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                            lineNumber: 89,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: uni.languages.join(", ")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                            lineNumber: 90,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                            className: "h-4 w-4 mr-1.5 text-slate-400 shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                            lineNumber: 93,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                uni.subjects.length,
                                                                " Major Faculties"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                            lineNumber: 94,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 items-stretch",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-baseline space-x-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-3xl font-serif font-bold text-slate-900",
                                                    children: [
                                                        "#",
                                                        uni.history[0]
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-slate-400 uppercase tracking-widest font-bold",
                                                    children: "Overall Asia Rank"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                            lineNumber: 100,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>onViewChange("rankings"),
                                            className: "bg-slate-900 text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors text-center",
                                            children: "Compare Institution"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                            lineNumber: 104,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/UniversityProfile.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/UniversityProfile.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b border-slate-200 mb-8 flex overflow-x-auto hide-scrollbar",
                children: [
                    {
                        id: "overview",
                        label: "Overview & Context",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"]
                    },
                    {
                        id: "metrics",
                        label: "Academic Metrics",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$line$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LineChart$3e$__["LineChart"]
                    },
                    {
                        id: "admissions",
                        label: "Admissions & Programs",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"]
                    }
                ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTab(tab.id),
                        className: `inline-flex items-center whitespace-nowrap border-b-2 px-6 py-3 text-xs font-bold uppercase tracking-wider transition-colors -mb-[1px] ${activeTab === tab.id ? "border-amber-700 text-slate-900" : "border-transparent text-slate-400 hover:text-slate-700 hover:border-slate-300"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(tab.icon, {
                                className: `h-4 w-4 mr-2 ${activeTab === tab.id ? "text-amber-700" : "text-slate-400"}`
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, this),
                            tab.label
                        ]
                    }, tab.id, true, {
                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-[400px]",
                children: [
                    activeTab === "overview" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-serif text-2xl font-bold text-slate-900 mb-4",
                                        children: "Institutional Profile"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                        lineNumber: 143,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-600 leading-relaxed mb-8",
                                        children: uni.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-serif text-lg font-bold text-slate-900 mb-4",
                                        children: "Regional Context"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                        lineNumber: 148,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-600 leading-relaxed",
                                        children: [
                                            "Located in ",
                                            uni.location,
                                            ", this institution benefits from robust regional infrastructure and academic networks. International students frequently choose this destination for its unique blend of cultural heritage and advanced research facilities.",
                                            uni.hasMedicine && " Its medical faculties are internationally recognized, providing English-medium instruction tailored for global clinical practice."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-1 border border-slate-200 bg-slate-50 p-6 self-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 border-b border-slate-200 pb-2",
                                        children: "Fast Facts"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block text-[10px] text-slate-500 uppercase tracking-wider mb-0.5",
                                                        children: "Location"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                        lineNumber: 162,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-bold text-slate-900",
                                                        children: uni.location
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                lineNumber: 161,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block text-[10px] text-slate-500 uppercase tracking-wider mb-0.5",
                                                        children: "Primary Language"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-bold text-slate-900",
                                                        children: uni.languages[0]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                        lineNumber: 167,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                lineNumber: 165,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block text-[10px] text-slate-500 uppercase tracking-wider mb-0.5",
                                                        children: "Est. Tuition"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-bold text-slate-900 font-mono",
                                                        children: uni.tuition
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                lineNumber: 169,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                lineNumber: 156,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                        lineNumber: 141,
                        columnNumber: 11
                    }, this),
                    activeTab === "metrics" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 md:grid-cols-5 gap-4",
                                children: [
                                    {
                                        label: "Overall Score",
                                        value: uni.overall
                                    },
                                    {
                                        label: "Citations",
                                        value: uni.citations
                                    },
                                    {
                                        label: "Research",
                                        value: uni.research
                                    },
                                    {
                                        label: "Employability",
                                        value: uni.employability
                                    },
                                    {
                                        label: "Intl Diversity",
                                        value: uni.intlStudents
                                    }
                                ].map((metric, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-slate-200 bg-white p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block text-[9px] uppercase font-bold tracking-widest text-slate-400 mb-1",
                                                children: metric.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                lineNumber: 190,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl font-bold font-mono text-slate-900",
                                                children: metric.value.toFixed(1)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                lineNumber: 193,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                        lineNumber: 189,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                lineNumber: 181,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TrendChart, {
                                history: uni.history
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                lineNumber: 201,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                        lineNumber: 180,
                        columnNumber: 11
                    }, this),
                    activeTab === "admissions" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-serif text-2xl font-bold text-slate-900 mb-4",
                                        children: "Core Faculties"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                        lineNumber: 210,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "divide-y divide-slate-100 border-t border-slate-100",
                                        children: uni.subjects.map((sub, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "py-3 flex items-center text-sm text-slate-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                        className: "h-4 w-4 mr-2 text-amber-700"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                        lineNumber: 214,
                                                        columnNumber: 21
                                                    }, this),
                                                    sub
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                lineNumber: 213,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                        lineNumber: 211,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                lineNumber: 209,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-serif text-2xl font-bold text-slate-900 mb-4",
                                        children: "Featured Degree Programs"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                        lineNumber: 222,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "divide-y divide-slate-100 border-t border-slate-100",
                                        children: uni.programs.map((prog, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "py-3 flex items-center justify-between group cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-slate-700 font-semibold group-hover:text-amber-700 transition-colors",
                                                        children: prog
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                        lineNumber: 226,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] text-slate-400 uppercase tracking-widest font-mono group-hover:text-amber-700",
                                                        children: "View"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                        lineNumber: 229,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                                lineNumber: 225,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                        lineNumber: 223,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                                lineNumber: 221,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/UniversityProfile.tsx",
                        lineNumber: 208,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/UniversityProfile.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/UniversityProfile.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/components/feedback/Chatbot.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Chatbot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.mjs [app-ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.mjs [app-ssr] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const BUBBLE_SIZE = 64;
const POS_STORAGE_KEY = "aur_chatbot_position";
const DRAG_THRESHOLD = 8;
function getSafeBounds() {
    if ("TURBOPACK compile-time truthy", 1) {
        return {
            minX: 12,
            minY: 72,
            maxX: 300,
            maxY: 500
        };
    }
    //TURBOPACK unreachable
    ;
    const isMobile = undefined;
    const margin = undefined;
    const topReserve = undefined;
    const bottomReserve = undefined;
}
function getDefaultPosition() {
    const { minX, minY, maxX, maxY } = getSafeBounds();
    const isMobile = ("TURBOPACK compile-time value", "undefined") !== "undefined" && window.innerWidth < 768;
    const x = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : maxX;
    const y = maxY;
    return {
        x: Math.min(maxX, Math.max(minX, x)),
        y: Math.min(maxY, Math.max(minY, y))
    };
}
function clampPosition(pos) {
    const { minX, minY, maxX, maxY } = getSafeBounds();
    return {
        x: Math.min(maxX, Math.max(minX, pos.x)),
        y: Math.min(maxY, Math.max(minY, pos.y))
    };
}
function Chatbot() {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: "welcome",
            sender: "bot",
            text: "Hi there! I am your Asia University Rankings AI Assistant. Ask me about rankings, specific universities, countries, tuition fees, or medical programs!",
            timestamp: new Date()
        }
    ]);
    const [inputVal, setInputVal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isTyping, setIsTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showTooltip, setShowTooltip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 20,
        y: 400
    });
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dragStartPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const pointerStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const hasMoved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const positionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(position);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        positionRef.current = position;
    }, [
        position
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const saved = localStorage.getItem(POS_STORAGE_KEY);
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                setPosition(clampPosition(parsed));
                return;
            } catch  {
            /* use default */ }
        }
        setPosition(getDefaultPosition());
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onResize = ()=>setPosition((p)=>clampPosition(p));
        window.addEventListener("resize", onResize);
        return ()=>window.removeEventListener("resize", onResize);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    }, [
        messages,
        isTyping
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setTimeout(()=>setShowTooltip(false), 6000);
        return ()=>clearTimeout(timer);
    }, []);
    const persistPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((pos)=>{
        localStorage.setItem(POS_STORAGE_KEY, JSON.stringify(pos));
    }, []);
    const handlePointerDown = (e)=>{
        e.currentTarget.setPointerCapture(e.pointerId);
        setIsDragging(true);
        hasMoved.current = false;
        dragStartPos.current = {
            ...positionRef.current
        };
        pointerStart.current = {
            x: e.clientX,
            y: e.clientY
        };
    };
    const handlePointerMove = (e)=>{
        if (!isDragging) return;
        const dx = e.clientX - pointerStart.current.x;
        const dy = e.clientY - pointerStart.current.y;
        if (Math.abs(dx) + Math.abs(dy) > DRAG_THRESHOLD) {
            hasMoved.current = true;
        }
        const next = clampPosition({
            x: dragStartPos.current.x + dx,
            y: dragStartPos.current.y + dy
        });
        setPosition(next);
    };
    const handlePointerUp = (e)=>{
        if (e.currentTarget.hasPointerCapture(e.pointerId)) {
            e.currentTarget.releasePointerCapture(e.pointerId);
        }
        setIsDragging(false);
        persistPosition(positionRef.current);
        if (!hasMoved.current) {
            setIsOpen((open)=>!open);
            setShowTooltip(false);
        }
    };
    const getBotResponse = (input)=>{
        const query = input.toLowerCase().trim();
        if (query.includes("hello") || query.includes("hi") || query.includes("hey")) {
            return "Hello! How can I help you today? You can ask me about regional admissions, tuition rankings, or specific subjects like engineering/medicine.";
        }
        const matchedUnis = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOCK_UNIVERSITIES"].filter((uni)=>query.includes(uni.name.toLowerCase()) || query.includes(uni.id.toLowerCase()) || uni.id === "nus" && query.includes("nus") || uni.id === "hku" && query.includes("hku") || uni.id === "snu" && query.includes("snu") || uni.id === "ntu" && query.includes("ntu") || uni.id === "kaist" && query.includes("kaist") || uni.id === "cuhk" && query.includes("cuhk") || uni.id === "iisc" && query.includes("iisc") || uni.id === "iit" && query.includes("iit") || query.includes("tashkent medical") && uni.id === "tashkent-med");
        if (matchedUnis.length > 0) {
            const uni = matchedUnis[0];
            return `**${uni.name}** (${uni.location})
• **Asia Standing Rank**: #${uni.history[0]}
• **Percentile Score**: ${uni.overall}/100
• **Research Citations Index**: ${uni.citations}/100
• **Annual Tuition**: ${uni.tuition}
• **Popular Subjects**: ${uni.subjects.slice(0, 3).join(", ")}
• **Medicine Program Taught**: ${uni.hasMedicine ? "Yes (English-medium)" : "No"}

*${uni.description}*`;
        }
        if (query.includes("medicine") || query.includes("medical") || query.includes("mbbs") || query.includes("md") || query.includes("doctor")) {
            const medUnis = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOCK_UNIVERSITIES"].filter((u)=>u.hasMedicine);
            return `Here are the top indexed universities offering **Medical / MD / MBBS Programs**:
${medUnis.slice(0, 5).map((u)=>`• **${u.name}** (Rank #${u.history[0]}, ${u.location}) - Tuition: ${u.tuition}`).join("\n")}
All Central Asian options feature WHO-recognized, English-medium MBBS courses for international students.`;
        }
        if (query.includes("uzbekistan") || query.includes("tashkent") || query.includes("samarkand") || query.includes("fergana") || query.includes("bukhara")) {
            const uzUnis = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOCK_UNIVERSITIES"].filter((u)=>u.location.toLowerCase() === "uzbekistan");
            return `**Uzbekistan Admissions & Universities**:
${uzUnis.map((u)=>`• **${u.name}** (Rank #${u.history[0]}) - Estimated Tuition: ${u.tuition}`).join("\n")}
These medical schools hosts over 2,000 international scholars and provide intensive clinical anatomy practice.`;
        }
        if (query.includes("japan") || query.includes("tokyo") || query.includes("kyoto") || query.includes("osaka") || query.includes("tsukuba")) {
            const jpUnis = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOCK_UNIVERSITIES"].filter((u)=>u.location.toLowerCase() === "japan");
            return `**Top Research Japanese Universities**:
${jpUnis.map((u)=>`• **${u.name}** (Rank #${u.history[0]}) - Citations: ${u.citations}/100`).join("\n")}
These public institutions are highly competitive and offer excellent research facilities.`;
        }
        if (query.includes("singapore") || query.includes("nus") || query.includes("ntu")) {
            const sgUnis = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOCK_UNIVERSITIES"].filter((u)=>u.location.toLowerCase() === "singapore");
            return `**Singapore Global Academic Nodes**:
${sgUnis.map((u)=>`• **${u.name}** (Rank #${u.history[0]}) - Citation Index: ${u.citations}/100. Tuition is higher (approx. ${u.tuition}), but global merit-based scholarships are available.`).join("\n")}`;
        }
        if (query.includes("india") || query.includes("iit") || query.includes("iisc") || query.includes("bombay") || query.includes("delhi")) {
            const inUnis = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOCK_UNIVERSITIES"].filter((u)=>u.location.toLowerCase() === "india");
            return `**Top Indian Institutions**:
${inUnis.map((u)=>`• **${u.name}** (Rank #${u.history[0]}) - Citations: ${u.citations}/100 (IISc holds the world's highest citations-per-faculty score!)`).join("\n")}`;
        }
        if (query.includes("tuition") || query.includes("fee") || query.includes("cheap") || query.includes("cost") || query.includes("expensive") || query.includes("price")) {
            const getTuitionVal = (t)=>{
                const num = parseInt(t.replace(/[^0-9]/g, ""));
                return isNaN(num) ? 99999 : num;
            };
            const sorted = [
                ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOCK_UNIVERSITIES"]
            ].sort((a, b)=>getTuitionVal(a.tuition) - getTuitionVal(b.tuition));
            return `**Tuition Estimates Q&A**:
*Budget-friendly Medical/Academic Nodes:*
${sorted.slice(0, 5).map((u)=>`• **${u.name}** (${u.location}) - **${u.tuition}**`).join("\n")}

*High-tier Premium Universities:*
${sorted.slice(-3).reverse().map((u)=>`• **${u.name}** (${u.location}) - **${u.tuition}**`).join("\n")}`;
        }
        if (query.includes("rank") || query.includes("best") || query.includes("top")) {
            const top5 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOCK_UNIVERSITIES"].slice(0, 5);
            return `Here are the current **Top 5 Asia Universities** based on our audited indexes:
${top5.map((u, i)=>`${i + 1}. **${u.name}** (Rank #${u.history[0]}, ${u.location}) - Index Score: ${u.overall}`).join("\n")}`;
        }
        if (query.includes("score") || query.includes("calculate") || query.includes("weight") || query.includes("formula") || query.includes("metrics")) {
            return `Our **Asia University Rankings Index** evaluates institutions across 5 key weight metrics:
• **Citations Index** (30% weight) - Citation density output
• **Research Output** (30% weight) - Peer-audited publications
• **Employability Rate** (20% weight) - Placements
• **Teaching Environment** (10% weight) - Faculty ratio
• **International Diversity** (10% weight) - Student diversity

You can dynamically adjust these weights in the **Rankings Engine** page!`;
        }
        return "I couldn't find a direct matches in our database. Try asking about: 'medical programs', 'Uzbekistan tuition', 'top 5 universities', or specific names like 'Tsinghua' or 'NUS'!";
    };
    const handleSend = (text)=>{
        if (!text.trim()) return;
        const userMsg = {
            id: Math.random().toString(),
            sender: "user",
            text,
            timestamp: new Date()
        };
        setMessages((prev)=>[
                ...prev,
                userMsg
            ]);
        setInputVal("");
        setIsTyping(true);
        setTimeout(()=>{
            const replyText = getBotResponse(text);
            const botMsg = {
                id: Math.random().toString(),
                sender: "bot",
                text: replyText,
                timestamp: new Date()
            };
            setMessages((prev)=>[
                    ...prev,
                    botMsg
                ]);
            setIsTyping(false);
        }, 800);
    };
    const formatText = (text)=>{
        return text.split("\n").map((line, i)=>{
            const content = line;
            const boldRegex = /\*\*(.*?)\*\*/g;
            const italicRegex = /\*(.*?)\*/g;
            const tempText = content.replace(boldRegex, "<b>$1</b>").replace(italicRegex, "<i>$1</i>");
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-1 leading-relaxed text-xs",
                dangerouslySetInnerHTML: {
                    __html: tempText.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/&lt;b&gt;(.*?)&lt;\/b&gt;/g, "<strong>$1</strong>").replace(/&lt;i&gt;(.*?)&lt;\/i&gt;/g, "<em>$1</em>")
                }
            }, i, false, {
                fileName: "[project]/src/app/components/feedback/Chatbot.tsx",
                lineNumber: 349,
                columnNumber: 9
            }, this);
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                "aria-label": isOpen ? "Close assistant" : "Open assistant — drag to move",
                onPointerDown: handlePointerDown,
                onPointerMove: handlePointerMove,
                onPointerUp: handlePointerUp,
                onPointerCancel: handlePointerUp,
                style: {
                    left: position.x,
                    top: position.y,
                    width: BUBBLE_SIZE,
                    height: BUBBLE_SIZE,
                    touchAction: "none"
                },
                className: `fixed z-[55] rounded-full select-none transition-shadow duration-200 ${isDragging ? "cursor-grabbing scale-105 shadow-2xl" : "cursor-grab"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full h-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `w-full h-full rounded-full flex items-center justify-center border shadow-md transition-colors ${isOpen ? "bg-[#141820] border-[#9A7B4F] text-[#F6F3EE]" : "bg-[#141820] border-[#DDD8CF] text-[#C4A574] hover:border-[#9A7B4F]"}`,
                            children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-6 w-6"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/feedback/Chatbot.tsx",
                                lineNumber: 395,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                className: "h-7 w-7"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/feedback/Chatbot.tsx",
                                lineNumber: 397,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/feedback/Chatbot.tsx",
                            lineNumber: 387,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/feedback/Chatbot.tsx",
                        lineNumber: 386,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: showTooltip && !isOpen && !isDragging && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                            initial: {
                                opacity: 0,
                                y: 4
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0
                            },
                            className: "absolute left-full ml-3 top-1/2 -translate-y-1/2 w-36 hidden sm:block bg-[#141820] text-[#F6F3EE] text-[10px] font-medium tracking-wide px-3 py-2 shadow-lg pointer-events-none",
                            children: "Drag anywhere · Tap to chat"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/feedback/Chatbot.tsx",
                            lineNumber: 404,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/feedback/Chatbot.tsx",
                        lineNumber: 402,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/feedback/Chatbot.tsx",
                lineNumber: 368,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 z-[54] pointer-events-none flex items-end justify-center sm:items-end sm:justify-end p-4 sm:p-6 md:p-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 40,
                            scale: 0.96
                        },
                        animate: {
                            opacity: 1,
                            y: 0,
                            scale: 1
                        },
                        exit: {
                            opacity: 0,
                            y: 24,
                            scale: 0.96
                        },
                        transition: {
                            duration: 0.22,
                            ease: "easeOut"
                        },
                        className: "pointer-events-auto w-full max-w-sm sm:max-w-md h-[min(480px,calc(100vh-120px))] bg-white border border-slate-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden mb-20 md:mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 border-b border-slate-100 bg-[#FAFAFA] flex items-center justify-between shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-9 h-9 rounded-full bg-[#0B1020] flex items-center justify-center text-[#F97316]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                                    className: "h-5 w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/feedback/Chatbot.tsx",
                                                    lineNumber: 429,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/feedback/Chatbot.tsx",
                                                lineNumber: 428,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-[family-name:var(--font-display)] text-sm font-bold text-[#111827]",
                                                        children: "AUR Intelligence Assistant"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/feedback/Chatbot.tsx",
                                                        lineNumber: 432,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[9px] uppercase tracking-widest text-[#6B7280] font-semibold",
                                                        children: "Institutional index mode"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/feedback/Chatbot.tsx",
                                                        lineNumber: 435,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/feedback/Chatbot.tsx",
                                                lineNumber: 431,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/feedback/Chatbot.tsx",
                                        lineNumber: 427,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setIsOpen(false),
                                        "aria-label": "Close chat",
                                        className: "p-2 rounded-lg text-[#6B7280] hover:bg-slate-100 hover:text-[#111827] transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/feedback/Chatbot.tsx",
                                            lineNumber: 446,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/feedback/Chatbot.tsx",
                                        lineNumber: 440,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/feedback/Chatbot.tsx",
                                lineNumber: 426,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto p-4 space-y-4",
                                children: [
                                    messages.map((msg)=>{
                                        const isBot = msg.sender === "bot";
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `flex ${isBot ? "justify-start" : "justify-end"} items-start gap-2`,
                                            children: [
                                                isBot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-7 h-7 rounded-full bg-[#FAFAFA] border border-slate-200 flex items-center justify-center shrink-0 text-[#F97316]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/feedback/Chatbot.tsx",
                                                        lineNumber: 460,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/feedback/Chatbot.tsx",
                                                    lineNumber: 459,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `max-w-[82%] rounded-2xl px-3.5 py-2.5 text-xs ${isBot ? "bg-[#FAFAFA] text-[#111827] border border-slate-100 rounded-tl-sm" : "bg-[#0B1020] text-white rounded-tr-sm"}`,
                                                    children: isBot ? formatText(msg.text) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: msg.text
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/feedback/Chatbot.tsx",
                                                        lineNumber: 470,
                                                        columnNumber: 57
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/feedback/Chatbot.tsx",
                                                    lineNumber: 463,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, msg.id, true, {
                                            fileName: "[project]/src/app/components/feedback/Chatbot.tsx",
                                            lineNumber: 454,
                                            columnNumber: 21
                                        }, this);
                                    }),
                                    isTyping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-start items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-7 h-7 rounded-full bg-[#FAFAFA] border border-slate-200 flex items-center justify-center shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                                    className: "h-4 w-4 text-[#F97316]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/feedback/Chatbot.tsx",
                                                    lineNumber: 479,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/feedback/Chatbot.tsx",
                                                lineNumber: 478,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-[#FAFAFA] border border-slate-100 rounded-2xl px-4 py-3 flex gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-1.5 h-1.5 rounded-full bg-[#6B7280] animate-bounce"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/feedback/Chatbot.tsx",
                                                        lineNumber: 482,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-1.5 h-1.5 rounded-full bg-[#6B7280] animate-bounce [animation-delay:150ms]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/feedback/Chatbot.tsx",
                                                        lineNumber: 483,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-1.5 h-1.5 rounded-full bg-[#6B7280] animate-bounce [animation-delay:300ms]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/feedback/Chatbot.tsx",
                                                        lineNumber: 484,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/feedback/Chatbot.tsx",
                                                lineNumber: 481,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/feedback/Chatbot.tsx",
                                        lineNumber: 477,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: messagesEndRef
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/feedback/Chatbot.tsx",
                                        lineNumber: 488,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/feedback/Chatbot.tsx",
                                lineNumber: 450,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-2 flex flex-wrap gap-1.5 border-t border-slate-100 bg-[#FAFAFA] shrink-0",
                                children: [
                                    "Top 5 Universities",
                                    "MBBS in Uzbekistan",
                                    "NUS vs NTU",
                                    "Weight formula"
                                ].map((chip)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>handleSend(chip),
                                        className: "text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 border border-slate-200 bg-white hover:border-[#0B1020] text-[#6B7280] hover:text-[#111827] rounded-full transition-colors",
                                        children: chip
                                    }, chip, false, {
                                        fileName: "[project]/src/app/components/feedback/Chatbot.tsx",
                                        lineNumber: 494,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/feedback/Chatbot.tsx",
                                lineNumber: 491,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: (e)=>{
                                    e.preventDefault();
                                    handleSend(inputVal);
                                },
                                className: "p-3 border-t border-slate-100 bg-white flex items-center gap-2 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: inputVal,
                                        onChange: (e)=>setInputVal(e.target.value),
                                        placeholder: "Ask rankings assistant...",
                                        className: "flex-grow bg-[#FAFAFA] border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#2563EB] text-[#111827]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/feedback/Chatbot.tsx",
                                        lineNumber: 513,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: !inputVal.trim(),
                                        className: "p-2.5 bg-[#0B1020] hover:bg-[#111827] text-white disabled:opacity-40 rounded-xl transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/feedback/Chatbot.tsx",
                                            lineNumber: 525,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/feedback/Chatbot.tsx",
                                        lineNumber: 520,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/feedback/Chatbot.tsx",
                                lineNumber: 506,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/feedback/Chatbot.tsx",
                        lineNumber: 419,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/feedback/Chatbot.tsx",
                    lineNumber: 418,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/feedback/Chatbot.tsx",
                lineNumber: 416,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/app/AppContent.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AppContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$navbar$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/navbar/Navbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$feedback$2f$ToastContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/feedback/ToastContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$sidebar$2f$Sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/sidebar/Sidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$mobile$2f$MobileMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/mobile/MobileMenu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Homepage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Homepage.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$RankingsEngine$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/RankingsEngine.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ComparisonDock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/ComparisonDock.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$UniversityProfile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/UniversityProfile.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$feedback$2f$Chatbot$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/feedback/Chatbot.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$navigation$2f$SidebarContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/navigation/SidebarContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.mjs [app-ssr] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bookmark.mjs [app-ssr] (ecmascript) <export default as Bookmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.mjs [app-ssr] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.mjs [app-ssr] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.mjs [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-alert.mjs [app-ssr] (ecmascript) <export default as ShieldAlert>");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function AppContent() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const { showToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$feedback$2f$ToastContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const { activeView, handleViewChange, selectedUniId, setSelectedUniId, theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$navigation$2f$SidebarContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSidebar"])();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedUniIds, setSelectedUniIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Local settings toggles state
    const [settingsAutoRecalc, setSettingsAutoRecalc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [settingsRealtimeSearch, setSettingsRealtimeSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [settingsAnalyticsTelemetry, setSettingsAnalyticsTelemetry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Derived state from URL (synced with context)
    const view = activeView;
    const id = selectedUniId;
    const viewKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (view === "profile" && id) return `profile-${id}`;
        return view;
    }, [
        view,
        id
    ]);
    // Sync initial search query if present in URL
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const q = searchParams.get("search");
        if (q) setSearchQuery(q);
    }, [
        searchParams
    ]);
    const handleToggleCompare = (uniId)=>{
        setSelectedUniIds((prev)=>{
            if (prev.includes(uniId)) return prev.filter((id)=>id !== uniId);
            if (prev.length >= 4) {
                showToast("You can compare a maximum of 4 universities at a time.", "warning");
                return prev;
            }
            return [
                ...prev,
                uniId
            ];
        });
    };
    const handleRemoveCompare = (uniId)=>{
        setSelectedUniIds((prev)=>prev.filter((id)=>id !== uniId));
    };
    const handleClearCompare = ()=>{
        setSelectedUniIds([]);
    };
    const handleUniversitySelect = (uniId)=>{
        setSelectedUniId(uniId);
    };
    const handleBackToRankings = ()=>{
        setSelectedUniId(null);
    };
    const handleArticleSelect = (article)=>{
        showToast(`Opening article: ${article.title}`, "info");
    };
    // Get selected universities for Saved view
    const savedUniversities = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOCK_UNIVERSITIES"].filter((u)=>selectedUniIds.includes(u.id));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `aur-page flex min-h-screen flex-col transition-colors duration-300 ${theme === "dark" ? "text-slate-100 dark" : "text-slate-900"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$navbar$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/AppContent.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-grow flex w-full max-w-full px-0 sm:px-4 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$sidebar$2f$Sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/AppContent.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1 flex flex-col min-w-0 p-4 pb-20 md:pb-6 max-w-[1600px] w-full mx-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            mode: "wait",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 10
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                exit: {
                                    opacity: 0,
                                    y: -6
                                },
                                transition: {
                                    duration: 0.22,
                                    ease: "easeOut"
                                },
                                className: "flex flex-col flex-grow",
                                children: [
                                    view === "home" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Homepage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        onSearchSubmit: (q)=>setSearchQuery(q),
                                        onUniversitySelect: handleUniversitySelect,
                                        onArticleSelect: handleArticleSelect,
                                        onViewChange: handleViewChange
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/AppContent.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this),
                                    view === "rankings" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$RankingsEngine$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        searchQuery: searchQuery,
                                        onSearchQueryChange: setSearchQuery,
                                        selectedUniIds: selectedUniIds,
                                        onToggleCompare: handleToggleCompare,
                                        onUniversitySelect: handleUniversitySelect
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/AppContent.tsx",
                                        lineNumber: 117,
                                        columnNumber: 13
                                    }, this),
                                    view === "profile" && id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$UniversityProfile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        universityId: id,
                                        onBack: handleBackToRankings,
                                        onViewChange: handleViewChange
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/AppContent.tsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this),
                                    view === "analytics" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6 border border-slate-200 dark:border-cyber-border rounded-xl bg-slate-50/50 dark:bg-cyber-dark/40 shadow-sm space-y-6 animate-fadeIn",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] uppercase font-bold tracking-widest text-amber-700 dark:text-cyber-yellow",
                                                        children: "Academic Intelligence"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/AppContent.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "font-serif text-2xl font-bold text-slate-900 dark:text-white mt-0.5",
                                                        children: "Institutional Analytics Hub"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/AppContent.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed",
                                                        children: "Real-time telemetric aggregation across audited South, East, and Central Asian university databases."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/AppContent.tsx",
                                                        lineNumber: 144,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/AppContent.tsx",
                                                lineNumber: 137,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
                                                children: [
                                                    {
                                                        title: "Index Institutions",
                                                        val: "45",
                                                        desc: "Audited & Verified",
                                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"]
                                                    },
                                                    {
                                                        title: "Average Score",
                                                        val: "84.6%",
                                                        desc: "Calculated overall metrics",
                                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"]
                                                    },
                                                    {
                                                        title: "Top Region",
                                                        val: "China / Japan",
                                                        desc: "Highest citation output",
                                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"]
                                                    },
                                                    {
                                                        title: "Medicine Programs",
                                                        val: "62%",
                                                        desc: "Offer English MD courses",
                                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"]
                                                    }
                                                ].map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-4 border border-slate-200/60 dark:border-slate-800 bg-white dark:bg-cyber-gray rounded-lg flex items-center justify-between shadow-xs hover:border-slate-350 dark:hover:border-cyber-yellow/40 transition-colors",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider block",
                                                                        children: stat.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/AppContent.tsx",
                                                                        lineNumber: 162,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xl font-bold text-slate-900 dark:text-white block mt-1",
                                                                        children: stat.val
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/AppContent.tsx",
                                                                        lineNumber: 165,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[9px] text-slate-400 dark:text-slate-550 block mt-0.5",
                                                                        children: stat.desc
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/AppContent.tsx",
                                                                        lineNumber: 168,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/AppContent.tsx",
                                                                lineNumber: 161,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(stat.icon, {
                                                                className: "h-8 w-8 text-slate-300 dark:text-cyber-yellow/20"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/AppContent.tsx",
                                                                lineNumber: 172,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, stat.title, true, {
                                                        fileName: "[project]/src/app/AppContent.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/AppContent.tsx",
                                                lineNumber: 150,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 border border-slate-200/60 dark:border-slate-800 bg-white dark:bg-cyber-gray rounded-lg",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider block mb-4",
                                                        children: "Citation Density Output Index (5-Year Progression)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/AppContent.tsx",
                                                        lineNumber: 179,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-48 w-full flex items-end justify-between gap-2 pt-4",
                                                        children: [
                                                            45,
                                                            62,
                                                            58,
                                                            80,
                                                            95
                                                        ].map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1 flex flex-col items-center gap-2 group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-[9px] font-mono text-slate-400 dark:text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity",
                                                                        children: [
                                                                            h,
                                                                            "%"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/AppContent.tsx",
                                                                        lineNumber: 185,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-full bg-slate-900 dark:bg-cyber-yellow rounded-t transition-all duration-500 hover:brightness-110",
                                                                        style: {
                                                                            height: `${h}%`
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/AppContent.tsx",
                                                                        lineNumber: 188,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] font-mono text-slate-400 dark:text-slate-550 mt-1",
                                                                        children: 2022 + i
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/AppContent.tsx",
                                                                        lineNumber: 192,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, i, true, {
                                                                fileName: "[project]/src/app/AppContent.tsx",
                                                                lineNumber: 184,
                                                                columnNumber: 21
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/AppContent.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/AppContent.tsx",
                                                lineNumber: 178,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/AppContent.tsx",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, this),
                                    view === "saved" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6 border border-slate-200 dark:border-cyber-border rounded-xl bg-slate-50/50 dark:bg-cyber-dark/40 shadow-sm space-y-6 animate-fadeIn",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] uppercase font-bold tracking-widest text-amber-700 dark:text-cyber-yellow",
                                                        children: "Personal Database"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/AppContent.tsx",
                                                        lineNumber: 206,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "font-serif text-2xl font-bold text-slate-900 dark:text-white mt-0.5",
                                                        children: "Saved Comparison Nodes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/AppContent.tsx",
                                                        lineNumber: 209,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed",
                                                        children: "List of institutions currently pinned inside the analysis comparators dock."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/AppContent.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/AppContent.tsx",
                                                lineNumber: 205,
                                                columnNumber: 15
                                            }, this),
                                            savedUniversities.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                children: savedUniversities.map((uni)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        onClick: ()=>handleUniversitySelect(uni.id),
                                                        className: "p-4 border border-slate-200 dark:border-slate-800 bg-white dark:bg-cyber-gray rounded-lg hover:border-slate-350 dark:hover:border-cyber-yellow transition-all duration-150 cursor-pointer flex justify-between items-center group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                        className: "font-bold text-sm text-slate-900 dark:text-white group-hover:text-amber-700 dark:group-hover:text-cyber-yellow transition-colors",
                                                                        children: uni.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/AppContent.tsx",
                                                                        lineNumber: 226,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] text-slate-450 dark:text-slate-500 block mt-1",
                                                                        children: [
                                                                            uni.location,
                                                                            " • ",
                                                                            uni.tuition
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/AppContent.tsx",
                                                                        lineNumber: 229,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/AppContent.tsx",
                                                                lineNumber: 225,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-right",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-mono text-lg font-bold text-slate-900 dark:text-white block",
                                                                        children: uni.overall.toFixed(1)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/AppContent.tsx",
                                                                        lineNumber: 234,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[9px] uppercase tracking-wider text-slate-400 dark:text-slate-550 block",
                                                                        children: "Score"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/AppContent.tsx",
                                                                        lineNumber: 237,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/AppContent.tsx",
                                                                lineNumber: 233,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, uni.id, true, {
                                                        fileName: "[project]/src/app/AppContent.tsx",
                                                        lineNumber: 220,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/AppContent.tsx",
                                                lineNumber: 218,
                                                columnNumber: 17
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-8 border border-dashed border-slate-200 dark:border-slate-800 rounded-lg text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__["Bookmark"], {
                                                        className: "h-8 w-8 text-slate-300 dark:text-slate-700 mx-auto mb-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/AppContent.tsx",
                                                        lineNumber: 246,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-500 dark:text-slate-400",
                                                        children: "No universities are currently added to comparison."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/AppContent.tsx",
                                                        lineNumber: 247,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleViewChange("rankings"),
                                                        className: "mt-4 inline-flex items-center justify-center border border-slate-900 dark:border-cyber-yellow bg-slate-900 dark:bg-transparent px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white dark:text-cyber-yellow hover:bg-slate-800 dark:hover:bg-cyber-yellow dark:hover:text-cyber-black transition-colors",
                                                        children: "Go to Rankings Engine"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/AppContent.tsx",
                                                        lineNumber: 250,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/AppContent.tsx",
                                                lineNumber: 245,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/AppContent.tsx",
                                        lineNumber: 204,
                                        columnNumber: 13
                                    }, this),
                                    view === "settings" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6 border border-slate-200 dark:border-cyber-border rounded-xl bg-slate-50/50 dark:bg-cyber-dark/40 shadow-sm space-y-6 animate-fadeIn",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] uppercase font-bold tracking-widest text-amber-700 dark:text-cyber-yellow",
                                                        children: "System Diagnostics"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/AppContent.tsx",
                                                        lineNumber: 265,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "font-serif text-2xl font-bold text-slate-900 dark:text-white mt-0.5",
                                                        children: "Engine Configuration Console"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/AppContent.tsx",
                                                        lineNumber: 268,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed",
                                                        children: "Configure real-time arithmetic models, indexing parameters, and telemetric UI modules."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/AppContent.tsx",
                                                        lineNumber: 271,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/AppContent.tsx",
                                                lineNumber: 264,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4 max-w-xl",
                                                children: [
                                                    {
                                                        title: "Automatic Recalculations",
                                                        desc: "Instantly re-evaluate all institution rankings as weights variables are adjusted.",
                                                        state: settingsAutoRecalc,
                                                        setter: setSettingsAutoRecalc
                                                    },
                                                    {
                                                        title: "Real-time Search Queries",
                                                        desc: "Perform dynamic matching algorithm searches as letters are keyed in.",
                                                        state: settingsRealtimeSearch,
                                                        setter: setSettingsRealtimeSearch
                                                    },
                                                    {
                                                        title: "Advanced Analytics Telemetry",
                                                        desc: "Aggregate diagnostic logging data and rendering benchmarks for support.",
                                                        state: settingsAnalyticsTelemetry,
                                                        setter: setSettingsAnalyticsTelemetry
                                                    }
                                                ].map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-4 border border-slate-200/60 dark:border-slate-800 bg-white dark:bg-cyber-gray rounded-lg flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "pr-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "block font-bold text-sm text-slate-900 dark:text-white",
                                                                        children: option.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/AppContent.tsx",
                                                                        lineNumber: 303,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "block text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-normal",
                                                                        children: option.desc
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/AppContent.tsx",
                                                                        lineNumber: 306,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/AppContent.tsx",
                                                                lineNumber: 302,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>option.setter(!option.state),
                                                                className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${option.state ? "bg-slate-900 dark:bg-cyber-yellow" : "bg-slate-200 dark:bg-slate-800"}`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white dark:bg-cyber-black shadow-xs ring-0 transition duration-200 ease-in-out ${option.state ? "translate-x-5" : "translate-x-0"}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/AppContent.tsx",
                                                                    lineNumber: 320,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/AppContent.tsx",
                                                                lineNumber: 312,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, option.title, true, {
                                                        fileName: "[project]/src/app/AppContent.tsx",
                                                        lineNumber: 298,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/AppContent.tsx",
                                                lineNumber: 277,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pt-4 border-t border-slate-200 dark:border-slate-800 max-w-xl",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center space-x-2 text-amber-700 dark:text-cyber-yellow mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                                                                className: "h-4.5 w-4.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/AppContent.tsx",
                                                                lineNumber: 333,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold text-xs uppercase tracking-wider",
                                                                children: "Danger Zone"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/AppContent.tsx",
                                                                lineNumber: 334,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/AppContent.tsx",
                                                        lineNumber: 332,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            if (confirm("Reset layout configs and clear filters?")) {
                                                                localStorage.clear();
                                                                window.location.reload();
                                                            }
                                                        },
                                                        className: "bg-red-50 hover:bg-red-100 border border-red-200 text-red-750 dark:bg-red-950/20 dark:hover:bg-red-950/40 dark:border-red-900 dark:text-red-400 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded transition-colors",
                                                        children: "Reset Local Storage Cache"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/AppContent.tsx",
                                                        lineNumber: 336,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/AppContent.tsx",
                                                lineNumber: 331,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/AppContent.tsx",
                                        lineNumber: 263,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, viewKey, true, {
                                fileName: "[project]/src/app/AppContent.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/AppContent.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/AppContent.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/AppContent.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$mobile$2f$MobileMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/AppContent.tsx",
                lineNumber: 357,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ComparisonDock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                selectedIds: selectedUniIds,
                onRemove: handleRemoveCompare,
                onClearAll: handleClearCompare,
                onUniversitySelect: handleUniversitySelect
            }, void 0, false, {
                fileName: "[project]/src/app/AppContent.tsx",
                lineNumber: 359,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$feedback$2f$Chatbot$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/AppContent.tsx",
                lineNumber: 366,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "border-t border-slate-200 dark:border-cyber-border bg-slate-50 dark:bg-cyber-dark/80 py-8 transition-colors duration-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-full px-4 sm:px-6 lg:px-8 text-center text-[10px] uppercase font-bold tracking-widest text-slate-400 dark:text-slate-500",
                    children: "© 2026 Asia University Rankings | Official Analytical Data Engine"
                }, void 0, false, {
                    fileName: "[project]/src/app/AppContent.tsx",
                    lineNumber: 369,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/AppContent.tsx",
                lineNumber: 368,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/AppContent.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_app_0fg5st8._.js.map