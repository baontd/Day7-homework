//Calculate BMI (Body Mass Index)
let weightBmi = 90;
let heightBmi = 1.68;
const calculateBmi = weightBmi / ( heightBmi * heightBmi );
console.log("BMI:", calculateBmi.toFixed(2));

//Calculate Simple Interest
let principal = 5000000;
let rate = 0.05;
let time = 3;
const simpleInterest = principal * rate * time;
console.log("Simple Interest:", simpleInterest);

//Convert Currency
let usdCurrency = 100;
let vndCurrency = 24000;
const convertCurrency = usdCurrency * vndCurrency;
console.log("Converted Amount:", convertCurrency, "VND");

//Calculate Time
let totalSeconds = 5000;
const hours = Math.floor(totalSeconds / 3600);
const minutes = Math.floor((totalSeconds % 3600) / 60);
const seconds = totalSeconds % 60;
console.log(`Time: ${hours}h ${minutes}m ${seconds}s`);