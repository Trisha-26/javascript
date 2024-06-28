const programming=["js","py","cpp","html"]

// programming.forEach(function (code){
//     console.log(code)
// })


// programming.forEach( (code)=> {
//     console.log(code)
// })


// programming.forEach(function printMe(code){
//     // console.log(code)
// })


// function printMe(code){
//     // console.log(code)
// }

// programming.forEach(printMe)


// programming.forEach( (code,index,arr) => {
//     console.log(code,index,arr)
// })


const myObj=[
    {
        languageName:"javascript",
        languageFile:"js"
    },
    {
        languageName:"py",
        languageFile:"python"
    },
    {
        languageName:"java",
        languageFile:"java"
    },
]


myObj.forEach((coding,value) => {
    console.log(coding, ":-" ,value)
})
