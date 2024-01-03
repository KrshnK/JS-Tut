const promisesOne = new Promise((resolve, reject) => {
    // Do an async task
    // DB calls , cryptography , network
    setTimeout(() => {
        console.log('Async task is complete');
        resolve()
    }, 1000);
})

promisesOne.then(() => {
    console.log("Promise consumed");
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async task 2 is complete');
        resolve()
    }, 1000);
}).then(() => {
    console.log("Async 2 resolve");
})

const promisesThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "chai", email: "chai@example.com" })
    }, 1000);
})

promisesThree.then((user) => {
    console.log(user);
})

const promisesFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ username: "krishna", password: "1234" })
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000);
})

promisesFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log("The promise is either resolved and rejected"))


const promisesFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ username: "javascript", password: "1234" })
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000);
})

async function consumePromiseFive() {
    try {
        const response = await promisesFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

//***************************************************** */

// async function getAlluser(){
//     try{
//         const response = await fetch("https://api.github.com/users/Krishna01Work")
//         // console.log(response)
//     const data = await response.json()
//     console.log(data.name);
//     }catch(error){
//         console.log("E: ",error);
//     }
// }

// getAlluser()

// *************************************************

fetch("https://api.github.com/users/Krishna01Work")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error) => console.log(error))