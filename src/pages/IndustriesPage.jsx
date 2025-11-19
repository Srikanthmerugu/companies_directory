import { motion } from 'framer-motion';
import { Building2, Users, TrendingUp, Star, ArrowRight } from 'lucide-react';
import BackgroundAnimation from '../components/BackgroundAnimation';
import Navbar from '../components/layouts/Navbar';

const IndustriesPage = () => {
  const industries = [
    {
      name: 'Technology',
      count: 156,
      growth: '+15%',
      icon: '💻',
      description: 'Software, AI, Cloud Computing, and IT Services',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Healthcare',
      count: 89,
      growth: '+12%',
      icon: '🏥',
      description: 'Medical Services, Pharmaceuticals, Health Tech',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Finance',
      count: 67,
      growth: '+18%',
      icon: '💰',
      description: 'Banking, FinTech, Investment, Insurance',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Education',
      count: 45,
      growth: '+8%',
      icon: '🎓',
      description: 'EdTech, Online Learning, Educational Services',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Energy',
      count: 34,
      growth: '+22%',
      icon: '⚡',
      description: 'Renewable Energy, Oil & Gas, Utilities',
      color: 'from-yellow-500 to-amber-500'
    },
    {
      name: 'Retail',
      count: 78,
      growth: '+10%',
      icon: '🛍️',
      description: 'E-commerce, Brick & Mortar, Consumer Goods',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Manufacturing',
      count: 56,
      growth: '+7%',
      icon: '🏭',
      description: 'Industrial Production, Automotive, Electronics',
      color: 'from-gray-500 to-slate-600'
    },
    {
      name: 'Media & Entertainment',
      count: 42,
      growth: '+14%',
      icon: '🎬',
      description: 'Content Creation, Streaming, Gaming, News',
      color: 'from-fuchsia-500 to-purple-500'
    }
  ];

  const stats = [
    { icon: Building2, value: '500+', label: 'Companies' },
    { icon: Users, value: '20+', label: 'Industries' },
    { icon: TrendingUp, value: '15%', label: 'Avg Growth' },
    { icon: Star, value: '4.8', label: 'Avg Rating' },
  ];

  return (
    <div className="min-h-screen pt-16">
       <div className="min-h-screen text-white relative overflow-x-hidden">
      <BackgroundAnimation />
      <Navbar />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-cyan-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Industries
              </span>
            </h1>
            <p className="text-xl text-cyan-200 max-w-2xl mx-auto mb-12">
              Explore companies across diverse industries. Find your perfect match in technology, 
              healthcare, finance, and more.
            </p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-cyan-200 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card p-6 cursor-pointer group"
              >
                {/* Industry Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                  {industry.icon}
                </div>

                {/* Industry Info */}
                <h3 className="text-xl font-bold text-white mb-2">{industry.name}</h3>
                <p className="text-cyan-200 text-sm mb-4">{industry.description}</p>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-cyan-300">{industry.count} companies</span>
                  <span className="text-green-400 font-semibold">{industry.growth}</span>
                </div>

                {/* View Button */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-cyan-400 mt-4 text-sm font-semibold group-hover:text-cyan-300 transition-colors"
                >
                  View Companies
                  <ArrowRight size={16} />
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default IndustriesPage;