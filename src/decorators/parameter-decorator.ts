/** 
//* Decorators - Parameter Decorator
*/

function ValidateEmail(
  classPrototype: any,
  methodName: string,
  parameterIndex: number
) {
  const originalMethod:Function = classPrototype[methodName];
  classPrototype[methodName] = function (...args: any[]) {
    console.log(args);
    
    const paramValue = args[parameterIndex];
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(paramValue)) {
      throw new Error(
        `Invalid email address at index ${parameterIndex}`
      );
    }

    return originalMethod.apply(this, args);
  };
}

class EmailService {
  sendEmail(@ValidateEmail email: string) {
    console.log(`Email Sent to ${email}`);
  }
}

const emailService = new EmailService();

emailService.sendEmail("example@email.com");

try {
  emailService.sendEmail("bilel-askri");
} catch (error) {
  console.error(error);
}
