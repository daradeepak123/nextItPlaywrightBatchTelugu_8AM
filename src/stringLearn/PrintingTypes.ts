
declare const process: {
    stdout: {
        write(message: string): void;
    };
};
let str: string = "hello"

console.log(str)

for (let i = 0; i <= str.length; i++) {
    console.log(str.charAt(i))
}
process.stdout.write("* ");
for (let i = str.length; i >= 0; i--) {
    console.log(str.charAt(i))
    //process.stdout.write(str.charAt(i));
}