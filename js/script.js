//Basic Variables
let kmlenght = prompt("Quanti chilometri vuole percorrere Oggi?");
let humanage = prompt("Inserisca l'età.");
let kmprice = kmlenght * 0.21;
let finalPrice = kmprice;

//Age check
if (humanage <= 18){
    finalPrice = kmprice * 0.8;
}

if (humanage >= 65){
    finalPrice = kmprice * 0.2;
}