//* Abstract Principle

class SendEmail {
  constructor(
    public from: string,
    public to: string,
    public subject: string,
    public message: string
  ) {}

  send() {
    this.validateEmailAddress();
    this.validateEmailSubject();
    this.validateEmailMessage();
    console.log("Email Sent");
  }

  private validateEmailAddress() {
    if (!this.from.includes("@") || !this.to.includes("@")) {
      throw new Error("invalid email address");
    }
  }

  private validateEmailSubject() {
    if (this.subject.length < 2) {
      throw new Error("subject cannot be less than 2 characters");
    }
  }

  private validateEmailMessage() {
    if (this.message.length < 10) {
      throw new Error("message cannot be less than 10 characters");
    }
  }
}

const sendEmail = new SendEmail(
  "askribilel@bee.net.tn",
  "saif@bee.net.tn",
  "saying hi",
  "hello how are you"
);

sendEmail.send();
