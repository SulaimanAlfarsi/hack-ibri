import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { motion } from 'framer-motion';

import fertilizerImage from '../assets/fertilizer.webp';
import toolSetImage from '../assets/LV-Premium.jpg';
import pestControlImage from '../assets/Natural.webp';
import soilSensorImage from '../assets/Smart.jpg';

const products = [
  {
    image: fertilizerImage,
    title: 'Organic Plant Fertilizer',
    description: 'Perfect for vegetable gardens',
    price: '$24.99',
  },
  {
    image: toolSetImage,
    title: 'Premium Garden Tool Set',
    description: 'Essential farming tools',
    price: '$89.99',
  },
  {
    image: pestControlImage,
    title: 'Natural Pest Control',
    description: 'Safe for all plants',
    price: '$19.99',
  },
  {
    image: soilSensorImage,
    title: 'Smart Soil Sensor',
    description: 'Real-time monitoring',
    price: '$34.99',
  },
];

const ProductCard = ({ image, title, description, price }) => (
  <motion.div
    className="bg-white shadow-md rounded-2xl overflow-hidden p-4 flex flex-col justify-between hover:shadow-lg transition-all"
    whileHover={{ scale: 1.03 }}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <img src={image} alt={title} className="h-40 w-full object-contain mb-4" />
    <div>
      <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
      <p className="text-gray-500 text-sm mb-2">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-green-600 font-bold">{price}</span>
        <button className="bg-green-100 p-2 rounded-full hover:bg-green-200 transition">
          <FiShoppingCart className="text-green-700" />
        </button>
      </div>
    </div>
  </motion.div>
);

const RecommendedProducts = () => {
  return (
    <section className="px-4 md:px-10 lg:px-20 py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Recommended Products</h2>
        <a href="#" className="text-sm text-gray-500 hover:text-green-600 transition">View All →</a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default RecommendedProducts;
