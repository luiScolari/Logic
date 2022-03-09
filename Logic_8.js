const { cadeia, direita } = require('./Logic_2.js')

const a = 'COMPUTADOR 10'
const b = a.length - 1 % 2 > 10 && cadeia(a, 2, 2) === direita(a, 6)
// 12 % 2 > 10 && 'MP' === 'DOR 10'
// false && false
// false 

console.log(b)