const average = require('../average');

test('first array', () => {
  expect(average([
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Bob", age: 35 },
  ])).toBe(30);
});

test('array with string', () => {
  expect(average([
    { name: "Alice", age: '40' },
    { name: "Gera", age: 20 },
  ])).toBe(30);
});

test('array without age', () => {
  expect(average([
    { name: "Alice", },
    { name: "Gera", age: 20 },
  ])).toBe(10);
});