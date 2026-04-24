const score = 85;

if (score >= 90) {
  console.log("Grade: A - Excellent!");
} else if (score >= 80) {
  console.log("Grade: B - Good job!");
} else if (score >= 70) {
  console.log("Grade: C - Average.");
} else if (score >= 60) {
  console.log("Grade: D - Needs improvement.");
} else {
  console.log("Grade: F - Failed.");
}

const temperature = 30;

if (temperature >= 35) {
  console.log("Weather: Very Hot");
} else if (temperature >= 25) {
  console.log("Weather: Warm");
} else if (temperature >= 15) {
  console.log("Weather: Cool");
} else {
  console.log("Weather: Cold");
}

console.log("\n--- For Loop ---");
for (let i = 1; i <= 5; i++) {
  console.log("Iteration " + i + ": Hello, World!");
}

console.log("\n--- While Loop ---");
let count = 1;
while (count <= 5) {
  console.log("Count: " + count);
  count++;
}

console.log("\n--- Multiplication Table of 3 ---");
for (let i = 1; i <= 10; i++) {
  console.log("3 x " + i + " = " + (3 * i));
}

function greet(name) {
  return "Hello, " + name + "! Welcome to JavaScript.";
}

function add(a, b) {
  return a + b;
}

function isEven(num) {
  if (num % 2 === 0) {
    return num + " is Even";
  } else {
    return num + " is Odd";
  }
}

function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

console.log("\n--- Functions ---");
console.log(greet("Teachers"));
console.log("Sum of 10 + 20 = " + add(10, 20));
console.log(isEven(7));
console.log(isEven(12));
console.log("30°C in Fahrenheit = " + celsiusToFahrenheit(30) + "°F");
