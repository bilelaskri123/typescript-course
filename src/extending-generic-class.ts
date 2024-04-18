type TLaptop = {
  brand: string;
  price: number;
};

class Store<P> {
  private _products: P[] = [];

  add(newProduct: P) {
    this._products.push(newProduct);
  }
}

//* example1:
class Product4 extends Store<TLaptop> {}

const product4 = new Product4();
product4.add({ brand: "lenovo", price: 1744 });
console.log(product4);

//* example2:
class Product5<K> extends Store<K> {}

const product5 = new Product5<TLaptop>();
product5.add({ brand: "HP", price: 2230 });
console.log(product5);
