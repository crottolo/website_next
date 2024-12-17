import { HeroSection } from '@/components/HeroSection';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { Metadata } from 'next';

const projects = [
  {
    title: 'Odoo Development',
    description:
      'Custom module development, integrations, and customizations for Odoo ERP. Versions 14.0, 15.0, 16.0, 17.0, 18.0',
    link: '#',
  },
  {
    title: 'FastAPI & Python',
    description:
      'High-performance RESTful API development with FastAPI. Robust Python backend and automation solutions.',
    link: '#',
  },
  {
    title: 'LLM & AI Integration',
    description:
      'Integration of advanced language models and artificial intelligence solutions into business processes.',
    link: '#',
  },
  {
    title: '3CX Phone System',
    description:
      '3CX phone system configuration and customization. Integration with CRM and existing systems.',
    link: '#',
  },
  {
    title: 'Web Development',
    description:
      'Modern web application development with Next.js, React, and TypeScript. UI/UX design and implementation.',
    link: '#',
  },
  {
    title: 'DevOps & Cloud',
    description:
      'Cloud infrastructure management, CI/CD, Docker containerization, and Kubernetes orchestration.',
    link: '#',
  },
];

export const metadata: Metadata = {
  title: 'Crottolo - Full Stack Developer & AI Specialist',
  description:
    'Full Stack Developer specialized in Odoo, FastAPI, LLM, and 3CX. Developing modern web solutions integrated with artificial intelligence.',
  keywords: [
    'Odoo',
    'Full Stack',
    'Developer',
    'Next.js',
    'React',
    'TypeScript',
    'FastAPI',
    'LLM',
    '3CX',
    'AI',
    'Machine Learning',
    'Python',
    'Web Development',
  ],
  authors: [{ name: 'Crottolo' }],
  creator: 'Crottolo',
  publisher: 'Crottolo',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Crottolo - Full Stack Developer & AI Specialist',
    description:
      'Full Stack Developer specialized in Odoo, FastAPI, LLM, and 3CX. Developing modern web solutions integrated with artificial intelligence.',
    url: 'https://rcrotti.it',
    siteName: 'Crottolo Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Crottolo Portfolio - Full Stack & AI Development',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crottolo - Full Stack Developer & AI Specialist',
    description:
      'Full Stack Developer specialized in Odoo, FastAPI, LLM, and 3CX. Developing modern web solutions integrated with artificial intelligence.',
    images: ['/og-image.jpg'],
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <section className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-black px-4 py-24">
        <div className="container">
          <div className="mb-8 flex flex-col justify-center gap-4 items-center">
            <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-7xl">
              Specializations
            </h2>
            <p className="max-w-2xl text-base text-neutral-200 md:text-lg">
              Explore my core competencies and discover how I can help you bring
              your projects to life.
            </p>
          </div>
          <HoverEffect items={projects} />
        </div>
      </section>
    </main>
  );
}
