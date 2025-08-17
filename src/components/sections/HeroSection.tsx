import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Users, Award, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/modern-ui/MagneticButton";
import TypewriterEffect from "@/components/modern-ui/TypewriterEffect";
import GlowCard from "@/components/modern-ui/GlowCard";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const tl = gsap.timeline({ delay: 0.5 });
    
    // Animate large name typography
    tl.fromTo(nameRef.current, 
      { opacity: 0, y: 100, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out" }
    )
    // Animate subtitle and role info
    .fromTo(subtitleRef.current?.children || [], 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" },
      "-=0.6"
    )
    // Animate image reveal
    .fromTo(imageRef.current,
      { opacity: 0, scale: 0.9, clipPath: "inset(0 100% 0 0)" },
      { opacity: 1, scale: 1, clipPath: "inset(0 0% 0 0)", duration: 1.2, ease: "power3.out" },
      "-=0.8"
    )
    // Animate stats
    .fromTo(statsRef.current?.children || [],
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" },
      "-=0.4"
    );

    return () => {
      tl.kill();
    };
  }, []);

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
    <section 
      ref={heroRef}
      id="hero" 
      className="min-h-screen relative overflow-hidden bg-background"
    >
      {/* Clean minimal background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/98 to-primary/3" />
      
      {/* Subtle geometric accents */}
      <div className="absolute top-1/4 right-10 w-2 h-32 bg-primary/20 rounded-full" />
      <div className="absolute bottom-1/4 left-10 w-16 h-2 bg-accent/20 rounded-full" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 h-full min-h-screen">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          
          {/* Left Side - Typography & Info */}
          <div className="space-y-8 lg:pr-4 z-10 md:mt-20">
            
            {/* Hero Labels - Magazine Style */}
            <div ref={subtitleRef} className="space-y-2 opacity-0">
              <div className="flex items-center gap-4 text-sm font-medium text-muted-foreground">
                <span className="font-sora uppercase tracking-wider">Creative Developer</span>
                <div className="w-8 h-px bg-border"></div>
                <span className="font-sora uppercase tracking-wider">Product Designer</span>
              </div>
              <div className="text-xs font-nunito text-muted-foreground/60 uppercase tracking-widest">
                Since 2021
              </div>
            </div>

            {/* Large Name Typography */}
            <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row text-center">
              <h1 
                ref={nameRef}
                className="text-7xl lg:text-8xl xl:text-8xl font-bold font-sora leading-none text-foreground opacity-0"
                style={{ letterSpacing: '-0.02em' }}
              >
                Sumen
              </h1>
              <div className="ml-4 lg:ml-8">
                <h1 className="text-7xl lg:text-8xl xl:text-8xl font-bold font-sora leading-none text-foreground/60" style={{ letterSpacing: '-0.02em' }}>
                  Kumar
                </h1>
              </div>
              <div className="ml-8 lg:ml-8">
                <h1 className="text-7xl lg:text-8xl xl:text-8xl font-bold font-sora leading-none" style={{ letterSpacing: '-0.02em' }}>
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Dubey
                  </span>
                </h1>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-6 max-w-md">
              <TypewriterEffect
                words={roles}
                className="text-xl font-medium font-poppins text-primary"
              />
              
              <p className="text-base font-nunito text-muted-foreground leading-relaxed">
                I don't just build applications — I craft digital experiences that resonate with users and drive meaningful engagement.
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2">
                {["React.js", "React Native", "Node.js", "MongoDB"].map((tech, index) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary/30 text-secondary-foreground rounded-full text-xs font-medium font-inter border border-border/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <MagneticButton
                variant="primary"
                size="lg"
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium font-inter px-8 py-4 rounded-2xl shadow-lg shadow-primary/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  <span>Let's Connect</span>
                </div>
              </MagneticButton>
            </div>
          </div>

          {/* Right Side - Professional Image */}
          <div className="flex justify-center lg:justify-end z-0">
            <div 
              ref={imageRef}
              className="relative opacity-0 rounded-3xl"
            >
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src="/lovable-uploads/38d92104-93d0-4919-8a97-9637c5fffb79.png"
                  alt="Sumen Kumar Dubey - Frontend Developer"
                  className="w-80 lg:w-96 h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl bg-orange-300"
                />
                
                {/* Image Overlay Elements */}
                {/* <div className="absolute -bottom-6 -left-6 bg-card/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-border/50">
                  <div className="text-sm font-medium font-inter text-foreground">Available for</div>
                  <div className="text-xs font-nunito text-muted-foreground">Freelance Projects</div>
                </div> */}

                {/* Decorative QR-like element */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-primary/10 rounded-lg border-2 border-primary/20 flex items-center justify-center">
                  <div className="w-6 h-6 bg-primary/30 rounded-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Row */}
        <div 
          ref={statsRef}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 w-full max-w-4xl"
        >
          <div className="grid grid-cols-3 gap-8 px-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="text-center opacity-0 group hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex items-center justify-center mb-2">
                    <IconComponent className="w-4 h-4 text-primary mr-2" />
                    <span className="text-2xl font-bold font-sora text-foreground group-hover:text-primary transition-colors">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-xs font-nunito text-muted-foreground font-medium uppercase tracking-wide">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-2 text-muted-foreground cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          whileHover={{ y: 3 }}
        >
          <span className="text-xs font-nunito uppercase tracking-wider">Scroll to explore</span>
          <ArrowDown className="h-3 w-3 animate-bounce" />
        </motion.div>

        {/* Side Navigation - Minimized */}
        <motion.div
          className="fixed right-8 top-1/2 -translate-y-1/2 z-30 space-y-4 hidden xl:flex xl:flex-col"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          {[
            { icon: Briefcase, title: "Experience", action: () => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }) },
            { icon: Mail, title: "Contact", action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }
          ].map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Button
                key={item.title}
                size="sm"
                variant="ghost"
                className="w-12 h-12 rounded-full bg-card/60 backdrop-blur-sm border border-border/30 p-0 hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg"
                title={item.title}
                onClick={item.action}
              >
                <IconComponent className="h-4 w-4" />
              </Button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;