//1. What are the differences between mutating array methods and non-mutation array methods in JavaScript. List 5 array methods that fall under each of them.

Mutating methods are the methods that change the object or original value of the array after the method has been used. 
examples are array.push(), array.unshift(), array.pop(), array.shift(), array.splice()

Non-mutating methods are methods that do not change the object after the method has been used
Examples are ...array spread operator, array.concat(), array.filter(), array.slice(), array.map()

//2. here is an array of languages: ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python']
//Perform this operation on them
// 1. Add 'Kotlin' to the end of the Array
//2. Add 'Java' after 'Ruby'
//3. Remove the first item in the array
//4. Add 'Scala' and 'Swift' to the beginning of the array
//5. Replace 'PHP' with 'Go' and 'Rust'

let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];
// 1. Add 'Kotlin' to the end of the Array
languages.splice(5, 0, 'Kotlin'); 
console.log(languages); 

//2. Add 'Java' after 'Ruby'
languages.splice(3, 0,'Java'); 
console.log(languages);   

//3. Remove the first item in the array
languages.splice(0, 1);
console.log(languages); 

//4. Add 'Scala' and 'Swift' to the beginning of the array
languages.splice(0, 0,'Scala', 'Swift');
console.log(languages);  

//5. Replace 'PHP' with 'Go' and 'Rust'
languages.splice(4, 2,'Go', 'Rust');  
console.log(languages);

//Q3. What will be the value of fruit after calling the function changeFruit?
let fruit = ['apple', 'mango', 'banana'];
function changeFruit( fruit) {
    fruit[2] = "orange";
    return fruit;

}
//calling the value of fruit in the function changeFruit
console.log(changeFruit(fruit))
//answer on the terminal is 
[ 'apple', 'mango', 'orange' ]

//Q4.  Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.
//eg., max([4, 5,10,-2])  //maximum value is 10
//let arrNum = ['7', '1', '18', '36', '24'];
function numArray (arrNum){
    let maxValue = arrNum[0];
    for (let i = 0; i < arrNum.length; i++){
        if (arrNum[i] > maxValue){
            maxValue = arrNum[i];
        }
        else arrNum[i];
    }
    return maxValue;

};
console.log(numArray([7, 1, 18, 36, 24])); //36


//Q5. Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array:
//eg.,
//valTimesIndex([1,2,3]) //[0,2,6]
//valTimesIndex([5,10,15]) //[0,10,30]


let valTimesIndex = arrayOfNumbers => arrayOfNumbers.map((number, index) => number * index);

console.log (valTimesIndex([4, 8, 16]));//[0, 8, 32]