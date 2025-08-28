import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github } from 'lucide-react';
import Niranj from '@/assets/team/Niranj.jpg';
import Nevin from '@/assets/team/Nevin.jpg';
import Diya from '@/assets/team/Diya.jpg';
import Mohaammed from '@/assets/team/Mohammed.jpg';
import Sneethi from '@/assets/team/Sneethi.jpg';
import Nandana from '@/assets/team/Nandana.jpg';
import Keerthana from '@/assets/team/Keerthana.jpg';
import Ashika from '@/assets/team/Ashika Raveendran.jpg';
import Akshaj from '@/assets/team/Akshajj.jpg';
import Poornendh from '@/assets/team/Poornendh.pdf';
import Riza from '@/assets/team/Riza.jpg';
import Sabha from '@/assets/team/Sabah.jpg';
import Sruthi from '@/assets/team/Sruthi.jpg';
import Jithin from '@/assets/team/Jithin.jpeg';
import Souhrudh from '@/assets/team/Souhrudh.jpg';

const TeamSection = () => {
  const officials = [
    {
      id: 1,
      name: "Jithin S",
      role: "Advisor",
      image: Jithin,
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      id: 2,
      name: "Niranj C N",
      role: "Chief Executive Officer",
      image: Niranj,
      social: {
        linkedin: "https://www.linkedin.com/in/niranjcn/",
        twitter: "#",
        github: "https://github.com/niranjcn"
      }
    },
    {
      id: 3,
      name: "Nevin R Pradeep",
      role: "Chief Design Officer",
      image: Nevin,
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    }
  ];

  const members = [
    {
      id: 4,
      name: "Emily Watson",
      role: "Lead Frontend Developer",
      image: Diya,
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      id: 5,
      name: "David Kim",
      role: "AI Research Scientist",
      image: Mohaammed,
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      id: 6,
      name: "Lisa Zhang",
      role: "Data Science Lead",
      image: Ashika,
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      id: 7,
      name: "James Wilson",
      role: "DevOps Engineer",
      image: Keerthana,
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      id: 8,
      name: "Sofia Andersson",
      role: "UX/UI Designer",
      image: Sruthi,
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      id: 9,
      name: "Sofia Andersson",
      role: "UX/UI Designer",
      image: Souhrudh,
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      id: 8,
      name: "Sofia Andersson",
      role: "UX/UI Designer",
      image: Sneethi,
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      id: 8,
      name: "Sofia Andersson",
      role: "UX/UI Designer",
      image: Nandana,
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      id: 8,
      name: "Sofia Andersson",
      role: "UX/UI Designer",
      image: Riza,
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      id: 8,
      name: "Sofia Andersson",
      role: "UX/UI Designer",
      image: Sabha,
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      id: 8,
      name: "Sofia Andersson",
      role: "UX/UI Designer",
      image: Akshaj,
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      id: 8,
      name: "Sofia Andersson",
      role: "UX/UI Designer",
      image: Poornendh,
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const MemberCard = ({ member, isOfficial = false }: { member: typeof officials[0], isOfficial?: boolean }) => (
    <motion.div
      variants={cardVariants}
      whileHover={{ 
        y: -15,
        scale: 1.05,
        transition: { duration: 0.4, ease: "easeOut" }
      }}
      className={`group relative overflow-hidden rounded-2xl transition-all duration-500 ${
        isOfficial 
          ? 'glass-strong border-2 border-primary/50 shadow-glow p-8 hover:border-primary/80' 
          : 'glass border border-border/20 hover:border-primary/40 p-6'
      }`}
    >
      {/* Animated background gradient */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
        isOfficial 
          ? 'bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10'
          : 'bg-gradient-to-br from-primary/5 via-transparent to-secondary/5'
      }`} />
      
      {/* Glowing border effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 blur-sm -z-10" />
      
      <div className="flex flex-col items-center text-center relative z-10">
        <motion.div 
          className="relative mb-6"
          whileHover={{ scale: 1.15, rotateY: 10 }}
          transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
        >
          <div className={`${isOfficial ? 'w-32 h-32' : 'w-28 h-28'} rounded-full overflow-hidden ring-2 ring-primary/40 group-hover:ring-primary/80 transition-all duration-500 relative`}>
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
          </div>
          
          {/* Floating particles effect */}
          <div className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute top-0 left-1/2 w-1 h-1 bg-primary rounded-full animate-pulse" />
            <div className="absolute top-1/4 right-0 w-1 h-1 bg-accent rounded-full animate-pulse delay-150" />
            <div className="absolute bottom-1/4 left-0 w-1 h-1 bg-secondary rounded-full animate-pulse delay-300" />
          </div>
        </motion.div>
        
        <motion.h3 
          className={`${isOfficial ? 'text-xl' : 'text-lg'} font-orbitron font-bold mb-2 transition-colors duration-300 group-hover:text-primary`}
          whileHover={{ scale: 1.05 }}
        >
          {member.name}
        </motion.h3>
        
        <motion.p 
          className={`${isOfficial ? 'text-base' : 'text-sm'} text-muted-foreground mb-6 font-exo transition-colors duration-300 group-hover:text-foreground/80`}
          whileHover={{ scale: 1.02 }}
        >
          {member.role}
        </motion.p>
        
        <motion.div 
          className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-500"
          initial={{ y: 20, scale: 0.8 }}
          whileInView={{ y: 0, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.a
            href={member.social.linkedin}
            whileHover={{ 
              scale: 1.3, 
              y: -3,
              boxShadow: "0 10px 25px hsl(var(--primary) / 0.3)"
            }}
            className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 border border-primary/20 hover:border-primary/40"
          >
            <Linkedin size={isOfficial ? 20 : 18} />
          </motion.a>
          <motion.a
            href={member.social.twitter}
            whileHover={{ 
              scale: 1.3, 
              y: -3,
              boxShadow: "0 10px 25px hsl(var(--accent) / 0.3)"
            }}
            className="p-2 rounded-lg bg-accent/10 hover:bg-accent/20 text-accent transition-all duration-300 border border-accent/20 hover:border-accent/40"
          >
            <Twitter size={isOfficial ? 20 : 18} />
          </motion.a>
          <motion.a
            href={member.social.github}
            whileHover={{ 
              scale: 1.3, 
              y: -3,
              boxShadow: "0 10px 25px hsl(var(--secondary) / 0.3)"
            }}
            className="p-2 rounded-lg bg-secondary/10 hover:bg-secondary/20 text-secondary transition-all duration-300 border border-secondary/20 hover:border-secondary/40"
          >
            <Github size={isOfficial ? 20 : 18} />
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <section id="members" className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-muted/10">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
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
              Meet the <span className="gradient-text bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Innovators</span>
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
            The brilliant minds behind CODNOX's cutting-edge solutions and technological breakthroughs
          </motion.p>
        </motion.div>

        {/* Officials Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.div
            variants={cardVariants}
            className="text-center mb-16"
          >
            <motion.h3 
              className="text-3xl font-orbitron font-bold gradient-text mb-6"
              whileInView={{ scale: [0.9, 1.05, 1] }}
              transition={{ duration: 0.6 }}
            >
              Leadership Team
            </motion.h3>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {officials.map((official, index) => (
              <motion.div
                key={official.id}
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
              >
                <MemberCard member={official} isOfficial={true} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Members Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.div
            variants={cardVariants}
            className="text-center mb-16"
          >
            <motion.h3 
              className="text-3xl font-orbitron font-bold gradient-text mb-6"
              whileInView={{ scale: [0.9, 1.05, 1] }}
              transition={{ duration: 0.6 }}
            >
              Core Team
            </motion.h3>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {members.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 120
                }}
                viewport={{ once: true }}
              >
                <MemberCard member={member} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
