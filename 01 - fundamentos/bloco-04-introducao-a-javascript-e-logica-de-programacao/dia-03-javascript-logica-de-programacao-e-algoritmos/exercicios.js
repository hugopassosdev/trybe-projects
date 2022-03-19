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
let quantidade= [];
let menor= 0;

for (let index=0; index <array.length; index += 1){
    quantidade.push(array[index].length);
}
for (let index2 = 0; index2 <quantidade.length; index2+=1){
    if(quantidade[index2]<quantidade[index2]+1){
    menor=array[index2];
    }
}
console.log(menor);

// está errado o exercício.

// Exercício 4
// Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let numerosPrimos=[];
let cont=0;
let num=0;

    for(let index= 2 ;index <=50; index +=1){

        cont=0;

       for (let index2=1; index2 <= index; index2 +=1){

           if(index%index2 ===0 ){
               cont += 1;

           }
           num=index;
           }
           if(cont === 2){
            numerosPrimos.push(num);
        }
        }
        
console.log(numerosPrimos[numerosPrimos.length-1]);