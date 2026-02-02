---
AIGC:
    ContentProducer: Minimax Agent AI
    ContentPropagator: Minimax Agent AI
    Label: AIGC
    ProduceID: "00000000000000000000000000000000"
    PropagateID: "00000000000000000000000000000000"
    ReservedCode1: 3046022100e98cb32498e1bddb7592c41a10f162218fe8386c2704ad9ab3c53625389d8ee0022100ac59138d500a767f92ce8cb5fd28caf0704174767a1d6a4086fec69657207085
    ReservedCode2: 3046022100b6a6aa4b2961912e7dc37ce5482145e9f476bf0b78aff62b499a934c11a77e50022100a4519a97f7b070c8e71564e8ee4cc79dcece585046b11cc0924ca2d4a14e8426
---

# Starcl - Luxury High Heels E-commerce Platform

A modern, luxury e-commerce website for high-end high heels, built with Next.js 14, TypeScript, and Tailwind CSS.

## 🎯 Features

### Core Features
- **Luxury Design** - Gucci-inspired aesthetic with red, white, and gold color scheme
- **Responsive Design** - Fully mobile-optimized with smooth animations
- **Product Catalog** - Showcase up to 50+ products with filtering and search
- **Shopping Cart** - Full cart functionality with quantity management
- **Checkout Flow** - Multi-step checkout with payment integration

### Payment Methods
- **PayPal** - Standard PayPal integration
- **Cryptocurrency** - MetaMask/Web3 wallet support (USDT, USDC, ETH, BTC)
- **Western Union** - Bank transfer and cash pickup options

### Advanced Features
- **Auto Currency Exchange** - Automatic CNY to USD conversion based on daily exchange rates
- **Social Sharing** - Share cart contents on social media
- **Instagram/TikTok Integration** - Social commerce features
- **Real-time Exchange Rates** - Fetches daily rates from free API

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Clone the repository
cd starcl-ecommerce

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
starcl-ecommerce/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Homepage
│   │   ├── layout.tsx         # Root layout
│   │   ├── globals.css        # Global styles
│   │   ├── cart/              # Shopping cart page
│   │   ├── collection/        # Product listing page
│   │   ├── product/           # Product detail page
│   │   └── checkout/          # Checkout page
│   ├── components/            # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── FeaturedProducts.tsx
│   │   ├── AboutSection.tsx
│   │   └── Footer.tsx
│   ├── store/                 # State management
│   │   └── cart.ts            # Cart store (Zustand)
│   └── utils/                 # Utility functions
│       └── exchangeRate.ts    # Currency exchange utilities
├── public/                    # Static assets
├── tailwind.config.ts         # Tailwind configuration
├── next.config.mjs            # Next.js configuration
└── package.json
```

## 🎨 Design System

### Colors
- **Primary**: Deep Luxury Red (#8B0000)
- **Secondary**: Crimson (#DC143C)
- **Gold**: Metallic Gold (#D4AF37)
- **Black**: Rich Black (#0A0A0A)
- **Cream**: Soft Cream (#FFFDD0)

### Typography
- **Headings**: Playfair Display (Serif)
- **Body**: Inter (Sans-serif)

### Animations
- Fade-in effects
- Slide-up transitions
- Hover transformations
- Smooth scroll

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with:

```env
# Application
NEXT_PUBLIC_APP_NAME=Starcl
NEXT_PUBLIC_APP_URL=http://localhost:3000

# PayPal (get from PayPal Developer Dashboard)
NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_paypal_client_id

# Crypto (Web3 integration)
NEXT_PUBLIC_CRYPTO_NETWORK=sepolia

# Exchange Rate API (free tier)
EXCHANGE_RATE_API_KEY=your_api_key

# Social Media
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/starcl
NEXT_PUBLIC_TIKTOK_URL=https://tiktok.com/@starcl
```

## 📱 Responsive Design

- **Mobile**: Full touch support with collapsible menus
- **Tablet**: Optimized grid layouts
- **Desktop**: Full feature experience

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Payment**: PayPal, MetaMask (Ethers.js)

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms

```bash
# Build for Docker
docker build -t starcl-ecommerce .
docker run -p 3000:3000 starcl-ecommerce
```

## 📈 SEO Features

- Meta tags optimization
- Open Graph support
- Semantic HTML
- Fast page loads
- Mobile-friendly

## 🔒 Security

- HTTPS enforced in production
- Environment variables for secrets
- Input validation
- XSS protection (Next.js built-in)

## 📄 License

MIT License - feel free to use for your own projects!

## 🤝 Support

For questions or issues, please open an issue on GitHub or contact support@starcl.com

---

Built with ❤️ by Starcl Team
