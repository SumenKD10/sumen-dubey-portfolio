import { useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const MagneticButton = ({
  children,
  className = '',
  onClick,
  variant = 'primary',
  size = 'md'
}: MagneticButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
  };

  const handleMouseLeave = () => {
    const button = buttonRef.current;
    if (!button) return;
    button.style.transform = 'translate(0px, 0px)';
  };

  const variants = {
    primary: 'bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/25',
    secondary: 'bg-secondary text-secondary-foreground hover:shadow-lg',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      ref={buttonRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'relative rounded-lg font-medium transition-all duration-300 ease-out',
        'hover:scale-105 active:scale-95',
        'inline-flex items-center justify-center gap-2',
        variants[variant],
        sizes[size],
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
        opacity: { duration: 0.3 },
        y: { duration: 0.4 }
      }}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 to-accent-glow/20 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

export default MagneticButton;