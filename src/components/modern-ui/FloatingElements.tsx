import { motion } from 'framer-motion';
import { Download, Mail, Eye, Zap, Code, Palette } from 'lucide-react';

const FloatingElements = () => {
  const floatingItems = [
    { icon: Code, delay: 0, duration: 20, x: '10%', y: '20%' },
    { icon: Palette, delay: 2, duration: 25, x: '80%', y: '30%' },
    { icon: Zap, delay: 4, duration: 18, x: '20%', y: '70%' },
    { icon: Eye, delay: 6, duration: 22, x: '85%', y: '80%' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {floatingItems.map((item, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: item.x, top: item.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.1, 0],
            scale: [0, 1, 0],
            rotate: [0, 360],
            y: [0, -100, 0]
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut"
          }}
        >
          <div className="p-4 rounded-full bg-primary/5 backdrop-blur-sm border border-primary/10">
            <item.icon className="w-6 h-6 text-primary/20" />
          </div>
        </motion.div>
      ))}
      
      {/* Ambient orbs */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute w-2 h-2 bg-primary/10 rounded-full blur-sm"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;