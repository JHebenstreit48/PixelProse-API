import fs from "fs";
import path from "path";

export function getSiteId() {
  return process.env.SITE_ID || "netnotes";
}

export function getServiceAccountJson(): string {
  const fromEnv = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
  if (fromEnv && fromEnv.trim()) return fromEnv;

  const p = path.resolve("serviceAccount.json");
  if (fs.existsSync(p)) return fs.readFileSync(p, "utf8");

  throw new Error(
    "Missing service account. Set FIREBASE_SERVICE_ACCOUNT_JSON or place serviceAccount.json at repo root."
  );
}

export function shouldPrune(): boolean {
  return (process.env.PRUNE ?? "true").toLowerCase() === "true";
}