// Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercicio 1:
// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;


// com o laço de repeticão "for"
// for (let i = 0; i < numbers.length; i += 1) {
//     console.log(numbers[i]);
// }

// // com o for/of
// for (let number of numbers) {
//     console.log(number);
// }

// Exercicio 2:
// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

// let sum = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//     sum = sum + numbers[i]; // recebe os valores do array em cada laço de repetição somando com a soma anterior.
// }
// console.log(sum);

// Exercicio 3:
// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

// let sum = 0;
// let avg = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//     sum = sum + numbers[i]; // recebe os valores do array em cada laço de repetição somando com a soma anterior.
//     avg = sum/(i+1);
// }
// console.log(avg);

// Exercicio 4:
// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

// let sum = 0;
// let avg = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//     sum = sum + numbers[i]; // recebe os valores do array em cada laço de repetição somando com a soma anterior.
//     avg = sum / (i + 1);
// }
// if (avg > 20) {
//     console.log('valor maior que 20');
// } else {
//     console.log('valor menor que 20');
// }


// Exercicio 5:
// Utilizando for , descubra qual o maior valor contido no array e imprima-o;
// let numberHigh = Number.NEGATIVE_INFINITY;  // função para menor valor negativo possível
// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] >= numberHigh) {
//         numberHigh = numbers[i];
//     }
// }
// console.log(numberHigh);


// Exercicio 6:
// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

// let countOdd = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 1) {
//         countOdd = countOdd + 1;
//     }
// }
// if (countOdd > 0) {
//     console.log(countOdd);
// } else {
//     console.log('nenhum valor ímpar encontrado')
// }


// Exercicio 7:
// Utilizando for , descubra qual o menor valor contido no array e imprima-o;

// let numberSmaller = Number.POSITIVE_INFINITY; // função para maior valor positivo possível
// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] < numberSmaller) {
//         numberSmaller = numbers[i];
//     }
// }
// console.log(numberSmaller);

// Exercicio 8:
// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

// let lengthArray = 25;
// let arrayOfNumbers = [];
// for (let i = 1; i <= lengthArray; i += 1) {
//     arrayOfNumbers.push(i);
// }
// console.log(arrayOfNumbers);


// Exercicio 9:
// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let lengthArray = 25;
let arrayOfNumbers = [];
for (let i = 1; i <= lengthArray; i += 1) {
    arrayOfNumbers.push(i);
}
let result = 0;
for (let i2 = 0; i2 <= arrayOfNumbers.length; i2++) {
    result = arrayOfNumbers[i2] / 2;
console.log(result);
}