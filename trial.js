function pizzaCart() {
    return {
        total: 0,
        amount: 0,
        Pay: 0,

        // Pay() {
        //     if (this.amount >= this.total) {
        //         return change;
        //     }
        //     else { 
        //         this.amount <= this.total
        //         return change;                 
        //     }
        // },
        change(total, amount) {
            if (this.total < this.amount) {
                let c = this.amount - this.total
                return 'Your change is ' + c.toFixed(2)
            }
            return ''
        },
        checkoutMessage() {
            let amount = this.amount
            amount = parseFloat(this.amount)
            required = parseFloat(this.total)
            if (amount >= required) {
                // console.log(amount);
                this.checkoutMessage = 'Enjoy your pizzas! ' + this.change(required, amount)
                setTimeout(this.clearMessage, 3000);
            }
            else {
                this.checkoutMessage = 'Sorry - that is not enough money!'
                setTimeout(this.clearMessage, 3000);

                // const paymentAmountInput = document.getElementById('payment-amount');
                // setTimeout(clearMessage, 3000);
                // }
            }
        },
        clearMessage() {
            this.checkoutMessage = '';
        }
    }
}
CheckOut = document.getElementById('checkout-status', function () {
    if (pizza - status()) {
        CheckOut.style.display = "block";
    } else {
        CheckOut.style.display = "none";
    }
});
document.addEventListener('alpine:init', () => {
    Alpine.data('', pizzaCart);
})