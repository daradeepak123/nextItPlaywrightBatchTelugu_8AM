
export function calculateElectricityBill() {
    let name: string = "Ram"
    let placeOfres: String = "t" // r for village,  t for town and c for cities
    let typeOfUse: string = "h"  // h for housing com for commercial 

    let cMonthReading: number = 1000
    let lMonthReading: number = 850

    let units: number = cMonthReading - lMonthReading
    let payment: number = 0

    if (placeOfres == "r") {
        if (typeOfUse == "h") {
            if (units <= 200) {
                payment = units * 2
            }
            else if (units > 200 && units <= 500) {
                payment = units * 3.5
            }
            else if (units > 500 && units <= 700) {
                payment = units * 5
            }
            else if (units > 700) {
                payment = units * 10
            }
        }

        else if (typeOfUse == "com") {
            if (units <= 200) {
                payment = units * 3
            }
            else if (units > 200 && units <= 500) {
                payment = units * 5
            }
            else if (units > 500 && units <= 700) {
                payment = units * 7
            }
            else if (units > 700) {
                payment = units * 12
            }
        }
        payment+=100
    }
    else if (placeOfres == "t") {
        if (typeOfUse == "h") {
            if (units <= 200) {
                payment = units * 3
            }
            else if (units > 200 && units <= 500) {
                payment = units * 5
            }
            else if (units > 500 && units <= 700) {
                payment = units * 7
            }
            else if (units > 700) {
                payment = units * 13
            }
        }

        else if (typeOfUse == "com") {
            if (units <= 200) {
                payment = units * 5
            }
            else if (units > 200 && units <= 500) {
                payment = units * 7
            }
            else if (units > 500 && units <= 700) {
                payment = units * 9
            }
            else if (units > 700) {
                payment = units * 15
            }
        }
        payment+=150
    }
    else if (placeOfres == "c") {
    
    }

    else {

        console.log("please enter correct place of residence with following options r /  t / c")
    }
    const date = new Date();
    console.log("Date: " + date);
    console.log("Hello mr/ms " + name + ", please find below details")
    console.log("Place of residence : " + placeOfres)
    console.log("Type of use : " + typeOfUse)
    console.log("Current month reading : " + cMonthReading)
    console.log("Last month reading : " + lMonthReading)
    console.log("Total units consumed : " + units)
    console.log("Hello mr/ms " + name + ", Total payment to be made : " + payment)
}




calculateElectricityBill()