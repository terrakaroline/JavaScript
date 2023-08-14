const li = document.querySelectorAll('li');

const retornoForeach = li.forEach((item, index) => {
  item.classList.add('ativa' + index);
});


console.log(retornoForeach)

carros = ['Ford', 'Fiat', 'Honda'];

const novaArray = carros.map((item, index, array) =>{
  return item.toUpperCase();
})

const numeros = [2, 3, 4, 5, 6, 78];

const numerosX2 = numeros.map(n => n*2);
console.log(numerosX2)
console.log(novaArray)

const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const nomeAulas = aula => aula.nome;

const nomeAulas2 = function(aula){
  return aula.nome;
};

const tempoAulas = aulas.map(aula => aula.min);
console.log(tempoAulas)

const arrayNomeAulas = aulas.map(nomeAulas)
console.log(arrayNomeAulas)


const aulas2 = [10, 25, 30];
const total1 = aulas2.reduce((acumulador, atual) => {
  console.log(acumulador, atual)
  return acumulador + atual;
});
total1; // 65

const total2 = aulas2.reduce((acc, cur) => acc + cur, 100);
total2; // 165


const aulasObjeto = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const listaAulas = aulasObjeto.reduce((acumulador, aula, index) => {
  acumulador[index] = aula.nome;
  return acumulador;
}, {});

console.log(listaAulas)
