import { motion } from 'framer-motion';
import { useEffect } from 'react';

interface LoaderProps {
  onLoadingComplete: () => void;
}

const Loader = ({ onLoadingComplete }: LoaderProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 4500); // Extended time for luxury experience

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.1,
        filter: "blur(10px)"
      }}
      transition={{ 
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-cream overflow-hidden"
    >
      {/* Luxury Background Elements */}
      <div className="absolute inset-0">
        {/* Animated luxury particles */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-luxury-gold/20 to-rose-gold/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-rose-gold/20 to-champagne-gold/20 rounded-full blur-2xl"
        />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          duration: 1.5,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.3
        }}
        className="text-center max-w-4xl px-8 relative z-10"
      >
        {/* Decorative top element */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "120px", opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="h-px bg-gradient-luxury mx-auto mb-8"
        />

        {/* Luxury Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 2,
            delay: 1,
            ease: "easeOut"
          }}
          className="relative"
        >
          {/* Opening Quote Mark */}
          <motion.span
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute -top-6 -left-4 text-6xl font-luxury text-luxury-black"
          >
            "
          </motion.span>

          <motion.blockquote
            className="font-luxury text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight tracking-wide"
          >
            <motion.span
              animate={{ 
                opacity: [0.9, 1, 0.9],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="luxury-text-gradient block"
            >
              Elegance is a mindset
            </motion.span>
            
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 1.8 }}
              className="block mt-4 text-luxury-black font-elegant text-2xl md:text-3xl lg:text-4xl italic font-normal"
            >
              — even in code.
            </motion.span>
          </motion.blockquote>

          {/* Closing Quote Mark */}
          <motion.span
            initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 2.2 }}
            className="absolute -bottom-6 -right-4 text-6xl font-luxury text-luxury-black"
          >
            "
          </motion.span>
        </motion.div>

        {/* Decorative bottom element */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "120px", opacity: 1 }}
          transition={{ duration: 1.5, delay: 2.5 }}
          className="h-px bg-gradient-luxury mx-auto mt-8"
        />

        {/* Luxury Loading Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3 }}
          className="mt-12 max-w-md mx-auto"
        >
          <div className="relative h-1 bg-gray-600 rounded-full overflow-hidden luxury-shadow">
            <motion.div
              initial={{ width: 0, x: "-100%" }}
              animate={{ 
                width: "100%", 
                x: "0%",
              }}
              transition={{ 
                duration: 4.5,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="h-full bg-gradient-luxury rounded-full relative"
            >
              {/* Shimmer effect */}
              <motion.div
                animate={{
                  x: ["-100%", "100%"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />
            </motion.div>
          </div>
          
          {/* Loading text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3.5 }}
            className="text-luxury-black font-elegant text-sm tracking-widest uppercase mt-4 text-center font-semibold"
          >
            Crafting Excellence
          </motion.p>
        </motion.div>

        {/* Floating decorative elements */}
        <motion.div
          animate={{ 
            y: [-10, 10, -10],
            rotate: [0, 5, -5, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 right-0 w-4 h-4 bg-luxury-gold rounded-full blur-sm"
        />
        <motion.div
          animate={{ 
            y: [10, -10, 10],
            rotate: [0, -5, 5, 0],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-0 left-0 w-3 h-3 bg-rose-gold rounded-full blur-sm"
        />
      </motion.div>
    </motion.div>
  );
};

export default Loader;