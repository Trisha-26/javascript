// const promiseOne=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('async is created')
//         resolve();
//     },1000)
    
// })
// promiseOne.then(function(){
//     console.log('promise consumed')
// })



// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('async2 is created')
//         resolve();
//     },1000)
    
// }).then(function(){
//     console.log('promise2 consumed')
// })



// const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('async3 is created')
//         resolve({username:"Trisha", email:"tri@g.com"});
//     },1000)
    
// })
// promiseThree.then(function(user){
//     console.log(user)
// })


const promiseFour=new Promise(function(revolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            revolve({username:"TRISHA", password:12345})
        }else{
            console.log('ERROR:something went wrong')
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user)
    return user.username
})
.then((username)=>{
    console.log(username)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>console.log('the is revolved and also rejected'))


