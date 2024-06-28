// for(let i=0;i<=10;i++){
// const element=i
// if(element===5){
//     console.log("5 is best number")
// }
// console.log(element)
// }


for(let i=0;i<=4;i++){
    // console.log(`outer loop ${i}`)

    for(let j=0;j<=3;j++){
        // console.log(`inner loop 1:  ${j} and inner loop 2 : ${i}`)
    }
}


let myArr=["flash","batman","spiderman"]

for(let i=0;i<myArr.length;i++){
    const element=myArr[i]
    // console.log(element)
}



// break and continue

for(let i=1;i<=10;i++){
    if(i===5){
console.log("5 is detected")
break
    }
    // console.log(`value of i : ${i}`)
}



for(let i=1;i<=10;i++){
    if(i===5){
console.log("5 is detected")
continue
    }
    console.log(`value of i : ${i}`)
}

