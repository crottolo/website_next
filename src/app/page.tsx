import { Button } from "@/components/ui/button"
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HomePage() {
  const features = [
    {
      title: "Modern Stack",
      description: "Built with Next.js 14, React, TypeScript and Tailwind CSS"
    },
    {
      title: "Beautiful Design",
      description: "Clean and modern interface inspired by cursor.sh"
    },
    {
      title: "Dark Mode",
      description: "Switch between light and dark themes with ease"
    },
    {
      title: "Responsive",
      description: "Looks great on all devices, from mobile to desktop"
    },
    {
      title: "Performance",
      description: "Optimized for speed and SEO"
    },
    {
      title: "Components",
      description: "Built with shadcn/ui components for consistency"
    }
  ]

  return (
    <div className="flex flex-col items-center w-full">
      <HeroHighlight>
        <div className="max-w-[85rem] mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="space-y-4 max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                A <Highlight>modern website</Highlight> built with Next.js
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                High-performance website template with dark mode, modern UI, and best development practices
              </p>
            </div>
            <div className="space-x-4">
              <Link href="#features">
                <Button size="lg" className="h-11 px-8">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </HeroHighlight>

      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-[85rem] mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Features
              </h2>
              <p className="mx-auto max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                This template includes everything you need to build a modern website
              </p>
            </div>
          </div>
          <div className="mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-12 items-start pt-12 max-w-7xl">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-md transition-all"
              >
                <div className="space-y-2">
                  <h3 className="font-bold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
