// catalog.js
// Single source of truth for combining the built-in car catalog (products.js)
// with cars added through add-product.html, plus shared cart helpers.
// Load this AFTER products.js and BEFORE each page's own inline script.

function getAllProducts() {
  const extra = JSON.parse(localStorage.getItem("extraProducts")) || [];
  return [...products, ...extra];
}

function nextProductId() {
  const all = getAllProducts();
  return all.length ? Math.max(...all.map((p) => p.id)) + 1 : 1;
}

function addExtraProduct(product) {
  const extra = JSON.parse(localStorage.getItem("extraProducts")) || [];
  extra.push(product);
  localStorage.setItem("extraProducts", JSON.stringify(extra));
}

function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(productId) {
  const product = getAllProducts().find((p) => p.id == productId);
  if (!product) return;

  const cart = getCart();
  const item = cart.find((p) => p.id == productId);
  if (item) {
    item.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  saveCart(cart);
  updateCartBadge();
  alert("به سبد خرید اضافه شد");
}

function cartItemCount(cart) {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function updateCartBadge() {
  const el = document.getElementById("cartCount");
  if (el) el.innerText = cartItemCount(getCart());
}
