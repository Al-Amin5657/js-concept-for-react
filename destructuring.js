// 1. array destructuring
const numbers = [45, 67];
// const x = numbers[0]
// const y = numbers[1]

const [x, y] = numbers;

function boxify(num1, num2) {
    const num = [num1, num2];
    return num;
}

// const [first, second] = [90, 44];
const [first, second] = boxify(60, 55);
console.log(first, second);

const student = {
    name: 'sakin Khan',
    age: 32,
    movies: ['king khan', 'dhakar mastan']
}
const [firstMovie, secondMovie] = student.movies;

// object destructuring
const { name, salary } = { id: 12, name: 'abul', age: 45, salary: 45000 };
console.log(name);

const employee = {
    id: 'vs code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 68,
        weight: 80,
        address: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            brand: 'casio',
            price: 500,

        }

    }
}
const { languages, id } = employee;
const { height, address } = employee.specification;
const { color, brand } = employee.specification.watch;
console.log(languages, id);
console.log(height, address);
console.log(color, brand);