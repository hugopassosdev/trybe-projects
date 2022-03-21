// document.getElementById
console.log(document.getElementById('teste'));
// document.getElementByID -> buscou os elementos que possuia a ID teste em toda página para retorná-los (no caso, toda a div e do parágrafo).


// innerHTML
console.log(document.getElementById('teste').innerHTML);
// document.getElementByID('nomeDaID').innerHTML -> buscou os elementos que possuia a ID teste em toda página para retorná-los (no caso, todo o texto, inclusive tags da div e do parágrafo).


// innerHTML
console.log(document.getElementById('teste').innerText);
// document.getElementByID('nomeDaID').innerHTML -> buscou os elementos que possuia a ID teste em toda página para retorná-los (no caso, todo o texto, sem tags - somente texto).

// document.getElementById -> possui vários outras propriedades (possui diversas como .style - retorna todos os estilos que foram aplicados naquela tag).

// Alteração de conteúdo do elemento através da id.
document.getElementById('teste').innerHTML = 'Aprendizados da aula de hoje';
// Serve para fazer alterações nos elementos da página ao usá-la sem alterar a base do HTML.

// Observe bem: após recuperar o elemento que escolheu via JavaScript , você pode alterá-lo! Para começar a praticar, copie para um arquivo em sua máquina o exemplo abaixo.

// Continuando em domESeletoresParteII.html

