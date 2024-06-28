const tinderUser=new Object()

tinderUser.id="123hcs"
tinderUser.name="trisha"
tinderUser.email="t@gamil.com"
tinderUser.isLoggedIn=true

// console.log(tinderUser.id)
// console.log(tinderUser)

const regularUser={
    location:"mumbai",
    fullname:{
        username:{
firstname:"trisha",
lastname:"hegde",
        }
    }
}
// console.log(regularUser.fullname.username.lastname)


const newobj={...tinderUser, ...regularUser}
// console.log(newobj)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3={obj1,obj2}
const obj3=Object.assign({},obj1,obj2)
// console.log(obj3)


// user[1].email
// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty("email1"))


// console.log(tinderUser)


const classes={
    username:"trisha",
    fees:2000,
    courseInstructor:"hitesh"
}

const{courseInstructor:c}=classes
console.log(c)
