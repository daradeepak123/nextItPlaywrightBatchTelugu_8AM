import {rev,palindromeCheck} from "./stringLogics"

let str:string="ma d am"
// let revv:string=rev(str)
// console.log(revv)

palindromeCheck(str)


let sent:string="mom and dad are going to meet madam"

let words:string[]=sent.split(" ")

for(let word in words)
{
    palindromeCheck(words[word])
}





