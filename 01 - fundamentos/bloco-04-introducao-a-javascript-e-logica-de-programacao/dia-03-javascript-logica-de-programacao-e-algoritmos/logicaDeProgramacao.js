// Instruções para Gabriel comprar leite.
// Gabriel, por favor compre leite, se tiver ovos, compre 6.

// Implementação do código ao pé da letra (comprar 6 leites se tiver ovos no mercado).

gabriel.goToMarket();

if (eggs.length > 0) {
gabriel.getMilk(6);
} else {
    gabriel.getMilk(1);
}

// Consertando implementação:

gabriel.openDoor();

let marketAddress = findMarketAddress();
gabriel.goToMarket();

if (milks.length >= 1) {
gabriel.getMilk(1);
}

if (eggs.length >= 6) {
    gabriel.getEgg(6);
}

// É importante desenvoler uma narrativa para o código, com lógica de programação.

// Transformar o raciocínio lógico em lógica de programação vem com o tempo, programando, desenvolvendo, estudando (desenvolvimento em longo prazo).

