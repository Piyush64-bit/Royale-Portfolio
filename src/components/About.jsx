import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Crown, Sparkles, Star, Award, TrendingUp, Users, Coffee, Heart } from 'lucide-react';
import { aboutData } from '../data/portfolioData';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-gradient-to-br from-warm-white via-luxury-cream to-pearl px-6 luxury-pattern" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-px bg-gradient-luxury"></div>
              <motion.div
                whileHover={{ rotate: 15, scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                <Crown className="w-8 h-8 text-luxury-gold" />
              </motion.div>
              <div className="w-16 h-px bg-gradient-luxury"></div>
            </div>
          </div>
          
          <motion.h2 
            className="font-luxury text-5xl md:text-6xl lg:text-7xl font-light text-luxury-black mb-6 tracking-wide luxury-text"
            whileHover={{ scale: 1.02 }}
          >
            <span className="luxury-text-gradient">About Me</span>
          </motion.h2>
          <motion.p 
            className="font-elegant text-xl md:text-2xl text-soft-gray italic max-w-3xl mx-auto leading-relaxed luxury-text"
            whileHover={{ scale: 1.01 }}
          >
            Crafting digital experiences with passion, precision, and an unwavering commitment to excellence
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="luxury-card rounded-3xl p-10 shadow-luxury relative overflow-hidden group"
          >
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
              <Crown className="w-full h-full text-luxury-gold" />
            </div>

            {/* Profile Image */}
            <div className="relative mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-48 h-48 mx-auto relative overflow-hidden rounded-full shadow-luxury group/image"
              >
                {/* Decorative border */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-4 border-gradient-luxury opacity-30"
                />
                
                {/* Main image */}
                <motion.img
                  src="/picofme-new.png"
                  alt="Piyush Soni"
                  className="w-full h-full object-cover rounded-full transition-all duration-500 group-hover/image:scale-110"
                  whileHover={{ scale: 1.1 }}
                />
                
                {/* Luxury overlay on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-luxury-gold/20 to-rose-gold/20 rounded-full"
                />
                
                {/* Floating sparkles */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1], 
                    opacity: [0.5, 1, 0.5],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-3 -right-3"
                >
                  <Sparkles className="w-8 h-8 text-luxury-gold" />
                </motion.div>
                
                <motion.div
                  animate={{ 
                    scale: [1.1, 1, 1.1], 
                    opacity: [0.6, 1, 0.6],
                    rotate: [360, 180, 0]
                  }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-2 -left-2"
                >
                  <Star className="w-6 h-6 text-rose-gold" />
                </motion.div>
              </motion.div>
            </div>

            <div className="text-center mb-8">
              <motion.h3 
                className="font-luxury text-3xl font-semibold text-luxury-black mb-3 luxury-text"
                whileHover={{ scale: 1.02 }}
              >
                Digital Craftsman
              </motion.h3>
              <motion.p 
                className="font-elegant text-lg text-soft-gray italic leading-relaxed luxury-text"
                whileHover={{ scale: 1.01 }}
              >
                "Passionate about creating beautiful, functional digital experiences that inspire and delight"
              </motion.p>
            </div>

            {/* Luxury Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {aboutData.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.08, 
                    y: -8,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="text-center p-6 bg-gradient-to-br from-white/60 to-white/30 rounded-2xl shadow-elegant backdrop-blur-sm border border-white/20 group/stat cursor-pointer relative overflow-hidden"
                >
                  <motion.div 
                    className="font-luxury text-3xl font-bold text-luxury-gold mb-2 group-hover/stat:scale-125 transition-all duration-300"
                    whileHover={{ scale: 1.2 }}
                  >
                    {stat.value}
                  </motion.div>
                  <motion.div 
                    className="font-sans text-sm text-soft-gray tracking-wide luxury-text"
                    whileHover={{ scale: 1.05 }}
                  >
                    {stat.label}
                  </motion.div>
                  
                  {/* Hover glow effect */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-br from-luxury-gold/10 to-rose-gold/10 rounded-2xl"
                  />
                </motion.div>
              ))}
            </div>

            {/* Decorative Elements */}
            <div className="flex justify-center mt-8 space-x-4">
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Star className="w-5 h-5 text-luxury-gold" />
              </motion.div>
              <motion.div
                animate={{ scale: [1.1, 1, 1.1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >
                <Star className="w-4 h-4 text-rose-gold" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <Star className="w-5 h-5 text-luxury-gold" />
              </motion.div>
            </div>

            {/* Card hover effect */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-gradient-to-br from-luxury-gold/5 to-rose-gold/5 rounded-3xl pointer-events-none"
            />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="space-y-8"
          >
            {aboutData.description.map((paragraph, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.7 + index * 0.2 }}
                whileHover={{ scale: 1.02, y: -3 }}
                className="luxury-card rounded-2xl p-8 shadow-elegant group cursor-pointer"
              >
                <motion.p 
                  className="font-sans text-lg text-charcoal leading-relaxed luxury-text"
                  whileHover={{ scale: 1.01 }}
                >
                  {paragraph}
                </motion.p>
                
                {/* Hover glow */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-luxury-gold/5 to-rose-gold/5 rounded-2xl pointer-events-none"
                />
              </motion.div>
            ))}
            
            {/* Luxury Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="luxury-card rounded-3xl p-10 shadow-luxury relative overflow-hidden group cursor-pointer"
            >
              {/* Quote Background Pattern */}
              <div className="absolute top-4 left-4 text-6xl font-luxury text-luxury-gold/10">"</div>
              <div className="absolute bottom-4 right-4 text-6xl font-luxury text-luxury-gold/10 rotate-180">"</div>
              
              <motion.blockquote 
                className="font-luxury text-2xl md:text-3xl italic text-luxury-black text-center leading-relaxed relative z-10 luxury-text"
                whileHover={{ scale: 1.01 }}
              >
                "The best way to predict the future is to create it."
              </motion.blockquote>
              <div className="flex items-center justify-center mt-6 space-x-3">
                <div className="w-12 h-px bg-gradient-luxury"></div>
                <motion.p 
                  className="font-sans text-sm text-soft-gray tracking-widest uppercase luxury-text"
                  whileHover={{ scale: 1.05 }}
                >
                  Peter Drucker
                </motion.p>
                <div className="w-12 h-px bg-gradient-luxury"></div>
              </div>
              
              {/* Floating quote sparkle */}
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-6 right-6"
              >
                <Sparkles className="w-6 h-6 text-luxury-gold" />
              </motion.div>
            </motion.div>

            {/* Achievement Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="grid md:grid-cols-3 gap-6"
            >
              <motion.div 
                className="luxury-card rounded-2xl p-6 text-center shadow-elegant group hover:shadow-luxury transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Award className="w-8 h-8 text-luxury-gold mx-auto mb-3" />
                </motion.div>
                <motion.div 
                  className="font-luxury text-xl font-semibold text-luxury-black mb-1 luxury-text"
                  whileHover={{ scale: 1.05 }}
                >
                  Excellence
                </motion.div>
                <motion.div 
                  className="font-sans text-sm text-soft-gray luxury-text"
                  whileHover={{ scale: 1.02 }}
                >
                  In Every Detail
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="luxury-card rounded-2xl p-6 text-center shadow-elegant group hover:shadow-luxury transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <TrendingUp className="w-8 h-8 text-luxury-gold mx-auto mb-3" />
                </motion.div>
                <motion.div 
                  className="font-luxury text-xl font-semibold text-luxury-black mb-1 luxury-text"
                  whileHover={{ scale: 1.05 }}
                >
                  Innovation
                </motion.div>
                <motion.div 
                  className="font-sans text-sm text-soft-gray luxury-text"
                  whileHover={{ scale: 1.02 }}
                >
                  Driven Growth
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="luxury-card rounded-2xl p-6 text-center shadow-elegant group hover:shadow-luxury transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  transition={{ duration: 0.3 }}
                >
                  <Users className="w-8 h-8 text-luxury-gold mx-auto mb-3" />
                </motion.div>
                <motion.div 
                  className="font-luxury text-xl font-semibold text-luxury-black mb-1 luxury-text"
                  whileHover={{ scale: 1.05 }}
                >
                  Collaboration
                </motion.div>
                <motion.div 
                  className="font-sans text-sm text-soft-gray luxury-text"
                  whileHover={{ scale: 1.02 }}
                >
                  Team Success
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Decorative Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 1.7 }}
          className="text-center mt-20"
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -3 }}
            className="luxury-card rounded-3xl p-8 max-w-2xl mx-auto shadow-luxury group cursor-pointer"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Coffee className="w-6 h-6 text-luxury-gold" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                <Heart className="w-6 h-6 text-rose-gold" />
              </motion.div>
              <motion.div
                animate={{ y: [3, -3, 3] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <Sparkles className="w-6 h-6 text-luxury-gold" />
              </motion.div>
            </div>
            <motion.p 
              className="font-elegant text-lg text-soft-gray italic luxury-text"
              whileHover={{ scale: 1.01 }}
            >
              Crafted with passion, fueled by coffee, and driven by the desire to create something extraordinary
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;