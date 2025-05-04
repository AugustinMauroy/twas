import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { twas } from "../src/index.ts";
import { tests_cases, test_now } from "./test-cases.ts";

describe("twas", () => {
	tests_cases.forEach(({ input, expected }, index) => {
		it(`Test case ${index + 1}`, () => {
			const result = twas(input, test_now);
			assert.strictEqual(result, expected);
		});
	});
});
