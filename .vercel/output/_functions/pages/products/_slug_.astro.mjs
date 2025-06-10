import { c as createComponent, e as createAstro, r as renderComponent, a as renderScript, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_ybaNiIkd.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Navigation, b as $$Footer } from '../../chunks/Footer_CgTK6OY1.mjs';
import '../../chunks/index_CCxZAn8N.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_nF7VooW5.mjs';
import { s as starter1, o as starter2, p as starter3, g as giftset1, e as giftset2, f as giftset3, h as giftset4, i as giftset5, r as romper1, j as romper2, k as romper3, l as romper4, m as romper6, n as romper7, q as pyjama1, t as pyjama2, u as pyjama3, v as twopiece1, w as twopiece2, x as twopiece3, y as twopiece4, z as twopiece5, A as twopiece6, B as twopiece7, C as twopiece8, d as dungaree1, a as dungaree2, b as dungaree3, c as dungaree4 } from '../../chunks/starter3_BXidY6Jt.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const romper5 = new Proxy({"src":"/_astro/romper-5.DbDD8wsl.jpg","width":3456,"height":2304,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pranavsukumaran/Desktop/astrokk/better-binary/src/assets/products/romper-5.jpg";
							}
							
							return target[name];
						}
					});

const products = [
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

const $$Astro = createAstro();
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const product = products.find((p) => p.slug === slug);
  if (!product) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${product.title} - Kids Kreations`, "data-astro-cid-o422f4lv": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, { "data-astro-cid-o422f4lv": true })} ${maybeRenderHead()}<main data-astro-cid-o422f4lv> <section class="product-detail" data-astro-cid-o422f4lv> <div class="container" data-astro-cid-o422f4lv> <div class="product-grid" data-astro-cid-o422f4lv> <div class="product-gallery" data-astro-cid-o422f4lv> <div class="main-image" data-astro-cid-o422f4lv> ${renderComponent($$result2, "Image", $$Image, { "src": product.images[0], "alt": product.title, "width": 1200, "height": 900, "quality": 95, "format": "webp", "class": "gallery-main", "loading": "eager", "data-original-src": product.images[0].src, "data-astro-cid-o422f4lv": true })} <button class="zoom-button" aria-label="Zoom image" data-astro-cid-o422f4lv> <i class="fas fa-search-plus" data-astro-cid-o422f4lv></i> </button> </div> <div class="thumbnail-grid" data-astro-cid-o422f4lv> ${product.images.map((image, index) => renderTemplate`<button class="thumbnail"${addAttribute(index, "data-index")} data-astro-cid-o422f4lv> ${renderComponent($$result2, "Image", $$Image, { "src": image, "alt": `${product.title} - View ${index + 1}`, "width": 200, "height": 150, "quality": 95, "format": "webp", "loading": "eager", "data-original-src": image.src, "data-astro-cid-o422f4lv": true })} </button>`)} </div> </div> <div class="product-info" data-astro-cid-o422f4lv> <h1 data-astro-cid-o422f4lv>${product.title}</h1> <p class="description" data-astro-cid-o422f4lv>${product.description}</p> <div class="badges" data-astro-cid-o422f4lv> ${product.badges.map((badge) => renderTemplate`<span${addAttribute(`badge ${badge.includes("GOTS") || badge.includes("Organic") ? "badge-green" : badge.includes("Best") || badge.includes("Popular") ? "badge-purple" : "badge-blue"}`, "class")} data-astro-cid-o422f4lv> ${badge.includes("Organic") ? "\u{1F33F}" : badge.includes("Gift") ? "\u{1F381}" : badge.includes("Best") ? "\u2B50" : ""} ${badge} </span>`)} </div> <div class="features" data-astro-cid-o422f4lv> <h2 data-astro-cid-o422f4lv>Features</h2> <ul data-astro-cid-o422f4lv> ${product.features.map((feature) => renderTemplate`<li data-astro-cid-o422f4lv> <i class="fas fa-check" data-astro-cid-o422f4lv></i> <span data-astro-cid-o422f4lv>${feature}</span> </li>`)} </ul> </div> <div class="details" data-astro-cid-o422f4lv> <h2 data-astro-cid-o422f4lv>Product Details</h2> <div class="details-grid" data-astro-cid-o422f4lv> <div class="detail-item" data-astro-cid-o422f4lv> <h3 data-astro-cid-o422f4lv>Materials</h3> <p data-astro-cid-o422f4lv>${product.details.materials}</p> </div> <div class="detail-item" data-astro-cid-o422f4lv> <h3 data-astro-cid-o422f4lv>Available Sizes</h3> <p data-astro-cid-o422f4lv>${product.details.sizes}</p> </div> <div class="detail-item" data-astro-cid-o422f4lv> <h3 data-astro-cid-o422f4lv>Care Instructions</h3> <p data-astro-cid-o422f4lv>${product.details.care}</p> </div> <div class="detail-item" data-astro-cid-o422f4lv> <h3 data-astro-cid-o422f4lv>Certifications</h3> <ul data-astro-cid-o422f4lv> ${product.details.certifications.map((cert) => renderTemplate`<li data-astro-cid-o422f4lv>${cert}</li>`)} </ul> </div> <div class="detail-item" data-astro-cid-o422f4lv> <h3 data-astro-cid-o422f4lv>Packaging</h3> <p data-astro-cid-o422f4lv>${product.details.packaging}</p> </div> <div class="detail-item" data-astro-cid-o422f4lv> <h3 data-astro-cid-o422f4lv>Minimum Order Quantity</h3> <p data-astro-cid-o422f4lv>${product.details.moq}</p> </div> </div> </div> <div class="cta" data-astro-cid-o422f4lv> <a href="/contact" class="button button-primary" data-astro-cid-o422f4lv>Request Quote</a> </div> </div> </div> </div> </section> </main>  <div id="imageModal" class="image-modal" role="dialog" aria-modal="true" aria-label="Product image viewer" data-astro-cid-o422f4lv> <div class="modal-content" data-astro-cid-o422f4lv> <button class="modal-close" aria-label="Close modal" data-astro-cid-o422f4lv>×</button> <button class="modal-nav modal-prev" aria-label="Previous image" data-astro-cid-o422f4lv>←</button> <button class="modal-nav modal-next" aria-label="Next image" data-astro-cid-o422f4lv>→</button> <div class="modal-image-container" data-astro-cid-o422f4lv> <img id="modalImage" src="" alt="Product image" class="modal-image" data-astro-cid-o422f4lv> </div> </div> </div> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-o422f4lv": true })} ` })}  ${renderScript($$result, "/Users/pranavsukumaran/Desktop/astrokk/better-binary/src/pages/products/[slug].astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/pranavsukumaran/Desktop/astrokk/better-binary/src/pages/products/[slug].astro", void 0);

const $$file = "/Users/pranavsukumaran/Desktop/astrokk/better-binary/src/pages/products/[slug].astro";
const $$url = "/products/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$slug,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
