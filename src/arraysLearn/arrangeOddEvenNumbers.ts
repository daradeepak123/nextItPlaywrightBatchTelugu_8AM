



let num: number[] = []
let even: number[] = []
let odd: number[] = []

for (let i: number = 1; i <= 10; i++) {
    num.push(i)
}

// 1 2 3 4 5 6 7 8 9 10       length 10
for(let i of num)
{
    if(i%2==0)
    {
        even.push(i)
    }   
    else
    {
        odd.push(i)
    }
}


console.log("Even numbers:", even);
console.log("Odd numbers:", odd);


let nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]    
for (let i of nums) {

let nu:number=i

let flag:boolean=false

for(let i:number=2;i<nu;i++)
{

if(nu%i==0)
{
    flag=true
}

}

if(flag==true)
{
    console.log("given number is not a prime number "+nu)
}
else
{
    console.log("given number is a prime number " + nu)
}

}