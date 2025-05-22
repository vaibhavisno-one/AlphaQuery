export interface WolframResponse {
  success: boolean
  tips?: string[]
  queryresult: QueryResult | null
}

export interface QueryResult {
  pods: Pod[]
}

export interface Pod {
  id: string
  title: string
  subpods: Subpod[]
}

export interface Subpod {
  title: string
  plaintext: string
  img: {
    src: string
    alt: string
    width: number
    height: number
  } | null
}
