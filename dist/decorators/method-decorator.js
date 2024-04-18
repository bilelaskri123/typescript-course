"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(classPrototype, methodName, descriptor) {
    console.log({ classPrototype, methodName, descriptor });
    const originalValue = descriptor.value;
    descriptor.value = function (speed) {
        console.log(`methode name: ${methodName}`);
        console.log("Increment speed by 10 inside decorator");
        speed = speed + 10;
        originalValue.call(this, speed);
    };
}
function Increament(value) {
    return (classPrototype, methodName, descriptor) => {
        console.log({ classPrototype, methodName, descriptor });
        const originalValue = descriptor.value;
        descriptor.value = function (speed) {
            console.log(`Increment speed by ${value} inside decorator`);
            speed = speed + value;
            originalValue.call(this, speed);
        };
    };
}
class Car {
    move(speed) {
        console.log("The car moving with speed: " + speed);
    }
    stop() {
        console.log("The car stopped");
    }
}
__decorate([
    Increament(15)
], Car.prototype, "move", null);
const car = new Car();
console.log(car.move(50));
//# sourceMappingURL=method-decorator.js.map