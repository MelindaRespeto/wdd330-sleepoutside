import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

function addProductToCart(product) {
  let cartItems = getLocalStorage("so-cart") || [];

  cartItems.push(product);

  setLocalStorage("so-cart", cartItems);
}


// Add to cart button event handler
async function addToCartHandler(e) {
  console.log("Button clicked");
  console.log("Product ID:", e.target.dataset.id);

  const product = await dataSource.findProductById(e.target.dataset.id);

  console.log("Product:", product);

  addProductToCart(product);
}

// Add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);