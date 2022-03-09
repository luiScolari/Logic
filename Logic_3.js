const a = Math.sqrt(121)
const b = a ** 0

// JAVASCRIPT ORDER === {
//     1: function,
//     2: !,
//     3: aritmético,
//     4: relacional,
//     5: &&,
//     6: ||
// }

const c = b > a && a > b || a !== b && b !== a || a === b
// false && true || true && true || false
// false || true || false 
// true || false
// true

const e = !c
const f = !(!c)

const g = 10 ** 2 + ((a / b * 2) - 20 / 2 / 2 / 2)
// 10 ** 2 + (22 - 20 / 2 / 2 / 2)
// 100 + 22 - 2.5
// 103

// IN (A / B * 2) WE HAVE TWO OPERATORS WITH THE SAME WEIGHT, 
// THEN THE CODE RUN FROM LEFT TO RIGHT

console.log(g)
