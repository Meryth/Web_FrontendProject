import { describe, expect, test } from 'vitest';
import { checkInputWithRegex } from '../regex-validation';

describe('Validation regex tests', () => {

  test('checkInputWithRegex returns true when email valid', () => {
    const emailRegex = new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$');
    let result = checkInputWithRegex('valid@email.com', emailRegex);
    expect(result).true;
  });

  test('checkInputWithRegex returns false when email invalid', () => {
    const emailRegex = new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$');
    let result = checkInputWithRegex('invalid@email.', emailRegex);
    expect(result).false;
  });

  test('checkInputWithRegex returns false when phone number valid', () => {
    const phoneNumberRegex = new RegExp('^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$');
    let result = checkInputWithRegex('0123456789', phoneNumberRegex);
    expect(result).true;
  });

  test('checkInputWithRegex returns false when phone number invalid - string', () => {
    const phoneNumberRegex = new RegExp('^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$');
    let result = checkInputWithRegex('invalid input', phoneNumberRegex);
    expect(result).false;
  });

  test('checkInputWithRegex returns false when phone number invalid - numbers', () => {
    const phoneNumberRegex = new RegExp('^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$');
    let result = checkInputWithRegex('87', phoneNumberRegex);
    expect(result).false;
  });


});