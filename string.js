// - Declare a variable name company and assign it to an initial value 'Coding Academy'.

var company = 'Coding  Academy'

// - Print the string on the browser console using console.log()

console.log(company);

// - Print the length of the string on the browser console using console.log()
console.log(company.length);

// - Change all the string to capital letters using toUpperCase() method
console.log(company.toLocaleUpperCase());

// - Change all the string to lowercase letters using toLowerCase() method
console.log(company.toLowerCase());

// - Cut(slice) out the first word of the string using slice, substr() or substring() method
let substr = company.slice(6)
console.log(substr);

// Use substr to slice out the phase because because because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence = 'You cannot end a sentence with because because because is a conjunction'
let substring = sentence.slice(4)
console.log(substring);

// - Check if the string contains a word Academy using includes() method
let Check = company.includes("Academy")
console.log(Check);

// - Split the string into array using split() method
var split = sentence.split(" ")
console.log(split);

// - Split the string Coding Academy at the space using split() method
var split = company.split("  ")
console.log(split);

// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

var TopCompanys = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
var split = TopCompanys.split(" ")
console.log(split);

// - Change Coding Academy to Microsoft Academy using replace() method.
var Change = company.replace("Coding", "Microsoft")
console.log(Change);

// - What is character at index 10 in 'Coding Academy' string use charAt() method.
console.log(company.charAt(10));

// - What is the character code of A in 'Coding Academy' string using charCodeAt()

console.log(company.charCodeAt("A"));

// - Use indexOf to determine the position of the first occurrence of c in Coding Academy
console.log(company.indexOf("c"));

// - Use lastIndexOf to determine the position of the last occurrence of c in Coding Academy.

console.log(company.lastIndexOf("c"));

// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

console.log(sentence.indexOf("because"));

// Use lastIndexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

console.log(sentence.lastIndexOf("because"));

// - Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.search("because"));

// - Use trim() to remove if there is trailing whitespace at the beginning and the end of a string.E.g ' Coding Academy '.

console.log(company.trim(" "));

// - Use startsWith() method with the string Coding Academy make the result true
console.log(company.startsWith("Coding"));

// - Use endsWith() method with the string Coding Academy make the result true
console.log(company.endsWith("emy"));

// - Use match() method to find all the c’s in Coding Academy
console.log(company.match("c"));

// - Use match() to count the number all because's in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.match("because"));

var s1 = 'Coding', s2 = 'Academy', s3 = s1 + s2

console.log(s3);

// - Use repeat() method to print Coding Academy 5 times
console.log(s3.repeat(5));

// - Calculate the total annual income of the person by extract the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
//   ]

var Calculate = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
var split = Calculate.split(" ")
var annual = Calculate.match((/\d+/g))
var total = parseInt(annual[0]) + parseInt(annual[1]) + parseInt(annual[2]);
// var num = parseInt(total)
console.log(total);
// console.log(split);
