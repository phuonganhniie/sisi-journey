export default async function handler(req) {
  const path = req.url.slipt("?")[0].replace("/api/wakatime-proxy/", "");
  const baseUrl = `https://wakatime.com/api/v1/users/current/${path}`;
  const apiKey = import.meta.env.VITE_WAKATIME_API_KEY;

  const url = new URL(baseUrl);
  url.search = new URLSearchParams({
    ...Object.fromEntries(new URL(req.url, "http://localhost").searchParams),
    api_key: apiKey,
  });

  const wakatimeResponse = await fetch(url, toString(), {
    method: req.method,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const body = await wakatimeResponse.json();

  return new Response(JSON.stringify(body), {
    status: wakatimeResponse.status,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });
}
