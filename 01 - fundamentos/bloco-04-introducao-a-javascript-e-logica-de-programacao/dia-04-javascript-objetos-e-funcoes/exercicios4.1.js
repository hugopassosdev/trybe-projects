// Exercicio 1
// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:


// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)
// *Dica: Neste link você encontra mais detalhes sobre operadores matemáticos 😉

// let a = 10;
// let b = 5;

// let adicao = a + b;
// let subtracao = a - b;
// let multiplicacao = a * b;
// let divisao = a / b;
// let modulo = a % b;

// console.log(adicao);
// console.log(subtracao);
// console.log(multiplicacao);
// console.log(divisao);
// console.log(modulo);

// transformar em função:


function adicao(a, b) {
    return a + b;
}
function subtracao(a, b) {
    return a - b;
}
function multiplicacao(a, b) {
    return a * b;
}
function divisao(a, b) {
    return a / b;
}
function modulo(a, b) {
    return a % b;
}

console.log(adicao(20, 10));
console.log(subtracao(20, 10));
console.log(multiplicacao(20, 10));
console.log(divisao(20, 10));
console.log(modulo(20, 10));


// Exercicio 2
// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

// const a = 30;
// const b = 40;

// if (a > b) {
//     console.log('O maior valor é ' + a);
// } else if (a < b) {
//     console.log('O maior valor é ' + b);
// } else {
//     console.log('Os números são iguais');
// }


// transformar em função:


function returnHighest(a, b) {
    if(a > b) {
        return 'O maior valor é ' + a;
    } else if (a < b) {
        return 'O maior valor é ' + b;
    } else {
        return 'Os números são iguais';
    }
}
console.log(returnHighest(40, 50))


// Exercicio 3
// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const a = 30;
const b = 40;
const c = 50;

if (a > b && a > c) {
    console.log('O maior valor é ' + a);
} else if (b > a && b > c) {
    console.log('O maior valor é ' + b);
} else if (c > a && c > b) {
    console.log('O maior valor é ' + c);
} else {
    console.log('Os números são iguais');
}

// transformar em função:

function returnHighest(a, b, c) {
    if (a > b && a > c) {
        return 'O maior valor é ' + a;
    } else if (b > a && b > c) {
        return 'O maior valor é ' + b;
    } else if (c > a && c > b) {
        return 'O maior valor é ' + c;
    } else {
        return 'Os números são iguais';
    }
}
console.log(returnHighest(40, 50, 60));


// Exercicio 4
// Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

// const value = 50;

// if (value > 0) {
//     console.log('positive');
// } else if (value < 0){
//     console.log('negative');
// } else {
//     console.log('zero');
// }

// transformar em função:

function test(value) {
    if (value > 0) {
        return 'positive';
    } else if (value < 0) {
        return 'negative';
    } else {
        return 'zero';
    }
}
console.log(test(12));


// Exercicio 5
// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.

// const angle1 = 30;
// const angle2 = 60;
// const angle3 = 180;

// if (angle1 + angle2 + angle3 === 180) {
//     console.log('true');
// } else if (angle1, angle2, angle3 < 0 || angle1, angle2, angle3 >= 180){
//     console.log('erro');
// } else {
//     console.log('false');
// }

// transformar em função:

function angle(angle1, angle2, angle3) {
    if (angle1 + angle2 + angle3 === 180) {
        return 'true';
    } else if (angle1 < 0 || angle2 < 0 || angle3 < 0 || angle1 >= 180 || angle2 >= 180 || angle3 >= 180){
        return 'erro';
    } else {
        return 'false';
    }
}
console.log(angle(120,-30,30));