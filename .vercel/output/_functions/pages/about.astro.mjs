import { c as createComponent, r as renderComponent, a as renderScript, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_BNDS3UDB.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Navigation, b as $$Footer } from '../chunks/Footer_cIkNza38.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CYBHULjr.mjs';
import { g as globe } from '../chunks/international_CrAkzwRU.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const factoryMain = new Proxy({"src":"/_astro/IMG_1799-edited-removed-BSCI-2048x1365.BSHpReW0.jpg","width":2048,"height":1365,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pranavsukumaran/Desktop/astrokk/better-binary/src/assets/factory/IMG_1799-edited-removed-BSCI-2048x1365.jpg";
							}
							
							return target[name];
						}
					});

const autoCutter = new Proxy({"src":"/_astro/autocutter2.BrBvo135.jpeg","width":2800,"height":1866,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pranavsukumaran/Desktop/astrokk/better-binary/src/assets/factory/autocutter2.jpeg";
							}
							
							return target[name];
						}
					});

const sewMachine = new Proxy({"src":"/_astro/sewmachine2.CMn0MfGa.jpeg","width":2800,"height":1866,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pranavsukumaran/Desktop/astrokk/better-binary/src/assets/factory/sewmachine2.jpeg";
							}
							
							return target[name];
						}
					});

const fabricSpreader = new Proxy({"src":"/_astro/spreader2.iNYdrKhD.jpeg","width":2800,"height":1866,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pranavsukumaran/Desktop/astrokk/better-binary/src/assets/factory/spreader2.jpeg";
							}
							
							return target[name];
						}
					});

const readingBook = new Proxy({"src":"/_astro/reading-book.BljqsZqO.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pranavsukumaran/Desktop/astrokk/better-binary/src/assets/icons/reading-book.png";
							}
							
							return target[name];
						}
					});

const goal = new Proxy({"src":"/_astro/goal.BZtx112J.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pranavsukumaran/Desktop/astrokk/better-binary/src/assets/icons/goal.png";
							}
							
							return target[name];
						}
					});

const trust = new Proxy({"src":"/_astro/trust.BXlCeTad.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pranavsukumaran/Desktop/astrokk/better-binary/src/assets/icons/trust.png";
							}
							
							return target[name];
						}
					});

const chronometer = new Proxy({"src":"/_astro/chronometer.BEywbQNF.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pranavsukumaran/Desktop/astrokk/better-binary/src/assets/icons/chronometer.png";
							}
							
							return target[name];
						}
					});

const global = new Proxy({"src":"/_astro/global.AcfA3Q3A.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pranavsukumaran/Desktop/astrokk/better-binary/src/assets/icons/global.png";
							}
							
							return target[name];
						}
					});

const quality = new Proxy({"src":"/_astro/quality.B__HJqr2.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pranavsukumaran/Desktop/astrokk/better-binary/src/assets/icons/quality.png";
							}
							
							return target[name];
						}
					});

const $$About = createComponent(($$result, $$props, $$slots) => {
  const values = [
    {
      title: "Our Story",
      description: "From a single sewing line in 2000 to serving 30+ international brands today.",
      icon: readingBook,
      type: "image"
    },
    {
      title: "Our Mission",
      description: "To produce safe, sustainable, and beautiful infantwear with global impact.",
      icon: goal,
      type: "image"
    },
    {
      title: "Why Brands Trust Us",
      description: "Certified fabrics. Flexible MOQs. Unmatched quality assurance.",
      icon: trust,
      type: "image"
    }
  ];
  const stats = [
    {
      number: "23+",
      label: "Years of Experience",
      icon: chronometer,
      type: "image"
    },
    {
      number: "30+",
      label: "Global Brands",
      icon: global,
      type: "image"
    },
    {
      number: "100%",
      label: "Quality Guarantee",
      icon: quality,
      type: "image"
    },
    {
      number: "50+",
      label: "Countries Served",
      icon: globe,
      type: "image"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About Us - Kids Kreations", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, { "data-astro-cid-kh7btl4r": true })} ${maybeRenderHead()}<main data-astro-cid-kh7btl4r> <section class="hero about-hero" data-astro-cid-kh7btl4r> <div class="container" data-astro-cid-kh7btl4r> <div class="section-title" data-astro-cid-kh7btl4r> <h1 data-astro-cid-kh7btl4r>Built on Trust. Crafted with Care.</h1> <p data-astro-cid-kh7btl4r>For over 23 years, we've delivered premium infantwear to global brands worldwide.</p> </div> </div> </section> <section class="about-content" data-astro-cid-kh7btl4r> <div class="container" data-astro-cid-kh7btl4r> <div class="about-grid" data-astro-cid-kh7btl4r> <div class="about-text" data-astro-cid-kh7btl4r> <div class="card about-card" data-astro-cid-kh7btl4r> <h2 data-astro-cid-kh7btl4r>Our Journey</h2> <p data-astro-cid-kh7btl4r>Founded in 2000, Kids Kreations has grown from a small workshop to a leading manufacturer of premium infantwear, serving over 30 global brands. Our commitment to quality, ethical production, and sustainable practices has made us a trusted partner in the industry.</p> <div class="feature-list" data-astro-cid-kh7btl4r> <div class="feature-item" data-astro-cid-kh7btl4r> <i class="fas fa-check-circle" data-astro-cid-kh7btl4r></i> <span data-astro-cid-kh7btl4r>GOTS-certified organic materials</span> </div> <div class="feature-item" data-astro-cid-kh7btl4r> <i class="fas fa-check-circle" data-astro-cid-kh7btl4r></i> <span data-astro-cid-kh7btl4r>Ethical production practices</span> </div> <div class="feature-item" data-astro-cid-kh7btl4r> <i class="fas fa-check-circle" data-astro-cid-kh7btl4r></i> <span data-astro-cid-kh7btl4r>Flexible MOQ options</span> </div> <div class="feature-item" data-astro-cid-kh7btl4r> <i class="fas fa-check-circle" data-astro-cid-kh7btl4r></i> <span data-astro-cid-kh7btl4r>Custom design capabilities</span> </div> <div class="feature-item" data-astro-cid-kh7btl4r> <i class="fas fa-check-circle" data-astro-cid-kh7btl4r></i> <span data-astro-cid-kh7btl4r>Export-ready packaging</span> </div> <div class="feature-item" data-astro-cid-kh7btl4r> <i class="fas fa-check-circle" data-astro-cid-kh7btl4r></i> <span data-astro-cid-kh7btl4r>Quality control at every step</span> </div> </div> </div> </div> <div class="about-images" data-astro-cid-kh7btl4r> <div class="image-card main-image" data-astro-cid-kh7btl4r> <figure data-astro-cid-kh7btl4r> ${renderComponent($$result2, "Image", $$Image, { "src": factoryMain, "alt": "Kids Kreations manufacturing facility", "width": 2048, "height": 1365, "quality": 100, "class": "main-factory-img", "loading": "eager", "data-astro-cid-kh7btl4r": true })} <figcaption data-astro-cid-kh7btl4r>Our Bangkok facility: where craftsmanship meets care</figcaption> </figure> </div> <div class="image-grid" data-astro-cid-kh7btl4r> <div class="image-card" data-astro-cid-kh7btl4r> <figure data-astro-cid-kh7btl4r> ${renderComponent($$result2, "Image", $$Image, { "src": autoCutter, "alt": "auto cutter machine", "width": 800, "height": 600, "quality": 100, "class": "factory-img", "loading": "eager", "data-astro-cid-kh7btl4r": true })} <figcaption data-astro-cid-kh7btl4r>Automatic fabric cutter for precise and efficient cutting</figcaption> </figure> </div> <div class="image-card" data-astro-cid-kh7btl4r> <figure data-astro-cid-kh7btl4r> ${renderComponent($$result2, "Image", $$Image, { "src": sewMachine, "alt": "sewing machine", "width": 800, "height": 600, "quality": 100, "class": "factory-img", "loading": "eager", "data-astro-cid-kh7btl4r": true })} <figcaption data-astro-cid-kh7btl4r>High-quality stitching of baby garments using industrial sewing machines</figcaption> </figure> </div> <div class="image-card" data-astro-cid-kh7btl4r> <figure data-astro-cid-kh7btl4r> ${renderComponent($$result2, "Image", $$Image, { "src": fabricSpreader, "alt": "Fabric Spreader", "width": 800, "height": 600, "quality": 100, "class": "factory-img", "loading": "eager", "data-astro-cid-kh7btl4r": true })} <figcaption data-astro-cid-kh7btl4r>Even and efficient fabric spreading to prepare for accurate cutting</figcaption> </figure> </div> </div> </div> </div> </div> </section> <section class="about-values" data-astro-cid-kh7btl4r> <div class="container" data-astro-cid-kh7btl4r> <div class="values-grid" data-astro-cid-kh7btl4r> ${values.map((value) => renderTemplate`<div class="value-card" data-aos="fade-up" data-astro-cid-kh7btl4r> <div class="value-icon" data-astro-cid-kh7btl4r> ${renderComponent($$result2, "Image", $$Image, { "src": value.icon, "alt": value.title, "width": 64, "height": 64, "quality": 100, "class": "value-icon-img", "data-astro-cid-kh7btl4r": true })} </div> <h3 data-astro-cid-kh7btl4r>${value.title}</h3> <p data-astro-cid-kh7btl4r>${value.description}</p> </div>`)} </div> </div> </section> <section class="quote" data-astro-cid-kh7btl4r> <div class="container" data-astro-cid-kh7btl4r> <blockquote data-astro-cid-kh7btl4r>
"We don't just manufacture clothes. We help brands grow through craftsmanship, care, and consistency."
</blockquote> </div> </section> <section class="stats" data-astro-cid-kh7btl4r> <div class="container" data-astro-cid-kh7btl4r> <div class="stats-grid" data-astro-cid-kh7btl4r> ${stats.map((stat) => renderTemplate`<div class="stat-card" data-aos="fade-up" data-astro-cid-kh7btl4r> ${stat.type === "fa" ? renderTemplate`<i${addAttribute(`fas ${stat.icon}`, "class")} data-astro-cid-kh7btl4r></i>` : renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": stat.icon, "alt": stat.label, "width": 50, "height": 50, "quality": 100, "class": "stat-icon-img", "data-astro-cid-kh7btl4r": true })}`} <div class="stat-number" data-astro-cid-kh7btl4r>${stat.number}</div> <p data-astro-cid-kh7btl4r>${stat.label}</p> </div>`)} </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-kh7btl4r": true })} ` })}  ${renderScript($$result, "/Users/pranavsukumaran/Desktop/astrokk/better-binary/src/pages/about.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/pranavsukumaran/Desktop/astrokk/better-binary/src/pages/about.astro", void 0);

const $$file = "/Users/pranavsukumaran/Desktop/astrokk/better-binary/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
