"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataTypesLearnLogic_1 = require("./DataTypesLearnLogic");
console.log(DataTypesLearnLogic_1.a);
console.log(DataTypesLearnLogic_1.nextITAddress);
console.log(DataTypesLearnLogic_1.flag);
(0, DataTypesLearnLogic_1.getNextITAddress)();
const student = {
    id: 1,
    name: "John Doe",
    address: "123 Main St",
    phone: 1234567890,
    class: "10th Grade",
    gender: "Male"
};
const student1 = {
    id: 1,
    name: "John Doe",
    address: "123 Main St",
    phone: 1234567890,
    class: "10th Grade",
    gender: "Male"
};
console.log(student);
// studentData(student)
// studentData(student1)
console.log("emp details : " + JSON.stringify(DataTypesLearnLogic_1.emp));
function printObject(obj) {
    console.log(JSON.stringify(obj));
}
printObject(student);
printObject(student1);
printObject(DataTypesLearnLogic_1.emp);
let id; //union type variable
id = 100; //number type value
console.log("id stores : " + id); // value of id variable
console.log(typeof id); //number
id = "hello"; //string type value
console.log("id stores : " + id); // value of id variable
console.log(typeof id); //string
console.log(typeof id);
id = false;
console.log("id stores : " + id);
console.log(typeof id);
id = 100;
console.log("id stores : " + id);
console.log(typeof id);
let num = 100;
num = 200;
console.log("num stores : " + num);
let stat; //literal type variable
stat = "moon";
let tcStatus; //literal type variable
tcStatus = "pass";
(0, DataTypesLearnLogic_1.printData)(tcStatus);
//# sourceMappingURL=DTExecution.js.map