import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  const cards = [1, 2, 3];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-cyan-900">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h2
            className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-12"
            animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{ backgroundSize: '200% auto' }}
          >
            Loading Your companies...
          </motion.h2>

          {/* Animated Cards */}
          <div className="flex gap-6 justify-center">
            {cards.map((card, index) => (
              <motion.div
                key={card}
                className="w-24 h-32 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-cyan-500/20"
                initial={{ y: 0 }}
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                  ease: "easeInOut"
                }}
              >
                {/* Card Shimmer */}
                <motion.div
                  className="h-full bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent"
                  animate={{ x: [-100, 100] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Loading Message */}
          <motion.div
            className="mt-12"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {/* <p className="text-cyan-200 text-lg mb-4">Discovering amazing ...</p> */}
            
            {/* Animated Plane */}
            <motion.div
              className="flex justify-center"
              animate={{ x: [-50, 50, -50] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center">
                <motion.div
                  className="w-4 h-4 bg-white rounded-full"
                  animate={{ scale: [1, 0.8, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingSpinner;