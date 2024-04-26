const accum = require('../accum');

test('first array', () => {
  expect(accum([
    { name: "Alice", age: 30, city: "New York" },
    { name: "Bob", age: 25, city: "Los Angeles" },
    { name: "Charlie", age: 35, city: "New York" },
    { name: "David", age: 40, city: "Los Angeles" },
  ])).toEqual({
    'New York': [
      { name: 'Alice', age: 30, city: 'New York' },
      { name: 'Charlie', age: 35, city: 'New York' }
    ],
    'Los Angeles': [
      { name: 'Bob', age: 25, city: 'Los Angeles' },
      { name: 'David', age: 40, city: 'Los Angeles' }
    ]
  });
});


test('array without city', () => {
    expect(accum([
      { name: "Alice", age: 30},
      { name: "Bob", age: 25, city: "Los Angeles" },
      { name: "Charlie", age: 35, city: "New York" },
      { name: "David", age: 40, city: "Los Angeles" },
    ])).toEqual({
        undefined: [ { name: 'Alice', age: 30 } ],
        'Los Angeles': [
          { name: 'Bob', age: 25, city: 'Los Angeles' },
          { name: 'David', age: 40, city: 'Los Angeles' }
        ],
        'New York': [ { name: 'Charlie', age: 35, city: 'New York' } ]
      });
  });
  

