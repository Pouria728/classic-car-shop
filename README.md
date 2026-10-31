# فروشگاه خودروهای کلاسیک | Classic Car Shop

A small static e-commerce demo for a classic-car dealership — product listing, product detail pages, a shopping cart with quantity controls and a live total, and a form to add new listings. Built with plain HTML, CSS, and JavaScript — no framework, no build step, no backend.

## Features

- Product grid on the homepage, driven by a single shared catalog
- Product detail pages with a graceful "not found" state for invalid links
- A cart with add / increment / decrement / remove / clear-all, and a running total in Tomans
- A live cart-item-count badge in the header on every page
- "Add a car" form (name, price, image, description) that persists new listings in `localStorage` and makes them fully browsable — same as the built-in catalog
- Fully right-to-left, Persian UI

## Tech stack

Vanilla HTML / CSS / JavaScript (ES6+), browser `localStorage` for cart and user-added listings — no dependencies, no build tooling. Opens directly in a browser or serves as-is from any static host (e.g. GitHub Pages).

## Running it locally

Just open `index.html` in a browser, or serve the folder with any static file server, e.g.:

```bash
npx serve .
```

## Project structure

- `index.html` — homepage / product grid
- `product.html` — single product detail + add-to-cart
- `cart.html` — cart with quantities and total
- `add-product.html` — form to add a new listing
- `products.js` — the built-in car catalog
- `catalog.js` — shared helpers: merges the built-in catalog with user-added listings, and manages the cart in `localStorage`
- `style.css` — all styling
- `images/` — product photos
