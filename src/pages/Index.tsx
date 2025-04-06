
import { motion } from 'framer-motion';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import DemoSection from '@/components/home/DemoSection';
import CTASection from '@/components/home/CTASection';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="overflow-x-hidden"
    >
      <Navbar />
      <Hero />
      <Features />
      <DemoSection />
      <CTASection />
      <Footer />
    </motion.div>
  );
};

export default Index;
