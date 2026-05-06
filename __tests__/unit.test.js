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
test('invalid phone number - too short', () => {
  expect(isPhoneNumber('123-4567')).toBe(false);
});
test('invalid phone number - letters', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});
