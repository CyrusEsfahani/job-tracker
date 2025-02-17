
import { motion } from 'framer-motion';
import ParticlesBackground from '../../components/shared/ParticlesBackground';
import Navigation from '../../components/layout/Navigation';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import CtaSection from './components/CtaSection';
import Footer from '../../components/layout/Footer';

export default function LandingPage() {
  return (
    <div className="relative overflow-hidden">
      <ParticlesBackground />
      <Navigation />
      
      <main className="relative z-10">
        <HeroSection />
        <Features />
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}