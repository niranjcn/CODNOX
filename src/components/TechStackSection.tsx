import { motion } from 'framer-motion';
import { Code, Database, Cloud, Smartphone, Brain, Shield } from 'lucide-react';

const TechStackSection = () => {
  const techCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      technologies: [
        { name: 'React', level: 95, color: 'from-blue-400 to-blue-600' },
        { name: 'Next.js', level: 90, color: 'from-gray-400 to-gray-600' },
        { name: 'Vue.js', level: 85, color: 'from-green-400 to-green-600' },
        { name: 'TypeScript', level: 92, color: 'from-blue-500 to-blue-700' },
        { name: 'Tailwind CSS', level: 95, color: 'from-cyan-400 to-cyan-600' }
      ]
    },
    {
      icon: Database,
      title: 'Backend & Database',
      technologies: [
        { name: 'Node.js', level: 90, color: 'from-green-500 to-green-700' },
        { name: 'Python', level: 95, color: 'from-yellow-400 to-yellow-600' },
        { name: 'PostgreSQL', level: 88, color: 'from-blue-600 to-blue-800' },
        { name: 'MongoDB', level: 85, color: 'from-green-600 to-green-800' },
        { name: 'Redis', level: 80, color: 'from-red-500 to-red-700' }
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      technologies: [
        { name: 'AWS', level: 90, color: 'from-orange-400 to-orange-600' },
        { name: 'Docker', level: 88, color: 'from-blue-500 to-blue-700' },
        { name: 'Kubernetes', level: 82, color: 'from-blue-600 to-blue-800' },
        { name: 'Terraform', level: 85, color: 'from-purple-500 to-purple-700' },
        { name: 'GitHub Actions', level: 87, color: 'from-gray-600 to-gray-800' }
      ]
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      technologies: [
        { name: 'TensorFlow', level: 88, color: 'from-orange-500 to-orange-700' },
        { name: 'PyTorch', level: 85, color: 'from-red-500 to-red-700' },
        { name: 'Scikit-learn', level: 90, color: 'from-blue-500 to-blue-700' },
        { name: 'OpenAI API', level: 92, color: 'from-green-500 to-green-700' },
        { name: 'Hugging Face', level: 87, color: 'from-yellow-500 to-yellow-700' }
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      technologies: [
        { name: 'React Native', level: 88, color: 'from-blue-400 to-blue-600' },
        { name: 'Flutter', level: 82, color: 'from-cyan-400 to-cyan-600' },
        { name: 'Swift', level: 75, color: 'from-orange-500 to-orange-700' },
        { name: 'Kotlin', level: 78, color: 'from-purple-500 to-purple-700' },
        { name: 'Expo', level: 85, color: 'from-indigo-500 to-indigo-700' }
      ]
    },
    {
      icon: Shield,
      title: 'Security & Testing',
      technologies: [
        { name: 'Jest', level: 90, color: 'from-red-500 to-red-700' },
        { name: 'Cypress', level: 85, color: 'from-green-500 to-green-700' },
        { name: 'OAuth 2.0', level: 88, color: 'from-blue-500 to-blue-700' },
        { name: 'JWT', level: 90, color: 'from-purple-500 to-purple-700' },
        { name: 'OWASP', level: 82, color: 'from-orange-500 to-orange-700' }
      ]
    }
  ];

  const partnerships = [
    { name: 'AWS Partner', logo: '🔧', description: 'Advanced Consulting Partner' },
    { name: 'Google Cloud', logo: '☁️', description: 'Certified Partner' },
    { name: 'Microsoft Azure', logo: '🔷', description: 'Solution Partner' },
    { name: 'OpenAI', logo: '🤖', description: 'Integration Partner' }
  ];

  return (
    <section id="tech" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 right-1/3 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
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
            Technology <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-exo leading-relaxed">
            We leverage cutting-edge technologies and industry-leading tools to build 
            robust, scalable, and future-proof solutions for our clients.
          </p>
        </motion.div>

        {/* Tech Categories Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-2xl border border-primary/10 hover:border-primary/20 transition-all duration-500"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center glow-sm">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-orbitron font-bold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Technologies */}
              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (techIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-exo font-medium text-foreground">
                        {tech.name}
                      </span>
                      <span className="text-sm text-muted-foreground font-exo">
                        {tech.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (techIndex * 0.05) + 0.3 }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${tech.color} rounded-full relative`}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partnerships Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-strong p-8 rounded-2xl border border-primary/20"
        >
          <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-center mb-8">
            Trusted <span className="gradient-text">Partnerships</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partnerships.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:glow-primary transition-all duration-300">
                  <span className="text-2xl">{partner.logo}</span>
                </div>
                <h4 className="font-orbitron font-semibold text-foreground mb-2">
                  {partner.name}
                </h4>
                <p className="text-xs text-muted-foreground font-exo">
                  {partner.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center"
        >
          {[
            { number: '20+', label: 'Technologies Mastered' },
            { number: '100+', label: 'Successful Deployments' },
            { number: '99.9%', label: 'Uptime Guarantee' },
            { number: '24/7', label: 'Technical Support' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <div className="text-3xl md:text-4xl font-orbitron font-bold gradient-text">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-exo text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;