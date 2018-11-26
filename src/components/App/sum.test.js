import {sum, sub, mult} from "./sum.js";

test("adds 3010 + 1704 to equal 4714", () => {
	expect(sum(3010, 1704)).toBe(4714);
});

test("adds 3010 - 1704 to equal 1306", () => {
	expect(sub(3010, 1704)).toBe(1306);
});

test("adds 3010 x 1704 to equal 5,129,040", () => {
	expect(mult(3010, 1704)).toBe(5129040);
});
