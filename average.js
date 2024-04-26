function calculateAverageAge(arr) {
  return arr.reduce((sum, a) => sum + (a.age ? +a.age : 0), 0) / arr.length; //если возраста нет, то ставим 0? можно альтернативно не учитывать в расчете
}

module.exports = calculateAverageAge;


