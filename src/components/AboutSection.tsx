import { motion } from 'framer-motion';
import { Brain, Code, Zap, Target, Award, Users } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with cutting-edge AI and emerging technologies.'
    },
    {
      icon: Code,
      title: 'Technical Excellence',
      description: 'Our team delivers robust, scalable solutions using the latest frameworks and best practices.'
    },
    {
      icon: Zap,
      title: 'Rapid Execution',
      description: 'From concept to deployment, we move fast without compromising on quality or security.'
    },
    {
      icon: Target,
      title: 'Client-Focused',
      description: 'Every solution is tailored to your unique business needs and strategic objectives.'
    }
  ];

  const stats = [
    { icon: Award, number: '3+', label: 'Years Experience' },
    { icon: Users, number: '10+', label: 'Global Clients' },
    { icon: Code, number: '20+', label: 'Projects Completed' },
    { icon: Zap, number: '24/7', label: 'Support Available' }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
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
            About <span className="gradient-text">CODNOX</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-exo leading-relaxed">
            We are a forward-thinking technology company specializing in artificial intelligence, 
            web development, and digital transformation solutions. Our mission is to empower 
            businesses with intelligent technology that drives growth and innovation.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-orbitron font-bold mb-6">
              Our Vision
            </h3>
            <p className="text-muted-foreground font-exo text-lg leading-relaxed">
              At CODNOX, we envision a future where artificial intelligence and human creativity 
              work in perfect harmony. We believe that technology should augment human capabilities, 
              not replace them, creating opportunities for unprecedented growth and innovation.
            </p>
            <p className="text-muted-foreground font-exo text-lg leading-relaxed">
              Our team of passionate engineers, data scientists, and designers work tirelessly to 
              transform complex challenges into elegant, intelligent solutions that drive real 
              business value.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl border border-primary/20"
          >
            <h3 className="text-3xl font-orbitron font-bold mb-6 gradient-text">
              What Drives Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-muted-foreground font-exo">
                  <strong className="text-foreground">Innovation:</strong> Constantly exploring 
                  emerging technologies and methodologies
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-muted-foreground font-exo">
                  <strong className="text-foreground">Quality:</strong> Delivering exceptional 
                  solutions that exceed expectations
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-muted-foreground font-exo">
                  <strong className="text-foreground">Partnership:</strong> Building long-term 
                  relationships based on trust and results
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass p-6 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:glow-primary transition-all duration-300">
                <value.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-orbitron font-semibold mb-3 text-foreground">
                {value.title}
              </h4>
              <p className="text-muted-foreground font-exo text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-strong p-8 rounded-2xl border border-primary/20"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto glow-primary">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-orbitron font-bold text-primary">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-exo text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;