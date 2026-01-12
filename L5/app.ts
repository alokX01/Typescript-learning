export {}; // ⭐ very important (file ko module banata hai)

let userInput: unknown;
let userName: string = ""; // initialized to avoid error

userInput = 10;
userInput = "Patel";

// unknown ko directly assign nahi kar sakte
if (typeof userInput === "string") {
  userName = userInput;
}

console.log(userName);

// never return type
function generateError(message: string, code: number): never {
  throw { message: message, statusCode: code };
}

// never function ko variable me store nahi karte
generateError("Internal server error", 500);
