/*
 JSnack 4
 In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
 chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

const arrayInvitati = ["giuseppe", "pasquale", "francesco", "fabrizio de andré", "lorenzo"];
const utente = prompt("Insersci il tuo nome per la verifica");

let verifica = false;

for(i = 0; i < arrayInvitati.length; i++){

    if(utente === arrayInvitati[i]){
        verifica = true;
    }

}

if(verifica){
    document.getElementById("output").append("Benvenuto alla festa del grande Gatsby");
}else{
    document.getElementById("output").append("Non sei degno del grande Gatsby");
}