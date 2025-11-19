import { motion } from 'framer-motion';
import { Search, Menu, X, Building2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ onSearchToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    // { name: 'Companies', path: '/#companies' },
    { name: 'Industries', path: '/industries' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const handleCompaniesClick = (e) => {
    if (location.pathname !== '/') {
      e.preventDefault();
      window.location.href = '/#companies';
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? '/95 backdrop-blur-xl border-b border-cyan-500/20' 
          : '/80 backdrop-blur-lg'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Building2 className="text-white" size={24} />
                </div>
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur opacity-30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {/* CompanyHub */}
                FPNA CLONE
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name === 'Companies' ? (
                  <a
                    href={item.path}
                    onClick={handleCompaniesClick}
                    className={`text-cyan-100 hover:text-cyan-300 transition-colors font-medium ${
                      location.pathname === '/' && window.location.hash === '#companies' 
                        ? 'text-cyan-400' 
                        : ''
                    }`}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-cyan-100 hover:text-cyan-300 transition-colors font-medium ${
                      location.pathname === item.path ? 'text-cyan-400' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          {/* Search & Menu */}
           {/* Search & Menu */}
          <div className="flex md:hidden items-center gap-4">
           

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className=" p-2 rounded-lg bg-slate-800/50 text-blue-500 border border-cyan-500/30 hover:bg-cyan-500/20 transition-all"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden bg-slate-900/95 backdrop-blur-lg border-t border-cyan-500/20"
        >
          <div className="py-4">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-cyan-500/10 last:border-b-0"
              >
                {item.name === 'Companies' ? (
                  <a
                    href={item.path}
                    onClick={(e) => {
                      handleCompaniesClick(e);
                      handleNavClick();
                    }}
                    className="block py-3 text-cyan-100 hover:text-cyan-300 transition-colors font-medium"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    onClick={handleNavClick}
                    className="block py-3 text-cyan-100 hover:text-cyan-300 transition-colors font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;