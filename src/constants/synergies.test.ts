import { test, expect } from "vitest";
import { synergies } from "./synergies";
import { champions } from "./champions";
import { SynergyName } from "./synergy-name";

test("Should contain all synergies", () => {
	expect(synergies.length).toEqual(26); // 15 original + 11 new TFT classes
});

test("All synergies should contain levels", () => {
	const synergiesWithLevels = synergies.filter(
		(s) => Object.keys(s.levels).length,
	);
	expect(synergies.length).toEqual(synergiesWithLevels.length);
});

// TFT Classes tests - checking number of champions per class
test("Bastion class should have 7 champions", () => {
	const bastionChampions = champions.filter((c) =>
		c.synergies.includes(SynergyName.Bastion),
	);
	expect(bastionChampions.length).toEqual(7);
});

test("Duelist class should have 7 champions", () => {
	const duelistChampions = champions.filter((c) =>
		c.synergies.includes(SynergyName.Duelist),
	);
	expect(duelistChampions.length).toEqual(7);
});

test("Edgelord class should have 6 champions", () => {
	const edgelordChampions = champions.filter((c) =>
		c.synergies.includes(SynergyName.Edgelord),
	);
	expect(edgelordChampions.length).toEqual(6);
});

test("Executioner class should have 6 champions", () => {
	const executionerChampions = champions.filter((c) =>
		c.synergies.includes(SynergyName.Executioner),
	);
	expect(executionerChampions.length).toEqual(6);
});

test("Heavyweight class should have 6 champions", () => {
	const heavyweightChampions = champions.filter((c) =>
		c.synergies.includes(SynergyName.Heavyweight),
	);
	expect(heavyweightChampions.length).toEqual(6);
});

test("Juggernaut class should have 7 champions", () => {
	const juggernautChampions = champions.filter((c) =>
		c.synergies.includes(SynergyName.Juggernaut),
	);
	expect(juggernautChampions.length).toEqual(7);
});

test("Prodigy class should have 5 champions", () => {
	const prodigyChampions = champions.filter((c) =>
		c.synergies.includes(SynergyName.Prodigy),
	);
	expect(prodigyChampions.length).toEqual(5);
});

test("Protector class should have 6 champions", () => {
	const protectorChampions = champions.filter((c) =>
		c.synergies.includes(SynergyName.Protector),
	);
	expect(protectorChampions.length).toEqual(6);
});

test("Sniper class should have 6 champions", () => {
	const sniperChampions = champions.filter((c) =>
		c.synergies.includes(SynergyName.Sniper),
	);
	expect(sniperChampions.length).toEqual(6);
});

test("Sorcerer class should have 7 champions", () => {
	const sorcererChampions = champions.filter((c) =>
		c.synergies.includes(SynergyName.Sorcerer),
	);
	expect(sorcererChampions.length).toEqual(7);
});

test("Strategist class should have 4 champions", () => {
	const strategistChampions = champions.filter((c) =>
		c.synergies.includes(SynergyName.Strategist),
	);
	expect(strategistChampions.length).toEqual(4);
});
