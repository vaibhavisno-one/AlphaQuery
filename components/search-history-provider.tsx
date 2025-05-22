"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface SearchHistoryContextType {
  history: string[]
  addToHistory: (query: string) => void
  clearHistory: () => void
}

const SearchHistoryContext = createContext<SearchHistoryContextType | undefined>(undefined)

export function SearchHistoryProvider({ children }: { children: ReactNode }) {
  const [history, setHistory] = useState<string[]>([])

  useEffect(() => {
    // Load history from localStorage on mount
    const savedHistory = localStorage.getItem("searchHistory")
    if (savedHistory) {
      try {
        setHistory(JSON.parse(savedHistory))
      } catch (e) {
        console.error("Failed to parse search history:", e)
      }
    }
  }, [])

  const addToHistory = (query: string) => {
    setHistory((prev) => {
      // Remove duplicate if exists
      const filtered = prev.filter((item) => item !== query)
      // Add to the beginning of the array and limit to 10 items
      const newHistory = [query, ...filtered].slice(0, 10)
      // Save to localStorage
      localStorage.setItem("searchHistory", JSON.stringify(newHistory))
      return newHistory
    })
  }

  const clearHistory = () => {
    localStorage.removeItem("searchHistory")
    setHistory([])
  }

  return (
    <SearchHistoryContext.Provider value={{ history, addToHistory, clearHistory }}>
      {children}
    </SearchHistoryContext.Provider>
  )
}

export function useSearchHistoryContext() {
  const context = useContext(SearchHistoryContext)
  if (context === undefined) {
    throw new Error("useSearchHistoryContext must be used within a SearchHistoryProvider")
  }
  return context
}
