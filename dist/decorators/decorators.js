"use strict";
//? Decorator
// function Controller(constructor: Function) {
//   constructor.prototype.endPoint = "/api/auth";
//   constructor.prototype.getName = (): string => {
//     return "Name inside decorator function";
//   };
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//? Decorator factory
function Controller(endPoint) {
    return (constructor) => {
        console.log("Controller decorator called");
        constructor.prototype.endPoint = endPoint;
        constructor.prototype.getName = () => {
            return "Name inside decorator function";
        };
    };
}
function Guard(role) {
    return (constructor) => {
        console.log("Guard decorator called");
        constructor.prototype.role = role;
    };
}
let Auth = class Auth {
};
Auth = __decorate([
    Guard("Admin"),
    Controller("/api/auth")
], Auth);
const auth = new Auth();
//@ts-ignore
console.log(auth.endPoint, auth.role);
//# sourceMappingURL=decorators.js.map