// Funções
// É comum, no começo da carreira de uma pessoa programadora a escrita de programas muito extensos, repetitivos e confusos de se entender. Nesse caso, é recomendado a utilização das funções como forma de deixar seu algoritmo mais simples, legível e enxuto.
// Mas o que é uma função exatamente? Segundo o MDN, função é um conjunto de instruções que executa uma tarefa ou calcula um valor.
// Funções são a forma mais essencial de organização de código e de lógica na programação; usando-as você consegue dividir seu código em blocos lógicos e deixar as coisas mais organizadas.
// Com isso, é possível diminuir o tamanho do seu código, acabar com a repetição e ser mais fácil a leitura e entendimento, pois a lógica do programa estará muito bem dividida.
// Para entender melhor o que é uma função, veja o vídeo abaixo:

// function nomeDaFuncao(param1, param2) { 
//     // código que faz alguma coisa
// }

// // usar função:

// nomeDaFuncao(param1, param2);  // ou
// nomeDaFuncao( ); // quando a função não espera parâmetros


// Exemplo (função para um carro funcionar):

let statusCarro = 'desligado';
let aceleracao = 0;
let rotacaoDoVolante = 0;

function ligarDesligar() {
    if(statusCarro === 'desligado') {
        statusCarro = 'ligado';
    } else {
        statusCarro = 'desligado';
    }
    return statusCarro;
}

function acelerar(incremento) {
    aceleracao = aceleracao + incremento;

    return "Acelerando a " + aceleracao + "m/s2";
}

function frear(decremento) {
    aceleracao = aceleracao - decremento;

    return "Desacelerando a " + decremento + "m/s2";
}


function girarVolante(anguloRotacao) {
    rotacaoDoVolante = anguloRotacao;

    return rotacaoDoVolante + 'º';
}



// Conseguiu pegar a ideia? Se você ainda não se sente confortável o bastante, tente ver o vídeo novamente e depois volte aqui para mais alguns exemplos.
// Como foi visto, é possível criar funções que recebem ou não parâmetros. E, para decidir se a sua função precisa ou não deles, você deve pensar em sua lógica.
// Por exemplo, se a função tiver o objetivo de cumprimentar a pessoa que está executando o programa pelo nome, tal como: "Bom dia, João!", ela vai precisar receber o nome da pessoa como parâmetro. Porém, se ela foi desenvolvida apenas para dar "Bom dia!", um parâmetro não é necessário.

// Veja o exemplo abaixo:


// Sem função
let nome = 'João';

console.log('Bom dia, ' + nome);


// Com função
function bomDiaTryber(nome) {
  console.log('Bom dia, ' + nome);
}

bomDiaTryber('João'); // Bom dia, João
bomDiaTryber('Julia'); // Bom dia, Julia
bomDiaTryber('Marcelo'); // Bom dia, Marcelo

// Com base nesse exemplo, se você optasse por não usar função e precisasse dar bom dia para pessoas diferentes várias vezes durante o código, teria que estar sempre mudando o valor da variável nome e sempre escrevendo a mesma mensagem, o que pode acabar gerando erros de digitação e causar erros na sua aplicação.
// Veja dois exemplos de funções sem parâmetros:

function bomDia() {
    return 'Bom dia!';
  }
  
  console.log(bomDia()); // Bom dia!



  let status = 'deslogado';

function logarDeslogar() {
  if (status === 'deslogado') {
    status = 'logado';
  } else {
    status = 'deslogado';
  }
}

console.log(status); // deslogado

logarDeslogar();
console.log(status); // logado

logarDeslogar();
console.log(status); // deslogado

console.log('O usuário está ' + status); // O usuário está deslogado

// E agora exemplos de funções usando parâmetros:

// Com função
function soma(a, b) {
    return a + b;
  }
  
  console.log(soma(5, 2)); // 7


function maiorNum(primeiroNum, segundoNum) {
  if (primeiroNum > segundoNum) {
    return primeiroNum + ' é maior que ' + segundoNum;
  } else if (segundoNum > primeiroNum) {
    return segundoNum + ' é maior que ' + primeiroNum;
  } else {
    return 'Os números são iguais';
  }
}

console.log(maiorNum(10, 20)); // 20 é maior que 10
console.log(maiorNum(2, -5)); // 2 é maior que -5
console.log(maiorNum(1, 1)); // Os números são iguais

// Ah, se lembra sobre a complexidade de código ? Surpresa! É comum esse erro aparecer enquanto você escreve suas primeiras funções, não se assuste! O que você precisa fazer é quebrá-las em partes menores ou até mesmo criar subfunções que podem ser chamadas dentro dessas funções. Existem tecnologias que apontam esses erros de complexidade no seu terminal, como o ESLint, , por exemplo.
// Essa tarefa fica mais fácil quando você entende que cada função deve ter apenas um propósito, evite criar uma função que faça várias coisas diferentes e que não tem ligação uma com a outra! Não é recomendável que uma função tenha muitas finalidades como dizer "oi", multiplicar dois números e dizer qual é a estação do ano. É melhor você dividir isso tudo em 3 funções diferentes, pois além de diminuir a complexidade, fica melhor para entender e usá-las em outras partes do código.

// Achou complicado? Calma, no começo é normal essa confusão e você pode não entender a vantagem do uso de funções. Mas, conforme você avançar no curso, as funções serão suas melhores amigas. Não fique com medo, elas servem para te ajudar e deixar sua trajetória como pessoa programadora um pouco mais fácil!
// Que tal praticar um pouco?
// Pegue cada um dos exercícios de 1 a 5 do final do dia 4.1 e faça com que todos eles sejam funções de um mesmo arquivo. As variáveis que você define no começo de cada arquivo devem ser removidas e transformadas em parâmetros das funções.
// Após refatorar o seu código , verifique se ele ainda está funcionando conforme especificado. Teste cada função com algumas entradas diferentes.


