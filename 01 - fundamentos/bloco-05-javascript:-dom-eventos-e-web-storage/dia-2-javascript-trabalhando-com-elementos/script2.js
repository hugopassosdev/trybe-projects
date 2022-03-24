
//Exercicio parteI
//1 Acesse o elemento elementoOndeVoceEsta .
console.log(document.querySelector('#elementoOndeVoceEsta'));
/* <section id="elementoOndeVoceEsta">
        <section id="primeiroFilhoDoFilho"></section>
        <section id="segundoEUltimoFilhoDoFilho"></section>
      </section> */

//2 Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
console.log(document.querySelector('#elementoOndeVoceEsta').parentNode.style.backgroundColor = 'red');

//3 Acesse o primeiroFilhoDoFilho e adicione um texto a ele. 
console.log(document.querySelector('#primeiroFilhodoFilho').innerText = 'João Silva');

//4 Acesse o primeiroFilho a partir de pai .
console.log(document.querySelector('#pai').firstElementChild);

//5 Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
console.log(document.querySelector('#elementoOndeVoceEsta').previousElementSibling);

//6 Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
console.log(document.querySelector('#elementoOndeVoceEsta').nextSibling);

//7 Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
console.log(document.querySelector('#elementoOndeVoceEsta').nextSibling.nextSibling);


//8 Agora acesse o terceiroFilho a partir de pai .
console.log(document.querySelector('#pai').children[2]);




// Forma adicionando as funções em constantes (ao invés de imprimí-las):

// // 1
// const elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");
// //2
// const pai = elementoOndeVoceEsta.parentElement;

// pai.style.color = "red";
// //3
// const pirmeiroFilhofoFilho = elementoOndeVoceEsta.firstElementChild;

// pirmeiroFilhofoFilho.innerText = "peimeiroFilhoDoFilho";
// //4

// const primeiroFilho=pai.firstElementChild;
// //5
// const primeiroFilho2=elementoOndeVoceEsta.previousElementSibling;
// //6
// const textElement = elementoOndeVoceEsta.nextSibling;
// //7 
// const terceiroFilho= elementoOndeVoceEsta.nextElementSibling;
// //8
// const terceiroFilho2 = pai.lastElementChild.previousElementSibling;


//Exercicio parteII
//1 Crie um irmão para elementoOndeVoceEsta .
const pai = document.getElementById("pai");
const irmaonovo = document.createElement("section");
irmaonovo.id="irmaoNovo";
pai.appendChild(irmaonovo);
//console.log(document.querySelector('body'));

//2 Crie um filho para elementoOndeVoceEsta .
const pai2= document.getElementById("elementoOndeVoceEsta");
const filhoNovo = document.createElement("section");
filhoNovo.id='filhoNovo';
pai2.appendChild(filhoNovo);
// console.log(document.querySelector('body'));

//3 Crie um filho para primeiroFilhoDoFilho .
const pai3 document.getElementById("primeiroFilhoDoFilho");
const filhoNovo2 = document.createElement("section");
filhoNovo2.id='filhoNovo2';
pai3.appendChild(filhoNovo2);
// console.log(document.querySelector('body'));


//4 A partir desse filho criado, acesse terceiroFilho .
const terceiroFilho = filhoNovo2.nextSibling;