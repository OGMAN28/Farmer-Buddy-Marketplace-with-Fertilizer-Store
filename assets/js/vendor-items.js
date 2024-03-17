var shopData = JSON.parse(localStorage.getItem("shopData")) || [];
(function displayShops() {
    var shopContainer = document.getElementById('shop-container');
    shopContainer.innerHTML = '';

    shopData.forEach(function (shop, index) {
        var shopComponent = document.createElement('div');
        shopComponent.classList.add('shop-component');

        var shopName = document.createElement('div');
        shopName.classList.add('shop-name');
        shopName.textContent = shop.shopname;

        var shopDetails = document.createElement('div');
        shopDetails.classList.add('shop-details');
        shopDetails.textContent = shop.shopdet;

        var shopLocation = document.createElement('div');
        shopLocation.classList.add('shop-location');
        shopLocation.textContent = "Location: " + shop.shoploc;

        var shopPhone = document.createElement('div');
        shopPhone.classList.add('shop-phone');
        shopPhone.textContent = "Phone: " + shop.shopphone;

        shopComponent.appendChild(shopName);
        shopComponent.appendChild(shopDetails);
        shopComponent.appendChild(shopLocation);
        shopComponent.appendChild(shopPhone);

        shopContainer.appendChild(shopComponent);
    });
})()