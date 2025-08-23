import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Bot, Globe, Network, BarChart3, Smartphone, Shield, Cloud, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    // Services is handled separately for the dropdown
    { name: 'Portfolio', to: '/portfolio' },
    { name: 'Tech Stack', to: '/tech' },
    { name: 'Contact', to: '/contact' },
  ];
  
  const services = [
    { icon: Bot, title: 'AI & Machine Learning' },
    { icon: Globe, title: 'Web Development' },
    { icon: Network, title: 'Network Automation' },
    { icon: BarChart3, title: 'Data Science' },
    { icon: Smartphone, title: 'Mobile Development' },
    { icon: Cloud, title: 'Cloud Solutions' },
    { icon: Shield, title: 'Cybersecurity' },
    { icon: Cpu, title: 'IoT Solutions' }
  ];

  const toSlug = (title: string) => title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');

  // Close mobile menu on navigation
  useEffect(() => {
    setIsOpen(false);
    setServicesDropdownOpen(false);
  }, [location]);

  const NavLinkItem = ({ to, children }) => {
    // Custom NavLink to handle active state for the underline
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          `px-3 py-2 transition-all duration-300 font-exo font-medium relative group ${
            isActive ? 'text-primary' : 'text-foreground hover:text-primary'
          }`
        }
      >
        {({ isActive }) => (
          <>
            {children}
            <span
              className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-primary transition-all duration-300 ${
                isActive ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            />
          </>
        )}
      </NavLink>
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
          <NavLink to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-orbitron font-bold text-sm">C</span>
              </div>
              <span className="text-2xl font-orbitron font-bold gradient-text">
                CODNOX
              </span>
            </motion.div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.slice(0, 2).map((item) => ( // Home, About
              <NavLinkItem key={item.name} to={item.to}>{item.name}</NavLinkItem>
            ))}

            {/* Services Dropdown */}
            <div className="relative" onMouseEnter={() => setServicesDropdownOpen(true)} onMouseLeave={() => setServicesDropdownOpen(false)}>
               <NavLink
                 to="/services"
                 className={({ isActive }) =>
                    `px-3 py-2 flex items-center gap-1 transition-all duration-300 font-exo font-medium relative group ${
                      isActive ? 'text-primary' : 'text-foreground hover:text-primary'
                    }`
                 }
               >
                 {({ isActive }) => (
                   <>
                     Services
                     <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                     <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-primary transition-all duration-300 ${
                         isActive ? 'w-full' : 'w-0 group-hover:w-full'
                       }`}
                     />
                   </>
                 )}
               </NavLink>
              <AnimatePresence>
                {isServicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 glass-strong rounded-xl shadow-glass p-4"
                  >
                    <div className="space-y-2">
                      {services.map(service => (
                        <NavLink key={service.title} to={`/services#${toSlug(service.title)}`} className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/10 transition-colors text-sm font-exo text-foreground">
                          <service.icon className="w-4 h-4 text-primary" />
                          {service.title}
                        </NavLink>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
             
            {navItems.slice(2).map((item) => ( // Portfolio, Tech Stack, Contact
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
                <NavLink key={item.name} to={item.to} className="block text-foreground hover:text-primary transition-colors font-exo py-2" onClick={() => setIsOpen(false)}>
                  {item.name}
                </NavLink>
              ))}
               {/* Mobile Services Dropdown */}
              <div>
                <button onClick={() => setServicesDropdownOpen(!isServicesDropdownOpen)} className="w-full flex justify-between items-center text-foreground hover:text-primary transition-colors font-exo py-2">
                    Services
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesDropdownOpen && (
                    <div className="pl-4 pt-2 space-y-2">
                         {services.map(service => (
                        <NavLink key={service.title} to={`/services#${toSlug(service.title)}`} className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/10 transition-colors text-sm font-exo text-foreground" onClick={() => setIsOpen(false)}>
                          <service.icon className="w-4 h-4 text-primary" />
                          {service.title}
                        </NavLink>
                      ))}
                    </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
