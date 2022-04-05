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

// (3) Crie uma página que contenha:
//      Um botão ao qual será associado um event listener ;
//      Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
//      Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

// Feito em: exercicio3ParteII.html e exercicio3ParteII.js 

// (4)Crie um código JavaScript com a seguinte especificação:

// Não se esqueça de usar template literals

// Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
// Exemplo:
//      String determinada: "Tryber x aqui!"
//      Parâmetro: "Bebeto"
//      Retorno: "Tryber Bebeto aqui!"

// Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .

// Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .

// Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
// JavaScript;
// HTML; ... #goTrybe".


const array = ["Android", "iOS", "Architecture", "Teach", "Run"];

function buildSkillsPhrase (paramOne) {
    const fun1 = paramInner => (
      `Tryber ${paramInner} aqui!

      Tudo bem?`
    );

    let result = `${fun1(paramOne)}

    Minhas cinco principais habilidades são:`;

    array.forEach((skill, index) =>
    result = `${result}

    - ${skill}`);

    result = `
    ${result}

    #goTrybe
    `;

    return result;
}

console.log(buildSkillsPhrase("Lucas"));

