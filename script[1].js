let cart = [];

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    alert(`${productName} foi adicionado ao carrinho!`);
    localStorage.setItem("cart", JSON.stringify(cart));
}

window.onload = function () {
    // Verifica se o carrinho já existe no armazenamento local
    if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
    }
}