// server/api/health.get.ts
export default defineEventHandler(() => {
  return { status: 'ok' }
})