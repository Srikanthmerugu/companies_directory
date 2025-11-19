import { motion } from 'framer-motion';
import { Star, MapPin, Users, Calendar, ExternalLink, Phone, Mail } from 'lucide-react';

const CompanyCard = ({ company, index }) => {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.1
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}
      />
    ));
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="glass-card overflow-hidden group shadow-2xl cursor-pointer"
    >
      {/* Cover Image */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          src={company.coverImage}
          alt={company.companyName}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
        
        {/* Company Type Badge */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute top-4 right-4"
        >
          <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
            company.companyType === 'Startup' ? 'bg-green-500/20 text-green-300' :
            company.companyType === 'Private' ? 'bg-blue-500/20 text-blue-300' :
            'bg-purple-500/20 text-purple-300'
          }`}>
            {company.companyType}
          </span>
        </motion.div>

       
      </div>

      {/* Content */}
      <div className="p-3">
        <motion.h3 
          className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors"
          layoutId={`company-name-${company.id}`}
        >
          {company.companyName}
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-cyan-200 mb-4 line-clamp-2"
        >
          {company.description}
        </motion.p>

        {/* Industry Tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="inline-block px-3 py-1 bg-cyan-500/20 rounded-full mb-4"
        >
          <span className="text-cyan-300 text-sm font-medium">{company.industry}</span>
        </motion.div>

        {/* Details Grid */}
        <div className="grid grid-cols-3 gap-2 items-center mb-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-2 text-sm text-cyan-200"
          >
            <MapPin size={16} className="text-cyan-400" />
            <span>{company.city}</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-2 text-sm text-cyan-200"
          >
            <Users size={16} className="text-cyan-400" />
            <span>{company.employeesCount}</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-2 text-sm text-cyan-200"
          >
            <Calendar size={16} className="text-cyan-400" />
            <span>Founded {company.foundedYear}</span>
          </motion.div>
        </div>

        {/* Contact Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex items-center justify-between pt-4 border-t border-cyan-500/20"
        >
          <div className="flex items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={`mailto:${company.email}`}
              className="p-2 bg-slate-700/50 rounded-lg hover:bg-cyan-500/20 transition-colors"
            >
              <Mail size={16} className="text-cyan-400" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={`tel:${company.phone}`}
              className="p-2 bg-slate-700/50 rounded-lg hover:bg-cyan-500/20 transition-colors"
            >
              <Phone size={16} className="text-cyan-400" />
            </motion.a>
          </div>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={company.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg text-white text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
          >
            Visit Site
            <ExternalLink size={16} />
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CompanyCard;