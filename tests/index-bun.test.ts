// @ts-nocheck
import { expect, test } from "bun:test";
import { twas, is } from "../src/index.ts";
import { tests_cases, test_now } from "./test-cases.ts";

test("twas", () => {
	tests_cases.forEach(({ input, expected }, index) => {
		test(`Test case ${index + 1}`, () => {
			const result = twas(input, test_now);
			expect(result).toEqual(expected);
		});
	});
});

test("is", () => {
	test("should return 0 when cycle is less than interval", () => {
		assert.strictEqual(is(60, 30), 0);
	});

	test("should return 1 when cycle is equal to interval", () => {
		assert.strictEqual(is(60, 60), 1);
	});

	test("should return 2 when cycle is greater than interval", () => {
		assert.strictEqual(is(60, 120), 2);
	});

	test("should return 3 when cycle is greater than interval", () => {
		assert.strictEqual(is(60, 180), 3);
	});
});
