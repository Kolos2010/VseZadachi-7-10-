const people = [
  { name: "Vladlen", age: 25, budget: 40000 },
  { name: "Elena", age: 18, budget: 4000 },
  { name: "Igor", age: 49, budget: 54000 },
  { name: "Michail", age: 15, budget: 5000 },
  { name: "Vasilisa", age: 24, budget: 25000 },
  { name: "Vicrory", age: 38, budget: 23000 },
];

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i])
// }

// for (let person of people) {
//   console.log(person);
// }

// ForEach
// people.forEach(function (person, index, pArr) {
//   console.log(person);
// });
// people.forEach((person) => console.log(person));

//Map
// const newPeople = people.map((person) => {
//   return person.name;
// });
// console.log(newPeople);

//Filter
// const adults = people.filter((person) => {
//   if (person.age >= 18) {
//     return true;
//   }
// });
// console.log(adults);

// const adults = people.filter((person) => person.age >= 18);
// console.log(adults);

//Reduce
// let amount = 0;
// for (let i = 0; i < people.length; i++) {
//   amount += people[i].budget;
// }
// console.log(amount);

// const amount = people.reduce((total, person) => {
//   return total + person.budget;
// }, 0);

// // const amount = people.reduce((total, person) => total + person.budget, 0);
// console.log(amount);

//Find
// const igor = people.find((person) => person.name === "Igor");
// console.log(igor);

//FindIndex
// const igorIndex = people.findIndex((person) => person.name === "Igor");
// console.log(igorIndex);

//==============================================

// const newPeople = people
//   .filter((person) => person.budget > 3000)
//   .map((person) => {
//     return {
//       info: `${person.name} (${person.age})`,
//       budget: person.budget,
//     };
//   });

// console.log(newPeople);
