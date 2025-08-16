import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const HeroSection = () => {
  const [showSparkle, setShowSparkle] = useState(false);

  const handleWaveClick = () => {
    setShowSparkle(true);
    setTimeout(() => setShowSparkle(false), 1000);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5" />
      
      {/* Spline 3D Background - Right side */}
      <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
        <iframe 
          src='https://my.spline.design/glassmorphlandingloader-7a15e8b71f5a4b1e98c4b5df7d7b8c7f/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="opacity-60"
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
            {/* Greeting with wave */}
            <motion.div
              className="flex items-center space-x-3 text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <span>Hello, I'm</span>
              <motion.span
                className="text-2xl cursor-pointer relative"
                onClick={handleWaveClick}
                whileHover={{ rotate: 20 }}
                whileTap={{ scale: 1.2 }}
              >
                👋
                {showSparkle && (
                  <motion.div
                    className="absolute -top-2 -right-2"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                  >
                    <Sparkles className="h-4 w-4 text-primary" />
                  </motion.div>
                )}
              </motion.span>
            </motion.div>

            {/* Name and title */}
            <div>
              <motion.h1
                className="text-5xl lg:text-7xl font-bold gradient-primary bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Sumen Kumar
              </motion.h1>
              <motion.h1
                className="text-5xl lg:text-7xl font-bold text-foreground"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Dubey
              </motion.h1>
            </div>

            {/* Role */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-xl text-primary font-semibold">Frontend Developer</p>
              <p className="text-muted-foreground">React.js | React Native | Node.js | MongoDB</p>
            </motion.div>

            {/* Elevator pitch */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <p className="text-lg text-foreground font-medium leading-relaxed">
                Frontend Developer specialized in React & modern web performance — 
                building apps that scale to <span className="text-primary font-semibold">1,000+ users</span>.
              </p>
              <p className="text-muted-foreground">
                I build fast, interactive, and scalable applications with React, Next.js, and modern web technologies.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
            >
              <Button
                size="lg"
                className="gradient-primary text-white font-semibold hover-lift glow-primary"
              >
                <Download className="h5 w-5 mr-2" />
                Download Resume
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hover-lift"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="h-5 w-5 mr-2" />
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

          {/* Right side - Professional Photo */}
          <motion.div
            className="lg:justify-self-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <div className="glass-card p-8 rounded-3xl">
                <img
                  src="/lovable-uploads/38d92104-93d0-4919-8a97-9637c5fffb79.png"
                  alt="Sumen Kumar Dubey - Frontend Developer"
                  className="w-80 h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 glass-card p-3 rounded-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-2xl">⚡</span>
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 glass-card p-3 rounded-xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <span className="text-2xl">🚀</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Recruiter shortcuts - Floating */}
      <motion.div
        className="fixed right-6 top-1/2 transform -translate-y-1/2 z-30 space-y-3"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <Button
          size="sm"
          className="glass-card p-3 hover-lift"
          title="Download Resume"
        >
          <Download className="h-4 w-4" />
        </Button>
        <Button
          size="sm"
          className="glass-card p-3 hover-lift"
          title="View Experience"
          onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
        >
          💼
        </Button>
        <Button
          size="sm"
          className="glass-card p-3 hover-lift"
          title="Contact Me"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          📧
        </Button>
      </motion.div>
    </section>
  );
};

export default HeroSection;