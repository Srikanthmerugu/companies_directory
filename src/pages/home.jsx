import { motion, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import { useCompanies } from '../hooks/useCompanies';
import BackgroundAnimation from '../components/BackgroundAnimation';
import Navbar from '../components/layouts/Navbar';
import Hero from '../components/Hero';
import FilterSection from '../components/FilterSection';
import CompanyCard from '../components/CompanyCard';
import Footer from '../components/layouts/Footer';
import LoadingSpinner from '../components/LoadingSpinner';
import '../App.css';

function Home() {
  const { companies, filters, updateFilters, clearFilters, getUniqueValues, loading } = useCompanies();
  const filterSectionRef = useRef(null);

  const handleSearchFocus = () => {
    setTimeout(() => {
      filterSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen text-white relative overflow-x-hidden">
      <BackgroundAnimation />
      {/* <Navbar onSearchToggle={handleSearchFocus} /> */}
      
      <main>
        <Hero onSearchFocus={handleSearchFocus} />
        
        {/* Companies Section */}
        <section id="companies" className="relative py-10 md:py-20">
          <div className="container mx-auto px-2 md:px-4">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-5 md:mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-2 md:mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Featured Companies
                </span>
              </h2>
              <p className="text-xl text-cyan-200 max-w-2xl mx-auto">
                Discover innovative companies across various industries. Filter by your preferences to find the perfect match.
              </p>
            </motion.div>

            {/* Filter Section */}
            <div ref={filterSectionRef}>
              <FilterSection
                filters={filters}
                updateFilters={updateFilters}
                clearFilters={clearFilters}
                getUniqueValues={getUniqueValues}
              />
            </div>

            {/* Companies Grid with Pagination */}
            <AnimatePresence mode="wait">
              {companies.length > 0 ? (
                <CompanyCard 
                  companies={companies} 
                  itemsPerPage={9}
                />
              ) : (
                <motion.div
                  key="no-results"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="text-center py-16"
                >
                  <div className="text-cyan-200 text-lg mb-4">
                    No companies found matching your criteria
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={clearFilters}
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                  >
                    Clear Filters & Show All
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default Home;