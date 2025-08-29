import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Play, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import IEDC from '../assets/iedc.png';
import Ignite from '../assets/ignite.png';
import Vblaze from '../assets/vblaze.png';
import Xtasy from '../assets/xtasy.png';

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const projects = [
    {
      title: 'XTASY Techno-Cultural Website',
      category: 'Web Development', 
      description: 'A dynamic and visually appealing website for the annual XTACY techno-cultural fest, featuring event details, registration portals, and galleries.',
      image: Xtasy,
      technologies: ['WordPress','Elementor','PHP','MySQL','React.js',],
      status: 'Live',
      links: {
        demo: 'https://xtasy2k25.stthomaskannur.ac.in/',
        github: 'https://xtasy2k25.stthomaskannur.ac.in/'
      }
    },
    {
      title: 'Ignite Sports Event Page',
      category: 'Web Development',
      description: 'A feature-rich website for the Ignite sports event, showcasing schedules, results, and photo galleries to engage participants and attendees.',
      image: Ignite,
      technologies: ['React','Tailwind CSS','Vite','Three.js'],
      status: 'Live',
      links: {
        demo: 'https://ignite2k24.stthomaskannur.ac.in',
        github: 'https://github.com/niranjcn/sports-page'
      }
    },
    
    {
      title: 'VBlaze Club Website',
      category: 'Web Development',
      description: 'An engaging and informative website for the VBlaze club, designed to attract new members and showcase club activities and achievements.',
      image: Vblaze,
      technologies: ['React','Tailwind CSS','Vite','Three.js'],
      status: 'Live',
      links: {
        demo: 'https://pradul-p.github.io/V-BLAZE/',
        github: 'https://github.com/PRADUL-P/V-BLAZE'
      }
    },
    {
      title: 'STM IEDC Website ',
      category: 'Web Development',
      description: 'A professional website for the St. Thomas College IEDC, providing resources and information for aspiring student entrepreneurs.',
      image: IEDC,
      technologies: ['React','Tailwind CSS','Vite','Three.js'],
      status: 'Live',
      links: {
        demo: 'https://www.stthomaskannur.ac.in/stm2/IEDC/',
        github: '#'
      }
    },
    {
      title: 'Mobile Health Tracking App',
      category: 'Mobile Development',
      description: 'Cross-platform health monitoring app with wearable integration, AI insights, and telemedicine features.',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'Firebase', 'TensorFlow Lite'],
      status: 'in Development',
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      title: 'Cloud Migration Platform',
      category: 'Cloud Solutions',
      description: 'Automated cloud migration tool with cost optimization, security assessment, and performance monitoring.',
      image: '/api/placeholder/600/400',
      technologies: ['AWS', 'Terraform', 'Go', 'React'],
      status: 'in Development',
      links: {
        demo: '#',
        github: '#'
      }
    }
  ];

  const categories = ['All', 'Machine Learning', 'Web Development', 'IoT & Automation', 'Cybersecurity', 'Mobile Development', 'Cloud Solutions'];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-4"></div>
            <h2 className="text-5xl md:text-6xl font-orbitron font-bold mb-6">
              Featured <span className="gradient-text bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mt-4"></div>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto font-exo leading-relaxed"
          >
            Explore our portfolio of cutting-edge solutions that have transformed businesses 
            and pushed the boundaries of what's possible with technology.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-full font-exo text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30" 
                  : "bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary border border-border/50"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
                whileHover={{ y: -15, transition: { duration: 0.3 } }}
                className="group"
              >
                <div className="glass rounded-2xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-500 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative overflow-hidden h-48 bg-gradient-to-br from-primary/20 to-secondary/20">
                    {/* Placeholder for actual image */}
                    <div className="w-full h-full flex items-center justify-center">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Action Buttons */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <motion.a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 border border-white/30 transition-all duration-300"
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </motion.a>
                      <motion.a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 border border-white/30 transition-all duration-300"
                      >
                        <Github className="w-5 h-5 text-white" />
                      </motion.a>
                    </div>

                    {/* Status Badge */}
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                      className="absolute top-4 right-4"
                    >
                      <span className={`px-3 py-1.5 rounded-full text-xs font-exo font-medium backdrop-blur-sm ${
                        project.status === 'Live' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                          : project.status === 'Beta'
                          ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                          : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      }`}>
                        {project.status}
                      </span>
                    </motion.div>

                    {/* Category Label */}
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                      className="absolute top-4 left-4"
                    >
                      <span className="px-3 py-1.5 rounded-full text-xs font-exo font-medium bg-black/40 text-white/90 backdrop-blur-sm border border-white/10">
                        {project.category}
                      </span>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-orbitron font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground font-exo text-sm leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.05 + 0.5 }}
                          className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-exo rounded-md border border-primary/20"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Links */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="flex gap-2 mt-auto"
                    >
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-xs font-exo group/btn"
                      >
                        View Details
                        <ArrowRight className="w-3 h-3 ml-1 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-primary/30 hover:border-primary hover:bg-primary/10 font-exo font-semibold group/cta"
          >
            View All Projects
            <ExternalLink className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/cta:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
