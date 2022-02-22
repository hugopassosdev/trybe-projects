# Exercício 1

"Na pasta unix_tests , baixe um arquivo com os nomes de todos os países do mundo utilizando o comando curl:"
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

# Exercício 2

"Mostre todo o conteúdo do arquivo countries.txt na tela."
cat countris.txt

# Exercício 3

"Mostre o conteúdo de countries.txt , página por página, até encontrar a Zambia ."
less pZambia countris.txt

# Exercício 4

"Mostre novamente o conteúdo de countries.txt página por página, mas agora utilize um comando para buscar por Zambia ."
less pZambia countris.txt

# Exercício 5

"Busque por Brazil no countries.txt ."
grep Brazil countries.txt

# Exercício 6

"Busque novamente por brazil , mas agora utilizando o lower case ."
grep -i brazil countries.txt

# Exercício 7

"Para os próximos exercícios, crie um novo arquivo chamado phrases.txt e adicione algumas frases à sua escolha. Não precisa criar o arquivo pelo terminal."

Criei pelo terminal. Comandos:
cat > phrases.txt

Frases adicionadas:
Hello World!
Olá mundo!
Ciao mondo!
Bonjour le monde!
Hola mundo!
apertei CTRL-D para salvar e sair do arquivo

# Exercício 8

"Busque pelas frases que não contenham a palavra fox ."
grep -v fox phrases.txt 

# Exercício 9

"Conte o número de palavras do arquivo phrases.txt ."
wc phrases.txt

# Exercício 10

"Conte o número de linhas do arquivo phrases.txt ."
wc phrases.txt

# Exercício 11

"Crie os arquivos empty.tbt e empty.pdf ."
touch empty.tbt empty.pdf

# Exercício 12

"Liste todos os arquivos do diretório unix_tests ."
ls

# Exercício 13

"Liste todos os arquivos que terminem com txt ."
ls *txt

# Exercício 14

"Liste todos os arquivos que terminem com tbt ou txt ."
ls *txt *tbt

# Exercício 15

"Acesse o manual do comando ls ."
ls --help




















