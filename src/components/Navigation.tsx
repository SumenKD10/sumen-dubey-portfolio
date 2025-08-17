import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Download, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@/hooks/useGSAP";

const Navigation = () => {
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { gsap } = useGSAP();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!navRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(".nav-container", 
        { y: -100, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.6, 
          delay: 0.2,
          ease: "power3.out" 
        }
      );
    }, navRef);

    return () => ctx.revert();
  }, [gsap]);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-40 glass-card m-4 rounded-2xl"
    >
      <div className="nav-container container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 font-sora">
            SD
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium font-inter"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Theme toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hover-lift"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            {/* Download Resume */}
            <Button
              variant="default"
              size="sm"
              className="gradient-primary text-white font-medium hover-lift hidden sm:flex font-inter"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </Button>

            {/* Mobile menu toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-glass-border animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-foreground hover:text-primary transition-colors duration-300 font-medium py-2 font-inter"
                >
                  {item.label}
                </button>
              ))}
              <Button
                variant="default"
                size="sm"
                className="gradient-primary text-white font-medium self-start mt-4 font-inter"
              >
                <Download className="h-4 w-4 mr-2" />
                Resume
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;