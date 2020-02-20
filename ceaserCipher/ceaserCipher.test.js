const ceaserCipher = require('./ceaserCipher');

test('it ciphers 1', () => {
  expect(ceaserCipher('abc', 1)).toBe('bcd');
});

test('it ciphers 5', () => {
  expect(ceaserCipher('abc', 5)).toBe('fgh');
});

test('it keeps case', () => {
  expect(ceaserCipher('ABc', 5)).toBe('FGh');
});

test('wraps around', () => {
  expect(ceaserCipher('xyz', 1)).toBe('yza');
});

test('ignores punctuation', () => {
  expect(ceaserCipher('Hello!', 1)).toBe('Ifmmp!');
});
