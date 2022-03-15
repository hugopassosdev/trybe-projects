// (1) Vídeo sobre array

// declaração de variável simples:

let pizza1 = '4 queijos';
let pizza2 = 'Frango com catupiry';
let pizza3 = 'Marguerita';
let pizza4 = 'Palmito';
let pizza5 = 'Chocolate';

console.log(pizza1, pizza2, pizza3, pizza4, pizza5) // muito custoso e demorado


// declaração de variável composta (arrray)

let pizzas = ['4 queijos', 'Frango com catupiry', 'Marguerita', 'Palmito', 'Chocolate'];

// pizzas[5] = 'Peito de Peru'; // adiciona um valor na quinta posição do array (se ela não estivesse vazia, o valor anterior seria sobreescrito)

// console.log('Menu de sabores: ' + pizzas);

// forma marota para adicionar valores em arrau (na última posição para não perder valores).

pizzas.push('Peito de peru');
pizzas.push('Portuguesa');

console.log(pizzas);

// quantidade de elementos no array:

console.log(pizzas.length);

// colocar o array em ordem alafabética

console.log(pizzas.sort());

// mostrar elemento em específico:

console.log(pizzas[1]);

// colocar arrays dentro de laços de repetição

// método sem laços de repetição (boring)
console.log(pizzas[0]);
console.log(pizzas[1]);
console.log(pizzas[2]);
console.log(pizzas[3]);
console.log(pizzas[4]);
console.log(pizzas[5]);

// método com laços de repetição e com a vantagem de sempre atualizar o tamanho do array automaticamente (caso existam pushes nele)

for (let index = 0; index < pizzas.length; index++) {
    console.log(pizzas[index]);
}

// (2) Parte escrita no course sobre array

// Acessar elementos no array


// Quantidade de elementos - .length
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length);
// 3

// Acessar elemento de posição específica - []
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
// Tomar café

// Acessar elemento da última posição - .length -1
let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);
// Brincar com o cachorro

// Adicionar elemento na última posição - .push
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
console.log(tasksList);

// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

// Adicionar elemento na primeira posição - .unshift
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.unshift('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
console.log(tasksList);

// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

// Remover o último elemento do array - .pop
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.pop();  // remove a última tarefa
console.log(tasksList);
// [ 'Tomar café', 'Reunião' ]

// Remover o primeiro elemento do array - .shift
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.shift();  // remove a última tarefa
console.log(tasksList);
// [ 'Tomar café', 'Reunião' ]

// Procurar índice de um item no array. - .indexof
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let indexOfTask = tasksList.indexOf('Reunião');
console.log(indexOfTask);

// Exercício 1:
// Obtenha o valor "Serviços" do array menu :

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);
// Serviços

// Exercício 2:
// Procure o índice do valor "Portfólio" do array menu:

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);
// 2

// Exercício 3:
// Adicione o valor "Contato" no final do array menu:

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

menu.push('Contato');

console.log(menu);
