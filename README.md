# pratice-problem-solving

19-oct-2022
1.Variables:
[
Declare four variables without assigning values

Declare four variables with assigning values

Declare variables to store your first name, last name, marital status, country and age in multiple lines

Declare variables to store your first name, last name, marital status, country and age in a single line

Declare two variables myAge and yourAge and assign them initial values and log to browser console. Output:

]

2.DataTypes:
[
Declare variables and assign string, boolean, undefined and null data types

The JavaScript typeof operator uses to check different data types. Check the data type of each variables from question number 1.
]

3.String:[

- Declare a variable name company and assign it to an initial value 'Coding Academy'.
- Print the string on the browser console using console.log()
- Print the length of the string on the browser console using console.log()
- Change all the string to capital letters using toUpperCase() method
- Change all the string to lowercase letters using toLowerCase() method
- Cut(slice) out the first word of the string using slice, substr() or substring() method
- Cut(slice) out the first word of the string using slice, substr() or substring() method
- Use substr to slice out the phase because because because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
- Check if the string contains a word Academy using includes() method
- Split the string into array using split() method
- Split the string Coding Academy at the space using split() method
  'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
- Change Coding Academy to Microsoft Academy using replace() method.
- What is character at index 10 in 'Coding Academy' string use charAt() method.
- What is the character code of A in 'Coding Academy' string using charCodeAt()
- Use indexOf to determine the position of the first occurrence of c in Coding Academy
- Use lastIndexOf to determine the position of the last occurrence of c in Coding Academy.
  Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
- Use lastIndexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
- Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
- Use trim() to remove if there is trailing whitespace at the beginning and the end of a string.E.g ' Coding Academy '.
- Use startsWith() method with the string Coding Academy make the result true
- Use endsWith() method with the string Coding Academy make the result true
- Use match() method to find all the c’s in Coding Academy
- Use match() to count the number all because's in the following sentence:'You cannot end a sentence with because because because is a conjunction'
- Use concat() and merge 'Coding' and 'Academy' to a single string, 'Coding Academy'
- Use repeat() method to print Coding Academy 5 times
- Calculate the total annual income of the person by extract the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
  ]

test1.js:[

- Use the names array of the students who you have been introduced today.Write a function called greetStudents, which take an array of names. Use your function to greet all the your classmates.
  const names = [
  'Pradip',
  'Van',
  'Thanh',
  'Thanh',
  'Ca',
  'Joshua',
  'Devendra',
  'Anzhelika'
  ]
  console.log(greetStudents(names))
  Hi Angelica, nice to meet you. I am Asabeneh. Welcome to Integrify.
  ...
- In English language some words come more often than others to a sentence. Write a function called mostFrequentWords it takes a sentence or a paragraph as a parameter and return an array of objects. The object key is the word and its number of occurrence is the value. What are the ten most frequent words in a sentence or a paragraph of an English language.

- Write a function called sumOfNumbers. It takes unlimited number of integers as parameters and it returns the sum. 1.Implement this function using function declaration  
  2.Implement this function using arrow function

- Write a function called stat which calculate mean, median and range of an array.
  const numbers = [80, 85,70, 90, 65, 90, 80];
  stat(numbers).mean()
  stat(numbers).median()
  stat(numbers).range()

- A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destruction the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable.
  const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
  console.log(name, skills, scores)
  console.log(jsScore, reactScore)

- Write a function called convertArrayToObject which can convert the array to a structured object.
  const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]

  console.log(convertArrayToObject(students))
  [
  {
  name: 'David',
  skills: ['HTM','CSS','JS','React'],
  scores: [98,85,90,95]
  },
  {
  name: 'John',
  skills: ['HTM','CSS','JS','React'],
  scores: [85, 80,85,80]
  }

- Copy the student object to newStudent without mutating the original object. In the new object add the following ?

1. Add Bootstrap with level 8 to the front end skill sets
2. Add Express with level 9 to the back end skill sets
3. Add SQL with level 8 to the data base skill sets
4. Add SQL without level to the data science skill sets

   const student = {
   name: 'David',
   age: 25,
   skills: {
   frontEnd: [
   { skill: 'HTML', level: 10 },
   { skill: 'CSS', level: 8 },
   { skill: 'JS', level: 8 },
   { skill: 'React', level: 9 }
   ],
   backEnd: [
   { skill: 'Node',level: 7 },
   { skill: 'GraphQL', level: 8 },
   ],
   dataBase:[
   { skill: 'MongoDB', level: 7.5 },
   ],
   dataScience:['Python', 'R', 'D3.js']
   }
   }

````
The copied object output should look like this:
```js
  {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      {skill: 'HTML',level: 10},
      {skill: 'CSS',level: 8},
      {skill: 'JS',level: 8},
      {skill: 'React',level: 9},
      {skill: 'BootStrap',level: 8}
    ],
    backEnd: [
      {skill: 'Node',level: 7},
      {skill: 'GraphQL',level: 8},
      {skill: 'Express',level: 9}
    ],
    dataBase: [
      { skill: 'MongoDB',level: 7.5},
      { skill: 'SQL',level: 8}
    ],
    dataScience: ['Python','R','D3.js','SQL']
  }
}

* The following are two different questions:

1. 'Facebook, Google, Microsoft, Apple, IBM,Oracle, Amazon'. This string contains big IT companies. Write a function called companiesWithTwoOs check if the company has two os are return an array containing the companies.

2. Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)

3. Write the function called tenMostSpokenLanaguages, it takes the countriesobject and return the array of objects. The language is key and value is the number of places the language is spoken.

* Make a function called add which give truthy value when add(a, b) === add(a)(b)
  console.log(add(2,3)) //5
  console.log(add(2)(3)) //5
  console.log(add(2,3) === add(2)(3)) // true

* Write a function called checkDataTypes it takes an array and a data type. It returns true if all the array items are the same data types.

    const numbers = [1,3,4]
    const names = ['Asab', 'Eyob'];
    const bools = [true, false, true, true, false]
    const mixedData = ['Asab', 'JS', true, 2019, {name:'Asab', lang:'JS'}]
    const object = [{name:'Asab', lang:'JS'}]
    console.log(checkDataTypes(numbers, 'number')) // true
    console.log(checkDataTypes(numbers, 'string')) // false
    console.log(checkDataTypes(names, 'string')) // true
    console.log(checkDataTypes(bool, 'boolean')) // true
    console.log(checkDataTypes(mixedData, 'boolean')) // false
    console.log(checkDataTypes(obj, 'object')) // true
]
````
