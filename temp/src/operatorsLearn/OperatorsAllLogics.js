"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
exports.sub = sub;
exports.mul = mul;
exports.div = div;
exports.incrementGivenNumber = incrementGivenNumber;
exports.decrementGivenNumber = decrementGivenNumber;
exports.addAndSub = addAndSub;
exports.returnAndOpValue = returnAndOpValue;
exports.lessThan = lessThan;
exports.greaterThan = greaterThan;
exports.lessThanEqual = lessThanEqual;
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
function incrementGivenNumber(num) {
    num++;
    console.log("Incremented Number : " + num);
}
function decrementGivenNumber(num) {
    num--;
    console.log("Decremented Number : " + num);
}
async function addAndSub(num1, num2) {
    num1 = num1 + num2;
    num1 = num1 - num2;
    return num1;
}
function returnAndOpValue(a, b) {
    let c = a && b;
    return c;
}
function lessThan(n, n1) {
    let flag = n < n1;
    return flag;
}
function greaterThan(n, n1) {
    let flag = n > n1;
    return flag;
}
function lessThanEqual(n, n1) {
    let flag = n <= n1;
    return flag;
}
//# sourceMappingURL=OperatorsAllLogics.js.map