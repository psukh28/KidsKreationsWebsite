// Import all product images
import giftset1 from '../assets/products/giftset-1.jpg';
import giftset2 from '../assets/products/giftset-2.jpg';
import giftset3 from '../assets/products/giftset-3.jpg';
import romper1 from '../assets/products/romper-1.jpg';
import romper2 from '../assets/products/romper-2.jpg';
import romper3 from '../assets/products/romper-3.jpg';
import romper4 from '../assets/products/romper-4.jpg';
import romper5 from '../assets/products/romper-5.jpg';
import romper6 from '../assets/products/romper-6.jpg';
import romper7 from '../assets/products/romper-7.jpg';
import pyjama1 from '../assets/products/pyjama-1.jpg';
import pyjama2 from '../assets/products/pyjama-2.jpg';
import pyjama3 from '../assets/products/pyjama-3.jpg';
import dungaree1 from '../assets/products/dungaree-1.jpg';
import dungaree2 from '../assets/products/dungaree-2.jpg';
import dungaree3 from '../assets/products/dungaree-3.jpg';
import dungaree4 from '../assets/products/dungaree-4.jpg';
import twopiece1 from '../assets/products/ELCS-56857.jpg';
import twopiece2 from '../assets/products/ELDK-56859.jpg';
import twopiece3 from '../assets/products/ELDR-56858.jpg';
import twopiece4 from '../assets/products/ELDR-56860.jpg';
import twopiece5 from '../assets/products/ELDR-56861.jpg';
import twopiece6 from '../assets/products/ELDR-56862.jpg';
import twopiece7 from '../assets/products/ELDR-56863.jpg';
import twopiece8 from '../assets/products/ELDR-56864.jpg';
import giftset4 from '../assets/products/giftset-4.jpg';
import giftset5 from '../assets/products/giftset-5.jpg';
import starter1 from '../assets/products/starter1.jpg';
import starter2 from '../assets/products/starter2.jpg';
import starter3 from '../assets/products/starter3.jpg';

export const products = [
  {
    title: "Starter Sets",
    description: "Complete newborn essentials bundled for convenience — perfect for hospital bags, gifting, or first outfits.",
    badges: ["Organic Cotton", "Gift Ready", "0-3 Months"],
    images: [starter1, starter2, starter3],
    slug: "starter-sets",
    orientation: "portrait",
    features: [
      "Available in 4, 6, and 7-piece sets",
      "Includes sleepsuit, bodysuit, booties, mittens, bib, hat, and blanket (varies by set)",
      "Coordinated color themes and embroidery",
      "Soft and breathable fabric",
      "Packaged for gifting"
    ],
    details: {
      materials: "100% Organic Cotton",
      sizes: "0-3 months",
      care: "Machine wash cold, tumble dry low",
      certifications: ["GOTS Certified", "OEKO-TEX Standard 100"],
      packaging: "Gift box included",
      moq: "100 pieces per style"
    }
  },
  {
    title: "Gift Sets",
    description: "Beautifully packaged babywear sets designed for gifting, featuring coordinated outfits and accessories.",
    badges: ["Popular", "GOTS Certified", "Gift Box"],
    images: [giftset1, giftset2, giftset3, giftset4, giftset5],
    slug: "gift-sets",
    orientation: "landscape",
    features: [
      "Organic or GOTS-certified cotton",
      "Ready-to-gift packaging included",
      "Stylish designs for special occasions",
      "Size: 0-24 months"
    ],
    details: {
      materials: "100% Organic Cotton",
      sizes: "0-24 months",
      care: "Machine wash cold, tumble dry low",
      certifications: ["GOTS Certified", "OEKO-TEX Standard 100"],
      packaging: "Premium gift box with ribbon",
      moq: "50 pieces per style"
    }
  },
  {
    title: "Rompers & Playsuits",
    description: "Effortless one-piece outfits for everyday play and comfort — easy to wear, easy to love.",
    badges: ["Best Seller", "Organic Fabric"],
    images: [romper1, romper2, romper3, romper4, romper5, romper6, romper7],
    slug: "rompers-playsuits",
    orientation: "landscape",
    features: [
      "Snap closures for quick changes",
      "Soft cotton or cotton blends",
      "Fun prints and practical design",
      "Size: 0-36 months"
    ],
    details: {
      materials: "100% Organic Cotton",
      sizes: "0-36 months",
      care: "Machine wash cold, tumble dry low",
      certifications: ["GOTS Certified", "OEKO-TEX Standard 100"],
      packaging: "Poly bag with header card",
      moq: "100 pieces per style"
    }
  },
  {
    title: "Pyjama Sets",
    description: "Soft, breathable nightwear designed to keep babies cozy through the night.",
    badges: ["Nightwear Essential", "Ultra Soft"],
    images: [pyjama1, pyjama2, pyjama3],
    slug: "pyjama-sets",
    orientation: "portrait",
    features: [
      "100% Organic Cotton",
      "Long-sleeve tops with matching bottoms",
      "Designed for restful sleep",
      "Size: 0-24 months"
    ],
    details: {
      materials: "100% Organic Cotton",
      sizes: "0-24 months",
      care: "Machine wash cold, tumble dry low",
      certifications: ["GOTS Certified", "OEKO-TEX Standard 100"],
      packaging: "Poly bag with header card",
      moq: "100 pieces per style"
    }
  },
  {
    title: "Two-Piece Sets",
    description: "Flexible outfit sets with matching tops and bottoms — perfect for everyday wear or going out.",
    badges: ["New Arrival", "Mix & Match"],
    images: [twopiece1, twopiece2, twopiece3, twopiece4, twopiece5, twopiece6, twopiece7, twopiece8],
    slug: "two-piece-sets",
    orientation: "portrait",
    features: [
      "Wear together or separately",
      "Comfortable elastic waistbands",
      "Easy care cotton or blends",
      "Size: 0-36 months"
    ],
    details: {
      materials: "100% Organic Cotton",
      sizes: "0-36 months",
      care: "Machine wash cold, tumble dry low",
      certifications: ["GOTS Certified", "OEKO-TEX Standard 100"],
      packaging: "Poly bag with header card",
      moq: "100 pieces per style"
    }
  },
  {
    title: "Dungaree Sets",
    description: "Classic dungarees paired with soft inner tees — playful style with all-day comfort.",
    badges: ["Stylish", "Layer Friendly"],
    images: [dungaree1, dungaree2, dungaree3, dungaree4],
    slug: "dungaree-sets",
    orientation: "landscape",
    features: [
      "Adjustable straps and snap buttons",
      "Includes matching innerwear",
      "Durable yet soft fabrics",
      "Size: 0-24 months"
    ],
    details: {
      materials: "100% Organic Cotton",
      sizes: "0-24 months",
      care: "Machine wash cold, tumble dry low",
      certifications: ["GOTS Certified", "OEKO-TEX Standard 100"],
      packaging: "Poly bag with header card",
      moq: "100 pieces per style"
    }
  }
]; 