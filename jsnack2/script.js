/*
 JSnack 2
 L’utente inserisce due parole in successione, con due prompt.
 Il software stampa prima la parola più corta, poi la parola più lunga.
*/

const primaParola = prompt("Inserisci una parola")
const secondaParola = prompt("Inserisci un altra parola")

if(primaParola.length < secondaParola.length){
    document.getElementById("parola-corta").append(primaParola);
    document.getElementById("parola-lunga").append(secondaParola);
}else{
    document.getElementById("parola-corta").append(secondaParola);
    document.getElementById("parola-lunga").append(primaParola);
}