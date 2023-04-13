// 1. How to declare a variable using let and const
const fatherName = 'Abdur Rahim';
let season = 'rainy';
season = 'winter';

// 6 basic conditions: >, <, ===, !==, <=, >=
// multiple conditions: && ||

if (fatherName === 'Abdur Rahim' || season === 'rainy') {

}
else if (fatherName === 'Abdur') {

}
else {

}

// 3. Array declare
// index, length, push
const numbers = [14, 45, 43, 67, 78];
numbers[0] = 33;

// 4. for loop
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}

// 5. function
function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}
const output = multiply(23, 44);

// 6. Object
// 3 ways to access property by name
const student = {
    name: 'sakin Khan',
    age: 32,
    movies: ['king khan', 'dhakar mastan']
}

const myVariable = 'age';
console.log(student.age); // direct by property
console.log(student['age']); // access via property name string
console.log(student[myVariable]); // access via property name in a variable