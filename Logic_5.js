const a = 3
const b = 6

// JAVASCRIPT ORDER === {
//     1: function,
//     2: !,
//     3: aritmético,
//     4: relacional,
//     5: &&,
//     6: ||
// }
const bStr = b.toString()

const c = b < a && bStr.length * 2 / 4 < 10
// b < a && 0.5 < 10
// false && true 
// false

const d = Math.sqrt(bStr.length ** 2) === b && a ** 3 !== (8 * 2) % 4 || c
// 1 === 6 && 3 ** 3 !== 16 % 4 || false
// 1 === 6 && 9 !== 0 || false
// false && true || false
// false 

console.log(d)
