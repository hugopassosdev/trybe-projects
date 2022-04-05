// Introdução ao Jest

// "Por que precisamos de um framework ? Não dá pra escrever todos os testes somente com asserts simples? "
// Em teoria, sim. Mas à medida que suas aplicações se tornam maiores e mais complexas, esse processo torna-se inviável pelos motivos abaixo:
//      Sua aplicação terá várias funções, provavelmente distribuídas por vários arquivos. Colocar todos os testes em um único arquivo torna-se impraticável rapidamente. Não é possível saber onde começam e onde terminam os testes de uma função. Mesmo em uma função mais complexa, você pode querer separar e agrupar testes relacionados;
//      Node.js só executa um arquivo por vez, com o comando node <nome_do_arquivo> . Se há vários arquivos de teste, é preciso executar um por vez ou escrever um script shell para executar todos os arquivos;
//      Você sempre precisa executar todos os testes de um arquivo. Não há como executar apenas um subgrupo dos testes presentes no arquivo;
//      Sempre que um teste falha, a execução é interrompida imediatamente. Isso dificulta saber se os testes posteriores estão corretos, necessitando garantir que todos os testes anteriores estejam corretos;
//      Vários testes podem requerer que os mesmos passos sejam executados antes ou após a execução, resultando em muita duplicação;
//      Para pular ou desabilitar um teste falhando, é preciso removê-lo ou comentá-lo;
//      Não há informações sobre a cobertura de testes. Ou seja, quais partes do código estão sendo estressadas pelos testes e quais não estão;
// Para o mercado de trabalho, o assert é insuficiente. Normalmente os programas estão sempre evoluindo e ganhando novas features e, por conta disso, surgiu a necessidade de criar uma suíte de testes mais robusta, legível e de fácil manutenção.
// Um framework de testes apresenta ferramentas para eliminar ou mitigar esses problemas. Existem várias ferramentas semelhantes, como Jest , Mocha e Jasmine . Entre eles, Jest se destaca por alguns motivos:
//      É fácil de instalar e requer zero configuração, como você verá em breve;
//      É rápido. O time de engenharia do Airbnb conseguiu diminuir o tempo de execução de sua suíte de testes de 12 para 4 minutos ao trocar Mocha por Jest ;
//      Se integra muito bem com React . De fato, o Jest já vem instalado e configurado com o React. Não se preocupe se você não souber o que é o React, você aprenderá sobre ele em Front-end.
// Chega de teoria. Vamos botar a mão na massa e começar a escrever testes com Jest .


// Instalando o Jest

// Para realizar a instalação do Jest, siga as instruções do vídeo ou do texto logo abaixo.

// 1- Para começar a instalar o Jest, você precisa ter o npm instalado e funcionando corretamente, abaixo temos um passo a passo, feito para Linux , sabendo disso, então vá ao seu terminal e digite:

npm -v

// 2- Se ele te mostrar um número de versão (por exemplo, 6.14.4) está tudo certo, você pode pular os comandos deste passo. Caso ele retorne um erro dizendo que não encontrou o comando você deverá executar a instalação do npm , descrita abaixo:

// a. Primeiro vamos atualizar a nossa lista de repositórios:

sudo apt update

// b. Agora com a lista de repositórios atualizada, vamos instalar o npm . Lembre-se que ao instalar com apt , você pode utilizar o comando de qualquer local, e em todas as próximas vezes você não deverá reinstalar, só execute esse passo caso não tenha o npm instalado ainda.

sudo apt install npm

// 3- Agora vamos simular a criação de um projeto que utilizará a biblioteca do Jest para os testes. Com o npm devidamente instalado e verificado, crie uma pasta e entre nesta nova pasta que você criou.

mkdir my_new_project
cd my_new_project

// Obs: É importante criar esta nova pasta para cada um dos seus projetos, pois além de ficar mais organizado, você vai evitar que as configurações de um projeto interfiram com outro, visto que o processo de instalação irá criar arquivos e pastas.

// a. Após entrar na pasta, precisamos criar um novo package.json para o seu novo projeto.

//      O package.json é responsável por armazenar e descrever diversas informações de seu projeto, como a versão do node e do npm utilizadas, url do repositório, versão do projeto, dependências de produção e de desenvolvimento.

// Para criar o package.json no seu projeto execute em seu terminal o comando abaixo:

npm init -y

// Você terá o seguinte retorno:

Wrote to /home/cleyton/Documents/meuApp/package.json:

{
  "name": "meuApp",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

// Vamos analisar algumas das informações desse objeto:
//      A primeira chave "name", por padrão, terá o mesmo nome do diretório em que você criou o arquivo package.json . Ele representa o nome do seu projeto;
//      A versão atual do projeto é "1.0.0", ou seja a primeira versão;
//      Podemos adicionar alguma descrição na chave "description";
//      A chave "scripts" define um conjunto de scripts Node que podem ser executados.

// Não se preocupe se essas informações ainda não fizerem sentido pra você. Futuramente vamos retornar e explicar o que cada um desses dados representa. No momento, é importante saber apenas que o package.json é um objeto que armazena uma série de informações sobre o seu projeto.

// b. Agora precisamos editar nosso package.json . Você deve ter observado que na chave "test" em "script" temos a seguinte informação: "test": "echo \"Error: no test specified\" && exit 1" . Isso significa que a nossa aplicação ainda não possui um script que defina como lidar com testes. Então vamos trocar essa informação por "test": "jest" . Não se esqueça de salvar o arquivo. Após a alteração teremos algo parecido com:

{
    "name": "meuApp",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "jest"
    },
    "keywords": [],
    "author": "",
    "license": "ISC"
   }

  // 1- Por fim, vamos instalar o Jest , dentro da pasta que você criou no passo 3, executando o seguinte comando no terminal:

  npm install --save-dev jest

//   Após rodar esse comando, vamos ver uma alteração importante que ocorreu no arquivo package.json . Para isso vamos abrir a pasta que você criou no seu VsCode com o comando abaixo:

code .

// A sua pasta agora contém dois arquivos, o package.json e o package-lock.json e um novo diretório chamado node modules , estes últimos dois foram criados após você executar o comando npm install --save-dev jest . Ao abrirmos o arquivo package.json , veremos algo do tipo:

{
    "name": "meuApp",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "jest"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": {
      "jest": "^27.0.6"
    }
  }

//   Perceba que agora nosso arquivo package.json possui uma nova chave, "devDependencies" contendo o jest e a versão que está sendo utilizada neste projeto.
// Agora, o que é "devDependencies"? O "devDependencies" define os pacotes instalados no projeto como dependências de desenvolvimento. Ou seja, são pacotes que serão importantes apenas para o desenvolvimento do projeto. Existe também uma chave chamada "dependencies", que, diferente da primeira, lista os pacotes instalados como dependências de produção.

// E os outros dois?
//      O node_modules é a pasta que guarda todos os arquivos baixados das dependências instaladas.
//      O package-lock.json é um arquivo que “trava” as versões das dependências. Quando outra pessoa executar npm install ou npm i para baixar as dependências, este arquivo garante que serão instaladas as mesmas versões para todo mundo.

// Aqui vale ressaltar mais um ponto. Lembra do arquivo .gitignore que vimos anteriormente? O .gitignore é utilizado para especificar arquivos ou diretórios que não queremos que sejam rastreados pelo git .
// É considerado uma boa prática no desenvolvimento, inserir a pasta node_modules em um arquivo .gitignore em todo projeto que você criar. Isso porque essa pasta contém centenas de arquivos e o processo de adicionar o seu projeto a um repositório remoto pode acarretar em mais tempo se você incluir essa pasta. Além disso, suponha que alguém vá realizar o clone do seu projeto, o processo também demoraria muito mais, visto que essa pasta contém muitos arquivos, mas pera aí, essa pasta não é importante porque guarda todos os arquivos das dependências instaladas? Sim, você tem razão, e é aí que os arquivos package.json e package-lock.json entram em cena. Ao clonar um projeto que contém dependências a serem instaladas, basta rodar dentro da pasta o comando npm install e todas as dependências e versões listadas nestes dois arquivos .json serão instaladas, criando a pasta node_modules .
// Agora que você já está com tudo pronto, vamos pro conteúdo de testes em Jest que está maravilhoso!
// 
// Para testar sua instalação, vamos criar um arquivo chamado sum.test.js e colar o código abaixo dentro dele:

// criado na pasta new_project (o teste deu certo);

// Caso você não veja a tela acima, tente rever os passos, observe se você entrou na nova pasta que criou, verifique se não há a pasta node_modules já instalada na sua home ou pasta raiz, averigue o arquivo exemplo e o nome do arquivo, caso ele não tenha o .test ou .spec no nome, o Jest não tenta ler o arquivo, porque não reconhece como um arquivo de teste, isso será explicado melhor durante o conteúdo de hoje.


// Escrevendo testes

// Escrever testes em Jest é muito simples, como você deve ter percebido enquanto lia o artigo anterior. Tudo que é necessário é utilizar a função test . A função it é um alias para test , ou seja, ambas se referem à mesma função e você pode usar qualquer uma delas. Essas funções, por serem globais, ficam automaticamente disponíveis nos seus arquivos uma vez que o Jest é instalado.
// A função test espera três argumentos. O primeiro argumento é o nome do teste. Esse nome identifica o teste e é também o texto que aparecerá quando os testes forem executados. O segundo argumento é uma função contendo suas expectations . Em outras palavras, é dentro dessa função que você fará os testes propriamente ditos. O terceiro argumento (opcional) é um timeout , indicando quanto tempo o Jest deve esperar que o teste execute antes de abortá-lo.

// Para entender melhor, veja o código abaixo:

// sum.js
const sum = (a, b) => a + b;

test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});

// Neste exemplo, tanto a implementação quanto os testes da função estão no mesmo arquivo. Na prática, porém, eles ficarão separados. Jest procura por arquivos com as extensões .js , .jsx , .ts e .tsx dentro de uma pasta com o nome __tests__ , ou arquivos com o sufixo .test ou .spec . É comum que o arquivo de teste tenha o mesmo nome e fique na mesma pasta do arquivo que está sendo testado, acrescido da sufixo .test.js :

// sum.js
const sum = (a, b) => a + b;

module.exports = sum;

// sum.test.js
const sum = require('./sum');

test('sums two values', () => {
  expect(sum(2, 3)).toBe(5);
});

// A linha module.exports = sum exporta a função sum no primeiro arquivo para que possa ser utilizada em outros módulos. No segundo arquivo, utilizamos require('./sum') para importar a função sum . Veja a seção de recursos adicionais para entender mais sobre como importar e exportar módulos em Node.js .
// Agora que você já viu um teste simples de jest em funcionamento, que tal praticar com mais este próximo exemplo? Não se preocupe em entender como os testes estão estruturados neste exemplo. O objetivo aqui é apenas mostrar o quanto trabalhar com a biblioteca Jest é mais simples.
// Crie um arquivo com o nome 'loginValidation.js' e dentro dele copie e cole o seguinte código:

// loginValidation.js
const greetingMessage = (user) => {
    return `Hello, ${user}! Que bom ter você de volta`;
  };
  
  const loginErrorMessage = (user) => {
    return `Pessoa usuária '${user}' não encontrada, tente novamente!`;
  };
  
  const user = {
    userName: "Joana",
    password: 123456,
  };
  
  const verifyCredentials = ({ userName, password }) => {
    if (password === 123456 && userName === "Joana") {
      return greetingMessage(userName);
    } else {
      return loginErrorMessage(userName);
    }
  };
  
  const { userName, password } = user;
  
  module.exports = { greetingMessage, loginErrorMessage, verifyCredentials }

//   Vamos primeiro entender as funções que estão implementadas no arquivo loginValidation.js. Neste arquivo encontram-se três funções para simular uma situação de login. A função verifyCredentials faz uma validação simples se a pessoa usuária e a senha recebidas como argumento são estritamente iguais as chaves userName e password contidas no objeto user . Se essa verificação retornar true a função verifyCredentials vai chamar a função greetingMessage , que por sua vez vai retornar uma frase de boas vindas com o nome da pessoa usuária. Já no caso da verificação retornar false , ou seja as credenciais inseridas não corresponderem com as existentes no objeto, a função verifyCredentials vai chamar a função loginErrorMessage , que irá por sua vez retornar um erro.
// Agora, crie outro arquivo no mesmo diretório com o nome 'loginValidation.test.js' e dentro dele copie e cole o código abaixo:

// loginValidation.test.js
const {
    greetingMessage,
    loginErrorMessage,
    verifyCredentials,
  } = require("./loginValidation.js");
  
  describe("a função verifyCredentials()", () => {
    
    it("verifyCredentials() calls the correct function depending on the user and password input", () => {
      
      const user = {
        userName: 'Bob',
        password: 123456,
      };
        
      const { userName, password } = user;
  
      expect(verifyCredentials({ userName, password })).toBe(
        "Hello, Joana! Que bom ter você de volta"
      ); 
    });
  
    it("greetingMessage() returns a message in the format: `Hello, ${user}! Que bom ter você de volta`", () => {
      expect(greetingMessage("Lucas")).toBe(
        "Hello, Lucas! Que bom ter você de volta"
      );
    });
  
    it("loginErrorMessage() returns a message in the format: `Pessoa usuária '${user}' não encontrada, tente novamente!`", () => {
      expect(loginErrorMessage("Bob")).toBe(
        "Pessoa usuária 'Bob' não encontrada, tente novamente!"
      );
    });  
  });

//   Execute no seu terminal o comando npm test e veja o que acontece. Ao rodar o teste você receberá a mensagem que um dos testes falhou, como na imagem abaixo:

// imagem falha teste.png

// Observe que, como dito anteriormente, mesmo existindo um teste com erro, os outros testes foram executados normalmente. Além disso, o log do erro gerado pelo jest te possibilita identificar rapidamente onde foi que ocorreu o erro, uma vez que é exibida a mensagem que está contida no teste em questão. Neste caso o erro ocorreu no teste contendo a descrição " verifyCredentials() calls the correct function depending on the user and password input", como você pode ver aqui:

// imagem verifyCredentials.png

// Outro ponto positivo da utilização do Jest para fazer nossos testes é que ele traz uma mensagem contendo um diff, ou seja, o que era esperado de ocorrer no teste e o que de fato aconteceu. Isso nos ajuda a entender mais rapidamente onde está o erro. Neste exemplo o teste esperava receber como valor um objeto contendo uma pessoa usuária com o nome "Joana", mas ao invés disso recebeu "Bob".
// Sensacional, não é mesmo? Então bora pro conteúdo que na sequência vamos explicar o que são os expect e os matchers e como eles funcionam.

