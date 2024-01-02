// Primitive

// 7 Types : String , Number , Boolean , undefined , null , symbol , BigInt

const  id = Symbol('123')
const anotherId = Symbol('123')

console.log(id==anotherId);

// const bigNumber = 32133243242143243243253434n


// Refrence Type(Non- primitive)

// Array , Object , Function

const heros =["shaktiman","naagraj","doga"]

let muObj= {
    name:"hitesh",
    age: 22,
}

const myfunc = function(){
    console.log("hello");
}

console.log(typeof heros)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(Premitive) , Heap(Non-premitive)

let myyoutubename="ghfujhvjhvhvjvhj"

let anotherName = myyoutubename
anotherName="chaiaurcode"

console.log(anotherName)
console.log(myyoutubename)

let userOne={
    email: "user@gamil.com",
    upi: "shgd@123445"
}

let userTwo=userOne
userTwo.email="mama@titu.com"

console.log(userOne.email)
console.log(userTwo.email)