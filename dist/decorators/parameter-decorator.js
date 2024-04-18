"use strict";
/**
//* Decorators - Parameter Decorator
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function ValidateEmail(classPrototype, methodName, parameterIndex) {
    const originalMethod = classPrototype[methodName];
    classPrototype[methodName] = function (...args) {
        console.log(args);
        const paramValue = args[parameterIndex];
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(paramValue)) {
            throw new Error(`Invalid email address at index ${parameterIndex}`);
        }
        return originalMethod.apply(this, args);
    };
}
class EmailService {
    sendEmail(email) {
        console.log(`Email Sent to ${email}`);
    }
}
__decorate([
    __param(0, ValidateEmail)
], EmailService.prototype, "sendEmail", null);
const emailService = new EmailService();
emailService.sendEmail("example@email.com");
try {
    emailService.sendEmail("bilel-askri");
}
catch (error) {
    console.error(error);
}
//# sourceMappingURL=parameter-decorator.js.map