// Parte I - var, let e const
// Você certamente já se deparou com três diferentes formas de se declarar variáveis em Javascript:
// var userEmail = 'maria@email.com';
// let userId = '78945-6';
// const userLocation = 'Brasil';
// Qual a diferença entre essas declarações? Apesar de serem utilizadas para o mesmo propósito, é importante entender essas diferenças para saber quando usar o var , let e const na hora de declarar variáveis. Afinal, quando declaradas na raiz do arquivo as três formas estão corretas e funcionam da mesma forma.
// Em primeiro lugar, vamos entender o que é o escopo em que a variável é declarada. Podemos pensar em escopo como sendo o 'local' em que uma variável é visível e pode ser referenciada. Como exemplo, observe a função abaixo:

// function userInfo() {
//     let userEmail = 'maria@email.com';
//     console.log(userEmail);

//     // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
//   }
//   userInfo();

//   Tente rodar a função userInfo no seu editor de código. Nesse caso, a variável userEmail foi declarada dentro do escopo da função userInfo . Agora experimente mover o console.log(userEmail) para fora da função e a execute novamente. Você verá um erro dizendo que userEmail não é definida - a variável só é reconhecida dentro do escopo da função. O que aconteceria se trocássemos o let por var e const ? Não deixe de fazer esse teste! Você verá que nos três casos, não temos acesso à variável fora do escopo da função userInfo . Como saber, então, qual expressão utilizar para declarar variáveis?

// Veja este vídeo que fala sobre onde utilizar var , let e const .


// function minhaIdade(){
// var idade = 78;
// console.log(idade);
// }
// minhaIdade();

// varível só existe dentro do escopo da função (não consegue ter acesso à variavel fora deste escopo).

function minhaIdade() {
    for (var idade = 78; idade <= 100; idade += 1) {
        console.log(idade);
    }
    console.log("Fora do for", idade);

    if (true) {
        var nome = "Trybe";
    }
    console.log("Fora do if", nome);

}
minhaIdade();

// A variável declarada como var "vazou para fora do for e teve um incrmento de 1 (problema)"

// Mudando para let, daria um erro informando que as variaveis requisitadas fora do escopo não estão declaradas.
// Sendo assim, com o let, não há mais vazamento de escopo quando se usa o for, if e while.


function minhaIdade() {
    for (const idade = 78; idade <= 100; idade += 1) {
        console.log(idade);
    }
    console.log("Fora do for", idade);

}
minhaIdade();

// const: variavel que é imutável. Ao declarar uma variavel como const dentro de um lanço de repetição, é retornado um erro pois const não pode ser reatribuido valores.

const estudante = {
    nome: "Maria",
    idade: 23
}

console.log(estudante);

estudante.idade = 24;
console.log(estudante);

// não foi altaredo o valor da variável e sim uma propriedade de um objeto.

// let: quando é necessário reatribuir variáveis;
// const: quando não há alteração ed valor na variável;
// var: não é mais utilizado

// Fim do vídeo.

// Vamos agora pensar em variáveis declaradas dentro do escopo de um bloco de código - como o corpo de um if ou um for . Acompanhe o exemplo abaixo e não deixe de testá-lo no seu editor de código:

if (true) {
    // inicio do escopo do if
    var userAge = '20';
    console.log(userAge); // 20
    // fim do escopo do if
  }
  console.log(userAge); // 20

//   Nesse exemplo, temos acesso à variável userAge dentro e fora do bloco de código. Experimente trocar o var por let e const . Qual será o resultado? Temos acesso à variável declarada com o var dentro e fora do escopo do bloco. No entanto, não temos acesso à userAge fora do bloco de código quando usamos let e const para declarar essa variável. Isso é interessante quando queremos trabalhar com variáveis acessíveis apenas no contexto daquele bloco de código. Por ter um escopo mais abrangente, em aplicações mais complexas declarar variáveis com o var pode confundir até mesmo programadores mais experientes.
// Agora observe de uma forma um pouco mais visual como funcionam os escopos e o comportamento do var em casos que sua utilização "vaza" o escopo.

// imagem: gifEscopos.gif

// Outro grande problema ao utilizar o var para atribuir valor à variáveis é que você consegue sobrescrevê-las sem gerar erros.

var userName = 'Isabella';
var userName = 'Lucas';
console.log(userName); // Resultado: Lucas

// Em aplicações maiores, você pode redeclarar variáveis acidentalmente e nem perceber o que aconteceu quando usamos o var . Por isso, encontrar e corrigir bugs pode se tornar uma verdadeira missão impossível. Por estes motivos, declarar variáveis com o var não é uma boa prática.
// O ES6 corrige esse problema ao introduzir o let e o const , fazendo com que uma variável, com um nome específico, só possa ser declarada uma única vez dentro de um escopo. Experimente executar o exemplo anterior usando o let e const e veja o que acontece!
// E quanto ao const , como ele se diferencia do let ? O const permite que você declare constantes . Em outras palavras, o valor atribuído a uma variável declarada com o const não pode ser alterado. Já quando usamos o let , podemos substituir o valor original atribuído à variável. Tente executar o código abaixo usando o const e let e veja o que acontece! dá erro)

const favoriteLanguage = 'Javascript';
favoriteLanguage = 'Python';
console.log(favoriteLanguage); // Erro

let favoriteTechnology = 'Machine learning';
favoriteTechnology = 'Facial recognition';
console.log(favoriteTechnology); // Facial recognition

// No exemplo acima, vimos que o const é imutável - ao declarar const favoriteLanguage = 'Javascript' o valor de favoriteLanguage não pode ser alterado. Mas quando usamos o const para criar um objeto, o Javascript nos permite alterar as suas propriedades sem, contudo, reatribuir um novo objeto. Acompanhe o exemplo abaixo para entender melhor como funciona:

const userInfo = {
    name: 'Cláudio',
    id: '5489-2',
    email: 'claudio@email.com',
  };
  
  userInfo.name = 'João';
  
  console.log(userInfo); // { name: 'João', id: '5489-2', email: 'claudio@email.com' }

//   Esse raciocínio também se aplica a um array. Podemos alterá-lo indiretamente adicionando/removendo um novo item sem sobrescrever o que já foi declarado:

const technologies = ['Javascript', 'CSS', 'HTML'];
technologies.push('React');
console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]

technologies = ['Javascript', 'CSS', 'HTML', 'React']
console.log(technologies); // Erro

// Hoisting

// Hoisting é um comportamento padrão do JavaScript que acontece com variáveis declaradas com var . Esse comportamento move todas as declarações destas variáveis para o topo do escopo global, independentemente de onde a declaração foi feita.
// Veja o exemplo abaixo:

age = 20;

var age;

console.log(age); // 20

// Mesmo atribuindo um valor à variável age antes mesmo de declará-la, o console.log conseguiu imprimir o seu valor, isso por causa do hoisting . É como se tivéssemos primeiro declarado a variável age e depois atribuído o valor 20, como no exemplo abaixo:

var age;

age = 20;

console.log(age); // 20

// Porém, apenas a declaração da variável é movida para o topo do escopo e não seu valor. No código abaixo podemos ver um exemplo disso. Ao atribuirmos um valor à variável age apenas após o console.log , recebemos undefined como resultado.

var age;

console.log(age); // undefined

age = 20;

// Não se esqueça de que esse comportamento acontece apenas com variáveis declaradas com var . Se tentarmos fazer isso com let ou const , irá dar erro.
// Em resumo, variáveis podem ser declaradas com o const , let e var . Apesar das três terem o mesmo propósito, é importante nos atentar às boas práticas para escrevermos códigos confiáveis. Assim, sempre que possível, usar o const para declarar variáveis é interessante porque conseguimos um comportamento mais previsível, já que o seu valor não pode ser alterado diretamente.