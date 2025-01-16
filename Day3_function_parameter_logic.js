// Question 01 : Write a function calculateDiscount that takes two parameters: price and discount (with a default value of 10). The function should return the final price after applying the discount.


function calculateDiscount(price, discount = 10) {
    const finalPrice = price - (price * (discount / 100));
    return finalPrice;
}

const originalPrice = 100;
const discountAmount = 15; 
const finalPrice = calculateDiscount(originalPrice, discountAmount);
console.log(`The final price after discount is: ${finalPrice}`);


// Question 02 : Create a function mergeArrays that takes two arrays as parameters and returns a new array that combines both arrays using the spread operator.


function mergeArrays(array1, array2) {
    return [...array1, ...array2];
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = mergeArrays(array1, array2);
console.log(mergedArray); 


// Question 03 : Write a function logArguments that takes any number of arguments and logs them to the console. Use rest parameters to collect the arguments.


function logArguments(...args) {
    args.forEach(arg => {
        console.log(arg);
    });
}

logArguments(1, 'hello', true, { key: 'value' });


// Question 04 : Create a function createMessage that takes a default message and an indefinite number of names. The function should return an array of personalized messages for each name.


function createMessage(defaultMessage, ...names) {
    return names.map(name => `${defaultMessage}, ${name}!`);
}

const defaultMessage = "Good Morning";
const personalizedMessages = createMessage(defaultMessage, "Ram", "Shyam", "Krishna");
console.log(personalizedMessages);


// Question 05 : Define a function sum that takes three numbers as parameters and returns their sum. Use the spread operator to call this function with an array of numbers.


function sum(a, b, c) {
    return a + b + c;
}

const numbers = [1, 2, 3];
const result = sum(...numbers);
console.log(`The sum is: ${result}`); 


// Question 06 : Write a function createUserProfile that takes three parameters: username, age (defaulting to 25), and country (defaulting to "Unknown"). Return an object with these properties.


function createUserProfile(username, age = 25, country = "India") {
    return {
        username: username,
        age: age,
        country: country
    };
}

const userProfile = createUserProfile("Hanumam");
console.log(userProfile);
