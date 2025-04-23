import { motion } from "framer-motion";
import { FaUpload, FaHistory, FaChartPie ,FaArrowRight} from "react-icons/fa";
import { useDropzone } from "react-dropzone";
import tomatoImage from '../../assets/tomato.jpg';
import cucumberImage from '../../assets/tomato.jpg';
import pepperImage from '../../assets/tomato.jpg';
import strawberryImage from '../../assets/tomato.jpg';
import Navbar from "../Navigation";
import Footer from "../Footer ";
import RecentDiagnoses from "../RecentDiagnoses ";

const DiagnoseCrop = () => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/*',
    maxSize: 10 * 1024 * 1024 
  });

  const diagnoses = [
    { 
      plant: "Tomato Plant",
      diagnosis: "Early Blight",
      status: "Treated",
      date: "Apr 10",
      image: tomatoImage
    },
    {
      plant: "Cucumber Plant",
      diagnosis: "Powdery Mildew",
      status: "In Progress",
      date: "Apr 5",
      image: cucumberImage
    },
    {
      plant: "Pepper Plant",
      diagnosis: "Nutrient Deficiency",
      status: "Treated",
      date: "Mar 28",
      image: pepperImage
    },
    {
      plant: "Strawberry Plant",
      diagnosis: "Leaf Spot",
      status: "Treated",
      date: "Mar 23",
      image: strawberryImage
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="pt-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Diagnose Crop</h1>
          <p className="text-gray-600">Upload images of your plants to identify diseases and get treatment recommendations</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Upload Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-xl p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FaUpload className="text-green-600" />
              Upload Plant Image
            </h2>

            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
                ${isDragActive ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-green-400'}`}
            >
              <input {...getInputProps()} />
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="space-y-4"
              >
                <FaUpload className="text-3xl text-gray-400 mx-auto" />
                <p className="text-gray-600 font-medium">
                  {isDragActive ? 'Drop the files here' : 'Drag and drop your image here'}
                </p>
                <p className="text-gray-400 text-sm">or</p>
                <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Browse Files
                </button>
                <p className="text-gray-400 text-sm mt-2">
                  Supported formats: JPG, PNG, WEBP (Max size: 10MB)
                </p>
              </motion.div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              Start Diagnosis
            </motion.button>
          </motion.div>

          {/* History Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-xl p-6 shadow-sm"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <FaHistory className="text-green-600" />
                Previous Diagnoses
              </h2>
              <button className="text-green-600 hover:text-green-700 flex items-center">
                View all <FaArrowRight className="ml-2" />
              </button>
            </div>

            <div className="space-y-6">
              {diagnoses.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4 relative"
                >
                  <div className="w-16 h-16 rounded-lg overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.plant}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{item.plant}</h3>
                    <p className="text-sm text-gray-600">{item.diagnosis}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      item.status === 'Treated' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {item.status}
                    </span>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-gray-500">{item.date}</p>
                    {/* Timeline dots */}
                    {index < diagnoses.length - 1 && (
                      <div className="hidden md:block absolute -right-6 top-8 h-full">
                        <div className="h-full w-0.5 bg-gray-200 mx-auto" />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Stats Card */}
              <motion.div
                variants={itemVariants}
                className="mt-8 p-4 bg-green-50 rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-green-600 p-3 rounded-full">
                    <FaChartPie className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Diagnosis Stats</h3>
                    <p className="text-sm text-gray-600">This Month</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">92%</p>
                    <p className="text-sm text-gray-600">Success Rate</p>
                  </div>
                  <div className="relative w-16 h-16">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle
                        className="text-gray-200"
                        strokeWidth="8"
                        stroke="currentColor"
                        fill="transparent"
                        r="40"
                        cx="50"
                        cy="50"
                      />
                      <circle
                        className="text-green-600"
                        strokeWidth="8"
                        strokeDasharray="251.2"
                        strokeDashoffset="20"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="40"
                        cx="50"
                        cy="50"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    <RecentDiagnoses/>
    <Footer/>
    </>
  );
};

export default DiagnoseCrop;