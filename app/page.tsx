import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Briefcase, Code, Palette, Users } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section, SectionHeader } from "@/components/section"
import { PortfolioFilter } from "@/components/portfolio-filter"
import { TestimonialsSection } from "@/components/testimonials"
import { BlogPreview } from "@/components/blog-preview"
import { StatsSection } from "@/components/stats"
import { MagneticButton } from "@/components/magnetic-button"
import { AnimatedHeading, Reveal } from "@/components/animated-text"
import { MarqueeSection } from "@/components/marquee"

const services = [
  {
    icon: Palette,
    title: "Brand Design",
    description: "Creating memorable brand identities that resonate with your audience and stand the test of time.",
    number: "01",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Building fast, responsive, and accessible websites using modern technologies and best practices.",
    number: "02",
  },
  {
    icon: Briefcase,
    title: "Digital Strategy",
    description: "Developing comprehensive digital strategies that drive growth and maximize your online presence.",
    number: "03",
  },
  {
    icon: Users,
    title: "UI/UX Design",
    description: "Designing intuitive user experiences that delight users and achieve business objectives.",
    number: "04",
  },
]

const clients = [
  "Google", "Apple", "Microsoft", "Amazon", "Meta", "Netflix", "Spotify", "Airbnb"
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="transparent" />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-14 px-4 lg:px-8">
        <div className="relative w-full max-w-[1600px] mx-auto rounded-3xl overflow-hidden min-h-[calc(100vh-56px)]">
          {/* Background Image with Zoom and Blur */}
          <div className="absolute inset-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%209%2C%202026%2C%2010_01_17%20PM-6h30qM7AFJuQqrxbQ8L2hoFGmS5tra.png"
              alt="Hero Background"
              fill
              className="object-cover scale-150 blur-lg"
              priority
            />
            <div className="absolute inset-0 bg-blue-900/40" />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-56px)] px-6 lg:px-12 py-16 pt-24">
            {/* Top Badge */}
            <Reveal delay={0}>
              <div className="flex flex-col items-center gap-3 mb-8">
                <span className="text-white/90 text-xs md:text-sm font-medium uppercase tracking-widest text-center">
                  #1 Most Recommended<br />Content Marketing Agency
                </span>
                <div className="flex items-center gap-4 flex-wrap justify-center">
                  <span className="text-white/70 text-xs">Global Search Awards</span>
                  <span className="text-white/70 text-xs">The Drum</span>
                  <span className="text-white/70 text-xs">UK Social Media Awards</span>
                  <span className="text-white/70 text-xs">Content Awards</span>
                </div>
              </div>
            </Reveal>

            {/* Main Headline */}
            <div className="text-center max-w-6xl mx-auto">
              <AnimatedHeading
                as="h1"
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[120px] font-medium leading-[0.95] tracking-tight text-white"
                delay={0.1}
              >
                <span className="block italic" style={{ fontFamily: 'var(--font-display)' }}>We Create</span>
                <span className="flex items-center justify-center gap-4 mt-2 flex-wrap">
                  <span>Category</span>
                  <span className="inline-flex items-center justify-center w-20 h-24 md:w-28 md:h-32 lg:w-36 lg:h-44 bg-white/90 rounded-2xl shadow-xl overflow-hidden p-2">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%209%2C%202026%2C%2010_01_17%20PM-6h30qM7AFJuQqrxbQ8L2hoFGmS5tra.png"
                      alt="Red Bull Can"
                      width={120}
                      height={160}
                      className="object-contain"
                    />
                  </span>
                  <span>Leaders</span>
                </span>
              </AnimatedHeading>
            </div>

            {/* Subheadline */}
            <Reveal delay={0.3}>
              <p className="mt-8 text-lg md:text-2xl text-white/90 text-center italic">
                on every searchable platform
              </p>
            </Reveal>

            {/* Platform Logos */}
            <Reveal delay={0.4}>
              <div className="mt-10 flex items-center gap-6 md:gap-10 flex-wrap justify-center">
                <span className="text-white font-medium text-sm md:text-base">Google</span>
                <span className="text-white font-medium text-sm md:text-base">ChatGPT</span>
                <span className="text-white font-medium text-sm md:text-base">Gemini</span>
                <span className="text-white font-medium text-sm md:text-base">TikTok</span>
                <span className="text-white font-medium text-sm md:text-base">YouTube</span>
                <span className="text-white font-medium text-sm md:text-base">Pinterest</span>
                <span className="text-white font-medium text-sm md:text-base">GIPHY</span>
                <span className="text-white font-medium text-sm md:text-base">reddit</span>
                <span className="text-white font-medium text-sm md:text-base">amazon</span>
              </div>
            </Reveal>

            {/* Bottom Info */}
            <div className="absolute bottom-8 left-6 right-6 lg:left-12 lg:right-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <Reveal delay={0.5}>
                <p className="text-white/80 text-xs md:text-sm max-w-md leading-relaxed">
                  Organic media planners creating, distributing & optimising<br />
                  <span className="text-white font-medium">search-first</span> content for SEO, Social, PR, Ai and LLM search
                </p>
              </Reveal>
              <Reveal delay={0.5}>
                <p className="text-white/80 text-xs md:text-sm text-right">
                  <span className="text-white font-medium">4 Global Offices</span> serving<br />
                  UK, USA (New York) & EU
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Marquee */}
      <MarqueeSection clients={clients} />

      {/* Stats */}
      <StatsSection />

      {/* Services Section */}
      <Section className="bg-muted/30">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Header */}
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                Services
              </span>
            </Reveal>
            <AnimatedHeading as="h2" className="mt-4 text-4xl md:text-5xl font-medium" delay={0.1}>
              Expertise that delivers results
            </AnimatedHeading>
            <Reveal delay={0.2}>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg">
                I combine strategy, design, and technology to help brands create 
                meaningful connections with their audience.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8">
                <MagneticButton href="/services" variant="outline" icon="arrow">
                  All Services
                </MagneticButton>
              </div>
            </Reveal>
          </div>

          {/* Right: Services List */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.1}>
                <div className="group relative p-8 rounded-2xl bg-card border border-border hover:border-foreground/20 transition-all duration-500 hover-lift">
                  <div className="flex items-start gap-6">
                    <span className="text-5xl font-light text-muted-foreground/30 transition-colors group-hover:text-accent/50" style={{ fontFamily: 'var(--font-display)' }}>
                      {service.number}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-full border border-border group-hover:border-foreground group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Portfolio Section */}
      <Section>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <Reveal>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                Portfolio
              </span>
            </Reveal>
            <AnimatedHeading as="h2" className="mt-4 text-4xl md:text-5xl font-medium" delay={0.1}>
              Selected work
            </AnimatedHeading>
          </div>
          <Reveal delay={0.2}>
            <MagneticButton href="/portfolio" variant="outline" icon="arrow">
              View All
            </MagneticButton>
          </Reveal>
        </div>
        <PortfolioFilter />
      </Section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Blog Preview */}
      <Section className="bg-muted/30">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <Reveal>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                Insights
              </span>
            </Reveal>
            <AnimatedHeading as="h2" className="mt-4 text-4xl md:text-5xl font-medium" delay={0.1}>
              Latest articles
            </AnimatedHeading>
          </div>
          <Reveal delay={0.2}>
            <MagneticButton href="/blog" variant="outline" icon="arrow">
              All Articles
            </MagneticButton>
          </Reveal>
        </div>
        <BlogPreview />
      </Section>

      {/* CTA Section */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-foreground" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative mx-auto max-w-4xl text-center">
          <AnimatedHeading as="h2" className="text-4xl md:text-6xl lg:text-7xl font-medium text-background">
            <span className="block">Have a project</span>
            <span className="block mt-2">
              in <span className="italic">mind?</span>
            </span>
          </AnimatedHeading>
          <Reveal delay={0.2}>
            <p className="mt-8 text-lg md:text-xl text-background/70 max-w-xl mx-auto">
              Let&apos;s collaborate and create something extraordinary together.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-12">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 px-10 py-5 text-lg font-medium text-foreground bg-background rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                Start a Conversation
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background transition-transform group-hover:rotate-45">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      <Footer />
    </div>
  )
}
