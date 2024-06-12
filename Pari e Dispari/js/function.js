
// verifica se una parola è palindroma
function verificaPalindroma() {

    // prendiamo la parola inserita dall'utente e inseriamola in una variabile
    let parola = document.getElementById("inputParola").value;
    // Creazione di una nuova stringa con i caratteri della parola originale in ordine inverso
    let parolaInversa = parola.split('').reverse().join('');
    
    // Confronto tra la parola originale e quella invertita
    if (parola === parolaInversa) {       
      // Se sono uguali, la parola è palindroma e viene visualizzato il messaggio appropriato
      document.getElementById("risultato").innerHTML = "La parola è palindroma";
    } else {      
      // Se non sono uguali, la parola non è palindroma e viene visualizzato il messaggio appropriato
      document.getElementById("risultato").innerHTML = "La parola non è palindroma";
    }

    console.log(parola, parolaInversa);
}


// verifica se un numero è pari o dispari
function isPari(num) {
  return num % 2 === 0;
}

// Genera un numero casuale tra 1 e 5
function generaNumeroCasuale(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}