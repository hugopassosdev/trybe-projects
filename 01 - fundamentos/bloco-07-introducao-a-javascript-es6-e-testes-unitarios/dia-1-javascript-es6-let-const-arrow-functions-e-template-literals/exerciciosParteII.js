// Parte II
// Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let , const , arrow functions , template literals e ternary operator .

// (1) Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .



function fatorial(number) {
    let fat = 1;
    for (let i = 2; i <= number; i++) {
        fat = fat * i;
    }
    return fat
}
console.log(fatorial(5));

// arrow function:
const fatorial = number => {
    let fat = 1;
    for (let i = 2; i <= number; i++) {
        fat = fat * i;
    }
    return fat
}
console.log(fatorial(5));

// (2) Crie uma função que receba uma frase e retorne qual a maior palavra.

// Exemplo:
longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

const longestWord = text => {
    let wordArray = text.split(' ') // separar as palavras da string text colocando-as no array wordArray
    let maxLength = 0 // contador de comprimento máximo das palavras
    let result = '' // guarda a palavra encontrada

    for(const word of wordArray) {
        if(word.length > maxLength){
            maxLength = word.length
            result = word
        }
    }
return result
}

console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu.'));