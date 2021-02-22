// Memoization it is an optimization technique. It consists of storing function result instead of recomputing it each time. In other words, it is a « cache » for function invocations. Since function results are cached, they can be returned immediately when given function is invoked with the same arguments. A function can only be memoized if it is referentially transparent.

interface MyCache {
    arithmeticOperation: string;
    args: number[];
    result: number;
}

const cache: MyCache = { args: null, arithmeticOperation: null, result: null };

const areSimilarArray = (arr1: number[], arr2: number[]) => {
    const len1 = arr1.length;
    const len2 = arr2.length;
    let areSimilar = false;
    if (len1 !== len2) {
        areSimilar = false;
        return areSimilar;
    }
    areSimilar = arr1.every((v, i) => v === arr2[ i ]);
    return areSimilar;
};

const computeSumAndFillCache = (a: number, b: number) => {
    console.log('filling cache...');
    const sum = a + b;
    cache.args = [ a, b ];
    cache.arithmeticOperation = 'sum';
    cache.result = sum;
    return sum;
};

const cachedSum = (a: number, b: number) => {
    if (!cache.arithmeticOperation || cache.arithmeticOperation !== 'sum') {
        const res = computeSumAndFillCache(a, b);
        return res;
    } else {
        const areSimilar = areSimilarArray([ a, b ], cache.args);
        if (areSimilar) {
            console.log('cache won');
            return cache.result;
        } else {
            const res = computeSumAndFillCache(a, b);
            return res;
        }
    }
};

console.log(cachedSum(1, 2));
console.log(cachedSum(1, 2));
console.log(cachedSum(1, 2));
console.log(cachedSum(1, 2));
console.log(cachedSum(1, 2));
console.log(cachedSum(1, 2));
console.log(cachedSum(1, 2));
console.log(cachedSum(1, 2));
console.log(cachedSum(1, 2));
console.log(cachedSum(1, 2));
console.log(cachedSum(1, 2));