


export function rev(str: string): string {
    let rev: string = ""
    for (let i = 0; i <= str.length - 1; i++)       // rev  =   w +  blank
    {
        rev = str.charAt(i) + rev
    }
    return rev
}




export function palindromeCheck(str:string)
{
 let revv:string= rev(str)
if(str==revv)
{
console.log("given word "+str+" is a palindrome")
}
else
{
    
console.log("given word "+str+" is not a palindrome")
}
}