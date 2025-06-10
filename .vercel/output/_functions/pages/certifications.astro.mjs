import { c as createComponent, r as renderComponent, a as renderScript, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_ybaNiIkd.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Navigation, b as $$Footer } from '../chunks/Footer_CgTK6OY1.mjs';
/* empty css                                          */
export { renderers } from '../renderers.mjs';

const $$Certifications = createComponent(($$result, $$props, $$slots) => {
  const certifications = [
    {
      title: "GOTS Certified",
      description: "Global Organic Textile Standard certification for organic textile processing",
      icon: "fa-seedling",
      features: [
        "Organic fiber processing",
        "Environmental responsibility",
        "Social compliance",
        "Chemical safety"
      ]
    },
    {
      title: "ISO 9001:2015",
      description: "Quality management system certification",
      icon: "fa-award",
      features: [
        "Quality assurance",
        "Process improvement",
        "Customer satisfaction",
        "Risk management"
      ]
    },
    {
      title: "OEKO-TEX\xAE Standard 100",
      description: "International testing and certification system for textile products",
      icon: "fa-flask",
      features: [
        "Harmful substance testing",
        "Product safety",
        "Consumer protection",
        "Environmental responsibility"
      ]
    }
  ];
  const clients = [
    {
      name: "Brand A",
      logo: "fa-store",
      description: "Leading children's wear brand in Europe"
    },
    {
      name: "Brand B",
      logo: "fa-leaf",
      description: "Premium organic clothing retailer"
    },
    {
      name: "Brand C",
      logo: "fa-globe",
      description: "Global fashion house"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Certifications - Kids Kreations", "data-astro-cid-x4be3n2s": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, { "data-astro-cid-x4be3n2s": true })} ${maybeRenderHead()}<main data-astro-cid-x4be3n2s> <!-- Hero Section --> <section class="hero services-hero" data-astro-cid-x4be3n2s> <div class="container" data-astro-cid-x4be3n2s> <div class="section-title" data-astro-cid-x4be3n2s> <h1 data-astro-cid-x4be3n2s>Our Certifications</h1> <p data-astro-cid-x4be3n2s>Committed to the highest standards of quality and sustainability</p> </div> </div> </section> <!-- Certifications Grid --> <section class="certifications-content" data-astro-cid-x4be3n2s> <div class="container" data-astro-cid-x4be3n2s> <div class="services-grid" data-astro-cid-x4be3n2s> ${certifications.map((cert) => renderTemplate`<div class="card cert-card" data-astro-cid-x4be3n2s> <div class="service-icon" data-astro-cid-x4be3n2s> <i${addAttribute(`fas ${cert.icon}`, "class")} data-astro-cid-x4be3n2s></i> </div> <h3 data-astro-cid-x4be3n2s>${cert.title}</h3> <p data-astro-cid-x4be3n2s>${cert.description}</p> <ul class="service-features" data-astro-cid-x4be3n2s> ${cert.features.map((feature) => renderTemplate`<li data-astro-cid-x4be3n2s> <i class="fas fa-check" data-astro-cid-x4be3n2s></i> <span data-astro-cid-x4be3n2s>${feature}</span> </li>`)} </ul> </div>`)} </div> </div> </section> <!-- Clients Section --> <section class="clients-content" data-astro-cid-x4be3n2s> <div class="container" data-astro-cid-x4be3n2s> <div class="section-title" data-astro-cid-x4be3n2s> <h2 data-astro-cid-x4be3n2s>Our Clients</h2> <p data-astro-cid-x4be3n2s>Trusted by leading brands worldwide</p> </div> <div class="clients-grid" data-astro-cid-x4be3n2s> ${clients.map((client) => renderTemplate`<div class="card client-card" data-astro-cid-x4be3n2s> <div class="service-icon" data-astro-cid-x4be3n2s> <i${addAttribute(`fas ${client.logo}`, "class")} data-astro-cid-x4be3n2s></i> </div> <h3 data-astro-cid-x4be3n2s>${client.name}</h3> <p data-astro-cid-x4be3n2s>${client.description}</p> </div>`)} </div> </div> </section> <!-- Call To Action --> <section class="cta-section" data-astro-cid-x4be3n2s> <div class="container" data-astro-cid-x4be3n2s> <div class="cta-content" data-astro-cid-x4be3n2s> <h2 data-astro-cid-x4be3n2s>Ready to Work Together?</h2> <p data-astro-cid-x4be3n2s>Join our growing list of satisfied clients</p> <a href="/contact" class="button button-primary" data-astro-cid-x4be3n2s>Get in Touch</a> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-x4be3n2s": true })} ` })}  ${renderScript($$result, "/Users/pranavsukumaran/Desktop/astrokk/better-binary/src/pages/certifications.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/pranavsukumaran/Desktop/astrokk/better-binary/src/pages/certifications.astro", void 0);

const $$file = "/Users/pranavsukumaran/Desktop/astrokk/better-binary/src/pages/certifications.astro";
const $$url = "/certifications";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Certifications,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
