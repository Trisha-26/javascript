const myObject={
    js:"javascript",
    py:"python",
    java:"java",
    cpp:"c++"
}

for (const key in myObject) {
    // console.log(`${key} is the file of ${myObject[key]}`)
}


const myArr=["js","py","java","cpp"]

for (const key in myArr) {
    // console.log(myArr[key])
}


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(map[key])
}