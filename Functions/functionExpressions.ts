// console.log(computeAdd(2, 2));       // error

// not hoisted as its a func expression
const computeAdd = (a: number, b: number) => {
    return a + b;
};

// anonymous func expression
const computeAdd2 = function (a: number, b: number) {
    return a + b;
};

// IIFE => Also Anonymous Funcs
let count = 0;
(function () {
    count += 1;
})();
console.log(count); // 1

let count2 = 0;
const res = (function () {
    count2 += 1;
    return count;
})();

console.log(res); // 1

// Recursive funcs need to be named ofc

// named func expression
const computeAdd23 = function adding2 (a: number, b: number) {
    return a + b;
};

console.log(computeAdd(2, 2));