//height e width
const listaAnimais = document.querySelector('.animais-lista');
const height = listaAnimais.scrollHeight;
console.log(height);

// offsetTop e offsetLeft
const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop);
const animaisEsq = listaAnimais.offsetLeft;
console.log(animaisEsq);

//getBoundingClientReact()

const primeiroh2 = document.querySelector('h2');

const react = primeiroh2.getBoundingClientRect();

console.log(react);
console.log(react.width);
console.log(react.height)
console.log(react.top);
console.log(react.bottom);
console.log(react.left);
console.log(react.right);
console.log(react.x);
console.log(react.y);
