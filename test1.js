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

        console.log(`HI ${names[i]} nice to meet you. I am Asabeneh. Welcome to Integrify.`);
    }
}

greetStudents(names)