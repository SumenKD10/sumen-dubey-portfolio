import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Users, Award, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/modern-ui/MagneticButton";
import TypewriterEffect from "@/components/modern-ui/TypewriterEffect";
import GlowCard from "@/components/modern-ui/GlowCard";

const HeroSection = () => {
  const roles = [
    "Frontend Developer",
    "React Specialist", 
    "UI/UX Enthusiast",
    "Performance Expert"
  ];

  const stats = [
    { value: "3+", label: "Years Experience", icon: Award },
    { value: "15+", label: "Clients", icon: Users },
    { value: "4+", label: "Projects", icon: Briefcase }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-background">
      {/* Simplified background with clean gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5" />
      
      {/* Subtle floating elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-float opacity-40" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float delay-1000 opacity-40" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Clean greeting */}
            <motion.div
              className="flex items-center space-x-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full" />
              <span className="text-lg text-muted-foreground font-medium">Hello there! 👋</span>
            </motion.div>

            {/* Enhanced name presentation */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                I'm{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Sumen Kumar Dubey
                </span>
              </motion.h1>
              
              <div className="text-2xl lg:text-3xl font-bold">
                <TypewriterEffect 
                  words={roles}
                  className="text-2xl lg:text-3xl font-bold text-primary"
                />
              </div>
            </motion.div>

            {/* Clean tech stack */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {["React.js", "React Native", "Node.js", "MongoDB"].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-secondary/50 text-secondary-foreground rounded-full text-sm font-medium border border-border/50"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* Professional summary */}
            <motion.div
              className="space-y-4 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-lg text-foreground leading-relaxed">
                Frontend Developer specialized in React & modern web performance — 
                building applications that scale to{" "}
                <span className="text-primary font-semibold">1,000+ users</span>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I create fast, interactive, and scalable applications with modern web technologies, 
                focusing on performance optimization and exceptional user experiences.
              </p>
            </motion.div>

            {/* Call-to-action buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
            >
              <MagneticButton
                variant="primary"
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25"
              >
                <Mail className="w-5 h-5 mr-2" />
                Let's Connect
              </MagneticButton>
              <MagneticButton
                variant="secondary"
                size="lg"
                className="border-2 border-border hover:border-primary hover:shadow-lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </MagneticButton>
            </motion.div>

            {/* Stats integrated into content */}
            <motion.div
              className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    className="text-center group cursor-pointer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex items-center justify-center mb-2">
                      <IconComponent className="w-5 h-5 text-primary mr-2" />
                      <span className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {stat.value}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              className="flex items-center space-x-2 text-muted-foreground cursor-pointer pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ y: 5 }}
            >
              <span className="text-sm">Scroll to explore</span>
              <ArrowDown className="h-4 w-4 animate-bounce" />
            </motion.div>
          </motion.div>

          {/* Right side - Professional Photo */}
          <motion.div
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <GlowCard className="p-6 shadow-2xl max-w-sm" intensity="medium">
                <motion.img
                  src="/lovable-uploads/38d92104-93d0-4919-8a97-9637c5fffb79.png"
                  alt="Sumen Kumar Dubey - Frontend Developer"
                  className="w-full h-80 lg:h-96 object-cover rounded-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                
                {/* Floating accent elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full backdrop-blur-sm"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent/20 rounded-full backdrop-blur-sm"
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [360, 180, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </GlowCard>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Simplified recruiter shortcuts */}
      <motion.div
        className="fixed right-6 top-1/2 -translate-y-1/2 z-30 space-y-3 hidden xl:flex xl:flex-col"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
      >
        {[
          { icon: Download, title: "Download Resume", action: () => {} },
          { icon: Briefcase, title: "View Experience", action: () => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }) },
          { icon: Mail, title: "Contact Me", action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }
        ].map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.7 + index * 0.1 }}
            >
              <Button
                size="sm"
                className="bg-card/80 backdrop-blur-sm border border-border/50 p-3 hover:bg-secondary shadow-lg hover:shadow-xl transition-all duration-200"
                title={item.title}
                onClick={item.action}
              >
                <IconComponent className="h-4 w-4 text-primary" />
              </Button>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default HeroSection;