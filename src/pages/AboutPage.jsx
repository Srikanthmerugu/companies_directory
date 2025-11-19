import { motion } from 'framer-motion';
import { Target, Users, Globe, Award, Heart } from 'lucide-react';
import BackgroundAnimation from '../components/BackgroundAnimation';
import Navbar from '../components/layouts/Navbar';

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'Connecting talented professionals with amazing companies worldwide.',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Users,
      title: 'Our Community',
      description: 'Building a network of innovative companies and skilled professionals.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving companies and job seekers across multiple countries and industries.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to providing the best platform for career growth and hiring.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
      description: 'Passionate about connecting talent with opportunity.'
    },
    {
      name: 'Mike Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      description: 'Tech enthusiast building the future of recruitment.'
    },
    {
      name: 'Emily Davis',
      role: 'Head of Growth',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      description: 'Driving partnerships and community engagement.'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
       <BackgroundAnimation />
      <Navbar />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-cyan-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  About Us
                </span>
              </h1>
              <p className="text-xl text-cyan-200 mb-8 leading-relaxed">
                We're on a mission to transform how companies and talent connect. Our platform 
                brings together innovative businesses and skilled professionals in a seamless, 
                intuitive way.
              </p>
              <div className="flex items-center gap-2 text-cyan-300">
                <Heart size={20} className="text-pink-400" />
                <span>Building the future of work, one connection at a time</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">Our Story</h3>
                <p className="text-cyan-200 mb-6">
                  Founded in 2020, we recognized the need for a better way to connect companies 
                  with top talent. Today, we serve thousands of companies and professionals 
                  across the globe.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-cyan-400">50K+</div>
                    <div className="text-cyan-200 text-sm">Users</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400">500+</div>
                    <div className="text-cyan-200 text-sm">Companies</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400">20+</div>
                    <div className="text-cyan-200 text-sm">Countries</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 b">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Our Values
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <value.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-cyan-200">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Meet Our Team
              </span>
            </h2>
            <p className="text-xl text-cyan-200 max-w-2xl mx-auto">
              Passionate individuals dedicated to making your career and hiring journey exceptional.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-cyan-500/30"
                />
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <div className="text-cyan-400 font-semibold mb-3">{member.role}</div>
                <p className="text-cyan-200 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;