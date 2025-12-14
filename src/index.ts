const port = Number(process.env.PORT ?? 3000);

import { Hono } from "hono";
import { healthRoute } from "./routes/health";
import { habitsRoute } from "./routes/habits";

const app = new Hono();

app.route("/", healthRoute);
app.route("/habits", habitsRoute);

export default {
  port: port,
  fetch: app.fetch,
};

console.log(`API listening on ${port}`);
