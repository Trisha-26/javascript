const email={}

// if(email){
//     console.log("email is there")
// }else{
//     console.log("no email")
// }


// falsy value
// false,0,-0,BigINt,"",null,undefined,NaN


// truthy value
// " ",{},[],"false","0",function(){}


if(email.length === 0){
    // console.log("array is empty")
}

if(Object.keys(email).length === 0){
    // console.log("object is empty")
}

// nullish coalesing operator:??

let val1;
// val1= 5 ?? 10
// val1= null ?? 10
// val1= undefined ?? 3
// val1=null ?? 10 ?? 23
val1=undefined ?? 23 ?? 2141
// console.log(val1)



// terniary operator

// condition ? true:false

const marks=50
marks>100 ? console.log("pass"):console.log("fail")