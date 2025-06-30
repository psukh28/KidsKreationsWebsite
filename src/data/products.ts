// Import all product images
import giftset1 from '../assets/products/giftset-1.jpg';
import giftset2 from '../assets/products/giftset-2.jpg';
import giftset3 from '../assets/products/giftset-3.jpg';
import giftset4 from '../assets/products/giftset-4.jpg';
import giftset5 from '../assets/products/giftset-5.jpg';
import giftset6 from '../assets/products/giftset-6.jpg';
import giftset7 from '../assets/products/giftset-7.jpg';
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
import starter1 from '../assets/products/starter1.jpg';
import starter2 from '../assets/products/starter2.jpg';
import starter3 from '../assets/products/starter3.jpg';

export const products = [
  {
    title: "Dungaree Sets",
    description: "Timeless dungarees paired with soft inner tees, playful style with all-day comfort.",
    badges: ["Easy Diaper Access", "GOTS Factory Certified", "Fast-Moving Inventory"],
    images: [dungaree1, dungaree2, dungaree3, dungaree4],
    slug: "dungaree-sets",
    orientation: "landscape",
    features: [
      "Adjustable shoulder straps and bottom snaps for easy dressing",
      "Comes with matching inner tee, ready-to-wear outfit",
      "Soft yet durable cotton-rich fabric, ideal for play",
      "Size range: 0–24 months"
    ],
    details: {
      materials: "Durable 95% cotton, 5% elastane blend for stretch and comfort. Inner tees are 100% combed cotton.",
      sizes: "0-3m, 3-6m, 6-12m, 12-18m, 18-24m",
      care: "Machine wash cold with like colors. Tumble dry low. Do not bleach. Iron on low if needed.",
      certifications: ["GOTS Certified Factory", "OEKO-TEX Standard 100"],
      packaging: "Individually packed in biodegradable poly bags. Hanger with custom branding available.",
      moq: "Contact us for MOQ"
    }
  },
  {
    title: "Gift Sets",
    description: "Thoughtfully curated babywear sets, beautifully packaged for gifting, complete with coordinated outfits and accessories.",
    badges: ["Premium Unboxing Experience", "Luxury Feel", "Retailer Favorite"],
    images: [giftset1, giftset2, giftset3, giftset4, giftset5, giftset6, giftset7],
    slug: "gift-sets",
    orientation: "landscape",
    features: [
      "Made with organic or GOTS-certified cotton fabrics",
      "Coordinated outfits and accessories in each set",
      "Beautifully packaged, perfect for gifting",
      "Available in sizes 0–24 months"
    ],
    details: {
      materials: "100% GOTS-certified organic cotton, interlock or rib knit for superior softness.",
      sizes: "0-3m, 3-6m, 6-12m",
      care: "Machine wash cold on gentle cycle. Tumble dry low. Use mild, eco-friendly detergent.",
      certifications: ["GOTS Certified Fabric", "Fair Trade Certified Factory"],
      packaging: "Premium rigid gift box with magnetic closure, tissue paper, and optional gift note.",
      moq: "Contact us for MOQ"
    }
  },
  {
    title: "Rompers & Playsuits",
    description: "Effortless one-piece outfits for everyday play and comfort, easy to wear, easy to love.",
    badges: ["12+ Hour Wear Tested", "Hypoallergenic Softness"],
    images: [romper1, romper2, romper3, romper4, romper5, romper6, romper7],
    slug: "rompers-playsuits",
    orientation: "landscape",
    features: [
      "One-piece design with front or bottom snap closures",
      "Made from soft cotton or cotton blends for extended wear",
      "Fun, functional prints ideal for active play",
      "Size range: 0–36 months"
    ],
    details: {
      materials: "Buttery-soft 100% organic cotton rib knit. Nickel-free snaps for sensitive skin.",
      sizes: "Newborn, 0-3m, 3-6m, 6-12m, 12-18m, 18-24m, 2T, 3T",
      care: "Machine wash inside out in cold water. Tumble dry on low or hang to dry.",
      certifications: ["GOTS Certified", "OEKO-TEX Standard 100"],
      packaging: "Individually folded and packed in clear poly bags. Custom printed bands available.",
      moq: "Contact us for MOQ"
    }
  },
  {
    title: "Starter Sets",
    description: "Complete newborn essentials bundled for convenience, perfect for hospital bags, gifting, or first outfits.",
    badges: ["First 48 Hours Ready", "Gift Ready", "0-3 Months"],
    images: [starter1, starter2, starter3],
    slug: "starter-sets",
    orientation: "portrait",
    features: [
      "Offered in 4, 6, or 7-piece newborn bundles",
      "Includes core essentials like sleepsuit, mittens, hat, bib, and more",
      "Coordinated colors and embroidery for a cohesive look",
      "Soft, breathable fabric for newborn comfort",
      "Gift-ready packaging included"
    ],
    details: {
      materials: "100% combed cotton, biowashed for minimal shrinkage and extra softness.",
      sizes: "Newborn, 0-3 months",
      care: "Machine wash gentle cycle with mild detergent. Tumble dry on lowest setting.",
      certifications: ["OEKO-TEX Standard 100"],
      packaging: "Packaged in a reusable fabric bag or gift box, ready for retail.",
      moq: "Contact us for MOQ"
    }
  },
  {
    title: "Pyjama Sets",
    description: "Soft, breathable nightwear designed to keep babies cozy through the night.",
    badges: ["Nightwear Essential", "Biowashed Softness", "Antibacterial Treated"],
    images: [pyjama1, pyjama2, pyjama3],
    slug: "pyjama-sets",
    orientation: "portrait",
    features: [
      "100% certified organic cotton for skin-safe sleep",
      "Includes long-sleeve top and matching bottoms",
      "Biowashed for lasting softness and reduced shrinkage",
      "Skin-safe antibacterial finish for added nighttime hygiene",
      "Available in sizes 0–24 months"
    ],
    details: {
      materials: "100% organic cotton with a hint of stretch. Treated with a safe, plant-based antibacterial finish.",
      sizes: "3-6m, 6-12m, 12-18m, 18-24m",
      care: "Wash before first use. Machine wash cold. Do not use fabric softener to preserve antibacterial properties.",
      certifications: ["GOTS Certified Fabric", "Biowash Certified", "Antibacterial Tested"],
      packaging: "Rolled and tied with a branded ribbon, packed in a poly bag.",
      moq: "Contact us for MOQ"
    }
  },
  {
    title: "Two-Piece Sets",
    description: "Flexible outfit sets with matching tops and bottoms, perfect for everyday wear or going out.",
    badges: ["Ready-to-Go Outfit", "Shrink-Resistant Finish", "All-Day Wear Comfort"],
    images: [twopiece1, twopiece2, twopiece3, twopiece4, twopiece5, twopiece6, twopiece7, twopiece8],
    slug: "two-piece-sets",
    orientation: "portrait",
    features: [
      "Top and bottom designed to wear together as a full outfit",
      "Comfortable elastic waistband for easy fit",
      "Machine-washable cotton or cotton blend",
      "Size range: 0–36 months"
    ],
    details: {
      materials: "Top: 100% Cotton Single Jersey. Bottom: 95% Cotton, 5% Spandex French Terry. Both shrink-resistant.",
      sizes: "0-6m, 6-12m, 12-18m, 18-24m, 2T, 3T",
      care: "Machine wash cold, tumble dry low. Can be washed and dried with minimal shrinkage.",
      certifications: ["OEKO-TEX Standard 100"],
      packaging: "Hanger pack with custom tag and size sticker.",
      moq: "Contact us for MOQ"
    }
  }
]; 