const myArr=[1,2,3,4,5,6,7,8,9,10]
// const newArr=myArr.map( (num) => num >= 6)


const newNum=myArr
.map( (num) => num * 10)
.map( (num) => num + 2)
.filter( (num) => num >=50)

console.log(newNum)