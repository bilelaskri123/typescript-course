"use strict";
const boook = {
    item: {
        title: "Sking in the Game",
        author: "Nasim taleb",
        numberOfPages: 250,
    },
    price: 10,
    description: "about this book",
};
// example1
class Product1 {
    createProduct(product) {
        product = {
            title: "Book 1",
            author: "Author 1",
            numberOfPages: 110,
        };
        return product;
    }
    saveProductToDB(product) {
        console.log(product);
    }
}
class Product3 {
    createProduct(product) {
        return product;
    }
    saveProductToDB(product) {
        console.log(product);
    }
}
const product = new Product3();
product.createProduct({
    title: "java",
    author: "bilel askri",
    numberOfPages: 255,
});
//# sourceMappingURL=generic-interface.js.map