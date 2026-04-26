var studentName = "John Doe";
let age = 20;
const schoolName = "University of the Cordilleras";

console.log("studentName:", studentName);
console.log("age:", age);
console.log("schoolName:", schoolName);

document.getElementById("var-output").innerHTML =
  `var studentName = "${studentName}" <br> let age = ${age} <br> const schoolName = "${schoolName}"`;

let numValue = 42;
let strValue = "Hello, JavaScript!";
let boolValue = true;
let arrValue = [10, 20, 30, 40, 50];
let objValue = { name: "Alice", age: 21, course: "BSIT" };

console.log("Number:", numValue);
console.log("String:", strValue);
console.log("Boolean:", boolValue);
console.log("Array:", arrValue);
console.log("Object:", objValue);

console.log("typeof numValue:", typeof numValue);
console.log("typeof strValue:", typeof strValue);
console.log("typeof boolValue:", typeof boolValue);
console.log("typeof arrValue:", typeof arrValue);
console.log("typeof objValue:", typeof objValue);

document.getElementById("type-output").innerHTML =
  `Number: ${numValue} → typeof: <strong>${typeof numValue}</strong><br>
   String: "${strValue}" → typeof: <strong>${typeof strValue}</strong><br>
   Boolean: ${boolValue} → typeof: <strong>${typeof boolValue}</strong><br>
   Array: [${arrValue}] → typeof: <strong>${typeof arrValue}</strong><br>
   Object: {name: "${objValue.name}", age: ${objValue.age}} → typeof: <strong>${typeof objValue}</strong>`;

let a = 18;
let b = 5;

let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;

console.log(`${a} + ${b} = ${sum}`);
console.log(`${a} - ${b} = ${difference}`);
console.log(`${a} * ${b} = ${product}`);
console.log(`${a} / ${b} = ${quotient}`);

document.getElementById("arith-output").innerHTML =
  `${a} + ${b} = <strong>${sum}</strong><br>
   ${a} - ${b} = <strong>${difference}</strong><br>
   ${a} × ${b} = <strong>${product}</strong><br>
   ${a} ÷ ${b} = <strong>${quotient.toFixed(2)}</strong>`;

let isEqual = a === b;
let isGreater = a > b;
let isLess = a < b;
let isNotEqual = a !== b;

let logicalAnd = a > 10 && b < 10;
let logicalOr = a > 100 || b < 10;
let logicalNot = !(a === b);

console.log(`${a} === ${b}:`, isEqual);
console.log(`${a} > ${b}:`, isGreater);
console.log(`${a} < ${b}:`, isLess);
console.log(`${a} !== ${b}:`, isNotEqual);
console.log(`${a} > 10 && ${b} < 10:`, logicalAnd);
console.log(`${a} > 100 || ${b} < 10:`, logicalOr);
console.log(`!(${a} === ${b}):`, logicalNot);

document.getElementById("logic-output").innerHTML =
  `${a} === ${b}: <strong>${isEqual}</strong><br>
   ${a} > ${b}: <strong>${isGreater}</strong><br>
   ${a} < ${b}: <strong>${isLess}</strong><br>
   ${a} !== ${b}: <strong>${isNotEqual}</strong><br>
   ${a} > 10 && ${b} < 10: <strong>${logicalAnd}</strong><br>
   ${a} > 100 || ${b} < 10: <strong>${logicalOr}</strong><br>
   !(${a} === ${b}): <strong>${logicalNot}</strong>`;
