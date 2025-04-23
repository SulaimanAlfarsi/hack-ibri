import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiShoppingCart, FiChevronDown } from 'react-icons/fi';
import { FaTemperatureHigh, FaTint, FaCloudSun } from 'react-icons/fa';

import tomatoImage from '../../assets/tomato.jpg';
import cucumberImage from '../../assets/cucumber.webp';
import carrotImage from '../../assets/corn.jpg';
import pepperImage from '../../assets/apple.jpg';
import lettuceImage from '../../assets/tomato.jpg';
import heroSeedsImage from '../../assets/LV-Premium.jpg';
import Navbar from '../Navigation';
import Footer from '../Footer ';

const ProductsPage = () => {
  const [priceRange, setPriceRange] = useState(500);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [selectedRegions, setSelectedRegions] = useState([]);

  const regions = ['Northern Region', 'Eastern Region', 'Southern Region', 'Western Region'];
  const productRegions = ['Ibri', 'Muscat', 'Samail', 'Barka', 'Nizwa'];

  const products = [
    {
      name: 'Heirloom Tomato Seeds',
      price: 12.99,
      region: 'Northern Region',
      tag: 'Best Seller',
      image: tomatoImage,
      inStock: true,
    },
    {
      name: 'Customer Seeds',
      price: 8.5,
      region: 'Eastern Region',
      tag: 'Organic',
      image: cucumberImage,
      inStock: false,
    },
    {
      name: 'Carrot Seeds',
      price: 7.25,
      region: 'Southern Region',
      tag: 'Best Seller',
      image: carrotImage,
      inStock: true,
    },
    {
      name: 'Hero Seeds Collection',
      price: 14.99,
      region: 'Eastern Region',
      tag: 'Premium',
      image: heroSeedsImage,
      inStock: true,
    },
    {
      name: 'Bell Pepper Seeds',
      price: 9.99,
      region: 'Western Region',
      image: pepperImage,
      inStock: true,
    },
    {
      name: 'Mixed Lettuce Seeds',
      price: 6.75,
      region: 'Northern Region',
      image: lettuceImage,
      inStock: false,
    },
  ];

  const handleRegionChange = (region) => {
    setSelectedRegions((prev) =>
      prev.includes(region)
        ? prev.filter((r) => r !== region)
        : [...prev, region]
    );
  };

  const filteredProducts = products.filter((product) => {
    const matchPrice = product.price <= priceRange;
    const matchStock = !inStockOnly || product.inStock;
    const matchRegion =
      selectedRegions.length === 0 || selectedRegions.includes(product.region);
    return matchPrice && matchStock && matchRegion;
  });

  return (
    <>
      <Navbar />
      <div className="mt-20 min-h-screen bg-gray-50 p-8">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <div className="w-72 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Categories</h2>
              {['Desert Seeds (24)', 'Irrigation Systems (18)', 'Desert Soil Enhancers (12)', 'Heat-Resistant Crops (36)', 'Greenhouse Equipment (9)'].map((category) => (
                <label key={category} className="flex items-center gap-3 mb-3">
                  <input type="checkbox" className="w-4 h-4 accent-green-500" />
                  <span className="text-gray-600">{category}</span>
                </label>
              ))}
            </div>

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
              <p className="text-right text-sm font-semibold mt-1 text-green-700">${priceRange}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Regions</h2>
              {regions.map((region) => (
                <label key={region} className="flex items-center gap-3 mb-3">
                  <input
                    type="checkbox"
                    checked={selectedRegions.includes(region)}
                    onChange={() => handleRegionChange(region)}
                    className="w-4 h-4 accent-green-500"
                  />
                  <span className="text-gray-600">{region}</span>
                </label>
              ))}
            </div>

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

            <h2 className="text-2xl font-bold mb-6">Seeds ({filteredProducts.length} products)</h2>
            <div className="grid grid-cols-2 gap-6">
              {filteredProducts.map((product, index) => (
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
                  <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4 rounded" />
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
