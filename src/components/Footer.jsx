import { motion } from 'framer-motion';
import { Linkedin, Github, Instagram, Twitter, Heart, Coffee, Crown, Sparkles, Star } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, url: personalInfo.linkedin, label: 'LinkedIn', color: 'from-blue-600 to-blue-700' },
    { icon: Github, url: personalInfo.github, label: 'GitHub', color: 'from-gray-700 to-gray-800' },
    { icon: Instagram, url: personalInfo.instagram, label: 'Instagram', color: 'from-pink-500 to-purple-600' },
    { icon: Twitter, url: personalInfo.twitter, label: 'Twitter', color: 'from-blue-400 to-blue-500' }
  ];

  return (
    <footer className="bg-gradient-to-br from-luxury-black via-charcoal to-luxury-black py-16 px-6 relative overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 left-10 w-32 h-32 bg-gradient-luxury opacity-10 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-luxury opacity-10 rounded-full blur-3xl"
        />
        
        {/* Luxury sparkles */}
        <motion.div
          animate={{
            y: [-10, 10, -10],
            opacity: [0.3, 0.7, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 text-luxury-gold opacity-30"
        >
          <Sparkles className="w-6 h-6" />
        </motion.div>
        <motion.div
          animate={{
            y: [10, -10, 10],
            opacity: [0.4, 0.8, 0.4],
            scale: [1.2, 0.8, 1.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 right-1/4 text-rose-gold opacity-30"
        >
          <Star className="w-5 h-5" />
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center space-y-12"
        >
          {/* Header Section */}
          <div className="space-y-6">
            <div className="flex justify-center">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-px bg-gradient-luxury"></div>
                <Crown className="w-8 h-8 text-luxury-gold" />
                <div className="w-16 h-px bg-gradient-luxury"></div>
              </div>
            </div>
            
            <div>
              <h3 className="font-luxury text-4xl md:text-5xl font-light text-warm-white mb-4 tracking-wide">
                <span className="luxury-text-gradient">Let's Create Together</span>
              </h3>
              <p className="font-elegant text-lg text-platinum/80 italic max-w-2xl mx-auto leading-relaxed">
                Ready to bring your vision to life? Let's craft something extraordinary together.
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`w-14 h-14 bg-gradient-to-br ${social.color} rounded-2xl flex items-center justify-center text-white shadow-luxury hover:shadow-luxury-hover transition-all duration-300 group relative overflow-hidden`}
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-luxury opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </motion.a>
            ))}
          </div>
          
          {/* Decorative Divider */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "200px", opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="h-px bg-gradient-luxury mx-auto"
          />
          
          {/* Copyright Section */}
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="font-sans text-platinum/90 text-lg">
                © 2025 Crafted & Curated by{' '}
                <span className="luxury-text-gradient font-semibold tracking-widest font-luxury text-xl">
                  P I Y U $ H
                </span>
              </p>
              
              <motion.div 
                className="font-sans text-platinum/70 flex items-center justify-center space-x-3 text-base"
                whileHover={{ scale: 1.05 }}
              >
                <span>Designed with</span>
                <Heart className="w-5 h-5 text-rose-gold animate-luxury-pulse" />
                <span>and lots of</span>
                <Coffee className="w-5 h-5 text-luxury-gold animate-luxury-bounce" />
                <span>& luxury</span>
                <Crown className="w-5 h-5 text-luxury-gold animate-luxury-glow" />
              </motion.div>
            </div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="pt-6 border-t border-luxury-gold/20"
            >
              <div className="space-y-4">
                <p className="font-sans text-sm text-platinum/60 tracking-wider uppercase">
                  Built with Premium Technologies
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  {['React', 'Tailwind CSS', 'Framer Motion', 'Luxury Design'].map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-4 py-2 bg-gradient-to-r from-luxury-gold/20 to-rose-gold/20 rounded-full text-xs font-medium text-platinum/80 border border-luxury-gold/30 backdrop-blur-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Final Luxury Touch */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex justify-center space-x-3 pt-4"
            >
              <Star className="w-4 h-4 text-luxury-gold animate-luxury-pulse" />
              <Sparkles className="w-5 h-5 text-rose-gold animate-luxury-bounce" />
              <Star className="w-4 h-4 text-luxury-gold animate-luxury-pulse" style={{ animationDelay: '1s' }} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;