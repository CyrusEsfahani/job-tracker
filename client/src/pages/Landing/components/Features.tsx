import { motion } from 'framer-motion';
import { FiBarChart2, FiBell, FiLayers, FiShield } from 'react-icons/fi';

const features = [
  {
    icon: FiBarChart2,
    title: "Advanced Analytics",
    description: "Track application success rates, response times, and company insights"
  },
  {
    icon: FiLayers,
    title: "Unified Dashboard",
    description: "Manage all applications in one place with customizable views"
  },
  {
    icon: FiBell,
    title: "Smart Reminders",
    description: "Never miss a follow-up with AI-powered reminders"
  },
  {
    icon: FiShield,
    title: "Secure & Private",
    description: "Bank-level encryption for your sensitive data"
  }
];

// Add default export here
// src/pages/Landing/components/Features.tsx
export default function Features() {
    return (
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-gray-900 mb-6"
            >
              Why JobHawk Soars Above the Rest
            </motion.h2>
          </div>
  
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <feature.icon className="w-12 h-12 text-teal-600 mb-6" />
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }