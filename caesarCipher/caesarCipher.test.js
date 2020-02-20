const caesarCipher = require('./caesarCipher');

test('it ciphers 1', () => {
  expect(caesarCipher('abc', 1)).toBe('bcd');
});

test('it ciphers 5', () => {
  expect(caesarCipher('abc', 5)).toBe('fgh');
});

test('it keeps case', () => {
  expect(caesarCipher('ABc', 5)).toBe('FGh');
});

test('wraps around', () => {
  expect(caesarCipher('xyz', 1)).toBe('yza');
});

test('ignores punctuation', () => {
  expect(caesarCipher('Hello!', 1)).toBe('Ifmmp!');
});
