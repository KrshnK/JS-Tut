//singleton
//Object.create

// object literals

const mySym = Symbol("Key1")

const JsUser = {
    name: "Krishna",
    "Full name": "krishna gond",
    [mySym]: "myKey1",
    age: 18,
    location: "KLD",
    email: "krshn@MS.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Full name"]);
// console.log(JsUser[mySym]);

// Object.freeze(JsUser)
JsUser.email = "krishna@MS.com"
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello JS user")
}

JsUser.greetingTwo = function () {
    console.log(`Hello JS user, ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())