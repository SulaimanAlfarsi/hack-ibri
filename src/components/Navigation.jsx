// components/Navigation.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Bell, Globe, Settings, LogOut } from 'lucide-react';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'My Dashboard', path: '/dashboard' },
    { name: 'Diagnose Crop', path: '/diagnose' },
    { name: 'Store', path: '/storepage' },
    { name: 'Learning', path: '/learning' },
    { name: 'Waste Collection', path: '/learning' },

  ];

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: '-100%' },
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden text-gray-600 hover:text-gray-800"
            >
              <Menu size={24} />
            </button>
            <h1 className="text-2xl font-bold text-green-600">AgroTech</h1>
          </div>

          {/* Center Links - Desktop */}
          <div className="hidden lg:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-6">
            <button className="text-gray-600 hover:text-green-600">
              <Bell size={24} />
            </button>
            <div className="flex items-center gap-2">
              <Globe size={20} className="text-gray-600" />
              <span className="text-gray-600">EN</span>
            </div>
            <button className="text-gray-600 hover:text-green-600">
              <Settings size={24} />
            </button>
            <button className="text-gray-600 hover:text-green-600">
              <LogOut size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            transition={{ type: 'tween' }}
            className="fixed inset-y-0 left-0 w-64 bg-white shadow-xl z-50 lg:hidden"
          >
            <div className="p-4 border-b">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-green-600">ZIRATECH</h2>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="text-gray-600 hover:text-gray-800"
                >
                  <X size={24} />
                </button>
              </div>
              
              {/* User Profile */}
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold">Michael Anderson</h3>
                <span className="text-sm text-green-600">Premium Member</span>
              </div>
            </div>

            {/* Sidebar Links */}
            <div className="p-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;