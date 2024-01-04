// ES6 

class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password 
    }

    encryptPass(){
        return `${this.password}abc`
    }
    
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai","chai@fb.com","123")

console.log(chai.encryptPass());
console.log(chai.changeUsername());

//*****************Behind the scene********************

function User (username, email, password){
    this.username = username
    this.email = email
    this.password = password 
}

User.prototype.encryptPass = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea","tea@fb.com","456")

console.log(tea.encryptPass());
console.log(tea.changeUsername());