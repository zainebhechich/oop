// Product class
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

// ShoppingCartItem class
class ShoppingCartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  // Method to calculate total price of the item
  getTotalPrice() {
    return this.product.price * this.quantity;
  }
}

// ShoppingCart class
class ShoppingCart {
  constructor() {
    this.items = []; // Array of ShoppingCartItem instances
  }

  // Add item to the cart
  addItem(product, quantity) {
    const existingItem = this.items.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity; // Update quantity if item exists
    } else {
      this.items.push(new ShoppingCartItem(product, quantity));
    }
  }

  // Remove item from the cart
  removeItem(productId) {
    this.items = this.items.filter(item => item.product.id !== productId);
  }

  // Get total price of items in the cart
  getTotalPrice() {
    return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
  }

  // Display cart items
  displayCart() {
    if (this.items.length === 0) {
      console.log("The cart is empty.");
    } else {
      console.log("Cart Items:");
      this.items.forEach(item => {
        console.log(`- ${item.product.name}: $${item.product.price} x ${item.quantity} = $${item.getTotalPrice()}`);
      });
      console.log(`Total: $${this.getTotalPrice()}`);
    }
  }
}

// Testing the functionality

// Create products
const product1 = new Product(1, "Laptop", 1000);
const product2 = new Product(2, "Mouse", 20);
const product3 = new Product(3, "Keyboard", 50);

// Create shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 1); // Adding 1 Laptop
cart.addItem(product2, 2); // Adding 2 Mice
cart.addItem(product3, 1); // Adding 1 Keyboard

// Display cart
cart.displayCart();

// Remove an item from the cart
cart.removeItem(2); // Remove Mouse

// Display cart after removal
cart.displayCart();
