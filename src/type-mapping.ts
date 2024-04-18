type TUser = {
  id: number;
  username: string;
  email: string;
  password: string;
};

type TPerson = {
  id: number;
  name: string;
};

//? we want to create a type from TUser but all properties are readonly
//* we can refactor this two types by create a generic type

// type TReadOnlyUser = {
//   readonly [key in keyof TUser]: TUser[key];
// };

// type TReadOnlyPerson = {
//   readonly [key in keyof TPerson]: TPerson[key];
// };

type TReadOnly<T> = {
  readonly [key in keyof T]: T[key];
};

type Optional<T> = {
  [key in keyof T]?: T[key];
};

let user: TReadOnly<TUser> = {
  id: 1,
  username: "bilel",
  email: "bilel@gmail.com",
  password: "test",
};

let user7: Optional<TUser> = {
  id: 12,
  username: "mohamed",
};
