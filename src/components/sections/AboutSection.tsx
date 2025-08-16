import { motion } from "framer-motion";
import { Code, Users, Award, TrendingUp } from "lucide-react";
import GlowCard from "@/components/modern-ui/GlowCard";
import MagneticButton from "@/components/modern-ui/MagneticButton";

const AboutSection = () => {
  const stats = [
    { icon: Code, label: "Years Experience", value: "3+", color: "text-primary" },
    { icon: Users, label: "Production Projects", value: "4", color: "text-primary" },
    { icon: Award, label: "Crash-Free Sessions", value: "95%", color: "text-primary" },
    { icon: TrendingUp, label: "User Scale", value: "1000+", color: "text-primary" },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="orange-divider"></div>
          <h2 className="section-header">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Enhanced Image with Glow Card */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <GlowCard className="p-4 lg:p-6 shadow-xl" intensity="medium">
              <motion.img
                src="/lovable-uploads/38d92104-93d0-4919-8a97-9637c5fffb79.png"
                alt="Sumen Kumar Dubey - About"
                className="w-full h-64 sm:h-72 lg:h-80 object-cover rounded-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              
              {/* Enhanced badge with glow effect */}
              <div className="absolute top-2 left-2 lg:top-4 lg:left-4 bg-primary text-white px-2 py-1 lg:px-3 lg:py-1 rounded-full text-xs lg:text-sm font-medium glow-primary">
                FRONTEND DEVELOPER
              </div>
            </GlowCard>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            className="order-1 lg:order-2 space-y-6 lg:space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 lg:mb-6 leading-tight">
                I don't just build apps I design 
                how people feel when they use them
              </h3>
              
              <div className="space-y-3 lg:space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
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

                <p>
                  Based in Bengaluru, I've contributed to enterprise-grade applications serving thousands 
                  of users across companies like Soft Designers, Mouthline Technologies, and MetricStream India.
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
          </motion.div>
        </div>

        {/* Enhanced Stats Section with Glow Cards */}
        <motion.div
          className="mt-12 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlowCard 
                className="text-center p-6 magnetic-hover"
                intensity="low"
              >
                <motion.div
                  className="inline-flex p-3 rounded-full bg-primary/10 mb-4"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="h-6 w-6 text-primary" />
                </motion.div>
                <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;