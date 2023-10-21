const  score = 400;
console.log(score);

const balance = new Number(100)
console.log(balance.toFixed(1))

const otherNumber = 123.8965
console.log(otherNumber.toPrecision(5));

//************Math */44

// we can use Math. and function then given my using Math.
console.log(Math.random());
console.log((Math.random()* 10)+1);
console.log((Math.random()*10) + 1)
console.log(Math.floor(Math.random() * 10) + 1)

const min = 10;
const max = 20;
 
console.log(Math.floor(Math.random()*(max-min+1)+min))


// Math.random(): This function generates a random floating-point number between 0 (inclusive) and 1 (exclusive).

// (max - min + 1): This part calculates the range of numbers you want to generate. By subtracting min from max and adding 1, you get the total number of integers within the range, including max and min.

// Math.random() * (max - min + 1): This scales the random number from step 1 to a range from 0 to the total number of integers within the desired range.

// Math.floor(...): The Math.floor function is used to round down the number from step 3 to the nearest integer, effectively converting the random floating-point number into a random integer.

// Finally, you add min to the result of step 4 to shift the range to [min, max].