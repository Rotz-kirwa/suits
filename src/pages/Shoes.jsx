import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Button from '../components/ui/Button';

const Shoes = () => {
  const shoes = [
    {
      id: 1,
      name: "Classic Black Oxford Shoes",
      price: 8000,
      originalPrice: 10000,
      image: "https://i.pinimg.com/1200x/9e/b1/73/9eb1737d5b3e4ea1167e6f5f9fdf66a1.jpg",
      rating: 4.8,
      reviews: 124
    },
    {
      id: 2,
      name: "Brown Leather Derby Shoes",
      price: 9000,
      originalPrice: 11000,
      image: "https://i.pinimg.com/736x/01/b8/5f/01b85f3f20aacf127b8cb6b45c1517d8.jpg",
      rating: 4.7,
      reviews: 89
    },
    {
      id: 3,
      name: "Navy Suede Loafers",
      price: 7000,
      originalPrice: 9000,
      image: "https://i.pinimg.com/736x/e0/f2/62/e0f262ac0dd58de409ed0a2ab1c41c0d.jpg",
      rating: 4.9,
      reviews: 156
    },
    {
      id: 4,
      name: "Tan Brogue Wingtip Shoes",
      price: 10000,
      originalPrice: 12000,
      image: "https://i.pinimg.com/736x/8b/24/e1/8b24e13098b2183ee1288740ff855ad1.jpg",
      rating: 4.8,
      reviews: 78
    },
    {
      id: 5,
      name: "Black Formal Oxford Shoes",
      price: 9000,
      originalPrice: 11000,
      image: "https://i.pinimg.com/736x/80/38/ce/8038ce21d4aa50babfa9223702d4ceef.jpg",
      rating: 4.9,
      reviews: 142
    },
    {
      id: 6,
      name: "Premium Brown Oxford Shoes",
      price: 11000,
      originalPrice: 13000,
      image: "https://i.pinimg.com/1200x/2a/9c/81/2a9c818800d86a7751dad68c6310747c.jpg",
      rating: 4.8,
      reviews: 167
    },
    {
      id: 7,
      name: "Classic Black Leather Shoes",
      price: 8000,
      originalPrice: 10000,
      image: "https://i.pinimg.com/1200x/ed/f9/8e/edf98eac6e9c61eca350ddc643da10f7.jpg",
      rating: 4.7,
      reviews: 134
    },
    {
      id: 8,
      name: "Elegant Brown Derby Shoes",
      price: 8000,
      originalPrice: 10000,
      image: "https://i.pinimg.com/736x/3c/c9/38/3cc938938e7d66f45a8bed2a94bbd44d.jpg",
      rating: 4.8,
      reviews: 98
    },
    {
      id: 9,
      name: "Modern Black Oxford Shoes",
      price: 12000,
      originalPrice: 14000,
      image: "https://i.pinimg.com/736x/d1/a1/e7/d1a1e7973e590daba9f4c0af987c42f0.jpg",
      rating: 4.9,
      reviews: 189
    },
    {
      id: 10,
      name: "Luxury Tan Oxford Shoes",
      price: 13000,
      originalPrice: 15000,
      image: "https://i.pinimg.com/736x/e6/47/ef/e647efa08bae934f4db8114cf64d7865.jpg",
      rating: 4.8,
      reviews: 156
    },
    {
      id: 11,
      name: "Professional Black Shoes",
      price: 10000,
      originalPrice: 12000,
      image: "https://i.pinimg.com/736x/72/6d/83/726d83fab73ff60fc38e0152e08ba9da.jpg",
      rating: 4.7,
      reviews: 123
    },
    {
      id: 12,
      name: "Premium Brown Loafers",
      price: 9000,
      originalPrice: 11000,
      image: "https://i.pinimg.com/736x/9e/34/69/9e3469d884a27d79ade401ee2c96c704.jpg",
      rating: 4.8,
      reviews: 145
    },
    {
      id: 13,
      name: "Classic Navy Oxford Shoes",
      price: 11000,
      originalPrice: 13000,
      image: "https://i.pinimg.com/736x/88/d9/f4/88d9f4094a2b5aa174bf80e146ec1a70.jpg",
      rating: 4.9,
      reviews: 178
    },
    {
      id: 14,
      name: "Elegant Black Oxford Shoes",
      price: 12000,
      originalPrice: 14000,
      image: "https://i.pinimg.com/736x/24/78/ab/2478ab2f34bcaaf2836569f7fc5d5dcb.jpg",
      rating: 4.8,
      reviews: 167
    },
    {
      id: 15,
      name: "Modern Brown Derby Shoes",
      price: 8000,
      originalPrice: 10000,
      image: "https://i.pinimg.com/736x/f1/44/0b/f1440bba3d2b2a3bdd7526eabcc2541e.jpg",
      rating: 4.7,
      reviews: 134
    },
    {
      id: 16,
      name: "Luxury Black Oxford Shoes",
      price: 13000,
      originalPrice: 15000,
      image: "https://i.pinimg.com/736x/0e/37/f7/0e37f791c103c374cf8d4695bb93e989.jpg",
      rating: 4.9,
      reviews: 198
    },
    {
      id: 17,
      name: "Premium Tan Brogue Shoes",
      price: 12000,
      originalPrice: 14000,
      image: "https://i.pinimg.com/736x/75/3c/6b/753c6bed34a1a57a0e00a5521cbcc43f.jpg",
      rating: 4.8,
      reviews: 156
    },
    {
      id: 18,
      name: "Classic Brown Oxford Shoes",
      price: 10000,
      originalPrice: 12000,
      image: "https://i.pinimg.com/736x/2d/71/45/2d7145884e2df80e9740b32cbdef6abc.jpg",
      rating: 4.7,
      reviews: 145
    },
    {
      id: 19,
      name: "Elegant Black Loafers",
      price: 9000,
      originalPrice: 11000,
      image: "https://i.pinimg.com/736x/35/e5/35/35e5353c9d1e1c638325581d9d53f58b.jpg",
      rating: 4.8,
      reviews: 123
    },
    {
      id: 20,
      name: "Modern Navy Oxford Shoes",
      price: 11000,
      originalPrice: 13000,
      image: "https://i.pinimg.com/736x/d7/66/2a/d7662a8957d442602edd45cae5d3d3c6.jpg",
      rating: 4.9,
      reviews: 187
    },
    {
      id: 21,
      name: "Luxury Brown Oxford Shoes",
      price: 14000,
      originalPrice: 15000,
      image: "https://i.pinimg.com/736x/4e/b4/70/4eb47033e21378eb086b0747e3d82cb3.jpg",
      rating: 4.9,
      reviews: 203
    },
    {
      id: 22,
      name: "Premium Black Patent Shoes",
      price: 14000,
      originalPrice: 15000,
      image: "https://i.pinimg.com/1200x/7c/cd/84/7ccd845aa01009f2ee3580870fcfcafd.jpg",
      rating: 4.9,
      reviews: 167
    },
    {
      id: 23,
      name: "Classic Brown Wingtip Shoes",
      price: 12000,
      originalPrice: 14000,
      image: "https://i.pinimg.com/736x/f1/98/6c/f1986c8fe36dc001ba90c975ae55a4ed.jpg",
      rating: 4.8,
      reviews: 145
    },
    {
      id: 24,
      name: "Elegant Black Derby Shoes",
      price: 12000,
      originalPrice: 14000,
      image: "https://i.pinimg.com/736x/ad/70/fb/ad70fb44695efcc5a13b9e22bc60dc44.jpg",
      rating: 4.8,
      reviews: 134
    },
    {
      id: 25,
      name: "Modern Tan Oxford Shoes",
      price: 11000,
      originalPrice: 13000,
      image: "https://i.pinimg.com/736x/0d/26/c4/0d26c4028bb8258ee0d2b983af93e2af.jpg",
      rating: 4.7,
      reviews: 156
    },
    {
      id: 26,
      name: "Luxury Black Derby Shoes",
      price: 15000,
      originalPrice: 15000,
      image: "https://i.pinimg.com/1200x/3c/43/91/3c43913e03a4149d22acfba11a02ee90.jpg",
      rating: 4.9,
      reviews: 189
    },
    {
      id: 27,
      name: "Premium Brown Loafers",
      price: 13000,
      originalPrice: 15000,
      image: "https://i.pinimg.com/736x/b8/67/9b/b8679b1a2ec9445d70d1aeae6c9a5c89.jpg",
      rating: 4.8,
      reviews: 178
    },
    {
      id: 28,
      name: "Classic Black Oxford Shoes",
      price: 14000,
      originalPrice: 15000,
      image: "https://i.pinimg.com/1200x/8b/ec/73/8bec73af9c76694f1dc8c2dfcb693423.jpg",
      rating: 4.9,
      reviews: 198
    },
    {
      id: 29,
      name: "Sophisticated Brown Derby Shoes",
      price: 12000,
      originalPrice: 14000,
      image: "https://i.pinimg.com/736x/4c/3f/2f/4c3f2f643c18de12d0eec1d0a3081d74.jpg",
      rating: 4.8,
      reviews: 167
    },
    {
      id: 30,
      name: "Elegant Navy Loafer Shoes",
      price: 11000,
      originalPrice: 13000,
      image: "https://i.pinimg.com/736x/01/72/b5/0172b538a8b77400424af9d6e4fe8c0b.jpg",
      rating: 4.7,
      reviews: 145
    },
    {
      id: 31,
      name: "Premium Black Brogue Shoes",
      price: 15000,
      originalPrice: 15000,
      image: "https://i.pinimg.com/1200x/2a/d4/72/2ad472912dabe5c27f38c9421efd7634.jpg",
      rating: 4.9,
      reviews: 212
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Premium Footwear</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete your look with our handcrafted leather shoes
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {shoes.map((shoe, index) => (
            <motion.div
              key={shoe.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
            >
              <img
                src={shoe.image}
                alt={shoe.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{shoe.name}</h3>
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(shoe.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">({shoe.reviews})</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-gray-900">KSh {shoe.price.toLocaleString()}</span>
                    {shoe.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">KSh {shoe.originalPrice.toLocaleString()}</span>
                    )}
                  </div>
                </div>
                <Button variant="primary" size="sm" className="w-full">
                  Add to Cart
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shoes;