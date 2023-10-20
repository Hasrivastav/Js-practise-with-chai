// by the way of storing and accesing data  in memory we havve two types of  datatypes primitive and non primitive

// //primitive
// all the primitive datatypes are "call by value"i.e, a copy of the original value is paseed
// 7 types : String , Number , Boolean , null  , undefined , symbol , Bigint

// js is dynamically typed language we do not need to declare the datatypes

//refrence (non-primitivev)
// arrays , object , functions

let name = "Harsh"
let anotherName = name
 anotherName = "raj"
console.log(name)
console.log(anotherName)

// here a copy of the value is assigned to anotherName and changing it will not change the original value of Name 

// for representation see excalidraw
// https://excalidraw.com/#json=zISGtmGLa2Ucva01gKdXo,59A-KiMATtwkG_UYk1r6Aw

let userOne = {
    email:"user@google.com",
    upi:"user@yb;"
}

let userTwo = userOne;
userTwo.email = "usertwo@google.com"

console.log(userOne);