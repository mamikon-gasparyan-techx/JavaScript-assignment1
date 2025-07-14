/*declaration */

const firstName = "Mamikon";
const lastName = "Gasparyan";
const birthYear = 2005;
let currentYear = 2025;
let isStudent = true;
let hobbies = ["Football", "MMA", "Cooking"];
const contact = {
  email: "mamikon.gasparyan.techx@gmail.com",
  phone: "0xxxxxxxx",
  city: "Yerevan",
};

/*basic console log*/

console.log(
  `"Hi, my name is ` +
    firstName +
    " " +
    lastName +
    `. I live in ` +
    contact.city +
    ". My hobies are " +
    hobbies.at(0) +
    ", " +
    hobbies.at(1) +
    " and " +
    hobbies.at(2) +
    `."`
);

console.log(
  `"I am ` +
    (currentYear - birthYear) +
    ` years old and currently ` +
    (isStudent ? "a student" : "not a student") +
    `."`
);

/*type coersion and comparison */

let ageString = "25";
let ageNumber = 25;

console.log("Type coersion of == is", ageString == ageNumber);
console.log("Type coersion of === is", ageString === ageNumber);
console.log(
  `Type of ageNumber:`,
  typeof ageNumber,
  `, Type of ageString:`,
  typeof ageString
);

/*if else, switch,terinary operators and their functionality*/

let score = 95;
let grade = "F";

if (score >= 90 && score <= 100) {
  console.log("A");
  grade = "A";
} else if (score >= 80 && score <= 89) {
  console.log("B");
  grade = "B";
} else if (score >= 70 && score <= 79) {
  console.log("C");
  grade = "C";
} else if (score >= 60 && score <= 69) {
  console.log("D");
  grade = "D";
} else {
  console.log("F");
}

switch (grade) {
  case "A":
    console.log("Excelent work!");
    break;
  case "B":
    console.log("Good job!");
    break;
  case "C":
    console.log("Keep improving.");
    break;
  case "D":
    console.log("try harder.");
    break;
  case "F":
    console.log("Needs serious effort.");
    break;
  default:
    console.log("Invalid value");
    break;
}

let status =
  grade === "C" || grade === "B" || grade === "A" ? "You passed" : "You failed";
console.log(status);
