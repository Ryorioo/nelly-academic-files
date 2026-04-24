const display = (id, text) => {
  const box = document.getElementById(id);
  box.textContent += text + '\n';
};

const firstName = 'Maria';
const lastName = 'Santos';
let age = 21;
let score = 80;

age = 22;
score = 95;

display('output-variables', `firstName: ${firstName}`);
display('output-variables', `lastName: ${lastName}`);
display('output-variables', `age (reassigned): ${age}`);
display('output-variables', `score (reassigned): ${score}`);

const greet = (name) => `Hello, ${name}! Welcome to ES6.`;

const multiply = (a, b) => a * b;

const isEven = (num) => num % 2 === 0 ? `${num} is Even` : `${num} is Odd`;

const getFullName = (first, last) => {
  const full = `${first} ${last}`;
  return full.toUpperCase();
};

display('output-arrows', greet('Juan'));
display('output-arrows', `5 x 6 = ${multiply(5, 6)}`);
display('output-arrows', isEven(7));
display('output-arrows', isEven(12));
display('output-arrows', `Full Name: ${getFullName('Jose', 'Rizal')}`);

const city = 'Manila';
const country = 'Philippines';
const temperature = 34;
const unit = 'Celsius';

const locationMsg = `Location: ${city}, ${country}`;
const weatherMsg = `Current Temperature: ${temperature}°${unit}`;
const profileMsg = `Name: ${firstName} ${lastName} | Age: ${age} | Score: ${score}`;

const multiLine = `Student Profile:
  Name   : ${firstName} ${lastName}
  Age    : ${age}
  Score  : ${score}
  City   : ${city}`;

display('output-templates', locationMsg);
display('output-templates', weatherMsg);
display('output-templates', profileMsg);
display('output-templates', multiLine);

const student = {
  name: 'Ana Reyes',
  course: 'Computer Science',
  gpa: 3.8,
};

const { name, course, gpa } = student;
display('output-destructuring', `Name   : ${name}`);
display('output-destructuring', `Course : ${course}`);
display('output-destructuring', `GPA    : ${gpa}`);

const [first, second, third] = ['HTML', 'CSS', 'JavaScript'];
display('output-destructuring', `1st: ${first} | 2nd: ${second} | 3rd: ${third}`);

const { name: studentName, gpa: studentGpa } = student;
display('output-destructuring', `Renamed → Student: ${studentName}, GPA: ${studentGpa}`);

const frontend = ['HTML', 'CSS', 'JavaScript'];
const backend = ['Node.js', 'Express', 'MongoDB'];
const fullStack = [...frontend, ...backend];
display('output-spread', `Frontend : ${frontend}`);
display('output-spread', `Backend  : ${backend}`);
display('output-spread', `Full Stack: ${fullStack}`);

const original = { language: 'JavaScript', version: 'ES5' };
const updated = { ...original, version: 'ES6', year: 2015 };
display('output-spread', `Original : ${JSON.stringify(original)}`);
display('output-spread', `Updated  : ${JSON.stringify(updated)}`);

const copyArray = [...frontend];
copyArray.push('React');
display('output-spread', `Original frontend: ${frontend}`);
display('output-spread', `Copied + pushed  : ${copyArray}`);

const createProfile = (name = 'Anonymous', role = 'Student', level = 1) => {
  return `${name} | Role: ${role} | Level: ${level}`;
};

const power = (base, exponent = 2) => base ** exponent;

const introduce = (greeting = 'Hi', name = 'Friend') => `${greeting}, ${name}!`;

display('output-defaults', createProfile('Liza', 'Developer', 3));
display('output-defaults', createProfile('Carlos'));
display('output-defaults', createProfile());
display('output-defaults', `2^10 = ${power(2, 10)}`);
display('output-defaults', `5^2 (default) = ${power(5)}`);
display('output-defaults', introduce('Hello', 'Maria'));
display('output-defaults', introduce());
