"use client"

import type React from "react"

import { useState } from "react"
import { categories, type Category } from "@/data/categories"
import { Card, CardContent } from "@/components/ui/card"
import * as LucideIcons from "lucide-react"

interface CategorySelectionProps {
  onSelectCategory: (query: string) => void
}

export function CategorySelection({ onSelectCategory }: CategorySelectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category.id)
    onSelectCategory(category.sampleQuery)
  }

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium">Select a category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {categories.map((category) => {
          // Dynamically get the icon component
          const IconComponent =
            (LucideIcons as Record<string, React.ComponentType<any>>)[
              category.icon.charAt(0).toUpperCase() + category.icon.slice(1)
            ] || LucideIcons.HelpCircle

          return (
            <Card
              key={category.id}
              className={`cursor-pointer transition-colors hover:bg-accent ${
                selectedCategory === category.id ? "border-primary" : ""
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              <CardContent className="p-4 flex flex-col items-center text-center">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <IconComponent className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-medium text-sm">{category.name}</h3>
                <p className="text-xs text-muted-foreground mt-1 hidden md:block">{category.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
