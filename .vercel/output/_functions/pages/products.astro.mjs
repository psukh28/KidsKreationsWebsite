import { c as createComponent, r as renderComponent, a as renderScript, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_ybaNiIkd.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Navigation, b as $$Footer } from '../chunks/Footer_CgTK6OY1.mjs';
import '../chunks/index_CCxZAn8N.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_nF7VooW5.mjs';
import { d as dungaree1, a as dungaree2, b as dungaree3, c as dungaree4, g as giftset1, e as giftset2, f as giftset3, h as giftset4, i as giftset5, r as romper1, j as romper2, k as romper3, l as romper4, m as romper6, n as romper7, s as starter1, o as starter2, p as starter3, q as pyjama1, t as pyjama2, u as pyjama3, v as twopiece1, w as twopiece2, x as twopiece3, y as twopiece4, z as twopiece5, A as twopiece6, B as twopiece7, C as twopiece8 } from '../chunks/starter3_BXidY6Jt.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Products = createComponent(($$result, $$props, $$slots) => {
  const products2 = [
    {
      title: "Dungaree Sets",
      description: "Classic dungarees paired with soft inner tees \u2014 playful style with all-day comfort.",
      badges: ["Stylish", "Layer Friendly"],
      images: [dungaree1, dungaree2, dungaree3, dungaree4],
      slug: "dungaree-sets",
      orientation: "landscape",
      features: [
        "Adjustable straps and snap buttons",
        "Includes matching innerwear",
        "Durable yet soft fabrics",
        "Size: 0-24 months"
      ]
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
      ]
    },
    {
      title: "Rompers & Playsuits",
      description: "Effortless one-piece outfits for everyday play and comfort \u2014 easy to wear, easy to love.",
      badges: ["Best Seller", "Organic Fabric"],
      images: [romper1, romper2, romper3, romper4, romper4, romper6, romper7],
      slug: "rompers-playsuits",
      orientation: "landscape",
      features: [
        "Snap closures for quick changes",
        "Soft cotton or cotton blends",
        "Fun prints and practical design",
        "Size: 0-36 months"
      ]
    },
    {
      title: "Starter Sets",
      description: "Complete newborn essentials bundled for convenience \u2014 perfect for hospital bags, gifting, or first outfits.",
      badges: ["Organic Cotton", "Gift Ready", "0-3 Months"],
      images: [starter1, starter2, starter3],
      // Replace with actual starter set image vars
      slug: "starter-sets",
      orientation: "portrait",
      features: [
        "Available in 4, 6, and 7-piece sets",
        "Includes sleepsuit, bodysuit, booties, mittens, bib, hat, and blanket (varies by set)",
        "Coordinated color themes and embroidery",
        "Soft and breathable fabric",
        "Packaged for gifting"
      ]
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
      ]
    },
    {
      title: "Two-Piece Sets",
      description: "Flexible outfit sets with matching tops and bottoms \u2014 perfect for everyday wear or going out.",
      badges: ["New Arrival", "Mix & Match"],
      images: [twopiece1, twopiece2, twopiece3, twopiece4, twopiece5, twopiece6, twopiece7, twopiece8],
      slug: "two-piece-sets",
      orientation: "portrait",
      features: [
        "Wear together or separately",
        "Comfortable elastic waistbands",
        "Easy care cotton or blends",
        "Size: 0-36 months"
      ]
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Products - Kids Kreations", "data-astro-cid-3swd3b6j": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, { "data-astro-cid-3swd3b6j": true })} ${maybeRenderHead()}<main data-astro-cid-3swd3b6j> <section class="hero product-hero" data-astro-cid-3swd3b6j> <div class="container" data-astro-cid-3swd3b6j> <div class="section-title" data-astro-cid-3swd3b6j> <h1 data-astro-cid-3swd3b6j>Explore Our Infantwear Collection</h1> <p data-astro-cid-3swd3b6j>Flexible MOQs, GOTS-certified materials, custom packaging, and export-ready babywear.</p> </div> </div> </section> <section class="products" data-astro-cid-3swd3b6j> <div class="container" data-astro-cid-3swd3b6j> <div class="products-grid" data-astro-cid-3swd3b6j> ${products2.map((product) => renderTemplate`<article class="product-card"${addAttribute(product.orientation, "data-orientation")} data-astro-cid-3swd3b6j> <div class="product-image-wrapper" data-astro-cid-3swd3b6j> ${product.images ? renderTemplate`<div class="product-gallery" data-astro-cid-3swd3b6j> ${product.images.map((image, index) => renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": image, "alt": `${product.title} - View ${index + 1}`, "class": "product-image", "loading": index === 0 ? "eager" : "lazy", "style": `display: ${index === 0 ? "block" : "none"}`, "width": 800, "height": 600, "quality": 95, "format": "webp", "data-astro-cid-3swd3b6j": true })}`)} <button class="gallery-nav gallery-prev" aria-label="Previous image" data-astro-cid-3swd3b6j>←</button> <button class="gallery-nav gallery-next" aria-label="Next image" data-astro-cid-3swd3b6j>→</button> <div class="gallery-dots" data-astro-cid-3swd3b6j> ${product.images.map((_, index) => renderTemplate`<button class="gallery-dot"${addAttribute(`View image ${index + 1}`, "aria-label")}${addAttribute(index, "data-index")} data-astro-cid-3swd3b6j></button>`)} </div> <button class="zoom-button" aria-label="Zoom image" data-astro-cid-3swd3b6j> <i class="fas fa-search-plus" data-astro-cid-3swd3b6j></i> </button> </div>` : renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": product.image, "alt": product.title, "class": "product-image", "loading": "lazy", "width": 800, "height": 600, "quality": 95, "format": "webp", "data-astro-cid-3swd3b6j": true })}`} </div> <div class="product-info" data-astro-cid-3swd3b6j> <h3 class="product-title" data-astro-cid-3swd3b6j>${product.title}</h3> <p class="product-description" data-astro-cid-3swd3b6j>${product.description}</p> <ul class="product-features" data-astro-cid-3swd3b6j> ${product.features.slice(0, 3).map((feature) => renderTemplate`<li class="feature-item" data-astro-cid-3swd3b6j> <i class="fas fa-check" data-astro-cid-3swd3b6j></i> <span data-astro-cid-3swd3b6j>${feature}</span> </li>`)} ${product.features.length > 3 && renderTemplate`<li class="feature-more" data-astro-cid-3swd3b6j> <a${addAttribute(`/products/${product.slug}`, "href")} data-astro-cid-3swd3b6j>+${product.features.length - 3} more features</a> </li>`} </ul> <div class="product-badges" data-astro-cid-3swd3b6j> ${product.badges.slice(0, 3).map((badge) => renderTemplate`<span${addAttribute(`badge ${badge.includes("GOTS") || badge.includes("Organic") ? "badge-green" : badge.includes("Best") || badge.includes("Popular") ? "badge-purple" : "badge-blue"}`, "class")} data-astro-cid-3swd3b6j> ${badge.includes("Organic") ? "\u{1F33F}" : badge.includes("Gift") ? "\u{1F381}" : badge.includes("Best") ? "\u2B50" : ""} ${badge} </span>`)} </div> </div> </article>`)} </div> </div> </section> <section class="cta-section" data-astro-cid-3swd3b6j> <div class="container" data-astro-cid-3swd3b6j> <div class="cta-content" data-astro-cid-3swd3b6j> <h2 data-astro-cid-3swd3b6j>Interested in Our Products?</h2> <p data-astro-cid-3swd3b6j>Contact us to discuss your specific requirements and get a custom quote</p> <a href="/contact" class="button button-primary" data-astro-cid-3swd3b6j>Request Quote</a> </div> </div> </section> </main>  <div id="imageModal" class="image-modal" role="dialog" aria-modal="true" aria-label="Product image viewer" data-astro-cid-3swd3b6j> <div class="modal-content" data-astro-cid-3swd3b6j> <button class="modal-close" aria-label="Close modal" data-astro-cid-3swd3b6j>×</button> <button class="modal-nav modal-prev" aria-label="Previous image" data-astro-cid-3swd3b6j>←</button> <button class="modal-nav modal-next" aria-label="Next image" data-astro-cid-3swd3b6j>→</button> <div class="modal-image-container" data-astro-cid-3swd3b6j> <img id="modalImage" src="" alt="Product image" class="modal-image" data-astro-cid-3swd3b6j> </div> </div> </div> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-3swd3b6j": true })} ` })}  ${renderScript($$result, "/Users/pranavsukumaran/Desktop/astrokk/better-binary/src/pages/products.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/pranavsukumaran/Desktop/astrokk/better-binary/src/pages/products.astro", void 0);

const $$file = "/Users/pranavsukumaran/Desktop/astrokk/better-binary/src/pages/products.astro";
const $$url = "/products";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Products,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
