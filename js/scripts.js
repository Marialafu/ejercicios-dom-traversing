// Usando el HTML que os dejo a continuación realiza los siguientes ejercicios:

// - Del div con el id box-1 imprime por consola: Todos los hijos de la lista y el item especial por separado
// - Del div con el id box-2 imprime por consola: El textContent y las clases del h2 y el p
// - Del h2 con el id subtitle-1 imprime por consola: Su textContent; la clase del div; el textContent y la clase del p que tiene debajo.
// - Del h2 con el id subtitle-2 imprime por consola: Su textContent; el textContent y la clase de los dos span que tiene.

const box1Element = document.getElementById('box-1');

console.dir(box1Element);

console.log(
  box1Element.children[0].children[0].textContent,
  box1Element.children[0].children[1].textContent,
  box1Element.children[0].children[3].textContent
);

console.log(box1Element.children[0].children[2].textContent);

//SEGUNDA PREGUNTA

const box2Element = document.getElementById('box-2');

console.dir(box2Element);

console.log(
  box2Element.children[0].children[0].textContent,
  box2Element.children[0].children[1].textContent
);
console.log(
  box2Element.children[0].children[0].classList[0],
  box2Element.children[0].children[1].classList[0]
);

// TERCERO

const subtitle1Element = document.getElementById('subtitle-1');

console.dir(subtitle1Element);

console.log(
  subtitle1Element.textContent,
  subtitle1Element.parentElement.classList[0],
  subtitle1Element.nextElementSibling.textContent,
  subtitle1Element.nextElementSibling.classList[0]
);

// CUARTO

const subtitle2Element = document.getElementById('subtitle-2');

console.dir(subtitle2Element);

console.log(
  subtitle2Element.textContent,
  subtitle2Element.parentElement.children[0].textContent,
  subtitle2Element.parentElement.classList[0],
  subtitle2Element.parentElement.children[2].textContent
);

console.clear();

// - Crea un h1 con el texto "Soy un título ", al ponerte con el ratón encima del h1, deberá cambiar al texto a "Quita de encima!!!" y al quitarte, deberá volver a poner "Soy un título"

const titleElement = document.getElementById('title');

const changeText = () => {
  titleElement.textContent = 'Quita de encima!!!';
};
const rechangeText = () => {
  titleElement.textContent = 'Soy un título';
};

titleElement.addEventListener('mouseover', changeText);
titleElement.addEventListener('mouseout', rechangeText);

// - Crea un botón con la etiqueta <button> en tu página HTML con el texto "Click me" y añadele un evento de click. Al hacer click tendrá que poner "clicked x times" donde x será el número de veces que hiciste click en él.

const clickMeButtonElement = document.getElementById('click-me-button');
let counterClicks = 0;

const countClicks = () => {
  counterClicks++;
  clickMeButtonElement.textContent = `Cliked ${counterClicks} times`;
};

console.dir(clickMeButtonElement);

clickMeButtonElement.addEventListener('click', countClicks);

// - Crea un p con el texto "esperando entrada de teclado..." al pulsar cualquier tecla deberá poner "has pulsado la tecla tal" y al soltarla el <p> volverá a tener el texto "esperando entrada de teclado...". Como reto extra puedes intentar añadir si se ha usado una combinación de teclas con alt, shift o control.

let keyboardText = document.getElementById('keyboard-info')

const keyboardKeyPressed = event => {

  keyboardText.textContent = `Has pulsado la tecla ${event.key}`
  
}
document.addEventListener('keydown', keyboardKeyPressed);

// - Crea un array con 5 palabras, las que tú quieras. Añade un h2 a tu HTML. Añade dos botones con el texto previous y next respectívamente. Haz que los botones cambien el texto del h2 con las palabras del array, cuando llegues a la última volverás a la primera al pulsar el botón next y cuando estés en la primera podrás volver a la última haciendo click al botón previous.



//Primer intento

// wordChange.children[1].textContent = wordsList[0]

// const previousWord = (wordsList) => {

//   if (wordChange.children[1].textContent === wordsList[0]){
//     wordChange.children[1].textContent = wordsList[1]
//   }
  
// }
// wordChange.children[0].addEventListener('click', (event) => previousWord(wordsList))

// const nextWord = (wordsList) => {

//   if (wordChange.children[1].textContent === wordsList[1]){
//     wordChange.children[1].textContent = wordsList[0]
//   }
// }
// wordChange.children[2].addEventListener('click', (event) => nextWord(wordsList))




//Segundo intento

//Si intento generar una variable no me deja
// let wordLoop = wordChange.children[1].textContent
// wordLoop = wordsList[0]

const wordChange = document.getElementById('word-change')
wordsList = ['Holi', 'Peperoni', 'Pizza', 'Tengo', 'Hambre']

let wordPositionInList = 0;

wordChange.children[1].textContent = wordsList[wordPositionInList]

const nextWord = () => {

  if (wordPositionInList < wordsList.length - 1){
    wordPositionInList++
  } else {wordPositionInList = 0}

  wordChange.children[1].textContent = wordsList[wordPositionInList]
  //No entiendo como coje las directrices del if si no está dentro.¿Es por que se ejecuta toda la función?
}
wordChange.children[2].addEventListener('click',nextWord)

const previousWord = () => {

  if (wordPositionInList > 0){
    wordPositionInList--
  } else {wordPositionInList = wordsList.length-1}

  wordChange.children[1].textContent = wordsList[wordPositionInList]

}
wordChange.children[0].addEventListener('click', previousWord)

//Se podría hacer una función general de presionar botón y que dentro tuviera los dos eventos?
//Qué es event target???