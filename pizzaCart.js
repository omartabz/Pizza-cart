function pizzaCart() {
    return {
        total: 0,
        amount: 0,
        isPay: 0,
        message: '',
        isCheckout: false,
        checkoutMessage:'',

        Pay() {
            if (this.amount >= this.total) {
                return change;
            }
            else { 
                this.amount <= this.total
                return change;                 
            }
        },
        change() {
            if (this.total < this.amount) {
                let c = this.amount - this.total
                return c.toFixed(2);
            }
            // return 0;
        },
        checkoutMessage() {
            // let amount = this.amount
           let amount = parseFloat(this.amount)
           let required = parseFloat(this.total)
            if (amount >= required) {
                // console.log(amount);
                this.message = 'Enjoy your pizzas! Your change is ' + this.change(required, amount)
                setTimeout(this.clearMessage, 3000);
            }
            else {
                this.message = 'Sorry - that is not enough money!'
                setTimeout(this.clearMessage, 3000);

                // const paymentAmountInput = document.getElementById('payment-amount');
                // setTimeout(clearMessage, 3000);
                // }
            }
        },
        clearMessage() {
            this.message = '';
        }
    }
}


document.addEventListener('alpine:init', () => {
    Alpine.data('pizzaCart', pizzaCart);
})