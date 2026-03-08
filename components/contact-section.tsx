import { Github, Linkedin, Mail } from "lucide-react"
import { Section } from "@/components/Section"
import { Button } from "@/components/ui/button"

const EMAIL_ADDRESS = "rihuavan@gmail.com"
const EMAIL_SUBJECT = "Data Engineer Opportunity"
const EMAIL_HREF = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(EMAIL_SUBJECT)}`
const LINKEDIN_URL = "https://www.linkedin.com/in/rihua/"

export function ContactSection() {
  return (
    <Section id="contact" title="Contact">
      <div className="mx-auto max-w-xl text-center">
        <p className="mb-8 text-pretty text-muted-foreground">
          Interested in collaborating on data engineering work or portfolio projects? Reach out and I will follow up.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button asChild variant="outline" size="lg">
            <a
              href={EMAIL_HREF}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="size-4" />
              Email me
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="size-4" />
              LinkedIn
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a
              href="https://github.com/rihua-tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="size-4" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </Section>
  )
}
