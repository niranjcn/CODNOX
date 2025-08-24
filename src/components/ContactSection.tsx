import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        name: '',
        email: '',
        company: '',
        project: '',
        budget: '',
        message: ''
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@codnox.com',
      description: 'Drop us a line anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+91 123-456-7890',
      description: 'Mon-Fri 9AM-6PM '
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Sivapuram, Kannur, India',
      description: 'Remote-first company'
    },
    {
      icon: Clock,
      title: 'Response Time',
      content: '< 24 hours',
      description: 'We respond quickly'
    }
  ];

  const services = [
    'AI & Machine Learning',
    'Web Development',
    'Mobile Development',
    'Cloud Solutions',
    'Data Science',
    'Cybersecurity',
    'Consulting'
  ];

  const budgetRanges = [
    'Under $10K',
    '$10K - $50K',
    '$50K - $100K',
    '$100K - $500K',
    '$500K+'
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
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
              Let's Build <span className="gradient-text bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Together</span>
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
            Ready to transform your business with cutting-edge technology? 
            Let's discuss your project and explore the possibilities.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="glass p-10 rounded-3xl border border-primary/20 transform transition-all duration-500 hover:-translate-y-2"
          >
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl font-orbitron font-bold mb-8 gradient-text bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            >
              Start Your Project
            </motion.h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <label className="text-sm font-exo font-medium text-foreground">
                    Full Name *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="glass border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all duration-300 rounded-xl px-4 py-3"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-exo font-medium text-foreground">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="glass border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all duration-300 rounded-xl px-4 py-3"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              {/* Company */}
              <div className="space-y-3">
                <label className="text-sm font-exo font-medium text-foreground">
                  Company/Organization
                </label>
                <Input
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="glass border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all duration-300 rounded-xl px-4 py-3"
                  placeholder="Your Company Name"
                />
              </div>

              {/* Project Type */}
              <div className="space-y-3">
                <label className="text-sm font-exo font-medium text-foreground">
                  Project Type *
                </label>
                <select
                  name="project"
                  value={formData.project}
                  onChange={handleInputChange}
                  required
                  className="w-full glass border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all duration-300 rounded-xl px-4 py-3 bg-background/50 text-foreground font-exo"
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              {/* Budget */}
              <div className="space-y-3">
                <label className="text-sm font-exo font-medium text-foreground">
                  Project Budget
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full glass border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all duration-300 rounded-xl px-4 py-3 bg-background/50 text-foreground font-exo"
                >
                  <option value="">Select budget range</option>
                  {budgetRanges.map((range, index) => (
                    <option key={index} value={range}>{range}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="space-y-3">
                <label className="text-sm font-exo font-medium text-foreground">
                  Project Details *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="glass border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all duration-300 resize-none rounded-xl px-4 py-3"
                  placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                />
              </div>

              {/* Submit Button */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-500 font-exo font-semibold text-lg py-6 group rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/30"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending Message...
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="glass p-6 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-500 group cursor-pointer"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-5 group-hover:shadow-[0_0_25px_hsl(var(--primary))] transition-all duration-500">
                    <info.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h4 className="font-orbitron font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {info.title}
                  </h4>
                  <p className="text-primary font-exo font-medium mb-2 text-lg group-hover:scale-105 transition-transform duration-300">
                    {info.content}
                  </p>
                  <p className="text-muted-foreground font-exo text-sm group-hover:text-foreground/80 transition-colors duration-300">
                    {info.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass-strong p-8 rounded-3xl border border-primary/20 transform transition-all duration-500 hover:-translate-y-2"
            >
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-2xl font-orbitron font-bold mb-6 gradient-text bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent"
              >
                Why Choose CODNOX?
              </motion.h3>
              <div className="space-y-4">
                {[
                  'Free initial consultation and project assessment',
                  'Transparent pricing with detailed project roadmaps',
                  'Agile development with regular progress updates',
                  'Post-launch support and maintenance included',
                  'Scalable solutions built for future growth',
                  'Industry-leading security and compliance'
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-muted/30 transition-all duration-300 group/benefit"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      className="w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    >
                      <CheckCircle className="w-4 h-4 text-white" />
                    </motion.div>
                    <span className="text-muted-foreground font-exo group-hover/benefit:text-foreground transition-colors duration-300">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4 text-center"
            >
              {[
                { number: '<24h', label: 'Response Time' },
                { number: '98%', label: 'Client Satisfaction' },
                { number: '100%', label: 'Project Success' }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass p-5 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-300 group/stat"
                >
                  <div className="text-2xl font-orbitron font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2 group-hover/stat:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-xs text-muted-foreground font-exo group-hover/stat:text-foreground transition-colors duration-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;