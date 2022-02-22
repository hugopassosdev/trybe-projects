# Parte III - Processos & Jobs

# Exercício 1

"Liste todos os processos;"
top

# Exercício 2

"Agora use o comando sleep 30 & ;"

sleep 30 & (o & é para rodar o processo em background)

# Exercício 3

"Use a listagem de processos para encontrar o PID do processo que está executando o comando sleep 30 e termine a sua execução (mate o processo) ;"

kill -17907 pid

# Exercício 4

"Execute novamente o comando sleep 30 , mas agora sem o & . Depois, faça com que ele continue executando em background;"

sleep 30
depois aperte ctrl+z (para para-lo momentaneamente) e depois bg para a tarefa continuar, mas agora em segundo plano.

# Exercício 5

"Crie um processo em background que rode o comando sleep por 300 segundos."

sleep 300 &

# Exercício 6

"Crie mais dois processos que rodem o comando sleep por 200 e 100 segundos, respectivamente."

sleep 200
sleep 100

# Exercício 7

"Você deve criá-los em foreground (sem usar o & ) e suspendê-los (apertando ctrl+z ) após cada um começar a executar."

ok

# Exercício 8

"Verifique que apenas o processo sleep 300 está em execução com o comando jobs . Suspenda a execução desse processo."

fg %1 (%1 refere-se ao primeiro processo que abri - sleep 300 &)
ctrl+z

# Exercício 9

"Você vai precisar trazer o processo para foreground ( fg ) e suspendê-lo ( ctrl+z ), ou enviar um sinal."

ok

# Exercício 10

"Retome a execução do processo sleep 100 em background com o comando bg ."

bg %3

# Exercício 11

"Termine a execução de todos os processos sleep (mate os processos) ."

kill %1 %2 %3
