// Functions and variables (with var keyword) are hoisted
console.log(adding(2, 2));

// Function Declaration => hoisted => compiler remembers func name => adding
function adding (x: number, y: number) {
    return x + y;
}

console.log(adding(2, 2));