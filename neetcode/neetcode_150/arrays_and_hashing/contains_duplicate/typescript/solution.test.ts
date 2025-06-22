
import { containsDuplicate } from "./solution";

test('[1, 2, 3, 3] should return true', () => {
  expect(containsDuplicate([1, 2, 3, 3])).toBe(true);
});

test('[1, 2, 3, 4] should retun false', () => {
  expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
});