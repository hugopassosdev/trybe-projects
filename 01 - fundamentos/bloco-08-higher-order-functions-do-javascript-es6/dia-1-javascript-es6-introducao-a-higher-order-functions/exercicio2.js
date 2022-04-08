// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").


// função callback
const testResult = (aleatoryNumber, drawNumber) => {
    if (aleatoryNumber === drawNumber) {
        return "Parabéns você ganhou";
    } else {
        return "Tente novamente";
    }
}

// função HOF
const prizeDraw = (testResult) => {
    let aleatoryNumber = Math.floor((Math.random() * 5) + 1); 
    // Math.random() retorna um numero aleatório entre 0 e 1
    // Math.floor  retorna o menor número inteiro
    // + 1 para pegar os valores que foram arredondados para 0 e 4 ficar entre 1 e 5 
    let drawNumber = 3;
    return testResult(aleatoryNumber, drawNumber);

};

console.log(prizeDraw(testResult));


// outra forma de resolver:

const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
};

console.log(lotteryResult(2, numberChecker));

