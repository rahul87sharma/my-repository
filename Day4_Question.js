// Question 1 : Replace Function Expressions with arrow functions in the code below: function ask(question, yes, no) { if (confirm(question)) yes(); else no(); } ask( "Do you agree?", function() { alert("You agreed."); }, function() { alert("You canceled the execution."); } );


function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
  );

  
// Question 2 : Identify the output of the following code const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium']; console.log(materials.map((material) => material.length));


const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];
console.log(materials.map((material) => material.length));


// Question 3 : Write an arrow function called square that takes a number as an argument and returns its square.


const square = (number) => number * number;
console.log(square(5)); 
console.log(square(10)); 


// Question 4 : Given an array of numbers, use an arrow function to create a new array that contains the squares of those numbers. For example, if the input is [1, 2, 3], the output should be [1, 4, 9].


const numbers = [1, 2, 3];
const squares = numbers.map((num) => num * num);

console.log(squares); 


// Question 5 : Use an arrow function to reverse a given string. For example, if the input is "hello", the output should be "olleh".


const reverseString = (str) => str.split('').reverse().join('');

console.log(reverseString("hello")); 


// Question 6 : Create a chainable object using arrow functions that allows you to set a value and then add or multiply it by a number. For example: const result = chainable(5).add(3).multiply(2); 


const chainable = (initialValue) => {
    let value = initialValue;
  
    return {
      add: (num) => {
        value += num;
        return chainable(value); 
      },
      multiply: (num) => {
        value *= num;
        return chainable(value); 
      },
      getValue: () => value 
    };
  };
  
  const result = chainable(5).add(3).multiply(2).getValue();
  console.log(result);  