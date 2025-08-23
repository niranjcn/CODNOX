import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Bot, Globe, Network, BarChart3, Smartphone, Shield, Cloud, Cpu, ArrowRight } from 'lucide-react';

// Video and Image asset imports (assuming they are in the specified path)
import backup_and_recovery_mp4 from '@/assets/backup_and_recovery.mp4';
import backup_and_recovery_webm from '@/assets/backup_and_recovery.webm';
import backup_and_recovery_webp from '@/assets/backup_and_recovery.webp';
import unified_system_mp4 from '@/assets/unified_system.mp4';
import unified_system_webm from '@/assets/unified_system.webm';
import unified_system_webp from '@/assets/unified_system.webp';
import AI_automation_mp4 from '@/assets/AI_automation.mp4';
import AI_automation_webm from '@/assets/AI_automation.webm';
import AI_automation_webp from '@/assets/AI_automation.webp';
import enterprise_mp4 from '@/assets/enterprise.mp4';
import enterprise_webm from '@/assets/enterprise.webm';
import enterprise_webp from '@/assets/enterprise.webp';
import solutions_webp from '@/assets/solutions1.webm'; // Hero poster

// Helper function to create URL-friendly slugs
const toSlug = (title: string) => title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');

// --- Visual Effect Components ---

const FloatingParticles = ({ count = 20, color = "from-primary to-secondary" }) => {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1.5,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.2,
    }));
    setParticles(newParticles);
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {particles.map((p) => (
        <div
          key={p.id}
          className={`absolute bg-gradient-to-r ${color} rounded-full animate-float`}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
};

const AnimatedGrid = () => (
  <div className="absolute inset-0 overflow-hidden opacity-10 -z-10">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `radial-gradient(circle, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
        backgroundSize: '30px 30px',
        animation: 'gridMove 20s linear infinite',
      }}
    />
  </div>
);

const GlowingOrb = ({ color = "from-primary to-secondary", size = "w-32 h-32", position = {} }) => (
  <div
    className={`absolute ${size} rounded-full bg-gradient-to-r ${color} opacity-10 blur-3xl animate-pulse -z-10`}
    style={{ animationDuration: '5s', ...position }}
  />
);


const ServicesSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  const baseServices = [
    { icon: Bot, title: 'AI & Machine Learning', description: 'Custom AI solutions, natural language processing, computer vision, and predictive analytics to automate and optimize your business processes.', features: ['Deep Learning Models', 'NLP Solutions', 'Computer Vision', 'Predictive Analytics'], color: 'from-blue-500 to-cyan-500', glowColor: "shadow-[0_0_40px_rgba(59,130,246,0.4)]" },
    { icon: Globe, title: 'Web Development', description: 'Modern, responsive web applications built with cutting-edge technologies. From concept to deployment, we create digital experiences that convert.', features: ['React & Next.js', 'Full-Stack Development', 'Progressive Web Apps', 'E-commerce Solutions'], color: 'from-purple-500 to-pink-500', glowColor: "shadow-[0_0_40px_rgba(139,92,246,0.4)]" },
    { icon: Network, title: 'Network Automation', description: 'Streamline your network infrastructure with intelligent automation, monitoring, and management solutions that reduce downtime and improve efficiency.', features: ['Infrastructure as Code', 'Network Monitoring', 'Automated Deployments', 'Performance Optimization'], color: 'from-green-500 to-emerald-500', glowColor: "shadow-[0_0_40px_rgba(34,197,94,0.4)]" },
    { icon: BarChart3, title: 'Data Science', description: 'Transform your data into actionable insights with advanced analytics, visualization, and business intelligence solutions.', features: ['Data Analytics', 'Business Intelligence', 'Data Visualization', 'Statistical Modeling'], color: 'from-orange-500 to-red-500', glowColor: "shadow-[0_0_40px_rgba(249,115,22,0.4)]" },
    { icon: Smartphone, title: 'Mobile Development', description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android platforms.', features: ['React Native', 'Flutter Development', 'Native iOS/Android', 'Mobile UI/UX'], color: 'from-indigo-500 to-purple-500', glowColor: "shadow-[0_0_40px_rgba(99,102,241,0.4)]" },
    { icon: Shield, title: 'Cybersecurity', description: 'Comprehensive security solutions to protect your digital assets, ensure compliance, and maintain customer trust.', features: ['Security Audits', 'Penetration Testing', 'Compliance Solutions', 'Incident Response'], color: 'from-red-500 to-pink-500', glowColor: "shadow-[0_0_40px_rgba(239,68,68,0.4)]" }
  ];

  const videos = [
    { mp4: AI_automation_mp4, webm: AI_automation_webm, webp: AI_automation_webp },
    { mp4: unified_system_mp4, webm: unified_system_webm, webp: unified_system_webp },
    { mp4: enterprise_mp4, webm: enterprise_webm, webp: enterprise_webp },
    { mp4: backup_and_recovery_mp4, webm: backup_and_recovery_webm, webp: backup_and_recovery_webp },
  ];

  const servicesData = baseServices.map((service, index) => ({
    ...service,
    id: toSlug(service.title),
    video_mp4: videos[index % 4].mp4,
    video_webm: videos[index % 4].webm,
    image_webp: videos[index % 4].webp,
  }));

  return (
    <div className="bg-background text-foreground">
      <main className="pt-40 pb-16 space-y-8">
        {/* Hero Section */}
        <section className="relative flex items-center justify-center p-8 md:p-16 bg-background rounded-3xl shadow-2xl mx-4 sm:mx-8 border border-white/10 min-h-[calc(100vh-10rem)] overflow-hidden">
          <div className="absolute inset-0 w-full h-full overflow-hidden rounded-3xl">
            <video poster={solutions_webp} className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted playsInline>
              <source src={solutions_webp} type="video/webm" />
              <source src={solutions_webp} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-8">
              Our Technology Services
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
              Comprehensive solutions designed to accelerate your digital transformation and drive sustainable growth.
            </p>
          </div>
        </section>

        {/* Sticky Stacked Cards Section */}
        <section
          className="relative isolate"
          style={{ height: `${servicesData.length * 100}vh` }}
        >
          {servicesData.map((service, index) => {
            const Icon = service.icon;

            return (
              <React.Fragment key={service.id}>
                <div id={service.id} className="h-0 overflow-hidden scroll-mt-40" aria-hidden="true" />
                <div
                  className="sticky top-40 h-[calc(100vh-10rem)] w-full px-4 sm:px-8 flex items-center justify-center isolate"
                  style={{ zIndex: index + 1 }}
                >
                  {/* UPDATE: Card container updated with glassmorphism, glow effects, and hover transitions from SolutionsPreview */}
                  <div className="group relative w-full h-full flex items-center justify-center p-4 md:p-12 bg-background/50 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden isolate transition-all duration-500 hover:scale-[1.01]">
                    
                    {/* Background Effects from SolutionsPreview */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500 -z-20`}></div>
                    <div className={`absolute inset-0 ${service.glowColor} opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500 -z-20`}></div>

                    {/* Original Background Effects (retained for added depth) */}
                    <AnimatedGrid />
                    <FloatingParticles count={25} color={service.color} />
                    <GlowingOrb color={service.color} size="w-40 h-40" position={{ top: '10%', right: '10%' }} />
                    <GlowingOrb color={service.color} size="w-24 h-24" position={{ bottom: '15%', left: '5%' }} />

                    <div className="max-w-7xl w-full h-full mx-auto px-2 sm:px-4 lg:px-8 relative z-10">
                      <div className="max-h-full overflow-y-auto overscroll-contain pr-1">
                        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center py-8">
                          {/* Text Content */}
                          <div className="space-y-6">
                            <div className="flex items-center space-x-4 mb-4">
                              <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color} shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                                <Icon className="h-8 w-8 text-white" />
                              </div>
                              <h2 className="text-2xl md:text-4xl font-orbitron font-bold text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-500">
                                {service.title}
                              </h2>
                            </div>
                            <p className="text-lg text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-500">
                              {service.description}
                            </p>
                            <div className="space-y-3">
                              {service.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center space-x-3 group/feature hover:translate-x-2 transition-transform duration-300">
                                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} flex-shrink-0 group-hover/feature:scale-150 group-hover/feature:shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-300`}></div>
                                  <span className="text-muted-foreground group-hover/feature:text-foreground transition-colors duration-300">{feature}</span>
                                </div>
                              ))}
                            </div>
                            <Link to="/contact" className="inline-flex items-center font-semibold text-primary hover:text-white group/btn mt-4">
                              Get Started <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                          </div>

                          {/* Video Content */}
                          <div className="relative group/video">
                             <div className="glass-card p-2 md:p-4 rounded-2xl overflow-hidden relative group-hover/video:shadow-[0_0_40px_rgba(128,128,128,0.3)] transition-shadow duration-700">
                               <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover/video:opacity-10 transition-opacity duration-700 blur-xl`} />
                               <video
                                  poster={service.image_webp}
                                  className="w-full h-auto max-h-[40vh] md:max-h-[50vh] object-contain rounded-xl group-hover/video:scale-105 transition-transform duration-700 relative z-10"
                                  autoPlay loop muted playsInline
                                >
                                  <source src={service.video_webm} type="video/webm" />
                                  <source src={service.video_mp4} type="video/mp4" />
                               </video>
                             </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default ServicesSection;
