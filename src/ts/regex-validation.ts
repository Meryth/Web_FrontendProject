export function checkInputWithRegex(input: string, regex: RegExp) {
  return regex.test(input);
}
