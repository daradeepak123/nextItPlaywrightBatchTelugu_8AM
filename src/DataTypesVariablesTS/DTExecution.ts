import {a,nextITAddress,flag,studentData,emp,getNextITAddress,printData} from "./DataTypesLearnLogic"

console.log(a);
console.log(nextITAddress);
console.log(flag);

getNextITAddress();


interface abc{
    id:number
    name:string
    address:string
    phone:number
    class:string
    gender:string
}


const student:abc={
    id:1,
    name:"John Doe",
    address:"123 Main St",
    phone:1234567890,
    class:"10th Grade",
    gender:"Male"
}

const student1:abc={
    id:1,
    name:"John Doe",
    address:"123 Main St",
    phone:1234567890,
    class:"10th Grade",
    gender:"Male"
}



console.log(student);



// studentData(student)
// studentData(student1)
console.log("emp details : " + JSON.stringify(emp));


function printObject(obj: any) {
    console.log(JSON.stringify(obj));
}

printObject(student);
printObject(student1);
printObject(emp);




let id: number | string | boolean  //union type variable

id=100  //number type value
console.log("id stores : " + id);  // value of id variable
console.log(typeof id);   //number


id="hello"  //string type value
console.log("id stores : " + id);  // value of id variable
console.log(typeof id);   //string
console.log(typeof id);


id=false
console.log("id stores : " + id);
console.log(typeof id);

id=100
console.log("id stores : " + id);
console.log(typeof id);




let num : number=100;



num=200;

console.log("num stores : " + num);



let stat: "moon"| "sun" | "star" //literal type variable

stat="moon"


let tcStatus: "pass"|"fail"| "pending"|"in-progress" |"skipped"//literal type variable

tcStatus="pass"

printData(tcStatus);