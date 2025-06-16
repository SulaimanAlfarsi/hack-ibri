import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sun, 
  Droplets, 
  Thermometer, 
  Calendar, 
  AlertCircle,
  TrendingUp,
  Leaf,
  CloudRain,
  BarChart2,
  Droplet,
  Wind,
  Cloud,
  Activity,
  AlertTriangle,
  CheckCircle2,
  Gauge,
  MapPin,
  Crop,
  Clock,
  ChevronDown
} from 'lucide-react';
import Navbar from '../Navigation';
import Footer from '../Footer .jsx';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedFarm, setSelectedFarm] = useState('farm1');

  // Image URLs
  const images = {
    farm: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    datePalm: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80',
    irrigation: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  };

  // Mock data for multiple farms
  const farms = {
    farm1: {
      name: 'Al Dhahirah Farm',
      location: 'Ibri, Oman',
      size: '5 hectares',
      crops: [
        {
          name: 'Date Palm',
          area: '2 hectares',
          health: 'Good',
          lastHarvest: '2024-03-15',
          nextHarvest: '2024-09-20'
        },
        {
          name: 'Tomatoes',
          area: '1 hectare',
          health: 'Excellent',
          lastHarvest: '2024-04-01',
          nextHarvest: '2024-06-15'
        },
        {
          name: 'Cucumbers',
          area: '0.5 hectares',
          health: 'Good',
          lastHarvest: '2024-04-10',
          nextHarvest: '2024-06-25'
        }
      ],
      iotData: {
        soil: {
          moisture: '65%',
          ph: '7.2',
          temperature: '28°C',
          nutrients: {
            nitrogen: 'High',
            phosphorus: 'Medium',
            potassium: 'Low'
          }
        },
        plantHealth: {
          status: 'Healthy',
          riskLevel: 'Low',
          lastScan: '2 hours ago',
          issues: []
        },
        deviceStatus: {
          battery: '85%',
          signal: 'Strong',
          lastUpdate: '5 minutes ago'
        }
      }
    },
    farm2: {
      name: 'Al Buraimi Farm',
      location: 'Buraimi, Oman',
      size: '3 hectares',
      crops: [
        {
          name: 'Mango Trees',
          area: '1.5 hectares',
          health: 'Good',
          lastHarvest: '2024-02-20',
          nextHarvest: '2024-07-15'
        },
        {
          name: 'Lemon Trees',
          area: '0.5 hectares',
          health: 'Excellent',
          lastHarvest: '2024-03-01',
          nextHarvest: '2024-08-10'
        }
      ],
      iotData: {
        soil: {
          moisture: '70%',
          ph: '6.8',
          temperature: '30°C',
          nutrients: {
            nitrogen: 'Medium',
            phosphorus: 'High',
            potassium: 'Medium'
          }
        },
        plantHealth: {
          status: 'Healthy',
          riskLevel: 'Low',
          lastScan: '1 hour ago',
          issues: []
        },
        deviceStatus: {
          battery: '90%',
          signal: 'Strong',
          lastUpdate: '10 minutes ago'
        }
      }
    }
  };

  // Mock data - In a real app, this would come from an API
  const weatherData = {
    temperature: '32°C',
    humidity: '45%',
    rainfall: '0mm',
    forecast: 'Sunny',
    windSpeed: '12 km/h'
  };

  const farmStats = {
    totalArea: '5 hectares',
    activeCrops: '3',
    waterUsage: '1200m³',
    yield: '85%',
    soilMoisture: '65%'
  };

  const seasonalRecommendations = [
    {
      title: 'Summer Crop Planning',
      description: 'Consider planting heat-resistant varieties like dates and mangoes',
      icon: <Sun className="text-yellow-500" />,
      image: images.datePalm
    },
    {
      title: 'Water Conservation',
      description: 'Implement drip irrigation systems to optimize water usage',
      icon: <Droplets className="text-blue-500" />,
      image: images.irrigation
    },
    {
      title: 'Soil Management',
      description: 'Apply organic mulch to retain soil moisture',
      icon: <Leaf className="text-green-500" />,
      image: images.farm
    }
  ];

  const localNews = [
    {
      title: 'New Agricultural Support Program',
      description: 'Ibri government announces new subsidies for modern farming equipment',
      date: '2024-04-22',
      category: 'Government'
    },
    {
      title: 'Water Conservation Initiative',
      description: 'New regulations for efficient water usage in agriculture',
      date: '2024-04-20',
      category: 'Policy'
    }
  ];

  // AI Analysis Results
  const aiAnalysis = {
    currentStatus: 'Optimal',
    recommendations: [
      {
        type: 'Nutrient',
        message: 'Potassium levels are low. Consider adding potassium-rich fertilizer.',
        priority: 'Medium'
      },
      {
        type: 'Water',
        message: 'Soil moisture is optimal. No action needed.',
        priority: 'Low'
      }
    ],
    diseaseRisk: {
      level: 'Low',
      potentialIssues: ['None detected'],
      preventionTips: [
        'Maintain current watering schedule',
        'Monitor for early signs of nutrient deficiency'
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <img
          src={images.farm}
          alt="Farm landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-green-600/50">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Farm Dashboard
              </h1>
              <p className="text-xl text-green-100">
                Ibri, Oman - Your Agricultural Management Hub
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Farm Selection */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-xl font-semibold mb-2">Select Farm</h2>
              <div className="relative">
                <select
                  value={selectedFarm}
                  onChange={(e) => setSelectedFarm(e.target.value)}
                  className="appearance-none bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  {Object.keys(farms).map((farmId) => (
                    <option key={farmId} value={farmId}>
                      {farms[farmId].name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="text-green-600" />
              <span>{farms[selectedFarm].location}</span>
            </div>
          </div>
        </div>

        {/* Farm Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Farm Details</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Farm Name</span>
                <span className="font-medium">{farms[selectedFarm].name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Area</span>
                <span className="font-medium">{farms[selectedFarm].size}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Location</span>
                <span className="font-medium">{farms[selectedFarm].location}</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Crop Summary</h3>
            <div className="space-y-3">
              {farms[selectedFarm].crops.map((crop, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Crop className="text-green-600" />
                    <span className="font-medium">{crop.name}</span>
                  </div>
                  <span className="text-gray-600">{crop.area}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Harvest Schedule</h3>
            <div className="space-y-3">
              {farms[selectedFarm].crops.map((crop, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="font-medium">{crop.name}</span>
                  <div className="flex items-center gap-2">
                    <Clock className="text-gray-400" />
                    <span className="text-sm text-gray-600">{crop.nextHarvest}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Crop Information */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Crop Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {farms[selectedFarm].crops.map((crop, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-4 rounded-lg"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <Crop className="text-green-600" />
                  {crop.name}
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Area</span>
                    <span className="font-medium">{crop.area}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Health</span>
                    <span className={`font-medium ${
                      crop.health === 'Excellent' ? 'text-green-600' :
                      crop.health === 'Good' ? 'text-blue-600' :
                      'text-yellow-600'
                    }`}>
                      {crop.health}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Last Harvest</span>
                    <span className="font-medium">{crop.lastHarvest}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Next Harvest</span>
                    <span className="font-medium">{crop.nextHarvest}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Weather Overview */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <motion.div 
            className="bg-white p-4 rounded-xl shadow-lg"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-2">
              <Thermometer className="text-red-500" />
              <span className="text-gray-600">Temperature</span>
            </div>
            <p className="text-2xl font-bold mt-2">{weatherData.temperature}</p>
          </motion.div>

          <motion.div 
            className="bg-white p-4 rounded-xl shadow-lg"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-2">
              <Droplet className="text-blue-500" />
              <span className="text-gray-600">Humidity</span>
            </div>
            <p className="text-2xl font-bold mt-2">{weatherData.humidity}</p>
          </motion.div>

          <motion.div 
            className="bg-white p-4 rounded-xl shadow-lg"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-2">
              <CloudRain className="text-blue-400" />
              <span className="text-gray-600">Rainfall</span>
            </div>
            <p className="text-2xl font-bold mt-2">{weatherData.rainfall}</p>
          </motion.div>

          <motion.div 
            className="bg-white p-4 rounded-xl shadow-lg"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-2">
              <Wind className="text-gray-500" />
              <span className="text-gray-600">Wind Speed</span>
            </div>
            <p className="text-2xl font-bold mt-2">{weatherData.windSpeed}</p>
          </motion.div>

          <motion.div 
            className="bg-white p-4 rounded-xl shadow-lg"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-2">
              <Cloud className="text-gray-400" />
              <span className="text-gray-600">Forecast</span>
            </div>
            <p className="text-2xl font-bold mt-2">{weatherData.forecast}</p>
          </motion.div>
        </div>

        {/* Farm Performance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <BarChart2 className="text-green-600" />
              Farm Performance
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="text-gray-600">Total Area</p>
                <p className="text-2xl font-bold">{farmStats.totalArea}</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-gray-600">Active Crops</p>
                <p className="text-2xl font-bold">{farmStats.activeCrops}</p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg">
                <p className="text-gray-600">Water Usage</p>
                <p className="text-2xl font-bold">{farmStats.waterUsage}</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <p className="text-gray-600">Soil Moisture</p>
                <p className="text-2xl font-bold">{farmStats.soilMoisture}</p>
              </div>
            </div>
          </div>

          {/* Seasonal Recommendations */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Calendar className="text-green-600" />
              Seasonal Recommendations
            </h2>
            <div className="space-y-4">
              {seasonalRecommendations.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg"
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="w-16 h-16 rounded-lg overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Local News */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <AlertCircle className="text-green-600" />
            Local News & Updates
          </h2>
          <div className="space-y-4">
            {localNews.map((news, index) => (
              <motion.div
                key={index}
                className="p-4 border-b last:border-b-0 hover:bg-gray-50 rounded-lg transition-colors"
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                        {news.category}
                      </span>
                      <span className="text-sm text-gray-500">{news.date}</span>
                    </div>
                    <h3 className="font-medium text-lg">{news.title}</h3>
                    <p className="text-gray-600">{news.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* IoT Device Monitoring */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Activity className="text-green-600" />
            IoT Device Monitoring - {farms[selectedFarm].name}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Soil Conditions */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-3 flex items-center gap-2">
                <Leaf className="text-green-600" />
                Soil Conditions
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Moisture</span>
                  <span className="font-medium">{farms[selectedFarm].iotData.soil.moisture}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">pH Level</span>
                  <span className="font-medium">{farms[selectedFarm].iotData.soil.ph}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Temperature</span>
                  <span className="font-medium">{farms[selectedFarm].iotData.soil.temperature}</span>
                </div>
              </div>
            </div>

            {/* Plant Health */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-3 flex items-center gap-2">
                <Activity className="text-green-600" />
                Plant Health
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Status</span>
                  <span className="font-medium text-green-600">{farms[selectedFarm].iotData.plantHealth.status}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Risk Level</span>
                  <span className="font-medium text-green-600">{farms[selectedFarm].iotData.plantHealth.riskLevel}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Last Scan</span>
                  <span className="font-medium">{farms[selectedFarm].iotData.plantHealth.lastScan}</span>
                </div>
              </div>
            </div>

            {/* Device Status */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-3 flex items-center gap-2">
                <Gauge className="text-green-600" />
                Device Status
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Battery</span>
                  <span className="font-medium">{farms[selectedFarm].iotData.deviceStatus.battery}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Signal</span>
                  <span className="font-medium">{farms[selectedFarm].iotData.deviceStatus.signal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Last Update</span>
                  <span className="font-medium">{farms[selectedFarm].iotData.deviceStatus.lastUpdate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Analysis */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Activity className="text-green-600" />
            AI Analysis & Recommendations - {farms[selectedFarm].name}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Current Status */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-3">Current Status</h3>
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle2 className="text-xl" />
                <span className="text-lg font-medium">{aiAnalysis.currentStatus}</span>
              </div>
            </div>

            {/* Disease Risk */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-3">Disease Risk</h3>
              <div className="flex items-center gap-2 text-green-600">
                <AlertTriangle className="text-xl" />
                <span className="text-lg font-medium">{aiAnalysis.diseaseRisk.level}</span>
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="mt-6">
            <h3 className="font-medium mb-3">Recommendations</h3>
            <div className="space-y-3">
              {aiAnalysis.recommendations.map((rec, index) => (
                <motion.div
                  key={index}
                  className="p-3 bg-gray-50 rounded-lg"
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-sm text-gray-500">{rec.type}</span>
                      <p className="font-medium">{rec.message}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      rec.priority === 'High' ? 'bg-red-100 text-red-800' :
                      rec.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {rec.priority}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Prevention Tips */}
          <div className="mt-6">
            <h3 className="font-medium mb-3">Prevention Tips</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {aiAnalysis.diseaseRisk.preventionTips.map((tip, index) => (
                <motion.div
                  key={index}
                  className="p-3 bg-gray-50 rounded-lg flex items-start gap-2"
                  whileHover={{ scale: 1.01 }}
                >
                  <CheckCircle2 className="text-green-600 mt-1" />
                  <p>{tip}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default Dashboard; 