const { cadeia, esquerda, direita } = require('./Logic_2.js')

const a = 'BRASIL'
const b = 'SUDESTE'
const c = 'PRAIA'
const d = cadeia(b, 3, 2) + direita(a, 3) + esquerda(c, 2) === esquerda(a, 4)
// 'ES' + 'SIL' + 'PR' === 'BRAS'
// false 

const e = !d

console.log(e)