"use client";

import React from "react";
import Link from "next/link";
import { useNewsData } from "../hooks/useNewsData";
import { ArrowRight, Zap, Clock, Globe } from "lucide-react";

export default function NewsFlashWidget() {
  const { news, loading } = useNewsData();

  if (loading) {
    return (
      <div className="w-full bg-white border border-gray-200 rounded-[2rem] p-8 lg:p-14 shadow-2xl overflow-hidden relative">
        <div className="animate-pulse space-y-8 relative z-10">
          <div className="h-12 w-64 bg-gray-200 rounded-xl"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-72 bg-gray-200 rounded-2xl"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white border border-gray-200 rounded-[2rem] p-8 lg:p-14 shadow-xl relative overflow-hidden group">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none transition-all duration-700 group-hover:bg-amber-500/15"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4 pointer-events-none transition-all duration-700 group-hover:bg-blue-500/15"></div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 relative z-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gray-100 text-[#94061e] p-1.5 rounded-lg">
              <Zap className="h-4 w-4" fill="currentColor" />
            </div>
            <span className="text-[12px] font-black uppercase tracking-[0.2em] text-[#94061e]">
              Live Intelligence
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black tracking-tight">
            News <span className="text-gray-400">Flash</span>
          </h2>
        </div>
        <Link 
          href="/news"
          className="bg-black text-white rounded-full px-8 py-4 text-sm font-bold flex items-center justify-center gap-2 hover:bg-amber-400 hover:text-black transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_20px_rgba(251,191,36,0.4)] hover:-translate-y-1"
        >
          View All Updates
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative z-10">
        {news.map((item, idx) => (
          <article 
            key={item.id} 
            className="group/card flex flex-col justify-between bg-gray-50 border border-gray-100 rounded-2xl p-6 lg:p-8 hover:bg-white hover:border-gray-200 hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden relative"
          >
            {/* Hover Accent Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-200 transform origin-left scale-x-0 group-hover/card:scale-x-100 transition-transform duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-[10px] uppercase font-black text-[#94061e] tracking-widest">
                  <Clock className="h-3.5 w-3.5" />
                  {item.date}
                </div>
                {idx === 0 && (
                  <span className="bg-red-50 text-red-600 border border-red-100 text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest animate-pulse">
                    Hot
                  </span>
                )}
              </div>
              
              <h4 className="font-extrabold text-black text-xl lg:text-2xl leading-snug mb-4 group-hover/card:text-[#94061e] transition-colors duration-300">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-8 group-hover/card:text-gray-800 transition-colors duration-300">
                {item.summary}
              </p>
            </div>

            <Link 
              href="/news"
              className="mt-auto relative z-10 text-xs font-bold text-gray-500 flex items-center gap-3 group-hover/card:text-[#94061e] transition-colors w-max"
            >
              <span className="border-b border-transparent group-hover/card:border-amber-400 pb-0.5 transition-all uppercase tracking-wider">Read Report</span>
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center group-hover/card:bg-amber-400 group-hover/card:text-black transition-all">
                <ArrowRight className="h-4 w-4 transition-transform group-hover/card:translate-x-0.5" />
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
