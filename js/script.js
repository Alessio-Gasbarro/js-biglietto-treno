//Basic Variables
let kmlenght = prompt("Quanti chilometri vuole percorrere Oggi?");
let humanage = prompt("Inserisca l'età.");
let kmprice = kmlenght * 0.21;
let finalPrice = kmprice;

//Age check
if (humanage < 18){
    finalPrice = kmprice * 0.8;
    message = 'Hai diritto ad uno sconto del 20% sul prezzo finale!';
    console.log(message);
}

if (humanage > 65){
    finalPrice = kmprice * 0.2;
    message = 'Hai diritto ad uno sconto del 40% sul prezzo finale!';
    console.log(message);
}

//Final price
finalPrice = finalPrice.toFixed(2);
message = 'Il tuo prezzo finale è in stampa!';
console.log(finalPrice);