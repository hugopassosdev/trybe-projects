# Parte II - Permissões

# Exercício 1

"Navegue até a pasta unix_tests ;"
cd unix_tests

# Exercício 2

Rode o comando ls -l e veja quais as permissões dos arquivos;
drwxrwxr-x 2 hugo hugo 4096 Feb 16 17:26  backup
-rw-rw-r-- 1 hugo hugo 1892 Feb 18 11:25  bunch_of_things.txt
-rw-rw-r-- 1 hugo hugo   43 Feb 17 18:54  coresOrdenadas.txt
-rw-rw-r-- 1 hugo hugo   43 Feb 17 18:47  cores.txt
-rw-rw-r-- 1 hugo hugo 1842 Feb 17 11:06  countries.txt
-rw-rw-r-- 1 hugo hugo    0 Feb 17 12:09  empty.pdf
-rw-rw-r-- 1 hugo hugo    0 Feb 17 12:09  empty.tbt
-rw-rw-r-- 1 hugo hugo 3581 Feb 18 11:28 'exercicios parte 2'
-rw-rw-r-- 1 hugo hugo   20 Feb 17 19:08  frutas.txt
-rw-rw-r-- 1 hugo hugo   50 Feb 18 11:07  phrases2.txt
-rw-rw-r-- 1 hugo hugo   66 Feb 17 11:52  phrases.txt
-rw-rw-r-- 1 hugo hugo   55 Feb 18 10:04  skills2.txt
-rw-rw-r-- 1 hugo hugo   32 Feb 18 09:42  skills.txt
-rw-rw-r-- 1 hugo hugo   15 Feb 18 10:30  top_skills.txt
-rw-rw-r-- 1 hugo hugo   62 Feb 17 18:50  tudo.txt

# Exercício 3

"Mude a permissão do arquivo bunch_of_things.txt para que todos os usuários possam ter acesso à leitura e escrita, e verifique se está correto com o comando ls -l ;"
Resultado esperado: -rw-rw-rw- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt

chmod a+w bunch_of_things.txt

# Exercício 4

"Tire a permissão de escrita do arquivo bunch_of_things.txt para todos os usuários, verifique se está correto com o comando ls -l ;"
Resultado esperado: -r--r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt

chmod a-w bunch_of_things.txt

# Exercício 1

"Volte à permissão do arquivo bunch_of_things.txt para a listada inicialmente utilizando o comando chmod 644 bunch_of_things.txt ."
Resultado esperado: -rw-r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt

chmod 644 bunch_of_things.txt 

Ok, voltou ao inicial.
A permissão 644 significa: leitura para todos, escrita somente para o usuário dono do arquivo, sem permissão de execução.
