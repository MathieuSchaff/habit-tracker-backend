import { CryptoHasher } from "bun";
// on va faire
// créa d'un tableau de 32 nombres
// chaque enfant est un octet de O à 255
// du coup 32 octet
// getRandomValues ça remplit le tableau avec des valeurs aléatoires
// on transfore en buffer
// puis en texte
export function generateSid(): string {
  return Buffer.from(crypto.getRandomValues(new Uint8Array(32))).toString(
    "base64url"
  );
}

export function hashSid(sid: string): string {
  // return createHash("sha256").update(sid).digest("hex");
  const hasher = new CryptoHasher("sha256");
  hasher.update(sid);
  return hasher.digest("base64url");
}

export function cookieOptions(env: "development" | "production") {
  const isProd = env === "production";
  return {
    httpOnly: true,
    secure: isProd, // en prod uniquement (https)
    sameSite: "Lax" as const,
    path: "/",
    maxAge: 30 * 24 * 60 * 60,
  };
}
