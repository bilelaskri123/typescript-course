function ToUpperCase(
  classPrototype: Object,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalValue = descriptor.get!;
  descriptor.get = function () {
    const result = originalValue?.call(this) as string;
    return result.toUpperCase();
  };
}

class Bag {
  constructor(public firstName: string, public lastName: string) {}

  @ToUpperCase
  get fullName(): string {
    return this.firstName + " " + this.lastName;
  }
}

const bag = new Bag("bilel", "askri");
console.log(bag.fullName);

