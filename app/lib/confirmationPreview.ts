// Server-side environment policy. Vercel production always takes precedence.
export function isConfirmationPreviewEnabled() {
  if (process.env.VERCEL_ENV) return process.env.VERCEL_ENV === "preview";
  return process.env.NODE_ENV === "development";
}
