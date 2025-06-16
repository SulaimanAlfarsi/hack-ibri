import { motion } from "framer-motion";
import { 
  FaFacebook, FaTwitter, FaInstagram, FaLinkedin,
  FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaRss
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebook />, href: "#" },
    { icon: <FaTwitter />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
    { icon: <FaLinkedin />, href: "#" }
  ];

  const footerLinks = [
    {
      title: "Quick Links",
      links: ["About Us", "Services", "Blog", "Contact"]
    },
    {
      title: "Resources",
      links: ["FAQs", "Documentation", "Help Center", "Privacy Policy"]
    },
    {
      title: "Recent Diagnoses",
      links: ["Tomato Blight", "Corn Deficiency", "Apple Scab", "View All"]
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gray-900 text-gray-300 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12">
          {/* Company Info */}
          <motion.div
            variants={itemVariants}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-white">AgroTech</h3>
            <p className="text-sm">Revolutionizing agricultural solutions through technology</p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{ scale: 1.1 }}
                  className="text-xl text-gray-400 hover:text-green-500 transition-colors"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <motion.li
                    key={idx}
                    whileHover={{ x: 5 }}
                  >
                    <a href="#" className="text-sm hover:text-green-500 transition-colors">
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Newsletter */}
          <motion.div
            variants={itemVariants}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Newsletter</h4>
            <p className="text-sm">Subscribe to get latest updates</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
              >
                <HiMail className="text-xl" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="border-t border-gray-800 py-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between text-sm">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="#" className="hover:text-green-500">Privacy Policy</a>
              <a href="#" className="hover:text-green-500">Terms of Service</a>
              <a href="#" className="hover:text-green-500">Cookie Policy</a>
            </div>
            <p className="text-gray-500">
              © {new Date().getFullYear()} AgroTech. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;