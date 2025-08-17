import { useEffect, useState, useRef } from "react";
import { useGSAP } from "@/hooks/useGSAP";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const { gsap } = useGSAP();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Animate loading initials
      gsap.fromTo(".loading-initials", 
        { scale: 0.5, opacity: 0, rotateY: -180 },
        { 
          scale: 1, 
          opacity: 1, 
          rotateY: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
          delay: 0.2
        }
      );

      // Animate progress bar container
      gsap.fromTo(".progress-container", 
        { width: 0, opacity: 0 },
        { 
          width: "16rem", 
          opacity: 1,
          duration: 0.5,
          delay: 0.5
        }
      );

      // Animate loading text
      gsap.fromTo(".loading-text", 
        { opacity: 0 },
        { 
          opacity: 1,
          duration: 0.6,
          delay: 0.8
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [gsap]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background animate-fade-out"
      style={{ animationDelay: progress === 100 ? '0.5s' : 'none' }}
    >
      {/* Animated background with floating particles */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/5" />
        
        {/* Floating orbs */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full blur-sm animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>

      <div className="glass-card p-12 text-center relative z-10 backdrop-blur-xl">
        {/* Enhanced loading initials with 3D effect */}
        <div className="loading-initials mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent-glow opacity-20 blur-2xl animate-pulse" />
          <span className="relative z-10 font-sora">SD</span>
        </div>
        
        {/* Enhanced progress bar */}
        <div className="progress-container w-64 h-2 bg-muted rounded-full overflow-hidden relative mb-6">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-sm" />
          
          {/* Progress fill with shimmer effect */}
          <div
            className="h-full rounded-full relative overflow-hidden transition-all duration-100"
            style={{
              background: `linear-gradient(135deg, 
                hsl(var(--primary)), 
                hsl(var(--accent-glow))
              )`,
              width: `${progress}%`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
          </div>
        </div>

        {/* Progress percentage */}
        <div className="text-sm font-medium text-primary mb-4 font-sora animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {progress}%
        </div>
        
        {/* Enhanced loading text with typewriter effect */}
        <div className="loading-text text-muted-foreground font-medium relative font-inter">
          <span className="animate-pulse">
            Loading Portfolio
          </span>
          <span className="inline-block ml-1 animate-pulse" style={{ animationDelay: '0.5s' }}>
            ...
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;