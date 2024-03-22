import { test, expect } from "vitest";
import { synergies } from "./synergies";

test("Should contain all synergies", function() {
	expect(synergies.length).toEqual(26);
});

test("All synergies should contain levels", function() {
	const synergiesWithLevels = synergies.filter(s => Object.keys(s.levels).length);
	expect(synergies.length).toEqual(synergiesWithLevels.length);
});
