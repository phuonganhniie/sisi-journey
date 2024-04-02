export default async function handler(req, res) {
  const start = Date.now();

  const path = req.url.split("?")[0].replace("/api/wakatime-proxy/", "");
  const baseUrl = `https://wakatime.com/api/v1/users/current/${path}`;
  const apiKey = process.env.VITE_WAKATIME_API_KEY;

  const url = new URL(baseUrl);
  url.search = new URLSearchParams({
    ...Object.fromEntries(new URL(req.url, "http://localhost").searchParams),
    api_key: apiKey,
  });
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
      return new Response(
        JSON.stringify({ error: wakatimeResponse.statusText }),
        {
          status: wakatimeResponse.status,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );
    }

    const body = await wakatimeResponse.json();
    console.log("Response from Wakatime API:", body);

    console.log(`Time elapsed: ${Date.now() - start} ms`);

    return res.status(wakatimeResponse.status).setHeader("Access-Control-Allow-Origin", "*").setHeader("Content-Type", "application/json").json(body)
    // return res.send(
    //   new Response(JSON.stringify(body), {
    //     status: wakatimeResponse.status,
    //     headers: {
    //       "Access-Control-Allow-Origin": "*",
    //       "Content-Type": "application/json",
    //     },
    //   })
    // );
  } catch (error) {
    console.error("Error fetching from Wakatime API:", error);
    return res.send(
      new Response(JSON.stringify({ error: "Internal Server Error" }), {
        status: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
    );
  }
}
