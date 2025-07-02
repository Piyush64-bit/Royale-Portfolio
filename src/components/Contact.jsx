import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MessageCircle, Phone, Send, MapPin, Clock, Sparkles, Heart } from 'lucide-react';
import { contactData } from '../data/portfolioData';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${contactData.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-20 bg-white px-6 relative overflow-hidden" ref={ref}>
      {/* Floating background elements */}
      <motion.div
        animate={{ 
          y: [-12, 12, -12],
          x: [-6, 6, -6],
          rotate: [0, 4, -4, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-16 w-28 h-28 bg-gradient-luxury opacity-10 rounded-full blur-xl"
      />
      <motion.div
        animate={{ 
          y: [18, -18, 18],
          x: [10, -10, 10],
          rotate: [0, -6, 6, 0],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-24 right-20 w-36 h-36 bg-gradient-luxury-dark opacity-10 rounded-full blur-2xl"
      />

      <div className="max-w-4xl mx-auto relative z-10">
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
                <Heart className="w-8 h-8 text-luxury-gold" />
              </motion.div>
              <div className="w-16 h-px bg-gradient-luxury"></div>
            </div>
          </motion.div>

          <motion.h2 
            className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-6 luxury-text"
            whileHover={{ scale: 1.02 }}
          >
            Let's Create Something Amazing
          </motion.h2>
          <motion.p 
            className="font-sans text-lg text-gray-600 max-w-2xl mx-auto luxury-text"
            whileHover={{ scale: 1.01 }}
          >
            Ready to bring your digital vision to life? Let's discuss your next project and create something extraordinary together.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -3 }}
              className="luxury-card rounded-2xl p-6 shadow-luxury"
            >
              <motion.h3 
                className="font-serif text-2xl font-semibold text-gray-800 mb-6 luxury-text"
                whileHover={{ scale: 1.02 }}
              >
                Get In Touch
              </motion.h3>
              
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center space-x-4 group"
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-gradient-rose-blush rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300"
                    whileHover={{ rotate: 10 }}
                  >
                    <Mail className="w-5 h-5 text-white" />
                  </motion.div>
                  <div>
                    <p className="font-sans font-medium text-gray-800 luxury-text">Email</p>
                    <motion.p 
                      className="font-sans text-sm text-gray-600 luxury-text"
                      whileHover={{ scale: 1.02 }}
                    >
                      {contactData.email}
                    </motion.p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-4 group"
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-gradient-rose-champagne rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300"
                    whileHover={{ rotate: -10 }}
                  >
                    <Phone className="w-5 h-5 text-white" />
                  </motion.div>
                  <div>
                    <p className="font-sans font-medium text-gray-800 luxury-text">Phone</p>
                    <motion.p 
                      className="font-sans text-sm text-gray-600 luxury-text"
                      whileHover={{ scale: 1.02 }}
                    >
                      {contactData.phone}
                    </motion.p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-4 group"
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-blush-pink to-champagne-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300"
                    whileHover={{ rotate: 15 }}
                  >
                    <MapPin className="w-5 h-5 text-white" />
                  </motion.div>
                  <div>
                    <p className="font-sans font-medium text-gray-800 luxury-text">Location</p>
                    <motion.p 
                      className="font-sans text-sm text-gray-600 luxury-text"
                      whileHover={{ scale: 1.02 }}
                    >
                      {contactData.location}
                    </motion.p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center space-x-4 group"
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-champagne-gold to-rose-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300"
                    whileHover={{ rotate: -15 }}
                  >
                    <Clock className="w-5 h-5 text-white" />
                  </motion.div>
                  <div>
                    <p className="font-sans font-medium text-gray-800 luxury-text">Response Time</p>
                    <motion.p 
                      className="font-sans text-sm text-gray-600 luxury-text"
                      whileHover={{ scale: 1.02 }}
                    >
                      {contactData.responseTime}
                    </motion.p>
                  </div>
                </motion.div>
              </div>

              <motion.div 
                className="mt-6 p-4 bg-gradient-rose-champagne rounded-xl relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <motion.p 
                  className="font-sans text-sm text-gray-700 text-center luxury-text"
                  whileHover={{ scale: 1.01 }}
                >
                  {contactData.availability}
                </motion.p>
                
                {/* Sparkle effect */}
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-2 right-2"
                >
                  <Sparkles className="w-4 h-4 text-luxury-gold" />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.01, y: -2 }}
              className="luxury-card rounded-2xl p-6 shadow-luxury"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div whileHover={{ scale: 1.01 }}>
                  <label className="block font-sans text-sm font-medium text-gray-700 mb-2 luxury-text">
                    Name *
                  </label>
                  <motion.input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-gold/20 focus:border-rose-gold transition-all duration-300 font-sans hover:border-rose-gold/50"
                    placeholder="Your name"
                  />
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.01 }}>
                  <label className="block font-sans text-sm font-medium text-gray-700 mb-2 luxury-text">
                    Email *
                  </label>
                  <motion.input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-gold/20 focus:border-rose-gold transition-all duration-300 font-sans hover:border-rose-gold/50"
                    placeholder="your@email.com"
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.01 }}>
                  <label className="block font-sans text-sm font-medium text-gray-700 mb-2 luxury-text">
                    Subject
                  </label>
                  <motion.input 
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-gold/20 focus:border-rose-gold transition-all duration-300 font-sans hover:border-rose-gold/50"
                    placeholder="Project inquiry, collaboration, etc."
                  />
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.01 }}>
                  <label className="block font-sans text-sm font-medium text-gray-700 mb-2 luxury-text">
                    Message *
                  </label>
                  <motion.textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-gold/20 focus:border-rose-gold transition-all duration-300 font-sans resize-none hover:border-rose-gold/50"
                    placeholder="Tell me about your project, ideas, or how we can work together..."
                  ></motion.textarea>
                </motion.div>
                
                <motion.button 
                  type="submit"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-rose-blush text-white py-3 px-6 rounded-xl font-sans font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group relative overflow-hidden"
                >
                  <span>Send Message</span>
                  <motion.div
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Send className="w-4 h-4" />
                  </motion.div>
                  
                  {/* Button shimmer effect */}
                  <motion.div
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  />
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating decorative elements */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 right-1/6 w-5 h-5 text-luxury-gold opacity-30 floating-element"
        >
          <MessageCircle className="w-full h-full" />
        </motion.div>
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            delay: 4
          }}
          className="absolute bottom-1/4 left-1/6 w-4 h-4 text-rose-gold opacity-40 floating-element"
        >
          <Heart className="w-full h-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;