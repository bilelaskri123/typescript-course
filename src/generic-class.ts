//* Generic Class
 class Product<T> {
  constructor(public rating: T, public reviews: string) {}
}

const product1 = new Product<number>(4, "good");
const product2 = new Product<string>("1234", "excellent");