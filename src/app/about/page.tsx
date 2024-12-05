"use client";

import { Button } from "@/components/ui/button"
import { FadeInImage } from "@/components/ui/fade-in-image"
import { Code, Building, Award, Globe } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const stats = [
    {
      icon: Code,
      value: "14.0-18.0",
      label: "Odoo Versions",
      description: "Full support for all recent Odoo versions"
    },
    {
      icon: Globe,
      value: "ZEC",
      label: "Registered",
      description: "Operating in Canary Islands Special Zone"
    },
    {
      icon: Building,
      value: "100+",
      label: "Clients",
      description: "Trusted by businesses worldwide"
    },
    {
      icon: Award,
      value: "10+",
      label: "Years Experience",
      description: "In software development and Odoo solutions"
    }
  ]

  return (
    <div className='flex flex-col min-h-screen'>
      <main className='flex-1'>
        {/* Hero Section */}
        <section className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-black to-gray-900'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='flex flex-col items-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white'>
                  Empowering Business Growth Through Technology
                </h1>
                <p className='mx-auto max-w-[700px] text-gray-400 md:text-xl'>
                  Delivering innovative software solutions and Odoo expertise from the Canary Islands to the world
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className='w-full py-12 md:py-24 lg:py-32 bg-black'>
          <div className='container px-4 md:px-6 mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {stats.map((stat, i) => (
                <div key={i} className='flex flex-col items-center space-y-4 text-center'>
                  <div className='p-4 bg-green-600/10 rounded-full'>
                    <stat.icon className='h-6 w-6 text-green-600' />
                  </div>
                  <div className='space-y-2'>
                    <h2 className='text-3xl font-bold text-white'>{stat.value}</h2>
                    <p className='text-xl font-medium text-green-600'>{stat.label}</p>
                    <p className='text-gray-400'>{stat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-900 to-black'>
          <div className='container px-4 md:px-6 mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
              <div className='space-y-4'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white'>
                  Our Mission
                </h2>
                <p className='text-gray-400 md:text-xl'>
                  We believe that every business deserves access to enterprise-grade software solutions.
                  Our mission is to make powerful business tools accessible, efficient, and tailored to your needs.
                </p>
                <div className='space-y-2'>
                  <p className='text-gray-400'>
                    • Expert Odoo development and customization
                  </p>
                  <p className='text-gray-400'>• Cloud-based SAAS solutions</p>
                  <p className='text-gray-400'>• 24/7 technical support and training</p>
                </div>
                <div className='pt-4'>
                  <Link href='/contact'>
                    <Button className='bg-green-600 hover:bg-green-700 text-white'>
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
              <div className='relative'>
                <FadeInImage
                  src='/images/team.png'
                  alt='Persevida Team'
                  width={600}
                  height={400}
                  className='rounded-xl shadow-2xl'
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='w-full py-12 md:py-24 lg:py-32 bg-black'>
          <div className='container px-4 md:px-6 mx-auto'>
            <div className='flex flex-col items-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white'>
                  Ready to Transform Your Business?
                </h2>
                <p className='mx-auto max-w-[700px] text-gray-400 md:text-xl'>
                  Discover how Persevida can help your company leverage the power of Odoo and custom software solutions
                </p>
              </div>
              <div className='space-x-4'>
                <Link href='/contact'>
                  <Button className='bg-green-600 hover:bg-green-700 text-white'>Get Started</Button>
                </Link>
                <Link href='/services'>
                  <Button
                    variant='outline'
                    className='border-green-600 text-green-600 hover:text-green-600 hover:bg-green-50/50 dark:border-green-400 dark:text-green-400 dark:hover:text-green-400 dark:hover:bg-green-950/50'>
                    Our Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 