const user={
    username:"trisha",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website which has course of price ${this.price}`)
        // console.log(this)

    }
   
}
// user.welcomeMessage()
// user.username="TRISHA"
// user.welcomeMessage()
// console.log(this)

function newOne(){
    let username="trisha",
    price=999
    console.log(this.username)
}
newOne()

// const newTwo=function(){
//     username="trisha",
//     price=999
//     console.log(this.username)
// }
// newTwo()

// const newTwo= () => {
//     username="trisha",
//     price=999
//     console.log(this.username)
// }
// newTwo()


// const newThree= (num1,num2) =>{
//     return num1+num2
// }
// console.log(newThree(4,5))



const newThree= (num1,num2) => (num1+num2)

console.log(newThree(4,5))
