"use client"

import { useSearchHistoryContext } from "@/components/search-history-provider"

export function useSearchHistory() {
  return useSearchHistoryContext()
}
