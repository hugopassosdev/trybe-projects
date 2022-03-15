// fazer uma tabuada.

let numero = 7;
for ( let i = 1; i <= 9; i++) {
    console.log('') // linha vazia
    console.log(numero * i); // imprime vaslor da tabuada
}


let listaDeNomes = ['Joana', 'Maria', 'Lucas'];
for (i = 0; i < listaDeNomes.length; i++) {
    let message = 'Parabéns ' + listaDeNomes[i] + '. Você foi aprovado(a) no processo seletivo da Trybe!';
    console.log(message);
}


let cars = ["Saab", "Volvo", "BMW"];

for (let index = 0; index < cars.length; index += 1) { // aconselhável utilizar += 1 ao ínves de ++ para evitar bugs
    console.log(cars[index]);
}

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
groceryList = groceryList.sort(); // colocar o array em ordem
for (i = 0; i < groceryList.length; i += 1) {
    console.log(groceryList[i]); // imprimir elementos da lista em ordem
}


