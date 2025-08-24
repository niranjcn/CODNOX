import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  // Scroll and active section detection logic
  useEffect(() => {
    // Select all section elements that have an 'id' attribute
    const sections = document.querySelectorAll('section[id]');
    
    const handleScroll = () => {
      // Set scrolled state for navbar background effect
      setScrolled(window.scrollY > 50);
      
      let current = 'home'; // Default to 'home'
      // Add an offset equal to the navbar height for accurate detection
      const scrollY = window.scrollY + 80; 

      // Iterate over sections to find the current one
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        // If the top of the section is above the scroll position, it's the current one
        if (scrollY >= sectionTop) {
          current = section.getAttribute('id');
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on initial load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', to: '#about' },
    { name: 'Services', to: '#services' },
    { name: 'Portfolio', to: '#portfolio' },
    { name: 'Tech Stack', to: '#tech' },
    { name: 'Members', to: '#members' },
    { name: 'Contact', to: '#contact' },
  ];

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70, // Adjust offset for fixed navbar
        behavior: 'smooth',
      });
    } else if (targetId === '#home') {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
  };

  // Close mobile menu on location change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const NavLinkItem = ({ to, children }) => {
    const isActive = activeSection === to.substring(1);
    return (
      <a
        href={to}
        onClick={(e) => handleScrollTo(e, to)}
        className={`px-3 py-2 transition-all duration-300 font-exo font-medium relative group ${
          isActive ? 'text-primary' : 'text-foreground hover:text-primary'
        }`}
      >
        {children}
        <span
          className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 ${
            isActive ? 'w-full' : 'w-0 group-hover:w-full'
          }`}
        />
      </a>
    );
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? 'glass-strong shadow-glass backdrop-blur-xl' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" onClick={(e) => handleScrollTo(e, '#home')} className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-orbitron font-bold text-sm">C</span>
              </div>
              <span className="text-2xl font-orbitron font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                CODNOX
              </span>
            </motion.div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLinkItem key={item.name} to={item.to}>{item.name}</NavLinkItem>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-strong backdrop-blur-xl border-t border-border/20"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <a key={item.name} href={item.to} className="block text-foreground hover:text-primary transition-colors font-exo py-2" onClick={(e) => handleScrollTo(e, item.to)}>
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
