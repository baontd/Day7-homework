//Calculate BMI (Body Mass Index)
let weight = 90;
let height = 1.68;
let bmi = weight / (height * height);
console.log("BMI:", bmi.toFixed(2));

//Calculate Simple Interest
let principal = 50000000;
let rate = 5 / 100;
let time = 3;
let interest = principal * rate * time;
console.log("Simple Interest:", interest);

//Convert Currency
let usd = 100;
let exchangeRate = 24000;
let localCurrency = usd * exchangeRate;
console.log("Converted Amount:", localCurrency, "VND");

//Calculate Time
let totalSeconds = 3456;
let hours = Math.floor(totalSeconds / 3600);
let minutes = Math.floor((totalSeconds % 3600) / 60);
let seconds = totalSeconds % 60;

console.log(`Time: ${hours}h ${minutes}m ${seconds}s`);