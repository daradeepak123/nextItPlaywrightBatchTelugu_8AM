






for(let i=1; i<=10; i++)
{
console.log(i)
}


function welcomeStudents(name:string) {
console.log("Hello " + name + ", Welcome to JavaScript Programming");
console.log("Class will get started by 8PM");
console.log("We will discuss JS/TS PW");
console.log("We will discuss AI topics");
console.log("Class will end by 9PM");
console.log("---------------------------end of student---------------------------");
}


for(let i=1; i<=100; i++)
{
welcomeStudents("Student"+i);
}

let a:number = 1;
while(a<=10)
{
console.log("This is not an infinite loop");
console.log(a);
a++;
}



do{
console.log("This is a do-while loop");
console.log(a);
a++
}while(a<=100)

let n:number = 0;

    for(let i=1; i<=10; i++)
    {
        if(n==i%2)   //0
        {
            continue;
        }
        console.log(i);
    }