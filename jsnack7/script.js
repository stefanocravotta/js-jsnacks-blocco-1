
/*
 JSnack 7
 Stampa le potenze di 2 fino a 1000.
 questo snack cela un trabocchetto:  1000 non è una potenza di 2
 perciò per fermarsi prima di 1000 bisogna stampare la potenza prima di incrementarla
 perché altrimenti il controllo viene fatto dopo e si sfora
*/

let n = 2;
const limite = 1000;
const potenza = Math.pow(n,2);

while(n < limite){
    
    n = Math.pow(n,2);
    if(n < limite){
        document.getElementById("potenza").append(` ${n} `)
    }else{
        document.getElementById("potenza").append(`hai sforato!!`)
    }
    
}