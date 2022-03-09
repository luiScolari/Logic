const a = 2 
const b = 4
const c = b ** 2 / a * 4 + b
// 16 / 2 * 4 + 4
// 8 * 4 + 4
// 36

const d = false
const e = true

const h = a > 10 && d || b ** 2 <= 6 && c !== 4
// 2 > 10 && false || 16 <= 6 && 36 !== 4
// false && false || false && true
// false || false
// false

console.log(h)