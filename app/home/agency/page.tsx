import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowUpRight, CheckCircle2, Mail, ChevronRight, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section, SectionHeader } from "@/components/section"

const services = [
  {
    number: "01",
    title: "Brand Strategy",
    description: "We develop comprehensive brand strategies that position your business for long-term success in competitive markets.",
  },
  {
    number: "02",
    title: "Digital Design",
    description: "Our design team creates stunning visual identities and user interfaces that captivate and convert.",
  },
  {
    number: "03",
    title: "Web Development",
    description: "We build fast, secure, and scalable web applications using cutting-edge technologies.",
  },
  {
    number: "04",
    title: "Digital Marketing",
    description: "Data-driven marketing strategies that increase visibility and drive measurable results.",
  },
]

const clients = [
  "TechCorp", "Innovate Inc", "StartupXYZ", "Design Co", "Future Labs", "Digital First"
]

const teamMembers = [
  {
    name: "Jessica Williams",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "David Kim",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Sarah Chen",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Marcus Johnson",
    role: "Strategy Lead",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
]

const featuredWork = [
  {
    title: "TechCorp Rebrand",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1200&h=800&fit=crop",
  },
  {
    title: "E-Commerce Platform",
    category: "Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    title: "Mobile Banking App",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
  },
]

export default function AgencyHomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
              Digital Agency
            </p>
            <h1 
              className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              We craft digital experiences that matter
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed max-w-2xl">
              A full-service digital agency helping brands thrive in the digital age. 
              We combine strategy, design, and technology to create impactful solutions.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="min-w-[180px]">
                <Link href="/portfolio">
                  Our Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-w-[180px]">
                <Link href="/contact">Start a Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-12 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground mb-8">Trusted by leading companies</p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {clients.map((client) => (
              <span 
                key={client} 
                className="text-lg font-semibold text-muted-foreground/60"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <SectionHeader 
              title="What We Do" 
              subtitle="We offer end-to-end digital solutions that help businesses grow and succeed."
              align="left"
            />
            <div className="mt-8 flex gap-4">
              <Button asChild>
                <Link href="/story">
                  Our Story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/services">
                  Our Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="space-y-8">
            {services.map((service) => (
              <div key={service.number} className="group flex gap-6 cursor-pointer">
                <span className="text-3xl font-bold text-muted-foreground/30 group-hover:text-accent transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                  {service.number}
                </span>
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Featured Work */}
      <Section className="bg-muted/50">
        <SectionHeader
          title="Featured Work"
          subtitle="A showcase of our recent projects and collaborations."
        />
        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          <Link href="/portfolio" className="group relative aspect-[4/3] lg:aspect-auto lg:row-span-2 overflow-hidden rounded-xl">
            <Image
              src={featuredWork[0].image}
              alt={featuredWork[0].title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/50 transition-colors" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-sm text-background/80">{featuredWork[0].category}</p>
              <h3 className="text-2xl font-bold text-background">{featuredWork[0].title}</h3>
            </div>
            <ArrowUpRight className="absolute top-6 right-6 h-6 w-6 text-background opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
          {featuredWork.slice(1).map((work, index) => (
            <Link key={index} href="/portfolio" className="group relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src={work.image}
                alt={work.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/50 transition-colors" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-sm text-background/80">{work.category}</p>
                <h3 className="text-xl font-bold text-background">{work.title}</h3>
              </div>
              <ArrowUpRight className="absolute top-6 right-6 h-5 w-5 text-background opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/portfolio">
              View All Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader 
              title="Why Choose Us" 
              subtitle="We bring together expertise, creativity, and dedication to deliver exceptional results."
              align="left"
            />
            <ul className="mt-8 space-y-4">
              {[
                "Award-winning design team",
                "Agile development methodology",
                "Transparent communication",
                "Dedicated project managers",
                "Post-launch support",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {teamMembers.map((member) => (
              <div key={member.name} className="group">
                <div className="relative aspect-square overflow-hidden rounded-lg mb-3">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="font-semibold text-sm">{member.name}</p>
                <p className="text-xs text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Expertise Section with Image Carousel */}
      <Section className="bg-muted/50">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader 
              title="Expertise that delivers results" 
              subtitle="We combine creative thinking with technical excellence to solve complex business challenges and drive measurable growth."
              align="left"
            />
            <div className="mt-8 flex gap-4">
              <Button asChild>
                <Link href="/expertise">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop"
                alt="Expertise 1"
                width={400}
                height={400}
                className="rounded-lg object-cover h-48 w-full"
              />
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop"
                alt="Expertise 2"
                width={400}
                height={400}
                className="rounded-lg object-cover h-48 w-full"
              />
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop"
                alt="Expertise 3"
                width={400}
                height={400}
                className="rounded-lg object-cover h-48 w-full"
              />
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop"
                alt="Expertise 4"
                width={400}
                height={400}
                className="rounded-lg object-cover h-48 w-full"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Image Carousel Section */}
      <Section>
        <SectionHeader
          title="Our Work Showcase"
          subtitle="A collection of our latest projects and collaborations."
        />
        <div className="mt-12 relative group">
          <div className="overflow-hidden rounded-xl">
            <div className="flex gap-4 pb-4 overflow-x-auto snap-x snap-mandatory scroll-smooth">
              {[
                "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
              ].map((image, index) => (
                <div key={index} className="flex-shrink-0 w-full md:w-2/3 lg:w-1/2 snap-center">
                  <Image
                    src={image}
                    alt={`Project ${index + 1}`}
                    width={800}
                    height={600}
                    className="rounded-lg object-cover h-96 w-full"
                  />
                </div>
              ))}
            </div>
          </div>
          <button className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-primary text-primary-foreground">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 
              className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Let&apos;s create something amazing together
            </h2>
            <p className="mt-4 text-lg opacity-90">
              Get in touch with us to discuss your next project.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <div className="flex-1 flex items-center gap-2 bg-background/20 rounded-lg px-4 py-3">
                <Mail className="h-5 w-5 text-primary-foreground/70 flex-shrink-0" />
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-transparent text-primary-foreground placeholder-primary-foreground/50 outline-none text-sm"
                />
              </div>
              <Button size="lg" variant="secondary" className="sm:w-auto">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="lg:text-right">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Navigation</h3>
              <nav className="space-y-2 text-primary-foreground/80">
                <Link href="/services" className="block hover:text-primary-foreground transition-colors">Services+</Link>
                <Link href="/industries" className="block hover:text-primary-foreground transition-colors">Industries+</Link>
                <Link href="/international" className="block hover:text-primary-foreground transition-colors">International+</Link>
                <Link href="/about" className="block hover:text-primary-foreground transition-colors">About+</Link>
                <Link href="/work" className="block hover:text-primary-foreground transition-colors">Work</Link>
                <Link href="/careers" className="block hover:text-primary-foreground transition-colors">Careers</Link>
                <Link href="/blog" className="block hover:text-primary-foreground transition-colors">Blog & Resources+</Link>
                <Link href="/webinar" className="block hover:text-primary-foreground transition-colors">Webinar</Link>
              </nav>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  )
}
