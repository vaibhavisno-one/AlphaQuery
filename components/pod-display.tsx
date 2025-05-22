"use client"

import type { Pod, Subpod } from "@/types/wolfram"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface PodDisplayProps {
  pod: Pod
}

export function PodDisplay({ pod }: PodDisplayProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{pod.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {pod.subpods.map((subpod, index) => (
            <SubpodDisplay key={index} subpod={subpod} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

interface SubpodDisplayProps {
  subpod: Subpod
}

function SubpodDisplay({ subpod }: SubpodDisplayProps) {
  return (
    <div className="space-y-2">
      {subpod.title && <h4 className="font-medium text-sm">{subpod.title}</h4>}

      {subpod.plaintext && (
        <div className="text-sm whitespace-pre-wrap font-mono bg-muted p-2 rounded-md">{subpod.plaintext}</div>
      )}

      {subpod.img && (
        <div className="overflow-auto">
          <img
            src={subpod.img.src || "/placeholder.svg"}
            alt={subpod.title || "Wolfram Alpha result"}
            width={subpod.img.width}
            height={subpod.img.height}
            className="max-w-full h-auto"
          />
        </div>
      )}
    </div>
  )
}
