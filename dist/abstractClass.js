"use strict";
//* abstract class & abstract method
//* online book store website
class Payment {
    constructor(amount) {
        this.amount = amount;
    }
    paid() {
        return true;
    }
    noPaid() {
        return false;
    }
}
class PaymentWithUSD extends Payment {
    pay() {
        console.log("paid with dollar");
    }
}
const paymentWithUSD = new PaymentWithUSD("13254");
class PaymentWithDinar extends Payment {
    pay() {
        console.log("paid with dinar");
    }
}
//# sourceMappingURL=abstractClass.js.map