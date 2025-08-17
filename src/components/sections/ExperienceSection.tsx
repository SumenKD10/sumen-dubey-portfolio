import { useEffect, useRef } from "react";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useGSAP } from "@/hooks/useGSAP";

const ExperienceSection = () => {
  const { animateIn, animateSlideIn, staggerAnimation, gsap } = useGSAP();
  const sectionRef = useRef<HTMLElement>(null);
  
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
      company: "Mountblue Technologies Pvt. Ltd.",
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

  const education = [
    {
      degree: "Bachelor of Technology",
      school: "Haldia Institute of Technology",
      period: "2015 - 2019",
      type: "Education"
    },
    {
      degree: "Foundations of Data Science",
      school: "Google (Credential ID: ZQQWA8JR3DSZ)",
      period: "Jul 2025",
      type: "Certification"
    }
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate section header
      animateIn(".experience-header");
      
      // Animate timeline sections
      animateSlideIn(".experience-timeline", "left", { delay: 0.2 });
      animateSlideIn(".education-timeline", "right", { delay: 0.3 });
      
      // Stagger animate timeline items
      staggerAnimation(".timeline-item", { delay: 0.5 });
    }, sectionRef);

    return () => ctx.revert();
  }, [animateIn, animateSlideIn, staggerAnimation, gsap]);

  return (
    <section ref={sectionRef} id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="experience-header mb-16">
          <div className="text-center">
            <div className="orange-divider mx-auto"></div>
            <h2 className="section-header font-sora">My Background</h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Experience Timeline */}
          <div className="experience-timeline">
            <div className="flex items-center mb-6 lg:mb-8">
              <div className="w-6 h-6 lg:w-8 lg:h-8 bg-primary rounded-lg flex items-center justify-center mr-3">
                <span className="text-white text-xs lg:text-sm font-bold">💼</span>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-foreground font-sora">Experience</h3>
            </div>

            <div className="relative border-l-2 border-border ml-3 lg:ml-4 pl-6 lg:pl-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="timeline-item mb-8 relative"
                >
                  {/* Orange dot */}
                  <div className="absolute -left-8 lg:-left-10 top-2 w-3 h-3 lg:w-4 lg:h-4 bg-primary rounded-full border-2 lg:border-4 border-background"></div>
                  
                  <div className="bg-card rounded-2xl p-4 lg:p-6 shadow-lg border border-border hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <h4 className="text-lg font-bold text-foreground mb-1 font-sora">
                      {exp.company} ({exp.period.split(' - ')[1] || exp.period.split(' - ')[0]})
                    </h4>
                    <h5 className="text-base font-semibold text-foreground mb-3 font-inter">{exp.role}</h5>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed font-inter">
                      {exp.achievements[0]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div className="education-timeline">
            <div className="flex items-center mb-6 lg:mb-8">
              <div className="w-6 h-6 lg:w-8 lg:h-8 bg-primary rounded-lg flex items-center justify-center mr-3">
                <span className="text-white text-xs lg:text-sm font-bold">🎓</span>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-foreground font-sora">Education</h3>
            </div>

            <div className="relative border-l-2 border-border ml-3 lg:ml-4 pl-6 lg:pl-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="timeline-item mb-8 relative"
                >
                  {/* Orange dot */}
                  <div className="absolute -left-8 lg:-left-10 top-2 w-3 h-3 lg:w-4 lg:h-4 bg-primary rounded-full border-2 lg:border-4 border-background"></div>
                  
                  <div className="bg-card rounded-2xl p-4 lg:p-6 shadow-lg border border-border hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <div className="bg-primary/10 text-primary px-3 py-1 rounded-full inline-block text-sm font-medium mb-3 font-nunito">
                      {edu.type}
                    </div>
                    
                    <h4 className="text-lg font-bold text-foreground mb-1 font-sora">{edu.period}</h4>
                    <h5 className="text-base font-semibold text-foreground mb-3 font-inter">{edu.degree}</h5>
                    
                    <p className="text-sm text-muted-foreground font-inter">{edu.school}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;