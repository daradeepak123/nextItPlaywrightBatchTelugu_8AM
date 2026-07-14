"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ArraysLogic_1 = require("./ArraysLogic");
console.log("Number Array:", ArraysLogic_1.num);
console.log("Cities Array:", ArraysLogic_1.cities);
console.log("Mixed Array:", ArraysLogic_1.mixed);
console.log("Boolean Array:", ArraysLogic_1.flag);
console.log("Length of Number Array:", ArraysLogic_1.num.length);
console.log("city present or not:", ArraysLogic_1.cities.includes("Goa"));
console.log(ArraysLogic_1.num[0]);
ArraysLogic_1.num[3] = 10;
ArraysLogic_1.num.push(6);
ArraysLogic_1.cities.push();
console.log("Updated Number Array:", ArraysLogic_1.num);
ArraysLogic_1.cities.unshift("Goa");
ArraysLogic_1.cities.pop();
ArraysLogic_1.cities.pop();
ArraysLogic_1.cities.shift();
console.log("Updated Cities Array:", ArraysLogic_1.cities);
console.log("Index of 'Chicago':", ArraysLogic_1.cities.indexOf("Chicago"));
console.log(ArraysLogic_1.cities.length);
let arr1 = [];
arr1.push(0);
for (let i = 1; i <= 10; i++) {
    arr1.push(i);
}
console.log("Array of numbers", arr1[0]);
// for(let i:number=0;i<arr1.length;i++)
// {
//    console.log(arr1[i])
// }
console.log("length of array", arr1.length);
for (let i of arr1) {
    console.log(i);
}
//# sourceMappingURL=ArraysExecution.js.map