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