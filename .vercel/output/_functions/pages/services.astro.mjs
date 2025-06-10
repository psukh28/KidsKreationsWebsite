import { c as createComponent, r as renderComponent, a as renderScript, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_BNDS3UDB.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Navigation, b as $$Footer } from '../chunks/Footer_cIkNza38.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      title: "OEM Manufacturing",
      description: "Best for established brands or distributors seeking full-scale manufacturing based on their own tech packs, materials, and brand standards.",
      icon: "fa-industry",
      type: "oem",
      features: [
        "Custom design implementation",
        "Material sourcing",
        "Production management"
      ],
      learnMore: "Learn about our OEM capabilities"
    },
    {
      title: "ODM Development",
      description: "Ideal for entrepreneurs or growing labels looking for expert help in turning ideas into ready-to-sell babywear. From sketch to sample.",
      icon: "fa-lightbulb",
      type: "odm",
      features: [
        "Design consultation",
        "Prototype development",
        "Production optimization"
      ],
      learnMore: "Explore ODM services"
    },
    {
      title: "Private Label",
      description: "Launch your babywear brand instantly with fully packaged products, ideal for influencers, boutiques, and online retailers.",
      icon: "fa-tag",
      type: "private",
      features: [
        "Brand customization",
        "Packaging design",
        "Quality assurance"
      ],
      learnMore: "View private label options"
    },
    {
      title: "Custom Packaging",
      description: "Great for brands that want their babywear to stand out, with gift-ready boxes, branded tags, and beautiful presentation for retail or e-commerce.",
      icon: "fa-box",
      type: "packaging",
      features: [
        "Custom box design",
        "Hang tags",
        "Branding elements"
      ],
      learnMore: "See packaging examples"
    }
  ];
  const processSteps = [
    {
      title: "Inquiry & Brief",
      description: "We review your request and assess feasibility",
      icon: "fa-envelope-open-text",
      details: [
        "Initial consultation",
        "Requirements analysis",
        "Technical feasibility check"
      ],
      color: "rgb(41, 128, 185)"
    },
    {
      title: "Sampling & Quote",
      description: "We develop samples and estimate costs",
      icon: "fa-calculator",
      details: [
        "Material selection",
        "Sample development",
        "Cost calculation"
      ],
      color: "rgb(52, 152, 219)"
    },
    {
      title: "Bulk Production",
      description: "We manufacture at scale with QC checks",
      icon: "fa-industry",
      details: [
        "Bulk material procurement",
        "Production monitoring",
        "Quality checks"
      ],
      color: "rgb(155, 89, 182)"
    },
    {
      title: "Final QC & Packaging",
      description: "We inspect, label, and brand your product",
      icon: "fa-box-check",
      details: [
        "Final inspection",
        "Packaging design",
        "Label verification"
      ],
      color: "rgb(231, 76, 60)"
    },
    {
      title: "Export & Delivery",
      description: "We arrange documents and ship globally",
      icon: "fa-shipping-fast",
      details: [
        "Export documentation",
        "Shipping arrangement",
        "Tracking setup"
      ],
      color: "rgb(230, 126, 34)"
    },
    {
      title: "Kickstart Your Project",
      description: "Send us your designs or idea \u2014 we'll handle the rest",
      icon: "fa-paper-plane",
      details: [],
      color: "rgb(46, 204, 113)"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Services - Kids Kreations", "data-astro-cid-ucd2ps2b": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, { "data-astro-cid-ucd2ps2b": true })} ${maybeRenderHead()}<main data-astro-cid-ucd2ps2b> <section class="hero services-hero" data-astro-cid-ucd2ps2b> <div class="container" data-astro-cid-ucd2ps2b> <div class="section-title" data-astro-cid-ucd2ps2b> <h1 data-astro-cid-ucd2ps2b>Our Services</h1> <p data-astro-cid-ucd2ps2b>Comprehensive manufacturing solutions for your infantwear brand</p> </div> </div> </section> <section class="services-content" data-astro-cid-ucd2ps2b> <div class="container" data-astro-cid-ucd2ps2b> <div class="services-grid" data-astro-cid-ucd2ps2b> ${services.map((service) => renderTemplate`<div class="service-card"${addAttribute(service.type, "data-type")} data-astro-cid-ucd2ps2b> <div class="service-icon" data-astro-cid-ucd2ps2b> <i${addAttribute(`fas ${service.icon}`, "class")} data-astro-cid-ucd2ps2b></i> </div> <h3 data-astro-cid-ucd2ps2b>${service.title}</h3> <p data-astro-cid-ucd2ps2b>${service.description}</p> <ul class="service-features" data-astro-cid-ucd2ps2b> ${service.features.map((feature) => renderTemplate`<li data-astro-cid-ucd2ps2b> <i class="fas fa-check" data-astro-cid-ucd2ps2b></i> <span data-astro-cid-ucd2ps2b>${feature}</span> </li>`)} </ul> <a href="/contact" class="service-link" data-astro-cid-ucd2ps2b>${service.learnMore} </a> </div>`)} </div> </div> </section> <section class="process" data-astro-cid-ucd2ps2b> <div class="container" data-astro-cid-ucd2ps2b> <div class="section-title" data-astro-cid-ucd2ps2b> <h2 data-astro-cid-ucd2ps2b>From Idea to Export</h2> <p data-astro-cid-ucd2ps2b>A full-service roadmap to bring your babywear brand to life.</p> </div> <div class="process-grid" data-astro-cid-ucd2ps2b> ${processSteps.map((step, index) => renderTemplate`<div class="process-card"${addAttribute(index + 1, "data-step")}${addAttribute(`--delay: ${index * 100}ms`, "style")} data-astro-cid-ucd2ps2b> <div class="step-number"${addAttribute(`--step-color: ${step.color}`, "style")} data-astro-cid-ucd2ps2b> ${index + 1} </div> <div class="step-icon" data-astro-cid-ucd2ps2b> <i${addAttribute(`fas ${step.icon}`, "class")} data-astro-cid-ucd2ps2b></i> </div> <h3 data-astro-cid-ucd2ps2b>${step.title}</h3> <p data-astro-cid-ucd2ps2b>${step.description}</p> ${step.details.length > 0 && renderTemplate`<div class="step-details" data-astro-cid-ucd2ps2b> <ul data-astro-cid-ucd2ps2b> ${step.details.map((detail) => renderTemplate`<li data-astro-cid-ucd2ps2b> <i class="fas fa-check" data-astro-cid-ucd2ps2b></i> <span data-astro-cid-ucd2ps2b>${detail}</span> </li>`)} </ul> </div>`} ${index === processSteps.length - 1 && renderTemplate`<a href="/contact" class="button button-primary mt-4" data-astro-cid-ucd2ps2b>Start Your Project →</a>`} </div>`)} </div> </div> </section> <section class="cta-section" data-astro-cid-ucd2ps2b> <div class="container" data-astro-cid-ucd2ps2b> <div class="cta-content" data-astro-cid-ucd2ps2b> <h2 data-astro-cid-ucd2ps2b>Ready to Start Your Project?</h2> <p data-astro-cid-ucd2ps2b>Let's discuss how we can help bring your infantwear designs to life</p> <a href="/contact" class="button button-primary" data-astro-cid-ucd2ps2b>Get in Touch</a> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-ucd2ps2b": true })} ` })}  ${renderScript($$result, "/Users/pranavsukumaran/Desktop/astrokk/better-binary/src/pages/services.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/pranavsukumaran/Desktop/astrokk/better-binary/src/pages/services.astro", void 0);

const $$file = "/Users/pranavsukumaran/Desktop/astrokk/better-binary/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
