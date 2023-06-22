let people = [
    { name: "John", age: 41, job: "Developer" },
    { name: "Jacqlin", age: 31, job: "Teacher" },
    { name: "Sunshine", age: 20, job: "Developer" },
    { name: "Sisely", age: 28, job: "coach" },
    { name: "John", age: 36, job: "Nurse" },
    { name: "John", age: 59, job: "Doctor" },
    { name: "Hillard", age: 17, job: "Police" },
    { name: "Randee", age: 46, job: "Firefighter" },
    { name: "John", age: 19, job: "Author" },
    { name: "Robert", age: 58, job: "Developer" },
];


// mapping thru to give names and ages of people in the array
const peoplename = people.map(person => `${person.name} is ${person.age} years old`)
console.log(peoplename);


