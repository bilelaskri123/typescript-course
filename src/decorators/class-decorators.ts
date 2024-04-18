//? Decorator
// function Controller(constructor: Function) {
//   constructor.prototype.endPoint = "/api/auth";
//   constructor.prototype.getName = (): string => {
//     return "Name inside decorator function";
//   };
// }

//? Decorator factory
function Controller(endPoint: string) {
  return (constructor: Function) => {
    console.log("Controller decorator called");
    constructor.prototype.endPoint = endPoint;
    constructor.prototype.getName = (): string => {
      return "Name inside decorator function";
    };
  };
}

function Guard(role: string) {
  return (constructor: Function) => {
    console.log("Guard decorator called");
    constructor.prototype.role = role;
  };
}

@Guard("Admin")
@Controller("/api/auth")
class Auth {}

const auth = new Auth();

//@ts-ignore
console.log(auth.endPoint, auth.role);
