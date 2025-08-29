import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiAmazon,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiGithubactions,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiOpenai,
  SiHuggingface,
  SiFlutter,
  SiSwift,
  SiKotlin,
  SiExpo,
  SiJest,
  SiCypress,
  SiAuth0,
  SiJsonwebtokens,
  SiOwasp,
} from 'react-icons/si';

// SVG components for each technology icon to avoid dependency issues.
const ReactIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

const NextjsIcon = ({ size = 40 }) => (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M64 0C28.653 0 0 28.653 0 64s28.653 64 64 64 64-28.653 64-64S99.347 0 64 0zm0 122C32.032 122 6 95.968 6 64S32.032 6 64 6s58 26.032 58 58-26.032 58-58 58z" fill="#000"/>
        <path d="M91.55 42.1l-24.2 42.4h-13.3L77.95 42.1h13.6zM46 84.5h-8V42.1h8v42.4z" fill="#000"/>
    </svg>
);

const VuejsIcon = ({ size = 40 }) => (
    <svg width={size} height={size} viewBox="0 0 256 221" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 158.08 0h46.72z" fill="#41B883"/>
        <path d="M0 0l128 220.8L256 0h-51.2L128 132.48 51.2 0H0z" fill="#41B883"/>
        <path d="M51.2 0L128 133.12 204.8 0h-46.72L128 51.2 97.92 0H51.2z" fill="#35495E"/>
    </svg>
);

const TypeScriptIcon = ({ size = 40 }) => (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h128v128H0V0z" fill="#007ACC"/>
        <path d="M26 25.9h76v76.2H26V25.9z" fill="#FFF"/>
        <path d="M91.3 53.8c0-8.8-5.3-13.9-15.5-13.9H49.1v50.2h10.4V68.3h12.9l12.1 21.8h12.3L84 66.8c4.4-1.8 7.3-6 7.3-13zm-31.8-4.1h11.1c3.5 0 5.8 1.6 5.8 4.1s-2.3 4.1-5.8 4.1H59.5v-8.2z" fill="#007ACC"/>
    </svg>
);

const TailwindCssIcon = ({ size = 40 }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 0C14.327 0 0 14.327 0 32s14.327 32 32 32 32-14.327 32-32S49.673 0 32 0zm0 58C17.663 58 6 46.337 6 32S17.663 6 32 6s26 11.663 26 26-11.663 26-26 26z" fill="#38B2AC"/>
        <path d="M20.5 27.5c0-6.904 5.596-12.5 12.5-12.5s12.5 5.596 12.5 12.5-5.596 12.5-12.5 12.5-12.5-5.596-12.5-12.5zm20 0c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5 3.358 7.5 7.5 7.5 7.5-3.358 7.5-7.5z" fill="#38B2AC"/>
    </svg>
);

const TechStackSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const technologies = [
    { name: 'React', category: 'Frontend', color: 'from-blue-400 to-blue-600', icon: <ReactIcon /> },
    { name: 'Next.js', category: 'Frontend', color: 'from-gray-400 to-gray-600', icon: <NextjsIcon /> },
    { name: 'Vue.js', category: 'Frontend', color: 'from-green-400 to-green-600', icon: <VuejsIcon /> },
    { name: 'TypeScript', category: 'Frontend', color: 'from-blue-500 to-blue-700', icon: <TypeScriptIcon /> },
    { name: 'Tailwind CSS', category: 'Frontend', color: 'from-cyan-400 to-cyan-600', icon: <TailwindCssIcon /> },
    { name: 'Node.js', category: 'Backend', color: 'from-green-500 to-green-700', icon: <SiNodedotjs size={40} /> },
    { name: 'Python', category: 'Backend', color: 'from-yellow-400 to-yellow-600', icon: <SiPython size={40} /> },
    { name: 'PostgreSQL', category: 'Backend', color: 'from-blue-600 to-blue-800', icon: <SiPostgresql size={40} /> },
    { name: 'MongoDB', category: 'Backend', color: 'from-green-600 to-green-800', icon: <SiMongodb size={40} /> },
    { name: 'Redis', category: 'Backend', color: 'from-red-500 to-red-700', icon: <SiRedis size={40} /> },
    { name: 'AWS', category: 'Cloud', color: 'from-orange-400 to-orange-600', icon: <SiAmazon size={40} /> },
    { name: 'Docker', category: 'Cloud', color: 'from-blue-500 to-blue-700', icon: <SiDocker size={40} /> },
    { name: 'Kubernetes', category: 'Cloud', color: 'from-blue-600 to-blue-800', icon: <SiKubernetes size={40} /> },
    { name: 'Terraform', category: 'Cloud', color: 'from-purple-500 to-purple-700', icon: <SiTerraform size={40} /> },
    { name: 'GitHub Actions', category: 'Cloud', color: 'from-gray-600 to-gray-800', icon: <SiGithubactions size={40} /> },
    { name: 'TensorFlow', category: 'AI/ML', color: 'from-orange-500 to-orange-700', icon: <SiTensorflow size={40} /> },
    { name: 'PyTorch', category: 'AI/ML', color: 'from-red-500 to-red-700', icon: <SiPytorch size={40} /> },
    { name: 'Scikit-learn', category: 'AI/ML', color: 'from-blue-500 to-blue-700', icon: <SiScikitlearn size={40} /> },
    { name: 'OpenAI API', category: 'AI/ML', color: 'from-green-500 to-green-700', icon: <SiOpenai size={40} /> },
    { name: 'Hugging Face', category: 'AI/ML', color: 'from-yellow-500 to-yellow-700', icon: <SiHuggingface size={40} /> },
    { name: 'React Native', category: 'Mobile', color: 'from-blue-400 to-blue-600', icon: <ReactIcon /> },
    { name: 'Flutter', category: 'Mobile', color: 'from-cyan-400 to-cyan-600', icon: <SiFlutter size={40} /> },
    { name: 'Swift', category: 'Mobile', color: 'from-orange-500 to-orange-700', icon: <SiSwift size={40} /> },
    { name: 'Kotlin', category: 'Mobile', color: 'from-purple-500 to-purple-700', icon: <SiKotlin size={40} /> },
    { name: 'Expo', category: 'Mobile', color: 'from-indigo-500 to-indigo-700', icon: <SiExpo size={40} /> },
    { name: 'Jest', category: 'Testing', color: 'from-red-500 to-red-700', icon: <SiJest size={40} /> },
    { name: 'Cypress', category: 'Testing', color: 'from-green-500 to-green-700', icon: <SiCypress size={40} /> },
    { name: 'OAuth 2.0', category: 'Security', color: 'from-blue-500 to-blue-700', icon: <SiAuth0 size={40} /> },
    { name: 'JWT', category: 'Security', color: 'from-purple-500 to-purple-700', icon: <SiJsonwebtokens size={40} /> },
    { name: 'OWASP', category: 'Security', color: 'from-orange-500 to-orange-700', icon: <SiOwasp size={40} /> }
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Cloud', 'AI/ML', 'Mobile', 'Testing', 'Security'];

  const filteredTech = activeFilter === 'All' 
    ? technologies 
    : technologies.filter(tech => tech.category === activeFilter);

  return (
    <section id="tech" className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
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
              Technology <span className="gradient-text bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Stack</span>
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
            We leverage cutting-edge technologies and industry-leading tools to build 
            robust, scalable, and future-proof solutions for our clients.
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
              onClick={() => setActiveFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-full font-exo text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30" 
                  : "bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary border border-border/50"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Technology Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 mb-20"
        >
          {filteredTech.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              layout
              whileHover={{ 
                scale: 1.1, 
                rotate: Math.random() * 4 - 2,
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="aspect-square glass rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-500 overflow-hidden flex flex-col items-center justify-center p-4 text-center">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-20 blur-md transition-all duration-500`}></div>
                
                {/* Icon */}
                <div className="mb-3 text-white z-10 group-hover:text-white transition-colors duration-300">
                  {tech.icon}
                </div>

                {/* Tech Name */}
                <motion.h3 
                  className="text-sm font-orbitron font-bold text-foreground z-10 relative"
                  whileHover={{ scale: 1.1 }}
                >
                  {tech.name}
                </motion.h3>
                
                {/* Category Badge */}
                <motion.span 
                  className="text-xs font-exo text-muted-foreground mt-2 px-2 py-1 rounded-full bg-muted/50 border border-border/50 z-10"
                  whileHover={{ scale: 1.05 }}
                >
                  {tech.category}
                </motion.span>
                
                {/* Hover Effect Elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Corner Accents */}
                <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: '30+', label: 'Technologies' },
            { number: '100+', label: 'Deployments' },
            { number: '99.9%', label: 'Uptime' },
            { number: '24/7', label: 'Support' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-2 group"
            >
              <div className="text-3xl md:text-4xl font-orbitron font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-exo text-sm group-hover:text-foreground transition-colors duration-300">
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
