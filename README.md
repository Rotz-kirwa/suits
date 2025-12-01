# ÉLITE - Premium Suit Store

A modern, fully responsive ecommerce web application for a premium suit store built with React, Vite, and Tailwind CSS.

## 🌟 Features

### Core Functionality
- **Product Catalog**: Browse premium suits with advanced filtering and sorting
- **Product Details**: Detailed product pages with image carousels and size selection
- **Shopping Cart**: Add, remove, and manage items with real-time updates
- **Checkout Flow**: Multi-step checkout process with form validation
- **Responsive Design**: Mobile-first approach with elegant desktop layouts

### Technical Features
- **React 19**: Latest React with functional components and hooks
- **React Router**: Client-side routing for seamless navigation
- **Context API**: Global state management for cart functionality
- **Framer Motion**: Professional animations and micro-interactions
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Lucide React**: Beautiful, customizable icons

### Design & UX
- **Luxury Aesthetic**: Clean, minimalistic design with premium feel
- **Color Palette**: Black, white, charcoal, and gold accents
- **Typography**: Inter font for modern, readable text
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **Performance**: Optimized images and lazy loading

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd suit-store
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx          # Navigation header with cart indicator
│   │   └── Footer.jsx          # Site footer with links and info
│   └── ui/
│       ├── Button.jsx          # Reusable button component
│       └── ProductCard.jsx     # Product display card
├── context/
│   └── CartContext.jsx         # Global cart state management
├── data/
│   └── products.js             # Mock product data and filters
├── pages/
│   ├── Home.jsx               # Landing page with hero and features
│   ├── Products.jsx           # Product listing with filters
│   ├── ProductDetail.jsx      # Individual product page
│   ├── Cart.jsx               # Shopping cart page
│   └── Checkout.jsx           # Multi-step checkout process
├── App.jsx                    # Main app component with routing
├── main.jsx                   # React app entry point
└── index.css                  # Global styles and Tailwind imports
```

## 🎨 Design System

### Colors
- **Primary**: Black (#000000)
- **Secondary**: White (#FFFFFF)
- **Accent**: Gold (#F59E0B)
- **Neutral**: Charcoal (#374151)

### Typography
- **Font Family**: Inter
- **Headings**: Bold weights (600-800)
- **Body**: Regular weight (400)
- **Captions**: Medium weight (500)

### Components
- **Buttons**: Multiple variants (primary, secondary, outline, gold)
- **Cards**: Hover effects with subtle shadows
- **Forms**: Clean inputs with focus states
- **Navigation**: Sticky header with mobile menu

## 🛒 Cart Functionality

The cart system uses React Context for global state management:

- **Add to Cart**: Products with size selection
- **Update Quantity**: Increase/decrease item quantities
- **Remove Items**: Individual item removal
- **Clear Cart**: Empty entire cart
- **Persistent State**: Cart persists during session
- **Real-time Updates**: Instant UI updates across components

## 📱 Responsive Design

### Breakpoints
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### Mobile Features
- Hamburger menu navigation
- Touch-friendly buttons and interactions
- Optimized image sizes
- Simplified layouts for small screens

## ♿ Accessibility

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Screen reader support for interactive elements
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Visible focus indicators
- **Color Contrast**: WCAG AA compliant color ratios
- **Reduced Motion**: Respects user motion preferences

## 🔧 Customization

### Adding New Products
Edit `src/data/products.js` to add new products:

```javascript
{
  id: 7,
  name: "New Suit Name",
  price: 1299,
  category: "business",
  color: "navy",
  sizes: ["38", "40", "42"],
  images: ["image1.jpg", "image2.jpg"],
  description: "Product description...",
  features: ["Feature 1", "Feature 2"],
  inStock: true,
  rating: 4.8,
  reviews: 124
}
```

### Styling Customization
Modify `tailwind.config.js` for theme customization:

```javascript
theme: {
  extend: {
    colors: {
      brand: {
        primary: '#your-color',
        secondary: '#your-color'
      }
    }
  }
}
```

## 📦 Dependencies

### Core Dependencies
- **react**: ^19.2.0
- **react-dom**: ^19.2.0
- **react-router-dom**: ^6.x
- **framer-motion**: ^11.x
- **lucide-react**: ^0.x

### Development Dependencies
- **vite**: ^7.2.4
- **tailwindcss**: ^3.x
- **eslint**: ^9.x
- **postcss**: ^8.x
- **autoprefixer**: ^10.x

## 🚀 Performance Optimizations

- **Code Splitting**: Automatic route-based code splitting
- **Image Optimization**: Responsive images with proper sizing
- **Lazy Loading**: Components and images loaded on demand
- **Bundle Analysis**: Optimized build output
- **Caching**: Browser caching for static assets

## 🔮 Future Enhancements

- **User Authentication**: Login/register functionality
- **Wishlist**: Save favorite products
- **Product Reviews**: Customer review system
- **Search**: Advanced product search
- **Payment Integration**: Real payment processing
- **Inventory Management**: Stock tracking
- **Admin Panel**: Product management interface

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support and questions, please contact:
- Email: support@elitesuits.com
- Website: https://elitesuits.com

---

Built with ❤️ using React, Vite, and Tailwind CSS