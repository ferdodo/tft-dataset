import { test, expect } from "vitest";
import { champions } from "./champions";
import { SynergyName } from "./synergy-name";

test("Should contain all champions names", function() {
	const names = new Set(
		champions.map(c => c.name)
			.filter(Boolean)
	);

	expect(names.size).toEqual(60);
});

test("Should contain 7 Storyweaver", function() {
	const synergies = champions.flatMap(c => c.synergies)
		.filter(synergyName => synergyName === SynergyName.Storyweaver);

	expect(synergies.length).toEqual(7);
});

test("Should contain 8 Mythic", function() {
	const synergies = champions.flatMap(c => c.synergies)
		.filter(synergyName => synergyName === SynergyName.Mythic);

	expect(synergies.length).toEqual(8);
});

test("Should contain 6 Inkshadow", function() {
	const synergies = champions.flatMap(c => c.synergies)
		.filter(synergyName => synergyName === SynergyName.Inkshadow);

	expect(synergies.length).toEqual(6);
});

test("Should contain 7 Fated", function() {
	const synergies = champions.flatMap(c => c.synergies)
		.filter(synergyName => synergyName === SynergyName.Fated);

	expect(synergies.length).toEqual(7);
});

test("Should contain 7 Arcanist", function() {
	const synergies = champions.flatMap(c => c.synergies)
		.filter(synergyName => synergyName === SynergyName.Arcanist);

	expect(synergies.length).toEqual(7);
});

test("Should contain 7 Behemoth", function() {
	const synergies = champions.flatMap(c => c.synergies)
		.filter(synergyName => synergyName === SynergyName.Behemoth);

	expect(synergies.length).toEqual(7);
});

test("Should contain 7 Bruiser", function() {
	const synergies = champions.flatMap(c => c.synergies)
		.filter(synergyName => synergyName === SynergyName.Bruiser);

	expect(synergies.length).toEqual(7);
});

test("Should contain 7 Duelist", function() {
	const synergies = champions.flatMap(c => c.synergies)
		.filter(synergyName => synergyName === SynergyName.Duelist);

	expect(synergies.length).toEqual(7);
});

test("Should contain 7 Warden", function() {
	const synergies = champions.flatMap(c => c.synergies)
		.filter(synergyName => synergyName === SynergyName.Warden);

	expect(synergies.length).toEqual(7);
});

test("Should contain 6 Heavenly", function() {
	const synergies = champions.flatMap(c => c.synergies)
		.filter(synergyName => synergyName === SynergyName.Heavenly);

	expect(synergies.length).toEqual(6);
});

test("Should contain 6 Umbral", function() {
	const synergies = champions.flatMap(c => c.synergies)
		.filter(synergyName => synergyName === SynergyName.Umbral);

	expect(synergies.length).toEqual(6);
});

test("Should contain 5 Trickshot", function() {
	const synergies = champions.flatMap(c => c.synergies)
		.filter(synergyName => synergyName === SynergyName.Trickshot);

	expect(synergies.length).toEqual(5);
});

test("Should contain 6 Ghostly", function() {
	const synergies = champions.flatMap(c => c.synergies)
		.filter(synergyName => synergyName === SynergyName.Ghostly);

	expect(synergies.length).toEqual(6);
});

test("Should contain 6 Invoker", function() {
	const synergies = champions.flatMap(c => c.synergies)
		.filter(synergyName => synergyName === SynergyName.Invoker);

	expect(synergies.length).toEqual(6);
});

test("Should contain 5 Dragonlord", function() {
	const synergies = champions.flatMap(c => c.synergies)
		.filter(synergyName => synergyName === SynergyName.Dragonlord);

	expect(synergies.length).toEqual(5);
});

test("Should contain 5 Sniper", function() {
	const synergies = champions.flatMap(c => c.synergies)
		.filter(synergyName => synergyName === SynergyName.Sniper);

	expect(synergies.length).toEqual(5);
});
