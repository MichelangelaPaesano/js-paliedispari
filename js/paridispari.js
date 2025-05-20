//creiamo prima il prompt per far mettere il numero al cliente 
//const sceltaUtente = prompt('Scegli pari o dispari scrivendo "pari" o "dispari"') //mi sono completamente dimenticata di mettere questa parte nel codice 
const numeroUtente = parseInt(prompt('Scegli un numero da 1 a 5'))
console.log (numeroUtente)

//con la funzione che ho trovato su MDN faccio generare un numero al pc 
function getRandomBetween(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); 
}

let numPc = getRandomInt(1, 6)
console.log (numPc)

//facciamo la somma delle due
let somma = numeroUtente + numPc;
console.log (`${numeroUtente} + ${numPc} = ${somma}`)

//creiamo una funzione per decretare chi vince
function isEven (num) {
    if (somma % 2 === 0) {
        console.log('il pc ha vinto')
    } else {
        console.log ('Il cliente ha vinto')
    }

}

isEven(somma);