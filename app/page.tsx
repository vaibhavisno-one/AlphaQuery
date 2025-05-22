import { SearchBar } from "@/components/search-bar"
import { ThemeToggle } from "@/components/theme-toggle"
import { SearchHistoryProvider } from "@/components/search-history-provider"

export default function Home() {
  return (
    <SearchHistoryProvider>
      <div className="min-h-screen bg-background">
        <header className="container mx-auto p-4 flex justify-between items-center border-b">
          <h1 className="text-2xl font-bold text-primary">AlphaQuery</h1>
          <ThemeToggle />
        </header>
        <main className="container mx-auto p-4 space-y-8 max-w-5xl">
          <div className="text-center my-8">
            <h2 className="text-3xl font-bold tracking-tight">Explore Knowledge With AlphaQuery</h2>
            <p className="text-muted-foreground mt-2">
              Select a category or enter your own query to get instant, computational answers
            </p>
          </div>
          <SearchBar />
        </main>
      </div>
    </SearchHistoryProvider>
  )
}
