/** enum type */
// enum Size {
//   Small,
//   Medium,
//   Large,
// }

// let mySize: Size = Size.Medium;
// console.log(mySize);
// console.log(Size);

/**Object */

type User = {
    readonly id: number; // cannot assign this value
    username?: string; // optional
    email: string;
    password: string;
    isAdmin: boolean;
    getFullName: (fullName: string) => string;
  };
  
  let user1: User = {
    id: 1,
    username: "bilel",
    email: "bilel@gmail.com",
    password: "12345",
    isAdmin: true,
    getFullName: (fullName: string) => fullName,
  };
  
  let user2: User = {
    id: 1,
    username: "bilel",
    email: "bilel@gmail.com",
    password: "12345",
    isAdmin: true,
    getFullName: (fullName: string) => fullName,
  };
  
  /** Union type */
  
  let reviews: number | string = 5;
  
  /** Intersection Type */
  type Author = {
    authorName: string;
    country: string;
  };
  
  type Details = {
    title: string;
    description: string;
    price: number;
  };
  
  type Book = Author & Details;
  
  const book: Book = {
    title: "javascript",
    description: "about javascript",
    price: 11,
    authorName: "bilel",
    country: "tunisia",
  };
  
  /** Literal Type */
  type Price = 10 | 20;
  let price: Price = 10;
  
  /** unknown type */
  function checkTypes(input: unknown) {
    if (typeof input === "string") {
      console.log(input.toUpperCase());
    }
  
    if (typeof input === "number") {
      console.log(input.toFixed());
    }
    if (typeof input === "boolean") {
      console.log(input.valueOf());
    }
  }
  
  checkTypes(true);
  
  /** never type
   * the difference between void and never is:
   * void reach the end of the function but never type never reach it.
   */
  
  function generateError(message: string): never {
    throw new Error(message);
    console.log(message); // this code never gonna work
  }