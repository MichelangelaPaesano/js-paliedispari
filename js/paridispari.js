const numeroUtente = parseInt(prompt('Scegli un numero da 1 a 5'))
console.log (numeroUtente)

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); 
}

let numPc = getRandomInt(1, 6)
console.log (numPc)

let somma = numeroUtente + numPc;
console.log (`${numeroUtente} + ${numPc} = ${somma}`)