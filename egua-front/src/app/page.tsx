'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from '@/components/ThemeToggle';
import { GradientButton } from '@/components/GradientButton';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScrollProgress } from '@/components/ScrollProgress';
import { Tooltip } from '@/components/Tooltip';

export default function Home() {
  return(
    <div
      className="min-h-screen flex flex-col gap-12 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-white transition-colors" 
    >
      <ScrollProgress />

      {/* Navbar */}
      <motion.div
//logo e nome Senior Code 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full z-40 py-4 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/50 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/"
                className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3"
              >
                <Image
                  src="/hu.png"
                  alt="Senior Code AI Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                Senior Code 
              </Link>
        
          </motion.div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <motion.div
        className="flex-1 flex items-center justify-center py-20 pt-40"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-12 text-slate-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {' '}
              <motion.span
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              >
                Senior Code 
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl max-w-2xl mx-auto mb-16 text-slate-600 dark:text-slate-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Uma jornada para aprender programação, especialmente
              pensada para você. 
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center"
            >
              <Tooltip content="Comece sua jornada agora mesmo">
                <GradientButton href="/cadastro">
                  🚀 Clique aqui para começar a aprender →
                </GradientButton>
              </Tooltip>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-200 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900/30">
        <div className="container mx-auto px-6 text-center">
          <motion.p
            className="text-slate-600 dark:text-slate-400"
            whileHover={{ scale: 1.02 }}
          >
            🏛️ Senior Code
          </motion.p>
        </div>
      </footer>
    </div>
  );
}
