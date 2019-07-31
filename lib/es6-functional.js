const forEach = (array, fn) => {
    let i;
    for (i=0; i < array.length; i++)
    fn(array[i])
}

const map = (array, fn) => {
    let results = []
    for (const value of array) {
        results.push(fn(value));
    }

    return results;
}

const filter = (array,fn) => {
    let results = [];

    for (const vaule of array) {
        fn(value) ? results.push(vaule) : undefined
    }

    return results
}

const every = (array, fn) => {
    let result = true;
    for (const value of array)
        result = result && fn(value)
    return result
}

const some = (array, fn) => {
    let result = false;
    for (const value of array)
        result = result || fn(value)
    return result
}

const reduce = (array, fn, initialValue) => {

    let accumulator;

    if (initialValue === undefined) {
        accumulator = array[0];

        for (let i = 1; i < array.length; i++) {
            accumulator = fn(accumulator, array[i])
        }
    } else {
        accumulator = initialValue;
        for (const value of array) {
            accumulator = fn(accumulator, value)
        }
    }

    return accumulator;
    
}

//(exp1, exp2)  执行两个参数，并返回第二个表达式的结果
const tap = (value) => (fn) => (typeof fn === 'function' && fn(value), console.log(value));

// 把传入的多参函数转化为只接收一个参数的函数
// fn.length表示传入参数的个数
const unary = (fn) => fn.length===1 ? fn : (arg) => fn(arg)

// 把传入函数变为只执行一次的函数
const once = (fn) => {
    let done = false

    // 为什么要function？
    return function () {
        return done ? undefined :(done=true, fn.apply(this, arguments)) //为什么要加arguments
    }
}

// 缓存纯函数运行结果
const memoized = (fn) => {
    // 用map更好
    const lookupTable = new Map();

    return (arg) => lookupTable.get(arg) || (lookupTable[arg] = fn(arg));
}

const curry = (fn) => {
    if (typeof fn !== 'function') {
        throw new Error('no function provided');
    }
    
    // 1.当为柯里化函数提供了所有参数的时候
    // 2.转化
    // ...args先一次接收全部传进来的参数
    return function curriedFn(...args) {
        // 传进来的参数个数小于定义的参数个数
        if (args.length < fn.length) {
            
            return function() {
                return curriedFn.apply(null, args.concat([].slice.call(arguments)));
            }
        }
        // 再通过apply传给fn，会自动解析参数
        return fn.apply(null, args)
    }
}

module.exports = {forEach, every, some, tap, unary, once, memoized, map, filter, reduce, curry}
