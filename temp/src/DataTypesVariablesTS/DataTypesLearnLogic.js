"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.student1 = exports.student = exports.emp = exports.flag = exports.nextITAddress = exports.a = void 0;
exports.studentData = studentData;
exports.getNextITAddress = getNextITAddress;
exports.printData = printData;
exports.a = 1000;
function funn() {
    console.log("a stores : " + exports.a);
    console.log("a stores : " + exports.a);
}
exports.nextITAddress = " 6th floor, Nilgiri Block, ADITYA ENCLAVE, 604/B, Kumar Basti, Ameerpet, Hyderabad, Telangana 500016";
exports.flag = true;
exports.emp = {
    id: 500,
    name: "John Doe"
};
exports.student = {
    id: 1,
    name: "John Doe",
    address: "123 Main St",
    phone: 1234567890,
    class: "10th Grade",
    gender: "Male",
    isActive: true
};
exports.student1 = {
    id: 1,
    name: "John Doe",
    address: "123 Main St",
    phone: 1234567890,
    class: "10th Grade",
    gender: "Male",
    isActive: false
};
console.log(exports.student.id);
async function studentData(student) {
    console.log("Student details: " + JSON.stringify(student));
}
studentData(exports.student);
studentData(exports.student1);
async function getNextITAddress() {
    console.log("NextIT Address is : " + exports.nextITAddress);
    console.log("a stores : " + exports.a);
    console.log("flag stores : " + exports.flag);
}
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
async function printData(data) {
    console.log("printing the data from variable : " + data);
}
//# sourceMappingURL=DataTypesLearnLogic.js.map