
function addMe (x: number, y: number) {
    return x + y;
}

function voidAdd (_: number, __: number) {
}

const addResult = addMe(2, 2);
console.log(addResult);

// only void funcs can be invocked by new keyword
const addResult2 = new voidAdd(2, 2);
console.log(addResult2);

const addResult3 = addMe.call(null, 2, 2);
console.log(addResult3);

const addResult4 = addMe.apply(null, [ 2, 2 ]);
console.log(addResult4);