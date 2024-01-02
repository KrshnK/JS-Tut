
function sayMyName() {
    console.log("K");
    console.log("R");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("N");
    console.log("A");
}

// sayMyName()

// function addTwoNumbers(num1,num2){
//     console.log(num1 + num2)
// }

function addTwoNumbers(num1,num2){
    // let result = num1 + num2
    // return result
    return num1+num2
}

const result= addTwoNumbers(2,5)

// console.log("Result ", result);

function loginUserMessage(username = "Sam"){
    // if(username=== undefined){
    if(!username){
        console.log("plZ enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Krishna"))
// console.log(loginUserMessage())

function calculateCarPrice(val1,...num1){
    return num1
}

// console.log(calculateCarPrice(200,400,500));

const user = {
    username: "Krishna",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
// handleObject(
//     {
//         username : "Sam",
//         price : 99
//     })

const myNewArr = [200,400,600,800]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([2,3,4,5,6]));