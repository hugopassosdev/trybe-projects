// for/in for/of (utilizado tanto para objetos quanto para arrays)

//(1) for in

//Exemplo:
// pedidos de pizza
let pizzas = {
    sabor: "Palmito",
    preco: 39.90,
    bordaCatupiry: true
};

for(let key in pizzas) { // vou varrer este objetivo com várias chaves e executar aluma ação neste for
   // console.log(key);
   // console.log(pizzas);
   //  console.log(pizzas.preco);
   // console.log(pizzas['bordaCatupiry']);
   console.log(pizzas[key]); // passa por cada propriedade e retorna cada valor
}


let pizzasDoces = ['chocolate', 'banana', 'morango'];

for (let key in pizzasDoces) {
   //  console.log(key);  // retorna 0 1 2  (posicoes do array)
   //  console.log(pizzasDoces);
   // console.log(pizzasDoces[key]); // retorna chocolate banana morango (valores das posições do array - 1 por vez)
   console.log(key, pizzasDoces[key]); // além de retornar um valor por vez, adiciana-se seu índice em cada linha.
}

// Depois de conhecer o laço for/in , o código que mostra as marcas de carros presentes em um Array é:

let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]); 
  // retorna os valores separados, um por vez.
}

// Outro exemplo:

let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let index in car) {
    console.log(index, car[index]);
    // retorna uma chave/valor em cada linha 
  }


//(2) for of

// O for/of tem uma aplicação bastante parecida com o que vimos agora no for/in , mas com uma diferença crucial.
// Como dito no vídeo, o for/in percorre as propriedades dos objetos que forem enumeráveis com base na ordem de inserção, e não nos valores das propriedades, ou seja, nos retorna o índice. Por exemplo, se tivermos um array com três strings dentro:

// As propriedades dos elementos do array serão os índices de cada posição, começando por zero. É por isso que os números retornados pelo console.log são 0, 1 e 2: as propriedades que correspondem ao índice de cada posição do array.

let food = ['hamburguer', 'bife', 'acarajé'];

for (let position in food) {
    console.log(position);
  };
  //resultado: 0, 1, 2;

  // Se percorrermos um objeto, também teremos o mesmo resultado. O for/in irá percorrer a propriedade declarada, e não o seu valor em si.
  // Já o for/of percorre os elementos dos objetos iteráveis através dos seus respectivos valores, e não dos índices como o for/in . Vejamos o exemplo:

  let food = ['hamburguer', 'bife', 'acarajé'];
  for (let value of food) {
    console.log(value);
  };
  //resultado: hamburguer, bife, acarajé;

// Para fixar:

// 1- Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

for(let key in names) {
    console.log('Olá ' + names[key]);
}

// 2- Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let key in car) {
    console.log(key, car[key]);
  }
