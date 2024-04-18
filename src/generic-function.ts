//* Generic functions
function getValue<T>(value: T): T {
  return value;
}

let myName: string = getValue<string>("bilel");
console.log(myName);
