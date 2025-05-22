import type { WolframResponse } from "@/types/wolfram"

export function parseWolframResponse(data: any): WolframResponse {
  // Handle error or no results case
  if (!data.queryresult || data.queryresult.error) {
    return {
      success: false,
      tips: data.queryresult?.tips?.text ? [data.queryresult.tips.text] : [],
      queryresult: null,
    }
  }

  // Check if we have actual results
  if (data.queryresult.success === false) {
    return {
      success: false,
      tips: data.queryresult?.tips?.text
        ? Array.isArray(data.queryresult.tips.text)
          ? data.queryresult.tips.text
          : [data.queryresult.tips.text]
        : [],
      queryresult: null,
    }
  }

  // Process pods
  const pods =
    data.queryresult.pods?.map((pod: any) => {
      return {
        id: pod.id,
        title: pod.title,
        subpods: pod.subpods.map((subpod: any) => {
          return {
            title: subpod.title,
            plaintext: subpod.plaintext,
            img: subpod.img
              ? {
                  src: subpod.img.src,
                  alt: subpod.img.alt,
                  width: Number.parseInt(subpod.img.width),
                  height: Number.parseInt(subpod.img.height),
                }
              : null,
          }
        }),
      }
    }) || []

  return {
    success: true,
    queryresult: {
      pods,
    },
  }
}
