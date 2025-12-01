import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Heart } from 'lucide-react';
import Button from './Button';

const ProductCard = ({ product }) => {
  const discount = product.originalPrice ? 
    Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

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
        
        {discount > 0 && (
          <div className="absolute top-4 left-4 bg-red-600 text-white px-2 py-1 text-sm font-medium rounded">
            -{discount}%
          </div>
        )}
        
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
        
        <div className="flex items-center mb-2">
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
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900">KSh {product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">KSh {product.originalPrice.toLocaleString()}</span>
            )}
          </div>
        </div>
        
        <Link to={`/product/${product.id}`}>
          <Button 
            variant="primary" 
            size="sm" 
            className="w-full"
            disabled={!product.inStock}
          >
            {product.inStock ? 'View Details' : 'Out of Stock'}
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;