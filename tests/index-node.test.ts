import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { twas, is } from "../src/index.ts";
import { tests_cases, test_now } from "./test-cases.ts";

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
