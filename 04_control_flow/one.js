//  if
// const isUserLoggedIn = true

// if(2 === "2"){
//     console.log("yes")
// }
// else{
//     console.log("No");
// }

// < , > , <= , >= , == , != , ===

// const score = 200

// if(score > 100){
//     let power = "One for All"
//     console.log(`User power : ${power}`)
// }
// console.log(`User power : ${power}`)

// const balance = 1000

// if(balance >500) console.log("test"),console.log("test2");  not recommended

// if (balance < 500) {
//     console.log("less than 500");
// } 
// else if (balance < 750) {
//     console.log("less than 750");
// }
// else if (balance < 900) {
//     console.log("less than 900");
// }
// else {
//     console.log("less than 1200");
// }

const UserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true


if (UserLoggedIn && debitCard && 2==3 ) { 
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User Logged In");
}