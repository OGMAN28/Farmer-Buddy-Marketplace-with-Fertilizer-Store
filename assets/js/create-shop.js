const createshopButton = document.getElementById('create-shop');

// Load user data from localStorage (if available)
var shopData = JSON.parse(localStorage.getItem("shopData")) || [];

function createShop() {
    // Get the input values for registration
    var regName = document.getElementById("shop-name").value
    var regPhone = document.getElementById("shop-ph").value;
    var regLoc = document.getElementById("shop-loc").value;
    var regDet = document.getElementById("shop-det").value;

    // Create a new user object and add it to the userData array
    var newShop = { shopname: regName, shopphone:regPhone, shoploc:regLoc, shopdet:regDet};
    shopData.push(newShop);

    // Save the updated userData array to localStorage
    localStorage.setItem("shopData", JSON.stringify(shopData));

    alert("Shop created successfully!");
}
