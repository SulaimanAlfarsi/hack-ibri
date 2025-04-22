import { motion } from "framer-motion";
import { GiPlantSeed } from "react-icons/gi";

const SpringPlantingCard = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="p-8 flex flex-col md:flex-row items-center gap-10">
          {/* Icon with animation */}
          <motion.div
            animate={{ rotate: [-5, 5, -5] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="bg-emerald-500 p-4 rounded-xl"
          >
            <GiPlantSeed className="text-white text-4xl" />
          </motion.div>

          {/* Content */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-emerald-800">
              Spring Planting Tips
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Get your garden ready for the spring season with our expert tips on soil preparation, 
              seed selection, and planting schedules.
            </p>
            
            {/* Animated button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-emerald-700 transition-colors"
            >
              <span>Read More</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M13 7l5 5m0 0l-5 5m5-5H6" 
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SpringPlantingCard;