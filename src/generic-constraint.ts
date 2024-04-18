interface IBook {
  title: string;
  price: string;
}

interface ILaptop {
  brand: string;
  color: string;
}

function getProduct<T extends IBook | ILaptop>(product: T): T {
  return product;
}

let book1 = getProduct<IBook>({ title: "ts", price: "333" });
console.log(book1);
