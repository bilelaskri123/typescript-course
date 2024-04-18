function Logger(
  classPrototype: Object,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  console.log({ classPrototype, methodName, descriptor });
  const originalValue = descriptor.value;
  descriptor.value = function (speed: number) {
    console.log(`methode name: ${methodName}`);
    console.log("Increment speed by 10 inside decorator");
    speed = speed + 10;
    originalValue.call(this, speed);
  };
}

function Increament(value: number) {
  return (
    classPrototype: Object,
    methodName: string,
    descriptor: PropertyDescriptor
  ) => {
    console.log({ classPrototype, methodName, descriptor });

    const originalValue = descriptor.value;
    descriptor.value = function (speed: number) {
      console.log(`Increment speed by ${value} inside decorator`);
      speed = speed + value;
      originalValue.call(this, speed);
    };
  };
}

class Car {
  @Increament(15)
  move(speed: number) {
    console.log("The car moving with speed: " + speed);
  }

  stop() {
    console.log("The car stopped");
  }
}

const car = new Car();
console.log(car.move(50));
