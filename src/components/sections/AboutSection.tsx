import { useEffect, useRef } from "react";
import { Code, Users, Award, TrendingUp } from "lucide-react";
import GlowCard from "@/components/modern-ui/GlowCard";
import MagneticButton from "@/components/modern-ui/MagneticButton";
import { useGSAP } from "@/hooks/useGSAP";

const AboutSection = () => {
  const { animateIn, animateSlideIn, staggerAnimation, gsap } = useGSAP();
  const sectionRef = useRef<HTMLElement>(null);
  
  const stats = [
    { icon: Code, label: "Years Experience", value: "3+", color: "text-primary" },
    { icon: Users, label: "Production Projects", value: "4", color: "text-primary" },
    { icon: Award, label: "Crash-Free Sessions", value: "95%", color: "text-primary" },
    { icon: TrendingUp, label: "User Scale", value: "1000+", color: "text-primary" },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate section header
      animateIn(".about-header");
      
      // Animate image and content with slide effects
      animateSlideIn(".about-image", "left", { delay: 0.2 });
      animateSlideIn(".about-content", "right", { delay: 0.3 });
      
      // Stagger animate stats cards
      staggerAnimation(".stat-card", { delay: 0.5 });
    }, sectionRef);

    return () => ctx.revert();
  }, [animateIn, animateSlideIn, staggerAnimation, gsap]);

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="about-header mb-16">
          <div className="orange-divider"></div>
          <h2 className="section-header mt-12 font-sora">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Enhanced Image with Glow Card */}
          <div className="about-image relative order-2 lg:order-1">
            <GlowCard className="shadow-xl" intensity="medium">
              <img
                src="/lovable-uploads/aboutme.jpeg"
                alt="Sumen Kumar Dubey - About"
                className="w-full h-64 sm:h-72 lg:h-80 object-cover object-[25%_65%] rounded-xl hover:scale-105 transition-transform duration-500"
              />
            </GlowCard>
          </div>

          {/* Right side - Content */}
          <div className="about-content order-1 lg:order-2 space-y-6 lg:space-y-8">
            <div>
              <div className="space-y-3 lg:space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base font-inter">
                <p>
                  Hi, I'm Sumen Kumar Dubey, a Frontend Developer. I specialize in creating simple, 
                  effective, and visually appealing applications for users. Good development isn't just 
                  about code — it's about improving the user experience.
                </p>

                <p>
                  My work involves React.js, Next.js, and modern web technologies to create seamless and 
                  intuitive digital experiences. I focus on performance optimization, scalable architectures, 
                  and ensuring 95%+ crash-free sessions.
                </p>
              </div>

              <MagneticButton
                variant="primary"
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-6 lg:mt-8 glow-on-hover"
              >
                Let's Work Together
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section with Glow Cards */}
        <div className="mt-12 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <GlowCard 
                className="text-center p-6 magnetic-hover"
                intensity="low"
              >
                <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4 hover:rotate-12 hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-primary mb-2 font-sora">{stat.value}</div>
                <p className="text-sm text-muted-foreground font-medium font-nunito">{stat.label}</p>
              </GlowCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;