const capitalize = require('./capitalize');

test('returns the first letter capitalized', () => {
  expect(capitalize('john')).toBe('John');
});
