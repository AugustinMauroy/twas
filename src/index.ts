/* @ts-self-types="./index.d.ts" */

/**
 * This module contains functions to calculate intervals and time differences.
 * @module
 */

/**
 * This function calculates the time difference between a given time and the current time in human-readable format using the Intl.RelativeTimeFormat API.
 *
 * @example
 * const diff = twas(new Date("1/1/2000").getTime() - 1000, new Date("1/1/2000").getTime());
 * console.log(diff); // just now
 *
 * @param time The past time to compare with the current time.
 * @param now The current time. Defaults to Date.now().
 * @returns A human-readable string representing the time difference.
 */
export function twas(
	timeP: string | number | Date,
	timeN: string | number | Date = Date.now(),
): string {
	const past = new Date(timeP);
	const now = new Date(timeN);
	const diff = Math.abs(now.getTime() - past.getTime());

	const duration = {
		years: Math.floor(diff / (1000 * 60 * 60 * 24 * 365)),
		months: Math.floor(
			(diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30),
		),
		weeks: Math.floor(
			(diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24 * 7),
		),
		days: Math.floor(
			(diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24),
		),
		hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
		minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
		seconds: Math.floor((diff % (1000 * 60)) / 1000),
	};

	// @ts-ignore - TS doesn't know about this API yet
	const formatter = new Intl.DurationFormat("en", {
		style: "long",
		nu: "latn",
	});

	if (duration.years >= 1) {
		return `${formatter.format({ years: duration.years })} ago`.replace(
			"1 ",
			"a ",
		);
	}
	if (duration.months >= 1) {
		return `${formatter.format({ months: duration.months })} ago`.replace(
			"1 ",
			"a ",
		);
	}
	if (duration.weeks >= 1) {
		return `${formatter.format({ weeks: duration.weeks })} ago`.replace(
			"1 ",
			"a ",
		);
	}
	if (duration.days >= 1) {
		return `${formatter.format({ days: duration.days })} ago`.replace(
			"1 ",
			"a ",
		);
	}
	if (duration.hours >= 1) {
		return `${formatter.format({ hours: duration.hours })} ago`.replace(
			"1 ",
			"an ",
		);
	}
	if (duration.minutes >= 1) {
		return `${formatter.format({ minutes: duration.minutes })} ago`.replace(
			"1 ",
			"a ",
		);
	}
	if (duration.seconds <= 1) {
		return "just now";
	}
	return `${formatter.format({ seconds: duration.seconds })} ago`.replace(
		"1 ",
		"a ",
	);
}

export default twas;
