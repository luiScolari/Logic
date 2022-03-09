const { cadeia, direita, quociente } = require('./Logic_2')

const d = 1
const e = 'MIRIAN'
const g = 'SALA DE AULA'
const f = cadeia(g, 3, 5) + direita(e, 3)
const h = (f.length ** d) * 2 < quociente(36, e.length)
16 < quociente(36, e.length)
16 < 6
false

console.log(h)