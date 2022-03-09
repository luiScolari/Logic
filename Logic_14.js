const { direita, esquerda } = require('./Logic_2')

const k = "LAGOA"
const l = "PATO"

const m = direita(k, 2) + esquerda(l, 3) === "LAGO"
// "OA" + "PAT" === "LAGO"
// "OAPAT" === "LAGO"
// false

const n = m || !m && k.length > l.length
// false || true && 5 > 4
// false || true && true
// false || true
// true 

console.log(n)