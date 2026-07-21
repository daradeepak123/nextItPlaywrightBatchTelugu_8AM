


class A
{

    num:number=500
    flag:boolean=true
    static nn:number=6000

    abc()
    {
        console.log("this is abc method")
    }

}

class B extends A
{

    xyz()
    {
        console.log(this.num)
        console.log(this.flag)
        console.log(A.nn)
        this.abc()

    }
}


let o=new B()

o.xyz()