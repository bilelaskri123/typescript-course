"use strict";
class Store {
    constructor() {
        this._products = [];
    }
    add(newProduct) {
        this._products.push(newProduct);
    }
}
//* example1:
class Product4 extends Store {
}
const product4 = new Product4();
product4.add({ brand: "lenovo", price: 1744 });
console.log(product4);
//* example2:
class Product5 extends Store {
}
const product5 = new Product5();
product5.add({ brand: "HP", price: 2230 });
console.log(product5);
//# sourceMappingURL=extending-generic-class.js.map