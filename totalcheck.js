function CheckOut(maxValue = 3000) {
  return {
      count: 0,
      maxValue: maxValue,
      plus() {
      if (this.count < this.maxValue) {
              this.count++;
              console.log("add pizza")
          }
      },
      minus() {
         if (this.count > 0) {
              this.count--;
          }
      },
}
}
