const person2 = {
    name: 'lal nil holud mia',
    profession: 'traffic surgeon',
    age: 39,
    25: 'summer',
    'son-name': 'sunny',
    address: 'shahabag',
}
// dot notation
// const prof1 = person.name;

// Bracket notation
// const prof2 = person['address'];
// const pName = 'profession';
// const prof3 = person[pName];
// const prof4 = person[25];
// const prof5 = person['son-name'];

// console.log(prof5);

// const name = 'Hero'; const age = 34;
// const person = { name, age }; console.log(person);

const adventurer = { name: 'Alice', cat: { name: 'Lucy' } };
const ratName = adventurer?.rat?.name;
// console.log(ratName);

let person = null;
console.log(person ? person : "person is null");
const obj = { a: 1 };
console.log(Object.keys(obj).length === 0);