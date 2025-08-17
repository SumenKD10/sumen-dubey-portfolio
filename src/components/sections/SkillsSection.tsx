import { useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { useGSAP } from "@/hooks/useGSAP";

const SkillsSection = () => {
  const { animateIn, staggerAnimation, gsap } = useGSAP();
  const sectionRef = useRef<HTMLElement>(null);
  
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 95, color: "bg-blue-500" },
        { name: "Next.js", level: 90, color: "bg-gray-800" },
        { name: "React Native", level: 85, color: "bg-blue-600" },
        { name: "JavaScript", level: 92, color: "bg-yellow-500" },
        { name: "TypeScript", level: 88, color: "bg-blue-700" },
        { name: "Tailwind CSS", level: 90, color: "bg-teal-500" },
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", level: 80, color: "bg-green-600" },
        { name: "Express.js", level: 78, color: "bg-gray-600" },
        { name: "MongoDB", level: 82, color: "bg-green-500" },
        { name: "REST APIs", level: 85, color: "bg-orange-500" },
      ]
    },
    {
      title: "Tools & Concepts",
      skills: [
        { name: "Git/GitHub", level: 88, color: "bg-gray-800" },
        { name: "GitLab", level: 75, color: "bg-orange-600" },
        { name: "Webpack", level: 70, color: "bg-blue-400" },
        { name: "Babel", level: 72, color: "bg-yellow-600" },
        { name: "VS Code", level: 95, color: "bg-blue-600" },
        { name: "Figma", level: 65, color: "bg-purple-500" },
      ]
    },
    {
      title: "UI/UX & Design",
      skills: [
        { name: "Modular Architecture", level: 85, color: "bg-indigo-500" },
        { name: "Atomic Design", level: 80, color: "bg-purple-600" },
        { name: "Responsive Design", level: 92, color: "bg-pink-500" },
        { name: "Performance Optimization", level: 88, color: "bg-red-500" },
      ]
    }
  ];

  const certifications = [
    {
      name: "Foundations of Data Science",
      issuer: "Google",
      date: "July 2025",
      credential: "ZQQWA8JR3DSZ",
      verified: true
    }
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate section header
      animateIn(".skills-header");
      
      // Stagger animate skill categories
      staggerAnimation(".skill-category", { delay: 0.2 });
      
      // Animate skill bars with delay
      gsap.fromTo(".skill-bar", 
        { width: "0%" },
        {
          width: (i, target) => target.dataset.level + "%",
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".skills-grid",
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );
      
      // Animate certifications
      animateIn(".certifications-section", { delay: 0.5 });
    }, sectionRef);

    return () => ctx.revert();
  }, [animateIn, staggerAnimation, gsap]);

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 mt-12">
        <div className="skills-header text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-sora">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-inter">
            Comprehensive technical stack with focus on modern web development
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid grid sm:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="skill-category glass-card p-4 lg:p-6 rounded-2xl"
            >
              <h3 className="text-lg lg:text-xl font-semibold mb-4 lg:mb-6 gradient-primary bg-clip-text text-transparent font-sora">
                {category.title}
              </h3>
              <div className="space-y-3 lg:space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground font-inter">{skill.name}</span>
                      <Badge variant="secondary" className="text-xs font-nunito">
                        {skill.level}%
                      </Badge>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className={`skill-bar h-2 rounded-full ${skill.color}`}
                        data-level={skill.level}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="certifications-section text-center">
          <h3 className="text-2xl font-semibold mb-8 font-sora">Certifications</h3>
          <div className="flex justify-center">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl hover-lift max-w-md hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-lg font-sora">G</span>
                    </div>
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="font-semibold text-foreground mb-1 font-sora">{cert.name}</h4>
                    <p className="text-muted-foreground text-sm mb-2 font-inter">{cert.issuer} • {cert.date}</p>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-xs font-nunito">
                        {cert.credential}
                      </Badge>
                      {cert.verified && (
                        <Badge variant="default" className="text-xs bg-green-500 font-nunito">
                          ✓ Verified
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;