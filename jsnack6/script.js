/*
 JSnack 6
 Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.
*/

const numeroUtente = parseInt(prompt("Inserisci un numero"));

for(i = 0; i <= numeroUtente; i++){
    
    document.getElementById("cubo").append(` ${i*i*i} `);
}