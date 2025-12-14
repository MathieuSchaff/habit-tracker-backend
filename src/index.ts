const port = Number(process.env.PORT ?? 3000);

Bun.serve({
  hostname: "0.0.0.0", // IMPORTANT dans Docker askip
  port,
  fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/health") {
      return Response.json({ ok: true });
    }

    return new Response("Habit Tracker Backend OK");
  },
});

console.log(`API listening on ${port}`);
