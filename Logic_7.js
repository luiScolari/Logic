const { quociente } = require('./Logic_2.js')

const a = Math.sqrt(144) + 6 // 18 
const b = ((a ** 2) - 24) / 3 // 100

const c = b * 2 / 4 > a || quociente(18, 6) !== a && !true
// 50 > a || 3 !== 18 && false
// true || true && false
// true || false
// true 

console.log(c)