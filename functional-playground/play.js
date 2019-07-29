const {forEach, every, some, unary, once, memoized, map} = require('../lib/es6-functional')
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


