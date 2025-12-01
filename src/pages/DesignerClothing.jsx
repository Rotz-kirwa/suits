import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Button from '../components/ui/Button';

const DesignerClothing = () => {
  const clothing = [
    {
      id: 1,
      name: "Italian Cotton White Dress Shirt",
      price: 24570,
      originalPrice: 29770,
      image: "https://i.pinimg.com/1200x/24/24/11/242411b6ecac495575979eeccbfd21f0.jpg",
      rating: 4.9,
      reviews: 234,
      category: "Indian",
      gender: "men",
      description: "Italian cotton with mother-of-pearl buttons"
    },
    {
      id: 2,
      name: "Tailored Navy Wool Suit Jacket",
      price: 77870,
      originalPrice: 90870,
      image: "https://i.pinimg.com/736x/34/48/40/34484022fd4ddd488a7af68dfc0a0206.jpg",
      rating: 4.8,
      reviews: 156,
      category: "Arabic",
      gender: "men",
      description: "Wool blend with silk lining"
    },
    {
      id: 3,
      name: "Navy & White Striped Polo Shirt",
      price: 19370,
      originalPrice: 23270,
      image: "https://i.pinimg.com/736x/d4/7e/6b/d47e6b8d100f5b2e0ca5d7fb9e33d757.jpg",
      rating: 4.7,
      reviews: 189,
      category: "African",
      gender: "men",
      description: "Pima cotton with contrast details"
    },
    {
      id: 4,
      name: "Black French-Cuff Formal Shirt",
      price: 25870,
      originalPrice: 32370,
      image: "https://i.pinimg.com/1200x/c3/a0/6d/c3a06d042536f4e8e29947f4f04664ac.jpg",
      rating: 4.9,
      reviews: 267,
      category: "Indian",
      gender: "men",
      description: "Egyptian cotton with French cuffs"
    },
    {
      id: 5,
      name: "Light Grey Cashmere Crewneck Sweater",
      price: 51870,
      originalPrice: 62270,
      image: "https://i.pinimg.com/736x/9f/30/38/9f303833a82c43a3713c7957e46d1bfe.jpg",
      rating: 4.8,
      reviews: 145,
      category: "Enigmatic",
      gender: "men",
      description: "100% cashmere with ribbed details"
    },
    {
      id: 6,
      name: "Black Merino Turtleneck Sweater",
      price: 29770,
      originalPrice: 36270,
      image: "https://i.pinimg.com/736x/21/50/aa/2150aa21f7268f2476b1b2577de85379.jpg",
      rating: 4.7,
      reviews: 198,
      category: "Enigmatic",
      description: "Merino wool blend"
    },
    {
      id: 7,
      name: "Sand Alpaca Cardigan",
      price: 45370,
      originalPrice: 54470,
      image: "https://i.pinimg.com/736x/1f/2d/88/1f2d88c80c7c2a42ad2613e25e644b6c.jpg",
      rating: 4.6,
      reviews: 123,
      category: "Enigmatic",
      description: "Alpaca wool with horn buttons"
    },
    {
      id: 8,
      name: "Charcoal Wool Suit Vest",
      price: 23270,
      originalPrice: 28470,
      image: "https://i.pinimg.com/736x/31/16/cb/3116cbf16264be1a41d4cd12211047b9.jpg",
      rating: 4.8,
      reviews: 167,
      category: "Indian",
      description: "Wool with adjustable back strap"
    },
    {
      id: 9,
      name: "Black Cashmere-Blend Overcoat",
      price: 116870,
      originalPrice: 142870,
      image: "https://i.pinimg.com/1200x/be/e4/ec/bee4ec45679a064a7e3f0d10762ea0fd.jpg",
      rating: 4.9,
      reviews: 89,
      category: "Arabic",
      description: "Cashmere blend with silk lining"
    },
    {
      id: 10,
      name: "Heather Grey Cotton Fleece Hoodie",
      price: 32370,
      originalPrice: 38870,
      image: "https://i.pinimg.com/736x/e4/71/34/e471348e712ddc21a3abd7fa719b61d5.jpg",
      rating: 4.7,
      reviews: 234,
      category: "African",
      description: "Premium cotton fleece"
    },
    {
      id: 11,
      name: "Paisley Silk Pocket Square",
      price: 10270,
      originalPrice: 12870,
      image: "https://i.pinimg.com/736x/b3/65/d1/b365d1b2a61bf55cb49eb8f4aaccf6cf.jpg",
      rating: 4.8,
      reviews: 156,
      category: "Arabic",
      description: "Hand-rolled silk with paisley pattern"
    },
    {
      id: 12,
      name: "Tan Gabardine Trench Coat with Leather Trim",
      price: 90870,
      originalPrice: 110370,
      image: "https://i.pinimg.com/1200x/64/4b/fe/644bfe429539645bb5ecf275e5ac391b.jpg",
      rating: 4.9,
      reviews: 78,
      category: "Arabic",
      description: "Gabardine cotton with leather details"
    },
    {
      id: 13,
      name: "Geometric Cashmere Scarf",
      price: 20670,
      originalPrice: 25870,
      image: "https://i.pinimg.com/736x/c6/c7/be/c6c7bea1079e0285df4187439885b5c2.jpg",
      rating: 4.6,
      reviews: 145,
      category: "Arabic",
      description: "Cashmere with geometric pattern"
    },
    {
      id: 14,
      name: "Classic Leather-Strap Swiss Wristwatch",
      price: 168870,
      originalPrice: 207870,
      image: "https://i.pinimg.com/736x/59/b8/e9/59b8e9dd71f6f44478d487f40f5442e7.jpg",
      rating: 4.9,
      reviews: 67,
      category: "Arabic",
      description: "Swiss movement with leather strap"
    },
    {
      id: 15,
      name: "Chestnut Quilted Leather Jacket",
      price: 71370,
      originalPrice: 84370,
      image: "https://i.pinimg.com/1200x/ba/e4/cc/bae4cc840cb4e478451a6861e7d69a07.jpg",
      rating: 4.8,
      reviews: 123,
      category: "Arabic",
      description: "Leather with quilted lining"
    },
    {
      id: 16,
      name: "Silk Necktie Gift Set",
      price: 16770,
      originalPrice: 20670,
      image: "https://i.pinimg.com/736x/c7/2d/37/c72d37e0aeadd5919d221a5af5d324b6.jpg",
      rating: 4.7,
      reviews: 189,
      category: "Arabic",
      description: "Silk with hand-stitched edges"
    },
    {
      id: 17,
      name: "Sterling Silver Onyx Cufflinks",
      price: 25870,
      originalPrice: 32370,
      image: "https://i.pinimg.com/736x/78/15/fd/7815fd874b2bfd9364454ebf92e38ed1.jpg",
      rating: 4.9,
      reviews: 98,
      category: "Arabic",
      description: "Sterling silver with onyx stones"
    },
    {
      id: 18,
      name: "Italian Leather Briefcase with Brass Hardware",
      price: 103870,
      originalPrice: 129870,
      image: "https://i.pinimg.com/1200x/d6/0b/ba/d60bba382c6980eaddab417203c402ff.jpg",
      rating: 4.8,
      reviews: 145,
      category: "Arabic",
      description: "Italian leather with brass hardware"
    },
    {
      id: 19,
      name: "Titanium Polarized Sunglasses",
      price: 45370,
      originalPrice: 55770,
      image: "https://i.pinimg.com/736x/c2/6e/70/c26e70564f6f49bc8a9fed815d06ab58.jpg",
      rating: 4.7,
      reviews: 167,
      category: "Arabic",
      description: "Titanium frame with polarized lenses"
    },
    {
      id: 20,
      name: "Crocodile-Embossed Leather Wallet with Gold Accents",
      price: 29770,
      originalPrice: 36270,
      image: "https://i.pinimg.com/1200x/9a/72/af/9a72affe23b4a93a0020baf3a8e4205b.jpg",
      rating: 4.8,
      reviews: 234,
      category: "Arabic",
      description: "Crocodile leather with gold accents"
    },
    {
      id: 21,
      name: "Reversible Italian Leather Belt",
      price: 24570,
      originalPrice: 29770,
      image: "https://i.pinimg.com/736x/f7/e0/6e/f7e06e70863df7d5ded9f9af8e5868ba.jpg",
      rating: 4.6,
      reviews: 156,
      category: "Arabic",
      description: "Italian leather with reversible buckle"
    },
    {
      id: 22,
      name: "Lambskin Driving Gloves with Cashmere Lining",
      price: 19370,
      originalPrice: 24570,
      image: "https://i.pinimg.com/1200x/b9/81/47/b9814703acfd4d49dacd5826ac80730e.jpg",
      rating: 4.7,
      reviews: 123,
      category: "Arabic",
      description: "Lambskin with cashmere lining"
    },
    {
      id: 23,
      name: "Felt Fedora Hat with Silk Band",
      price: 25870,
      originalPrice: 32370,
      image: "https://i.pinimg.com/1200x/93/b9/da/93b9da0cf0fc82c283f268416950da4e.jpg",
      rating: 4.8,
      reviews: 89,
      category: "Arabic",
      description: "Felt with silk band"
    },
    {
      id: 24,
      name: "Silk Adjustable Black Bow Tie",
      price: 11570,
      originalPrice: 15470,
      image: "https://i.pinimg.com/1200x/5d/da/2c/5dda2caca8aa3e5d6374f1b0db70334e.jpg",
      rating: 4.9,
      reviews: 167,
      category: "Arabic",
      description: "Silk with adjustable strap"
    },
    {
      id: 25,
      name: "Elegant Black Evening Dress",
      price: 28000,
      originalPrice: 35000,
      image: "https://i.pinimg.com/1200x/75/79/f9/7579f91bb1c5a87dc64cc2bbddae03cf.jpg",
      rating: 4.8,
      reviews: 145,
      category: "Arabic",
      gender: "women",
      description: "Sophisticated evening wear with elegant silhouette"
    },
    {
      id: 26,
      name: "Designer Floral Blouse",
      price: 15000,
      originalPrice: 18000,
      image: "https://i.pinimg.com/1200x/a2/48/73/a248732874518524f902016a42b8d219.jpg",
      rating: 4.7,
      reviews: 189,
      category: "Indian",
      gender: "women",
      description: "Delicate floral print with premium fabric"
    },
    {
      id: 27,
      name: "Luxury Silk Scarf",
      price: 12000,
      originalPrice: 15000,
      image: "https://i.pinimg.com/1200x/7c/28/26/7c282677df8a60bf2f01130eda384c1d.jpg",
      rating: 4.9,
      reviews: 234,
      category: "Enigmatic",
      gender: "women",
      description: "Pure silk with intricate patterns"
    },
    {
      id: 28,
      name: "Chic Business Blazer",
      price: 32000,
      originalPrice: 38000,
      image: "https://i.pinimg.com/1200x/80/5a/8e/805a8e6c77b9b96f2b22b69da4fc76a6.jpg",
      rating: 4.8,
      reviews: 167,
      category: "African",
      gender: "women",
      description: "Professional tailored blazer for modern women"
    },
    {
      id: 29,
      name: "Vintage Style Handbag",
      price: 25000,
      originalPrice: 30000,
      image: "https://i.pinimg.com/736x/6c/fe/bf/6cfebfe87d6c60b7bd94e614347f296f.jpg",
      rating: 4.6,
      reviews: 123,
      category: "Arabic",
      gender: "women",
      description: "Classic leather handbag with vintage charm"
    },
    {
      id: 30,
      name: "Elegant Pearl Necklace",
      price: 18000,
      originalPrice: 22000,
      image: "https://i.pinimg.com/1200x/d9/0d/13/d90d13b53db7e55a901344301fd13a1d.jpg",
      rating: 4.9,
      reviews: 198,
      category: "Enigmatic",
      gender: "women",
      description: "Cultured pearls with gold clasp"
    },
    {
      id: 31,
      name: "Designer Cocktail Dress",
      price: 35000,
      originalPrice: 42000,
      image: "https://i.pinimg.com/1200x/2d/58/8d/2d588d0ca471570829efe2b4e018dea1.jpg",
      rating: 4.8,
      reviews: 156,
      category: "Indian",
      gender: "women",
      description: "Stunning cocktail dress for special occasions"
    },
    {
      id: 32,
      name: "Luxury High Heels",
      price: 22000,
      originalPrice: 28000,
      image: "https://i.pinimg.com/736x/6c/cf/86/6ccf8649b59ce738bd50cc25af979b25.jpg",
      rating: 4.7,
      reviews: 134,
      category: "African",
      gender: "women",
      description: "Italian leather heels with comfort sole"
    },
    {
      id: 33,
      name: "Cashmere Wrap Coat",
      price: 45000,
      originalPrice: 55000,
      image: "https://i.pinimg.com/736x/82/b0/76/82b0768baa124236dd79e56bddd1a518.jpg",
      rating: 4.9,
      reviews: 89,
      category: "Arabic",
      gender: "women",
      description: "Luxurious cashmere coat with belt"
    },
    {
      id: 34,
      name: "Statement Gold Earrings",
      price: 16000,
      originalPrice: 20000,
      image: "https://i.pinimg.com/1200x/31/3d/7f/313d7faf178c22eb955fa602c87f9dc5.jpg",
      rating: 4.8,
      reviews: 167,
      category: "Enigmatic",
      gender: "women",
      description: "Bold gold earrings with geometric design"
    },
    {
      id: 35,
      name: "Silk Evening Gown",
      price: 55000,
      originalPrice: 65000,
      image: "https://i.pinimg.com/736x/eb/5e/10/eb5e1057feffa4764d4230fdfe7b5be2.jpg",
      rating: 4.9,
      reviews: 78,
      category: "Indian",
      gender: "women",
      description: "Flowing silk gown for formal events"
    },
    {
      id: 36,
      name: "Designer Clutch Purse",
      price: 14000,
      originalPrice: 18000,
      image: "https://i.pinimg.com/736x/f0/49/38/f04938bab1d7dc46d0489df7597c346e.jpg",
      rating: 4.7,
      reviews: 145,
      category: "African",
      gender: "women",
      description: "Elegant clutch with beaded details"
    }
  ];

  const categories = ["All", "Indian", "African", "Arabic", "Enigmatic"];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Designer Clothing</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Curated collection of premium shirts, accessories, and essentials
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {/* Gender Dropdown */}
          <select className="px-6 py-2 border border-gray-300 rounded-full hover:border-black focus:outline-none focus:ring-2 focus:ring-black">
            <option value="all">All Genders</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
          </select>
          
          {/* Category Filter */}
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 border border-gray-300 rounded-full hover:border-black hover:bg-gray-50 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clothing.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-black text-white px-2 py-1 text-xs rounded">
                  {item.category}
                </div>
                {item.originalPrice && (
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 text-xs rounded">
                    Sale
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(item.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">({item.reviews})</span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-gray-900">KSh {item.price.toLocaleString()}</span>
                    {item.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">KSh {item.originalPrice.toLocaleString()}</span>
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

        {/* Newsletter Section */}
        <div className="mt-20 bg-black text-white rounded-lg p-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Be the first to know about new arrivals, exclusive collections, and special offers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md text-black"
              />
              <Button variant="gold" size="md">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DesignerClothing;