




class Cons{
    rollNum: number;
    name: string

    constructor(rollNum: number, name: string) {
        this.rollNum = rollNum;
        this.name = name;
        console.log("Constructor called for student: " + this.name);
    }

}

let a = new Cons(101,"Ram");
