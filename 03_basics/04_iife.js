//immediatly invoked function expression (iife)
//we sometimes want to immidiatly exectute  a function after declaring it 
//  using IIFEs helps you encapsulate your code, prevent global scope pollution, and avoid the confusion and bugs that can occur when different parts of your code unintentionally interfere with each other

(function chain(){
    console.log(`Db connected`);
})();

((name)=>{
    console.log(`my name is ${name}`)
})('harsh');



// the furst () gives a seprates scope and second () make a  exectuion call

