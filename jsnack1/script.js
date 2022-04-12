/*
 JSnack 1
 L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
*/

const primoNum = parseInt(prompt("Inserisci un numero"));
const secondoNum = parseInt(prompt("Inserisci un altro numero"));

if(primoNum > secondoNum){
    document.getElementById("numero-maggiore").innerHTML = primoNum;
}else{
    document.getElementById("numero-maggiore").innerHTML = secondoNum;
}