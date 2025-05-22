import { NextResponse } from "next/server"
import { parseWolframResponse } from "@/lib/wolfram"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get("query")

  if (!query) {
    return NextResponse.json({ error: "Query parameter is required" }, { status: 400 })
  }

  try {
    const apiKey = process.env.WOLFRAM_ALPHA_API_KEY

    if (!apiKey) {
      return NextResponse.json({ error: "API key is not configured" }, { status: 500 })
    }

    const url = new URL("https://api.wolframalpha.com/v2/query")
    url.searchParams.append("input", query)
    url.searchParams.append("appid", apiKey)
    url.searchParams.append("format", "image,plaintext")
    url.searchParams.append("output", "json")

    const response = await fetch(url.toString())

    if (!response.ok) {
      throw new Error(`Wolfram Alpha API responded with status: ${response.status}`)
    }

    const data = await response.json()
    const parsedData = parseWolframResponse(data)

    return NextResponse.json(parsedData)
  } catch (error) {
    console.error("Error fetching from Wolfram Alpha:", error)
    return NextResponse.json({ error: "Failed to fetch results from Wolfram Alpha" }, { status: 500 })
  }
}
