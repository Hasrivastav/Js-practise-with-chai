const arrayOne = [1,2,3,4,5];
const arrayTwo=[6,7,8,9,0]

//push add the vlaue to end of the  original array and return the lenght of the array

// const result= arrayOne.push(arrayTwo);
// console.log(result);
// console.log(arrayOne);

//The concat method in JavaScript is used to combine two or more arrays to create a new array without modifying the original arrays. It returns a new array that contains the elements of the arrays you specify as arguments, concatenated in the order you provide.

// const concatResult= arrayOne.concat(arrayTwo);
// console.log(concatResult);
// console.log(arrayOne);

//another way to combine the two arrays is by using ******spread operator****


let result_Array = [...arrayOne,...arrayTwo]
// console.log(result_Array)

// The benefit of using the spread operator over concat in JavaScript is its ability to combine an arbitrary number of values into a new array. Unlike concat, which limits you to combining two arrays at a time, the spread operator allows you to merge multiple values from various sources, such as arrays or individual elements, by simply separating them with commas. This flexibility makes the spread operator a more versatile and concise choice for combining values into a new array.

const  anotherArray =[1,2,3,[5,5,[7,8,9]]];

const result_anotherArray=anotherArray.flat(Infinity)
console.log(result_anotherArray)


//****from and of */





 