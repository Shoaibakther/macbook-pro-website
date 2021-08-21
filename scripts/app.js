// Total Discount price 

function discountPrice(discountP) {
  const promoField = document.getElementById("promo-input");
  if (promoField.value === "stevekaku") {
    const totalPrice = document.getElementById("discount-price");
    const totalPriceNumber = parseInt(totalPrice.innerText);
    const discountPrice = (totalPriceNumber / 100) * discountP;
    const discountTotalPrice = totalPriceNumber - discountPrice;
    totalPrice.innerText = discountTotalPrice;
    promoField.value = "";
  } else {
    alert("Your Promo Code " + promoField.value + "is Invalid");
    promoField.value = "";
  }
};

// Calculate Total Price 

function calculateTotal() {
  const priceM = document.getElementById("main-price").innerText;
  const priceMemory = document.getElementById("memory-total-price").innerText;
  const PriceSto = document.getElementById("storage-total-price").innerText;
  const pricedelivary = document.getElementById("delivery-price").innerText;

  const priceMainM = parseInt(priceM) + parseInt(priceMemory);
  const priceDeliverySto =
    parseInt(PriceSto) + parseInt(pricedelivary);
  const PriceTotal = priceMainM + priceDeliverySto;

  const totalPriceF = document.getElementById("total-price");
  totalPriceF.innerText = PriceTotal;
  const discountPricee = document.getElementById("discount-price");
  discountPricee.innerText = PriceTotal;
};

// Total Product Money 

function productMoneyadded(productId, productPrice) {
  const memoryPrice = document.getElementById(productId);
  memoryPrice.innerText = productPrice;
};

// Memory Selector id 
document.getElementById("memory-8gb").addEventListener("click", function () {productMoneyadded("memory-total-price", 0);
  calculateTotal();
});

document.getElementById("memory-16gb").addEventListener("click", function () {productMoneyadded("memory-total-price", 180);
calculateTotal();
});

// Storage selector id 
document.getElementById("storage-256gb").addEventListener("click", function () {productMoneyadded("storage-total-price", 0);
  calculateTotal();
});

document.getElementById("storage-512gb").addEventListener("click", function () {productMoneyadded("storage-total-price", 100);
  calculateTotal();
});

document.getElementById("storage-1tb").addEventListener("click", function () {productMoneyadded("storage-total-price", 180);
  calculateTotal();
});

// Delevary id selector 
document.getElementById("free-delivery").addEventListener("click", function () {productMoneyadded("delivery-price", 0);
  calculateTotal();
});

document.getElementById("express-delivery").addEventListener("click", function () {productMoneyadded("delivery-price", 20);
    calculateTotal();
  });

// Discount Price cupon 
document.getElementById("apply-btn").addEventListener("click", function () {
  discountPrice(20);
});
