
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sun, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Sun className="h-8 w-8 text-solar mr-2" />
              <span className="font-bold text-xl sm:text-2xl text-gradient">SolarVision AI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground/80 hover:text-primary transition-colors">Home</Link>
            <Link to="/features" className="text-foreground/80 hover:text-primary transition-colors">Features</Link>
            <Link to="/ar-experience" className="text-foreground/80 hover:text-primary transition-colors">AR/VR Demo</Link>
            <Link to="/about" className="text-foreground/80 hover:text-primary transition-colors">About</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button asChild variant="ghost" className="rounded-full">
              <Link to="/contact">Contact</Link>
            </Button>
            <Button asChild className="rounded-full bg-primary hover:bg-primary/90">
              <Link to="/dashboard">Try Demo</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-in">
          <div className="px-4 pt-2 pb-4 space-y-4">
            <Link to="/" className="block py-2 text-foreground" onClick={toggleMobileMenu}>Home</Link>
            <Link to="/features" className="block py-2 text-foreground" onClick={toggleMobileMenu}>Features</Link>
            <Link to="/ar-experience" className="block py-2 text-foreground" onClick={toggleMobileMenu}>AR/VR Demo</Link>
            <Link to="/about" className="block py-2 text-foreground" onClick={toggleMobileMenu}>About</Link>
            <Link to="/contact" className="block py-2 text-foreground" onClick={toggleMobileMenu}>Contact</Link>
            <Button asChild className="w-full bg-primary hover:bg-primary/90">
              <Link to="/dashboard" onClick={toggleMobileMenu}>Try Demo</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
