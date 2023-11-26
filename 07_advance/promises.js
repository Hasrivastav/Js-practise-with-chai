
// const promise1   = new Promise(function(resolve,reject){
//     //do an async task
//     //db calls, cryptograhphy, network

//     setTimeout(function(){
// console.log('Async is complete')
// resolve()
//     },1000)
// });

// promise1.then(function(){
//     console.log("promise consumed");
// })


// // const promise3 = new Promise(function (resolve,reject){
// //     setTimeout(function())
// // })

// new promise2(function(resolve,reject){
//     setTimeout(function(){
//         console.log("aync task 2");
//         resolve();
//     },1000)
// }).then(function(){
//     console.log('success')
// })



// const promise3= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({ussername:"harsh",email:"h@g.com"})
//     },1000)
// })
// promise3.then(function(user){
//  console.log(user)



// })



// we can handel the promises using( then catch) or  ascync await 

// ******************HANDELING PROMISES USEING THEN CATCH BLOCK ****************
// const promise4 = new Promise((reoslve,reject)=>{

//     setTimeout(function(){
//         let error = false;
//         if(!error){
//      reoslve({userName:"harsh", email:"h@g.com"})
//         }
//         else{
//             reject('please check the connection')
//         }
//     })
// })

// promise4.then((user)=>{
// console.log(user);
// return user.userName;
// }).then((userName)=>{
// console.log(userName)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{console.log('the promise is either reoslved or rejected')}

// )


//-------------------handeling promises useing async await--------------

// const promise5 = new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//      resolve({userName:"harsh", password:"123"})
//         }
//         else{
//             reject('please check the connection')
//         }
//     },1000)
// });
 
//  async function consumePromiseFive(){
//     try {
//         const response = await promise5
//     console.log(response);
//     } catch (error) {
//         console.log(error)
//     }
//  }

//  consumePromiseFive();


// ------------------USEING aysnc await  FOR API CALLS THE FETCH givesa a promise as a response

// async function fetchapi(){
//     try {
//         const response = await fetch('https://api.github.com/users/hasrivastav')
//     const data = await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log(error)
//     }
// }
// fetchapi();


//----------useing then catch 

fetch('https://api.github.com/users/hasrivastav')
.then((reponse)=>{
    return  reponse.json();
})
.then((data)=>{
console.log(typeof data) 
})
.catch((error)=>{
 console.log(error)
}
)
  
//fetch responsse callbaxks are stored in priority queue/mircro task quese whic has a high er prioirtiy 
// whenever we cuse a fetch method in js its working mechanism is didivde into tpow parts 
//1 part goes to handel the api of web browswer or node  and in another part resevers the space in memory for the api response  
// the internal structure of fetch is not directly accacible