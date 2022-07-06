 function getRandomNumber(max) {
   return Math.ceil(Math.random() * max);
     }
 let randomNumber = getRandomNumber(100);
 console.log(randomNumber);



const input = document.querySelector('.js-input');

const clue = document.querySelector('.js-pista');

const counter1 = document.querySelector('.js-contador');

const button = document.querySelector('.js-button');

let counter = 1;
button.addEventListener('click', (event) => {
event.preventDefault();
const inputValue = input.value;
const inputInt = parseInt(inputValue);

counter1.innerHTML= `${counter++}`;
    // let numberAttemps = parseInt(counter);
    // numberAttemps.innerHTML= ++ numberAttemps;
if( inputInt === randomNumber){
    clue.innerHTML = "Has ganado campeona";
}
if (inputInt > randomNumber ){
    clue.innerHTML = "Demasiado alto";

}
if (inputInt < randomNumber ){
    clue.innerHTML = "Demasiado bajo";

}
if (inputInt >100 || inputInt<1 ){
    clue.innerHTML = "El número debe estar entre 1 y 100";

}
})

