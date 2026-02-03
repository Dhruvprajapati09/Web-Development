class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    talk() {
        console.log(`My name is ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, age , marks) {
        super(name , age);
        this.marks = marks;
    }
}

class Teacher extends Person {
    constructor(name, age , marks) {
        super(name , age);
        this.marks = marks;
    }
}

let s1 = new Student("Dhruv", 21, 90);
s1.talk();         
console.log(s1.marks); 

