import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Truck, Shield } from 'lucide-react';
import Button from '../components/ui/Button';
import ProductCard from '../components/ui/ProductCard';
import FeaturedProductCard from '../components/ui/FeaturedProductCard';
import { products } from '../data/products';

const Home = () => {
  const featuredProducts = [...products.slice(0, 3), ...products.slice(-3)];
  
  const features = [
    {
      icon: Award,
      title: "Expert Craftsmanship",
      description: "Italian wool blend with half-canvas construction"
    },
    {
      icon: Truck,
      title: "Free Worldwide Shipping",
      description: "Complimentary delivery on orders over $200"
    },
    {
      icon: Shield,
      title: "Perfect Fit Guarantee",
      description: "30-day returns and expert tailoring adjustments"
    }
  ];
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] flex items-center justify-center bg-gradient-to-r from-gray-900 to-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://i.pinimg.com/736x/40/24/c3/4024c3ef1ac5680bb46656ca2c67eb99.jpg"
            alt="Luxury suit"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 mt-16 sm:mt-32"
        >
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-xs sm:text-sm text-gray-400 flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8"
          >
            <span>Free worldwide shipping over KSh 26,000</span>
            <span className="hidden sm:inline">•</span>
            <span>30-day returns</span>
            <span className="hidden sm:inline">•</span>
            <span>Expert tailoring</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
          >
            <Link to="/products" className="w-full sm:w-auto">
              <Button variant="gold" size="lg" className="group w-full sm:w-auto">
                Shop Collection →
              </Button>
            </Link>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              Book a Fitting
            </Button>
          </motion.div>
        </motion.div>
      </section>
      
      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Tailored for Excellence</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Every suit tells a story of precision, quality, and uncompromising attention to detail
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-6 sm:p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-black text-white rounded-full mb-4 sm:mb-6">
                  <feature.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Featured Collection</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Discover our most popular suits, handpicked for the discerning gentleman
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <FeaturedProductCard product={product} index={index} />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/products">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                View All Suits
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Your Perfect Fit Awaits</h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 px-4">
              Book a personal fitting consultation with our master tailors
            </p>
            <Button variant="gold" size="lg" className="w-full sm:w-auto">
              Schedule Fitting
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;