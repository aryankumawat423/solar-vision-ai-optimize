
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sun, Search, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const floatingIconVariants = {
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  return (
    <section className="relative hero-gradient min-h-[90vh] pt-32 pb-16 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-40"></div>
      
      {/* Floating elements for visual interest */}
      <motion.div 
        className="absolute top-1/4 right-[10%] text-primary/30"
        variants={floatingIconVariants}
        animate="float"
      >
        <Sun size={80} className="animate-spin-slow" />
      </motion.div>
      <motion.div 
        className="absolute bottom-1/4 left-[10%] text-solar/30"
        variants={floatingIconVariants}
        animate="float"
        transition={{ delay: 1 }}
      >
        <Search size={60} />
      </motion.div>
      <motion.div 
        className="absolute top-2/3 right-[20%] text-accent/30"
        variants={floatingIconVariants}
        animate="float"
        transition={{ delay: 2 }}
      >
        <LineChart size={70} />
      </motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            variants={itemVariants}
          >
            <span className="text-gradient">Optimize Your Solar Power</span>
            <br />with Artificial Intelligence
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Our AI-powered platform detects panel damage, predicts energy loss, and 
            uses AR technology to recommend ideal placement based on NASA solar data.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={itemVariants}
          >
            <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 px-8">
              <Link to="/dashboard">
                Try Demo <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a href="#features">Explore Features</a>
            </Button>
          </motion.div>
          
          <motion.div 
            className="relative mt-16 max-w-4xl mx-auto"
            variants={itemVariants}
          >
            <div className="glass p-2 rounded-2xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Solar panel array with AI overlay visualization"
                className="w-full h-auto rounded-xl object-cover"
                loading="lazy"
              />
              {/* AI visualization overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-xl"></div>
              <div className="absolute bottom-4 right-4 glass px-3 py-2 text-sm font-medium text-white rounded-lg">
                AI Vision Active
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-24">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.92,146.86,111.31,217.71,94.86,278.22,80.78,312.34,70.17,351.39,56.44Z" fill="white"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
