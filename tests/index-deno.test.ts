// @ts-nocheck
import assert from "node:assert/strict";
import { twas } from "../src/index.ts";
import { tests_cases, test_now } from "./test-cases.ts";

Deno.test("twas", () => {
	tests_cases.forEach(({ input, expected }, index) => {
		Deno.test(`Test case ${index + 1}`, () => {
			const result = twas(input, test_now);
			assert.strictEqual(result, expected);
		});
	});
});
