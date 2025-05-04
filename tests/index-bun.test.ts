// @ts-nocheck
import { expect, test } from "bun:test";
import { twas } from "../src/index.ts";
import { tests_cases, test_now } from "./test-cases.ts";

test("twas", () => {
	tests_cases.forEach(({ input, expected }, index) => {
		test(`Test case ${index + 1}`, () => {
			const result = twas(input, test_now);
			expect(result).toEqual(expected);
		});
	});
});
