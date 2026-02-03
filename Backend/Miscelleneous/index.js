class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    talk() {
        console.log(`My name is ${this.name}`);
    }
}

let p1 = new Person("Dhruv", 22);
let p2 = new Person("Dhruv", 22);
p1.talk();
