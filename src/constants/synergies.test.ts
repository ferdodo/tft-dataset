import { test, expect } from "vitest";
import { synergies } from "./synergies";

test("Should contain all synergies", () => {
	expect(synergies.length).toEqual(25);
});

test("All synergies should contain levels", () => {
	const synergiesWithLevels = synergies.filter(
		(s) => Object.keys(s.levels).length,
	);
	expect(synergies.length).toEqual(synergiesWithLevels.length);
});
