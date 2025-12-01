import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Heart } from 'lucide-react';
import Button from './Button';

const FeaturedProductCard = ({ product, index }) => {
  const promotionalOffers = [
    "🔥 BLACK FRIDAY DEAL",
    "⚡ FLASH SALE - 50% OFF",
    "🎯 LIMITED TIME OFFER",
    "💎 PREMIUM COLLECTION",
    "🌟 BESTSELLER SPECIAL",
    "🎉 WEEKEND EXCLUSIVE"
  ];

  const offer = promotionalOffers[index % promotionalOffers.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="relative overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>
        
        <div className="absolute top-4 left-4 bg-gradient-to-r from-red-600 to-red-700 text-white px-3 py-2 text-sm font-bold rounded-lg shadow-lg">
          {offer}
        </div>
        
        {!product.inStock && (
          <div className="absolute top-4 right-4 bg-gray-800 text-white px-2 py-1 text-sm font-medium rounded">
            Out of Stock
          </div>
        )}
        
        <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Heart className="w-4 h-4" />
        </button>
      </div>
      
      <div className="p-6">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-gray-700 transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating) 
                    ? 'text-yellow-400 fill-current' 
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
        </div>
        
        <div className="mb-4">
          <div className="bg-gradient-to-r from-amber-100 to-amber-50 border border-amber-200 rounded-lg p-3 text-center">
            <span className="text-amber-800 font-semibold text-sm">
              🎁 SPECIAL PROMOTION ACTIVE
            </span>
          </div>
        </div>
        
        <Link to="/products">
          <Button 
            variant="primary" 
            size="sm" 
            className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
            disabled={!product.inStock}
          >
            {product.inStock ? 'CLAIM OFFER' : 'Out of Stock'}
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default FeaturedProductCard;