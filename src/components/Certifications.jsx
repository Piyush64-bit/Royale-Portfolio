import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Award, 
  BookOpen, 
  Star, 
  Trophy, 
  Database, 
  Globe, 
  Code, 
  Code2, 
  BarChart3, 
  Shield, 
  TrendingUp, 
  Lock, 
  Brain, 
  Calculator,
  ExternalLink,
  Calendar,
  CheckCircle,
  Sparkles,
  Crown
} from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const iconMap = {
    Award,
    BookOpen,
    Star,
    Trophy,
    Database,
    Globe,
    Code,
    Code2,
    BarChart3,
    Shield,
    TrendingUp,
    Lock,
    Brain,
    Calculator
  };

  const colorMap = {
    Award: 'bg-gradient-to-br from-rose-gold to-blush-pink',
    BookOpen: 'bg-gradient-to-br from-blush-pink to-champagne-gold',
    Star: 'bg-gradient-to-br from-champagne-gold to-rose-gold',
    Trophy: 'bg-gradient-to-br from-rose-gold to-champagne-gold',
    Database: 'bg-gradient-to-br from-blush-pink to-rose-gold',
    Globe: 'bg-gradient-to-br from-rose-gold to-blush-pink',
    Code: 'bg-gradient-to-br from-champagne-gold to-blush-pink',
    Code2: 'bg-gradient-to-br from-blush-pink to-champagne-gold',
    BarChart3: 'bg-gradient-to-br from-rose-gold to-champagne-gold',
    Shield: 'bg-gradient-to-br from-champagne-gold to-rose-gold',
    TrendingUp: 'bg-gradient-to-br from-blush-pink to-rose-gold',
    Lock: 'bg-gradient-to-br from-rose-gold to-blush-pink',
    Brain: 'bg-gradient-to-br from-champagne-gold to-blush-pink',
    Calculator: 'bg-gradient-to-br from-blush-pink to-champagne-gold'
  };

  return (
    <section className="py-20 bg-white px-6 relative overflow-hidden" ref={ref}>
      {/* Floating background elements */}
      <motion.div
        animate={{ 
          y: [-15, 15, -15],
          x: [-8, 8, -8],
          rotate: [0, 3, -3, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-16 left-8 w-24 h-24 bg-gradient-luxury opacity-10 rounded-full blur-xl"
      />
      <motion.div
        animate={{ 
          y: [20, -20, 20],
          x: [12, -12, 12],
          rotate: [0, -5, 5, 0],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-20 right-12 w-32 h-32 bg-gradient-luxury-dark opacity-10 rounded-full blur-2xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          {/* Decorative header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex justify-center mb-6"
          >
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
          </motion.div>

          <motion.h2 
            className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-6 luxury-text"
            whileHover={{ scale: 1.02 }}
          >
            Certifications & Achievements
          </motion.h2>
          <motion.p 
            className="font-sans text-lg text-gray-600 max-w-3xl mx-auto luxury-text"
            whileHover={{ scale: 1.01 }}
          >
            A comprehensive collection of professional certifications demonstrating expertise across 
            web development, data science, cybersecurity, and software engineering domains.
          </motion.p>
          
          {/* Stats */}
          <div className="flex justify-center items-center space-x-8 mt-8">
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.1, y: -3 }}
            >
              <div className="font-serif text-3xl font-bold text-rose-gold mb-1">
                {certificationsData.length}
              </div>
              <div className="font-sans text-sm text-gray-600">
                Certifications
              </div>
            </motion.div>
            <div className="w-px h-12 bg-gray-300"></div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.1, y: -3 }}
            >
              <div className="font-serif text-3xl font-bold text-rose-gold mb-1">
                5+
              </div>
              <div className="font-sans text-sm text-gray-600">
                Domains
              </div>
            </motion.div>
            <div className="w-px h-12 bg-gray-300"></div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.1, y: -3 }}
            >
              <div className="font-serif text-3xl font-bold text-rose-gold mb-1">
                100%
              </div>
              <div className="font-sans text-sm text-gray-600">
                Verified
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certificationsData.map((cert, index) => {
            const IconComponent = iconMap[cert.icon] || Award;
            const colorClass = colorMap[cert.icon] || colorMap.Award;
            
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  rotateY: 3,
                  transition: { duration: 0.3 }
                }}
                className="cert-card glassmorphism rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 group relative overflow-hidden cursor-pointer"
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
                  <IconComponent className="w-full h-full text-gray-800" />
                </div>

                {/* Verification Badge */}
                <motion.div 
                  className="absolute top-4 right-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </motion.div>

                {/* Sparkle effect on hover */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute top-2 left-2"
                >
                  <Sparkles className="w-4 h-4 text-luxury-gold animate-luxury-pulse" />
                </motion.div>
                
                <motion.div 
                  className={`w-16 h-16 ${colorClass} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-125 transition-all duration-500 luxury-shadow`}
                  whileHover={{ rotate: 10 }}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </motion.div>
                
                <motion.h3 
                  className="font-sans text-lg font-semibold text-gray-800 mb-2 text-center leading-tight luxury-text"
                  whileHover={{ scale: 1.02 }}
                >
                  {cert.title}
                </motion.h3>
                
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <motion.p 
                    className="font-sans text-sm font-medium text-gray-700 luxury-text"
                    whileHover={{ scale: 1.05 }}
                  >
                    {cert.issuer}
                  </motion.p>
                </div>
                
                <div className="flex items-center justify-center space-x-1 mb-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Calendar className="w-4 h-4 text-gray-500" />
                  </motion.div>
                  <motion.p 
                    className="font-sans text-sm text-gray-500 luxury-text"
                    whileHover={{ scale: 1.05 }}
                  >
                    {cert.date}
                  </motion.p>
                </div>

                <motion.p 
                  className="font-sans text-xs text-gray-600 text-center mb-4 leading-relaxed luxury-text"
                  whileHover={{ scale: 1.01 }}
                >
                  {cert.description}
                </motion.p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1 justify-center mb-4">
                  {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                    <motion.span 
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ 
                        scale: 1.1, 
                        y: -2,
                        transition: { duration: 0.2 }
                      }}
                      className="px-2 py-1 bg-gradient-rose-champagne rounded-full text-xs font-medium text-gray-700 hover:bg-gradient-rose-blush hover:text-white transition-all duration-300 cursor-pointer"
                    >
                      {skill}
                    </motion.span>
                  ))}
                  {cert.skills.length > 3 && (
                    <motion.span 
                      className="px-2 py-1 bg-gray-200 rounded-full text-xs font-medium text-gray-600 hover:bg-gray-300 transition-all duration-300 cursor-pointer"
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      +{cert.skills.length - 3}
                    </motion.span>
                  )}
                </div>

                {/* Verification Link */}
                {cert.verificationUrl && (
                  <motion.a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-rose-blush text-white py-2 px-4 rounded-xl font-sans font-medium text-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group/btn relative overflow-hidden"
                  >
                    <span>Verify</span>
                    <motion.div
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.div>
                    
                    {/* Button shimmer effect */}
                    <motion.div
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    />
                  </motion.a>
                )}

                {/* Credential ID */}
                {cert.credentialId && (
                  <motion.p 
                    className="font-sans text-xs text-gray-400 text-center mt-2 luxury-text"
                    whileHover={{ scale: 1.05 }}
                  >
                    ID: {cert.credentialId}
                  </motion.p>
                )}

                {/* Card hover glow effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-luxury-gold/5 to-rose-gold/5 rounded-2xl pointer-events-none"
                />
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="luxury-card rounded-3xl p-8 max-w-2xl mx-auto shadow-luxury"
          >
            <motion.h3 
              className="font-serif text-2xl font-semibold text-gray-800 mb-4 luxury-text"
              whileHover={{ scale: 1.02 }}
            >
              Continuous Learning Journey
            </motion.h3>
            <motion.p 
              className="font-sans text-gray-600 mb-6 luxury-text"
              whileHover={{ scale: 1.01 }}
            >
              These certifications represent my commitment to staying current with industry trends 
              and continuously expanding my technical expertise across multiple domains.
            </motion.p>
            <div className="flex justify-center space-x-4">
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <div className="font-serif text-xl font-bold text-rose-gold">300+</div>
                <div className="font-sans text-xs text-gray-600">Hours Studied</div>
              </motion.div>
              <div className="w-px h-12 bg-gray-300"></div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <div className="font-serif text-xl font-bold text-rose-gold">50+</div>
                <div className="font-sans text-xs text-gray-600">Projects Built</div>
              </motion.div>
              <div className="w-px h-12 bg-gray-300"></div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <div className="font-serif text-xl font-bold text-rose-gold">15+</div>
                <div className="font-sans text-xs text-gray-600">Technologies</div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating decorative elements */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 right-1/5 w-6 h-6 text-luxury-gold opacity-30 floating-element"
        >
          <Trophy className="w-full h-full" />
        </motion.div>
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "linear",
            delay: 3
          }}
          className="absolute bottom-1/3 left-1/5 w-5 h-5 text-rose-gold opacity-40 floating-element"
        >
          <Award className="w-full h-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;