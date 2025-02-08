// inventory with items and price that people can buy.
const inventory = {
  1: { name: "shoe", price: 700 },
  2: { name: "t-shirt", price: 9000 },
  3: { name: "jeans", price: 100 },
  4: { name: "sunglasses", price: 30 },
  5: { name: "sweater", price: 100 },
  6: { name: "ps5", price: 700 },
  7: { name: "soda", price: 4000 },
  8: { name: "paper", price: 4000000 },
  9: { name: "Banana", price: 2000 },
  10: { name: "pc", price: 40000 },
};

const cart = [];
const inventoryDiv = document.getElementById("inventory");
const cartitems = document.getElementById("cart-items");
const totalDiv = document.getElementById("total");

// function to show the inventory:
function showInventory() {
  for (const key in inventory) {
    const item = inventory[key];
    const itemDiv = document.createElement("div");
    itemDiv.className = "inventory-item";
    itemDiv.innerHTML = `${key} - ${item.name} - $${item.price}
    <button class="button" onclick="addToCart(${key})">Add to cart</button>
    `;
    inventoryDiv.appendChild(itemDiv);
  }
}

// function to add items to the car:

function addToCart(key) {
  if (inventory[key]) {
    cart.push(inventory[key]);
    updateCart();
  } else {
    alert("Item not found");
  }
}

// function to update the cart:

function updateCart() {
  cartitems.innerHTML = "";
  let total = 0;
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.className = "cart-item";
    li.textContent = `${item.name} - $${item.price}`;
    cartitems.appendChild(li);
    total += item.price;
  });
  totalDiv.textContent = `Total: $${total}`;
  const clearBtn = document.createElement("button");
  clearBtn.textContent = "Clear cart";
  clearBtn.className = "button";
  clearBtn.addEventListener("click", () => {
    cart.length = 0;
    updateCart();
  });
}

showInventory();
