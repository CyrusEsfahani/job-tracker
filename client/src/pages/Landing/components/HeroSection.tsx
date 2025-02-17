// src/pages/Landing/components/HeroSection.tsx
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

export default function HeroSection() {
  return (
    <section className="pt-32 pb-40 px-4 relative">
      {/* Floating Shapes */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="w-64 h-64 bg-teal-100/20 rounded-full absolute top-1/4 left-1/4"
          animate={{
            y: [0, -40, 0],
            rotate: [0, 15, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="w-48 h-48 bg-emerald-100/20 rounded-2xl absolute top-1/3 right-1/4"
          animate={{
            y: [0, -30, 0],
            rotate: [0, -10, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            delay: 1,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold text-gray-900 mb-6 leading-tight"
        >
          Track Applications Like a 
          <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent"> Hawk</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Precision tools for serious job seekers - organize, analyze, and optimize your search
        </motion.p>

        {/* Dashboard Preview */}
        <motion.div 
          className="mt-20 mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 max-w-5xl relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <img 
            src="/assets/dashboard-preview.png" 
            alt="JobHawk Dashboard Preview" 
            className="w-full h-auto relative z-10" 
          />
          
          {/* Enhanced Floating Elements */}
          <motion.div
            className="absolute -top-12 -right-12 w-32 h-32 bg-teal-100/30 rounded-xl transform rotate-12"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity
            }}
          />
          <motion.div
            className="absolute -bottom-12 -left-12 w-40 h-40 bg-emerald-100/30 rounded-2xl transform -rotate-6"
            animate={{
              y: [0, 20, 0],
              scale: [1, 0.95, 1]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              delay: 0.5
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}