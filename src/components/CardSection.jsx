import React from "react";
import { motion } from "framer-motion";
import { FaSeedling, FaShoppingBag, FaBookOpen, FaDiagnoses, FaSnowflake, FaCloudRain, FaCloudSun } from "react-icons/fa";

const cards = [
  {
    icon: <FaSeedling className="text-2xl text-green-600" />, 
    title: "Crops Tracked",
    value: "47",
    subtitle: "This Month",
  },
  {
    icon: <FaShoppingBag className="text-2xl text-indigo-600" />,
    title: "Purchases Made",
    value: "12",
    subtitle: "This Month",
  },
  {
    icon: <FaBookOpen className="text-2xl text-yellow-600" />,
    title: "Learning Completed",
    value: "85%",
    subtitle: "Total",
  },
  {
    icon: <FaDiagnoses className="text-2xl text-red-600" />,
    title: "Days Since Last Diagnosis",
    value: "2",
    subtitle: "Latest",
  },
];

const CardSection = () => {
  return (
    <div className="mt-20 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {cards.map((card, idx) => (
        <motion.div
        key={idx}
        initial={{ opacity: 0, y: 20, boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)" }}
        animate={{ opacity: 1, y: 0, boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)" }}
        transition={{ duration: 0.5, delay: idx * 0.1 }}
        className="bg-white rounded-2xl p-4 flex flex-col gap-2"
      >
      
          <div className="flex items-center gap-3">
            <div className="bg-gray-100 p-2 rounded-full">
              {card.icon}
            </div>
            <div className="text-sm text-gray-500">{card.subtitle}</div>
          </div>
          <div className="text-2xl font-bold text-gray-800">{card.value}</div>
          <div className="text-sm text-gray-700">{card.title}</div>
        </motion.div>
      ))}

      {/* Weather Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: cards.length * 0.1 }}
        className="bg-white rounded-2xl shadow p-4 col-span-1 sm:col-span-2 flex flex-col gap-2"
      >
        <div className="font-semibold">Current Weather</div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <FaCloudSun className="text-yellow-500 text-3xl" />
            <div>
              <div className="text-2xl font-bold text-gray-800">24°C</div>
              <div className="text-sm text-gray-600">Partly Cloudy</div>
            </div>
          </div>
          <div className="text-xs text-gray-500">Updated 5 min ago</div>
        </div>
        <div className="flex justify-around mt-2 text-sm text-gray-600">
          <div>Humidity <strong>65%</strong></div>
          <div>Wind <strong>12 km/h</strong></div>
          <div>Rain <strong>0%</strong></div>
        </div>
      </motion.div>

      {/* Alerts Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: (cards.length + 1) * 0.1 }}
        className="bg-white rounded-2xl shadow p-4 col-span-1 sm:col-span-2 flex flex-col gap-3"
      >
        <div className="font-semibold">Regional Alerts</div>

        <div className="bg-yellow-50 text-yellow-700 text-sm p-3 rounded-xl flex items-center gap-2">
          <FaSnowflake className="text-yellow-500" />
          <div>
            <strong>Frost Warning</strong><br />Expected tonight. Protect sensitive crops.
          </div>
        </div>

        <div className="bg-blue-50 text-blue-700 text-sm p-3 rounded-xl flex items-center gap-2">
          <FaCloudRain className="text-blue-500" />
          <div>
            <strong>Rain Forecast</strong><br />70% chance of rain tomorrow.
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CardSection;