
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-t from-blue-50/50 to-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <span className="font-bold text-2xl text-gradient">SolarVision AI</span>
            </Link>
            <p className="text-gray-600 max-w-md mb-4">
              Optimize your solar panels with AI-powered damage detection, energy loss prediction, and AR/VR experiences for ideal panel placement.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="Github" className="text-gray-500 hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="mailto:contact@solarvision.ai" aria-label="Email" className="text-gray-500 hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-gray-600 hover:text-primary transition-colors">Features</Link></li>
              <li><Link to="/ar-experience" className="text-gray-600 hover:text-primary transition-colors">AR/VR Demo</Link></li>
              <li><Link to="/dashboard" className="text-gray-600 hover:text-primary transition-colors">Try Demo</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-primary transition-colors">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">API</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2023 SolarVision AI. All rights reserved. Powered by TensorFlow, NASA API, Google Maps
          </p>
          <Button 
            onClick={scrollToTop} 
            variant="outline"
            className="rounded-full h-10 w-10 p-0"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
