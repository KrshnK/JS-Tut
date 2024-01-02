// var c = 300
let a = 300
if(true){
    let a = 10
    const b = 20
    // console.log("Inner",a);
}


// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username= "krishna"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);

    // two()
}

// one()

if(true){
    const username = "hitesh"
    if (username === "hitesh"){
        const website = "yt"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

//++++++++++++++++++Intresting+++++++++++++++++++++

console.log(addone(5))
function addone(num){
    return num + 1
}


addTwo(5)
const addTwo = function(num){
    return num + 2
}
