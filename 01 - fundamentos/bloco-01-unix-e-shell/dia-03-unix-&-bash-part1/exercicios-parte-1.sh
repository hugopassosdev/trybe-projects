# Exercício 1

"Criando diretorio unix_tests"
mkdir unix_tests
"Navegando para diretorio unix_tests"
cd unix_tests

# Exercício 2

"Criando arquivo trybe.txt"
>> trybe.txt

# Exercício 3

"Criando uma copia de trybe.txt com o nome de trybe_backup.txt"
cp trybe.txt trybe_backup.txt

# Exercício 4

"Renomeando/movendo o arquivo trybe.txt para trybe.old.txt"
mv trybe.txt trybe.old.txt

# Exercício 5

"Criando diretorio backup"
mkdir backup

# Exercício 6

"Movendo trybe_backup.txt para o diretorio backup"
mv trybe_backup.txt backup

# Exercício 7

"Criando um diretorio chamado backup2"
mkdir backup2

# Exercício 8

"Movendo trybe_backup da pasta backup para a pasta backup2"
mv backup/trybe_backup.txt backup2

# Exercício 9

"Apagando o diretorio backup"
rmdir backup

# Exercício 10

"Renomeando a pasta backup2 para backup"
mv backup2 backup

# Exercício 11

"Mostrando o path atual"
pwd
sleep $delay

# Exercício 12

"Listando arquivos do path atual"
ls

# Exercício 13

"Limpando o terminal dentro de segundos"
clear

# Exercício 14

"Criando arquivo skills.txt"
cat >> skills.txt

# Exercício 15

"Mostrando as 5 primeiras skills do arquivo skills.txt"
cat skills.txt | head -5

# Exercício 16

"Mostrando as 4 ultimas skills do arquivo skills.txt"
cat skills.txt | tail -5

# Exercício 17
"Apagando todos os arquivos que terminem em .txt"
rm -rf *.txt
