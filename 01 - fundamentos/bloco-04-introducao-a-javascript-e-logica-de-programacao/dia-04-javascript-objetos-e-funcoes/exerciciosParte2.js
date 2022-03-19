// Parte II - Funções

// Agora vamos fazer um exercício que vai deixar nítido como funções com responsabilidades bem definidas deixam o código mais bem escrito.

// A manipulação de arrays pode ser complexa em alguns momentos e por isso o JavaScript conta com diversos métodos para a sua manipulação. A documentação é sempre a nossa maior aliada, se você tiver curiosidade de ler mais sobre esses métodos, clique aqui para acessar a documentação completa. Não se preocupe em entender todos os métodos, eles serão trabalhados cada vez com mais frequência durante o curso e sempre que um método novo for necessário ele será ensinado a você.

// Spoiler-alert : para os exercícios do dia, os métodos split , join e reverse podem ser muito úteis.

// (1) split: dividi/separa string:

stringExemplo = "João da Silva Oliveira";
resultado = stringExemplo.split(" ");
// Array retornado: ["João", "da", "Silva", "Oliveira"]


stringExemplo = "João da Silva Oliveira";
resultado = stringExemplo.split(" ", 3);
// Array retornado: ["João", "da", "Silva"]

stringExemplo = "usuario@gmail.com";
resultado = stringExemplo.split("@");
// Array retornado: ["usuario", "gmail.com"]

conteudoCSV = "exemplo ; com ; dados ; no ; formato ; csv";
resultado = conteudoCSV.split(/\s*;\s*/);
// Array retornado: ["exemplo", "com", "dados", "no", "formato", "csv"]

// (2) join: O método join() junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string.

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"

// (3) reverse: O método reverse() inverte os itens de um array. O primeiro elemento do array se torna o último e o último torna-se o primeiro.

var myArray = ['one', 'two', 'three'];
myArray.reverse();

console.log(myArray) // ['three', 'two', 'one']


// Exercício 1
// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
//      Exemplo de palíndromo: arara .
//      verificaPalindrome('arara') ;
//      Retorno esperado: true
//      verificaPalindrome('desenvolvimento') ;
//      Retorno esperado: false

let word = '';
let wordArray = [];
let wordArrayInverted = [];
let wordStringInverted = '';

function verificaPalindrome(word) {
    wordArray = word.split('');
    wordArrayInverted = wordArray.reverse();
    wordStringInverted = wordArrayInverted.join('');
    if (word === wordStringInverted) {
        return palindromeTest = 'true';
    } else {
        return palindromeTest = 'false';
    }
}
console.log(verificaPalindrome('ovo'));


// Exercício 2
// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

let array = [2, 3, 6, 7, 10, 1];

function returnHighestIndex(array) {
    highestValue = Number.MIN_SAFE_INTEGER; // menor numero possível para fazer as comparaçoes depois
    for (let index = 0; index < array.length; index++) {
        if (array[index] > highestValue) {
            highestValue = array[index];
        }
    }
    return array.indexOf(highestValue);
}
console.log(returnHighestIndex(array));

// Exercício 3
// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .

let array = [2, 4, 6, 7, 10, 0, -3];

function returnSmallestIndex(array) {
    smallestValue = Number.MAX_SAFE_INTEGER; // maior numero possível para fazer as comparaçoes depois
    for (let index = 0; index < array.length; index++) {
        if (array[index] < smallestValue) {
            smallestValue = array[index];
        }
    }
    return array.indexOf(smallestValue);
}
console.log(returnSmallestIndex(array));

// Exercício 4
// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
//      Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
//      Valor esperado no retorno da função: Fernanda .

let arrayOfNames = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function charQuantity(arrayOfNames) {
    let highestWord = ''; // menor string possível para fazer as comparações depois
    for (let index = 0; index < arrayOfNames.length; index++) {
        if (arrayOfNames[index].length > highestWord.length) {
            highestWord = arrayOfNames[index];
        }
    }
    return highestWord;
}
console.log(charQuantity(arrayOfNames));

// Exercício 5
// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
//      Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
//      Valor esperado no retorno da função: 2 .


let arrayInteiros = [2, 3, 2, 5, 8, 2, 3];
let auxliaContador = 0;
let numeroDoFor;
let numRepetições = 0;
let numMaisRepetido = 0;

function validadorMaisRepetido(array) {
    for (let num = 0; num < array.length; num += 1) {
        for (let num2 = num + 1; num2 < array.length; num2 += 1) {
            if (array[num2] == array[num]) {
                auxliaContador += 1;
            }
        }
        if (numRepetições < auxliaContador) {
            numRepetições = auxliaContador;
            numMaisRepetido = array[num];
        }
        auxliaContador = 0;
    }
    console.log(numMaisRepetido)
}

validadorMaisRepetido(arrayInteiros);


// Exercício 6
// Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
//      Valor de teste: N = 5 .
//      Valor esperado no retorno da função: 1+2+3+4+5 = 15 .


let somatorio = 0;
let n = 10;
function soma(n) {
    for (let i = 0; i <= n; i++) {
        somatorio = somatorio + i;
    }
    return somatorio;
}
console.log(soma(n));


// Exercício 7
// Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
//      Valor de teste: 'trybe' e 'be'
//      Valor esperado no retorno da função: true
//      verificaFimPalavra('trybe', 'be') ;
//      Retorno esperado: true
//      verificaFimPalavra('joaofernando', 'fernan') ;
//      Retorno esperado: false


let word = 'trybe';
let ending = 'be';

function compareWords(word, ending) {
    wordCuted = word.slice(word.length - ending.length);
    if(wordCuted === ending) {
        return true;
    } else {
        return false;
    }
}
console.log(compareWords(word, ending));


