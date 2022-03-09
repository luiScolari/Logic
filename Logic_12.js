const a = 2
const b = 3
const c = b ** a / 3 + b * 2 ** 2
// 9 / 3 + 3 * 4
// 3 + 12
// 15

const d = true
const e = false

const h = a < 10 + a * c && d || c > b ** 3
// 2 < 10 + 30 && true || 15 > 27
// 2 < 40 && true || 15 > 27
// true && true || false
// true || false 
// true

console.log(h)
