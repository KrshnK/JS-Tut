const user = {
    username : "Krishna",
    price : 999,

    welcomeMassage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMassage()
// user.username = "Sam"
// user.welcomeMassage()

// console.log(this);

// function chai(){
//     let username = "Hitesh"
//     console.log(this.username)
// }

// chai()

// const chai = function(){
//         let username = "Hitesh"
//         console.log(this.username)
//     }
    
//     chai()

const chai = () => {
    let username = "Hitesh"
    console.log(this)
}
    
// chai()

// const addTwo = (num1, num2) => {
//     return num1+num2
// }

// console.log(addTwo(3,5));

// const addTwo = (num1, num2) => num1+num2
// const addTwo = (num1, num2) => (num1+num2)

// const addTwo = (num1, num2) => ({username: "krishna"})

// console.log(addTwo(3,5));
