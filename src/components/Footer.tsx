import { useEffect, useRef } from "react";
import { Heart, Zap } from "lucide-react";
import { useGSAP } from "@/hooks/useGSAP";

const Footer = () => {
  const { animateIn, gsap } = useGSAP();
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!footerRef.current) return;

    const ctx = gsap.context(() => {
      animateIn(".footer-content", { delay: 0.2 });
    }, footerRef);

    return () => ctx.revert();
  }, [animateIn, gsap]);

  return (
    <footer ref={footerRef} className="py-12 bg-muted/30 border-t border-glass-border">
      <div className="container mx-auto px-6">
        <div className="footer-content text-center space-y-6">
          {/* Performance Badge */}
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full hover:scale-105 transition-transform duration-300">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium font-inter">⚡ 95+ Performance Score</span>
          </div>

          {/* Main Footer Content */}
          <div>
            <p className="text-muted-foreground mb-4 font-inter">
              Built with modern web technologies and attention to detail
            </p>
            
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <span className="font-inter">Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span className="font-inter">by Sumen Kumar Dubey</span>
            </div>
          </div>

          {/* Accessibility & Copyright */}
          <div className="space-y-2 text-xs text-muted-foreground font-nunito">
            <p>Portfolio follows accessibility best practices (WCAG AA)</p>
            <p>© 2024 Sumen Kumar Dubey. All rights reserved.</p>
          </div>

          {/* Tech Stack */}
          <div className="flex justify-center space-x-1 text-xs text-muted-foreground font-nunito">
            <span>React</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>Tailwind CSS</span>
            <span>•</span>
            <span>GSAP</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;