
/*
 JSnack 9
 Calcola la somma e la media dei primi 10 numeri.
*/

const numero = 10;
let somma = 0;
let media =0;

for(i=0;i<=numero;i++){
    console.log(i);
    somma += i;
    media = (somma / numero);
}
console.log(somma);
console.log(media);
document.getElementById("somma").innerHTML = `La somma dei primi ${numero} numeri è ${somma}`;
document.getElementById("media").innerHTML = `La media dei primi ${numero} numeri è ${media}`;