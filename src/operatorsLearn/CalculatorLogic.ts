



export async function add(num1:number,num2:number){
console.log("Addition : " + (num1+num2));
}

export async function sub(num1:number,num2:number):Promise<number>{
console.log("Subtraction : " + (num1-num2));
return num1 - num2;
}

export async function mul(num1:number,num2:number){
console.log("Multiplication : " + (num1*num2));
}

export async function div(num1:number,num2:number){
console.log("Division : " + (num1/num2));
}   




export function addAndReturn(n:number, n1:number):number
{
let num:number =n+n1
return num
}


export function returnFullName(fName:string,lName:string):string
{
let fullName:string=fName + " " + lName

return fullName
}


