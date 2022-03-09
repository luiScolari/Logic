const { direita, esquerda, quociente } = require('./Logic_2')
const b = 4
const c = "INFORMÁTICA"

const d = c.length + 12 / 11 < quociente(10, b)
// 11 + 1.012301 < 2.5
// false

const e = direita(c, 4) + esquerda(c, 2) === "FOR"
// "TICA" + "IN" === "FOR"
// false
console.log(e)