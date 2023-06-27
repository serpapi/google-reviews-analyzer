import { intelligentlyAnalyseReview } from "./review_intelligent"

export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const dataId = searchParams.get("dataId")

  if (!dataId) {
    return new Response("Missing Data ID", { status: 422 })
  }

  try {
    const data = await intelligentlyAnalyseReview(dataId)
    return new Response(JSON.stringify(data), {
      headers: {
        "content-type": "application/json"
      }
    })
  } catch (e) {
    console.log(e)
    return new Response("Error analysing business's reviews", { status: 400 })
  }
}
