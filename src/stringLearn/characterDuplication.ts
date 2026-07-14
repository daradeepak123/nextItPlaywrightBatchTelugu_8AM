



export function validateDuplicateChar(ss:string):boolean {
    let str:string=ss
    let flag:boolean=false
    for (let i = 0; i < str.length; i++) {
        let ch: string = str.charAt(i)     // a
        let fIndex: number = str.indexOf(ch)  // a  // 0
        let lIndex: number = str.lastIndexOf(ch) // a // 0
        if (str.includes(ch)) {
            if (fIndex == lIndex) {
                //console.log("Given charecter "+ ch +" is not getting duplicated")
            }

            else {
                //console.log( ch +" Getting duplicated")
                flag=true
            }
        }
        else {

            console.log("given character is not present in the string")
        }
    }
   return flag
}
let s:string="nextIt"
let fag:boolean=validateDuplicateChar(s)  // 1  break

if(fag)
{
console.log(s+" have duplicated chars")
}
else{
console.log(s+" don't have duplicated chars")
}