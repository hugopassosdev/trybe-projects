# Parte I - Comandos de Input e Output

# Exercício 1

"Navegue até a pasta unix_tests"
cd unix_tests

# Exercício 2

"Crie um arquivo texto pelo terminal com o nome skills2.txt e adicione os valores Internet , Unix e Bash , um em cada linha."

cat >> skills2.txt
Internet
Unix
Bash

CTRL+D para salavar e sair do cat

# Exercício 3

"Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal. 🤓"

echo -e "Windows \nUbuntu \nMozilla \nApple \nHP" >> skills2.txt
echo -e (-e faz com que o \n (newline) seja interpretado)

# Exercício 4

"Conte quantas linhas tem o arquivo skills2.txt ."
wc skills2.txt

# Exercício 5

"Crie um arquivo chamado top_skills.txt usando o skills2.txt , contendo as 3 primeiras skills em ordem alfabética."

cat skills2.txt | sort | head -3 > top_skills.txt
o cat abre o arquivo, o sort coloca em ordem alfabética o head -3 mostra os 3 primeiros itens de dentro do arquivo e o > salva no novo arquivo

# Exercício 6

"Crie um novo arquivo chamado phrases2.txt pelo terminal e adicione algumas frases de sua escolha."

cat >> phrases2.txt 
Bom dia
Boa tarde
Boa noite

CTRL+D para salavar e sair do cat

# Exercício 7

"Conte o número de linhas que contêm as letras br ."

grep .br. phrases2.txt | wc -l  
grep para procurar padrões dentro de um arquivo

os . era para indicar que o br poderia aparecer antes ou depois de qualquer caractere
o wc -l é para mostrar o numero de linhas que contem as letras b e r.

# Exercício 8

"Conte o número de linhas que não contêm as letras br ."

grep -v .br. phrases2.txt | wc -l  

# Exercício 9

"Adicione dois nomes de países ao final do arquivo phrases2.txt ."

echo -e "El Salvador \nParaguai" >> phrases2.txt

# Exercício 10

"Crie um novo arquivo chamado bunch_of_things.txt com os conteúdos dos arquivos phrases2.txt e countries.txt"

cat phrases2.txt countries.txt > bunch_of_things.txt

# Exercício 11

"Ordene o arquivo bunch_of_things.txt ."

cat bunch_of_things.txt | sort bunch_of_things.txt

abre o arquivo bunch_of_things.txt já colocando-o em ordem
