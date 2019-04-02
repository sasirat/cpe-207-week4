const person = {
    name: 'Dome',
    age: 40
}

class Person {
    constructor(name='John',age){
        this.name = name;
        this.age = age;
    }


    greeting() {
        console.log(`My name is ${this.name} (${this.age})`);
    }
}
module.exports = {person, Person};