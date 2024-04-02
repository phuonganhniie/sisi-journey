import { VercelRequest, VercelResponse } from "@vercel/node";

const apiKey: string = process.env.VITE_WAKATIME_API_KEY!;
const wakatimeApiProxyUrl: string = "/api/wakatime-proxy/";
const wakatimeBaseUrl: string = "https://wakatime.com/api/v1/users/current";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const path = req.url!.split("?")[0].replace(wakatimeApiProxyUrl, "");
  const baseUrl = `${wakatimeBaseUrl}/${path}`;

  const url = new URL(baseUrl);
  url.search = new URLSearchParams({
    ...Object.fromEntries(new URL(req.url!, "http://localhost").searchParams),
    api_key: apiKey!,
  }).toString();
  console.log("Calling Wakatime API URL:", url.toString());

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const wakatimeResponse = await fetch(url.toString(), {
      method: req.method,
      headers: {
        "Content-Type": "application/json",
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!wakatimeResponse.ok) {
      console.error(
        "Wakatime API request failed:",
        wakatimeResponse.statusText
      );

      return res
        .status(wakatimeResponse.status)
        .setHeader("Access-Control-Allow-Origin", "*")
        .setHeader("Content-Type", "application/json")
        .json({ error: wakatimeResponse.statusText });
    }

    const body = await wakatimeResponse.json();

    return res
      .status(wakatimeResponse.status)
      .setHeader("Access-Control-Allow-Origin", "*")
      .setHeader("Content-Type", "application/json")
      .json(body);
  } catch (error) {
    console.error("Error fetching from Wakatime API:", error);

    return res
      .status(500)
      .setHeader("Access-Control-Allow-Origin", "*")
      .setHeader("Content-Type", "application/json")
      .json({ error: "Internal Server Error" });
  }
}
