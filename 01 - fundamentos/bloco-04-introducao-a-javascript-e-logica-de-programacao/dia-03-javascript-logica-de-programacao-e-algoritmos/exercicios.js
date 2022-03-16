// Aprofunde seus conhecimentos

// Exercício 1
//O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

let n = 10;
let resultado = n;
for(i = 1; i < n; i++) {
    resultado = resultado * i;
}
console.log(resultado);



// Exercício 2
// Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';
let invertWord = '';

for (i = word.length - 1; i >= 0; i--) { // estrutura do laço de repetição invertidade para percorrer a string do ultimo valor até a posição 0 dela
    invertWord += word[i]; // colocando o último valor da string de origem na primeira posição da nova
}
console.log(invertWord);

// Exercício 3
// Considere o array de strings abaixo:
// let array = ['java', 'javascript', 'python', 'html', 'css'];
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggestWord = array[0];
let smallestWord = array[0];

for(i = 0; i < array.length; i++) {
    if(array[i].length > biggestWord.length) {
        biggestWord = array[i];
    }
}
console.log('A maior palavra é: ' + biggestWord);

for(i = array.length -1; i >= 0; i--) {
    if(array[i].length > smallestWord.length) {
        smallesttWord = array[i];
    }
}
console.log('A menor palavra é: ' + smallestWord);

// está errado o exercício.

// Exercício 4
// Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let number = 1;
let maxNumber = 50;
let arrayOfNumbers = [];
for (let i = 1; i <= maxNumber; i++) {

}
