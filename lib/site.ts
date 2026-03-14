const FALLBACK_SITE_URL = "http://localhost:3000"

export const siteConfig = {
  name: "Data Engineer Portfolio",
  title: "Rihua Van Steenburgh | Data Engineer",
  description:
    "Data Engineer building reliable pipelines, cloud data workflows, and analytics-ready datasets. Portfolio showcasing end-to-end data engineering projects.",
  ogImage: "/projects/flight-fare-pipeline.jpg",
} as const

export function getSiteUrl() {
  const envUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim() ||
    process.env.VERCEL_URL?.trim()

  if (!envUrl) {
    return new URL(FALLBACK_SITE_URL)
  }

  const normalizedUrl =
    envUrl.startsWith("http://") || envUrl.startsWith("https://")
      ? envUrl
      : `https://${envUrl}`

  return new URL(normalizedUrl)
}
