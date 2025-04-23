import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiShoppingCart, FiChevronDown } from 'react-icons/fi';
import { FaTemperatureHigh, FaTint, FaCloudSun } from 'react-icons/fa';
import Navbar from '../Navigation';
import Footer from '../Footer ';



const ProductsPage = () => {
  const [priceRange, setPriceRange] = useState(500);
  const [selectedRegions, setSelectedRegions] = useState([]);
  const [inStockOnly, setInStockOnly] = useState(false);

  const products = [
    { name: 'Heirloom Tomato Seeds', price: 12.99, region: 'Northern Region', tag: 'Best Seller' },
    { name: 'Customer Seeds', price: 8.50, region: 'Eastern Region', tag: 'Organic' },
    { name: 'Carrot Seeds', price: 7.25, region: 'Southern Region', tag: 'Best Seller' },
    { name: 'Hero Seeds Collection', price: 14.99, region: 'Eastern Region', tag: 'Premium' },
    { name: 'Bell Pepper Seeds', price: 9.99, region: 'Western Region' },
    { name: 'Mixed Lettuce Seeds', price: 6.75, region: 'Northern Region' },
  ];

  return (
    <>
    <Navbar/>
    <div className=" mt-20 min-h-screen bg-gray-50 p-8">
      <div className="flex gap-8">
        {/* Sidebar Filters */}
        <div className="w-72 space-y-6">
          {/* Categories */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Categories</h2>
            {['Desert Seeds (24)', 'Irrigation Systems (18)', 'Desert Soil Enhancers (12)', 
              'Heat-Resistant Crops (36)', 'Greenhouse Equipment (9)'].map((category) => (
              <label key={category} className="flex items-center gap-3 mb-3">
                <input type="checkbox" className="w-4 h-4 accent-green-500" />
                <span className="text-gray-600">{category}</span>
              </label>
            ))}
          </div>

          {/* Price Range */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Price Range</h2>
            <input 
              type="range" 
              min="0"
              max="1000"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full accent-green-500"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>$0</span>
              <span>$1000</span>
            </div>
          </div>

          {/* Oman Regions */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Oman</h2>
            {['Ibri (15)', 'Muscat (23)', 'Samail (18)', 'Barka (29)', 'Nizwa (12)'].map((region) => (
              <label key={region} className="flex items-center gap-3 mb-3">
                <input type="checkbox" className="w-4 h-4 accent-green-500" />
                <span className="text-gray-600">{region}</span>
              </label>
            ))}
          </div>

          {/* Availability */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <label className="flex items-center gap-3">
              <input 
                type="checkbox" 
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
                className="w-4 h-4 accent-green-500"
              />
              <span className="text-gray-600">In Stock Only</span>
            </label>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Recommendations */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h2 className="text-lg font-semibold mb-6">Desert Climate Recommendations</h2>
            <div className="grid grid-cols-4 gap-4">
              <div className="flex items-center gap-4">
                <FaTemperatureHigh className="text-green-500 text-2xl" />
                <div>
                  <p className="text-gray-500 text-sm">Temperature</p>
                  <p className="font-semibold">1°C - ideal for germination</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaTint className="text-green-500 text-2xl" />
                <div>
                  <p className="text-gray-500 text-sm">Humidity</p>
                  <p className="font-semibold">66% - Good growing conditions</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaCloudSun className="text-green-500 text-2xl" />
                <div>
                  <p className="text-gray-500 text-sm">Weather</p>
                  <p className="font-semibold">Partly Cloudy</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FiChevronDown className="text-green-500 text-2xl" />
                <div>
                  <p className="text-gray-500 text-sm">Best to Plant</p>
                  <p className="font-semibold">Tomatoes, Peppers, Herbs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <h2 className="text-2xl font-bold mb-6">Seeds (24 products)</h2>
          <div className="grid grid-cols-2 gap-6">
            {products.map((product, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-lg shadow-sm relative"
              >
                {product.tag && (
                  <span className="absolute top-4 right-4 bg-green-100 text-green-800 text-sm px-2 py-1 rounded">
                    {product.tag}
                  </span>
                )}
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-2xl font-bold text-green-600">${product.price}</p>
                    <p className="text-gray-500 text-sm">{product.region}</p>
                  </div>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                    <FiShoppingCart /> Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ProductsPage;