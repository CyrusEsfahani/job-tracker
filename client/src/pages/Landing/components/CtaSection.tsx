// src/pages/Landing/components/CtaSection.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';

export default function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-teal-50 to-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 mb-8"
        >
          Ready to Transform Your Job Search?
        </motion.h2>
        <motion.div
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
        >
          <Link 
            to="/signup" 
            className="inline-flex items-center bg-teal-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-teal-700 transition-colors shadow-lg"
          >
            Start Free Trial
            <FiArrowUpRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}