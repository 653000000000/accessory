document.getElementById('accessoryForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addToProductList();
});

function addToProductList() {
    var accessory = document.getElementById("accessory").value;
    var amount = parseInt(document.getElementById("amount").value);
    var price = calculatePrice(accessory) * amount;
    
    var table = document.getElementById("productList");
    var row = table.insertRow(-1);
    var accessoryCell = row.insertCell(0);
    var amountCell = row.insertCell(1);
    var priceCell = row.insertCell(2);
    
    accessoryCell.innerHTML = accessory;
    amountCell.innerHTML = amount;
    priceCell.innerHTML = "$" + price.toFixed(2);
    
    updateTotalPrice(price);
}

function calculatePrice(accessory) {
    switch (accessory) {
        case "carCover":
            return 50;
        case "seatCovers":
            return 30;
        case "floorMats":
            return 20;
        default:
            return 0;
    }
}

function updateTotalPrice(price) {
    var totalPriceElement = document.getElementById("totalPrice");
    var totalPrice = parseFloat(totalPriceElement.innerHTML);
    totalPrice += price;
    totalPriceElement.innerHTML = totalPrice.toFixed(2);
    
    calculateVAT(totalPrice);
}

function calculateVAT(grossPrice) {
    var vatRate = 0.07;
    var vatAmount = grossPrice * vatRate;
    var netPrice = grossPrice + vatAmount;
    
    document.getElementById("vatAmount").textContent = vatAmount.toFixed(2);
    document.getElementById("netPrice").textContent = netPrice.toFixed(2);
}
