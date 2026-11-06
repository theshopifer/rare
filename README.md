# RARE – Luxury Jewelry & High Fashion Storefront

A high-fidelity, pixel-perfect replica of the **Aspire Demo 2 (RARE High Jewelry)** Shopify flagship store (`https://aspire-demo-2.myshopify.com/`).

This project includes all 23 native theme sections, complete styling, interactive web components, smooth Lenis scrolling, GSAP micro-animations, Swiper sliders, customer reviews, set builder, and a fully interactive client-side shopping experience.

---

## ✨ Features & Sections Included

1. **Top Announcement Bar**:
   - Free shipping & promo message marquee.
   - Interactive Currency Switcher (USD, EUR, GBP, CAD, AUD) and Language Dropdown.

2. **Luxury Header**:
   - Clean, sticky glassmorphic navigation header (`site-head-header`).
   - SVG Brand Logos (`RARE.svg` and `RARE_1.svg`).
   - Mega navigation menu with category previews.
   - Search trigger, Account icon, Wishlist, and Cart Drawer bubble with live count badge.

3. **Hero Slideshow (`slideshow-hero`)**:
   - High-impact editorial photography with smooth Swiper transitions.
   - Elegant typography, subtitles, and Call-to-Action buttons.

4. **Category Shape Grid (`shape-grid-section`)**:
   - Circular and sculpted jewelry category visual navigation (Rings, Necklaces, Earrings, Bracelets).

5. **Infinite Scrolling Marquee (`scrolling-section`)**:
   - Bold, high-energy typographic ticker.

6. **Interactive Tabbed Product Grids (`featured-tabs`)**:
   - "Best Sellers", "New Arrivals", "Trending".
   - Product cards with secondary image hover-flip, color swatches, quick add button, star ratings, and sale badges.

7. **Build Perfect Set (`build-perfect-set-section`)**:
   - Step-by-step jewelry bundle builder (Ring + Bracelet + Necklace + Earrings) with real-time price calculations and bundle savings.

8. **Flagship Product Spotlight (`product-detail-section`)**:
   - "INFINITE CURVE EARRINGS" with high-res multi-angle visual gallery.
   - Interactive variant pills (14K Gold, Sterling Silver, Glossy, Matte finish).
   - Quantity selector steppers.
   - Add to Cart & Buy It Now buttons.
   - Accordion tabs for description, materials & care, and shipping & returns.

9. **Customer Testimonials Carousel (`testimonial-carousel`)**:
   - Verified buyer review cards with star ratings and quotes.

10. **Shop The Look (`shop-the-look-section`)**:
    - High-fashion editorial photography with interactive hotspot pulse pins.
    - Hovering/clicking hotspots displays the tagged product with quick-buy capability.

11. **Promo Banners & Video Reviews (`video-review-section`)**:
    - Short-form social video cards (Reels/TikTok style) with play buttons and linked products.

12. **Curated Recommendations & Multicolumn Value Props**:
    - "You May Also Like" recommendation carousel.
    - Value proposition cards (Worldwide Insured Express, 2-Year Warranty, 30-Day Returns).

13. **Featured Blog & Community Gallery**:
    - Editorial articles ("Material Spotlight", "Follow Our Sparkling Journey").
    - Instagram lifestyle photo mosaic with interactive hover overlays.

14. **Comprehensive Footer (`footer-section`)**:
    - Newsletter sign-up with client validation.
    - Brand manifesto, navigation columns, payment icons (Visa, Mastercard, Amex, Apple Pay, PayPal), and copyright.

15. **Full Client-Side E-Commerce Interactivity**:
    - **Slide-Out Cart Drawer (`shop-cart-tray`)**: Free shipping progress bar, quantity steppers (+/-), item removal, real-time subtotal, persistent cart in `localStorage`.
    - **Quick View Drawer**: Instant product modal for all 32 store catalog pieces.
    - **Predictive Search**: Live search across all catalog pieces with thumbnail previews and direct quick add.
    - **Back to Top**: Floating smooth-scroll button.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
The development server will spin up at `http://localhost:3000/`.

### 3. Production Build
```bash
npm run build
```
Generates an optimized static bundle in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```
rare/
├── assets/                 # Theme stylesheets, scripts, svgs, and interactive controller
│   ├── header.css
│   ├── main.css
│   ├── product-main.css
│   ├── shop-cart-tray.css
│   ├── swiper.css
│   ├── swiper.js
│   ├── main.js
│   ├── lenis.js
│   ├── gsap.min.js
│   ├── interactive.js     # Cart drawer, Quick View & Search interactive engine
│   ├── products-db.js      # 32 catalog products database
│   ├── RARE.svg           # High-resolution vector logo
│   └── ...
├── mock_products/          # 32 alternate product detail views for instant Quick View
├── public/                 # Static public assets for Vite
├── scripts/                # Extraction and build automation scripts
├── index.html              # Main storefront HTML template
├── package.json            # Node configuration & scripts
└── vite.config.js          # Vite dev server with Shopify mock middleware
```
