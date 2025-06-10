import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Y6_etADV.mjs';
import { manifest } from './manifest_Dq8D2Akj.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/api/send-email.astro.mjs');
const _page3 = () => import('./pages/certifications.astro.mjs');
const _page4 = () => import('./pages/contact.astro.mjs');
const _page5 = () => import('./pages/products/_slug_.astro.mjs');
const _page6 = () => import('./pages/products.astro.mjs');
const _page7 = () => import('./pages/services.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/api/send-email.ts", _page2],
    ["src/pages/certifications.astro", _page3],
    ["src/pages/contact.astro", _page4],
    ["src/pages/products/[slug].astro", _page5],
    ["src/pages/products.astro", _page6],
    ["src/pages/services.astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "78b10fc2-e38a-4a20-beaf-97a97877be70",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
