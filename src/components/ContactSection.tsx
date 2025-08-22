import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react';
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
      content: '+1 (555) 123-4567',
      description: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'San Francisco, CA',
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
    'IoT Solutions',
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
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
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
            Let's Build <span className="gradient-text">Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-exo leading-relaxed">
            Ready to transform your business with cutting-edge technology? 
            Let's discuss your project and explore the possibilities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl border border-primary/20"
          >
            <h3 className="text-2xl font-orbitron font-bold mb-6 gradient-text">
              Start Your Project
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-exo font-medium text-foreground">
                    Full Name *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="glass border-primary/20 focus:border-primary focus:glow-sm transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-exo font-medium text-foreground">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="glass border-primary/20 focus:border-primary focus:glow-sm transition-all duration-300"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              {/* Company */}
              <div className="space-y-2">
                <label className="text-sm font-exo font-medium text-foreground">
                  Company/Organization
                </label>
                <Input
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="glass border-primary/20 focus:border-primary focus:glow-sm transition-all duration-300"
                  placeholder="Your Company Name"
                />
              </div>

              {/* Project Type */}
              <div className="space-y-2">
                <label className="text-sm font-exo font-medium text-foreground">
                  Project Type *
                </label>
                <select
                  name="project"
                  value={formData.project}
                  onChange={handleInputChange}
                  required
                  className="w-full glass border border-primary/20 focus:border-primary focus:glow-sm transition-all duration-300 rounded-md px-3 py-2 bg-background text-foreground font-exo"
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              {/* Budget */}
              <div className="space-y-2">
                <label className="text-sm font-exo font-medium text-foreground">
                  Project Budget
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full glass border border-primary/20 focus:border-primary focus:glow-sm transition-all duration-300 rounded-md px-3 py-2 bg-background text-foreground font-exo"
                >
                  <option value="">Select budget range</option>
                  {budgetRanges.map((range, index) => (
                    <option key={index} value={range}>{range}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-exo font-medium text-foreground">
                  Project Details *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="glass border-primary/20 focus:border-primary focus:glow-sm transition-all duration-300 resize-none"
                  placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-primary hover:glow-primary transition-all duration-300 font-exo font-semibold text-lg py-6 group"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
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
                  whileHover={{ y: -5 }}
                  className="glass p-6 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:glow-primary transition-all duration-300">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-orbitron font-semibold text-foreground mb-2">
                    {info.title}
                  </h4>
                  <p className="text-primary font-exo font-medium mb-1">
                    {info.content}
                  </p>
                  <p className="text-muted-foreground font-exo text-sm">
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
              className="glass-strong p-8 rounded-2xl border border-primary/20"
            >
              <h3 className="text-2xl font-orbitron font-bold mb-6 gradient-text">
                Why Choose CODNOX?
              </h3>
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
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground font-exo">
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
                <div key={index} className="glass p-4 rounded-xl border border-primary/10">
                  <div className="text-2xl font-orbitron font-bold text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs text-muted-foreground font-exo">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;