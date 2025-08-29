import { motion } from 'framer-motion';
import { Brain, Code, Zap, Target, Award, Users } from 'lucide-react';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

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

  const journeyStyles = `
    .journey-timeline { 
      position: relative; 
      max-width: 1200px; 
      margin: 0 auto;
      perspective: 1000px;
    }
    .journey-timeline::after {
      content: ''; 
      position: absolute; 
      width: 8px;
      background: linear-gradient(to bottom, transparent, hsl(var(--primary)), hsl(var(--secondary)), transparent);
      top: 0; 
      bottom: 0; 
      left: 50%; 
      margin-left: -4px;
      border-radius: 6px;
      box-shadow: 0 0 30px rgba(99, 102, 241, 0.4);
    }
    .journey-container { 
      padding: 10px 40px; 
      position: relative; 
      width: 50%; 
      perspective: 1000px;
    }
    .journey-container.left { left: 0; }
    .journey-container.right { left: 50%; }
    .journey-container::after {
      content: ''; 
      position: absolute; 
      width: 30px; 
      height: 30px; 
      right: -15px;
      background-color: hsl(var(--background)); 
      border: 4px solid hsl(var(--primary));
      top: 25px; 
      border-radius: 50%; 
      z-index: 2; 
      transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 0 20px hsl(var(--primary));
    }
    .journey-container.right::after { left: -15px; }
    .journey-content { 
      position: relative; 
      transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      transform-style: preserve-3d;
      background: linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
      backdrop-filter: blur(10px);
      border-radius: 16px;
      border: 1px solid rgba(255,255,255,0.1);
      box-shadow: 0 8px 32px rgba(0,0,0,0.1);
      overflow: hidden;
    }
    .journey-content::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(130deg, transparent, rgba(99, 102, 241, 0.1), transparent);
      transform: translateX(-100%);
    }
    .journey-container:hover .journey-content { 
      transform: scale(1.05) translateY(-8px) rotateY(5deg); 
      box-shadow: 0 20px 40px rgba(0,0,0,0.2);
    }
    .journey-container:hover .journey-content::before {
      animation: shimmer 1.5s forwards;
    }
    .journey-container:hover::after { 
      background-color: hsl(var(--primary)); 
      box-shadow: 0 0 30px hsl(var(--primary));
      transform: scale(1.3);
    }
    .journey-details { 
      max-height: 0; 
      overflow: hidden; 
      transition: max-height 0.8s ease-in-out, opacity 0.8s ease-in-out, transform 0.8s ease-in-out; 
      opacity: 0;
      transform: translateY(-10px);
    }
    .journey-container:hover .journey-details { 
      max-height: 200px; 
      opacity: 1;
      transform: translateY(0);
    }

    @keyframes shimmer {
      100% { transform: translateX(100%); }
    }

    @media screen and (max-width: 968px) {
      .journey-timeline::after { left: 31px; }
      .journey-container { width: 100%; padding-left: 70px; padding-right: 25px; }
      .journey-container.left, .journey-container.right { left: 0; }
      .journey-container::after { left: 18px; }
      .journey-container.right::after { left: 18px; }
    }
  `;

  return (
    <>
      <style>{journeyStyles}</style>
      
      <section id="about" className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-40">
          <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section */}
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
                About <span className="gradient-text bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">CODNOX</span>
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
              We are a forward-thinking technology company specializing in artificial intelligence, 
              web development, and digital transformation solutions. Our mission is to empower 
              businesses with intelligent technology that drives growth and innovation.
            </motion.p>
          </motion.div>

          {/* Vision & Mission Section */}
          <div className="grid lg:grid-cols-2 gap-16 mb-24 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative group h-full"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative glass p-10 rounded-2xl space-y-6 h-full transform transition-all duration-500 group-hover:-translate-y-2">
                <motion.h3 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-3xl font-orbitron font-bold mb-6 gradient-text bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                >
                  Our Vision & Mission
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-muted-foreground font-exo text-lg leading-relaxed border-l-4 border-primary/30 pl-4 py-2"
                >
                  To architect a future where intelligent technology and human creativity converge, creating unparalleled opportunities for growth and innovation.
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-muted-foreground font-exo text-lg leading-relaxed border-l-4 border-secondary/30 pl-4 py-2"
                >
                  Our mission is to empower businesses by transforming complex challenges into elegant, intelligent solutions that deliver tangible, lasting value.
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="glass p-10 rounded-2xl border border-primary/20 h-full transform transition-all duration-500 hover:-translate-y-2"
            >
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-3xl font-orbitron font-bold mb-8 gradient-text bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent"
              >
                What Drives Us
              </motion.h3>
              <div className="space-y-6">
                {[
                  { color: 'primary', title: 'Innovation', text: 'Constantly exploring emerging technologies and methodologies.' },
                  { color: 'secondary', title: 'Quality', text: 'Delivering exceptional solutions that exceed expectations.' },
                  { color: 'accent', title: 'Partnership', text: 'Building long-term relationships based on trust and results.' }
                ].map((item, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-5 group p-4 rounded-xl hover:bg-muted/30 transition-all duration-300"
                    >
                        <motion.div 
                          whileHover={{ scale: 1.2, rotate: 15 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className={`w-3 h-3 bg-${item.color} rounded-full mt-3 flex-shrink-0 transition-all duration-500 group-hover:scale-150 group-hover:shadow-[0_0_15px_hsl(var(--${item.color}))]`}
                        ></motion.div>
                        <div>
                          <h4 className="font-orbitron font-semibold text-foreground mb-1">{item.title}</h4>
                          <p className="text-muted-foreground font-exo transition-colors duration-300 group-hover:text-foreground/90">
                            {item.text}
                          </p>
                        </div>
                    </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                viewport={{ once: true }}
                className="group relative glass p-8 rounded-2xl border border-primary/10 overflow-hidden transform transition-all duration-500 hover:-translate-y-3"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                <div className="relative z-10">
                    <motion.div 
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6 group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all duration-500"
                    >
                      <value.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <h4 className="text-xl font-orbitron font-semibold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground font-exo text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {value.description}
                    </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="glass-strong p-12 rounded-3xl border border-primary/20 mb-24 transform transition-all duration-700 hover:shadow-2xl"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="space-y-5 group"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_hsl(var(--primary))]"
                  >
                    <stat.icon className="w-10 h-10 text-white transition-transform duration-500 group-hover:rotate-12" />
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-orbitron font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent transition-all duration-500 group-hover:text-glow"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-muted-foreground font-exo text-sm uppercase tracking-widest transition-colors duration-500 group-hover:text-foreground group-hover:font-semibold">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Journey Timeline Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            id="journey" 
            className="py-20"
          >
            <div className="text-center mb-20">
              <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-orbitron font-bold mb-6"
              >
                Our <span className="gradient-text bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Journey</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xl text-muted-foreground max-w-3xl mx-auto font-exo leading-relaxed"
              >
                Tracing our path from a bold idea to a leader in digital innovation.
              </motion.p>
            </div>

            <div className="journey-timeline">
              {[
                  { side: 'left', year: '2021', title: 'The Genesis', color: 'primary', description: 'CODNOX was founded with a vision to merge AI and web development.', details: 'Our initial team of three pioneers laid the groundwork, focusing on R&D.' },
                  { side: 'right', year: '2022', title: 'First Breakthrough', color: 'secondary', description: 'Launched our first major AI-powered analytics platform.', details: 'This success validated our approach and helped us secure seed funding.' },
                  { side: 'left', year: '2023', title: 'Expansion', color: 'accent', description: 'Opened our first international office and expanded service offerings.', details: 'Our team grew to over 15 professionals, onboarding global clients.' },
                  { side: 'right', year: '2024', title: 'Innovation Lab', color: 'primary', description: 'Established the CODNOX Innovation Lab for next-gen AI R&D.', details: 'Filed our first two patents related to proprietary machine learning algorithms.' },
              ].map((item, index) => (
                  <div key={index} className={`journey-container ${item.side}`}>
                      <motion.div 
                          initial={{ opacity: 0, y: 50, rotateY: 10 }}
                          whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                          transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
                          viewport={{ once: true, margin: "-50px" }}
                          className="journey-content glass p-8"
                      >
                          <h3 className={`text-2xl font-orbitron font-bold text-${item.color} mb-2`}>{item.year}: {item.title}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                          <div className="journey-details">
                              <p className="text-sm mt-4 text-foreground/80 border-t border-border/50 pt-4">{item.details}</p>
                          </div>
                      </motion.div>
                  </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default AboutSection;