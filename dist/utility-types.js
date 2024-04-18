"use strict";
// Omit Type
//? Constructs a type by picking all properties from Type and then removing keys
//? string literal or union of string literals. the opposite of Pick
const post1 = {
    title: "java",
    description: "about java",
};
// Pick Type
//? Constructs a type by picking the set of properties Keys
//? (string literal or union of string literals) from Type
const post2 = {
    category: "laptop",
    likes: 177,
};
// Partial Type
//? Constructs a type with all properties of Type set to optional
//? This utility will return a type that represents all subsets of a given type
const post3 = {
    title: "post 3",
};
const post4 = {
    title: "post 4",
    description: "description 4",
};
//# sourceMappingURL=utility-types.js.map