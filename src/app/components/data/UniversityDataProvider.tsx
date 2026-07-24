"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { University } from "../../data";
import { MOCK_UNIVERSITIES } from "../../data";
import { fetchUniversities } from "../../lib/universities";

interface UniversityDataContextValue {
  universities: University[];
  /** True while the initial fetch from the live API is in flight. */
  loading: boolean;
  /** Set when the live API fetch fails; data falls back to a bundled sample. */
  error: boolean;
}

const UniversityDataContext = createContext<UniversityDataContextValue | null>(null);

export function UniversityDataProvider({ children }: { children: React.ReactNode }) {
  const [universities, setUniversities] = useState<University[]>(MOCK_UNIVERSITIES);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    fetchUniversities()
      .then((data) => {
        if (isMounted) {
          setUniversities(data);
          setError(false);
        }
      })
      .catch(() => {
        if (isMounted) {
          setUniversities(MOCK_UNIVERSITIES);
          setError(true);
        }
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const value = useMemo(
    () => ({
      universities,
      loading,
      error,
    }),
    [universities, loading, error]
  );

  return (
    <UniversityDataContext.Provider value={value}>
      {children}
    </UniversityDataContext.Provider>
  );
}

export function useUniversityData() {
  const context = useContext(UniversityDataContext);
  if (!context) {
    throw new Error("useUniversityData must be used within UniversityDataProvider");
  }
  return context;
}
