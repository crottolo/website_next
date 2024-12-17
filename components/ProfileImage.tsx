'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export const ProfileImage = () => {
  return (
    <div className="relative flex h-[40vh] w-full items-center justify-center overflow-hidden bg-black">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 20,
          duration: 0.8,
        }}
        className="relative"
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
            <Image src="/profile.jpg" alt="Profile" fill className="object-cover" priority />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
