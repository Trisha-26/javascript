const arr=[1,2,3,4,5]

for (const num of arr) {
    // console.log(`value of arr is ${num}`)
}

const greetings="HELLO WORLD!"
for (const greets of greetings) {
    // console.log(`value of char is ${greets}`)
}


// maps

const oneMap=new Map()
oneMap.set('ind',"india")
oneMap.set('fr',"france")
oneMap.set('eng',"england")


for (const [country,value] of oneMap) {
    // console.log(country,':-', value)
}




const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
    
}