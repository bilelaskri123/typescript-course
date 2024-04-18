"use strict";
/** enum type */
// enum Size {
//   Small,
//   Medium,
//   Large,
// }
let user1 = {
    id: 1,
    username: "bilel",
    email: "bilel@gmail.com",
    password: "12345",
    isAdmin: true,
    getFullName: (fullName) => fullName,
};
let user2 = {
    id: 1,
    username: "bilel",
    email: "bilel@gmail.com",
    password: "12345",
    isAdmin: true,
    getFullName: (fullName) => fullName,
};
/** Union type */
let reviews = 5;
const book = {
    title: "javascript",
    description: "about javascript",
    price: 11,
    authorName: "bilel",
    country: "tunisia",
};
let price = 10;
/** unknown type */
function checkTypes(input) {
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
function generateError(message) {
    throw new Error(message);
    console.log(message); // this code never gonna work
}
//# sourceMappingURL=types.js.map