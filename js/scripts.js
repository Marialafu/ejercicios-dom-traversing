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
