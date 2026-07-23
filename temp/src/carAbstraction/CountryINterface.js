"use strict";
class India {
    borders() {
        console.log("India shares land borders with Pakistan, China, Nepal, Bhutan, Bangladesh and Myanmar.");
    }
    Currency() {
        console.log("The official currency of India is the Indian Rupee (INR).");
    }
    Language() {
        console.log("India has many official languages; Hindi and English are the most widely used for national communication.");
    }
    Capital() {
        console.log("The capital of India is New Delhi.");
    }
    EatingHabits() {
        console.log("Indian cuisine is diverse, often featuring rice, wheat, lentils, vegetables, spices, and regional specialties.");
    }
    Name() {
        console.log("The country's name is India, officially the Republic of India.");
    }
}
class USA {
    borders() {
        console.log("The USA shares land borders with Canada and Mexico.");
    }
    Currency() {
        console.log("The official currency of the USA is the US Dollar (USD).");
    }
    Language() {
        console.log("English is the most widely spoken language in the USA.");
    }
    Capital() {
        console.log("The capital of the USA is Washington, D.C.");
    }
    EatingHabits() {
        console.log("American cuisine often includes burgers, sandwiches, pizza, and barbecue.");
    }
    Name() {
        console.log("The country's name is the United States of America.");
    }
}
class Japan {
    borders() {
        console.log("Japan is an island nation and does not share land borders with other countries.");
    }
    Currency() {
        console.log("The official currency of Japan is the Japanese Yen (JPY).");
    }
    Language() {
        console.log("Japanese is the main language spoken in Japan.");
    }
    Capital() {
        console.log("The capital of Japan is Tokyo.");
    }
    EatingHabits() {
        console.log("Japanese food is known for sushi, ramen, tempura, and rice-based dishes.");
    }
    Name() {
        console.log("The country's name is Japan.");
    }
}
class Australia {
    borders() {
        console.log("Australia is geographically isolated and does not share land borders with other countries.");
    }
    Currency() {
        console.log("The official currency of Australia is the Australian Dollar (AUD).");
    }
    Language() {
        console.log("English is the main language spoken in Australia.");
    }
    Capital() {
        console.log("The capital of Australia is Canberra.");
    }
    EatingHabits() {
        console.log("Australian cuisine includes meat pies, fish and chips, and barbecue dishes.");
    }
    Name() {
        console.log("The country's name is Australia.");
    }
}
class Germany {
    borders() {
        console.log("Germany shares land borders with Denmark, Poland, Czech Republic, Austria, Switzerland, France, Luxembourg, Belgium, and the Netherlands.");
    }
    Currency() {
        console.log("The official currency of Germany is the Euro (EUR).");
    }
    Language() {
        console.log("German is the primary language spoken in Germany.");
    }
    Capital() {
        console.log("The capital of Germany is Berlin.");
    }
    EatingHabits() {
        console.log("German cuisine includes sausages, bread, potatoes, and hearty stews.");
    }
    Name() {
        console.log("The country's name is Germany.");
    }
}
class SouthAfrica {
    borders() {
        console.log("South Africa shares land borders with Namibia, Botswana, Zimbabwe, Mozambique, Eswatini, and Lesotho.");
    }
    Currency() {
        console.log("The official currency of South Africa is the South African Rand (ZAR).");
    }
    Language() {
        console.log("South Africa has 11 official languages, including Zulu and English.");
    }
    Capital() {
        console.log("The capital of South Africa is Pretoria, Cape Town, and Bloemfontein.");
    }
    EatingHabits() {
        console.log("South African cuisine includes bobotie, braai, pap, and chakalaka.");
    }
    Name() {
        console.log("The country's name is South Africa.");
    }
}
const countries = [new India(), new USA(), new Japan(), new Australia(), new Germany(), new SouthAfrica()];
for (const country of countries) {
    country.Name();
    country.Capital();
    country.Currency();
    country.Language();
    country.EatingHabits();
    country.borders();
    console.log("------------------------");
}
