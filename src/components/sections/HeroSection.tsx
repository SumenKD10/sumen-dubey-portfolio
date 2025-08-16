import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Sparkles, Users, Award, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import MagneticButton from "@/components/modern-ui/MagneticButton";
import TypewriterEffect from "@/components/modern-ui/TypewriterEffect";
import GlowCard from "@/components/modern-ui/GlowCard";

const HeroSection = () => {
  const [showSparkle, setShowSparkle] = useState(false);
  
  const roles = [
    "Frontend Developer",
    "React Specialist", 
    "UI/UX Enthusiast",
    "Performance Expert"
  ];

  const handleWaveClick = () => {
    setShowSparkle(true);
    setTimeout(() => setShowSparkle(false), 1000);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-background">
      {/* Enhanced background with subtle gradient and floating elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/5" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float delay-1000" />
      
      {/* Spline 3D Background - Right side with enhanced opacity */}
      <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
        <iframe 
          src='https://my.spline.design/glassmorphlandingloader-7a15e8b71f5a4b1e98c4b5df7d7b8c7f/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="opacity-30"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Enhanced greeting with magnetic effect */}
            <motion.div
              className="flex items-center space-x-3 magnetic-hover"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="orange-divider glow-primary"></div>
              <span className="text-lg text-muted-foreground font-medium">Hello there! 👋</span>
            </motion.div>

            {/* Name and dynamic role title */}
            <div>
              <motion.div
                className="mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <p className="text-lg text-muted-foreground mb-2">I'm Sumen Kumar</p>
                <motion.h1 
                  className="text-5xl lg:text-6xl font-bold text-foreground mb-4 hover:animate-magnetic"
                  whileHover={{ scale: 1.02 }}
                >
                  Dubey
                </motion.h1>
                <div className="text-2xl lg:text-3xl font-bold text-primary">
                  <TypewriterEffect 
                    words={roles}
                    className="text-2xl lg:text-3xl font-bold text-primary"
                  />
                </div>
              </motion.div>
            </div>

            {/* Role description */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-muted-foreground">React.js | React Native | Node.js | MongoDB</p>
            </motion.div>

            {/* Elevator pitch - cleaner style */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <p className="text-lg text-foreground leading-relaxed max-w-lg">
                Frontend Developer specialized in React & modern web performance — 
                building apps that scale to <span className="text-primary font-semibold">1,000+ users</span>.
              </p>
              <p className="text-muted-foreground max-w-lg">
                I build fast, interactive, and scalable applications with React, Next.js, and modern web technologies.
              </p>
            </motion.div>

            {/* Enhanced CTA Buttons with magnetic effects */}
            <motion.div
              className="flex flex-wrap gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
            >
              <MagneticButton
                variant="secondary"
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-border hover:border-primary hover:shadow-lg hover:shadow-primary/10"
              >
                <Mail className="w-5 h-5 mr-2" />
                Let's Connect
              </MagneticButton>
              <MagneticButton
                variant="primary"
                size="lg"
                className="bg-primary hover:bg-primary/90 glow-on-hover"
              >
                <Download className="w-5 h-5 mr-2" />
                Hire Me
              </MagneticButton>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              className="flex items-center space-x-2 text-muted-foreground cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ y: 5 }}
            >
              <span className="text-sm">Scroll to explore</span>
              <ArrowDown className="h-4 w-4 animate-bounce" />
            </motion.div>
          </motion.div>

            {/* Right side - Enhanced Professional Photo with Glow Cards */}
          <motion.div
            className="flex justify-center lg:justify-self-center relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative max-w-sm mx-auto">
              {/* Enhanced main photo container with glow effect */}
              <GlowCard className="p-4 sm:p-6 lg:p-8 shadow-2xl" intensity="medium">
                <motion.img
                  src="/lovable-uploads/38d92104-93d0-4919-8a97-9637c5fffb79.png"
                  alt="Sumen Kumar Dubey - Frontend Developer"
                  className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px] h-64 sm:h-80 lg:h-96 object-cover rounded-2xl mx-auto"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </GlowCard>
              
              {/* Enhanced Stats Cards with glow effects */}
              <motion.div
                className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 hidden sm:block"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <GlowCard className="min-w-[100px] sm:min-w-[120px] p-4" intensity="low">
                  <div className="text-center">
                    <div className="text-lg sm:text-xl font-bold text-primary mb-1">3+</div>
                    <div className="text-xs sm:text-sm text-muted-foreground font-medium">Years Experience</div>
                  </div>
                </GlowCard>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-6 sm:-right-8 hidden md:block"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <GlowCard className="min-w-[100px] sm:min-w-[120px] p-4" intensity="low">
                  <div className="text-center">
                    <div className="text-lg sm:text-xl font-bold text-primary mb-1">15+</div>
                    <div className="text-xs sm:text-sm text-muted-foreground font-medium">Clients</div>
                  </div>
                </GlowCard>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 hidden sm:block"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
              >
                <GlowCard className="min-w-[100px] sm:min-w-[120px] p-4" intensity="low">
                  <div className="text-center">
                    <div className="text-lg sm:text-xl font-bold text-primary mb-1">4+</div>
                    <div className="text-xs sm:text-sm text-muted-foreground font-medium">Projects</div>
                  </div>
                </GlowCard>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Recruiter shortcuts - Responsive positioning */}
      <motion.div
        className="fixed right-4 sm:right-6 top-1/2 transform -translate-y-1/2 z-30 space-y-3 hidden lg:flex lg:flex-col"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <Button
          size="sm"
          className="bg-card border border-border p-3 hover-lift hover:bg-secondary shadow-lg"
          title="Download Resume"
        >
          <Download className="h-4 w-4 text-primary" />
        </Button>
        <Button
          size="sm"
          className="bg-card border border-border p-3 hover-lift hover:bg-secondary shadow-lg"
          title="View Experience"
          onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <Briefcase className="h-4 w-4 text-primary" />
        </Button>
        <Button
          size="sm"
          className="bg-card border border-border p-3 hover-lift hover:bg-secondary shadow-lg"
          title="Contact Me"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <Mail className="h-4 w-4 text-primary" />
        </Button>
      </motion.div>
    </section>
  );
};

export default HeroSection;