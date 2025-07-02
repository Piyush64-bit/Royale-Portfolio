import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, Database, Globe, Smartphone, Zap, Award, Star, BookOpen, Trophy } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const iconMap = {
    Code,
    Palette,
    Database,
    Globe,
    Smartphone,
    Zap,
    Award,
    Star,
    BookOpen,
    Trophy
  };

  return (
    <section className="py-20 bg-cream px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-6 luxury-text">
            Skills & Expertise
          </h2>
          <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto luxury-text">
            A comprehensive toolkit for creating exceptional digital experiences
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2, ease: "easeOut" }}
              className="luxury-card rounded-3xl p-8 shadow-lg group"
            >
              <motion.h3 
                className="font-serif text-2xl font-semibold text-gray-800 mb-8 text-center luxury-text"
                whileHover={{ scale: 1.05 }}
              >
                {category.category}
              </motion.h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, index) => {
                  const IconComponent = iconMap[skill.icon] || Code;
                  
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 30 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: categoryIndex * 0.2 + index * 0.1, 
                        ease: "easeOut" 
                      }}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -5,
                        rotateY: 5,
                        transition: { duration: 0.3 }
                      }}
                      className="bg-white/50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer luxury-shadow"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <motion.div
                          whileHover={{ 
                            scale: 1.3, 
                            rotate: 15,
                            transition: { duration: 0.3 }
                          }}
                        >
                          <IconComponent className="w-8 h-8 text-rose-gold luxury-icon transition-all duration-300 group-hover:text-luxury-gold" />
                        </motion.div>
                        <motion.span 
                          className="font-sans text-sm font-medium text-gray-600 luxury-text"
                          whileHover={{ scale: 1.1 }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      
                      <motion.h4 
                        className="font-sans text-lg font-semibold text-gray-800 mb-3 luxury-text"
                        whileHover={{ scale: 1.02 }}
                      >
                        {skill.name}
                      </motion.h4>
                      
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.2 + index * 0.1 + 0.5, 
                            ease: "easeOut" 
                          }}
                          whileHover={{ 
                            scaleY: 1.5,
                            transition: { duration: 0.3 }
                          }}
                          className="bg-gradient-rose-blush h-2 rounded-full skill-bar relative overflow-hidden"
                        >
                          <motion.div
                            animate={{
                              x: ["-100%", "100%"]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                          />
                        </motion.div>
                      </div>

                      {/* Hover overlay effect */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-br from-luxury-gold/5 to-rose-gold/5 rounded-2xl pointer-events-none"
                      />
                    </motion.div>
                  );
                })}
              </div>

              {/* Category hover effect */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-luxury-gold/3 to-rose-gold/3 rounded-3xl pointer-events-none"
              />
            </motion.div>
          ))}
        </div>

        {/* Floating decorative elements */}
        <motion.div
          animate={{ 
            y: [-10, 10, -10],
            rotate: [0, 5, -5, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-10 w-6 h-6 bg-luxury-gold rounded-full blur-sm floating-element"
        />
        <motion.div
          animate={{ 
            y: [15, -15, 15],
            rotate: [0, -8, 8, 0],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-32 left-16 w-4 h-4 bg-rose-gold rounded-full blur-sm floating-element"
        />
      </div>
    </section>
  );
};

export default Skills;