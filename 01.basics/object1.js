const mysym=Symbol("mykey") 


const myObj={
    name:"trisha",
    accountPassword:1234,
    email:"trisha@gmail.com",
    accountId:6639745643,
    location:"karnataka",
    [mysym]:"mykey",
    isLoggedin:true,
    lastLoggedin:["monday","saturday"]
}

// console.log(myObj.accountId)
// console.log(myObj["email"])
// console.log(myObj)
// console.log(myObj[mysym])


myObj.location="mumbai"

// console.log(myObj.location)

// Object.freeze(myObj)

// myObj.email="hegde@gmail.com"

// console.log(myObj)


myObj.greeting=function(){
    console.log("hello user")
}

myObj.greetingTwo=function(){
    console.log(`hello user,${this.name}`)
}

console.log(myObj.greeting())
console.log(myObj.greetingTwo())



