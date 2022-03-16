// Algoritmos

// O algoritmo é uma série de comandos encadeados de forma lógica, que busca resolver algum problema.
// Utilizamos lógica em muitos momentos do nosso dia a dia de forma automática. Pense no leite com achocolatado que você toma pela manhã. Simples fazê-lo, não? Vejamos o passo a passo:

// 1. Pegar um copo
// 2. Colocar o copo em cima da mesa
// 3. Abrir a porta da geladeira
// 4. Pegar o leite
// 5. Fechar a porta da geladeira
// 6. Colocar determinada quantidade de leite no copo
// 7. Abrir o armário
// 8. Pegar o achocolatado
// 9. Fechar a porta do armário
// 10. Colocar determinada quantidade de achocolatado no copo
// 11. Pegar uma colher
// 12. Mexer no copo com a colher

// Nós interpretamos essas comandos de forma automática, entretanto os computadores não possuem esta capacidade.


// Existe também, no processo de criação de um algoritmo, um conceito muito importante chamado baby steps ou "passos de bebê".

// Utilizando o array abaixo, percorra-o somando todos os valores. Caso o valor final seja maior que 15, imprima-o. Caso seja igual ou menor que 15, imprima a mensagem: "valor menor que 16":

let fruits = [3, 4, 10, 1, 12];
let sum = 0;
for (let i = 0; i < fruits.length; i++) {
    sum = sum + fruits[i];
}
if (sum >= 15) {
    console.log(sum);
} else {
    console.log ('valor menor que 16');
}

// A resolução do problema acontece em 3 etapas:
// 1- Interpretação;
// 2- Criação do algoritmo;
// 3- Codificação do algoritmo.

// Analisando o enunciado, sabemos que:
// devemos utilizar o array fruits ;
// o termo " percorra " indica uma estrutura de repetição, ou loop;
// " somando todos os valores " mostra que devemos ter uma variável que guarda o valor da soma dos valores;
// o termo " caso " indica uma estrutura condicional, ou if ;
// " imprima o valor final " indica um console.log ;


// Agora vamos criar o algoritmo, e pra isso faremos uso dos baby steps . Eles nos estimulam a dividir grandes e complexos problemas em pequenos e simples.

// 1- Adicionar o array;
// 2- Criar uma variável com valor 0;
// 3- Criar um loop que percorre o array;
// 4- Incrementar a variável com o valor correspondente a cada loop;
// 5- Criar um if com a condição da variável ser maior que 15;
// 6- Caso a variável obedeça a condição;
// 6.1- Imprimir a variável
// 7- Caso não obedeça a condição;
// 7.1 Imprimir a mensagem "valor menor que 16";

// Aí você vai desen volvendo o algoritmo a partir dos passos que escreveu


// Volte aos exercícios do dia anterior, 4.2, e crie um algoritmo para cada.

// Exercicio 1:
// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

// for (let i = 0; i < numbers.length; i += 1) {
//     console.log(numbers[i]);
// }

// 1- Adicionar o array;
// 2- Criar um loop que percorre o array;
// 3- Imprimir o valor correspondente a cada posição do array no loop;

// Exercicio 2:
// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

// let sum = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//     sum = sum + numbers[i]; // recebe os valores do array em cada laço de repetição somando com a soma anterior.
// }
// console.log(sum);

// 1- Adicionar o array;
// 2- Criar uma variavel;
// 3- Criar um loop que percorre o array;
// 4- Incrementar a variável com o valor correspondente a cada loop;
// 5- Imprimir o valor da variavel;

// Após escrever cada algoritmo, responda novamente as seguintes perguntas:
// Eu resolvi o problema?
// Havia outras maneiras de resolver o problema?
// A maneira que eu escolhi foi a mais eficiente possível?
// Seria possível inverter ou retirar algum passo?
// Se eu fosse um computador, conseguiria entender todas as intruções?


// Lembre-se sempre: se você travar em algum exercício, recomece seu raciocínio com baby steps! Certamente você será capaz de dividir algum passo em outros passos menores. Isso ajudará muito na hora de resolver problemas