import type { NextApiRequest, NextApiResponse } from 'next'

interface ResponseData {
  julegave: string
}


const api = (req: NextApiRequest, res: NextApiResponse<ResponseData | string>) => {
  if (req.method !== 'POST') {
    return res.status(405).json({julegave: "https://http.cat/405"})
  }

  const body: { [key: string]: string } = req?.body ?? {}

  const {avsender, mottaker} = Object.fromEntries(
    Object.entries(body).map(([key, value]) => [key.toLowerCase(), value?.toLowerCase()])
  );

  if (!avsender || !mottaker) {
    return res.status(400).send("Du må legge ved avsender og mottaker.")
  }

  if (avsender === "fredrik") {
    return res.status(200).json({julegave: "Christian fikser sikkert noe."})
  }

  if (mottaker === "fredrik") {

    if (avsender === "christian") {
      return res.status(418).json({julegave: "https://http.cat/418"})
    }

    return res.status(423).json({julegave: "https://http.cat/423"})
  }

  return res.status(500).json({julegave: "Error: ChatGPT rate limit exceeded."})
}

export default api
