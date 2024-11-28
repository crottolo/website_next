import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function FeaturesPage() {
  const mainFeatures = [
    {
      title: "Modern Development Stack",
      description: "Built with cutting-edge technologies",
      features: [
        "Next.js 14 with App Router",
        "TypeScript for type safety",
        "Tailwind CSS for styling",
        "Shadcn UI components",
        "ESLint for code quality",
        "Dark mode support"
      ]
    },
    {
      title: "Performance Optimized",
      description: "Blazing fast user experience",
      features: [
        "Server-side rendering",
        "Automatic code splitting",
        "Image optimization",
        "Font optimization",
        "Minified production build",
        "Caching strategies"
      ]
    },
    {
      title: "Developer Experience",
      description: "Built for developer productivity",
      features: [
        "Hot module replacement",
        "Fast refresh in development",
        "TypeScript autocomplete",
        "Component library",
        "Modular architecture",
        "Easy deployment"
      ]
    }
  ]

  return (
    <div className="flex flex-col items-center w-full">
      <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
        <div className="max-w-[85rem] mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="space-y-4 max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Powerful Features
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Everything you need to build modern web applications with best practices and optimal performance
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="max-w-[85rem] mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:gap-16">
            {mainFeatures.map((feature, i) => (
              <div key={i} className="space-y-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter">{feature.title}</h2>
                  <p className="text-gray-500 dark:text-gray-400 md:text-lg">
                    {feature.description}
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {feature.features.map((item, j) => (
                    <div
                      key={j}
                      className="flex items-center space-x-2 rounded-lg border p-4 bg-background"
                    >
                      <Check className="h-5 w-5 text-green-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-[85rem] mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="space-y-4 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to Get Started?
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg dark:text-gray-400">
                Join thousands of developers building modern web applications
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-11 px-8">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="h-11 px-8">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 