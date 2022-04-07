// O que vamos aprender?

// Você aprenderá sobre testes unitários e também sobre como testar em pequenos passos.
// Já o conceito de testar em pequenos passos fala sobre como orientar nosso desenvolvimento com base nos testes!
// Para isso, você utilizará o Jest , um framework de testes para JavaScript desenvolvido pelo Facebook.

// Você será capaz de:

// Entender o que são e para que servem testes unitários;
// Aplicar o conceito de TDD, ou seja, o desenvolvimento orientado a testes;
// Criar testes unitários a partir do framework Jest .

// Por que isso é importante?

// O desenvolvimento de software não é algo simples e cada engrenagem de uma aplicação pode ser muito delicada. São muitas variáveis que você deve se preocupar, a cada vez que implementa alguma modificação, como o desempenho, disposição dos componentes e etc. Seria muito infeliz ter que checar cada retorno do seu código antes de toda vez que for fazer um commit. Além disso, não seria confiável, pois seres humanos cometem falhas. Por isso, programe a máquina para trabalhar a seu favor 😉.
// Quando você pensa em comprar um carro, espera que ele tenha passado por diversos testes para garantir a sua segurança. Qualquer pessoa deseja um produto de qualidade, por que então não criar aplicações web com esse padrão também? Afinal, a única consequência será reduzir defeitos e aumentar o valor do sistema.
// E o mais importante: o mindset que se desenvolve ao escrever testes para uma aplicação força quem desenvolve a imaginar e prever os fluxos que uma pessoa pode percorrer ao usar a sua aplicação. Isso diminui as chances de gerar bugs ou escrever códigos que precisarão ser refeitos depois.
// Testes são fundamentais e tem um grande valor no dia a dia de quem desenvolve. Até o curso acabar, espera-se que a ideia de fazer um código sem testá-lo seja incômoda . Você irá se formar com um mindset orientado a testes!

// Conteúdos

// Na indústria, qualidade é algo perseguido há tempos! Diversas metodologias surgiram, sempre com o objetivo de melhorar a qualidade e ao mesmo tempo reduzir custo, pois a consequência de um defeito pode ser desastroso, não só para as finanças, mas também para o nome da empresa.
// Basicamente, existem três dimensões de qualidade que precisam ser consideradas:
// Confiança : O sistema é resistente a falhas durante a execução, isto é, não entra em loop , não interrompe a execução por falta de recursos.
// Funcionalidade : O sistema se comporta conforme o que foi definido em seus requisitos.
// Performance : O sistema tem um tempo de resposta adequado e aceitável, mesmo quando submetido a um volume de processamento próximo de situações reais ou de pico.

// E, para atender a essas três dimensões, a pessoa que programa tem uma nova tarefa: desenvolver com foco em qualidade.

// Testes unitários: uma analogia ao relógio

// Digamos que você, como pessoa desenvolvedora de software em um universo paralelo, seja uma pessoa relojoeira. A sua responsabilidade é confeccionar relógios de qualidade desde o zero, construindo desde as menores peças. Ao confeccionar as centenas de engrenagens, molas e parafusos que irão constituir seu relógio, você deve seguir especificações.
// Cada unidade de engrenagens, molas e parafusos, ao serem confeccionadas, são testadas individualmente, medidas e verificadas, para garantir que irão funcionar conforme o esperado. Engrenagens devem suavemente girar, molas devem ter uma certa resistência, e parafusos devem ter diferentes espessuras e tamanhos, e por aí vai.
// Como você poderia ter certeza de que cada pecinha do relógio está cumprindo sua devida função?
// Com essa provocação, introduziremos você aos testes unitários, que tem a função de validar o comportamento do nosso código de forma sólida e precisa. 

// **** Testes unitários são porções de código responsáveis por validar o comportamento de unidades funcionais de código. ***

// Nesse contexto, entende-se como unidade funcional qualquer porção de código que, através de algum estímulo, seja capaz de gerar um comportamento esperado. Isso inclui funções, propriedades, construtores... tudo que, de alguma maneira, processe um comportamento de valor e que você deseja garantir que, apesar das alterações em nível de código, o comportamento siga sendo o mesmo.
// Portanto, os testes unitários , assim como qualquer teste automatizado, permitem uma melhor manutenção do seu código. Eles não servem somente para verificar se uma função específica está funcionando, mas também para garantir que sua aplicação continue funcionando após alguma alteração. Sendo assim, é interessante pensar neles como um investimento de tempo para o futuro.

// Testando em pequenos passos

// O TDD: Test Driven Development , em tradução livre, o desenvolvimento orientado a testes , é uma técnica de desenvolvimento que, em certos cenários, favorece a produtividade e a escrita de códigos confiáveis. Essa técnica é interessante porque ela ajuda a criar uma mente programadora orientada a testes , ainda que nem sempre escrever testes antes de escrever funcionalidades seja a prática mais adequada.
// O TDD é muito importante como exercício e para determinados tipos de projetos, mas está longe de ser um consenso na comunidade programadora como prática fundamental para 100% dos casos. É importante que essa visão crítica fique bem clara.
// Tendo isso em mente hoje você vai aprender e praticar o TDD, mas o conhecimento a ser absorvido é "como testar bem uma aplicação, de forma eficaz e produtiva" e "como ter um mindset orientado a testes", e não especificamente como a metodologia funciona.
// Com muita prática e experiência, você irá desenvolver a intuição necessária para avaliar se o TDD é a melhor abordagem para testar a sua aplicação. Um exemplo interessante que o TDD pode ser bastante útil é no teste de funções puras.
// O desenvolvimento orientado a testes é um processo cíclico que pode ser descrito em três etapas, como ilustrado abaixo. O princípio básico do TDD é fazer testes pequenos.

// imagem: ciclo TDD.png

// Destrinchando cada etapa, o TDD consiste em:

//      Escrever um teste que cubra a função que você pretende implementar antes mesmo de executá-la. Este teste irá falhar - afinal, a sua função ainda não foi declarada. Você pode começar do teste mais elementar possível para esse cenário, como verificar se a função que você irá criar existe.
//      Implementar apenas o necessário para que o teste passe. No caso do exemplo anterior, você só precisaria declarar a função para passar o teste.
//      Refatorar o código para que ele esteja bem escrito e fácil de se entender. O pulo do gato nessa etapa é que você tem um teste já implementado que irá falhar caso você quebre algo ao refatorar o seu código.
//      Repetir! Afinal de contas, o desenvolvimento orientado a testes é um ciclo. Volte a etapa 1 e repita esse processo até que todas as funcionalidades da sua função sejam implementadas.
// Além de ser útil para testar funções puras, outro exemplo prático em que o desenvolvimento orientado a testes pode ser útil é consertar bugs. Os testes ajudam a quebrar problemas complexos em partes menores que podem ser analisadas mais facilmente. Assim, você poderá focar em uma regra de negócio específica sem medo de quebrar alguma outra funcionalidade.

// NodeJS Assert

// Para começar, conheça um pouco sobre o NodeJS Assert.
// O módulo Assert é uma ferramenta que testa expressões. Esse módulo já vem instalado com o NodeJS . Podemos entender o assert como sendo uma expressão booleana que será sempre true , a menos que haja uma falha.
// Abaixo temos um exemplo de como podemos fazer um teste simples com assert :

const assert = require('assert'); // Sintaxe para incluir o módulo assert

assert.strictEqual(50, 50); // Sem erros: 50 === 50
assert.strictEqual(50, 70); // AssertionError: 50 !== 70

// Para o seu desenvolvimento durante o curso, será necessário o uso de ferramentas mais robustas, como o Jest , que você aprenderá na aula de hoje. Mas, caso tenha se interessado, você pode consultar mais sobre o NodeJS Assert aqui na documentação .
