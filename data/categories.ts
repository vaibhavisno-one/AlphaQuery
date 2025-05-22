export interface Category {
  id: string
  name: string
  icon: string
  sampleQuery: string
  description: string
}

export const categories: Category[] = [
  {
    id: "weather",
    name: "Weather",
    icon: "cloud",
    sampleQuery: "weather in Tokyo",
    description: "Current conditions, forecasts, and historical weather data",
  },
  {
    id: "astronomy",
    name: "Astronomy",
    icon: "moon",
    sampleQuery: "distance to Mars",
    description: "Celestial objects, distances, and astronomical events",
  },
  {
    id: "chemistry",
    name: "Chemistry",
    icon: "flask",
    sampleQuery: "molecular weight of caffeine",
    description: "Chemical compounds, reactions, and properties",
  },
  {
    id: "geography",
    name: "Geography",
    icon: "globe",
    sampleQuery: "population of Brazil",
    description: "Countries, cities, populations, and geographic features",
  },
  {
    id: "history",
    name: "History",
    icon: "clock",
    sampleQuery: "when was the Declaration of Independence signed",
    description: "Historical events, people, and timelines",
  },
  {
    id: "units",
    name: "Units & Measures",
    icon: "ruler",
    sampleQuery: "convert 100 miles to kilometers",
    description: "Unit conversions and measurements",
  },
  {
    id: "health",
    name: "Health & Medicine",
    icon: "heart",
    sampleQuery: "calories in an apple",
    description: "Nutrition, diseases, and medical information",
  },
  {
    id: "finance",
    name: "Finance",
    icon: "dollar-sign",
    sampleQuery: "AAPL stock price",
    description: "Stocks, currencies, and financial calculations",
  },
  {
    id: "music",
    name: "Music",
    icon: "music",
    sampleQuery: "key of Beethoven's 5th Symphony",
    description: "Musical notes, scales, and compositions",
  },
  {
    id: "physics",
    name: "Physics",
    icon: "zap",
    sampleQuery: "speed of sound in water",
    description: "Physical properties, laws, and phenomena",
  },
  {
    id: "culture",
    name: "Culture & Media",
    icon: "film",
    sampleQuery: "director of Inception",
    description: "Movies, books, and cultural references",
  },
  {
    id: "technology",
    name: "Technology",
    icon: "cpu",
    sampleQuery: "when was the iPhone released",
    description: "Devices, companies, and technological developments",
  },
]
