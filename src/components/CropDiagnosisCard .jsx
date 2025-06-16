import { useDropzone } from 'react-dropzone'
import { motion } from 'framer-motion'
import { FaUpload, FaCamera, FaLeaf } from 'react-icons/fa'
import fertilizerImage from '../assets/fertilizer.webp'

export default function CropDiagnosis() {
  const { getRootProps, getInputProps } = useDropzone()

  return (
    <div className="relative min-h-[600px] p-8"> {/* Changed container sizing */}
      {/* Background with contained transparency */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${fertilizerImage})` }}
      >
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm" />
      </div>

      {/* Content container */}
      <motion.div 
        className="relative z-10 rounded-2xl p-8 shadow-lg max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8">
          {/* Header Section */}
          <div className="text-center mb-8">
            <motion.div 
              className="flex items-center justify-center gap-2 mb-4"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
            >
              <FaLeaf className="text-4xl text-green-600" />
              <h1 className="text-3xl font-bold text-gray-800">Diagnose Your Crops</h1>
            </motion.div>
            
            <p className="text-gray-600 mb-6">
              Upload a photo of your plants and get instant AI-powered diagnosis. 
              Identify diseases, pests, and nutrient deficiencies in seconds.
            </p>

            <div className="flex gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-600 text-white px-6 py-3 rounded-full flex items-center gap-2"
              >
                Start Diagnosis
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-full"
              >
                Learn More
              </motion.button>
            </div>
          </div>

          {/* Upload Section */}
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 mb-6">
            <div 
              {...getRootProps()}
              className="text-center cursor-pointer"
            >
              <input {...getInputProps()} />
              <p className="text-gray-500 mb-4">Drag and drop your image here</p>
              <p className="text-gray-400 text-sm mb-6">or</p>
              
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-gray-700 px-6 py-3 rounded-full shadow-sm flex items-center gap-2"
                >
                  <FaUpload className="text-green-600" />
                  Upload Photo
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-gray-700 px-6 py-3 rounded-full shadow-sm flex items-center gap-2"
                >
                  <FaCamera className="text-green-600" />
                  Take Photo
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}