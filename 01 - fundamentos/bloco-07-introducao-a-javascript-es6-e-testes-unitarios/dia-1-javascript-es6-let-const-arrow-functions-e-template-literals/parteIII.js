// Parte III - arrow functions

// Você já está craque em declarar funções em JavaScript utilizando a seguinte sintaxe:

const printName = function () {
    const myName = 'Lucas';
    return myName;
  };
  
  console.log(printName());

//   A expressão acima está correta. Mas como você verá nos exemplos a seguir, é possível deixá-la ainda mais direta e léxica. Você aprenderá com alguns exemplos as vantagens de usarmos mais essa novidade do Javascript ES6 - arrow functions . Uma das aplicações para arrow functions é em funções anônimas. Em Javascript, é muito comum não precisarmos nomear funções, como mostrado no exemplo acima. Isso pode acontecer quando criamos funções que não serão reutilizadas, ou que serão passadas como argumento para uma outra função. Chamamos funções sem um nome específico de funções anônimas.
// Primeiramente, assista ao vídeo a seguir.

// Jeito 1 de criar função;
function soma (num1, num2) {
  return num1 + num2;
}
console.log(soma(2, 2));

// Jeito 2 de criar função (declarando uma constante);
const soma = function (num1, num2) {
  return num1 + num2;
}
console.log(soma(2, 2));

// Novo jeito de declarar função (EcmaScript6)
const soma = (num1, num2) => {
  return num1 + num2;
}
console.log(soma(2, 2));

// Novo jeito de declarar função (EcmaScript6 em uma linha)
const soma = (num1, num2) => num1 + num2;

console.log(soma(2, 2));

// Outro exemplo:

function contaPalavras (frase) {
  return frase.split(' ').length;
}
console.log(contaPalavras('Fala Trybo, beleza?'));

//Novo jeito
const contaPalavras = frase => frase.split(' ').length;
console.log(contaPalavras('Fala Trybo, beleza?'));

// Último exemplo do vídeo:

function objetoPessoa (nome, idade) {
  return {
    nome: nome,
    idade: idade
  }
}
console.log(objetoPessoa('Joaquim', 25));

//Novo jeito
const objetoPessoa = (nome, idade) => ({nome: nome, idade: idade});

console.log(objetoPessoa('Joaquim', 25));
//Observação: quando o retorno é um objeto, é necessário colocá-lo entre parêntesis para não confundir o JavaScript.

// arrow functions nada mais é do que uma forma diferente de se declarar funções escrevendo menos código. Veja abaixo como ficaria a função printName utilizando a sintaxe da arrow function :

const printName = () => {
    const myName = 'Lucas';
    return myName;
  };
  
  console.log(printName());

//   Quando não há nada no corpo da função além do que será retornado, a sintaxe da arrow function nos permite simplificar ainda mais a função printName omitindo o return e as chaves:

const printName = () => 'Lucas';
console.log(printName());

// Mas lembre-se que podemos omitir os parênteses apenas em um cenário:
// Quando a função recebe apenas um argumento, como podemos ver no exemplo abaixo:

const multiplyByTwo = number => number * 2;
console.log(multiplyByTwo(10));

// Em funções que recebem mais de um parâmetro, os parênteses não são omitidos:

const multiplication = (number, multi) => number * multi;
console.log(multiplication(8, 2));