import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold mb-4 block">
              ÉLITE
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Crafting exceptional suits for the modern gentleman. Premium quality, 
              impeccable tailoring, and timeless style since 1985.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors">
                  All Suits
                </Link>
              </li>
              <li>
                <Link to="/products?category=business" className="text-gray-300 hover:text-white transition-colors">
                  Business Suits
                </Link>
              </li>
              <li>
                <Link to="/products?category=formal" className="text-gray-300 hover:text-white transition-colors">
                  Formal Wear
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-2" />
                123 Fashion Ave, Nairobi
              </li>
              <li className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-2" />
+254 712 345 678
              </li>
              <li className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-2" />
                info@elitesuits.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 ÉLITE Suits. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;