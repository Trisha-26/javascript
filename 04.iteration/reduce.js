const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNum=myNums.reduce( (acc,currval) => {
//     console.log(`accumulator is ${acc} and cuurent value is ${currval}`)
//     return acc + currval
// },0)

// const newNum=myNums.reduce( function (acc,currval) {
//     return acc + currval
// })
// console.log(newNum)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]


const total=shoppingCart.reduce( (acc,item) => {
    console.log(`accumulator is ${acc} and the current value is ${item.price}`)
    return acc + item.price
},0)
console.log(total)