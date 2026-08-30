const FALLBACK_SITE_URL = "http://localhost:3000"

export const siteConfig = {
  name: "Data Scientist Portfolio",
  title: "Rihua Van Steenburgh | Data Scientist",
  description:
    "Data Scientist focused on applied AI, NLP, model evaluation, and RAG systems, with projects spanning machine learning, retrieval evaluation, analytics, and cloud data platforms.",
  ogImage: "/projects/financial-complaint-nlp-routing-architecture-v2.jpg",
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
