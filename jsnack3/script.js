/*
 JSnack 3
 Il software deve chiedere per 5 volte all’utente di inserire un numero.
 Il programma stampa la somma di tutti i numeri inseriti.
 Esegui questo programma in due versioni, con il for e con il while (facoltativo)
*/

let somma = 0;
const iterazione = 5;

/* CICLO FOR */

for(i = 0; i < 5; i++){
    
    somma += parseInt(prompt("Inserisci un numero cinque volte"))
}

document.getElementById("somma").append(somma);

/* CICLO WHILE */

/* let i = 0;

while(somma > i){
    i++
}

document.getElementById("somma").append(i) */
