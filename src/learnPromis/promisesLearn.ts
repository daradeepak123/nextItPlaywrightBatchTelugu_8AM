





async function abc(): Promise<string> {
    return "abc";
}

async function aa(){

    let str:string=await abc()
    console.log(str)
}

abc().then((str:string)=>{
console.log(str)
})

let s:Promise<string>=abc().then()