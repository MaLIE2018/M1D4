/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

let sidea = 5
let sideb = 6

const area = function(L1, L2) {
    return L1 * L2
}
let result = area(sidea, sideb)
console.log(`Area of rectangle with sides ${sidea} and ${sideb} is`, result)

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, 
but if the two values are the same then it should return their sum multiplied by 3.
*/

const crazySum = function(i1 = 1, i2 = 1) {
    let sum = i1 * i2
    if (i1 === i2) {
        sum * 3
    }
    return sum
}
console.log('Result of CrazySum is', crazySum(3, 4))

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

const crazyDiff = function(anumber) {
    let diff = 19 - anumber

    if (anumber > 19) {
        diff = -1 * diff
        diff = diff * 3
    }
    return diff

}

console.log('Result from CrazyDiff', crazyDiff(21))

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true 
if n is within 20 and 100 (included) or if it's equal to 400.
*/

const boundary = function(no) {
    let result = false
    if ((no === 400) || (20 < no && no <= 100)) { // 20 < no <= 100 Doesn't work, why?
        result = true
    }
    return result
}
console.log('Result of boundary with 20', boundary(20))
console.log('Result of boundary with 21', boundary(21))
console.log('Result of boundary with 100', boundary(100))
console.log('Result of boundary with 101', boundary(101))
console.log('Result of boundary with 400', boundary(400))
console.log('Result of boundary with 345', boundary(345))

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, 
but if the given string already begins with "Strive", 
then it should just return the original string.
*/

const strivify = function(myString) {
    if (myString === "Strive") {
        return myString
    } else {
        return `Strive ${myString}`
    }
}

console.log("Result of strivify", strivify("is sickin' cool"))
console.log("Result of strivify", strivify("Strive"))
    /* EXERCISE 6
    Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
    HINT: Module Operator
    */


const check3and7 = function(number) {
    let message = ""
    if (number % 3 === 0 || number % 7 === 0) {
        console.log(number % 3)
        console.log(number % 7)
        message = "Input multiple of 3 or 7"
    } else {
        message = "Input not a multiple of 3 or 7"
    }
    return message
}
console.log('Result of check3and7:', check3and7(9))
console.log('Result of check3and7:', check3and7(49))
console.log('Result of check3and7:', check3and7(5)) //Know your results

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

const reverseString = function(word = "Strive") {
    let reversedString = ""
    for (i = word.length - 1; 0 <= i; i--) {
        reversedString = reversedString + word.substr(i, 1)
    }

    return `Reversed string of ${word} is ${reversedString}`

}
console.log(reverseString('Hallo guys'))

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

const upperFirst = function(phrase) {
    wordbox = phrase.split(" ")
    for (word of wordbox) {
        wordbox[wordbox.indexOf(word)] = word.slice(0, 1).toUpperCase() + word.slice(1, word.length)
    } //String index starts from 0 as well!!!!
    return wordbox.join(" ")
}

console.log("Result of upperFirst:", upperFirst("cat dog milk buddha"))

/* EXERCISE 9
Write a function "cutString" to create a new string 
without the first and last character of a given string.
*/

const cutString = function(word) {
    newString = word.slice(1, word.indexOf(word.slice(-1)))
    return newString
}
console.log("Result cutString :", cutString("Strive"))

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array 
containing n random numbers between 0 and 10.
*/
const getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const giveMeRandom = function(count) {
    if (count < 1) {
        count = 1 // How to catch this ?
        console.log("Count must be greate 0!")
    }

    randomNumbers = Array(count)
    for (let i = 0; i < randomNumbers.length; i++) {
        randomNumbers[i] = getRandomInt(0, 11)
    }
    return randomNumbers

}

console.log("Result of giveMeRandomArray", giveMeRandom(10))
console.log("Result of giveMeRandomArray", giveMeRandom(5))
console.log("Result of giveMeRandomArray", giveMeRandom(0))

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/