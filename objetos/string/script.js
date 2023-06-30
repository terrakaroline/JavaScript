// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes1 = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
];

let totalRecebimento = 0;
let totalTaxa = 0;
transacoes1.forEach((item) => {
    const numeroLimpo = item.valor.replace('R$ ', '');
    if (item.descricao.startsWith('Recebimento')){
        totalRecebimento += parseInt(numeroLimpo);
    } else {
        totalTaxa += parseInt(numeroLimpo);
    }
})
console.log(`O total recebido foi de ${totalRecebimento}`);
console.log(`O valor de taxa foi de ${totalTaxa}`)
  
  // Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

const arrayTransportes = transportes.split(';')
console.log(arrayTransportes);
  
  // Substitua todos os span's por a's
let html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;

html = html.split('span').join('a');
console.log(html)
  
  // Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase[frase.length - 1]);
  
  // Retorne o total de taxas
const transacoes = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
let total = 0
  transacoes.forEach((item) => {
    let valorItem = item.toLowerCase().trim();
    if(valorItem.startsWith('taxa')){
        total++;
    }
})

console.log(`Existem ${total} taxas`);
  
  
  