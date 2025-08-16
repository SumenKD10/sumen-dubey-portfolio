import { useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  intensity?: 'low' | 'medium' | 'high';
}

const GlowCard = ({ 
  children, 
  className = '', 
  glowColor = 'primary',
  intensity = 'medium'
}: GlowCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const intensityClasses = {
    low: 'before:opacity-20 hover:before:opacity-40',
    medium: 'before:opacity-30 hover:before:opacity-60',
    high: 'before:opacity-40 hover:before:opacity-80',
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={cn(
        'relative overflow-hidden rounded-2xl bg-card border border-border',
        'before:absolute before:inset-0 before:rounded-2xl before:p-px before:bg-gradient-to-r',
        'before:from-transparent before:via-primary/30 before:to-transparent',
        'before:transition-opacity before:duration-500',
        intensityClasses[intensity],
        className
      )}
      style={{
        background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
          hsl(var(--${glowColor}) / 0.1) 0%, 
          transparent 50%)`
      }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: `0 20px 40px hsl(var(--${glowColor}) / 0.15)`
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
};

export default GlowCard;