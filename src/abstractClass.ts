//* abstract class & abstract method

//* online book store website
abstract class Payment {
  constructor(public amount: string) {}
  abstract pay(): void;
  protected paid(): boolean {
    return true;
  }

  protected noPaid(): boolean {
    return false;
  }
}

class PaymentWithUSD extends Payment {
  pay(): void {
    console.log("paid with dollar");
  }
}

const paymentWithUSD = new PaymentWithUSD("13254");

class PaymentWithDinar extends Payment {
  pay(): void {
    console.log("paid with dinar");
  }
}
