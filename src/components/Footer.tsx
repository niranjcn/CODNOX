import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ArrowUp, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    Services: [
      'AI & Machine Learning',
      'Web Development',
      'Mobile Development',
      'Cloud Solutions',
      'Data Science',
      'Cybersecurity'
    ],
    Company: [
      'About Us',
      'Our Team',
      'Careers',
      'Blog',
      'Case Studies',
      'Contact'
    ],
    Resources: [
      'Documentation',
      'API Reference',
      'Support Center',
      'Community',
      'Tutorials',
      'Whitepapers'
    ],
    Legal: [
      'Privacy Policy',
      'Terms of Service',
      'Cookie Policy',
      'GDPR Compliance',
      'Security',
      'Accessibility'
    ]
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: '#', label: 'Email' }
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>

      {/* Scroll to Top Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex justify-center relative z-10 -mb-6"
      >
        <Button
          onClick={scrollToTop}
          className="bg-gradient-primary hover:glow-primary rounded-full w-12 h-12 p-0 shadow-glass"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      </motion.div>

      <div className="glass-strong border-t border-primary/20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-5 gap-12 mb-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              {/* Logo */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-orbitron font-bold">C</span>
                </div>
                <span className="text-3xl font-orbitron font-bold gradient-text">
                  CODNOX
                </span>
              </div>

              <p className="text-muted-foreground font-exo text-lg leading-relaxed mb-6 max-w-md">
                Engineering tomorrow's digital intelligence through cutting-edge AI solutions, 
                web development, and innovative technology services.
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 glass rounded-lg flex items-center justify-center border border-primary/20 hover:border-primary hover:glow-sm transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-orbitron font-bold text-foreground text-lg mb-6">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => (
                    <motion.li
                      key={linkIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (linkIndex * 0.05) }}
                      viewport={{ once: true }}
                    >
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-primary transition-colors font-exo text-sm relative group"
                      >
                        {link}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-6 rounded-2xl border border-primary/20 mb-12"
          >
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-xl font-orbitron font-bold mb-4 gradient-text">
                Stay Updated with CODNOX
              </h3>
              <p className="text-muted-foreground font-exo mb-6">
                Get the latest insights on AI, technology trends, and exclusive updates 
                delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 glass border border-primary/20 focus:border-primary focus:glow-sm transition-all duration-300 rounded-lg px-4 py-3 bg-background text-foreground font-exo"
                />
                <Button className="bg-gradient-primary hover:glow-primary font-exo font-semibold">
                  Subscribe
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="border-t border-primary/20 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-muted-foreground font-exo text-sm">
                <span>© 2024 CODNOX. All rights reserved.</span>
                <span className="hidden md:inline">•</span>
                <span className="flex items-center gap-1">
                  Made with <Heart className="w-3 h-3 text-red-500" /> and cutting-edge tech
                </span>
              </div>
              
              <div className="flex items-center gap-6 text-sm font-exo">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Cookies
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;