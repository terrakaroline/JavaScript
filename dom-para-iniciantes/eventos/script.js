//Callback e event
const img = document.querySelector('img');
function callback(event){
    console.log('clicou');
    console.log(event);
}

img.addEventListener('click', callback)

//propriedades do event
const animaisLista = document.querySelector('.animais-lista');
function callbackLista(event){
    console.log(event.currentTarget);
    console.log(event.target);
}


animaisLista.addEventListener('click', callbackLista);
