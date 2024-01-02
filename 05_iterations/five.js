const coding = ["js","rb","cpp","py"]

// coding.forEach(function (val) {
//     console.log(val);
// })

// coding.forEach(element => {
//     console.log(element);
// });

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        langName : "Javascript",
        langFileName : "js"
    },
    {
        langName : "Java",
        langFileName : "java"
    },
    {
        langName : "Python",
        langFileName : "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.langName);
})