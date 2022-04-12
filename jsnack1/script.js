/*
 JSnack 1
 L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
*/

const primoNum = parseInt(prompt("Inserisci un numero"));
const secondoNum = parseInt(prompt("Inserisci un altro numero"));

if(primoNum > secondoNum){
    document.getElementById("numero-maggiore").innerHTML = `Il numero più alto inserito è ${primoNum}`;
}else if(primoNum < secondoNum){
    document.getElementById("numero-maggiore").innerHTML = `Il numero più alto inserito è ${secondoNum}`;
}else if (primoNum === secondoNum){
    document.getElementById("numero-maggiore").innerHTML = "Inserisci due numeri diversi tra loro";
}