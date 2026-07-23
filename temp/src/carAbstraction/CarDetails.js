"use strict";
class Car {
    seatbelt() {
        console.log("This car has a strong seatbelt system for safety.");
    }
}
class Maruti extends Car {
    wheels4() {
        console.log("Maruti has 4 sturdy wheels for smooth city driving.");
    }
    doors4() {
        console.log("Maruti comes with 4 doors for easy entry and comfort.");
    }
    seatingCapacity5to7() {
        console.log("Maruti offers seating for 5 passengers comfortably.");
    }
    windShield() {
        console.log("Maruti has a clear windshield for better visibility.");
    }
}
class Ford extends Car {
    wheels4() {
        console.log("Ford has powerful 4 wheels built for strong road performance.");
    }
    doors4() {
        console.log("Ford offers 4 doors for a spacious and comfortable ride.");
    }
    seatingCapacity5to7() {
        console.log("Ford provides seating suitable for family travel.");
    }
    windShield() {
        console.log("Ford has a durable windshield designed for safety and visibility.");
    }
}
class Benz extends Car {
    wheels4() {
        console.log("Benz comes with premium 4 wheels for a smooth luxury drive.");
    }
    doors4() {
        console.log("Benz offers elegant 4 doors with a stylish design.");
    }
    seatingCapacity5to7() {
        console.log("Benz provides luxury seating for 5 to 7 passengers.");
    }
    windShield() {
        console.log("Benz has a high-quality windshield for excellent clarity.");
    }
}
class Toyota extends Car {
    wheels4() {
        console.log("Toyota has reliable 4 wheels for long-distance travel.");
    }
    doors4() {
        console.log("Toyota includes 4 doors for convenient family use.");
    }
    seatingCapacity5to7() {
        console.log("Toyota offers comfortable seating for a family trip.");
    }
    windShield() {
        console.log("Toyota has a strong windshield for safe driving.");
    }
}
class Honda extends Car {
    wheels4() {
        console.log("Honda has 4 wheels designed for efficient city and highway driving.");
    }
    doors4() {
        console.log("Honda offers 4 doors for easy access and practicality.");
    }
    seatingCapacity5to7() {
        console.log("Honda provides comfortable seating for everyday travel.");
    }
    windShield() {
        console.log("Honda has a clear windshield for smooth visibility.");
    }
}
class BMW extends Car {
    wheels4() {
        console.log("BMW has premium 4 wheels for sporty performance.");
    }
    doors4() {
        console.log("BMW features 4 doors with a modern and elegant look.");
    }
    seatingCapacity5to7() {
        console.log("BMW offers luxury seating for a premium driving experience.");
    }
    windShield() {
        console.log("BMW has a sleek windshield for excellent road visibility.");
    }
}
const fordCar = new Ford();
const benzCar = new Benz();
const toyotaCar = new Toyota();
const hondaCar = new Honda();
const bmwCar = new BMW();
console.log("Ford car details:");
fordCar.wheels4();
fordCar.doors4();
fordCar.seatingCapacity5to7();
fordCar.windShield();
fordCar.seatbelt();
console.log("\nBenz car details:");
benzCar.wheels4();
benzCar.doors4();
benzCar.seatingCapacity5to7();
benzCar.windShield();
benzCar.seatbelt();
