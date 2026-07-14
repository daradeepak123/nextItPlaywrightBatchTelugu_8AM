


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


export function incrementGivenNumber(num:number){
    num++
    console.log("Incremented Number : " + num);
}

export function decrementGivenNumber(num:number){
    num--
    console.log("Decremented Number : " + num);
}


export async function addAndSub(num1:number,num2:number):Promise<number>{

    num1=num1+num2
    num1=num1-num2
    return num1
}


export function returnAndOpValue(a:boolean,b:boolean):boolean
{
    let c:boolean=a&&b
    return c
}


export function lessThan(n:number, n1:number):boolean
{
 let flag:boolean=n<n1
 return flag
}

export function greaterThan(n:number, n1:number):boolean
{
 let flag:boolean=n>n1
 return flag
}

export function lessThanEqual(n:number, n1:number):boolean
{
 let flag:boolean=n<=n1
 return flag
}