import { motion } from "framer-motion";
import { Code, Users, Award, TrendingUp } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Code, label: "Years Experience", value: "3+", color: "text-primary" },
    { icon: Users, label: "Production Projects", value: "4", color: "text-secondary" },
    { icon: Award, label: "Crash-Free Sessions", value: "95%", color: "text-accent" },
    { icon: TrendingUp, label: "User Scale", value: "1000+", color: "text-primary" },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate Frontend Developer with expertise in building scalable web applications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4 gradient-primary bg-clip-text text-transparent">
                Frontend Developer
              </h3>
              <p className="text-foreground leading-relaxed mb-4">
                I'm a dedicated Frontend Developer with over 3 years of experience in building 
                high-performance web applications. My expertise lies in React.js, Next.js, and 
                modern JavaScript frameworks, with a strong focus on user experience and performance optimization.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Based in Koramangala, Bengaluru, I've had the privilege of working with innovative 
                companies like Soft Designers, Mouthline Technologies, and MetricStream India, 
                where I've contributed to enterprise-grade applications serving thousands of users.
              </p>
              <p className="text-foreground leading-relaxed">
                I specialize in creating scalable frontend architectures, implementing CI/CD pipelines, 
                and ensuring 95%+ crash-free sessions through rigorous testing and performance optimization.
              </p>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 rounded-2xl text-center hover-lift"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`inline-flex p-3 rounded-full ${stat.color} bg-current/10 mb-4`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <motion.div
                  className={`text-3xl font-bold ${stat.color} mb-2`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Value Statement */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">My Mission</h3>
            <p className="text-lg text-foreground leading-relaxed">
              To bridge the gap between design and functionality by creating 
              <span className="text-primary font-semibold"> fast, interactive, and scalable applications </span>
              that deliver exceptional user experiences while maintaining enterprise-level performance standards.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;