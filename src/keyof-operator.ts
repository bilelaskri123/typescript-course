// * example 1
interface IPerson {
  username: string;
  age: string;
  email: string;
}

type PersonKeys = keyof IPerson;
const personKey: PersonKeys = "age";
console.log(personKey);

//*example2:
type TPc = {
  brand: string;
  price: string;
};

type PcKeys = keyof TPc; // "brand" | "price"
let pc: PcKeys = "brand";


// * example 3:
let book3 = {
    title: "java",
    author: "bilel",
    price: 22
}

type bookKeys = keyof typeof book3;

