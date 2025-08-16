import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Soft Designers Pvt. Ltd.",
      role: "Frontend Developer",
      period: "Sep 2023 - Present",
      location: "Koramangala, Bengaluru",
      type: "Full-time",
      achievements: [
        "Developed scalable UI components across 3 enterprise-grade applications using React and Atomic Design principles",
        "Collaborated with cross-functional teams, contributing to products that meet business goals and timelines",
        "Built a React Native mobile app with offline syncing and push notifications for 240+ field users",
        "Improved frontend load times by 30%+ through lazy loading strategies",
        "Automated deployment with GitHub Actions, cutting CI/CD time by 25%",
        "Regularly contributed to sprint planning, retrospectives, and feature delivery"
      ],
      technologies: ["React.js", "React Native", "JavaScript", "GitHub Actions", "Atomic Design"]
    },
    {
      company: "Mouthline Technologies Pvt. Ltd.",
      role: "Frontend Developer Intern",
      period: "Feb 2023 - Aug 2023",
      location: "Remote",
      type: "Internship",
      achievements: [
        "Built interactive UIs using React.js and Redux Toolkit, improving development consistency across projects",
        "Integrated form validation with Formik and Yup, reducing front-end form errors during testing",
        "Worked in 2-week agile sprints, collaborating daily with designers and PMs to meet sprint goals",
        "Supported debugging and performance tuning for mobile responsiveness and component reuse"
      ],
      technologies: ["React.js", "Redux Toolkit", "Formik", "Yup", "Responsive Design"]
    },
    {
      company: "MetricStream India Pvt. Ltd.",
      role: "QA Engineer (UI Focus)",  
      period: "Jul 2020 - Aug 2023",
      location: "Bengaluru",
      type: "Full-time",
      achievements: [
        "Designed and executed 100+ UI test cases focusing on layout accuracy and usability",
        "Reported 45+ interface bugs and worked closely with frontend engineers for resolution",
        "Coordinated with dev teams during QA cycles to ensure interface alignment across browsers",
        "Introduced reusable test templates, increasing coverage and reducing redundancy"
      ],
      technologies: ["UI Testing", "Cross-browser Testing", "Test Case Design", "Bug Reporting"]
    }
  ];

  const companies = [
    { name: "Soft Designers", logo: "🏢" },
    { name: "Mouthline Tech", logo: "🦷" },
    { name: "MetricStream", logo: "📊" },
    { name: "TechCorp", logo: "💻" },
    { name: "InnovateLab", logo: "🚀" },
    { name: "DataFlow", logo: "📈" }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building scalable web applications and leading frontend development across multiple organizations
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-secondary"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-20"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-4 h-4 rounded-full gradient-primary border-4 border-background"></div>

                <div className="glass-card p-8 rounded-2xl hover-lift">
                  <div className="flex flex-wrap items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-1">{exp.role}</h3>
                      <h4 className="text-xl text-primary font-semibold mb-2">{exp.company}</h4>
                    </div>
                    <Badge variant="secondary" className="mb-2">
                      {exp.type}
                    </Badge>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mb-6 text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <motion.li
                        key={achievementIndex}
                        className="flex items-start space-x-3 text-foreground"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: achievementIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Company Logos Row */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-center text-xl font-semibold mb-8 text-muted-foreground">
            Trusted by leading organizations
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3 glass-card px-6 py-4 rounded-xl"
                whileHover={{ scale: 1.05, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-2xl">{company.logo}</span>
                <span className="font-medium text-muted-foreground">{company.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;