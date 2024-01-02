const myNums =[1,2,3,]

// const myTotal = myNums.reduce(function (acc,currval) {
//     console.log(`acc : ${acc} and currval : ${currval}`);
//     return acc + currval 
// }, 0)

// const myTotal = myNums.reduce((acc,curr)=> acc+curr,0)

// console.log(myTotal);

const shoppingCart =[
    {
        item: "js",
        price:999
    },
    {
        item: "py",
        price:990
    },
    {
        item: "cpp",
        price:99
    }
]

const priceToPay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceToPay);