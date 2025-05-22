"use client"

import type React from "react"

import { useState } from "react"
import { useSearchHistory } from "@/hooks/use-search-history"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"
import { ResultsDisplay } from "@/components/results-display"
import { SearchHistory } from "@/components/search-history"
import { CategorySelection } from "@/components/category-selection"
import type { WolframResponse } from "@/types/wolfram"

export function SearchBar() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<WolframResponse | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { addToHistory } = useSearchHistory()

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!query.trim()) return

    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(`/api/wolfram?query=${encodeURIComponent(query)}`)

      if (!response.ok) {
        throw new Error("Failed to fetch results")
      }

      const data = await response.json()
      setResults(data)
      addToHistory(query)
    } catch (err) {
      setError("An error occurred while fetching results. Please try again.")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleCategorySelect = (sampleQuery: string) => {
    setQuery(sampleQuery)
    // Optional: Auto-submit the query
    // setTimeout(() => {
    //   handleSearch({ preventDefault: () => {} } as React.FormEvent)
    // }, 100)
  }

  return (
    <div className="space-y-6">
      <CategorySelection onSelectCategory={handleCategorySelect} />

      <form onSubmit={handleSearch} className="flex gap-2">
        <Input
          type="text"
          placeholder="Ask anything (e.g., solve x^2 + 2x + 1 = 0)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1"
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? (
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          ) : (
            <SearchIcon className="h-4 w-4" />
          )}
          <span className="ml-2">Search</span>
        </Button>
      </form>

      <SearchHistory onSelectQuery={(q) => setQuery(q)} />

      {isLoading && (
        <div className="flex justify-center py-12">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        </div>
      )}

      {error && <div className="rounded-lg bg-destructive/10 p-4 text-destructive">{error}</div>}

      {!isLoading && !error && results && <ResultsDisplay results={results} />}
    </div>
  )
}
