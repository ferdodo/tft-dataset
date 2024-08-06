import { test, expect } from "vitest";
import { champions } from "./champions";
import { SynergyName } from "./synergy-name";

test("Should contain all champions names", () => {
	const names = new Set(champions.map((c) => c.name).filter(Boolean));

	expect(names.size).toEqual(60);
});

test("There are 8 five costs", () => {
	const fiveCosts = champions.filter((c) => c.cost === 5);

	expect(fiveCosts.length).toEqual(8);
});

test("There are 12 four costs", () => {
	const fourCosts = champions.filter((c) => c.cost === 4);

	expect(fourCosts.length).toEqual(12);
});

test("There are 13 three costs", () => {
	const fourCosts = champions.filter((c) => c.cost === 3);

	expect(fourCosts.length).toEqual(13);
});

test("There are 13 Two costs", () => {
	const fourCosts = champions.filter((c) => c.cost === 2);

	expect(fourCosts.length).toEqual(13);
});

test("Should contain 4 Arcana", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.Arcana);

	expect(synergies.length).toEqual(4);
});

test("Should contain 5 Chrono", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.Chrono);

	expect(synergies.length).toEqual(5);
});

test("Should contain 8 Portals", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.Portal);

	expect(synergies.length).toEqual(8);
});

test("Should contain 5 Scholars", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.Scholar);

	expect(synergies.length).toEqual(5);
});

test("Should contain 3 Dragons", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.Dragon);

	expect(synergies.length).toEqual(3);
});

test("Should contain 4 Preservers", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.Preserver);

	expect(synergies.length).toEqual(4);
});

test("Should contain 7 Shapeshifters", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.Shapeshifter);

	expect(synergies.length).toEqual(7);
});

test("Should contain 7 Frost", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.Frost);

	expect(synergies.length).toEqual(7);
});

test("Should contain 5 Sugarcraft", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.Sugarcraft);

	expect(synergies.length).toEqual(5);
});

test("Should contain 6 Witchcraft", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.Witchcraft);

	expect(synergies.length).toEqual(6);
});

test("Should contain 7 Eldritch", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.Eldritch);

	expect(synergies.length).toEqual(7);
});

test("Should contain 5 Honeymancy", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.Honeymancy);

	expect(synergies.length).toEqual(5);
});

test("Should contain 7 Multistriker", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.Multistriker);

	expect(synergies.length).toEqual(7);
});

test("Should contain 7 Faerie", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.Faerie);

	expect(synergies.length).toEqual(7);
});

test("Should contain 4 Pyro", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.Pyro);

	expect(synergies.length).toEqual(4);
});
