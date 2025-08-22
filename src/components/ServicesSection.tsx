import { motion } from 'framer-motion';
import { Bot, Globe, Network, BarChart3, Smartphone, Shield, Cloud, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: Bot,
      title: 'AI & Machine Learning',
      description: 'Custom AI solutions, natural language processing, computer vision, and predictive analytics to automate and optimize your business processes.',
      features: ['Deep Learning Models', 'NLP Solutions', 'Computer Vision', 'Predictive Analytics'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies. From concept to deployment, we create digital experiences that convert.',
      features: ['React & Next.js', 'Full-Stack Development', 'Progressive Web Apps', 'E-commerce Solutions'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Network,
      title: 'Network Automation',
      description: 'Streamline your network infrastructure with intelligent automation, monitoring, and management solutions that reduce downtime and improve efficiency.',
      features: ['Infrastructure as Code', 'Network Monitoring', 'Automated Deployments', 'Performance Optimization'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart3,
      title: 'Data Science',
      description: 'Transform your data into actionable insights with advanced analytics, visualization, and business intelligence solutions.',
      features: ['Data Analytics', 'Business Intelligence', 'Data Visualization', 'Statistical Modeling'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android platforms.',
      features: ['React Native', 'Flutter Development', 'Native iOS/Android', 'Mobile UI/UX'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure, migration services, and DevOps solutions to accelerate your digital transformation journey.',
      features: ['AWS/Azure/GCP', 'Cloud Migration', 'DevOps & CI/CD', 'Containerization'],
      color: 'from-teal-500 to-blue-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets, ensure compliance, and maintain customer trust.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance Solutions', 'Incident Response'],
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Cpu,
      title: 'IoT Solutions',
      description: 'Connected device solutions, sensor networks, and IoT platforms that bridge the physical and digital worlds.',
      features: ['IoT Architecture', 'Sensor Integration', 'Real-time Analytics', 'Edge Computing'],
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>
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
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-exo leading-relaxed">
            Comprehensive technology solutions designed to accelerate your digital transformation 
            and drive sustainable growth in today's competitive landscape.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="glass p-6 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-500 h-full relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className="relative z-10">
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:glow-primary transition-all duration-300`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-orbitron font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground font-exo text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.color} rounded-full`}></div>
                        <span className="text-xs font-exo text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
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
          className="text-center glass-strong p-8 rounded-2xl border border-primary/20"
        >
          <h3 className="text-2xl md:text-3xl font-orbitron font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-muted-foreground font-exo mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can help you achieve your goals. 
            Schedule a consultation to explore the possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-primary hover:glow-primary transition-all duration-300 font-exo font-semibold"
            >
              Start Your Project
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-primary/30 hover:border-primary hover:bg-primary/10 font-exo font-semibold"
            >
              View Case Studies
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;