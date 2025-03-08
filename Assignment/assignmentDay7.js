// Calculate average score
let mathScore = 8;
let physicsScore = 7;
let chemistryScore = 9;
let averageScore = ( mathScore + physicsScore + chemistryScore ) / 3;
console.log("Average score:", averageScore);

// Perimeter, Area of ​​rectangle
let width = 5;
let height = 3;
let perimeter = ( width + height ) * 2;
let area = width * height;
console.log("Perimeter:", perimeter);
console.log("Area:", area);

// Convert to Fahrenheit
let celsius = 30;
let fahrenheit = (celsius * ( 9 / 5 ) + 32);
console.log(celsius + "°C = " + fahrenheit + "°F");

// Calculate Tip Amount
let billAmount = 200000;
let tipPercent = 10;
let tipAmount = billAmount * ( tipPercent / 100 );
let totalAmount = billAmount + tipAmount;
console.log("Bill amount:", billAmount);
console.log("Tip amount:", tipAmount);
console.log("Total amount:", totalAmount);

// Check Even or Odd Number
let number = 7;
if (number % 2 === 0) {
    console.log("Number " + number + " is even");
} else {
    console.log("Number " + number + " is odd");
}