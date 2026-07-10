"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Clock, Zap, ArrowRight, X, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNewsData } from "../hooks/useNewsData";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 80, damping: 15 } }
};

const CATEGORIES = ["All", "Events", "Conference", "Projects"];

export default function NewsPage() {
  const { news, loading } = useNewsData();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredNews = activeCategory === "All" 
    ? news 
    : news.filter(n => n.category?.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--aur-text)] font-sans pb-24 relative overflow-x-hidden">
      
      {/* Navbar / Header */}
      <header className="sticky top-0 z-50 bg-[var(--background)]/70 backdrop-blur-xl border-b border-[var(--aur-border)] shadow-sm">
        <div className="w-full mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <Link 
            href="/" 
            className="group flex items-center gap-2 text-sm font-semibold text-[var(--aur-text-muted)] hover:text-[var(--aur-text)] transition-colors"
          >
            <div className="p-1.5 rounded-full bg-[var(--aur-surface-2)] group-hover:bg-[var(--aur-primary)] group-hover:text-[var(--aur-primary-text)] transition-colors">
              <ArrowLeft className="h-4 w-4" />
            </div>
            Back to Dashboard
          </Link>
          <div className="font-extrabold tracking-widest uppercase text-[10px] text-[var(--aur-text-muted)]">
            AUR Intelligence
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full mx-auto px-6 md:px-12 pt-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 border-b border-[var(--aur-border)] pb-10 text-center md:text-left"
        >
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="mr-2 text-[var(--aur-text-muted)] text-sm font-bold flex items-center gap-2">
              <Filter className="h-4 w-4" /> Filter by:
            </div>
            {CATEGORIES.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat 
                    ? "bg-[var(--aur-primary)] text-[var(--aur-primary-text)] shadow-[0_4px_20px_rgba(0,0,0,0.15)] scale-105" 
                    : "bg-[var(--aur-surface-2)] text-[var(--aur-text-secondary)] hover:bg-[var(--aur-border)] hover:text-[var(--aur-text)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 xl:gap-8 animate-pulse">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="bg-[var(--aur-surface)] rounded-3xl p-6 border border-[var(--aur-border)] h-[500px] flex flex-col">
                <div className="w-full h-48 bg-[var(--aur-surface-2)] rounded-2xl mb-6"></div>
                <div className="flex gap-4 mb-4">
                  <div className="h-4 w-20 bg-[var(--aur-surface-2)] rounded"></div>
                  <div className="h-4 w-20 bg-[var(--aur-surface-2)] rounded"></div>
                </div>
                <div className="h-6 w-full bg-[var(--aur-surface-2)] rounded mb-3"></div>
                <div className="h-6 w-3/4 bg-[var(--aur-surface-2)] rounded mb-6"></div>
                <div className="space-y-2 mt-auto">
                  <div className="h-3 w-full bg-[var(--aur-surface-2)] rounded"></div>
                  <div className="h-3 w-4/5 bg-[var(--aur-surface-2)] rounded"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 xl:gap-8"
          >
            {filteredNews.length === 0 ? (
              <div className="col-span-full py-20 text-center text-[var(--aur-text-muted)] text-lg font-medium">
                No articles found for "{activeCategory}". Try selecting another category.
              </div>
            ) : (
              filteredNews.map((item) => (
                <motion.article 
                  key={item.id} 
                  variants={itemVariants}
                  className={`group relative flex flex-col bg-[var(--aur-surface)] rounded-3xl p-6 transition-all duration-500 hover:shadow-2xl border ${
                    item.featured 
                      ? "border-[var(--aur-border-strong)] shadow-lg" 
                      : "border-[var(--aur-border)] hover:border-[var(--aur-border-strong)]"
                  } hover:-translate-y-1`}
                >
                  {/* Decorative Accent for featured */}
                  {item.featured && (
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-t-3xl"></div>
                  )}
                  
                  {/* Image Thumbnail (Top) */}
                  <div className="w-full h-48 rounded-2xl shrink-0 overflow-hidden relative shadow-sm border border-[var(--aur-border)] bg-[var(--aur-surface-2)] mb-6">
                    {item.imageUrl ? (
                      <img 
                        src={item.imageUrl} 
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className={`w-full h-full flex items-center justify-center transition-transform duration-700 group-hover:scale-110 ${
                        item.featured ? "bg-amber-500/10" : "bg-[var(--aur-surface-2)]"
                      }`}>
                        {item.featured ? (
                          <Zap className="h-12 w-12 text-amber-500" />
                        ) : (
                          <div className="w-12 h-12 rounded-full border-4 border-[var(--aur-surface)] shadow-sm bg-[var(--aur-border)]"></div>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col flex-1 relative z-10">
                    {/* Meta (Category & Date) */}
                    <div className="flex items-center gap-4 mb-4">
                      {item.category && (
                        <span className={`text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-sm ${
                          item.featured 
                            ? "bg-amber-500 text-black" 
                            : "bg-[var(--aur-surface-2)] text-[var(--aur-text-secondary)]"
                        }`}>
                          {item.category}
                        </span>
                      )}
                      <div className="flex items-center gap-1.5 text-xs text-[var(--aur-text-muted)] font-medium">
                        <Clock className="h-3.5 w-3.5" />
                        <time>{item.date}</time>
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h2 className="text-xl font-bold mb-3 leading-snug cursor-pointer transition-colors text-[var(--aur-text)] group-hover:text-amber-500">
                      {item.title}
                    </h2>
                    
                    {/* Summary */}
                    <p className={`text-sm leading-relaxed mb-6 flex-1 ${
                      item.featured ? "text-[var(--aur-text)] font-medium" : "text-[var(--aur-text-secondary)]"
                    }`}>
                      {item.summary}
                    </p>
                    
                    {/* Expanded Content */}
                    <AnimatePresence>
                      {expandedId === item.id && item.content && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden mb-6"
                        >
                          <div className="pt-4 border-t border-[var(--aur-border)] mt-2">
                            <p className="text-sm leading-relaxed text-[var(--aur-text)] font-medium">
                              {item.content}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    {/* Action Button */}
                    <div className="mt-auto pt-4 border-t border-[var(--aur-border)]/50">
                      <button 
                        onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider pb-1 transition-all text-[var(--aur-text)] hover:text-amber-500 group-hover:gap-3"
                      >
                        {expandedId === item.id ? (
                          <>Close Analysis <X className="h-4 w-4" /></>
                        ) : (
                          <>Read Analysis <ArrowRight className="h-4 w-4" /></>
                        )}
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))
            )}
          </motion.div>
        )}
      </main>
    </div>
  );
}
