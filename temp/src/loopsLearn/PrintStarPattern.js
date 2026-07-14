"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// for (let i = 1; i <= 5; i++) {
//     for (let j = 5; j >= 1; j--) {
//         console.log("outer loop Value:" + i + " inner loop Value:" + j);
//     }
// }
for (let i = 1; i <= 7; i++) {
    for (let j = 7; j >= i; j--) {
        process.stdout.write("* ");
    }
    console.log("");
}
for (let i = 1; i <= 2; i++) {
    console.log("*");
}
for (let i = 1; i <= 5; i++) {
    for (let j = 5; j >= i; j--) {
        process.stdout.write("* ");
    }
    console.log("");
}
for (let i = 1; i <= 5; i++) {
    console.log("*");
}
//# sourceMappingURL=PrintStarPattern.js.map