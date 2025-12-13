const port = Number(process.env.PORT ?? 3000);

Bun.serve({
  hostname: "0.0.0.0", // OBLIGATOIRE dans Docker
  port,
  fetch(req) {
    const url = new URL(req.url);

    // Healthcheck (utilisé par Docker + Nginx)
    if (url.pathname === "/health") {
      return Response.json({ ok: true });
    }

    return new Response("Habit Tracker API running");
  },
});

console.log(`API running on port ${port}`);
