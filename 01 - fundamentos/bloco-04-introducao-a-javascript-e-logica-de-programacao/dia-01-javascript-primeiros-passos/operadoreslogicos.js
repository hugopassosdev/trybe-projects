// operador lógico AND &&
// só será true se as duas expressões forem verdadeiras

// (1)

// const comida = 'pão na chapa';
// const bebida = 'cafézinho';

// if (bebida === 'cafézinho' && comida === 'pão na chapa') {
//   console.log('Muito obrigado pela refeição :)');
// } else {
//   console.log('Acho que houve um engano com meu pedido');
// }

// (2)

// const conditionOne = true;
// const conditionTwo = false;

// console.log(conditionOne && conditionTwo);

// (3)

// const cenouras = true;
// const leite = true;
// const arroz = true;
// const feijao = true;

// const listaDeCompras = cenouras && leite && arroz && feijao;

// (4)

// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && true); // false
// console.log(false && false); // false

const currentHour = 20
let message = "";
if (currentHour >= 22 && currentHour<= 24) {
    message = "Não deveríamos comer nada, é hora de dormir";
}
else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D";
}
else if (currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?";
}
else if (currentHour >= 11 && currentHour < 14) {
    message = "Hora do almoço!!!";
}
else if (currentHour >= 4 && currentHour < 11) {
    message = "Hmmm, cheiro de café recém passado";
}
else{
    console.log("Hora inválida")
}
console.log(message);

// operador lógico OR || (apenas uma das afirmações seja verdadeira - isso ou aquilo)

// (1)
// const bebidaPrincipal =  'cafezinho';
// const bebidaAlternativa = 'suco de laranja';
// 
// if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
//   console.log("Obrigado por me atender :D")
// } else {
//   console.log("Ei, eu não pedi isso!");
// }

// (2)
// console.log(true || true); // true
// console.log(true || false); // true
// console.log(false || true); // true
// console.log(false || false); // false

let weekDay = "domingo";

if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira"|| weekDay === "quinta-feira"|| weekDay === "sexta-feira") {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
}
else if (weekDay === "sábado" || weekDay === "domingo") {
    console.log("FINALMENTE, descanso merecido UwU");
}
else {
    console.log("Dia inválido.")
}

// operador lógico NOT ! (utilizado para inverter valores booleanos)

console.log((2 + 2) === 4);
console.log(!(2 + 2) === 4);

const squirtle = "melhor pokemon inicial";

console.log(!squirtle); // false


console.log(!42); // false

console.log(!0); // true
// O número 0 tem o valor "falsy" no javascript. Logo, seu oposto é true.


console.log(!null); // true

console.log(!undefined); // true
