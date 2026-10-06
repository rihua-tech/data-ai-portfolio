const FALLBACK_SITE_URL = "https://rihua.dev"

export const siteConfig = {
  name: "Data Scientist Portfolio",
  title: "Rihua Van Steenburgh | Data Scientist | Applied AI & Machine Learning",
  description:
    "Data Scientist building production-oriented machine learning and applied AI applications, with strengths in NLP, RAG, model and LLM evaluation, and cloud data engineering.",
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
