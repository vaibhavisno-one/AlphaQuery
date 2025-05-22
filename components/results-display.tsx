"use client"

import { PodDisplay } from "@/components/pod-display"
import type { WolframResponse } from "@/types/wolfram"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ResultsDisplayProps {
  results: WolframResponse
}

export function ResultsDisplay({ results }: ResultsDisplayProps) {
  if (!results.success) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>No results found</CardTitle>
          <CardDescription>Wolfram Alpha couldn't find any results for your query.</CardDescription>
        </CardHeader>
        {results.tips && (
          <CardContent>
            <div className="text-sm">
              <h3 className="font-medium">Tips:</h3>
              <ul className="list-disc pl-5 mt-2">
                {results.tips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
          </CardContent>
        )}
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {results.queryresult?.pods?.map((pod) => (
        <PodDisplay key={pod.id} pod={pod} />
      ))}

      {results.queryresult?.pods?.length === 0 && (
        <Card>
          <CardHeader>
            <CardTitle>No results found</CardTitle>
            <CardDescription>Wolfram Alpha couldn't find any results for your query.</CardDescription>
          </CardHeader>
        </Card>
      )}
    </div>
  )
}
