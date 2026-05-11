/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- In alternativa: nel terminale, `node script.js`.
- Cerca nei motori di ricerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

/* ESERCIZIO 1 — Saluto personalizzato
   Crea due const "nome" e "cognome".
   Stampa con un template literal: "Ciao, mi chiamo Mario Rossi."
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const myName = "Claudio";
const mySurname = "Giasi";
console.log(`Il mio nome è ${myName} ${mySurname}`);

/* ESERCIZIO 2 — Calcolatrice base
   Due numeri "a" e "b".
   Stampa le 6 operazioni nel formato "10 + 3 = 13":
   somma, differenza, prodotto, divisione, resto (%), elevamento (**).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numberA = 10;
const numberB = 3;

console.log(`${numberA + numberB}`);
console.log(`${numberA - numberB}`);
console.log(`${numberA * numberB}`);
console.log(`${numberA / numberB}`);
console.log(`${numberA % numberB}`);
console.log(`${numberA ** numberB}`);

/* ESERCIZIO 3 — Età nel tempo
   const annoNascita (scegli un anno).
   const annoCorrente = 2026.
   Stampa: età oggi, età tra 10 anni, età 5 anni fa.
   Formato: "Tra 10 anni avrai 35 anni."
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const annoNascita  = 1997;
const annoCorrente = 2026;
let todayAge = annoCorrente - annoNascita;
let futureAge = todayAge + 10;
let pastAge = todayAge - 5;

console.log(
    `Età oggi hai ${todayAge}, tra 10 anni avrai ${futureAge}, 5 anni fa avevi ${pastAge}`
);

/* ESERCIZIO 4 — Maggiorenne?
   Variabile "eta".
   Calcola "maggiorenne" come "eta >= 18".
   Stampa: "Età: 25 — Maggiorenne: true"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const eta = 15
let maggiorenne = eta >= 18;

console.log(
    `Età ${eta} - maggiorenne? ${maggiorenne}`
);

/* ESERCIZIO 5 — Tipo del valore
   Cinque variabili: una string, una number, una boolean, una null, una undefined.
   Stampa per ognuna: "nome è di tipo: string" usando typeof.
   In commento sopra la variabile null: spiega cosa ritorna typeof null e perché.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const nome = "Claudio";
const anno = 1997;
const carrelloPieno = true;
let pippo;
let pluto = null;

console.log(`Nome è di tipo ${typeof nome}`);
console.log(`Anno è di tipo ${typeof anno}`);
console.log(`Carrello Pieno è di tipo ${typeof carrelloPieno}`);
console.log(`Pippo è di tipo ${typeof pippo}`);
console.log(`Pluto è di tipo ${typeof pluto}`); //typeof null riporta una variabile nulla perché l'operatore la dichiara nulla (io), dichiara "object" per un bug storico mai corretto

/* ESERCIZIO 6 — === vs ==
   numero = 5
   stringa = "5"
   Stampa il risultato di "numero == stringa" e "numero === stringa".
   In commento, una riga: spiega la differenza.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numero = 5;
const stringa = "5";

console.log(`${numero == stringa}`); //true - rende uguali i tipi e poi li confronta, quindi confronta solo il valore, quindi per lui 5 è uguale a cinque (come se fosse 5).
console.log(`${numero === stringa}`); // false - confronta tipo e poi valori, quindi non sono uguali.

/* ESERCIZIO 7 — Conversioni implicite
   Senza eseguire il codice, prevedi in commento il risultato di queste 4 espressioni.
   Poi stampale per verificare.
   - "5" + 3
   - "5" - 3
   - true + 1
   - "10" * "2"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//53
//2
//Undefined in realtà 2
//20

console.log("5" + 3);
console.log("5" - 3);
console.log(true + 1);
console.log("10" * "2");

/* ESERCIZIO 8 — Classificazione numero
   Variabile "n".
   Usando % e operatori logici, stampa tre righe:
   "n è pari: true/false"
   "n è divisibile per 3: true/false"
   "n è pari E divisibile per 3: true/false"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myAge = 28;

console.log(`la variabile è pari? ${myAge % 2 === 0}`); // True
console.log(`la variabile è divisibile per 3? ${myAge % 3 === 0}`); // False
console.log(`la variabile è pari e divisibile per tre? ${myAge % 2 === 0} && ${myAge % 3 === 0}`); // False

/* --EXTRA-- ESERCIZIO 9 — Triangolo
   Tre const "a", "b", "c" (lunghezze dei lati).
   Calcola perimetro.
   Determina il tipo: "equilatero", "isoscele", "scaleno".
   Stampa: "Triangolo isoscele, perimetro 15"
*/

/* SCRIVI QUI LA TUA RISPOSTA */