function myName(){
    console.log("T")
    console.log("R")
    console.log("I")
    console.log("S")
    console.log("H")
    console.log("A")
}
// myName()

// function addTwoNum(num1,num2){
//     console.log(num1+num2)
// }

// addTwoNum(2,4)

// function addTwoNum(num1,num2){
//     let result=num1+num2
//     return result
// }
// const result=addTwoNum(1537634,3726571)
// console.log("Result",result)


// function isUserLoggedIn(name){
//     return`${name} is logged in`
// }
// console.log(isUserLoggedIn("trisha"))


function calculateCart(...num1){
    return num1
}
// console.log(calculateCart(200,300,400))


const user={
name:"trisha",
password:1234
}

function newUser(anyobject){
    // console.log(`my name is ${anyobject.name} and my login password is ${anyobject.password}`)
}
newUser(user)


const myArr=[200,300,4223,500]

function countArr(anyArr){
    return anyArr
}
console.log(countArr(myArr))