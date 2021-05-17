// function sumRecur(...args) {
//     if (args.length <= 2) {
//         return args[0] + args[1];
//     }

//     return (
//         args[0] + sumRecur(...args.slice(1))
//     )
// }

// var x = sumRecur(3, 4, 5, 5);
// console.log(x);

function foo(x) {
    return function () {
        return x;
    }
}

function add(x, y) {
    return x + y
}

function add2(fn1, fn2) {
    return add(fn1(), fn2())
}

function addn(...arr) {

    var x = arr.slice(1)
        .reduce(function (prev, curr, i) {
            return function i() {
                return add2(prev, curr);
            }
        }, arr[0]);

    return x;
}

var x = addn(foo(1), foo(2), foo(3), foo(4), foo(5))
console.log(x())