import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Sparkles, Users, Award, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const HeroSection = () => {
  const [showSparkle, setShowSparkle] = useState(false);

  const handleWaveClick = () => {
    setShowSparkle(true);
    setTimeout(() => setShowSparkle(false), 1000);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-background">
      {/* Clean background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-secondary/10" />
      
      {/* Spline 3D Background - Right side */}
      <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
        <iframe 
          src='https://my.spline.design/glassmorphlandingloader-7a15e8b71f5a4b1e98c4b5df7d7b8c7f/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="opacity-40"
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
            {/* Clean greeting */}
            <motion.div
              className="flex items-center space-x-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="orange-divider"></div>
              <span className="text-lg text-muted-foreground font-medium">Hello.</span>
            </motion.div>

            {/* Name and title - Behance style */}
            <div>
              <motion.div
                className="mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <p className="text-lg text-muted-foreground mb-2">I'm Sumen Kumar</p>
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-4">Dubey</h1>
                <h2 className="text-2xl lg:text-3xl font-bold text-primary">Frontend Developer</h2>
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

            {/* CTA Buttons - Behance style */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="hover-lift border-border text-foreground hover:bg-secondary"
              >
                Let's Contact
              </Button>
              <Button
                size="lg"
                className="gradient-primary text-white font-semibold hover-lift"
              >
                Hire Me
              </Button>
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

            {/* Right side - Professional Photo with Stats Cards */}
          <motion.div
            className="flex justify-center lg:justify-self-center relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative max-w-sm mx-auto">
              {/* Main photo container */}
              <div className="bg-card rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl border border-border">
                <img
                  src="/lovable-uploads/38d92104-93d0-4919-8a97-9637c5fffb79.png"
                  alt="Sumen Kumar Dubey - Frontend Developer"
                  className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px] h-64 sm:h-80 lg:h-96 object-cover rounded-2xl mx-auto"
                />
              </div>
              
              {/* Stats Cards - Responsive positioning */}
              <motion.div
                className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 stats-card min-w-[100px] sm:min-w-[120px] hidden sm:block"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="text-center">
                  <div className="stats-number text-lg sm:text-xl">3+</div>
                  <div className="stats-label text-xs sm:text-sm">Years Experience</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-6 sm:-right-8 stats-card min-w-[100px] sm:min-w-[120px] hidden md:block"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <div className="text-center">
                  <div className="stats-number text-lg sm:text-xl">15+</div>
                  <div className="stats-label text-xs sm:text-sm">Clients</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 stats-card min-w-[100px] sm:min-w-[120px] hidden sm:block"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
              >
                <div className="text-center">
                  <div className="stats-number text-lg sm:text-xl">4+</div>
                  <div className="stats-label text-xs sm:text-sm">Projects</div>
                </div>
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