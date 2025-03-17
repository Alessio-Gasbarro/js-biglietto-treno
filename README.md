# js-biglietto-treno

Esercizio di oggi: js-biglietto-treno

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

Numero di push minimo: 6

Ricordatevi di spezzare il problema in sottoproblemi come visto a lezione nel file README.md
Buon lavoro!

Pensiero logico:

1.0 Chiedere all'utente quanti km vuole percorrere
1.1 Comunicare all'utente che i prezzi attuali sono di 0.21€ al km

2.0 Chiedere all'utente l'età
2.1 IF humanage <= 18
    THEN 20% Discount
2.2 IF humanage >= 65
    THEN 40% Discount
    
3.0 Comunicare al cliente l'importo finale da pagare
3.1 IF ticket == paid
    THEN ticket == give



