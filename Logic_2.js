const j = 'INFO/2006/ATUAL';
const w = 6;

const esquerda = (string, qtd) => {
    return string.slice(0, qtd)
};

const a = esquerda(j, w)

const quociente = (num1, num2) => {
    return num1 / num2
}

const b = quociente(j.length, 2)

const cadeia = (string, start, qtd) => {
    const end = qtd + start
    return string.slice(start, end)
}

const direita = (string, qtd) => {
    return string.slice(-qtd)
}

const c = direita(cadeia(j, 5, 6), 2)

// console.log(c)

const d = quociente(j.length * 2, 3) % esquerda(j, 2).length

// console.log(d)

// ORDER === {
//     1: function,
//     2: aritmético,
//     3: relacional,
//     4: !,
//     5: &&,
//     6: ||
// }

// JAVASCRIPT ORDER === {
//     1: function,
//     2: !,
//     3: aritmético,
//     4: relacional,
//     5: &&,
//     6: ||
// }

const e = j.length > (Math.sqrt(j.length + 10)) && (w / 2) !== (j.length ** 2)
// j.length > 5 && 3 !== 225
// true && true

console.log(e)


