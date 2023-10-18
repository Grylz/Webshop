let cart = [];
let cartTotal = 0;

function addToCart(productName, price) {
    cart.push({ productName, price });
    cartTotal += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");

    cartItems.innerHTML = "";
    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.innerText = `${item.productName} - HUF ${item.price}`;
        cartItems.appendChild(listItem);
    });

    cartTotalElement.innerText = cartTotal.toFixed(2);

    const cartLink = document.querySelectorAll("nav ul li a")[2];
    cartLink.innerText = `Kosár (${cart.length})`;
}

function showCart() {
    const cartDiv = document.getElementById("cart");
    cartDiv.style.display = "block";
}