

import { num, cities, mixed, flag } from "./ArraysLogic";



console.log("Number Array:", num);
console.log("Cities Array:", cities);
console.log("Mixed Array:", mixed);
console.log("Boolean Array:", flag);


console.log("Length of Number Array:", num.length);


console.log("city present or not:", cities.includes("Goa"));


console.log(num[0]);


num[3] = 10;

num.push(6);
cities.push( );

console.log("Updated Number Array:", num);


cities.unshift("Goa");
cities.pop();
cities.pop();
cities.shift();
console.log("Updated Cities Array:", cities);

console.log("Index of 'Chicago':", cities.indexOf("Chicago"));

console.log(cities.length);



    let arr1:number[]=[]
    arr1.push(0)    
	for(let i:number=1;i<=10;i++)
	{
	   arr1.push(i)
	}

    console.log("Array of numbers", arr1[0]);


    // for(let i:number=0;i<arr1.length;i++)
    // {
    //    console.log(arr1[i])
    // }
    console.log("length of array", arr1.length);


    for(let i of arr1)
    {
       console.log(i)
    }