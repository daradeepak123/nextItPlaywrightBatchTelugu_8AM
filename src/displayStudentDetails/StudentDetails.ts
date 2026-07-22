


class StudentDetails {

    rollNum: number = 0
    name: string = ""
    topic: string = ""
    gender: string = ""
    age: number = 0
    salary: number = 0
    address: string = ""
    phone: string | number = 0
    static institute: string = "NextIT"
    company: string = ""
    isActive: boolean = false
    attend:number=0

    constructor(rollNum: number, name: string, topic: string, gender: string, age: number, salary: number, address: string, phone: string | number, company: string, isActive: boolean,attend:number) {
        this.rollNum = rollNum
        this.name = name
        this.topic = topic
        this.gender = gender
        this.age = age
        this.salary = salary
        this.address = address
        this.phone = phone
        this.company = company
        this.isActive = isActive
        this.attend=attend
    }



    displayStudentDetails() {
        console.log("Student roll number is: " + this.rollNum)
        console.log("Student name is: " + this.name)
        console.log("Student topic is: " + this.topic)
        console.log("Student gender is: " + this.gender)
        console.log("Student age is: " + this.age)
        console.log("Student salary is: " + this.salary)
        console.log("Student address is: " + this.address)
        console.log("Student phone is: " + this.phone)
        console.log("Student company is: " + this.company)
        console.log("Student is active: " + this.isActive)
        console.log("Student institute is: " + StudentDetails.institute)
        console.log("Student attendance is: "+ this.attend)
        console.log("-------------------end of student-------------------")
    }

    avtiveCheck()
    {
        console.log(this.name+ " is active: " + this.isActive)
    }

    printAttendance()
    {
console.log(this.name+ " attendance is: "+ this.attend)
    }

}

let stu1 = new StudentDetails(101, "John", "pw", "male", 23, 1000000, "hyd", 9999999999, "TCS", true,70)
stu1.displayStudentDetails()
stu1.avtiveCheck()





let stu2 = new StudentDetails(102, "Mary", "pw", "female", 21, 1000000, "hyd", 9999999998, "Infosys", true,100)
// stu2.displayStudentDetails()

// stu1.avtiveCheck()






// stu2.avtiveCheck()
// stu2.printAttendance()