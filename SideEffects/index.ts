// Side Effect => Change of original data or observable interaction with the outside world during the pure fns runtime

const compute1 = (a: number, b: number) => {
    const sum = a + b;
    console.log(sum);       // outside interaction
    return sum;
};

console.log(compute1(1, 2));

class Person {
    age: number;
    name: string;
    constructor (age: number, name: string) {
        this.age = age;
        this.name = name;
    }
    setName (name: string) {
        this.name = name;       // changing the original state
    }
    getName (): string {
        return this.name;
    }
}

const p1 = new Person(23, 'Aman');
p1.setName('Aman Bhardwaj');
console.log(p1.getName());

// other side effects => db queries, http req (Post?) etc.

// Controlling Side Effects