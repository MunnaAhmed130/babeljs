const name = "adam";

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    about() {
        console.log(`${this.name} is ${this.age} years old`);
    }
}
const adam = new Person("adam", "3");
adam.about();
