// src/components/layout/Footer.tsx
import { motion } from 'framer-motion';
import { FiTwitter, FiLinkedin, FiGithub, FiMessageCircle } from 'react-icons/fi';

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-b from-white to-teal-50 border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <svg className="w-8 h-8 text-teal-600" viewBox="0 0 100 100">
                <path fill="currentColor" d="M50 15L20 50l30 35 30-35z"/>
                <path fill="#059669" d="M50 25L30 50l20 25 20-25z"/>
              </svg>
              <span className="text-2xl font-bold text-gray-900">JobHawk</span>
            </div>
            <p className="text-gray-600 mb-4">
              Precision tools for modern job seekers
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-600 transition-colors">
                <FiTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-600 transition-colors">
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-600 transition-colors">
                <FiGithub className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-600 transition-colors">
                <FiMessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">Changelog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">Status</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">API Docs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">Community</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Stay Updated</h3>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-4 py-2 rounded-lg hover:shadow-md transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} JobHawk. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">Privacy</a>
            <a href="#" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">Terms</a>
            <a href="#" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}