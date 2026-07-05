(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/components/TrendChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TrendChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function TrendChart({ history }) {
    // history is an array of ranks from current year back to 5 years ago
    // e.g., [1, 2, 3, 4, 5] (where index 0 is 2026, index 4 is 2022)
    // We want to plot from left to right (past to present): 2022 -> 2026
    const data = [
        ...history
    ].reverse(); // Now index 0 is 2022, index 4 is 2026
    const years = [
        2022,
        2023,
        2024,
        2025,
        2026
    ];
    // SVG dimensions and padding
    const width = 600;
    const height = 300;
    const padding = 40;
    // Determine min and max ranks to scale the Y-axis
    // Rank 1 is at the TOP (highest Y value conceptually, but smallest pixel value)
    const maxRank = Math.max(...data, 10); // Ensure at least 10 for scale
    const minRank = Math.max(1, Math.min(...data) - 5); // Add some padding to the top
    // Function to calculate X and Y coordinates
    const getX = (index)=>padding + index * (width - padding * 2) / (data.length - 1);
    const getY = (value)=>padding + (value - minRank) / (maxRank - minRank) * (height - padding * 2);
    // Generate SVG path string
    const pathData = data.map((value, index)=>{
        const x = getX(index);
        const y = getY(value);
        return `${index === 0 ? "M" : "L"} ${x} ${y}`;
    }).join(" ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full overflow-x-auto border border-slate-200 bg-white p-6 shadow-sm font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "font-serif text-lg font-bold text-slate-900",
                        children: "5-Year Ranking Trajectory"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/TrendChart.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-slate-500",
                        children: "Historical performance across the Asia University Index"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/TrendChart.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/TrendChart.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-[500px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: `0 0 ${width} ${height}`,
                    className: "w-full h-auto",
                    children: [
                        [
                            0,
                            0.25,
                            0.5,
                            0.75,
                            1
                        ].map((ratio)=>{
                            const y = padding + ratio * (height - padding * 2);
                            const rankLabel = Math.round(minRank + ratio * (maxRank - minRank));
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: padding,
                                        y1: y,
                                        x2: width - padding,
                                        y2: y,
                                        stroke: "#e2e8f0",
                                        strokeWidth: "1",
                                        strokeDasharray: "4 4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/TrendChart.tsx",
                                        lineNumber: 53,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: padding - 10,
                                        y: y + 4,
                                        textAnchor: "end",
                                        className: "fill-slate-400 text-[10px] font-mono",
                                        children: [
                                            "#",
                                            rankLabel
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/TrendChart.tsx",
                                        lineNumber: 54,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, ratio, true, {
                                fileName: "[project]/src/app/components/TrendChart.tsx",
                                lineNumber: 52,
                                columnNumber: 15
                            }, this);
                        }),
                        years.map((year, index)=>{
                            const x = getX(index);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: x,
                                y: height - padding + 20,
                                textAnchor: "middle",
                                className: "fill-slate-500 text-[10px] font-bold",
                                children: year
                            }, year, false, {
                                fileName: "[project]/src/app/components/TrendChart.tsx",
                                lineNumber: 65,
                                columnNumber: 15
                            }, this);
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: pathData,
                            fill: "none",
                            stroke: "#0f172a",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/TrendChart.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this),
                        data.map((value, index)=>{
                            const x = getX(index);
                            const y = getY(value);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                className: "group cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: x,
                                        cy: y,
                                        r: "5",
                                        fill: "#ffffff",
                                        stroke: "#b45309",
                                        strokeWidth: "2",
                                        className: "transition-all duration-200 group-hover:r-6 group-hover:fill-amber-700"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/TrendChart.tsx",
                                        lineNumber: 80,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: x,
                                        y: y - 15,
                                        textAnchor: "middle",
                                        className: "fill-amber-700 text-[10px] font-bold font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-200",
                                        children: [
                                            "#",
                                            value
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/TrendChart.tsx",
                                        lineNumber: 82,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/src/app/components/TrendChart.tsx",
                                lineNumber: 79,
                                columnNumber: 15
                            }, this);
                        })
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/TrendChart.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/TrendChart.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/TrendChart.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_c = TrendChart;
var _c;
__turbopack_context__.k.register(_c, "TrendChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/TrendChart.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/components/TrendChart.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_app_components_TrendChart_tsx_0tlu3fz._.js.map