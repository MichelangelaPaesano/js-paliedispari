
const parolaUtente = prompt('Inserisci una parola')

function isPalindrome (parola) {

    //creiamo una variabile per mettere dentro la parola al contrario
    
    let parolaInvertita = ''

    //ciclo for per rendere la parola al contrario

    for (let i=0; i < parola.length; i++) {
        const char = parola.at(-1 -i)
        parolaInvertita += char
    }

    //condizioni per sapere se una parola è palindroma
    //se la parola === parolaInvertita
    //- "la parole è palindroma"
    //altrimenti "la parole non è palindroma"
    
    if (parola === parolaInvertita) {
        console.log ('La parola è palindroma')
    } else {
        console.log ('La parola non è palindroma')
    }

    // return dà vita alla funzione, così che possa essere presente anche fuori la funzione
    //il return va alla fine perchè prima la funzione deve esplicare tutte le cose che diciamo di fare
    //e solo dopo può dare vita alla funzione e invocarla correttamente 
     return parolaInvertita
}


console.log(isPalindrome(parolaUtente))