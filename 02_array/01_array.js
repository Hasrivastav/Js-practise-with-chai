// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// The slice method is used to create a new array that contains a subset of elements from an existing array. It does not modify the original array. When using slice, you specify a range by providing two parameters, the starting index (inclusive) and the ending index (exclusive). The resulting array includes elements from the start index up to, but not including, the element at the end index. This makes it a useful tool for extracting a portion of an array without altering the original arra , 

//splice:-splice is used to add or remove elements in an array, modifying the original array.
// It takes the index at which to start making changes and the number of elements to remove (if any).
// You can also add new elements at the specified index using splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);