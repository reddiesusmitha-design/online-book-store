let cart = [];
let total = 0;

function addToCart(name, price) {

    cart.push(name);
    total += price;

    document.getElementById("cartItems").innerHTML =
        "Items: " + cart.join(", ");

    document.getElementById("total").innerHTML =
        "Total: ₹" + total;
}

function showProducts() {
    document.getElementById("products")
        .scrollIntoView();
}

function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please enter username and password");
    } else {
        alert("Login Successful!");
    }
}

function signup() {
    alert("Signup page coming soon!");
}
function filterProducts() {

    let maxPrice =
        document.getElementById("maxPrice").value;

    let products =
        document.querySelectorAll(".product");

    products.forEach(function(product) {

        let price =
            Number(product.getAttribute("data-price"));

        if (maxPrice === "" || price <= Number(maxPrice)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}
function register() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let username = document.getElementById("newUsername").value;
    let password = document.getElementById("newPassword").value;

    if (name === "" || email === "" || username === "" || password === "") {
        alert("Please fill all fields");
    } else {
        alert("Registration Successful!");
    }
}
function placeOrder() {

    let name = document.getElementById("customerName").value;
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone").value;
    let payment = document.getElementById("payment").value;

    if (name === "" || address === "" || phone === "" || payment === "") {
        alert("Please fill all details");
    } else {
        alert("Order Placed Successfully!");
    }
}
function logout() {
    alert("Logged out successfully!");
    window.location.href = "index.html";
}