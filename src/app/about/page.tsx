import { FadeInImage } from "@/components/ui/fade-in-image"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const team = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop"
    },
    {
      name: "Jane Smith",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop"
    },
    {
      name: "Mike Johnson",
      role: "Lead Designer",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=2787&auto=format&fit=crop"
    }
  ]

  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                About Our Company
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                We're building the future of web development with modern tools and technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Our Mission</h2>
              <p className="text-gray-500 dark:text-gray-400">
                We're on a mission to make web development more accessible, efficient, and enjoyable for everyone.
                Our platform combines cutting-edge technology with intuitive design to create the best possible
                experience for developers.
              </p>
              <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Building innovative solutions
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Supporting developer communities
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Creating sustainable technology
                </li>
              </ul>
            </div>
            <FadeInImage
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop"
              alt="Team working together"
              width={800}
              height={600}
              className="w-full aspect-video"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Meet Our Team
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                The talented people behind our success
              </p>
            </div>
          </div>
          <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <div key={i} className="group relative overflow-hidden rounded-lg">
                <FadeInImage
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={500}
                  className="aspect-[3/4] w-full"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-6 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Join Our Journey
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Be part of something special. Let's build the future together.
              </p>
            </div>
            <div className="space-x-4">
              <Button size="lg">Get Started</Button>
              <Button variant="outline" size="lg">Contact Us</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 