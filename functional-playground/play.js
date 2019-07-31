const {forEach, every, some, unary, once, memoized, map, reduce, curry} = require('../lib/es6-functional')
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


