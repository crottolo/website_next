"use client";

import { Button } from "@/components/ui/button"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import Link from "next/link"
import { Code, Cloud, Cog, Database, Server, Users, Rocket, Laptop } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      title: "Odoo Development",
      description: "Custom Odoo modules and implementations tailored to your business needs. Supporting versions 14.0 through 18.0.",
      icon: Code,
      features: [
        "Custom module development",
        "Version upgrades and migrations",
        "Integration with third-party systems",
        "Performance optimization"
      ]
    },
    {
      title: "SAAS Solutions",
      description: "Cloud-based software solutions with high availability and scalability for your growing business.",
      icon: Cloud,
      features: [
        "Managed cloud hosting",
        "Automatic backups",
        "High availability setup",
        "Security monitoring"
      ]
    },
    {
      title: "ERP Implementation",
      description: "Full-scale Odoo ERP implementation and customization services for businesses of all sizes.",
      icon: Database,
      features: [
        "Business process analysis",
        "Data migration",
        "User training",
        "Post-implementation support"
      ]
    },
    {
      title: "Custom Development",
      description: "Bespoke software solutions designed and developed to address your specific business challenges.",
      icon: Cog,
      features: [
        "Web applications",
        "API development",
        "System integration",
        "Legacy system modernization"
      ]
    }
  ]

  const additionalServices = [
    {
      title: "Technical Support",
      description: "24/7 technical support for all your Odoo and custom software needs",
      icon: Users
    },
    {
      title: "Cloud Migration",
      description: "Seamless migration of your existing systems to cloud infrastructure",
      icon: Server
    },
    {
      title: "ZEC Benefits",
      description: "Take advantage of Canary Islands Special Zone tax incentives",
      icon: Rocket
    },
    {
      title: "System Integration",
      description: "Connect your business systems for improved efficiency",
      icon: Laptop
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
                  Our Services
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Comprehensive software solutions to drive your business forward
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, i) => (
                <BackgroundGradient key={i}>
                  <div className="space-y-4">
                    <service.icon className="h-8 w-8 text-[#44ff9a]" />
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
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

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Additional Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {additionalServices.map((service, i) => (
                <BackgroundGradient key={i}>
                  <div className="space-y-4">
                    <service.icon className="h-8 w-8 text-[#44b0ff]" />
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                </BackgroundGradient>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white">Ready to Get Started?</h2>
              <p className="text-gray-400 max-w-[600px] mx-auto">
                Contact us to discuss how we can help transform your business with our software solutions
              </p>
              <div className="flex justify-center gap-4">
                <Link href="/contact">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    Contact Us
                  </Button>
                </Link>
                <Link href="/cases">
                  <Button
                    variant="outline"
                    className="border-green-600 text-green-600 hover:text-green-600 hover:bg-green-50/50 dark:border-green-400 dark:text-green-400 dark:hover:text-green-400 dark:hover:bg-green-950/50"
                  >
                    View Case Studies
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