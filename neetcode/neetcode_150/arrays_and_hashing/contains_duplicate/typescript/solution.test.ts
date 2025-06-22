
import { containsDuplicate } from "./solution";

test('adds 1 + 2 to equal 3', () => {
  expect(containsDuplicate([1, 2, 3, 3])).toBe(true);
});

test('adds 1 + 2 to equal 3', () => {
  expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
});