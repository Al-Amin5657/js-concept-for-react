const numbers = [14, 45, 43, 67, 78];

const student = {
    name: 'sakin Khan',
    age: 32,
    movies: ['king khan', 'dhakar mastan']
}

const about = `My name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`
console.log(about);

// 2. arrow function
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const output = addSixtyFive(50);
console.log(output);
const isEven = x => x % 2 == 0;
const result = isEven(10);
console.log(result);
const doMath = (num1, num2) => {
    const add = num1 + num2;
    return add;
}

// spread operator
const newNumbers = [...numbers];
numbers.push(88);
console.log(numbers);
console.log(newNumbers);

// create a new array from an older array and add an element
const currentNumber = [...numbers, 55, 66, 77, 88];
console.log(currentNumber);