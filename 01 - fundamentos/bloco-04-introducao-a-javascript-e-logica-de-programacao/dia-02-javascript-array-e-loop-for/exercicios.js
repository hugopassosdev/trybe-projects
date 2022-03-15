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
let numberHigh = 0;
for (let i = 0; i < numbers.length; i += 1) {
    if (numberHigh <= numbers[i]) {
        numberHigh = numbers[i];
    }
}
    console.log(numberHigh);


// Exercicio 6:



// Exercicio 7:
