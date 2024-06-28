const temperature=50

// if(temperature===40){
//     console.log("less than 50")
// }
// console.log("equal to 50")

// const score=200

// if(score<100){
//     let power="fly"
//     console.log(`user power: ${power}`)
// }else{
//     let power1="nothing"
// console.log(`user power: ${power1}`)
// }

const marks=151

if(marks<150){
    console.log("fail:D grade")
}else if(marks<350){
    console.log("pass:B grade")
}else if(marks<600){
    console.log("pass:B grade")
}else{
    console.log("pass:A grade")
}


const userLoggedIn=true
const currentlyUsing=false
const loggedInbyemail=false
const loggedInbygoggle=false

if(userLoggedIn && currentlyUsing){
    console.log("allow to buy course")
}else{
    console.log("don't allow")
}

if(loggedInbygoggle || loggedInbyemail){
    console.log("user logged in")
}
else{
    console.log("user has not logged in")
}