import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Eye, Filter, Star, Sparkles } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Frontend', 'Full Stack', 'Mobile'];
  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <section className="py-20 bg-cream px-6 relative overflow-hidden" ref={ref}>
      {/* Floating background elements */}
      <motion.div
        animate={{ 
          y: [-20, 20, -20],
          x: [-10, 10, -10],
          rotate: [0, 5, -5, 0],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-luxury opacity-10 rounded-full blur-2xl"
      />
      <motion.div
        animate={{ 
          y: [25, -25, 25],
          x: [15, -15, 15],
          rotate: [0, -8, 8, 0],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
        className="absolute bottom-32 right-16 w-40 h-40 bg-gradient-luxury-dark opacity-10 rounded-full blur-3xl"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-6 luxury-text"
            whileHover={{ scale: 1.02 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="font-sans text-lg text-gray-600 max-w-2xl mx-auto mb-8 luxury-text"
            whileHover={{ scale: 1.01 }}
          >
            A showcase of recent work demonstrating technical expertise and creative problem-solving
          </motion.p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                whileHover={{ 
                  scale: 1.08, 
                  y: -2,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-sans font-medium text-sm transition-all duration-300 flex items-center space-x-2 relative overflow-hidden group ${
                  filter === category
                    ? 'bg-gradient-rose-blush text-white shadow-lg luxury-shadow'
                    : 'bg-white/50 text-gray-700 hover:bg-white/80 luxury-glassmorphism'
                }`}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Filter className="w-4 h-4" />
                </motion.div>
                <span>{category}</span>
                
                {/* Shimmer effect */}
                <motion.div
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.03,
                y: -8,
                rotateY: 2,
                transition: { duration: 0.4 }
              }}
              className={`project-card luxury-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer ${
                project.featured ? 'ring-2 ring-rose-gold/30' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110"
                  whileHover={{ scale: 1.15 }}
                />
                
                {project.featured && (
                  <motion.div 
                    className="absolute top-4 left-4 bg-gradient-rose-blush text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Star className="w-3 h-3" />
                    <span>Featured</span>
                  </motion.div>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 5,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 group/btn"
                    >
                      <Eye className="w-5 h-5 text-white group-hover/btn:scale-110 transition-transform" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: -5,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 group/btn"
                    >
                      <Github className="w-5 h-5 text-white group-hover/btn:scale-110 transition-transform" />
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 5,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 group/btn"
                    >
                      <ExternalLink className="w-5 h-5 text-white group-hover/btn:scale-110 transition-transform" />
                    </motion.a>
                  </div>
                </div>

                {/* Sparkle effect on hover */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute top-2 right-2"
                >
                  <Sparkles className="w-6 h-6 text-luxury-gold animate-luxury-pulse" />
                </motion.div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <motion.h3 
                    className="font-serif text-xl font-semibold text-gray-800 luxury-text"
                    whileHover={{ scale: 1.02 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.span 
                    className="px-2 py-1 bg-gradient-rose-champagne rounded-full text-xs font-medium text-gray-700"
                    whileHover={{ scale: 1.1, rotate: 2 }}
                  >
                    {project.category}
                  </motion.span>
                </div>
                
                <motion.p 
                  className="font-sans text-gray-600 text-sm leading-relaxed mb-4 luxury-text"
                  whileHover={{ scale: 1.01 }}
                >
                  {project.description}
                </motion.p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span 
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
                      whileHover={{ 
                        scale: 1.1, 
                        y: -2,
                        transition: { duration: 0.2 }
                      }}
                      className="px-3 py-1 bg-white/50 rounded-full text-xs font-medium text-gray-700 hover:bg-white/80 transition-all duration-300 cursor-pointer"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Card hover glow effect */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-luxury-gold/5 to-rose-gold/5 rounded-3xl pointer-events-none"
              />
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <motion.p 
              className="font-sans text-lg text-gray-600 luxury-text"
              whileHover={{ scale: 1.02 }}
            >
              No projects found in this category.
            </motion.p>
          </motion.div>
        )}

        {/* Decorative elements */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 right-1/4 w-8 h-8 text-luxury-gold opacity-30 floating-element"
        >
          <Sparkles className="w-full h-full" />
        </motion.div>
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            delay: 5
          }}
          className="absolute bottom-1/4 left-1/4 w-6 h-6 text-rose-gold opacity-40 floating-element"
        >
          <Star className="w-full h-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;