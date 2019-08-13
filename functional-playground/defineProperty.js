function defineProperty(obj, key) {
    if (obj[key] !== null && typeof obj[key] === 'object') {
        defineObj(obj[key])
    }
    // 没有get会怎么样
    Object.defineProperty(obj, key, {
        get: function () {
            return obj[key]
        },
        set: function (newVal) {
            console.log('is changed');
        }
    })

    return ;
}

function defineObj(obj) {
    // for (let key in obj) {
    //     defineProperty(obj, key)
    // }
    defineProperty(obj, 'student')
}

let obj1 = {student: {
    id: 1
}}

defineObj(obj1);

obj1.student.id = 2;

