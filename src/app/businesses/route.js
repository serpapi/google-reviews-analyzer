import axios from "axios"

const SERPAPI_KEY = process.env.SERPAPI_KEY

const getBusinesses = async (q, ll) => {
  try {
    const { data } = await axios
      .get(`https://serpapi.com/search?engine=google_maps&q=${q}&ll=${ll}&google_domain=google.com&hl=en&type=search&api_key=${SERPAPI_KEY}`)
    return data
  } catch (e) {
    throw new Error("Failed to load businesses")
  }
}

export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const q = searchParams.get("q")
  const ll = searchParams.get("ll")

  if (!q) {
    return new Response("Missing q", { status: 422 })
  }
  if (!ll) {
    return new Response("Missing ll", { status: 422 })
  }

  try {
    const data = await getBusinesses(q, ll)
    return new Response(JSON.stringify(data), {
      headers: {
        "content-type": "application/json"
      }
    })
  } catch {
    return new Response("Error retrieving business", { status: 400 })
  }
}
