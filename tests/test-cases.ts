export const test_now = new Date("1/1/2000").getTime();

export const tests_cases = [
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
