const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
primeiraComida = comidas.shift();
// Remova o último valor de comidas e coloque em uma variável
ultimaComida = comidas.pop();
// Adicione 'Arroz' ao final da array
comidas.push('Arroz');
// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift('Peixe', 'batata');

console.log(primeiraComida, ultimaComida, comidas);


const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
estudantes.sort()
console.log(estudantes)
// Inverta a ordem dos estudantes
estudantes.reverse()
console.log(estudantes)
// Verifique se Joana faz parte dos estudantes
console.log("Joana está inclusa? " + estudantes.includes('Joana'));
// Verifique se Juliana faz parte dos estudantes
console.log("Juliana está inclusa? " + estudantes.includes('Juliana'));

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join
html = html.split('section');
html = html.join('ul');
html = html.split('div');
html = html.join('li');
console.log(html);

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
carrosOriginal = carros.slice();
carros.pop();
console.log(carrosOriginal, carros);