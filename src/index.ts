/* @ts-self-types="./index.d.ts" */

/**
 * This module contains functions to calculate intervals and time differences.
 * @module
 */

/**
 * This function returns the number of times the interval fits into the cycle.
 *
 * @example
 * const interval = 60;
 * const cycle = 120;
 * const result = is(interval, cycle);
 * console.log(result); // 2
 *
 * @param interval The interval to be checked.
 * @param cycle The cycle to be checked.
 * @returns The number of times the interval fits into the cycle.
 */
export function is(interval: number, cycle: number): number {
	return cycle >= interval ? Math.round(cycle / interval) : 0;
}

/**
 * This function calculates the time difference between a given time and the current time in human-readable format.
 *
 * @example
 * const diff = twas(new Date("1/1/2000").getTime() - 1000, new Date("1/1/2000").getTime());
 * console.log(diff); // just now
 *
 * @param time The past time to compare with the current time.
 * @param now The current time. Defaults to Date.now().
 * @returns A human-readable string representing the time difference.
 */
export function twas(time: number, now = Date.now()): string {
	const secs = (now - time) / 1000;
	const mins = is(60, secs);
	const hours = is(60, mins);
	const days = is(24, hours);
	const weeks = is(7, days);
	const months = is(30, days);
	const years = is(12, months);

	let amt = years;
	let cycle = "year";

	if (secs <= 1) {
		return "just now";
	}
	if (years > 0) {
		amt = years;
		cycle = "year";
	} else if (months > 0) {
		amt = months;
		cycle = "month";
	} else if (weeks > 0) {
		amt = weeks;
		cycle = "week";
	} else if (days > 0) {
		amt = days;
		cycle = "day";
	} else if (hours > 0) {
		amt = hours;
		cycle = "hour";
	} else if (mins > 0) {
		amt = mins;
		cycle = "minute";
	} else if (secs > 0) {
		amt = secs;
		cycle = "second";
	}

	const v = Math.round(amt);

	return `${v === 1 ? (amt === hours ? "an" : "a") : v} ${cycle}${v > 1 ? "s" : ""} ago`;
}

export default twas;
