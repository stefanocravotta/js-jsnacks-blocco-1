
/*
 JSnack 8
 Chiedi un numero di 4 cifre all’utente
 e calcola la somma di tutte le cifre che compongono il numero.
 in questo caso possiamo sfruttare a nostro vantaggio il fatto che
 la funzione prompt restituisca una stringa anche se si è digitato un numero
 e recuperare una cifra alla volta usanto il ciclo for per scorrere la stringa numerica
*/

const richiesta = prompt("Inserisci un numero di 4 cifre");
const arrayNumeri= [];
const caratteri= richiesta.charAt();

let somma =0;
let verifica = true;


if(richiesta.length < 4){
    alert("Inserisci almeno 4 numeri !")
    verifica = false;
}else if (richiesta.length > 4){
    alert("Non inserire più di 4 numeri")
    verifica = false;
}

if(verifica === true){
    for(i=0;i< richiesta.length; i++){

        const numeroStr = richiesta.charAt(i);
        arrayNumeri.push(numeroStr);
    }
    for(i=0; i < richiesta.length; i++){
        somma+=parseInt(arrayNumeri[i]);
    }

    document.getElementById("somma").innerHTML=` La somma dei tuoi numeri è ${somma}`;
}else{
    document.getElementById("somma").innerHTML=` Inserire i dati corretti`;
}


