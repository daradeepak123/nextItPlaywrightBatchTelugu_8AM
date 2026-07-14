



function checkPassOrFail(marks:number)  //850
{
    if(marks>=35 && marks<=100)   //passed
    {  
        console.log("You are passed");
        if(marks>=90 && marks<=100)  
        {
            console.log("You will get bicycle");    // executed
        }
        else if(marks>=80 && marks<90)   //
        {
            console.log("You will get new dress");
        }
        else if(marks>=70 && marks<80)
        {
            console.log("You will get day outing");
        }
         else if(marks>=50 && marks<70)
        {
            console.log("You will get dining out");
        }
        else
        {
            console.log("you are eligible for college no goodies");
        }
    }
    else if(marks>=0 && marks<35)   //failed
    {
        console.log("You are Failed");
        if(marks>=30 && marks<35)
        {
            console.log("we will reevaluate your marks");
        }
    }
    else
    {
        console.log("Invalid marks. Please enter marks between 0 and 100.");
    }
}

checkPassOrFail(850)
