import { motion } from "framer-motion";
import { FaArrowRight, FaSeedling } from "react-icons/fa";
import farmerImage from '../assets/farmer.jpg'; 

const Hero = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative bg-gradient-to-br from-green-50 to-green-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-4 bg-green-100 px-4 py-2 rounded-full"
              variants={variants}
            >
              <FaSeedling className="text-green-600" />
              <span className="text-sm font-medium text-green-800">
                Sustainable Farming Solutions
              </span>
            </motion.div>

            <motion.h1
              variants={variants}
              className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Transform Your Farming with 
              <span className="text-green-600"> AI-Powered</span> Insights
            </motion.h1>

            <motion.p
              variants={variants}
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Leverage cutting-edge technology to optimize crop health, increase yields, 
              and make data-driven agricultural decisions.
            </motion.p>

            <motion.div
              variants={variants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-medium transition-all flex items-center gap-2">
                Get Started
                <FaArrowRight className="text-sm" />
              </button>
              <button className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-lg font-medium transition-all shadow-sm">
                Learn More
              </button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div 
            className="lg:w-1/2 mt-12 lg:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={farmerImage}
                alt="Farmer using digital device"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-green-400/20" />
              
              {/* Floating Stats Card */}
              <motion.div
                className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <FaSeedling className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Success Rate</p>
                    <p className="text-xl font-bold text-gray-900">95%</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;