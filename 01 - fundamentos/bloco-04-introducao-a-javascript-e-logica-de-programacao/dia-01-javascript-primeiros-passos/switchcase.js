//switch -- case (alternativa ao if else)

let trafficLight = "amarelo";

switch(trafficLight) {
    case "vermelho":
        console.log("pare");
        break;

    case "amarelo":
        console.log("atenção");
        break;

    case "verde":
        console.log("siga");
        break;

    default:
        console.log("valor não identificado");
    
}