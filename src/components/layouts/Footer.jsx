import { motion } from 'framer-motion';
import { Building2, Mail, MapPin, Phone, Twitter, Facebook, Instagram, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="relative bg-slate-900/80 backdrop-blur-xl border-t border-cyan-500/20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-cyan-900/20"></div>
        <motion.div
          className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-cyan-500/10 to-transparent"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Building2 className="text-white" size={28} />
                </div>
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur opacity-30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                CompanyHub
              </span>
            </div>
            <p className="text-cyan-200 mb-6 max-w-md leading-relaxed">
              Discover the world's most innovative companies. Connect with opportunities, 
              explore industries, and find your perfect business partnership.
            </p>
            <div className="flex items-center gap-4">
              {[Twitter, Facebook, Instagram, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  variants={itemVariants}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-slate-800/50 rounded-lg border border-cyan-500/20 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all group"
                >
                  <Icon size={20} className="text-cyan-400 group-hover:text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold mb-6 text-lg">Quick Links</h3>
            <div className="space-y-3">
              {['Browse Companies', 'Top Industries', 'Featured Startups', 'Career Opportunities', 'About Us'].map((link, index) => (
                <motion.a
                  key={link}
                  href="#"
                  variants={itemVariants}
                  whileHover={{ x: 5, color: "#22d3ee" }}
                  className="block text-cyan-200 hover:text-cyan-300 transition-colors"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold mb-6 text-lg">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-cyan-500/20 rounded-lg">
                  <MapPin size={16} className="text-cyan-400" />
                </div>
                <span className="text-cyan-200 text-sm">123 Business District, San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <Mail size={16} className="text-purple-400" />
                </div>
                <span className="text-cyan-200 text-sm">hello@companyhub.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Phone size={16} className="text-blue-400" />
                </div>
                <span className="text-cyan-200 text-sm">+1 (555) 123-4567</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="pt-8 border-t border-cyan-500/20 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-cyan-200 text-sm flex items-center gap-2">
            <span>© {currentYear} CompanyHub. Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart size={16} className="text-pink-400 fill-pink-400" />
            </motion.div>
            <span>for the business community</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
              <motion.a
                key={item}
                href="#"
                variants={itemVariants}
                whileHover={{ color: "#22d3ee" }}
                className="text-cyan-200 hover:text-cyan-300 transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-10 right-10 w-4 h-4 bg-cyan-400 rounded-full opacity-20"
        animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-6 h-6 bg-purple-400 rounded-full opacity-30"
        animate={{ y: [0, 15, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />
    </footer>
  );
};

export default Footer;