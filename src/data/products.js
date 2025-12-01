// Mock product data for the premium suit store
export const products = [
  {
    id: 1,
    name: "Classic Navy Business Suit",
    price: 15000,
    originalPrice: 18000,
    category: "business",
    gender: "men",
    color: "navy",
    sizes: ["38", "40", "42", "44", "46"],
    images: [
      "https://i.pinimg.com/1200x/38/48/24/3848240a1d5c165463e96e9169ea01aa.jpg",
      "https://i.pinimg.com/1200x/04/b8/37/04b837a10112708d75212a54d1dba44c.jpg"
    ],
    description: "Crafted from premium Italian wool, this executive suit features a modern slim fit with peak lapels. Perfect for boardroom meetings and formal occasions.",
    features: ["100% Italian Wool", "Slim Fit", "Peak Lapels", "Dry Clean Only"],
    inStock: true,
    rating: 4.8,
    reviews: 124
  },
  {
    id: 2,
    name: "Charcoal Grey Formal Suit",
    price: 22000,
    originalPrice: 26000,
    category: "formal",
    gender: "men",
    color: "charcoal",
    sizes: ["36", "38", "40", "42", "44"],
    images: [
      "https://i.pinimg.com/1200x/3e/03/39/3e0339e7c13c5487d388668db8168ea1.jpg",
      "https://i.pinimg.com/1200x/d5/b7/8f/d5b78ff3c6be61594e028ca2d5e6fe52.jpg"
    ],
    description: "Elegant charcoal grey suit with satin lapels and matching accessories. The epitome of formal sophistication.",
    features: ["Satin Lapels", "Matching Accessories", "Regular Fit", "Premium Fabric"],
    inStock: true,
    rating: 4.9,
    reviews: 89
  },
  {
    id: 3,
    name: "Striped Casual Suit",
    price: 12000,
    originalPrice: 15000,
    category: "casual",
    gender: "men",
    color: "blue",
    sizes: ["38", "40", "42", "44", "46", "48"],
    images: [
      "https://i.pinimg.com/736x/73/4d/90/734d90bc09b81b80efde48d52f2d6278.jpg",
      "https://i.pinimg.com/736x/dc/d8/ac/dcd8ac9271e3b260510716db86119a98.jpg"
    ],
    description: "Stylish striped suit with a contemporary cut. Perfect for casual business meetings or social events.",
    features: ["Contemporary Cut", "Versatile Design", "Quality Construction", "Easy Care"],
    inStock: true,
    rating: 4.7,
    reviews: 156
  },
  {
    id: 4,
    name: "Black Tuxedo Suit",
    price: 11000,
    originalPrice: 14000,
    category: "formal",
    gender: "men",
    color: "black",
    sizes: ["36", "38", "40", "42", "44"],
    images: [
      "https://i.pinimg.com/1200x/8c/c0/00/8cc000920652e994999afde8f4bb4336.jpg"
    ],
    description: "Classic black tuxedo suit perfect for formal events and special occasions.",
    features: ["Lightweight Fabric", "Breathable", "Unlined", "Summer Weight"],
    inStock: true,
    rating: 4.6,
    reviews: 78
  },
  {
    id: 5,
    name: "Brown Vintage Suit",
    price: 20000,
    originalPrice: 24000,
    category: "casual",
    gender: "men",
    color: "brown",
    sizes: ["38", "40", "42", "44", "46"],
    images: [
      "https://i.pinimg.com/1200x/a3/b9/b5/a3b9b558b1f76631681ae628f781b508.jpg"
    ],
    description: "Vintage brown suit with classic styling. Features premium fabric and impeccable tailoring.",
    features: ["Premium Fabric", "Vintage Style", "Custom Tailoring", "Luxury Finish"],
    inStock: true,
    rating: 4.9,
    reviews: 67
  },
  {
    id: 6,
    name: "Light Blue Summer Suit",
    price: 16000,
    originalPrice: 19000,
    category: "casual",
    gender: "men",
    color: "blue",
    sizes: ["40", "42", "44", "46"],
    images: [
      "https://i.pinimg.com/1200x/90/6c/ad/906cad86df58550ef3dd2c894714cbfa.jpg"
    ],
    description: "Light blue summer suit perfect for warm weather occasions and outdoor events.",
    features: ["Lightweight", "Breathable", "Traditional Styling", "Modern Comfort"],
    inStock: false,
    rating: 4.8,
    reviews: 92
  },
  {
    id: 7,
    name: "Dark Navy Formal Suit",
    price: 18000,
    originalPrice: 22000,
    category: "formal",
    gender: "men",
    color: "navy",
    sizes: ["38", "40", "42", "44", "46"],
    images: [
      "https://i.pinimg.com/1200x/8d/62/b0/8d62b05b9d98d45ff6ea6dfec6894cde.jpg"
    ],
    description: "Dark navy formal suit with premium construction and elegant finish.",
    features: ["Premium Construction", "Elegant Finish", "Formal Ready", "Quality Fabric"],
    inStock: true,
    rating: 4.8,
    reviews: 145
  },
  {
    id: 8,
    name: "Grey Business Suit",
    price: 17000,
    originalPrice: 21000,
    category: "business",
    gender: "men",
    color: "grey",
    sizes: ["36", "38", "40", "42", "44"],
    images: [
      "https://i.pinimg.com/1200x/8d/62/b0/8d62b05b9d98d45ff6ea6dfec6894cde.jpg"
    ],
    description: "Professional grey business suit designed for the modern executive.",
    features: ["Modern Cut", "Professional Look", "Quality Materials", "Comfortable Fit"],
    inStock: true,
    rating: 4.7,
    reviews: 123
  },
  {
    id: 9,
    name: "Burgundy Wedding Suit",
    price: 25000,
    originalPrice: 30000,
    category: "formal",
    gender: "men",
    color: "burgundy",
    sizes: ["38", "40", "42", "44", "46"],
    images: [
      "https://i.pinimg.com/1200x/8d/62/b0/8d62b05b9d98d45ff6ea6dfec6894cde.jpg"
    ],
    description: "Elegant burgundy suit perfect for weddings and special celebrations.",
    features: ["Wedding Ready", "Elegant Design", "Premium Fabric", "Special Occasion"],
    inStock: true,
    rating: 4.9,
    reviews: 98
  },
  {
    id: 10,
    name: "Classic Black Business Suit",
    price: 19000,
    originalPrice: 23000,
    category: "business",
    gender: "men",
    color: "black",
    sizes: ["38", "40", "42", "44", "46", "48"],
    images: [
      "https://i.pinimg.com/1200x/8d/62/b0/8d62b05b9d98d45ff6ea6dfec6894cde.jpg"
    ],
    description: "Classic black business suit with timeless appeal and modern construction.",
    features: ["Timeless Design", "Modern Construction", "Business Ready", "Versatile"],
    inStock: true,
    rating: 4.8,
    reviews: 167
  },
  {
    id: 11,
    name: "Premium Navy Pinstripe Suit",
    price: 21000,
    originalPrice: 25000,
    category: "business",
    gender: "men",
    color: "navy",
    sizes: ["38", "40", "42", "44", "46"],
    images: [
      "https://i.pinimg.com/736x/49/7a/00/497a00b1b09cdaca29b8d36ec6694311.jpg"
    ],
    description: "Sophisticated navy pinstripe suit with premium construction and elegant finish.",
    features: ["Pinstripe Design", "Premium Construction", "Business Ready", "Quality Fabric"],
    inStock: true,
    rating: 4.8,
    reviews: 134
  },
  {
    id: 12,
    name: "Modern Charcoal Executive Suit",
    price: 23000,
    originalPrice: 28000,
    category: "business",
    gender: "men",
    color: "charcoal",
    sizes: ["36", "38", "40", "42", "44"],
    images: [
      "https://i.pinimg.com/1200x/4e/7b/c4/4e7bc40492e51dc5001438e649676ce5.jpg"
    ],
    description: "Modern charcoal executive suit designed for the contemporary professional.",
    features: ["Executive Style", "Modern Cut", "Professional Look", "Premium Materials"],
    inStock: true,
    rating: 4.9,
    reviews: 156
  },
  {
    id: 13,
    name: "Classic Black Formal Suit",
    price: 20000,
    originalPrice: 24000,
    category: "formal",
    gender: "men",
    color: "black",
    sizes: ["38", "40", "42", "44", "46"],
    images: [
      "https://i.pinimg.com/1200x/42/84/de/4284de3d12807c84d10e38642372e210.jpg"
    ],
    description: "Classic black formal suit perfect for special occasions and formal events.",
    features: ["Formal Ready", "Classic Design", "Special Occasion", "Elegant Finish"],
    inStock: true,
    rating: 4.8,
    reviews: 98
  },
  {
    id: 14,
    name: "Sophisticated Grey Business Suit",
    price: 18000,
    originalPrice: 22000,
    category: "business",
    gender: "men",
    color: "grey",
    sizes: ["38", "40", "42", "44", "46"],
    images: [
      "https://i.pinimg.com/736x/9b/5c/fe/9b5cfea274c7e91907d7d550a8151d00.jpg"
    ],
    description: "Sophisticated grey business suit with contemporary styling and premium fabric.",
    features: ["Contemporary Styling", "Premium Fabric", "Business Professional", "Modern Fit"],
    inStock: true,
    rating: 4.7,
    reviews: 112
  },
  {
    id: 15,
    name: "Elegant Navy Wedding Suit",
    price: 24000,
    originalPrice: 29000,
    category: "formal",
    gender: "men",
    color: "navy",
    sizes: ["36", "38", "40", "42", "44"],
    images: [
      "https://i.pinimg.com/1200x/15/79/c0/1579c01154bdb1f7f35fd404b4199b3d.jpg"
    ],
    description: "Elegant navy wedding suit designed for the most special occasions.",
    features: ["Wedding Ready", "Elegant Design", "Special Occasion", "Premium Quality"],
    inStock: true,
    rating: 4.9,
    reviews: 87
  },
  {
    id: 16,
    name: "Premium Black Tuxedo",
    price: 26000,
    originalPrice: 30000,
    category: "formal",
    gender: "men",
    color: "black",
    sizes: ["38", "40", "42", "44", "46"],
    images: [
      "https://i.pinimg.com/1200x/34/1e/89/341e8901580034a943cb75feeb96a3dc.jpg"
    ],
    description: "Premium black tuxedo with luxury finish and impeccable tailoring.",
    features: ["Luxury Finish", "Impeccable Tailoring", "Formal Events", "Premium Quality"],
    inStock: true,
    rating: 4.9,
    reviews: 145
  },
  {
    id: 17,
    name: "Modern Blue Business Suit",
    price: 19000,
    originalPrice: 23000,
    category: "business",
    gender: "men",
    color: "blue",
    sizes: ["38", "40", "42", "44", "46"],
    images: [
      "https://i.pinimg.com/1200x/f4/09/56/f409561cfad9839b8d3571910d859a7f.jpg"
    ],
    description: "Modern blue business suit with contemporary cut and professional styling.",
    features: ["Contemporary Cut", "Professional Styling", "Modern Design", "Quality Construction"],
    inStock: true,
    rating: 4.8,
    reviews: 123
  },
  {
    id: 18,
    name: "Classic Charcoal Formal Suit",
    price: 22000,
    originalPrice: 27000,
    category: "formal",
    gender: "men",
    color: "charcoal",
    sizes: ["36", "38", "40", "42", "44"],
    images: [
      "https://i.pinimg.com/1200x/32/5e/ff/325effc2780d6ff9bfee80d0a1d29149.jpg"
    ],
    description: "Classic charcoal formal suit with traditional styling and modern comfort.",
    features: ["Traditional Styling", "Modern Comfort", "Formal Ready", "Classic Design"],
    inStock: true,
    rating: 4.8,
    reviews: 167
  },
  {
    id: 19,
    name: "Sophisticated Navy Executive Suit",
    price: 25000,
    originalPrice: 30000,
    category: "business",
    gender: "men",
    color: "navy",
    sizes: ["38", "40", "42", "44", "46"],
    images: [
      "https://i.pinimg.com/736x/c2/68/f2/c268f224e1d41d0e03a4d933a58da92e.jpg"
    ],
    description: "Sophisticated navy executive suit for the discerning professional.",
    features: ["Executive Style", "Sophisticated Design", "Professional Grade", "Premium Materials"],
    inStock: true,
    rating: 4.9,
    reviews: 189
  },
  {
    id: 20,
    name: "Premium Grey Wedding Suit",
    price: 27000,
    originalPrice: 30000,
    category: "formal",
    gender: "men",
    color: "grey",
    sizes: ["38", "40", "42", "44", "46"],
    images: [
      "https://i.pinimg.com/1200x/41/0e/cf/410ecfd4e9a03feac028fe321ea74e5b.jpg"
    ],
    description: "Premium grey wedding suit with luxury details and exceptional craftsmanship.",
    features: ["Luxury Details", "Exceptional Craftsmanship", "Wedding Ready", "Premium Quality"],
    inStock: true,
    rating: 4.9,
    reviews: 156
  },
  {
    id: 21,
    name: "Classic Black Business Suit",
    price: 21000,
    originalPrice: 26000,
    category: "business",
    gender: "men",
    color: "black",
    sizes: ["36", "38", "40", "42", "44"],
    images: [
      "https://i.pinimg.com/736x/88/f7/94/88f794f41fa29a5ed085aac92e8a4700.jpg"
    ],
    description: "Classic black business suit with timeless appeal and professional finish.",
    features: ["Timeless Appeal", "Professional Finish", "Business Ready", "Classic Style"],
    inStock: true,
    rating: 4.8,
    reviews: 134
  },
  {
    id: 22,
    name: "Modern Navy Formal Suit",
    price: 23000,
    originalPrice: 28000,
    category: "formal",
    gender: "men",
    color: "navy",
    sizes: ["38", "40", "42", "44", "46"],
    images: [
      "https://i.pinimg.com/736x/59/5b/b1/595bb1fa2eb0ed354824bfad1b9f4d05.jpg"
    ],
    description: "Modern navy formal suit with contemporary design and premium construction.",
    features: ["Contemporary Design", "Premium Construction", "Formal Events", "Modern Style"],
    inStock: true,
    rating: 4.8,
    reviews: 178
  },
  {
    id: 23,
    name: "Professional Navy Women's Suit",
    price: 14000,
    originalPrice: 17000,
    category: "business",
    gender: "women",
    color: "navy",
    sizes: ["36", "38", "40", "42", "44"],
    images: [
      "https://plus.unsplash.com/premium_photo-1681484101396-efc86fa953b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW4lMjBzdWl0c3xlbnwwfHwwfHx8MA%3D%3D"
    ],
    description: "Professional navy women's suit with modern tailoring and elegant finish.",
    features: ["Modern Tailoring", "Professional Look", "Quality Fabric", "Elegant Finish"],
    inStock: true,
    rating: 4.8,
    reviews: 145
  },
  {
    id: 26,
    name: "Classic Black Women's Business Suit",
    price: 16000,
    originalPrice: 19000,
    category: "business",
    gender: "women",
    color: "black",
    sizes: ["38", "40", "42", "44", "46"],
    images: [
      "https://i.pinimg.com/736x/d2/5a/a8/d25aa8a89fd0de4995593cce2e517c4e.jpg"
    ],
    description: "Classic black business suit designed for the professional woman.",
    features: ["Professional Design", "Classic Style", "Business Ready", "Quality Construction"],
    inStock: true,
    rating: 4.7,
    reviews: 123
  },
  {
    id: 27,
    name: "Elegant Grey Women's Formal Suit",
    price: 18000,
    originalPrice: 22000,
    category: "formal",
    gender: "women",
    color: "grey",
    sizes: ["36", "38", "40", "42", "44"],
    images: [
      "https://i.pinimg.com/736x/a4/11/a5/a411a5d256480788be0b8847f26c5358.jpg"
    ],
    description: "Elegant grey formal suit perfect for special occasions and formal events.",
    features: ["Formal Ready", "Elegant Design", "Special Occasion", "Premium Quality"],
    inStock: true,
    rating: 4.9,
    reviews: 98
  },
  {
    id: 28,
    name: "Modern Navy Women's Executive Suit",
    price: 20000,
    originalPrice: 24000,
    category: "business",
    gender: "women",
    color: "navy",
    sizes: ["38", "40", "42", "44", "46"],
    images: [
      "https://i.pinimg.com/736x/e6/19/a9/e619a9cc3ecc022eb13bf0f0135b5667.jpg"
    ],
    description: "Modern navy executive suit for the contemporary professional woman.",
    features: ["Executive Style", "Modern Design", "Professional Grade", "Contemporary Cut"],
    inStock: true,
    rating: 4.8,
    reviews: 167
  },
  {
    id: 29,
    name: "Sophisticated Black Women's Suit",
    price: 22000,
    originalPrice: 26000,
    category: "business",
    gender: "women",
    color: "black",
    sizes: ["36", "38", "40", "42", "44"],
    images: [
      "https://i.pinimg.com/736x/ed/79/8c/ed798c0f4c08c461b37a6ed9178e4526.jpg"
    ],
    description: "Sophisticated black suit with premium construction and elegant styling.",
    features: ["Premium Construction", "Elegant Styling", "Sophisticated Design", "Quality Materials"],
    inStock: true,
    rating: 4.9,
    reviews: 189
  },
  {
    id: 30,
    name: "Premium Grey Women's Wedding Suit",
    price: 24000,
    originalPrice: 29000,
    category: "formal",
    gender: "women",
    color: "grey",
    sizes: ["38", "40", "42", "44", "46"],
    images: [
      "https://i.pinimg.com/1200x/98/d4/df/98d4df3e149c0901a71a76cb263d1506.jpg"
    ],
    description: "Premium grey wedding suit with luxury details and exceptional craftsmanship.",
    features: ["Luxury Details", "Exceptional Craftsmanship", "Wedding Ready", "Premium Quality"],
    inStock: true,
    rating: 4.9,
    reviews: 156
  },
  {
    id: 31,
    name: "Classic Navy Women's Formal Suit",
    price: 19000,
    originalPrice: 23000,
    category: "formal",
    gender: "women",
    color: "navy",
    sizes: ["36", "38", "40", "42", "44"],
    images: [
      "https://i.pinimg.com/736x/f9/aa/3d/f9aa3d4469c83bf40eddcae4b5f2ecde.jpg"
    ],
    description: "Classic navy formal suit with traditional styling and modern comfort.",
    features: ["Traditional Styling", "Modern Comfort", "Formal Ready", "Classic Design"],
    inStock: true,
    rating: 4.8,
    reviews: 134
  },
  {
    id: 32,
    name: "Professional Black Women's Suit",
    price: 17000,
    originalPrice: 21000,
    category: "business",
    gender: "women",
    color: "black",
    sizes: ["38", "40", "42", "44", "46"],
    images: [
      "https://i.pinimg.com/736x/00/84/84/008484edb063c3b7da6e1305d39fd437.jpg"
    ],
    description: "Professional black suit with contemporary design and premium construction.",
    features: ["Contemporary Design", "Premium Construction", "Professional Grade", "Modern Style"],
    inStock: true,
    rating: 4.8,
    reviews: 178
  },
  {
    id: 33,
    name: "Elegant Charcoal Women's Suit",
    price: 21000,
    originalPrice: 25000,
    category: "business",
    gender: "women",
    color: "charcoal",
    sizes: ["36", "38", "40", "42", "44"],
    images: [
      "https://i.pinimg.com/736x/ae/7a/8e/ae7a8ec3d1fd28aa343210d9e998ca95.jpg"
    ],
    description: "Elegant charcoal suit with sophisticated design and professional finish.",
    features: ["Sophisticated Design", "Professional Finish", "Elegant Style", "Quality Fabric"],
    inStock: true,
    rating: 4.7,
    reviews: 145
  },
  {
    id: 34,
    name: "Modern Grey Women's Business Suit",
    price: 23000,
    originalPrice: 28000,
    category: "business",
    gender: "women",
    color: "grey",
    sizes: ["38", "40", "42", "44", "46"],
    images: [
      "https://i.pinimg.com/1200x/0b/6f/36/0b6f366d2cc89931ebd82a90d05d5224.jpg"
    ],
    description: "Modern grey business suit with executive styling and premium materials.",
    features: ["Executive Styling", "Premium Materials", "Modern Design", "Business Professional"],
    inStock: true,
    rating: 4.9,
    reviews: 167
  },
  {
    id: 35,
    name: "Classic Black Women's Executive Suit",
    price: 25000,
    originalPrice: 30000,
    category: "business",
    gender: "women",
    color: "black",
    sizes: ["36", "38", "40", "42", "44"],
    images: [
      "https://i.pinimg.com/1200x/01/2a/53/012a537f6a7c5f98b19d4ca7d33bdf0d.jpg"
    ],
    description: "Classic black executive suit for the discerning professional woman.",
    features: ["Executive Grade", "Classic Design", "Professional Excellence", "Premium Quality"],
    inStock: true,
    rating: 4.9,
    reviews: 198
  },
  {
    id: 36,
    name: "Sophisticated Navy Women's Suit",
    price: 18000,
    originalPrice: 22000,
    category: "business",
    gender: "women",
    color: "navy",
    sizes: ["38", "40", "42", "44", "46"],
    images: [
      "https://i.pinimg.com/736x/46/3c/43/463c4349ffff141ff4b08b4fe263ebff.jpg"
    ],
    description: "Sophisticated navy suit with contemporary cut and professional styling.",
    features: ["Contemporary Cut", "Professional Styling", "Sophisticated Design", "Quality Construction"],
    inStock: true,
    rating: 4.8,
    reviews: 156
  },
  {
    id: 37,
    name: "Premium Black Women's Formal Suit",
    price: 26000,
    originalPrice: 30000,
    category: "formal",
    gender: "women",
    color: "black",
    sizes: ["36", "38", "40", "42", "44"],
    images: [
      "https://i.pinimg.com/1200x/5e/88/75/5e88753f2ce314ec985f92c981469ab8.jpg"
    ],
    description: "Premium black formal suit with luxury finish and impeccable tailoring.",
    features: ["Luxury Finish", "Impeccable Tailoring", "Formal Events", "Premium Quality"],
    inStock: true,
    rating: 4.9,
    reviews: 187
  },
  {
    id: 38,
    name: "Elegant Grey Women's Business Suit",
    price: 20000,
    originalPrice: 24000,
    category: "business",
    gender: "women",
    color: "grey",
    sizes: ["38", "40", "42", "44", "46"],
    images: [
      "https://i.pinimg.com/736x/bd/e5/6e/bde56ee428670bf863b8bbfa5925563d.jpg"
    ],
    description: "Elegant grey business suit with modern tailoring and professional appeal.",
    features: ["Modern Tailoring", "Professional Appeal", "Elegant Design", "Business Ready"],
    inStock: true,
    rating: 4.8,
    reviews: 143
  },
  {
    id: 39,
    name: "Classic Navy Women's Wedding Suit",
    price: 27000,
    originalPrice: 30000,
    category: "formal",
    gender: "women",
    color: "navy",
    sizes: ["36", "38", "40", "42", "44"],
    images: [
      "https://i.pinimg.com/736x/fd/17/f1/fd17f18d4a502ea292173abe4b622036.jpg"
    ],
    description: "Classic navy wedding suit with exceptional craftsmanship and elegant details.",
    features: ["Exceptional Craftsmanship", "Elegant Details", "Wedding Ready", "Classic Style"],
    inStock: true,
    rating: 4.9,
    reviews: 176
  },
  {
    id: 40,
    name: "Modern Charcoal Women's Executive Suit",
    price: 24000,
    originalPrice: 29000,
    category: "business",
    gender: "women",
    color: "charcoal",
    sizes: ["38", "40", "42", "44", "46"],
    images: [
      "https://i.pinimg.com/736x/1c/5e/e8/1c5ee81d7f5e1a5fca1f2ba65fa33135.jpg"
    ],
    description: "Modern charcoal executive suit designed for the contemporary professional woman.",
    features: ["Executive Design", "Contemporary Style", "Professional Grade", "Modern Cut"],
    inStock: true,
    rating: 4.8,
    reviews: 165
  },
  {
    id: 41,
    name: "Classic Navy Children's Suit",
    price: 10000,
    originalPrice: 12000,
    category: "formal",
    gender: "children",
    color: "navy",
    sizes: ["28", "30", "32", "34", "36"],
    images: [
      "https://i.pinimg.com/736x/2c/dc/6c/2cdc6c91aac167d8bfa1c638f7c56e9b.jpg"
    ],
    description: "Classic navy children's suit perfect for formal occasions.",
    features: ["Premium Fabric", "Formal Ready", "Quality Construction", "Comfortable Fit"],
    inStock: true,
    rating: 4.8,
    reviews: 67
  },
  {
    id: 42,
    name: "Elegant Black Children's Suit",
    price: 11000,
    originalPrice: 13000,
    category: "formal",
    gender: "children",
    color: "black",
    sizes: ["28", "30", "32", "34", "36"],
    images: [
      "https://i.pinimg.com/736x/ce/42/54/ce42540d33b50e8f0eae539d5d4fd898.jpg"
    ],
    description: "Elegant black children's suit for special events.",
    features: ["Elegant Design", "Special Occasion", "Quality Materials", "Modern Cut"],
    inStock: true,
    rating: 4.9,
    reviews: 89
  },
  {
    id: 43,
    name: "Charcoal Grey Children's Suit",
    price: 12000,
    originalPrice: 14000,
    category: "business",
    gender: "children",
    color: "charcoal",
    sizes: ["28", "30", "32", "34", "36"],
    images: [
      "https://i.pinimg.com/736x/a6/2b/9d/a62b9d99cde8094024b230605166c017.jpg"
    ],
    description: "Charcoal grey children's suit with professional styling.",
    features: ["Professional Style", "Quality Fabric", "Comfortable Wear", "Durable Construction"],
    inStock: true,
    rating: 4.7,
    reviews: 76
  },
  {
    id: 44,
    name: "Royal Blue Children's Formal Suit",
    price: 13000,
    originalPrice: 15000,
    category: "formal",
    gender: "children",
    color: "blue",
    sizes: ["28", "30", "32", "34", "36"],
    images: [
      "https://i.pinimg.com/1200x/4d/f7/6d/4df76d244e5462187cdd043765adaf0d.jpg"
    ],
    description: "Royal blue formal suit for young gentlemen.",
    features: ["Royal Blue Color", "Formal Ready", "Premium Quality", "Special Events"],
    inStock: true,
    rating: 4.8,
    reviews: 92
  },
  {
    id: 45,
    name: "Light Grey Children's Suit",
    price: 10000,
    originalPrice: 12000,
    category: "casual",
    gender: "children",
    color: "grey",
    sizes: ["28", "30", "32", "34", "36"],
    images: [
      "https://i.pinimg.com/736x/d6/e1/b1/d6e1b1e9ca170fbf48bc18b9695e6b18.jpg"
    ],
    description: "Light grey children's suit for casual formal events.",
    features: ["Light Grey Color", "Casual Formal", "Comfortable Fit", "Versatile Design"],
    inStock: true,
    rating: 4.6,
    reviews: 54
  },
  {
    id: 46,
    name: "Premium Navy Children's Wedding Suit",
    price: 14000,
    originalPrice: 16000,
    category: "formal",
    gender: "children",
    color: "navy",
    sizes: ["28", "30", "32", "34", "36"],
    images: [
      "https://i.pinimg.com/1200x/f9/9e/0e/f99e0edbe6356135f5b9b5472a1789c6.jpg"
    ],
    description: "Premium navy wedding suit for children.",
    features: ["Wedding Ready", "Premium Quality", "Navy Color", "Special Occasion"],
    inStock: true,
    rating: 4.9,
    reviews: 108
  },
  {
    id: 47,
    name: "Classic Black Children's Business Suit",
    price: 11000,
    originalPrice: 13000,
    category: "business",
    gender: "children",
    color: "black",
    sizes: ["28", "30", "32", "34", "36"],
    images: [
      "https://i.pinimg.com/736x/55/96/b2/5596b2f014a96c65984e0676f31eb607.jpg"
    ],
    description: "Classic black business suit for young professionals.",
    features: ["Business Ready", "Classic Design", "Professional Look", "Quality Construction"],
    inStock: true,
    rating: 4.7,
    reviews: 83
  },
  {
    id: 48,
    name: "Sophisticated Grey Children's Suit",
    price: 12000,
    originalPrice: 14000,
    category: "formal",
    gender: "children",
    color: "grey",
    sizes: ["28", "30", "32", "34", "36"],
    images: [
      "https://i.pinimg.com/736x/61/da/3c/61da3cacc6f534bd2e1022c9aa5a7e0c.jpg"
    ],
    description: "Sophisticated grey suit for formal children's events.",
    features: ["Sophisticated Design", "Grey Color", "Formal Events", "Quality Materials"],
    inStock: true,
    rating: 4.8,
    reviews: 71
  },
  {
    id: 49,
    name: "Modern Blue Children's Executive Suit",
    price: 13000,
    originalPrice: 15000,
    category: "business",
    gender: "children",
    color: "blue",
    sizes: ["28", "30", "32", "34", "36"],
    images: [
      "https://i.pinimg.com/1200x/d4/b0/07/d4b00715f90d4e8a948b9144f98e709d.jpg"
    ],
    description: "Modern blue executive suit for young leaders.",
    features: ["Executive Style", "Modern Design", "Blue Color", "Leadership Ready"],
    inStock: true,
    rating: 4.8,
    reviews: 95
  },
  {
    id: 50,
    name: "Elegant Charcoal Children's Formal Suit",
    price: 14000,
    originalPrice: 16000,
    category: "formal",
    gender: "children",
    color: "charcoal",
    sizes: ["28", "30", "32", "34", "36"],
    images: [
      "https://i.pinimg.com/736x/b8/4b/ae/b84bae6606edaf7882cfc916a48454c8.jpg"
    ],
    description: "Elegant charcoal formal suit for special occasions.",
    features: ["Elegant Style", "Charcoal Color", "Formal Ready", "Premium Finish"],
    inStock: true,
    rating: 4.9,
    reviews: 87
  },
  {
    id: 51,
    name: "Classic Navy Children's Tuxedo",
    price: 15000,
    originalPrice: 17000,
    category: "formal",
    gender: "children",
    color: "navy",
    sizes: ["28", "30", "32", "34", "36"],
    images: [
      "https://i.pinimg.com/736x/d7/3b/bf/d73bbf60569e52bc3b595e8ac6fa487e.jpg"
    ],
    description: "Classic navy tuxedo for formal children's events.",
    features: ["Tuxedo Style", "Navy Color", "Formal Events", "Classic Design"],
    inStock: true,
    rating: 4.9,
    reviews: 112
  },
  {
    id: 52,
    name: "Premium Black Children's Wedding Suit",
    price: 16000,
    originalPrice: 18000,
    category: "formal",
    gender: "children",
    color: "black",
    sizes: ["28", "30", "32", "34", "36"],
    images: [
      "https://i.pinimg.com/1200x/8e/ba/7d/8eba7d3290cf8d61d19fa27676c96264.jpg"
    ],
    description: "Premium black wedding suit for young gentlemen.",
    features: ["Wedding Ready", "Premium Quality", "Black Color", "Special Occasion"],
    inStock: true,
    rating: 4.9,
    reviews: 124
  },
  {
    id: 53,
    name: "Modern Grey Children's Business Suit",
    price: 12000,
    originalPrice: 14000,
    category: "business",
    gender: "children",
    color: "grey",
    sizes: ["28", "30", "32", "34", "36"],
    images: [
      "https://i.pinimg.com/736x/c0/1f/dc/c01fdcedbed759387824dfb135fea519.jpg"
    ],
    description: "Modern grey business suit for young professionals.",
    features: ["Modern Design", "Business Ready", "Grey Color", "Professional Style"],
    inStock: true,
    rating: 4.7,
    reviews: 68
  },
  {
    id: 54,
    name: "Sophisticated Blue Children's Suit",
    price: 13000,
    originalPrice: 15000,
    category: "formal",
    gender: "children",
    color: "blue",
    sizes: ["28", "30", "32", "34", "36"],
    images: [
      "https://i.pinimg.com/736x/de/12/00/de12002e5ef85f5bb7ffe0c6ddb4036e.jpg"
    ],
    description: "Sophisticated blue suit for formal children's events.",
    features: ["Sophisticated Style", "Blue Color", "Formal Ready", "Quality Construction"],
    inStock: true,
    rating: 4.8,
    reviews: 79
  },
  {
    id: 55,
    name: "Elegant Navy Children's Executive Suit",
    price: 14000,
    originalPrice: 16000,
    category: "business",
    gender: "children",
    color: "navy",
    sizes: ["28", "30", "32", "34", "36"],
    images: [
      "https://i.pinimg.com/736x/f0/8e/11/f08e119c6f0b87ad421d5ac725a225ec.jpg"
    ],
    description: "Elegant navy executive suit for young leaders.",
    features: ["Executive Style", "Elegant Design", "Navy Color", "Leadership Ready"],
    inStock: true,
    rating: 4.8,
    reviews: 91
  },
  {
    id: 56,
    name: "Premium Charcoal Children's Formal Suit",
    price: 15000,
    originalPrice: 17000,
    category: "formal",
    gender: "children",
    color: "charcoal",
    sizes: ["28", "30", "32", "34", "36"],
    images: [
      "https://i.pinimg.com/1200x/e3/f1/20/e3f12035639619800e1140e3dc50c53b.jpg"
    ],
    description: "Premium charcoal formal suit for special occasions.",
    features: ["Premium Quality", "Charcoal Color", "Formal Events", "Special Occasion"],
    inStock: true,
    rating: 4.9,
    reviews: 103
  },
  {
    id: 57,
    name: "Classic Black Children's Executive Suit",
    price: 13000,
    originalPrice: 15000,
    category: "business",
    gender: "children",
    color: "black",
    sizes: ["28", "30", "32", "34", "36"],
    images: [
      "https://i.pinimg.com/736x/a0/4c/a3/a04ca36b628a02ab03e3548d6d756c5f.jpg"
    ],
    description: "Classic black executive suit for young professionals.",
    features: ["Executive Style", "Classic Design", "Black Color", "Professional Ready"],
    inStock: true,
    rating: 4.7,
    reviews: 85
  },
  {
    id: 58,
    name: "Modern Blue Children's Wedding Suit",
    price: 16000,
    originalPrice: 18000,
    category: "formal",
    gender: "children",
    color: "blue",
    sizes: ["28", "30", "32", "34", "36"],
    images: [
      "https://i.pinimg.com/1200x/76/95/16/7695168837ac3ee5b6a39972e8a51cef.jpg"
    ],
    description: "Modern blue wedding suit for young gentlemen.",
    features: ["Wedding Ready", "Modern Design", "Blue Color", "Special Occasion"],
    inStock: true,
    rating: 4.9,
    reviews: 117
  },
  {
    id: 59,
    name: "Sophisticated Grey Children's Tuxedo",
    price: 17000,
    originalPrice: 19000,
    category: "formal",
    gender: "children",
    color: "grey",
    sizes: ["28", "30", "32", "34", "36"],
    images: [
      "https://i.pinimg.com/1200x/3d/1c/87/3d1c8764caa2e7d98bc3542fc6fdb9da.jpg"
    ],
    description: "Sophisticated grey tuxedo for formal events.",
    features: ["Tuxedo Style", "Sophisticated Design", "Grey Color", "Formal Events"],
    inStock: true,
    rating: 4.9,
    reviews: 129
  },
  {
    id: 60,
    name: "Elegant Navy Children's Business Suit",
    price: 14000,
    originalPrice: 16000,
    category: "business",
    gender: "children",
    color: "navy",
    sizes: ["28", "30", "32", "34", "36"],
    images: [
      "https://i.pinimg.com/736x/2b/75/d4/2b75d4713742ee645618ccf784556b6f.jpg"
    ],
    description: "Elegant navy business suit for young professionals.",
    features: ["Business Ready", "Elegant Style", "Navy Color", "Professional Look"],
    inStock: true,
    rating: 4.8,
    reviews: 94
  },
  {
    id: 61,
    name: "Premium Black Children's Tuxedo",
    price: 18000,
    originalPrice: 20000,
    category: "formal",
    gender: "children",
    color: "black",
    sizes: ["28", "30", "32", "34", "36"],
    images: [
      "https://i.pinimg.com/736x/0b/cb/91/0bcb91b45617da75293b17fb9354519b.jpg"
    ],
    description: "Premium black tuxedo for the most formal occasions.",
    features: ["Premium Quality", "Tuxedo Style", "Black Color", "Formal Events"],
    inStock: true,
    rating: 4.9,
    reviews: 142
  },
  {
    id: 62,
    name: "Classic Charcoal Children's Wedding Suit",
    price: 15000,
    originalPrice: 17000,
    category: "formal",
    gender: "children",
    color: "charcoal",
    sizes: ["28", "30", "32", "34", "36"],
    images: [
      "https://i.pinimg.com/736x/16/ab/aa/16abaa6a8a4a21c86e68e3fbd082d25d.jpg"
    ],
    description: "Classic charcoal wedding suit for young gentlemen.",
    features: ["Wedding Ready", "Classic Style", "Charcoal Color", "Special Occasion"],
    inStock: true,
    rating: 4.8,
    reviews: 106
  },
  {
    id: 63,
    name: "Modern Grey Children's Executive Suit",
    price: 16000,
    originalPrice: 18000,
    category: "business",
    gender: "children",
    color: "grey",
    sizes: ["28", "30", "32", "34", "36"],
    images: [
      "https://i.pinimg.com/736x/76/52/79/765279eacb97cd72d3576f80182d1822.jpg"
    ],
    description: "Modern grey executive suit for young leaders.",
    features: ["Executive Style", "Modern Design", "Grey Color", "Leadership Ready"],
    inStock: true,
    rating: 4.8,
    reviews: 88
  },
  {
    id: 64,
    name: "Sophisticated Blue Children's Formal Suit",
    price: 17000,
    originalPrice: 19000,
    category: "formal",
    gender: "children",
    color: "blue",
    sizes: ["28", "30", "32", "34", "36"],
    images: [
      "https://i.pinimg.com/736x/b5/8e/98/b58e98459f1b69092160fa6771327d03.jpg"
    ],
    description: "Sophisticated blue formal suit for special occasions.",
    features: ["Sophisticated Style", "Formal Ready", "Blue Color", "Special Events"],
    inStock: true,
    rating: 4.9,
    reviews: 115
  },
  {
    id: 65,
    name: "Premium Navy Children's Executive Suit",
    price: 18000,
    originalPrice: 20000,
    category: "business",
    gender: "children",
    color: "navy",
    sizes: ["28", "30", "32", "34", "36"],
    images: [
      "https://i.pinimg.com/1200x/d4/61/5f/d4615f3f2f2f9c5f3319abd99a08ee71.jpg"
    ],
    description: "Premium navy executive suit for young leaders.",
    features: ["Premium Quality", "Executive Style", "Navy Color", "Leadership Ready"],
    inStock: true,
    rating: 4.9,
    reviews: 132
  },
  {
    id: 66,
    name: "Elegant Black Children's Premium Suit",
    price: 19000,
    originalPrice: 21000,
    category: "formal",
    gender: "children",
    color: "black",
    sizes: ["28", "30", "32", "34", "36"],
    images: [
      "https://i.pinimg.com/736x/9f/70/a1/9f70a1fadea5e6a5f0571cdd8a6f0915.jpg"
    ],
    description: "Elegant black premium suit for the most special occasions.",
    features: ["Premium Quality", "Elegant Design", "Black Color", "Special Occasions"],
    inStock: true,
    rating: 4.9,
    reviews: 148
  },
  {
    id: 67,
    name: "Sophisticated Charcoal Children's Luxury Suit",
    price: 20000,
    originalPrice: 22000,
    category: "formal",
    gender: "children",
    color: "charcoal",
    sizes: ["28", "30", "32", "34", "36"],
    images: [
      "https://i.pinimg.com/736x/b4/9a/d2/b49ad21f5f8b6e937623d62c9684205d.jpg"
    ],
    description: "Sophisticated charcoal luxury suit for young gentlemen.",
    features: ["Luxury Quality", "Sophisticated Design", "Charcoal Color", "Premium Finish"],
    inStock: true,
    rating: 4.9,
    reviews: 156
  },
  {
    id: 68,
    name: "Italian Cotton White Dress Shirt",
    price: 24570,
    originalPrice: 29770,
    category: "business",
    gender: "designers",
    color: "white",
    sizes: ["38", "40", "42", "44", "46"],
    images: [
      "https://i.pinimg.com/1200x/24/24/11/242411b6ecac495575979eeccbfd21f0.jpg"
    ],
    description: "Italian cotton with mother-of-pearl buttons",
    features: ["Italian Cotton", "Mother-of-Pearl Buttons", "Premium Quality", "Designer Cut"],
    inStock: true,
    rating: 4.9,
    reviews: 234
  },
  {
    id: 69,
    name: "Tailored Navy Wool Suit Jacket",
    price: 30000,
    originalPrice: 35000,
    category: "business",
    gender: "designers",
    color: "navy",
    sizes: ["38", "40", "42", "44", "46"],
    images: [
      "https://i.pinimg.com/736x/34/48/40/34484022fd4ddd488a7af68dfc0a0206.jpg"
    ],
    description: "Wool blend with silk lining",
    features: ["Wool Blend", "Silk Lining", "Tailored Fit", "Designer Quality"],
    inStock: true,
    rating: 4.8,
    reviews: 156
  },
  {
    id: 70,
    name: "Black Cashmere-Blend Overcoat",
    price: 30000,
    originalPrice: 35000,
    category: "formal",
    gender: "designers",
    color: "black",
    sizes: ["38", "40", "42", "44", "46"],
    images: [
      "https://i.pinimg.com/1200x/be/e4/ec/bee4ec45679a064a7e3f0d10762ea0fd.jpg"
    ],
    description: "Cashmere blend with silk lining",
    features: ["Cashmere Blend", "Silk Lining", "Luxury Finish", "Designer Cut"],
    inStock: true,
    rating: 4.9,
    reviews: 89
  },
  {
    id: 71,
    name: "Elegant Black Evening Dress",
    price: 28000,
    originalPrice: 30000,
    category: "formal",
    gender: "designers",
    color: "black",
    sizes: ["36", "38", "40", "42", "44"],
    images: [
      "https://i.pinimg.com/1200x/75/79/f9/7579f91bb1c5a87dc64cc2bbddae03cf.jpg"
    ],
    description: "Sophisticated evening wear with elegant silhouette",
    features: ["Evening Wear", "Elegant Silhouette", "Premium Fabric", "Designer Style"],
    inStock: true,
    rating: 4.8,
    reviews: 145
  },
  {
    id: 72,
    name: "Designer Cocktail Dress",
    price: 30000,
    originalPrice: 35000,
    category: "formal",
    gender: "designers",
    color: "navy",
    sizes: ["36", "38", "40", "42", "44"],
    images: [
      "https://i.pinimg.com/1200x/2d/58/8d/2d588d0ca471570829efe2b4e018dea1.jpg"
    ],
    description: "Stunning cocktail dress for special occasions",
    features: ["Cocktail Style", "Special Occasion", "Designer Cut", "Premium Quality"],
    inStock: true,
    rating: 4.8,
    reviews: 156
  },
  {
    id: 73,
    name: "Navy & White Striped Polo Shirt",
    price: 19370,
    originalPrice: 23270,
    category: "casual",
    gender: "designers",
    color: "navy",
    sizes: ["38", "40", "42", "44", "46"],
    images: [
      "https://i.pinimg.com/736x/d4/7e/6b/d47e6b8d100f5b2e0ca5d7fb9e33d757.jpg"
    ],
    description: "Pima cotton with contrast details",
    features: ["Pima Cotton", "Contrast Details", "Polo Style", "Designer Quality"],
    inStock: true,
    rating: 4.7,
    reviews: 189
  },
  {
    id: 74,
    name: "Black French-Cuff Formal Shirt",
    price: 25870,
    originalPrice: 30000,
    category: "formal",
    gender: "designers",
    color: "black",
    sizes: ["38", "40", "42", "44", "46"],
    images: [
      "https://i.pinimg.com/1200x/c3/a0/6d/c3a06d042536f4e8e29947f4f04664ac.jpg"
    ],
    description: "Egyptian cotton with French cuffs",
    features: ["Egyptian Cotton", "French Cuffs", "Formal Style", "Premium Quality"],
    inStock: true,
    rating: 4.9,
    reviews: 267
  },
  {
    id: 75,
    name: "Light Grey Cashmere Crewneck Sweater",
    price: 30000,
    originalPrice: 35000,
    category: "casual",
    gender: "designers",
    color: "grey",
    sizes: ["38", "40", "42", "44", "46"],
    images: [
      "https://i.pinimg.com/736x/9f/30/38/9f303833a82c43a3713c7957e46d1bfe.jpg"
    ],
    description: "100% cashmere with ribbed details",
    features: ["100% Cashmere", "Ribbed Details", "Luxury Comfort", "Designer Cut"],
    inStock: true,
    rating: 4.8,
    reviews: 145
  },
  {
    id: 76,
    name: "Tan Gabardine Trench Coat with Leather Trim",
    price: 30000,
    originalPrice: 35000,
    category: "formal",
    gender: "designers",
    color: "brown",
    sizes: ["38", "40", "42", "44", "46"],
    images: [
      "https://i.pinimg.com/1200x/64/4b/fe/644bfe429539645bb5ecf275e5ac391b.jpg"
    ],
    description: "Gabardine cotton with leather details",
    features: ["Gabardine Cotton", "Leather Details", "Trench Style", "Designer Quality"],
    inStock: true,
    rating: 4.9,
    reviews: 78
  },
  {
    id: 77,
    name: "Chestnut Quilted Leather Jacket",
    price: 30000,
    originalPrice: 35000,
    category: "casual",
    gender: "designers",
    color: "brown",
    sizes: ["38", "40", "42", "44", "46"],
    images: [
      "https://i.pinimg.com/1200x/ba/e4/cc/bae4cc840cb4e478451a6861e7d69a07.jpg"
    ],
    description: "Leather with quilted lining",
    features: ["Quilted Leather", "Premium Lining", "Casual Luxury", "Designer Style"],
    inStock: true,
    rating: 4.8,
    reviews: 123
  },
  {
    id: 78,
    name: "Designer Floral Blouse",
    price: 15000,
    originalPrice: 18000,
    category: "casual",
    gender: "designers",
    color: "white",
    sizes: ["36", "38", "40", "42", "44"],
    images: [
      "https://i.pinimg.com/1200x/a2/48/73/a248732874518524f902016a42b8d219.jpg"
    ],
    description: "Delicate floral print with premium fabric",
    features: ["Floral Print", "Premium Fabric", "Delicate Design", "Designer Quality"],
    inStock: true,
    rating: 4.7,
    reviews: 189
  },
  {
    id: 79,
    name: "Chic Business Blazer",
    price: 30000,
    originalPrice: 35000,
    category: "business",
    gender: "designers",
    color: "black",
    sizes: ["36", "38", "40", "42", "44"],
    images: [
      "https://i.pinimg.com/1200x/80/5a/8e/805a8e6c77b9b96f2b22b69da4fc76a6.jpg"
    ],
    description: "Professional tailored blazer for modern women",
    features: ["Professional Tailoring", "Modern Cut", "Business Ready", "Designer Style"],
    inStock: true,
    rating: 4.8,
    reviews: 167
  },
  {
    id: 80,
    name: "Cashmere Wrap Coat",
    price: 30000,
    originalPrice: 35000,
    category: "formal",
    gender: "designers",
    color: "grey",
    sizes: ["36", "38", "40", "42", "44"],
    images: [
      "https://i.pinimg.com/736x/82/b0/76/82b0768baa124236dd79e56bddd1a518.jpg"
    ],
    description: "Luxurious cashmere coat with belt",
    features: ["Luxurious Cashmere", "Belt Detail", "Wrap Style", "Designer Quality"],
    inStock: true,
    rating: 4.9,
    reviews: 89
  },
  {
    id: 81,
    name: "Silk Evening Gown",
    price: 30000,
    originalPrice: 35000,
    category: "formal",
    gender: "designers",
    color: "navy",
    sizes: ["36", "38", "40", "42", "44"],
    images: [
      "https://i.pinimg.com/736x/eb/5e/10/eb5e1057feffa4764d4230fdfe7b5be2.jpg"
    ],
    description: "Flowing silk gown for formal events",
    features: ["Flowing Silk", "Formal Events", "Elegant Design", "Designer Quality"],
    inStock: true,
    rating: 4.9,
    reviews: 78
  },
  {
    id: 82,
    name: "Classic Navy Silk Tie",
    price: 3500,
    originalPrice: 4000,
    category: "formal",
    gender: "ties",
    color: "navy",
    sizes: ["Regular"],
    images: [
      "https://images.unsplash.com/photo-1610599905000-a8093ff22a55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHRpZXxlbnwwfHwwfHx8MA%3D%3D"
    ],
    description: "Premium navy silk tie perfect for business and formal occasions.",
    features: ["100% Silk", "Classic Width", "Hand-finished", "Wrinkle Resistant"],
    inStock: true,
    rating: 4.8,
    reviews: 156
  },
  {
    id: 83,
    name: "Professional Black Tie",
    price: 3000,
    originalPrice: 3500,
    category: "business",
    gender: "ties",
    color: "black",
    sizes: ["Regular"],
    images: [
      "https://images.unsplash.com/photo-1598032895397-b9472444bf93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGllJTIwZm9yJTIwc2VsbHxlbnwwfHwwfHx8MA%3D%3D"
    ],
    description: "Professional black tie ideal for business meetings and formal events.",
    features: ["Business Ready", "Classic Design", "Professional Look", "Quality Fabric"],
    inStock: true,
    rating: 4.7,
    reviews: 134
  },
  {
    id: 84,
    name: "Elegant Striped Tie",
    price: 2500,
    originalPrice: 3000,
    category: "business",
    gender: "ties",
    color: "blue",
    sizes: ["Regular"],
    images: [
      "https://i.pinimg.com/736x/6c/97/01/6c97013ce1ff4b05334acfd86f58ff70.jpg"
    ],
    description: "Elegant striped tie perfect for professional and business settings.",
    features: ["Striped Pattern", "Professional Style", "Quality Material", "Versatile"],
    inStock: true,
    rating: 4.6,
    reviews: 98
  },
  {
    id: 85,
    name: "Premium Burgundy Tie",
    price: 4000,
    originalPrice: 4500,
    category: "formal",
    gender: "ties",
    color: "burgundy",
    sizes: ["Regular"],
    images: [
      "https://i.pinimg.com/1200x/f6/51/9c/f6519c105d1c766753a538fedb43c800.jpg"
    ],
    description: "Premium burgundy tie for special occasions and formal events.",
    features: ["Premium Quality", "Rich Color", "Formal Ready", "Luxury Finish"],
    inStock: true,
    rating: 4.9,
    reviews: 145
  },
  {
    id: 86,
    name: "Classic Red Silk Tie",
    price: 3800,
    originalPrice: 4200,
    category: "formal",
    gender: "ties",
    color: "red",
    sizes: ["Regular"],
    images: [
      "https://i.pinimg.com/1200x/7e/19/f0/7e19f01755505b235224ae58fb40c058.jpg"
    ],
    description: "Classic red silk tie perfect for making a bold statement.",
    features: ["100% Silk", "Bold Color", "Statement Piece", "Premium Quality"],
    inStock: true,
    rating: 4.8,
    reviews: 123
  },
  {
    id: 87,
    name: "Modern Grey Tie",
    price: 2800,
    originalPrice: 3200,
    category: "business",
    gender: "ties",
    color: "grey",
    sizes: ["Regular"],
    images: [
      "https://i.pinimg.com/1200x/60/d8/0d/60d80df26b1ce93bb9f14300161196cd.jpg"
    ],
    description: "Modern grey tie with sophisticated design for business wear.",
    features: ["Modern Design", "Sophisticated Look", "Business Ready", "Quality Fabric"],
    inStock: true,
    rating: 4.7,
    reviews: 112
  },
  {
    id: 88,
    name: "Luxury Navy Pattern Tie",
    price: 4500,
    originalPrice: 5000,
    category: "formal",
    gender: "ties",
    color: "navy",
    sizes: ["Regular"],
    images: [
      "https://i.pinimg.com/1200x/90/1c/e7/901ce7ffa613e5107c0bd43595d7e229.jpg"
    ],
    description: "Luxury navy patterned tie for the most formal occasions.",
    features: ["Luxury Quality", "Pattern Design", "Formal Events", "Premium Silk"],
    inStock: true,
    rating: 4.9,
    reviews: 167
  },
  {
    id: 89,
    name: "Classic Blue Business Tie",
    price: 3200,
    originalPrice: 3700,
    category: "business",
    gender: "ties",
    color: "blue",
    sizes: ["Regular"],
    images: [
      "https://i.pinimg.com/1200x/94/ab/1a/94ab1ac1c2bfdd53a948284d77c1ed8e.jpg"
    ],
    description: "Classic blue business tie perfect for professional settings.",
    features: ["Business Professional", "Classic Style", "Quality Material", "Versatile"],
    inStock: true,
    rating: 4.6,
    reviews: 134
  },
  {
    id: 90,
    name: "Elegant Black Formal Tie",
    price: 3600,
    originalPrice: 4100,
    category: "formal",
    gender: "ties",
    color: "black",
    sizes: ["Regular"],
    images: [
      "https://i.pinimg.com/1200x/7d/a2/0e/7da20e1e6d05c95d20e47fea87f81823.jpg"
    ],
    description: "Elegant black formal tie for black-tie events and formal occasions.",
    features: ["Formal Ready", "Elegant Design", "Black-tie Events", "Premium Quality"],
    inStock: true,
    rating: 4.8,
    reviews: 156
  },
  {
    id: 91,
    name: "Premium Patterned Tie",
    price: 4200,
    originalPrice: 4800,
    category: "formal",
    gender: "ties",
    color: "navy",
    sizes: ["Regular"],
    images: [
      "https://i.pinimg.com/736x/eb/6d/a5/eb6da5c7df520c4b371e7b9211d66dac.jpg"
    ],
    description: "Premium patterned tie with intricate design for special occasions.",
    features: ["Intricate Pattern", "Premium Quality", "Special Occasions", "Luxury Finish"],
    inStock: true,
    rating: 4.9,
    reviews: 189
  },
  {
    id: 92,
    name: "Classic Striped Business Tie",
    price: 2200,
    originalPrice: 2700,
    category: "business",
    gender: "ties",
    color: "blue",
    sizes: ["Regular"],
    images: [
      "https://i.pinimg.com/736x/68/2b/df/682bdf6f4ac885cc426ec24d95b939c0.jpg"
    ],
    description: "Classic striped business tie perfect for everyday professional wear.",
    features: ["Striped Design", "Professional Wear", "Classic Style", "Quality Fabric"],
    inStock: true,
    rating: 4.7,
    reviews: 145
  },
  {
    id: 93,
    name: "Sophisticated Pattern Tie",
    price: 3900,
    originalPrice: 4400,
    category: "formal",
    gender: "ties",
    color: "navy",
    sizes: ["Regular"],
    images: [
      "https://i.pinimg.com/736x/6c/a9/71/6ca9719fc69438d4e3f8fedcc345d378.jpg"
    ],
    description: "Sophisticated patterned tie with elegant design for formal events.",
    features: ["Sophisticated Pattern", "Elegant Design", "Formal Events", "Premium Material"],
    inStock: true,
    rating: 4.8,
    reviews: 167
  },
  {
    id: 94,
    name: "Premium Black Executive Suit",
    price: 28000,
    originalPrice: 30000,
    category: "business",
    gender: "men",
    color: "black",
    sizes: ["38", "40", "42", "44", "46"],
    images: [
      "https://i.pinimg.com/1200x/04/b8/37/04b837a10112708d75212a54d1dba44c.jpg"
    ],
    description: "Premium black executive suit with modern tailoring and luxury finish.",
    features: ["Executive Style", "Modern Tailoring", "Luxury Finish", "Premium Quality"],
    inStock: true,
    rating: 4.9,
    reviews: 198
  },
  {
    id: 95,
    name: "Elegant Navy Wedding Suit",
    price: 30000,
    originalPrice: 30000,
    category: "formal",
    gender: "men",
    color: "navy",
    sizes: ["36", "38", "40", "42", "44"],
    images: [
      "https://i.pinimg.com/1200x/d5/b7/8f/d5b78ff3c6be61594e028ca2d5e6fe52.jpg"
    ],
    description: "Elegant navy wedding suit perfect for the most special occasions.",
    features: ["Wedding Ready", "Elegant Design", "Special Occasion", "Premium Quality"],
    inStock: true,
    rating: 4.9,
    reviews: 234
  },
  {
    id: 96,
    name: "Classic Charcoal Business Suit",
    price: 26000,
    originalPrice: 30000,
    category: "business",
    gender: "men",
    color: "charcoal",
    sizes: ["38", "40", "42", "44", "46"],
    images: [
      "https://i.pinimg.com/736x/dc/d8/ac/dcd8ac9271e3b260510716db86119a98.jpg"
    ],
    description: "Classic charcoal business suit with professional styling and modern fit.",
    features: ["Professional Styling", "Modern Fit", "Business Ready", "Classic Design"],
    inStock: true,
    rating: 4.8,
    reviews: 176
  }
];

export const categories = [
  { id: "men", name: "Men" },
  { id: "women", name: "Women" },
  { id: "children", name: "Children" },
  { id: "designers", name: "Designers" },
  { id: "ties", name: "Ties" }
];

export const colors = [
  { id: "all", name: "All Colors" },
  { id: "black", name: "Black" },
  { id: "charcoal", name: "Charcoal" },
  { id: "navy", name: "Navy" },
  { id: "grey", name: "Grey" },
  { id: "blue", name: "Blue" }
];

export const sizes = [
  { id: "all", name: "All Sizes" },
  { id: "36", name: "36" },
  { id: "38", name: "38" },
  { id: "40", name: "40" },
  { id: "42", name: "42" },
  { id: "44", name: "44" },
  { id: "46", name: "46" },
  { id: "48", name: "48" }
];