import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Home, User, Code, Award, Briefcase, Mail, Download, Crown, Sparkles } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Certifications', href: '#certifications', icon: Award },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Piyush_Soni_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'luxury-glassmorphism shadow-luxury' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Luxury Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <div className="relative">
                <Crown className="w-8 h-8 text-luxury-gold" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-1 -right-1"
                >
                  <Sparkles className="w-4 h-4 text-rose-gold opacity-70" />
                </motion.div>
              </div>
              <div className="font-luxury text-2xl font-light tracking-wider">
                <span className="luxury-text-gradient">P I Y U $ H</span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="font-sans text-charcoal hover:text-luxury-gold transition-all duration-300 flex items-center space-x-2 group elegant-underline"
                >
                  <item.icon className="w-4 h-4 group-hover:text-luxury-gold transition-colors group-hover:scale-110" />
                  <span className="font-medium tracking-wide">{item.name}</span>
                </motion.button>
              ))}
              
              {/* Luxury Resume Button */}
              <motion.button
                onClick={handleResumeDownload}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="luxury-button text-warm-white px-6 py-3 rounded-full font-sans font-medium text-sm tracking-wide flex items-center space-x-2 group"
              >
                <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Resume</span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden luxury-button p-3 rounded-full text-warm-white"
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          x: isOpen ? '0%' : '100%' 
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`fixed top-0 right-0 h-full w-80 luxury-glassmorphism z-40 md:hidden ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div className="pt-24 px-6">
          <div className="space-y-6">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, x: 50 }}
                animate={{ 
                  opacity: isOpen ? 1 : 0, 
                  x: isOpen ? 0 : 50 
                }}
                transition={{ 
                  duration: 0.4, 
                  delay: isOpen ? index * 0.1 : 0,
                  ease: "easeOut" 
                }}
                onClick={() => scrollToSection(item.href)}
                className="w-full text-left font-sans text-lg text-charcoal hover:text-luxury-gold transition-colors duration-300 flex items-center space-x-4 p-4 rounded-2xl hover:bg-white/10 group"
              >
                <item.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="font-medium tracking-wide">{item.name}</span>
              </motion.button>
            ))}
            
            {/* Mobile Resume Button */}
            <motion.button
              initial={{ opacity: 0, x: 50 }}
              animate={{ 
                opacity: isOpen ? 1 : 0, 
                x: isOpen ? 0 : 50 
              }}
              transition={{ 
                duration: 0.4, 
                delay: isOpen ? navItems.length * 0.1 : 0,
                ease: "easeOut" 
              }}
              onClick={handleResumeDownload}
              className="w-full luxury-button text-warm-white p-4 rounded-2xl font-sans font-medium flex items-center justify-center space-x-3 mt-8 group"
            >
              <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="tracking-wide">Download Resume</span>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-luxury-black/30 backdrop-blur-sm z-30 md:hidden"
        />
      )}
    </>
  );
};

export default Navigation;