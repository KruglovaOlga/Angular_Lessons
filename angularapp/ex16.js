const number = [1, 2, 3, 4, 5];

const evenNumbers = number.filter(function (num) {
  return num % 2 === 0;
});

console.log(evenNumbers);

const even = number.filter((num) => num % 2 === 0);

console.log(even);

const fruits = ["apple", "banana", "cherry", "strawberries"];

const lenghts = fruits.map((fruit) => fruit.length);

console.log(lenghts);

const employees = [
  { name: "Olga", salary: 50000 },
  { name: "Bob", salary: 40000 },
  { name: "Chris", salary: 60000 },
];

const sortBySalary = (a, b) => b.salary - a.salary;
const sortedBySalary = employees.sort(sortBySalary);
employees.sort();
console.log(employees);
console.log(sortedBySalary);
