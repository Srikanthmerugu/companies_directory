import { motion } from 'framer-motion';
import { Search, Filter, X } from 'lucide-react';

const FilterSection = ({ filters, updateFilters, clearFilters, getUniqueValues, loading = false }) => {
  const industries = getUniqueValues('industry');
  const companyTypes = getUniqueValues('companyType');
  const cities = getUniqueValues('city');

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="glass-card p-6 mb-8"
    >
      <div className="flex items-center justify-between mb-6">
        <motion.h2 
          variants={itemVariants}
          className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
        >
          Find Your Perfect Company
        </motion.h2>
      
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Search Input */}
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <label className="block text-sm font-medium text-cyan-200 mb-2">
            Search Companies
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400" size={20} />
            <input
              type="text"
              value={filters.search}
              onChange={(e) => updateFilters({ search: e.target.value })}
              placeholder="Search by name, industry..."
              className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-cyan-200/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm"
            />
            {/* Loading animation for search */}
            {loading && (
              <motion.div
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-5 h-5 border-2 border-cyan-400 border-t-transparent rounded-full"></div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Industry Filter */}
        <motion.div variants={itemVariants}>
          <label className="block text-sm font-medium text-cyan-200 mb-2">
            Industry
          </label>
          <div className="relative">
            <select
              value={filters.industry}
              onChange={(e) => updateFilters({ industry: e.target.value })}
              className="w-full px-4 py-3 bg-slate-800/50 border cursor-pointer border-cyan-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm"
            >
              <option className='bg-slate-800 border cursor-pointer'  value="">All Industries</option>
              {industries.map(industry => (
                <option className='bg-slate-800 border cursor-pointer' key={industry} value={industry}>{industry}</option>
              ))}
            </select>
            {/* Loading animation for industry filter */}
            {loading && (
              <motion.div
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-4 h-4 border-2 border-purple-400 border-t-transparent rounded-full"></div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Company Type Filter */}
        <motion.div variants={itemVariants}>
          <label className="block text-sm font-medium text-cyan-200 mb-2">
            Company Type
          </label>
          <div className="relative">
            <select
              value={filters.companyType}
              onChange={(e) => updateFilters({ companyType: e.target.value })}
              className="w-full px-4 py-3 bg-slate-800/50 cursor-pointer border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm"
            >
              <option className='bg-slate-800 border' value="">All Types</option>
              {companyTypes.map(type => (
                <option className='bg-slate-800 border' key={type} value={type}>{type}</option>
              ))}
            </select>
            {/* Loading animation for company type filter */}
            {loading && (
              <motion.div
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full"></div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Sort By */}
        <motion.div variants={itemVariants}>
          <label className="block text-sm font-medium text-cyan-200 mb-2">
            Sort By
          </label>
          <div className="relative">
            <select
              value={filters.sortBy}
              onChange={(e) => updateFilters({ sortBy: e.target.value })}
              className="w-full px-4 py-3 cursor-pointer bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm"
            >
              <option className='bg-slate-800 ' value="name">Name</option>
              <option className='bg-slate-800 ' value="rating">Rating</option>
              <option className='bg-slate-800 ' value="founded">Founded Year</option>
            </select>
            {/* Loading animation for sort filter */}
            {loading && (
              <motion.div
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-4 h-4 border-2 border-green-400 border-t-transparent rounded-full"></div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Global Loading Indicator */}
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center justify-center gap-2 mt-4"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
          >
            <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
          >
            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
          </motion.div>
          <span className="text-cyan-300 text-sm ml-2">Filtering companies...</span>
        </motion.div>
      )}
    </motion.div>
  );
};

export default FilterSection;