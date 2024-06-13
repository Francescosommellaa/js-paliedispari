
// verificare se una parola è palindroma
function verificaPalindroma() {

    // prendere la parola inserita dall'utente e inserirla in una variabile
    let parola = document.getElementById("inputParola").value;
    // Creare una nuova stringa con i caratteri della parola originale in ordine inverso
    let parolaInversa = parola.split('').reverse().join('');
    
    // Confrontare tra la parola originale e quella invertita
    if (parola === parolaInversa) {       
      // Se sono uguali, la parola è palindroma e viene visualizzato il messaggio appropriato
      document.getElementById("risultato").innerHTML = "La parola è palindroma";
    } else {      
      // Se non sono uguali, la parola non è palindroma e viene visualizzato il messaggio appropriato
      document.getElementById("risultato").innerHTML = "La parola non è palindroma";
    }

    console.log(parola, parolaInversa);
}

// verificare se un numero è pari o dispari
function isPari(num) {
  return num % 2 === 0;
}

// Generare un numero casuale tra 1 e 5
function generaNumeroCasuale(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}