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
