// src/components/layout/Navigation.tsx
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';

export default function Navigation() {
  return (
    <nav className="fixed w-full z-50 backdrop-blur-md bg-white/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            {/* Logo SVG */}
            <svg className="w-8 h-8 text-teal-600" viewBox="0 0 100 100">
              <path fill="currentColor" d="M50 15L20 50l30 35 30-35z"/>
              <path fill="#059669" d="M50 25L30 50l20 25 20-25z"/>
            </svg>
            <span className="text-2xl font-bold text-gray-900">JobHawk</span>
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link to="/features" className="text-gray-600 hover:text-teal-600 transition-colors">
              Features
            </Link>
            <Link to="/pricing" className="text-gray-600 hover:text-teal-600 transition-colors">
              Pricing
            </Link>
            <Link 
              to="/signup" 
              className="flex items-center bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all"
            >
              Get Started
              <FiArrowUpRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}