const products = [
  {
    "product_id": 1,
    "product_name": "Black T shirt",
    "product_image": "./images/black_T_shirt.jpg",
    "product_price": 500.00,
    "product_currency": "Taka",
    "product_quantity": 0
  },
  {
    "product_id": 2,
    "product_name": "Stripe shirt",
    "product_image": "./images/black_white_stripe_shirt.jpg",
    "product_price": 100.00,
    "product_currency": "Taka",
    "product_quantity": 0
  },
  {
    "product_id": 3,
    "product_name": "Blue shirt",
    "product_image": "./images/blue_check_shirt.jpg",
    "product_price": 420.00,
    "product_currency": "Taka",
    "product_quantity": 0
  },
  {
    "product_id": 4,
    "product_name": "Green shirt",
    "product_image": "./images/green_shirt.jpeg",
    "product_price": 300.00,
    "product_currency": "Taka",
    "product_quantity": 0
  },
  {
    "product_id": 5,
    "product_name": "Green T shirt",
    "product_image": "./images/green_T_shirt.jpg",
    "product_price": 120.00,
    "product_currency": "Taka",
    "product_quantity": 0
  },
  {
    "product_id": 6,
    "product_name": "Jeans shirt",
    "product_image": "./images/jeans_shirt.jpg",
    "product_price": 270.00,
    "product_currency": "Taka",
    "product_quantity": 0
  },
  {
    "product_id": 7,
    "product_name": "Orange T shirt",
    "product_image": "./images/orange_T_shirt.jpg",
    "product_price": 180.00,
    "product_currency": "Taka",
    "product_quantity": 0
  },
  {
    "product_id": 8,
    "product_name": "Pink T shirt",
    "product_image": "./images/pink_T_shirt.jpg",
    "product_price": 550.00,
    "product_currency": "Taka",
    "product_quantity": 0
  },
  {
    "product_id": 9,
    "product_name": "Grey T shirt",
    "product_image": "./images/printed_grey_T_shirt.jpg",
    "product_price": 330.00,
    "product_currency": "Taka",
    "product_quantity": 0
  },
  {
    "product_id": 10,
    "product_name": "White T shirt",
    "product_image": "./images/printed_white_T_shirt.jpeg",
    "product_price": 170.00,
    "product_currency": "Taka",
    "product_quantity": 0
  },
  {
    "product_id": 11,
    "product_name": "Red check shirt",
    "product_image": "./images/red_check_shirt.jpg",
    "product_price": 150.00,
    "product_currency": "Taka",
    "product_quantity": 0
  },
  {
    "product_id": 12,
    "product_name": "Red shirt",
    "product_image": "./images/red_shirt.jpg",
    "product_price": 350.00,
    "product_currency": "Taka",
    "product_quantity": 0
  },
  {
    "product_id": 13,
    "product_name": "Red T shirt",
    "product_image": "./images/red_T_shirt.jpg",
    "product_price": 280.00,
    "product_currency": "Taka",
    "product_quantity": 0
  },
  {
    "product_id": 14,
    "product_name": "Sky T shirt",
    "product_image": "./images/sky_T_shirt.jpg",
    "product_price": 480.00,
    "product_currency": "Taka",
    "product_quantity": 0
  },
  {
    "product_id": 15,
    "product_name": "Yellow T shirt",
    "product_image": "./images/yellow_T_shirt.jpg",
    "product_price": 220.00,
    "product_currency": "Taka",
    "product_quantity": 0
  },
];

products.map(data => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML =
    `<img src=${data.product_image} class="card-img-top" alt="Product_image" />
    <div class="card-body">
      <h6 class="card-title text-center">${data.product_name}</h6>
      <p class="card-text text-center">${data.product_price} ${data.product_currency}</p>
    </div>`

  document.querySelector(".product-cards").append(card);

  card.addEventListener("click", () => addCart(data));
});

let cart = [];

function addCart(data) {
  const domElement = document.querySelector(".cart-list");

  while (domElement.lastElementChild) {
    domElement.removeChild(domElement.lastElementChild);
  };

  const exitingCartItem = cart.find(item => item.product_id === data.product_id);

  if(exitingCartItem) {
    const cartWithoutSelectedItem = cart.filter(item => item.product_id !== data.product_id);
    exitingCartItem.product_quantity += 1;
    cartWithoutSelectedItem.push(exitingCartItem);
    cart = cartWithoutSelectedItem;
  }
  else {
    data.product_quantity += 1;

    cart.push(data);
  };

  cart.map(item => {
    const cartproduct = document.createElement("div");
    cartproduct.className = "row";
    cartproduct.innerHTML =
      `<div class="col-md-3 h-10 cart-image">
        <img src=${item.product_image} alt="cart" />
        <div class="cart-quantity text-center">
          <p>${item.product_quantity}</p>
        </div>
      </div>
      <div class="col-md-4 h-10 text-center cart-font">
        <p>${item.product_name}</p>
      </div>
      <div class="col-md-4 h-10 text-center cart-font">
        <p>${item.product_price.toFixed(2) * item.product_quantity} ${item.product_currency}</p>
      </div>
      <div class="col-md-1 h-10 text-center delete-icon">
        <img src="./images/trash.svg" alt="Delete" class="remove-button" />
      </div>`

    document.querySelector(".cart-list").append(cartproduct);

    button = cartproduct.querySelector(".remove-button");

    button.addEventListener("click", () => removeCart(item));
  });

  total();
};

function removeCart(data) {
  const domElement = document.querySelector(".cart-list");

  while (domElement.lastElementChild) {
    domElement.removeChild(domElement.lastElementChild);
  };

  const exitingCartItem = cart.find(item => item.product_id === data.product_id);

  if(exitingCartItem.product_quantity === 1) {
    const cartWithoutSelectedItem = cart.filter(item => item.product_id !== data.product_id);

    cart = cartWithoutSelectedItem;
  }
  else {
    const cartWithoutSelectedItem = cart.filter(item => item.product_id !== data.product_id);
    exitingCartItem.product_quantity -= 1;
    cartWithoutSelectedItem.push(exitingCartItem);
    cart = cartWithoutSelectedItem;
  };

  cart.map(item => {
    const cartproduct = document.createElement("div");
    cartproduct.className = "row";
    cartproduct.innerHTML =
      `<div class="col-md-3 h-10 cart-image">
        <img src=${item.product_image} alt="cart" />
        <div class="cart-quantity text-center">
          <p>${item.product_quantity}</p>
        </div>
      </div>
      <div class="col-md-4 h-10 text-center cart-font">
        <p>${item.product_name}</p>
      </div>
      <div class="col-md-4 h-10 text-center cart-font">
        <p>${item.product_price.toFixed(2) * item.product_quantity} ${item.product_currency}</p>
      </div>
      <div class="col-md-1 h-10 text-center delete-icon">
        <img src="./images/trash.svg" alt="Delete" class="remove-button" />
      </div>`

      document.querySelector(".cart-list").append(cartproduct);

      button = cartproduct.querySelector(".remove-button");

      button.addEventListener("click", () => removeCart(item));
  });

  total();
};

function total() {
  const domElement = document.querySelector(".total-price");

  while (domElement.lastElementChild) {
    domElement.removeChild(domElement.lastElementChild);
  };

  let sum = 0;

  cart.forEach(item => sum += item.product_price * item.product_quantity);

  const totalPrice = document.createElement("h6");
  totalPrice.innerText = sum + " " + "Taka";

  document.querySelector(".total-price").append(totalPrice);
}
