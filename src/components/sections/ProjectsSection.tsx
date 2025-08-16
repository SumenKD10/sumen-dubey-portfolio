import { motion } from "framer-motion";
import { ExternalLink, Github, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Idea Management Platform",
      description: "Built a platform for employees to submit, vote, and track ideas within an organization. Interactive dashboard with user authentication, voting system, and admin controls.",
      technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
      features: [
        "User authentication & role-based access",
        "Interactive voting system",
        "Real-time dashboard updates",
        "Admin analytics & reporting"
      ],
      metrics: {
        performance: "22% faster load times",
        users: "500+ active users",
        uptime: "99.9% uptime"
      },
      status: "Production",
      github: "#",
      demo: "#",
      image: "🚀"
    },
    {
      title: "Facility Management App",
      description: "Created a mobile solution for reporting and tracking of facility-related issues in real-time. Built offline-first architecture with push notifications for 240+ field users.",
      technologies: ["React Native", "Firebase", "AsyncStorage", "Atomic Design"],
      features: [
        "Offline-first data syncing",
        "Real-time push notifications", 
        "Image upload & compression",
        "Location-based issue tracking"
      ],
      metrics: {
        users: "240+ field users",
        crashFree: "95% crash-free sessions",
        sync: "Offline sync capability"
      },
      status: "Production",
      github: "#",
      demo: "#",
      image: "🏢"
    },
    {
      title: "Production Monitoring Dashboard",
      description: "Designed UI components for tracking production shifts, alerts, and status in factories. Used dynamic widgets and charts to present real-time metrics. Streamlined team training time.",
      technologies: ["JavaScript", "ASP.NET", "UI Components"],
      features: [
        "Real-time production metrics",
        "Dynamic alert system",
        "Custom dashboard widgets",
        "Team training optimization"
      ],
      metrics: {
        alerts: "Real-time monitoring",
        training: "Reduced training time",
        dashboard: "Custom widgets"
      },
      status: "Production",
      github: "#",
      demo: "#",
      image: "📊"
    },
    {
      title: "Pepperfry E-commerce Clone",
      description: "Built scalable e-commerce features including login, cart, and product filtering. Used Firebase for authentication, Firestore for state, and managed state across dynamic routes.",
      technologies: ["React.js", "Firebase", "Tailwind CSS", "Dynamic Routing"],
      features: [
        "Firebase authentication",
        "Shopping cart functionality",
        "Advanced product filtering",
        "Responsive design system"
      ],
      metrics: {
        routes: "Dynamic routing",
        auth: "Firebase integration",
        responsive: "Mobile-optimized"
      },
      status: "Demo",
      github: "#",
      demo: "#",
      image: "🛒"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcase of enterprise-level applications with real-world impact and technical innovation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass-card rounded-2xl overflow-hidden hover-lift group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Project Header */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-4xl">{project.image}</span>
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <Badge 
                        variant={project.status === "Production" ? "default" : "secondary"}
                        className="mt-1"
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metrics */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Impact Metrics:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                      <div key={metricIndex} className="flex justify-between text-sm">
                        <span className="text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                        <span className="font-medium text-primary">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button variant="default" size="sm" className="gradient-primary text-white">
                    <Play className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                  <Button variant="outline" size="sm">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Details
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Highlights */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6">Technical Excellence</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <p className="text-muted-foreground">Crash-Free Sessions</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">1000+</div>
                <p className="text-muted-foreground">Active Users</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">30%</div>
                <p className="text-muted-foreground">Performance Improvement</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;