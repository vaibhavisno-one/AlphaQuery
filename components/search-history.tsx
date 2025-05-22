"use client"

import { useSearchHistory } from "@/hooks/use-search-history"
import { Button } from "@/components/ui/button"
import { Clock, Trash2 } from "lucide-react"

interface SearchHistoryProps {
  onSelectQuery: (query: string) => void
}

export function SearchHistory({ onSelectQuery }: SearchHistoryProps) {
  const { history, clearHistory } = useSearchHistory()

  if (history.length === 0) {
    return null
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium flex items-center">
          <Clock className="h-4 w-4 mr-1" />
          Recent Searches
        </h3>
        <Button variant="ghost" size="sm" onClick={clearHistory} className="h-8 text-xs">
          <Trash2 className="h-3 w-3 mr-1" />
          Clear
        </Button>
      </div>
      <div className="flex flex-wrap gap-2">
        {history.map((query, index) => (
          <Button key={index} variant="outline" size="sm" onClick={() => onSelectQuery(query)} className="text-xs">
            {query}
          </Button>
        ))}
      </div>
    </div>
  )
}
