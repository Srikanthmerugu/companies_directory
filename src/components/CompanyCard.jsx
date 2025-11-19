import { motion } from 'framer-motion';
import { Star, MapPin, Users, Calendar, ExternalLink, Phone, Mail, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const CompanyCard = ({ companies, itemsPerPage = 6, loading = false }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setTotalPages(Math.ceil(companies.length / itemsPerPage));
    setCurrentPage(1); // Reset to first page when companies change
  }, [companies, itemsPerPage]);

  // Get current companies for the page
  const currentCompanies = companies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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

  // Pagination functions
  const goToPage = (page) => {
    setCurrentPage(page);
    // Scroll to top of the section
    document.getElementById('companies-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      document.getElementById('companies-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      document.getElementById('companies-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Generate page numbers with ellipsis
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  return (
    <div id="companies-section">
      {/* Companies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:px-3 lg:grid-cols-3 gap-6 mb-8">
        {currentCompanies.map((company, index) => (
          <motion.div
            key={company.id}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="glass-card bg-violet-900 overflow-hidden group shadow-2xl cursor-pointer rounded-xl"
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
                className="absolute top-4 right-4 animate-bounce"
              >
                <span className='px-3 py-1 bg-purple-500 rounded-full text-xs font-semibold backdrop-blur-sm'>
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
              <div className="grid grid-cols-3 gap-2 mb-4">
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
        ))}
      </div>

      {/* Loading animation for cards */}
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center items-center py-8"
        >
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="w-4 h-4 bg-cyan-400 rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
              className="w-4 h-4 bg-purple-400 rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
              className="w-4 h-4 bg-blue-400 rounded-full"
            />
            <span className="text-cyan-300 text-sm ml-2">Loading companies...</span>
          </div>
        </motion.div>
      )}

      {/* Pagination Component */}
      {totalPages > 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt- border-t border-cyan-500/20"
        >
          {/* Pagination Controls */}
          <div className="flex items-center gap-2">
            {/* Previous Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={goToPrevPage}
              disabled={currentPage === 1}
              className={`p-2 rounded-lg border transition-all ${
                currentPage === 1
                  ? 'border-cyan-500/20 text-cyan-500/40 cursor-not-allowed'
                  : 'border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400'
              }`}
            >
              <ChevronLeft size={20} />
            </motion.button>

            {/* Page Numbers */}
            <div className="flex items-center gap-1">
              {getPageNumbers().map((page, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: page !== '...' ? 1.1 : 1 }}
                  whileTap={{ scale: page !== '...' ? 0.9 : 1 }}
                  onClick={() => page !== '...' && goToPage(page)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    page === currentPage
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
                      : page === '...'
                      ? 'text-cyan-300 cursor-default'
                      : 'text-cyan-300 hover:bg-cyan-500/20 hover:text-white border border-cyan-500/20'
                  }`}
                  disabled={page === '...'}
                >
                  {page}
                </motion.button>
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-lg border transition-all ${
                currentPage === totalPages
                  ? 'border-cyan-500/20 text-cyan-500/40 cursor-not-allowed'
                  : 'border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400'
              }`}
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default CompanyCard;