export default async function handler(req) {
  const path = req.url.split("?")[0].replace("/api/wakatime-proxy/", "");
  const baseUrl = `https://wakatime.com/api/v1/users/current/${path}`;
  const apiKey = process.env.VITE_WAKATIME_API_KEY;

  const url = new URL(baseUrl);
  url.search = new URLSearchParams({
    ...Object.fromEntries(new URL(req.url, "http://localhost").searchParams),
    api_key: apiKey,
  });
  console.log("Calling Wakatime API URL:", url.toString());

  const wakatimeResponse = await fetch(url, toString(), {
    method: req.method,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const body = await wakatimeResponse.json();
  console.log("Response from Wakatime API:", body);

  return new Response(JSON.stringify(body), {
    status: wakatimeResponse.status,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });
}
