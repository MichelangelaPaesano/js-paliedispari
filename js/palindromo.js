
const parolaUtente = prompt('Inserisci una parola')

function isPalindrome (parola) {
    
    let parolaInvertita = ''

    for (let i=0; i < parola.length; i++) {
        const char = parola.at(-1 -i)
        parolaInvertita += char
    }

    return parolaInvertita

    
    

}


console.log(isPalindrome(parolaUtente))