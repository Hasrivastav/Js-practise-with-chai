// //singleton 
// // THERE ARE TOW TYPES OF DECLARIN GOBJECTS

// //1 object  using constructor (Object.create())

// // 2object literal 
// const hsUser={
//     name:"harsh",
//     "last name":"srivastav",
//     age:18,
//     emial:"harshs@gmai.com",
//     lastLoginDays:["Monday","Saturdy"]
// }
// console.log(hsUser.name);
// //we can not use . operator to acces last name as it is not supported so the proper way of accesing a property in object is this
// console.log(hsUser["last name"])


// //**symbol */

// // task:- take a symbol and add it to the key of the object then dispay it 

// //declaration of a symbol
const mySymbol= Symbol("key1");


const newUser={
    name:"harsh",
    [mySymbol]:"mykey1",
    "last name":"srivastav",
    age:18,
    emial:"harshs@gmai.com",
    lastLoginDays:["Monday","Saturdy"]
}
// //problem here is that adding symbol in this way (29)are not treted as SYmbol instead string 
// // console.log(newUser.mySymbol);

// //so we have to add it like this (30line)
// console.log(newUser[mySymbol]);


// //**changing the value of the object */
// newUser.name="sanskar";
// console.log(newUser["name"])

// //****object freeeze */used to fix the object so that no chages are propogated to it example-

// Object.freeze(newUser);
// newUser.name="raju";
// console.log(newUser["name"])


//++++++destructuring

const {name:myName}=newUser;
console.log(myName)