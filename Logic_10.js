const a = Math.sqrt(144)
const b = 3

// JAVASCRIPT ORDER === {
//     1: function,
//     2: !,
//     3: aritmético,
//     4: relacional,
//     5: &&,
//     6: ||
// }

const c = b ** 2 + ((a + b) / 3 ) > (a - b) / 3
// 9 + 5 > 9 / 3
// 14 > 3
// true

const d = !c
const e = !(!c)

console.log(c)