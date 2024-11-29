import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for trying out our platform",
      features: [
        "Up to 3 projects",
        "Basic analytics",
        "24/7 support",
        "Community access",
        "1 team member"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      description: "Best for professional developers",
      features: [
        "Unlimited projects",
        "Advanced analytics",
        "Priority support",
        "Custom domains",
        "10 team members",
        "Advanced security",
        "API access"
      ],
      cta: "Start Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For large teams and organizations",
      features: [
        "Everything in Pro",
        "Unlimited team members",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Advanced security",
        "Custom contracts"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ]

  return (
    <div className="flex flex-col items-center w-full">
      <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
        <div className="max-w-[85rem] mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="space-y-4 max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Simple, transparent pricing
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Choose the perfect plan for your needs. Always know what you&apos;ll pay.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="max-w-[85rem] mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`relative flex flex-col p-6 bg-background rounded-xl border ${
                  plan.popular
                    ? "border-primary shadow-lg scale-105"
                    : "border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-primary px-3 py-1 text-center text-sm text-primary-foreground">
                    Most Popular
                  </div>
                )}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span className="ml-1 text-gray-500 dark:text-gray-400">
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    {plan.description}
                  </p>
                </div>
                <div className="mt-8">
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </div>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
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
                Need something different?
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg dark:text-gray-400">
                Contact our sales team for custom pricing options. We&apos;re here to help you find the perfect solution.
              </p>
            </div>
            <Button size="lg" variant="outline" className="h-11 px-8">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 