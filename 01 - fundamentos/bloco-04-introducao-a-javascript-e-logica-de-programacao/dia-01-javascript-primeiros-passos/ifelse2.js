const nota = 101;

if (nota >= 80 && nota <=100) {
    console.log("Parabéns, você foi aprovado!");
}
else if (nota < 80 && nota >= 60) {
    console.log("Você está na nossa lista de espera.");
}
else if (nota < 60 && nota >= 0){
    console.log("Você foi reprovado.")
}
else {
    console.log("Nota inválida.")
}