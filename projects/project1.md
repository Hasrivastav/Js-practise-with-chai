#projects related to DOM

##project link 

#solution code
## project 1
 ```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body')

buttons.forEach((button)=>{
button.addEventListener('click',function (e){
  
  if(e.target.id=='grey'){
    body.style.backgroundColor=e.target.id;
  }
  if(e.target.id=='white'){
    body.style.backgroundColor=e.target.id;
  }
  if(e.target.id=='blue'){
    body.style.backgroundColor=e.target.id;
  }  
  if(e.target.id=='yellow'){
    body.style.backgroundColor=e.target.id;
  }  
})
})
 ```

 
 ## project 2 BMI CALCULATOR
```javascript
const form = document.querySelector('form');
form.addEventListener('submit', function (e){
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    results.innerHTML = `<span>${bmi}<span>`;
  }
});


```

## project 3 digital clock

``` javascript 

const clock = document.querySelector('#clock');

setInterval(function(){
const date = new Date();

clock.innerHTML = date.toLocaleTimeString()
// console.log(date.toLocaleTimeString());
},1000)
```

## project 4 guess the number  
``` javascript 
let random = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');

let previousGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
submit.addEventListener('click',(e)=>{
e.preventDefault();
const guess = parseInt(userInput.value);
validateGuess(guess);
})
}

 function validateGuess(guess){
   if(isNaN(guess)){
     alert('Please enter a valid number')
   } else if(guess < 1){
    alert('Please enter a  number greter than 1')
  }else if ( guess > 100){
    alert('Please enter a number smaller than 100')
  }else{
    previousGuess.push(guess);
    if(numGuess === 11){
      displayGuess(guess);
      displayMessage(`Game over , Random number was ${random}`);
      endGame()
    } else{
      displayGuess(guess);
      checkGuess(guess);
    }
  }
 }

 function checkGuess(guess){
  if(guess === random){
 displayMessage('You gueesed it right');
 endGame();
}else if (guess < random) {
displayMessage(`Number is too low`)
}else if (guess > random) {
  displayMessage(`Number is too heigh`)
  }
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function displayGuess(guess){
  userInput.value = '';
  guessSlot.innerHTML += `${guess},  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`
}

function endGame(){
  userInput.value = '';
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();

}
 function newGame(){
   const newGameButton = document.querySelector('#newGame')

   newGameButton.addEventListener('click',(e)=>{
     random = parseInt(Math.random() * 100 + 1);
     previousGuess = [];
     numGuess=1;
     guessSlot.innerHTML = '';
     remaining.innerHTML = `${11 - numGuess}`;

     userInput.removeAttribute('disabled');
     startOver.removeChild(p);
     playGame = true;
     
   })
 }
```