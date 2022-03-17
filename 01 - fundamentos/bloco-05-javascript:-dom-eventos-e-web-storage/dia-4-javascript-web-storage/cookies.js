// Cookies

//      Cookies são dados salvos em pequenos arquivos de texto no computador da pessoa que utiliza a Internet .
//      Quando o servidor envia a página Web para o browser , a conexão é desligada e o servidor não tem mais acesso às informações da requisição - como os itens que a pessoa usuária adicionou a um carrinho de compras ou o e-mail que lhe dará acesso a sua conta. Cookies foram inventados para salvar dados das pessoas usuárias no próprio browser , pois, dessa forma, uma página conseguirá acessá-los para executar uma lógica com os parâmetros personalizados por pessoa.
//      Cookies são salvos no formato chave-valor . Quando o navegador faz a requisição ao servidor para acessar uma página Web, os cookies dessa página são adicionados à requisição. Dessa forma, o servidor tem acesso aos dados da pessoa usuária. Nos exemplos a seguir, você irá aprender a criar e manipular cookies . Para testá-los, é importante que o seu navegador tenha o suporte a cookie habilitado. Para visualizar os cookies de uma aplicação, abra a janela para inspecionar a página. No menu superior, clique em Application e na barra lateral esquerda, na sessão Storage, clique em Cookies.
//      O Javascript permite que a gente crie, leia e delete cookie através da propriedade document.cookie .
//      Para criar um cookie, você só precisa atribuir à propriedade document.cookie uma string contendo o nome e o valor do que se pretende armazenar:

document.cookie = 'email=isabella@email.com';

//  Por definição, o cookie é deletado quando fechamos o navegador. Para que isso não aconteça, você pode adicionar uma data para expiração como no exemplo abaixo:
document.cookie = 'email=isabella@email.com; expires=Thu, 17 Dec 2020 12:00:00 UTC';

//  Você pode adicionar também o parâmetro path que dirá ao navegador qual caminho o cookie que você criou pertence. Por padrão, o cookie pertence à página atual.
document.cookie = 'email=isabella@email.com; expires=Thu, 17 Dec 2020 12:00:00 UTC; path=/';

//  O Javascript permite que você atribua document.cookie a uma variável. Assim, você conseguirá ler as informações que estão armazenadas. No exemplo abaixo, ao imprimirmos no console o valor de myCookie, o que será retornado é uma string contendo o nome e o valor do cookie. Quando temos mais de um par chave-valor, a variável armazenará em uma única string os pares separados por ponto-vírgula.
const myCookie = document.cookie;
console.log(myCookie) // email=isabella@email.com

//  E você pode também alterar o valor do cookie da mesma forma que o criamos. Basta atribuir a document.cookie a nova informação que você quer armazenar.
document.cookie = 'email=cleyton@email.com; expires=Thu, 17 Dec 2020 12:00:00 UTC';

//  Para deletar o cookie, você não precisa especificar o valor que pretende deletar. Você pode deletá-lo passando uma data que já expirou:
document.cookie = 'email=; expires=Tue, 01 Dec 2020 12:00:00 UTC;'


