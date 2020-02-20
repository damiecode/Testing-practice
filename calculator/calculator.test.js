const calculator = require('./calculator');

test('it adds', () => {
  expect(calculator.add(3, 5)).toBe(8);
});

test('it subtract', () => {
  expect(calculator.subtract(5, 3)).toBe(2);
});

test('it multiply', () => {
  expect(calculator.multiply(3, 5)).toBe(15);
});

test('it divides', () => {
  expect(calculator.divide(15, 5)).toBe(3);
});
