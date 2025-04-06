
import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import { Search, Zap, MapPin, Smartphone, VisionPro, LineChart, MessageCircle } from 'lucide-react';

const features = [
  {
    title: 'AI Damage Detection',
    description: 'Computer vision technology identifies dirt, cracks, and physical damage on solar panels with 99% accuracy.',
    icon: Search,
    color: 'text-primary',
    delay: 0
  },
  {
    title: 'Energy Loss Prediction',
    description: 'Predict energy losses from panel inefficiencies and receive real-time monitoring alerts.',
    icon: Zap,
    color: 'text-solar',
    delay: 0.1
  },
  {
    title: 'Panel Position Optimization',
    description: 'NASA solar data analysis determines the ideal panel placement for maximum energy production.',
    icon: MapPin,
    color: 'text-accent',
    delay: 0.2
  },
  {
    title: 'AR Placement',
    description: 'Augmented reality visualizations show optimal panel positioning on your actual roof.',
    icon: Smartphone,
    color: 'text-pink-500',
    delay: 0.3
  },
  {
    title: 'VR Simulation',
    description: 'Virtual reality simulations of sunlight angles throughout the year on your property.',
    icon: VisionPro,
    color: 'text-purple-500',
    delay: 0.4
  },
  {
    title: 'Historical Data Analysis',
    description: 'Analyze panel performance over time and identify patterns to maximize efficiency.',
    icon: LineChart,
    color: 'text-blue-500',
    delay: 0.5
  },
  {
    title: 'AI Chatbot Support',
    description: 'Get instant answers to your solar questions from our NLP-powered assistant.',
    icon: MessageCircle,
    color: 'text-green-500',
    delay: 0.6
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powered by Advanced Technology</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform combines artificial intelligence, computer vision, and augmented reality
            to revolutionize solar panel management and optimization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: feature.delay }}
            >
              <GlassCard>
                <div className={`${feature.color} p-3 inline-flex rounded-full bg-gray-100 mb-4`}>
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
