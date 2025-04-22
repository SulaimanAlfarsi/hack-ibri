import { motion } from "framer-motion";
import { FaDiagnoses, FaSeedling, FaBook } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const Features = () => {
  const features = [
    {
      icon: <FaDiagnoses className="text-3xl" />,
      title: "AI Crop Diagnosis",
      description: "Our advanced AI technology analyzes photos of your crops to identify diseases, pests, and nutrient deficiencies with high accuracy.",
      link: "#"
    },
    {
      icon: <FaSeedling className="text-3xl" />,
      title: "E-commerce Store",
      description: "Shop for high-quality seeds, fertilizers, tools, and other agricultural supplies directly from our platform with secure payment options.",
      link: "#"
    },
    {
      icon: <FaBook className="text-3xl" />,
      title: "Learning Hub",
      description: "Access educational resources, tutorials, and expert advice to improve your farming techniques and stay updated with the latest agricultural practices.",
      link: "#"
    }
  ];

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    hover: { y: -10 }
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Platform Features</h2>
          <p className="text-lg text-gray-600">Discover how our agricultural platform can help you grow healthier crops, access quality supplies, and expand your farming knowledge.</p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <a
                href={feature.link}
                className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors"
              >
                Learn more
                <HiArrowRight className="ml-2" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;