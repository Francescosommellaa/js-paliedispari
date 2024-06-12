// Chiede all'utente di scegliere tra pari o dispari e un numero da 1 a 5
let sceltaUtente = prompt("Scegli tra 'pari' o 'dispari'");
let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));

// Genera un numero casuale per il computer
let numeroComputer = generaNumeroCasuale(1, 5);

// Somma i due numeri
let somma = numeroUtente + numeroComputer;

// Determina se la somma è pari o dispari
let sommaIsPari = isPari(somma);

// definisci h1
let h1 = document.querySelector('h1');

// Dichiarazione del vincitore
if ((sommaIsPari && sceltaUtente === 'pari') || (!sommaIsPari && sceltaUtente === 'dispari')) {
    h1.textContent = ("Hai vinto! La somma è " + somma + " ed è " + (sommaIsPari ? 'pari' : 'dispari'));
} else {
    h1.textContent = ("Hai perso. La somma è " + somma + " ed è " + (sommaIsPari ? 'pari' : 'dispari'));
}