//* Utility Types in typescript
type Post = {
  title: string;
  category: string;
  description: string;
  likes: number;
};

// Omit Type
//? Constructs a type by picking all properties from Type and then removing keys
//? string literal or union of string literals. the opposite of Pick

const post1: Omit<Post, "category" | "likes"> = {
  title: "java",
  description: "about java",
};

// Pick Type
//? Constructs a type by picking the set of properties Keys
//? (string literal or union of string literals) from Type
const post2: Pick<Post, "category" | "likes"> = {
  category: "laptop",
  likes: 177,
};

// Partial Type
//? Constructs a type with all properties of Type set to optional
//? This utility will return a type that represents all subsets of a given type
const post3: Partial<Post> = {
  title: "post 3",
};

const post4: OptionalType<Post> = {
  title: "post 4",
  description: "description 4",
};

type OptionalType<T> = {
  [key in keyof T]?: T[key];
};
