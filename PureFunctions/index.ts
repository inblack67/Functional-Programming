// produce same output for the same input
// no side effects
// the computation only depends on the input

// pure fns => self contained
const hello = () => 'worlds';
const hello2 = (name: string) => `hello ${ name }`;
const compute3 = (a: number, b: number) => a + b;

// not pure => output changes but input does not
const now = () => new Date();

// built in fns in JS

// slice => pure
const arr1 = [ 1, 2, 3, 4, 5 ];
const res1 = arr1.slice(0, 1);
console.log(res1);  // 1
console.log(arr1);  // no change in original data

// splice => not pure
const arr2 = [ 1, 2, 3, 4, 5 ];
const res2 = arr1.splice(0, 1);     // changes the original one
console.log(res1);  // 1
console.log(arr1);  // no change in original data

// mathematical fns => pure => introverts 

// pure fns => benefits
// - No side effects
// - output is deterministic
// - self contained, independent
// - may inc performance
// - ref transparent
// explicit like values

// no outside interaction but => not ref transparent => not pure => output changes but input does not
const now2 = () => new Date();