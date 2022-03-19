// Objetos:

// Um objeto em JavaScript é uma entidade independente, com propriedades e tipos. Uma propriedade é a associação entre uma chave e um valor, são essas as características do objeto.

// Pense em um objeto da vida real, como o carro do exemplo acima. Cada carro tem sua cor, peso, tamanho, quantidade de portas e etc. Essas são suas características, suas propriedades. E, da mesma forma que funciona um objeto da vida real, funcionam os objetos em JavaScript.

// Já aprendemos a utilizar outros tipos de dados, como string, number e bool.

// Tipo de dado que nos permite armazenar informações do tipo:
// chave: valor 

Exemplo:

let name = 'Milton';
let lastName = 'Nascimento';
let nickname = 'Bituca';
let age = 77;
let bestAlbuns = ['Travesssia', 'Clube da Esquina', 'Minas'];

let singer = {
    name: 'Milton',
    lastName: 'Nascimento',
    nickname: 'Bituca',
    age: 77,
    bastAlbuns: ['Travesssia', 'Clube da Esquina', 'Minas'],
    bornInfo: {
        city: 'Rio de Jnaeiro',
        state: 'Rio de Janeiro'
    }
};

//  Como acessar os valores dentro do objeto?
// com .
console.log('O cantor ' + singer.name + ' ' + singer.lastName + ' possui ' + singer.age + ' anos.');

// com chaves
console.log('O cantor ' + singer['name'] + ' ' + singer['lastName'] + ' possui ' + singer['age'] + ' anos.');

// As chaves são muito utilizadas quando você quer criar novas propriedades de forma dinâmica:
// Exemplo:

singer['fullName'] = singer.name + ' ' + singer.lastName;
console.log(singer['fullName']);
console.table(singer);

// Objetos podem ter outros objetos como valores.
// A entrade de um objeto é sempre um par chave: valor.
// A chave é um identificador único e o valor "qualquer coisa".

console.log('O cantor ' + singer.fullName + ' nasceu no estado do ' + singer.bornInfo.state + '.');

// Boa práticas do objeto:
// camelCase é uma boa prática
// se utilizar o kebab-case, deve-se colocar a chave entre aspas e, quando for "chama-la", deve-se colocar em colchetes também.

let singer = {
    'name': 'Milton',
    'last-name': 'Nascimento'
}

console.log(singer['last-name']);

// Se o objeto está dentro de um array , ele é acessado através do seu índice, da mesma forma que se acessaria uma informação num array de strings , por exemplo. Após pegar o objeto que você deseja, para acessar suas propriedades basta usar a notação de colchetes ou a notação de ponto . O mesmo vale para acessar objetos dentro de objetos.
// As chaves de um objeto são armazenadas como strings e, para conseguir acessar propriedades nomeadas com números, como 0 , por exemplo, só é possível usando a notação de colchetes . Se você usar a notação de ponto , ocorre um erro. Ao usar a notação de colchetes também é possível chamar variáveis que fazem relação com a chave que você quer acessar dentro desses colchetes.

let diasDaSemana = {
    1: 'domingo',
    2: 'segunda',
    3: 'terça',
    4: 'quarta',
    5: 'quinta',
    6: 'sexta',
    7: 'sábado',
};
    
    diasDaSemana.1; // SyntaxError: Unexpected number
console.log(diasDaSemana['1']); // domingo


let conta = {
    agencia: '0000',
    banco: {
        cod: '012',
        id: 4,
        nome: 'TrybeBank',
    },
};

let infoDoBanco = 'banco';
console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
console.log(conta[infoDoBanco]['nome']); // TrybeBank

console.log(conta.agencia); // 0000
console.log(conta['agencia']); // 0000

console.log(conta.banco.cod); // 012
console.log(conta['banco']['id']); // 4

// No exemplo acima, a chave banco do objeto conta , guarda um outro objeto, e também há o uso de variável na notação de colchetes, além de você poder ver exemplos usando notação de ponto e notação de colchetes.

// Neste outro exemplo, veja como vamos adicionar as informações de forma encadeada:

let usuario = {
    id: 99,
    email: 'jakeperalta@gmail.com',
    infoPessoal: {
        nome: 'Jake',
        sobrenome: 'Peralta',
        endereco: {
            rua: 'Smith Street',
            bairro: 'Brooklyn',
            cidade: 'Nova Iorque',
            estado: 'Nova Iorque',
        },
    },
};

console.log(usuario['id']); // 99
console.log(usuario.email); // jakeperalta@gmail.com

console.log(usuario.infoPessoal.endereco.rua); // Smith Street
console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque

// O objeto deste exemplo possui a chave infoPessoal que possui outras 3 chaves, uma delas sendo endereco , que é outro objeto! Ou seja, o objeto usuario possui outros dois dentro dele.

// Agora, e se o nosso objeto está dentro de um array? Como acessamos as propriedades do objeto? Veja este exemplo:

let moradores = [
    {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
    },
    {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
    },
    {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
    },
    {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
    },
];

let primeiroMorador = moradores[0];
console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
console.log(primeiroMorador['andar']); // 10

let ultimoMorador = moradores[moradores.length - 1];
console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
console.log(ultimoMorador.nome); // Zoey

// Esse último bloco de código é um exemplo de um array composto por objetos. Os objetos desejados foram acessados através dos seus índices e armazenados dentro de variáveis para facilitar a compreensão.

// Não utilizar o kebab-case no JavaScript. Os traços podem ser interpretados como subtração e a forma de como acessar seus valores é mais complexa aqui.

// Para fixar:

// 1- Crie um objeto contendo as variáveis listadas abaixo:

let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

let athleteInfo = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    },
};

athleteInfo['fullName'] = athleteInfo['name'] + ' ' + athleteInfo['lastName']; // adicionado ao objeto a chave fullName
console.log(athleteInfo);

console.log(athleteInfo['fullName']);
console.log(athleteInfo['medals']['silver']);

// 2- Acesse as chaves name , lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".

console.log('A jogadora ' + athleteInfo['fullName'] + ' tem ' + athleteInfo['age'] + ' anos de idade.');

// 3- Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.

athleteInfo['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

// 4- Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

console.log('A jogadora ' + athleteInfo['fullName'] + ' foi eleita a melhor do mundo ' + athleteInfo['bestInTheWorld'].length + ' vezes.'); // utilizado o .length fora dos colchetes para verificar o tamanho do array.

// 5- Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".

console.log('A jogadora possui ' + athleteInfo['medals']['golden'] + ' medalhas de ouro e ' + athleteInfo['medals']['silver'] +  ' medalhas de prata.');
