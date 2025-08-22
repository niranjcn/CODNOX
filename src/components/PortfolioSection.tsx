import { motion } from 'framer-motion';
import { ExternalLink, Github, Play, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PortfolioSection = () => {
  const projects = [
    {
      title: 'AI-Powered Analytics Platform',
      category: 'Machine Learning',
      description: 'Advanced analytics platform with real-time data processing, predictive modeling, and interactive dashboards for enterprise clients.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
      status: 'Live',
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      title: 'Smart IoT Monitoring System',
      category: 'IoT & Automation', 
      description: 'Comprehensive IoT solution for industrial monitoring with edge computing, real-time alerts, and predictive maintenance.',
      image: '/api/placeholder/600/400',
      technologies: ['Node.js', 'MQTT', 'InfluxDB', 'Vue.js'],
      status: 'In Development',
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      title: 'E-commerce Optimization Suite',
      category: 'Web Development',
      description: 'AI-driven e-commerce platform with personalized recommendations, dynamic pricing, and conversion optimization.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'Stripe', 'MongoDB', 'Docker'],
      status: 'Live',
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      title: 'Network Security Dashboard',
      category: 'Cybersecurity',
      description: 'Real-time network security monitoring with threat detection, automated responses, and compliance reporting.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Elasticsearch', 'Python', 'Kubernetes'],
      status: 'Live',
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      title: 'Mobile Health Tracking App',
      category: 'Mobile Development',
      description: 'Cross-platform health monitoring app with wearable integration, AI insights, and telemedicine features.',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'Firebase', 'TensorFlow Lite'],
      status: 'Live',
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
      status: 'Beta',
      links: {
        demo: '#',
        github: '#'
      }
    }
  ];

  const categories = ['All', 'Machine Learning', 'Web Development', 'IoT & Automation', 'Cybersecurity', 'Mobile Development', 'Cloud Solutions'];

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-exo leading-relaxed">
            Explore our portfolio of cutting-edge solutions that have transformed businesses 
            and pushed the boundaries of what's possible with technology.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className={`font-exo ${
                index === 0 
                  ? "bg-gradient-primary hover:glow-primary" 
                  : "border-primary/30 hover:border-primary hover:bg-primary/10"
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="glass rounded-2xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-500">
                {/* Image */}
                <div className="relative overflow-hidden h-48 bg-gradient-to-br from-primary/20 to-secondary/20">
                  {/* Placeholder for actual image */}
                  <div className="w-full h-full flex items-center justify-center">
                    <Play className="w-12 h-12 text-white/70" />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <Button
                        size="sm"
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30"
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-exo font-medium ${
                      project.status === 'Live' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : project.status === 'Beta'
                        ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                        : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-sm font-exo text-primary mb-2">
                    {project.category}
                  </div>
                  
                  <h3 className="text-xl font-orbitron font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground font-exo text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs font-exo rounded-md border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-primary hover:glow-primary text-xs font-exo"
                    >
                      View Details
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-primary/30 hover:border-primary hover:bg-primary/10 font-exo font-semibold"
          >
            View All Projects
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;