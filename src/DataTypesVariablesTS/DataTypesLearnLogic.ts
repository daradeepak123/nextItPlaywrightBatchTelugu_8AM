


export let a:number=1000;


function funn()
{
   
   console.log("a stores : " + a);
   console.log("a stores : " + a);
}

export let nextITAddress:string=" 6th floor, Nilgiri Block, ADITYA ENCLAVE, 604/B, Kumar Basti, Ameerpet, Hyderabad, Telangana 500016";

export let flag:boolean=true;

export let emp:{
id:number,
name:string,
}
 ={
    id:500,
    name:"John Doe"
 }

export interface abc{
    id:number
    name:string
    address:string
    phone:number | string
    class:string
    gender:string
    isActive:boolean
}


export const student:abc={
    id:1,
    name:"John Doe",
    address:"123 Main St",
    phone:1234567890,
    class:"10th Grade",
    gender:"Male",
    isActive:true
}
export const student1:abc={
    id:1,
    name:"John Doe",
    address:"123 Main St",
    phone:1234567890,
    class:"10th Grade",
    gender:"Male",
    isActive:false
}
console.log(student.id);

export async function studentData(student:abc){
    console.log("Student details: " + JSON.stringify(student));
}

studentData(student)
studentData(student1)
export async function getNextITAddress(){

console.log("NextIT Address is : " + nextITAddress);
console.log("a stores : " + a);
console.log("flag stores : " + flag);
}



let num : number[]=[1,2,3,4,5,6,7,8,9,10];



export async function printData(data:String){

console.log("printing the data from variable : " + data);

}



