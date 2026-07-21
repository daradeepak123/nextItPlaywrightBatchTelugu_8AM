


class student {


    student() {
        console.log("hello")
    }


    rollNum: number = 0
    name: string = ""
    gender: string = ""
    currentStatus: boolean = false
    address: string = ""
    phone: number | string = ""
    static section: string = "A"
    company: string = ""
    static instuite: string = "ST"

    displayDetails() {
        console.log("Student roll number is " + this.rollNum)
        console.log("Student name is " + this.name)
        console.log("Student gender is " + this.gender)
        console.log("Student current status is " + this.currentStatus)
        console.log("Student address is " + this.address)
        console.log("Student phone number is " + this.phone)
        console.log("Student company is " + this.company)
        console.log("Student section is " + student.section)
        console.log("Student institute is " + student.instuite)
    }

}


let stu1 = new student()

stu1.rollNum = 101
stu1.name = "John"
stu1.gender = "male"
stu1.currentStatus = true
stu1.address = "hyd"
stu1.phone = 9999999999
stu1.company = "TCS"
stu1.displayDetails()


let stu2 = new student()

stu2.rollNum = 102
stu2.name = "Mary"
stu2.gender = "female"
stu2.currentStatus = true
stu2.address = "hyd"
stu2.phone = 9999999998
stu2.company = "Infosys"
stu2.displayDetails()





let stu3 = new student()