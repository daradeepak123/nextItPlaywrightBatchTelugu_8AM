import {lessThan,greaterThan,add,sub,mul,div,incrementGivenNumber,decrementGivenNumber, addAndSub,returnAndOpValue} from "./OperatorsAllLogics"

import {addAndReturn,returnFullName} from "./CalculatorLogic"

let num:number=100
num++
console.log(++num  + num++)
console.log(num);



let num1:number=100
num1--
console.log(--num1)
console.log(num1);


console.log("Incremented Number : " + num);   //101





incrementGivenNumber(num);
//101

console.log(num);  
num++
//102
console.log(num);  


let aa:number=100
let bb:number=200

console.log(aa+bb);

let nn:number=addAndReturn(500,500)
console.log(nn);

console.log(addAndReturn(5000,5000))


sub(addAndReturn(5000,5000),5000)


let name:String=returnFullName("John","Doe")
console.log(name);




let assignOp:number=500

console.log(assignOp)


assignOp+=100
console.log(assignOp)
assignOp-=100
console.log(assignOp)

assignOp*=100
console.log(assignOp)
assignOp/=10
console.log(assignOp)
assignOp%=100
console.log(assignOp)

let fl1:boolean=false
let fl2:boolean=true

let flg:boolean=returnAndOpValue(fl1,fl2)
console.log(flg)


fl1=true
fl1||=false
console.log(fl1)





let num4:number=100
let num5:number=200
let flgg:boolean=lessThan(num4,num5)




console.log(flgg)


console.log(50<100)   
console.log(50>100)
console.log(50==50)   

