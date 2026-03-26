// server/api/ping.get.ts
import { neon } from '@neondatabase/serverless'

export default defineEventHandler(async () => {
  const sql = neon(process.env.DATABASE_URL!)
  await sql`SELECT 1`
  return { ok: true }
})