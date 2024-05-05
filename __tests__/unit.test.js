// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

describe("PhoneNumber Tests", () => {
  test('Test 1', () => {
    expect(isPhoneNumber("(110) 101-4075)")).toBe(true);
  });

  test('Test 2', () => {
    expect(isPhoneNumber("110-101-4075")).toBe(true);
  });

  test('Test 3', () => {
    expect(isPhoneNumber("1101014075")).toBe(false);
  });

  test('Test 4', () => {
    expect(isPhoneNumber("7355608")).toBe(false);
  });
});


describe('Email Tests', () => { 
  test('Test 1', () => {
    expect(isEmail("ucsd@ucsd.edu")).toBe(true);
  });

  test('Test 2', () => {
    expect(isEmail("im@cse.edu")).toBe(true);
  });

  test('Test 3', () => {
    expect(isEmail("ucsd@ucsd.eduTAT")).toBe(false);
  });
  test('Test 4', () => {
    expect(isEmail("ucsd@ucsd.cse.edu")).toBe(false);
  });
 })


describe('Password Tests', () => { 
  test('Test 1', () => {
    expect(isStrongPassword("qwe123")).toBe(true);
  });
  test('Test 2', () => {
    expect(isStrongPassword("password")).toBe(true);
  });
  test('Test 3', () => {
    expect(isStrongPassword("1111111")).toBe(false);
  });
  test('Test 4', () => {
    expect(isStrongPassword("This_is_password_greater_than15")).toBe(false);
  });
 })


describe('Date Tests', () => { 
  test('Test 1', () => {
    expect(isDate("05/04/2024")).toBe(true);
  });

  test('Test 2', () => {
    expect(isDate("30/04/2024")).toBe(true);
  });

  test('Test 3', () => {
    expect(isDate("05-04-2024")).toBe(false);
  });

  test('Test 4', () => {
    expect(isDate("05-04-924")).toBe(false);
  });
 })


 describe('Hex Tests', () => { 
  test('Test 1', () => {
    expect(isHexColor("#FFFFFF")).toBe(true);
  });
  test('Test 2', () => {
    expect(isHexColor("#010101")).toBe(true);
  });
  test('Test 1', () => {
    expect(isHexColor("color")).toBe(false);
  });
  test('Test 2', () => {
    expect(isHexColor("F010101")).toBe(false);
  });
  })
