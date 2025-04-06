
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const DemoSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50/50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              See How It Works
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Upload an image of your solar panels and watch our AI analyze it in real-time. Get detailed insights into panel condition, efficiency, and optimization recommendations.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Instant damage detection and classification',
                'Energy loss calculation based on panel condition',
                'Predictive maintenance recommendations',
                'Optimization strategies for panel placement'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-sm mr-3 mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90">
              <Link to="/dashboard">
                Try the Demo <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/50">
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Solar panel with AI analysis overlay"
                className="w-full h-auto"
                loading="lazy"
              />
              
              {/* AI analysis overlay with annotation boxes */}
              <div className="absolute inset-0 bg-black/10">
                {/* Simulated detection boxes */}
                <div className="absolute top-[20%] left-[30%] w-[100px] h-[80px] border-2 border-red-500 rounded-md">
                  <div className="absolute -top-6 left-0 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    Dirt: 92%
                  </div>
                </div>
                <div className="absolute top-[40%] left-[60%] w-[120px] h-[90px] border-2 border-yellow-500 rounded-md">
                  <div className="absolute -top-6 left-0 bg-yellow-500 text-white text-xs px-2 py-1 rounded">
                    Efficiency: 76%
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 top-8 -right-8 w-72 h-72 bg-solar/20 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -bottom-8 -left-8 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
