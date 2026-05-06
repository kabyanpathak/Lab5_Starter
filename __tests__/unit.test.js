// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test('valid phone number with dashes', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('valid phone number with parentheses', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('rejects phone number with too many digits and no -', () => {
  expect(isPhoneNumber('12345678901')).toBe(false);
});
test('invalid phone number with no numbers', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});
