/*
 JSnack 2
 L’utente inserisce due parole in successione, con due prompt.
 Il software stampa prima la parola più corta, poi la parola più lunga.
*/

const primaParola = prompt("Inserisci una parola")
const secondaParola = prompt("Inserisci un altra parola")

if(primaParola.length < secondaParola.length){
    document.getElementById("parola-corta").append(`La parola più corta è ${primaParola}`);
    document.getElementById("parola-lunga").append(`La parola più lunga è ${secondaParola}`);
}else if (primaParola.length > secondaParola.length){
    document.getElementById("parola-lunga").append(`La parola più lunga è ${secondaParola}`);
    document.getElementById("parola-corta").append(`La parola più corta è ${primaParola}`);
}else if(primaParola.length === secondaParola.length){
    document.getElementById("parola-corta").append("Le due parole hanno la stessa lunghezza");
}