'use client';

import { motion } from 'framer-motion';
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandFacebook,
} from '@tabler/icons-react';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

// HeroSection component with modern design and animations
export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Function to handle mouse movement and update spotlight position
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      containerRef.current.style.setProperty('--x', `${x}px`);
      containerRef.current.style.setProperty('--y', `${y}px`);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-grid-white/[0.02] group relative flex h-[100vh] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center"
    >
      {/* Spotlight effect */}
      <div
        className="pointer-events-none absolute inset-0 transition duration-300 ease-in-out"
        style={{
          background:
            'radial-gradient(800px circle at var(--x) var(--y), rgba(255,255,255,0.15), transparent 40%)',
        }}
      />

      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/20 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative z-20 flex flex-col items-center justify-center px-5">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 20,
            duration: 0.8,
          }}
          className="relative mb-8"
        >
          {/* Rotating border effect */}
          <div className="animate-spin-slow absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 p-1" />

          {/* Image container */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="relative h-48 w-48 rounded-full bg-black p-2"
          >
            <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-white/10">
              <Image
                src="/crottolo.jpg"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Main heading with animation */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text pb-4 text-center text-3xl font-bold text-transparent md:text-7xl"
        >
          Build Something Amazing
        </motion.h1>
        {/* Subheading with animation */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300 md:text-lg"
        >
          Create stunning websites and applications with our modern development
          stack. Get started now and bring your ideas to life.
        </motion.p>
        {/* Social buttons with hover effects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 flex flex-col gap-4 md:flex-row"
        >
          <button
            className="flex items-center gap-2 rounded-xl border border-white bg-transparent px-6 py-3 font-medium text-white transition-colors hover:bg-white/10"
            onClick={() => window.open('https://github.com/crottolo', '_blank')}
          >
            <IconBrandGithub className="h-5 w-5" />
            Star on GitHub
          </button>
          <button
            className="flex items-center gap-2 rounded-xl border border-white bg-transparent px-6 py-3 font-medium text-white transition-colors hover:bg-white/10"
            onClick={() =>
              window.open('https://instagram.com/crottolo', '_blank')
            }
          >
            <IconBrandInstagram className="h-5 w-5" />
            Follow on Instagram
          </button>
          <button
            className="flex items-center gap-2 rounded-xl border border-white bg-transparent px-6 py-3 font-medium text-white transition-colors hover:bg-white/10"
            onClick={() =>
              window.open('https://facebook.com/crottolo', '_blank')
            }
          >
            <IconBrandFacebook className="h-5 w-5" />
            Follow on Facebook
          </button>
        </motion.div>
      </div>
    </div>
  );
};
