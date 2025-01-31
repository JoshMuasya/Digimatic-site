"use client"

// components/Hero.js
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import Loading from './Loading';

const HeroTest = () => {
  const [loading, setLoading] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      {loading && <Loading onLoadingComplete={() => setLoading(false)} />}
      {!loading && (
        <motion.div
          className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-6xl font-bold mb-4"
            variants={itemVariants}
          >
            Innovating the Future
          </motion.h1>
          <motion.p
            className="text-xl mb-8"
            variants={itemVariants}
          >
            We build cutting-edge software solutions for your business.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link href="/contact">
              <motion.button
                className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default HeroTest;