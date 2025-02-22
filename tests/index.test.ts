import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { twas, is } from "../src/index.ts";

const test_now = new Date("1/1/2000").getTime();
const tests_cases = [
	{ input: test_now - 1000, expected: "just now" },
	{ input: test_now - 2000, expected: "2 seconds ago" },
	{ input: test_now - 60000, expected: "a minute ago" },
	{ input: test_now - 2 * 60000, expected: "2 minutes ago" },
	{ input: test_now - 3600000, expected: "an hour ago" },
	{ input: test_now - 2 * 3600000, expected: "2 hours ago" },
	{ input: test_now - 86400000, expected: "a day ago" },
	{ input: test_now - 2 * 86400000, expected: "2 days ago" },
	{ input: test_now - 604800000, expected: "a week ago" },
	{ input: test_now - 2 * 604800000, expected: "2 weeks ago" },
	{ input: test_now - 2592000000, expected: "a month ago" },
	{ input: test_now - 2 * 2592000000, expected: "2 months ago" },
	{ input: test_now - 31536000000, expected: "a year ago" },
	{ input: test_now - 2 * 31536000000, expected: "2 years ago" },
];

describe("twas", () => {
	tests_cases.forEach(({ input, expected }, index) => {
		it(`Test case ${index + 1}`, () => {
			const result = twas(input, test_now);
			assert.strictEqual(result, expected);
		});
	});
});

describe("is", () => {
	it("should return 0 when cycle is less than interval", () => {
		assert.strictEqual(is(60, 30), 0);
	});

	it("should return 1 when cycle is equal to interval", () => {
		assert.strictEqual(is(60, 60), 1);
	});

	it("should return 2 when cycle is greater than interval", () => {
		assert.strictEqual(is(60, 120), 2);
	});

	it("should return 3 when cycle is greater than interval", () => {
		assert.strictEqual(is(60, 180), 3);
	});
});
