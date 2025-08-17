import { useEffect, useRef } from "react";
import { ExternalLink, Github, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useGSAP } from "@/hooks/useGSAP";

const ProjectsSection = () => {
  const { animateIn, staggerAnimation, gsap } = useGSAP();
  const sectionRef = useRef<HTMLElement>(null);
  
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

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate section header
      animateIn(".projects-header");
      
      // Stagger animate project cards
      staggerAnimation(".project-card", { delay: 0.3 });
    }, sectionRef);

    return () => ctx.revert();
  }, [animateIn, staggerAnimation, gsap]);

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="projects-header mb-16">
          <div className="text-center">
            <div className="orange-divider mx-auto"></div>
            <h2 className="section-header font-sora">My Projects</h2>
            <p className="section-subheader mx-auto font-inter">
              Crafting Seamless Design Experience
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group hover:scale-105 transition-transform duration-300"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center border-b border-border">
                <span className="text-4xl sm:text-5xl lg:text-6xl">{project.image}</span>
              </div>

              {/* Project Content */}
              <div className="p-4 lg:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 lg:mb-4 gap-2">
                  <h3 className="text-lg lg:text-xl font-bold text-foreground group-hover:text-primary transition-colors font-sora">
                    {project.title}
                  </h3>
                  <div className="flex gap-1 lg:gap-2 flex-wrap">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium font-nunito">
                      Figma
                    </span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium font-nunito">
                      React
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-3 lg:mb-4 leading-relaxed text-xs sm:text-sm font-inter">
                  {project.description}
                </p>

                <Button className="bg-primary text-white px-4 lg:px-6 py-2 rounded-lg font-medium hover:bg-primary/90 text-xs lg:text-sm w-full sm:w-auto font-inter">
                  View Project
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;