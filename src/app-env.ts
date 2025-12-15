import type { db } from "./db/index";

export type AppEnv = {
  Variables: {
    db: typeof db;
    env: "development" | "production";
  };
};
