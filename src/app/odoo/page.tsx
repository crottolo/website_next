"use client";

import { Button } from "@/components/ui/button"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import Link from "next/link"
import { Code, Cloud, Settings, Zap, Shield, Users, Database, ArrowRight } from "lucide-react"

export default function OdooPage() {
  const versions = [
    {
      version: "Odoo 18.0",
      status: "Early Access Partner",
      features: "Latest innovations and improvements",
      icon: Zap
    },
    {
      version: "Odoo 17.0",
      status: "Full Support",
      features: "Current stable version with all features",
      icon: Shield
    },
    {
      version: "Odoo 16.0",
      status: "Enterprise Ready",
      features: "Proven stability and performance",
      icon: Database
    },
    {
      version: "Odoo 14.0-15.0",
      status: "Legacy Support",
      features: "Maintenance and upgrades",
      icon: Settings
    }
  ]

  const services = [
    {
      title: "Implementation",
      description: "Full-scale Odoo implementation tailored to your business needs",
      features: [
        "Business process analysis",
        "Module selection and configuration",
        "Data migration",
        "User training and support"
      ],
      icon: Cloud
    },
    {
      title: "Development",
      description: "Custom module development and system integration",
      features: [
        "Custom module creation",
        "API integration",
        "Third-party system connection",
        "Performance optimization"
      ],
      icon: Code
    },
    {
      title: "Support",
      description: "Comprehensive technical support and maintenance",
      features: [
        "24/7 technical assistance",
        "Bug fixing",
        "Performance monitoring",
        "Regular updates"
      ],
      icon: Users
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Odoo Solutions
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Expert Odoo development and implementation services for all versions
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Supported Versions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {versions.map((version, i) => (
                <BackgroundGradient key={i}>
                  <div className="space-y-4 min-h-[180px]">
                    <version.icon className="h-8 w-8 text-[#44ff9a]" />
                    <h3 className="text-xl font-bold text-white">{version.version}</h3>
                    <p className="text-green-500 font-medium">{version.status}</p>
                    <p className="text-gray-400">{version.features}</p>
                  </div>
                </BackgroundGradient>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Odoo Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <BackgroundGradient key={i}>
                  <div className="space-y-4 min-h-[290px]">
                    <service.icon className="h-8 w-8 text-[#44b0ff]" />
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, j) => (
                        <li key={j} className="text-gray-400">• {feature}</li>
                      ))}
                    </ul>
                  </div>
                </BackgroundGradient>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white">Ready to Upgrade Your Business?</h2>
              <p className="text-gray-400 max-w-[600px] mx-auto">
                Let us help you implement or optimize your Odoo ERP system
              </p>
              <div className="flex justify-center gap-4">
                <Link href="/contact">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/cases">
                  <Button
                    variant="outline"
                    className="border-green-600 text-green-600 hover:text-green-600 hover:bg-green-50/50 dark:border-green-400 dark:text-green-400 dark:hover:text-green-400 dark:hover:bg-green-950/50"
                  >
                    View Success Stories
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 