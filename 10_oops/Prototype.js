// let myName = "Krishna     "
// let myClass = "BCA  4th Sem"

// console.log(myName.truelength);

let myHeros = ["thor","spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    gerSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`hitesh says Hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

//***************Inheritance************ */

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo : true 
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment : 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "chaiAurCode"

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True lenght is : ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitsh".trueLength()
"iceTea".trueLength()