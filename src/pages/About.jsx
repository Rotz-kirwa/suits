import { motion } from 'framer-motion';
import { Award, Shield, Star, Users, CheckCircle, Trophy } from 'lucide-react';

const About = () => {
  const services = [
    {
      icon: <Award className="w-8 h-8 text-amber-600" />,
      title: "Premium Suits",
      description: "Expertly crafted suits for men, women, and children with modern tailoring and timeless designs."
    },
    {
      icon: <Shield className="w-8 h-8 text-amber-600" />,
      title: "Designer Clothing",
      description: "Curated collection of premium shirts, accessories, and luxury items from renowned designers."
    },
    {
      icon: <Star className="w-8 h-8 text-amber-600" />,
      title: "Premium Footwear",
      description: "Handcrafted leather shoes including Oxford, Derby, Loafers, and Brogue styles."
    },
    {
      icon: <Users className="w-8 h-8 text-amber-600" />,
      title: "Custom Tailoring",
      description: "Professional tailoring services to ensure perfect fit and personalized styling."
    }
  ];

  const certifications = [
    {
      icon: <Trophy className="w-12 h-12 text-amber-600" />,
      title: "ISO 9001:2015 Certified",
      description: "Quality Management System certification ensuring consistent product quality."
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-green-600" />,
      title: "Customer Satisfaction Award",
      description: "98% customer satisfaction rate with over 10,000+ happy customers served."
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Ethical Manufacturing",
      description: "Certified ethical manufacturing practices and sustainable sourcing standards."
    },
    {
      icon: <Award className="w-12 h-12 text-purple-600" />,
      title: "Premium Quality Assurance",
      description: "Every product undergoes rigorous quality checks before reaching our customers."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Happy Customers" },
    { number: "15+", label: "Years Experience" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "500+", label: "Products Available" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* About Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About ÉLITE</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              ÉLITE is your premier destination for luxury fashion and premium quality clothing. We specialize in 
              expertly crafted suits, designer clothing, and premium footwear that combine timeless elegance with 
              modern sophistication. Our commitment to excellence ensures every customer receives products that 
              exceed expectations in quality, style, and craftsmanship.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-amber-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Products & Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of premium fashion products and professional services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications & Quality Assurance</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence is backed by industry certifications and customer trust
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-8 text-center hover:bg-gray-100 transition-colors"
              >
                <div className="flex justify-center mb-4">{cert.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{cert.title}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Customer Trust Section */}
      <div className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold mb-6">Trusted by Thousands</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join over 10,000 satisfied customers who trust ÉLITE for their premium fashion needs. 
              Experience the difference that quality, craftsmanship, and exceptional service make.
            </p>
            <div className="flex justify-center items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-amber-400 fill-current" />
              ))}
              <span className="text-2xl font-bold text-amber-400 ml-4">4.9/5</span>
              <span className="text-gray-300 ml-2">Average Customer Rating</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;