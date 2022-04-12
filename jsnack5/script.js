/*
 JSnack 5
 Crea un array vuoto.
 Chiedi per 6 volte all’utente di inserire un numero,
 se è dispari inseriscilo nell’array
*/

const arrayDispari = [];

const primaRichiesta = parseInt(prompt("Inserisci un numero"));
const secondaRichiesta = parseInt(prompt("Inserisci un numero"));
const terzaRichiesta = parseInt(prompt("Inserisci un numero"));
const quartaRichiesta = parseInt(prompt("Inserisci un numero"));
const quintaRichiesta = parseInt(prompt("Inserisci un numero"));
const sestaRichiesta = parseInt(prompt("Inserisci un numero"));


if(primaRichiesta % 2 !==0){
    arrayDispari.push(primaRichiesta);
}
if(secondaRichiesta % 2 !==0){
    arrayDispari.push(secondaRichiesta);
}
if(terzaRichiesta % 2 !==0){
    arrayDispari.push(terzaRichiesta);
}
if(quartaRichiesta % 2 !==0){
    arrayDispari.push(quartaRichiesta);
}
if(quintaRichiesta % 2 !==0){
    arrayDispari.push(quintaRichiesta);
}
if(sestaRichiesta % 2 !==0){
    arrayDispari.push(sestaRichiesta);;
}

console.log(arrayDispari);


