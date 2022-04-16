/*
 JSnack 5
 Crea un array vuoto.
 Chiedi per 6 volte all’utente di inserire un numero,
 se è dispari inseriscilo nell’array
*/

const arrayDispari = [];
const iterazione = 6;
let contatore = 0;
let richiesta;

while(contatore < iterazione){
    contatore++;
    richiesta = parseInt(prompt("Inserisci un numero per 6 volte"))
    if(richiesta % 2 !== 0){
        arrayDispari.push(richiesta);
    }
}

console.log(arrayDispari);


