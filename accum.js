function groupPeopleByCity(people) {
  const resultCity = {};
  people.forEach((person) => {
    resultCity[person.city]
      ? resultCity[person.city].push(person)
      : (resultCity[person.city] = [person]);
  });
  return resultCity;
}

module.exports = groupPeopleByCity;

const arrEx = [
  { name: "Alice", age: 30},
  { name: "Bob", age: 25, city: "Los Angeles" },
  { name: "Charlie", age: 35, city: "New York" },
  { name: "David", age: 40, city: "Los Angeles" },
];

console.log(groupPeopleByCity(arrEx));
