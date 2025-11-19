import { motion } from 'framer-motion';
import { Search, Filter, X } from 'lucide-react';

const FilterSection = ({ filters, updateFilters, clearFilters, getUniqueValues }) => {
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
        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={clearFilters}
          className="flex items-center gap-2 px-4 py-2 text-sm text-cyan-300 hover:text-cyan-200 transition-colors"
        >
          <X size={16} />
          Clear Filters
        </motion.button>
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
          </div>
        </motion.div>

        {/* Industry Filter */}
        <motion.div variants={itemVariants}>
          <label className="block text-sm font-medium text-cyan-200 mb-2">
            Industry
          </label>
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
        </motion.div>

        {/* Company Type Filter */}
        <motion.div variants={itemVariants}>
          <label className="block text-sm font-medium text-cyan-200 mb-2">
            Company Type
          </label>
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
        </motion.div>

        {/* Sort By */}
        <motion.div variants={itemVariants}>
          <label className="block text-sm font-medium text-cyan-200 mb-2">
            Sort By
          </label>
          <select
            value={filters.sortBy}
            onChange={(e) => updateFilters({ sortBy: e.target.value })}
            className="w-full px-4 py-3 cursor-pointer bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm"
          >
            <option className='bg-slate-800 ' value="name">Name</option>
            <option className='bg-slate-800 ' value="rating">Rating</option>
            <option className='bg-slate-800 ' value="founded">Founded Year</option>
          </select>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FilterSection;