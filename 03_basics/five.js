
//for each it does not return any vlaue

// const coding = ["js", "ruby","java","js"]
// coding.forEach((val)=>{
// console.log(val)
// // })

//const  myObject =[
//    {
//         lang:'javascript',
//         langFile:"js"     
// },
// {
//     lang:'java',
//     langFile:"java"     
// },
// {
//     lang:'python',
//     langFile:"py"     
// }
// ]
  
// myObject.forEach((item) => {
//     console.log()
// });


//filter it return the value which satisfy the given condition
const myNums = [1,2,3,4,5,6,7];

// const newNums = myNums.filter((items)=> nu>4);

//map
const newNums = myNums.map((num)=> num+10)
console.log(newNums);
console.log(myNums);

//reduce