"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let str = "hello"; // h  ell   he hell   hello ends hello llo
//ll   eo   lo llo ello hello
console.log(str.charAt(0));
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.indexOf('h'));
console.log(str.lastIndexOf('h'));
console.log(str.includes("ll"));
console.log(str.startsWith("hel"));
console.log(str.substring(1, 3));
console.log(str.replace("l", "q"));
console.log(str.replace("", ""));
console.log(str.repeat(3));
console.log("-----------------------------------------");
let arr = str.split("");
let sent = "mom and dad are going to meet madam";
let words = sent.split(" ");
for (let ss of words) {
    console.log(ss);
}
//# sourceMappingURL=StringBasics.js.map