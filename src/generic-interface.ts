// //* Generic interface
interface IProduct<T> {
  item: T;
  price: number;
  description: string;
}

type TBook = {
  title: string;
  author: string;
  numberOfPages: number;
};

const boook: IProduct<TBook> = {
  item: {
    title: "Sking in the Game",
    author: "Nasim taleb",
    numberOfPages: 250,
  },
  price: 10,
  description: "about this book",
};

interface IProduct2<T> {
  createProduct(product: T): T;
  saveProductToDB(product: T): void;
}

// example1
class Product1 implements IProduct2<TBook> {
  createProduct(product: TBook): TBook {
    product = {
      title: "Book 1",
      author: "Author 1",
      numberOfPages: 110,
    };
    return product;
  }
  saveProductToDB(product: TBook): void {
    console.log(product);
  }
}

class Product3<K> implements IProduct2<K> {
  createProduct(product: K): K {
    return product;
  }

  saveProductToDB(product: K): void {
    console.log(product);
  }
}

const product = new Product3<TBook>();
product.createProduct({
  title: "java",
  author: "bilel askri",
  numberOfPages: 255,
});
