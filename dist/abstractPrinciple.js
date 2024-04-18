"use strict";
//* Abstract Principle
class SendEmail {
    constructor(from, to, subject, message) {
        this.from = from;
        this.to = to;
        this.subject = subject;
        this.message = message;
    }
    send() {
        this.validateEmailAddress();
        this.validateEmailSubject();
        this.validateEmailMessage();
        console.log("Email Sent");
    }
    validateEmailAddress() {
        if (!this.from.includes("@") || !this.to.includes("@")) {
            throw new Error("invalid email address");
        }
    }
    validateEmailSubject() {
        if (this.subject.length < 2) {
            throw new Error("subject cannot be less than 2 characters");
        }
    }
    validateEmailMessage() {
        if (this.message.length < 10) {
            throw new Error("message cannot be less than 10 characters");
        }
    }
}
const sendEmail = new SendEmail("askribilel@bee.net.tn", "saif@bee.net.tn", "saying hi", "hello how are you");
sendEmail.send();
//# sourceMappingURL=abstractPrinciple.js.map