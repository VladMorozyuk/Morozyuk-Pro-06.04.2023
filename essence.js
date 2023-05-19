class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    printInfo() {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
}

class Car {
    constructor(brand, model, year, number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.number = number;
        this.owner = null;
    }

    assignOwner(person) {
        if (person.age >= 18) {
            this.owner = person;
        } else {
            console.log("The person is not eligible to own a car.");
        }
    }

    printInfo() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, License Plate: ${this.licensePlate}`);
        if (this.owner) {
            console.log("Owner:");
            this.owner.printInfo();
        } else {
            console.log("No owner assigned.");
        }
    }
}

const person1 = new Person("Alex Gray", 23);
const person2 = new Person("Jone Smidth", 16);

const car1 = new Car("Toyota", "Camry", 2020, "ABC123");
const car2 = new Car("Honda", "Civic", 2018, "DEF456");

car1.assignOwner(person1);
car2.assignOwner(person2);

car1.printInfo();
car2.printInfo();
