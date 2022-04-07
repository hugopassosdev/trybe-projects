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
