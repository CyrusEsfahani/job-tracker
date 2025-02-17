// src/pages/Features/index.tsx
import { motion } from 'framer-motion';
import Navigation from '../../components/layout/Navigation';
import Footer from '../../components/layout/Footer';
import { PieChart, Pie, BarChart, Bar, Cell, XAxis, YAxis } from 'recharts';
import { applicationData, responseData } from '../../data/chartData';

const features = [
    {
        title: "Application Tracking",
        chart: (
          <PieChart width={400} height={200}>
            <Pie
              data={applicationData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {applicationData.map((entry, index) => (
                <Cell key={index} fill={['#0d9488', '#059669', '#047857'][index % 3]} />
              ))}
            </Pie>
          </PieChart>
        )
      },
      {
        title: "Response Analytics",
        chart: (
          <BarChart width={400} height={200} data={responseData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="responses" fill="#0d9488" />
          </BarChart>
        )
      }
];

export default function FeaturesPage() {
  return (
    <div className="relative overflow-hidden">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-gray-900 mb-6"
          >
            Powerful Features for <span className="text-teal-600">Smart</span> Job Searching
          </motion.h1>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-16">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-2xl shadow-xl"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 h-64">
                {feature.chart}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-teal-50 p-8 rounded-2xl">
            <div className="text-4xl font-bold text-teal-600 mb-2">85%</div>
            <div className="text-gray-600">Application Success Rate</div>
          </div>
          <div className="bg-teal-50 p-8 rounded-2xl">
            <div className="text-4xl font-bold text-teal-600 mb-2">2.3x</div>
            <div className="text-gray-600">Faster Response Times</div>
          </div>
          <div className="bg-teal-50 p-8 rounded-2xl">
            <div className="text-4xl font-bold text-teal-600 mb-2">40%</div>
            <div className="text-gray-600">More Interviews Scheduled</div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}