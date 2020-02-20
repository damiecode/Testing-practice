const arrayAnalysis = require('./arrayAnalysis');

const array = arrayAnalysis([2, 4, 6, 7, 8, 9]);

test('finds average', () => {
  expect(array.average).toBe(6)
});

test('finds min', () => {
  expect(array.min).toBe(2)
});

test('finds max', () => {
  expect(array.max).toBe(9)
});

test('finds length', () => {
  expect(array.length).toBe(6)
});
