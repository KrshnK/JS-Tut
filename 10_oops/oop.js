const user = {
    username : "Krishna",
    loginCount : 7,
    signedIn : true,

    getUserDetails : function(){
        // console.log("Got user datails from database");
        // console.log(`username : ${this.username}`);
        console.log(this);
    }


}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


function User(username,loginCount,isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

     return this  // (implicit)
}

// const userOne =  User("Hitesh",12,true)
// const userTwo = User("chai",8,false)
const userOne =  new User("Hitesh",12,true)
const userTwo = new User("chai",8,false)
console.log(userOne.constructor);
// console.log(userTwo);