function IsEmail(classPrototype: Object, propertyName: string) {
  let value: string;
  const descriptor: PropertyDescriptor = {
    get() {
      return value;
    },
    set(newValue: string) {
      if (!newValue.includes("@") || !newValue.includes(".com")) {
        throw new Error("Invalid Email");
      }
      value = newValue;
    },
  };

  Object.defineProperty(classPrototype, propertyName, descriptor);
}

class Client {
  @IsEmail
  email: string;
  constructor(email: string) {
    this.email = email;
  }
}

const client = new Client("Bilel@gmail.com");
console.log(client.email);
