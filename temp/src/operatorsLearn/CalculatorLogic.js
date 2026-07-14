"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
exports.sub = sub;
exports.mul = mul;
exports.div = div;
exports.addAndReturn = addAndReturn;
exports.returnFullName = returnFullName;
async function add(num1, num2) {
    console.log("Addition : " + (num1 + num2));
}
async function sub(num1, num2) {
    console.log("Subtraction : " + (num1 - num2));
    return num1 - num2;
}
async function mul(num1, num2) {
    console.log("Multiplication : " + (num1 * num2));
}
async function div(num1, num2) {
    console.log("Division : " + (num1 / num2));
}
function addAndReturn(n, n1) {
    let num = n + n1;
    return num;
}
function returnFullName(fName, lName) {
    let fullName = fName + " " + lName;
    return fullName;
}
//# sourceMappingURL=CalculatorLogic.js.map