const { quociente, cadeia } = require('./Logic_2')

const a = 10
const b = "PROGRESSO"

// JAVASCRIPT ORDER === {
//     1: function,
//     2: !,
//     3: aritmético,
//     4: relacional,
//     5: &&,
//     6: ||
// }

const c = (b.length / 2 ** 5 > 100 || Math.sqrt(49)) !== a || quociente(20, a) > b.length
// 9 / 32 > 100 || 7 !== a || quociente(20, a) > b.length
// false || true || 2 > 9
// false || true || false
// true || false
// true

const d = true
const e = !d && !(!c) || (cadeia(b, 5, 2).length) > (cadeia(b, 2, 2).length)
// !d && !(!c) || 2 > 2
// false && true || false
// false || false
// false

console.log(e)