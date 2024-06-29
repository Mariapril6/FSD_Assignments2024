//Take 3 numbers as input and print whether each number is positive or neg.

/*for (let j = 0; j < 3; j++) {
  let operand = prompt("Enter a number:");
  let number = Number(operand);
  console.log(number);
  if (number === 0) {
    alert("Enter any number besides 0");
    console.log("Enter any number besides 0.");
  } else if (number > 0) {
    alert(`${number} is positive, yay! +++++`);
    console.log(`A + number: ${number}`);
  } else {
    alert(`${number} is negative, -----`);
    console.log(`A - number: ${number}`);
  }
}*/

//Take 10 numbers as input and print whether each number is positive or neg

/*for (let j = 0; j < 10; j++) {
  let operand = prompt("Enter a number:");
  let number = Number(operand);
  console.log(number);
  if (number === 0) {
    alert("Enter any number besides 0");
    console.log("Enter any number besides 0.");
  } else if (number > 0) {
    alert(`${number} is positive, yay! +++++`);
    console.log(`A + number: ${number}`);
  } else {
    alert(`${number} is negative, -----`);
    console.log(`A - number: ${number}`);
  }
}*/

//Take 100 numbers as input and print whether each number is positive or neg

/* for (let j = 0; j < 100; j++) {
  let operand = prompt("Enter a number:");
  let number = Number(operand);
  console.log(number);
  if (number === 0) {
    alert("Enter any number besides 0");
    console.log("Enter any number besides 0.");
  } else if (number > 0) {
    alert(`${number} is positive, yay! +++++`);
    console.log(`A + number: ${number}`);
  } else {
    alert(`${number} is negative, -----`);
    console.log(`A - number: ${number}`);
  }
}*/

//Take n numbers as input and print whether each number is positive or neg

/*let arr = prompt("Enter as many numbers as you want:");
console.log(arr);
console.log(typeof arr);
splitArr = arr.split(" ");

var Integers = splitArr.map((item) => {
  return Number(item);
});

for (let j = 0; j < Integers.length; j++) {
  if (Integers[j] === 0) {
    alert("It's a 0");
    console.log("0");
  } else if (Integers[j] > 0) {
    alert(`${Integers[j]} is positive, yay! +++++`);
    console.log(`A + number: ${Integers[j]}`);
  } else {
    alert(`${Integers[j]} is negative, -----`);
    console.log(`A - number: ${Integers[j]}`);
  }
  alert("Now the next number!");
}*/

//Take n numbers as input and count how many are positive and negative,
//and print the percentages of pos. and neg.

/*let arr = prompt("Enter as many numbers as you want:");
console.log(arr);
console.log(typeof arr);
splitArr = arr.split(" ");

var Integers = splitArr.map((item) => {
  return Number(item);
});

for (var p = 0, n = 0, j = 0; j < Integers.length; j++) {
  if (Integers[j] === 0) {
    continue;
  } else if (Integers[j] > 0) {
    p++;
  } else {
    n++;
  }
}
const posPercent = ((p / Integers.length) * 100).toFixed(2);
const negPercent = ((n / Integers.length) * 100).toFixed(2);

alert(
  `The percentage of positive numbers is ${posPercent}% and the percentage of negative numbers is ${negPercent}%`
);*/

//Take n numbers as input and count how many are positive, negative, and zero.

/*let arr = prompt("Enter as many numbers as you want:");
console.log(arr);
console.log(typeof arr);
splitArr = arr.split(" ");

var Integers = splitArr.map((item) => {
  return Number(item);
});

for (var z = 0, p = 0, n = 0, j = 0; j < Integers.length; j++) {
  if (Integers[j] === 0) {
    z++;
  } else if (Integers[j] > 0) {
    p++;
  } else {
    n++;
  }
}

alert(`${p} positive numbers, ${n} negative numbers and ${z} zeros.`);*/

//Print 2^50 positive integers.

/*var arr1 = [0, 0, 0, 0, 1, 0];

var arr2 = [1, 1, 0, 0, 1, 0];

for (let i = 0; i < arr1.length; i++) {
  arr1[i] = arr1[i] ^ arr2[i];
}
var power = arr1.length - 1;
var sum = 0;
for (let j = 0; j < arr1.length; j++) {
  if (arr1[j] === 0) {
    power--;
    continue;
  } else {
    sum = sum + 2 ** power;
    power--;
  }
}

console.log(sum);*/

//Print 2^100 positive integers.

/*var arr1 = [0, 0, 0, 0, 0, 1, 0];

var arr2 = [1, 1, 0, 0, 1, 0, 0];

for (let i = 0; i < arr1.length; i++) {
  arr1[i] = arr1[i] ^ arr2[i];
}
var power = arr1.length - 1;
var sum = 0;
for (let j = 0; j < arr1.length; j++) {
  if (arr1[j] === 0) {
    power--;
    continue;
  } else {
    sum = sum + 2 ** power;
    power--;
  }
}

console.log(sum);*/

//Print 1 to n positive integers. (assume user enters a real value for n)

/*var num = prompt("Enter a positive number:");
if(j <= 0)
  {
    alert("Please enter a positive number.");
  }
for (let j = 1; j <= num; j++) {
  document.write(`${j} `);
  console.log(`${j} `);
}*/

//Print all positive integers from n to 1. (assume user enters a real value for n)
/*var num = prompt("Enter a positive number:");
if (num <= 0) {
  alert("Please enter a positive number.");
}

while (num >= 1) {
  document.write(`${num} `);
  console.log(`${num} `);
  num--;
}*/

//Print all positive integers from m to n (assume user enters real values for m and n) (m is smaller than n)
/* var n = prompt("Enter a positive number:");
var m = prompt("Enter a positive number, smaller than the first on:");

var count = n - m + 1;
for (let i = 1; i <= count; i++) {
  document.write(`${m} `);
  console.log(`${m} `);
  m++;
}*/

//Find the sum of 1 to n positive integers (assume user enters a real value for n)

/*var num = prompt("Please enter a positive number:");
if (num <= 0) {
  alert("Enter a positive number, please");
}

var sum = 0;
for (let i = 1; i <= num; i++) {
  sum = sum + i;
}

document.write(`The sum of all the integers from 1 to ${num} is ${sum}`);
console.log(sum);*/

//Find the sum of m to n positive integers (assume user enters real values for m and n) (m is smaller than n)

/*var n = prompt("Enter a positive number:");
var m = prompt("Enter another positive number, smaller than the first one.");
n = Number(n);
m = Number(m);
var count = n - m + 1;
var sum = 0;
var k = m;
for (let i = 1; i <= count; i++) {
  sum = sum + k;
  k++;
}

document.write(`The sum of all the integers from ${m} to ${n} is ${sum}`);
console.log(sum);*/

//Find the sum of 10 input numbers.

/*const arr = prompt("Enter 10 positive numbers greater than 0:");
let strings = arr.split(" ");
const int = strings.map((item) => {
  return Number(item);
});
var sum = 0;
for (let i = 0; i < int.length; i++) {
  sum = sum + int[i];
}

document.write(`The sum of the numbers you entered is ${sum}`);
console.log(sum);*/

//Find the sum of n input numbers.
/*const arr = prompt("Enter n positive numbers greater than 0:");
let strings = arr.split(" ");
const int = strings.map((item) => {
  return Number(item);
});
var sum = 0;
for (let i = 0; i < int.length; i++) {
  sum = sum + int[i];
}

document.write(`The sum of the numbers you entered is ${sum}`);
console.log(sum);*/

//Find the average of n input numbers.

/*const arr = prompt("Enter n positive numbers greater than 0:");
let strings = arr.split(" ");
const int = strings.map((item) => {
  return Number(item);
});
var sum = 0;
for (let i = 0; i < int.length; i++) {
  sum = sum + int[i];
}
n = int.length;
const avg = sum / n;
document.write(`The average of the numbers you entered is ${avg}`);
console.log(avg);*/

//Find the largest of n input numbers.

/*var n = prompt("Enter any number of integers:");
var strings = n.split(" ");
const int = strings.map((item) => {
  return Number(item);
});

const maxNum = Math.max(...int);
document.write(`The largest of the numbers is ${maxNum}`);
console.log(maxNum);*/

//Find the smallest of n input numbers.

/*var n = prompt("Enter any number of integers:");
var strings = n.split(" ");
const int = strings.map((item) => {
  return Number(item);
});

const minNum = Math.min(...int);
document.write(`The smallest of the numbers is ${minNum}`);
console.log(minNum);*/

//Generate 1 to 12 multiples of n. (aka multiplication table of n)

/*var num = prompt("Enter any positive number:");
num = Number(num);
var multiple;
for (let i = 1; i <= 12; i++) {
  multiple = num * i;
  console.log(multiple);
  document.write(`${num} * ${i} = ${multiple} <br/>`);
}*/

//Generate 1 to m multiples of n. (aka multiplication table of n)
/*var num = prompt("Enter any positive number:");
var m = prompt("How many multiples do you want?");
num = Number(num);
var multiple;
for (let i = 1; i <= m; i++) {
  multiple = num * i;
  console.log(multiple);
  document.write(`${num} * ${i} = ${multiple} <br/>`);
}*/

//Find out how many numbers from 1 to n completely divide n.

/*var n = prompt("Enter any positive number:");
let count = 0;
for (let i = 1; i <= n; i++) {
  var remainder = n % i;
  if (remainder === 0) {
    count++;
    document.write(`${i} <br>`);
  }
}
document.write(`${count} numbers completely divide ${n}.`);*/

// Find out how many numbers from 2 to n completely divide n.

/*var n = prompt("Enter any positive number:");
let count = 0;
for (let i = 2; i <= n; i++) {
  var remainder = n % i;
  if (remainder === 0) {
    count++;
    document.write(`${i} <br>`);
  }
}
document.write(`${count} numbers completely divide ${n}.`);*/

//Find out the total no. of factors of n.

/*var n = prompt("Enter any positive number:");
let count = 0;
for (let i = 1; i <= n; i++) {
  var remainder = n % i;
  if (remainder === 0) {
    count++;
    document.write(`${i} <br>`);
  }
}
document.write(`${count} total factors of ${n}.`);*/

//Find out whether n is prime.

/*var n = prompt("Enter any positive number:");
let count = 0;
for (let i = 1; i <= n; i++) {
  var remainder = n % i;
  if (remainder === 0) {
    count++;
  }
}
if (count === 2) {
  document.write(`${n} is a prime number.`);
} else {
  document.write(`${n} is not a prime number.`);
}*/

//Find out whether n is a perfect square or not.

/*var n = prompt("Enter any positive number:");
for (let i = 1; i <= n; i++) {
  var j = Math.floor(n / i);
  var remainder = n % i;
  if (remainder === 0) {
    if (j === i) {
      document.write(`${n} is a perfect square.`);
      break;
    }
  }
}

if (j === 1) {
  document.write(`${n} is not a perfect square.`);
}*/

//Take two numbers, a and b, as input and find a*b as their product without using the * operator.

/*var a = Number(prompt("Enter a number:"));
var b = Number(prompt("Enter another number:"));
var c = a;
for (let i = 1; i < b; i++) {
  c = c + a;
}
document.write(`${a} times ${b}, a*b is ${c}`);*/

//Take two numbers, a and b, as input and find a^b (a power b).

/*var a = prompt("Enter a number:");
var b = prompt("Enter another number:");
var result = a ** b;
document.write(`${a} power ${b} is ${result}`);*/

//END OF ASSIGNMENT NUMBER 2.....
