function foo() {
    let count = 0;
    return function () {
        return count++;
    }
}

var x = foo();
console.log(x());
x = foo();
console.log(x());
console.log(x());