"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let num = [];
let even = [];
let odd = [];
for (let i = 1; i <= 10; i++) {
    num.push(i);
}
// 1 2 3 4 5 6 7 8 9 10       length 10
for (let i of num) {
    if (i % 2 == 0) {
        even.push(i);
    }
    else {
        odd.push(i);
    }
}
console.log("Even numbers:", even);
console.log("Odd numbers:", odd);
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i of nums) {
    let nu = i;
    let flag = false;
    for (let i = 2; i < nu; i++) {
        if (nu % i == 0) {
            flag = true;
        }
    }
    if (flag == true) {
        console.log("given number is not a prime number " + nu);
    }
    else {
        console.log("given number is a prime number " + nu);
    }
}
//# sourceMappingURL=arrangeOddEvenNumbers.js.map