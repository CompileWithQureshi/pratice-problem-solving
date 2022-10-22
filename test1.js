/*1. Use the names array of the students who you have been introduced today.Write a function called greetStudents, which take an array of names. Use your function to greet all the your classmates.
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
  Hi Angelica, nice to meet you. I am Asabeneh. Welcome to Integrify.*/
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

const greetStudents = () => {
    for (let i = 0; i < names.length; i++) {

        // console.log(`HI ${names[i]} nice to meet you. I am Asabeneh. Welcome to Integrify.`);
    }
}

greetStudents(names)


/* 2. In English language some words come more often than others to a sentence. Write a function called mostFrequentWords it takes a sentence or a paragraph as a parameter and return an array of objects. The object key is the word and its number of occurrence is the value. What are the ten most frequent words in a sentence or a paragraph of an English language.*/

const arr = ['geeks', 'for', 'geeks', 'a', 'portal', 'to', 'learn', 'can', 'be', 'computer']

const mostFrequentWords = () => {
    for (let i = 0; i <= arr.length; i++) {
        console.log(arr[i]);
    }
}
mostFrequentWords(arr)