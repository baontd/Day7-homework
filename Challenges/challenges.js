//BMI Calculation
calculateBMI(90, 1.68, 29);
function calculateBMI(weight, height, age) {
    let bmi = weight / (height * height);

    // Categorize BMI
    let category = "";
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal weight";
    else if (bmi < 30) category = "Overweight";
    else category = "Obese";

    console.log(`Age: ${age} | BMI: ${bmi.toFixed(2)} | Category: ${category}`);
}

//Calculate Simple Interest
calculateInterest(50000000, 5, 3);
function calculateInterest(principal, rate, time, isCompound) {
    let amount;
    amount = principal * Math.pow(1 + rate / 100, time);
    console.log(`Total Amount: ${amount.toLocaleString()}`);
}

//Convert Currency
convertCurrency(100, 24500, "VND");
function convertCurrency(amount, rate, currencySymbol) {
    let convertedAmount = amount * rate;
    console.log(`${amount} USD = ${convertedAmount.toLocaleString()} ${currencySymbol}`);
}

//Calculate Time
formatTime(3456);
function formatTime(totalSeconds) {
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;
    console.log(`Time: ${hours}h ${minutes}m ${seconds}s`);
}