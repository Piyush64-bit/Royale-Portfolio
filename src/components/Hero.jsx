import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Crown, Star } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Luxury floating elements animation variants
  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const sparkleVariants = {
    animate: {
      scale: [0.8, 1.2, 0.8],
      opacity: [0.3, 1, 0.3],
      rotate: [0, 180, 360],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-luxury-cream via-cream to-pearl px-6 pt-20 overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large luxury orbs */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-10 w-40 h-40 bg-gradient-luxury opacity-20 rounded-full blur-3xl"
          style={{ animationDelay: '0s' }}
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-40 right-20 w-32 h-32 bg-gradient-luxury-dark opacity-25 rounded-full blur-2xl"
          style={{ animationDelay: '2s' }}
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute bottom-32 left-20 w-48 h-48 bg-gradient-platinum opacity-15 rounded-full blur-3xl"
          style={{ animationDelay: '4s' }}
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute bottom-20 right-10 w-36 h-36 bg-gradient-luxury opacity-20 rounded-full blur-2xl"
          style={{ animationDelay: '1s' }}
        />

        {/* Luxury sparkles */}
        <motion.div
          variants={sparkleVariants}
          animate="animate"
          className="absolute top-1/4 left-1/3 text-luxury-gold opacity-60"
          style={{ animationDelay: '0s' }}
        >
          <Sparkles className="w-6 h-6" />
        </motion.div>
        <motion.div
          variants={sparkleVariants}
          animate="animate"
          className="absolute top-1/3 right-1/4 text-rose-gold opacity-50"
          style={{ animationDelay: '1.5s' }}
        >
          <Star className="w-5 h-5" />
        </motion.div>
        <motion.div
          variants={sparkleVariants}
          animate="animate"
          className="absolute bottom-1/3 left-1/4 text-luxury-gold opacity-70"
          style={{ animationDelay: '3s' }}
        >
          <Crown className="w-7 h-7" />
        </motion.div>
        <motion.div
          variants={sparkleVariants}
          animate="animate"
          className="absolute bottom-1/4 right-1/3 text-rose-gold opacity-40"
          style={{ animationDelay: '2.5s' }}
        >
          <Sparkles className="w-4 h-4" />
        </motion.div>

        {/* Luxury mesh gradient overlay */}
        <div className="absolute inset-0 luxury-mesh pointer-events-none" />
        
        {/* Subtle luxury pattern */}
        <div className="absolute inset-0 luxury-pattern pointer-events-none" />
      </div>

      {/* Main Content */}
      <div className="text-center max-w-5xl mx-auto relative z-10">
        {/* Decorative top ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex justify-center mb-8"
        >
          <div className="flex items-center space-x-4">
            <div className="w-16 h-px bg-gradient-luxury"></div>
            <Crown className="w-8 h-8 text-luxury-gold" />
            <div className="w-16 h-px bg-gradient-luxury"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="font-luxury text-6xl md:text-8xl lg:text-9xl font-light text-luxury-black mb-6 leading-tight tracking-wide">
            <motion.span 
              className="luxury-text-gradient block text-shadow-luxury"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Piyush Soni
            </motion.span>
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="mb-8"
        >
          <p className="font-elegant text-xl md:text-2xl lg:text-3xl text-charcoal mb-4 italic font-light leading-relaxed">
            Digital Craftsman & Visionary
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-soft-gray font-sans text-sm md:text-base tracking-wider">
            <span className="luxury-glassmorphism px-4 py-2 rounded-full">Computer Science Engineer</span>
            <span className="luxury-glassmorphism px-4 py-2 rounded-full">Frontend Architect</span>
            <span className="luxury-glassmorphism px-4 py-2 rounded-full">Design Connoisseur</span>
            <span className="luxury-glassmorphism px-4 py-2 rounded-full">Content Curator</span>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.button 
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="luxury-button text-warm-white px-10 py-4 rounded-full font-sans font-medium text-lg tracking-wide relative z-10 group overflow-hidden"
          >
            <span className="relative z-10 flex items-center space-x-3">
              <span>Explore My Craft</span>
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-luxury-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex justify-center space-x-8 text-soft-gray"
          >
            <div className="text-center">
              <div className="font-luxury text-2xl font-semibold text-luxury-gold mb-1">5+</div>
              <div className="font-sans text-xs tracking-widest uppercase">Years Experience</div>
            </div>
            <div className="w-px h-12 bg-gradient-luxury opacity-30"></div>
            <div className="text-center">
              <div className="font-luxury text-2xl font-semibold text-luxury-gold mb-1">50+</div>
              <div className="font-sans text-xs tracking-widest uppercase">Projects Crafted</div>
            </div>
            <div className="w-px h-12 bg-gradient-luxury opacity-30"></div>
            <div className="text-center">
              <div className="font-luxury text-2xl font-semibold text-luxury-gold mb-1">15+</div>
              <div className="font-sans text-xs tracking-widest uppercase">Technologies</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Decorative bottom ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          className="flex justify-center mt-12"
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-px bg-gradient-luxury"></div>
            <Star className="w-6 h-6 text-luxury-gold animate-luxury-pulse" />
            <div className="w-12 h-px bg-gradient-luxury"></div>
          </div>
        </motion.div>
      </div>
      
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        onClick={scrollToAbout}
        whileHover={{ scale: 1.1, y: -2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 luxury-glassmorphism p-3 rounded-full hover:shadow-luxury transition-all duration-300 z-10 group"
      >
        <ChevronDown className="w-6 h-6 text-luxury-gold animate-luxury-bounce group-hover:text-deep-gold transition-colors" />
      </motion.button>
    </section>
  );
};

export default Hero;