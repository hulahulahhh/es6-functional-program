const {forEach, every, some, unary, once, memoized, map, reduce, curry, compose, deepCopy} = require('../lib/es6-functional')
forEach([1, 2, 3], console.log)

forEach([1,2,3], (res)=>{console.log(2*res)})

console.log(every([NaN, NaN, 1], isNaN));

console.log(some([NaN, NaN, 1], isNaN));

console.log([1, 2, 3].map(unary(parseInt)))

const doPayment = once(()=>{
    return 'Payment is done'
})

console.log(doPayment());

console.log(doPayment());

const factorail = memoized((n)=>{
    if (n===0) return 1;

    return n * factorail(n-1)
})

console.log(factorail(3));

console.log(map([1, 2, 3], (x) => x*x));

console.log(reduce([1, 2, 3, 4], (x, y)=> x*y))

const multiply = (x, y, z) => x*y*z

const multiplyCurried = curry(multiply);

console.log(multiplyCurried(4)(3)(2))

const loggerHelper = (mode, initialMessage, errorMessage, lineNo) => {
    if (mode == 'error') {
        console.error(`${initialMessage} ${errorMessage} at line ${lineNo}`)
    } else if (mode == 'debug') {
        console.debug(`${initialMessage} ${errorMessage} at line ${lineNo}`)
    } else if (mode == 'warn') {
        console.warn(`${initialMessage} ${errorMessage} at line ${lineNo}`)
    } else {
        throw "wrong mode"
    }
}

const loggerCurried = curry(loggerHelper)

loggerCurried('error')('Error at stat.js')('invalid arguments passed')(21)

let number = compose(Math.round, parseFloat);

let logNumber = compose(console.log, number);

logNumber(3.56);

// 计算字符串中单词的数量
let splitIntoSpaces = (str) => str.split(" ");
let count = (arr) => arr.length;
const countWords = compose(count, splitIntoSpaces)

logNumber(countWords("hello world"));

let obj1 = {
    name: 'sq',
    id: {
        count: 1
    }
}

let obj2 = deepCopy(obj1)

obj2.id.count = 2;

console.log(obj1);
console.log(obj2);




