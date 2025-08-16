import { motion } from "framer-motion";
import { Code, Users, Award, TrendingUp } from "lucide-react";

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

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
              <img
                src="/lovable-uploads/38d92104-93d0-4919-8a97-9637c5fffb79.png"
                alt="Sumen Kumar Dubey - About"
                className="w-full h-80 object-cover rounded-xl"
              />
              
              {/* Orange badge */}
              <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                FRONTEND DEVELOPER
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">
                I don't just build apps I design 
                how people feel when they use them
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
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

              <motion.button
                className="mt-8 bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Work Together
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stats-card text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="stats-number">{stat.value}</div>
              <p className="stats-label">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;