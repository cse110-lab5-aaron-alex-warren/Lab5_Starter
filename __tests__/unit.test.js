// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';


describe('PhoneNumber Tests', () => {
  test('True case 1', () => {
    // True case 1
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
  });

  test('True case 2', () => {
    // True case 2
    expect(isPhoneNumber('987-654-3210')).toBe(true);
  });

  test('False case 1', () => {
    // False case 1
    expect(isPhoneNumber('123')).toBe(false);
  });

  test('False case 2', () => {
    // False case 2
    expect(isPhoneNumber('abcdefghij')).toBe(false);
  });

})


describe('Email Tests', () => {
  test('True case 1', () => {
    // True case 1
    expect(isEmail('test@example.com')).toBe(true);
  });

  test('True case 2', () => {
    // True case 2
    expect(isEmail('user123@test.org')).toBe(true);
  });

  test('False case 1', () => {
    // False case 1
    expect(isEmail('notanemail')).toBe(false);
  });

  test('False cases', () => {
    // False case 2
    expect(isEmail('user@test')).toBe(false);
  });
})


describe('Password Tests', () => {
  test('True case 1', () => {
    // True case 1
    expect(isStrongPassword('Password1')).toBe(true);
  });

  test('True case 2', () => {
    // True case 2
    expect(isStrongPassword('Abcd_1234')).toBe(true);
  });

  test('False case 1', () => {
    // False case 1
    expect(isStrongPassword('weak!')).toBe(false);
  });

  test('False case 2', () => {
    // False case 2
    expect(isStrongPassword('1234567890123456789')).toBe(false);
  });
})


describe('Date Tests', () => {
  test('True case 1', () => {
    // True case 1
    expect(isDate('12/31/2023')).toBe(true);
  });

  test('True case 2', () => {
    // True case 2
    expect(isDate('1/1/2024')).toBe(true);
  });

  test('False case 1', () => {
    // False case 1
    expect(isDate('notadate')).toBe(false);
  });

  test('False case 2', () => {
    // False case 2
    expect(isDate('2023-02-31')).toBe(false);
  });
})


describe('Hex Tests', () => {
  test('True case 1', () => {
    // True case 1
    expect(isHexColor('#ff0000')).toBe(true);
  });

  test('True case 2', () => {
    // True case 2
    expect(isHexColor('#00ff00')).toBe(true);
  });

  test('False case 1', () => {
    // False case 1
    expect(isHexColor('#12345')).toBe(false);
  });

  test('False case 2', () => {
    // False case 2
    expect(isHexColor('notacolor')).toBe(false);
  });
})