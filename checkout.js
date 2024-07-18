let totalCost = 0;

counterElem = document.querySelector('counter');
const plusBtn = document.querySelector('increase');
const minusBtn = document.querySelector('decrease');
const checkoutBtn = document.querySelector('check out');

plusBtn.addEventListener('click', function () {
    totalCost += 1;
    UpdatetotalCost();
});

minusBtn = document.querySelector('click', function () {
    totalCost -= 1;
    UpdatetotalCost();
});

checkoutBtn = document.getElementById('check out', function () {
    if (hasPizzaInCart()) {
        checkoutButton.style.display = "block";
    } else {
        checkoutButton.style.display = "none";
    }
});

document.addEventListener('alpine:init', () => {
    Alpine.data('pizzaCart', Counter);
});