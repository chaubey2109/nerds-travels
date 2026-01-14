import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

const { Pool } = pg;

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not set");
}

const url = new URL(connectionString);
const sslMode = url.searchParams.get("sslmode");
const useSsl =
  sslMode !== null && sslMode !== "disable" ||
  process.env.DATABASE_SSL === "true";

export const pool = new Pool({
  host: url.hostname,
  port: url.port ? Number(url.port) : 5432,
  user: decodeURIComponent(url.username),
  password: decodeURIComponent(url.password),
  database: url.pathname.replace(/^\//, ""),
  ssl: useSsl ? { rejectUnauthorized: false } : false,
});

export const db = drizzle(pool, { schema });
