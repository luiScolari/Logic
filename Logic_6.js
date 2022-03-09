const a = Math.sqrt(36) // 6
const b = 2

// JAVASCRIPT ORDER === {
//     1: function,
//     2: !,
//     3: aritmético,
//     4: relacional,
//     5: &&,
//     6: ||
// }

const c = a ** b >= b / 2 && a > b || b !== a
// 36 >= 1 && a > b || b !== a
// true && true || true
// true || true 
// true

const g = c === a || b < a && (a ** b / 2) < b
// c === a || b < a && 18 < b
// false || true && false
// false || false
// false 

console.log(g)