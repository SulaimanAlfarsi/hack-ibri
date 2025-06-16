import { motion } from "framer-motion";
import { HiOutlineClipboardList, HiArrowRight } from "react-icons/hi";
import tomatoImage from '../assets/tomato.jpg';
import cucumberImage from '../assets/cucumber.webp';
import cornImage from '../assets/corn.jpg';
import appleImage from '../assets/apple.jpg';

const RecentDiagnoses = () => {
    const diagnoses = [
      {
        id: 1,
        title: "Tomato Plants",
        diagnosis: "Early Blight",
        date: "April 10, 2025",
        image: tomatoImage,
      },
      {
        id: 2,
        title: "Cucumber Plants",
        diagnosis: "Powdery Mildew",
        date: "April 8, 2025",
        image: cucumberImage,
      },
      {
        id: 3,
        title: "Corn Field",
        diagnosis: "Magnesium Deficiency",
        date: "April 5, 2025",
        image: cornImage,
      },
      {
        id: 4,
        title: "Apple Trees",
        diagnosis: "Apple Scab",
        date: "April 3, 2025",
        image: appleImage,
      },
    ];
  
    const cardVariants = {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      hover: { y: -5 },
    };
  
    return (
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8 flex items-center gap-3"
          >
            <HiOutlineClipboardList className="text-3xl text-green-600" />
            <h2 className="text-3xl font-bold text-gray-900">Recent Diagnoses</h2>
          </motion.div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {diagnoses.map((item, index) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                transition={{ delay: index * 0.1 }}
                whileHover="hover"
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{item.date}</p>
                  </div>
  
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-100 text-red-800 text-sm">
                      {item.diagnosis}
                    </span>
                    <button className="flex items-center text-green-600 hover:text-green-700 transition-colors">
                      View Details
                      <HiArrowRight className="ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default RecentDiagnoses;