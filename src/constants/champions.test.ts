import { test, expect } from "vitest";
import { champions } from "./champions";
import { SynergyName } from "./synergy-name";
import { ChampionName } from "./champion-name";

test("Champions count should match champion names", () => {
	expect(champions.length).toEqual(Object.values(ChampionName).length);
});

test("Five costs", () => {
	const fiveCosts = champions.filter((c) => c.cost === 5);
	expect(fiveCosts.length).toEqual(8);

	const rangeSum = champions
		.filter((c) => c.cost === 5)
		.reduce((sum, c) => sum + c.range, 0);

	expect(rangeSum).toEqual(4 + 1 + 4 + 4 + 4 + 1 + 1 + 1);
});

test("Four costs", () => {
	const rangeSum = champions
		.filter((c) => c.cost === 4)
		.reduce((sum, c) => sum + c.range, 0);

	expect(rangeSum).toEqual(1 + 4 + 1 + 1 + 1 + 1 + 4 + 1 + 4 + 4 + 1 + 4);
});

test("Two costs", () => {
	const twoCosts = champions.filter((c) => c.cost === 2);
	expect(twoCosts.length).toEqual(13);

	const rangeSum = champions
		.filter((c) => c.cost === 2)
		.reduce((sum, c) => sum + c.range, 0);

	expect(rangeSum).toEqual(1 + 1 + 1 + 1 + 1 + 4 + 1 + 4 + 2 + 1 + 2 + 4 + 4);
});

test("Three costs", () => {
	const rangeSum = champions
		.filter((c) => c.cost === 3)
		.reduce((sum, c) => sum + c.range, 0);

	expect(rangeSum).toEqual(1 + 4 + 4 + 1 + 4 + 1 + 4 + 1 + 1 + 1 + 1 + 1 + 4);
});

test("One costs", () => {
	const twoCosts = champions.filter((c) => c.cost === 1);
	expect(twoCosts.length).toEqual(14);
});

test("Academy", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.Academy);

	expect(synergies.length).toEqual(5);

	const costSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Academy))
		.reduce((sum, c) => sum + c.cost, 0);

	expect(costSum).toEqual(3 + 4 + 5 + 2 + 1);
});

test("Family", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.Family);

	expect(synergies.length).toEqual(3);

	const costSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Family))
		.reduce((sum, c) => sum + c.cost, 0);

	expect(costSum).toEqual(1 + 2 + 1);

	const rangeSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Family))
		.reduce((sum, c) => sum + c.range, 0);

	expect(rangeSum).toEqual(4 + 1 + 4);
});

test("BlackRose", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.BlackRose);

	expect(synergies.length).toEqual(5);

	const costSum = champions
		.filter((c) => c.synergies.includes(SynergyName.BlackRose))
		.reduce((sum, c) => sum + c.cost, 0);

	expect(costSum).toEqual(3 + 4 + 5 + 1 + 2);

	const rangeSum = champions
		.filter((c) => c.synergies.includes(SynergyName.BlackRose))
		.reduce((sum, c) => sum + c.range, 0);

	expect(rangeSum).toEqual(4 + 1 + 4 + 4 + 2);
});

test("Rebel", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.Rebel);

	expect(synergies.length).toEqual(8);

	const costSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Rebel))
		.reduce((sum, c) => sum + c.cost, 0);

	expect(costSum).toEqual(2 + 3 + 4 + 1 + 5 + 2 + 1 + 4);
});

test("Enforcer", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.Enforcer);

	expect(synergies.length).toEqual(7);

	const costSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Enforcer))
		.reduce((sum, c) => sum + c.cost, 0);

	expect(costSum).toEqual(5 + 2 + 3 + 1 + 1 + 3 + 4);

	const rangeSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Enforcer))
		.reduce((sum, c) => sum + c.range, 0);

	expect(rangeSum).toEqual(4 + 1 + 1 + 4 + 1 + 4 + 1);
});

test("Automata", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.Automata);

	expect(synergies.length).toEqual(5);

	const costSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Automata))
		.reduce((sum, c) => sum + c.cost, 0);

	expect(costSum).toEqual(1 + 3 + 3 + 5 + 2);

	const rangeSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Automata))
		.reduce((sum, c) => sum + c.range, 0);

	expect(rangeSum).toEqual(1 + 1 + 4 + 4 + 1);
});

test("Conqueror", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.Conqueror);

	expect(synergies.length).toEqual(6);

	const costSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Conqueror))
		.reduce((sum, c) => sum + c.cost, 0);

	expect(costSum).toEqual(4 + 1 + 1 + 5 + 2 + 3);

	const rangeSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Conqueror))
		.reduce((sum, c) => sum + c.range, 0);

	expect(rangeSum).toEqual(1 + 1 + 4 + 1 + 1 + 1);
});

test("Experiment", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.Experiment);

	expect(synergies.length).toEqual(5);

	const costSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Experiment))
		.reduce((sum, c) => sum + c.cost, 0);

	expect(costSum).toEqual(4 + 3 + 4 + 2 + 1);

	const rangeSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Experiment))
		.reduce((sum, c) => sum + c.range, 0);

	expect(rangeSum).toEqual(1 + 1 + 4 + 2 + 4);
});

test("PitFighter", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.PitFighter);

	expect(synergies.length).toEqual(6);

	const costSum = champions
		.filter((c) => c.synergies.includes(SynergyName.PitFighter))
		.reduce((sum, c) => sum + c.cost, 0);

	expect(costSum).toEqual(1 + 3 + 5 + 2 + 4 + 1);

	const rangeSum = champions
		.filter((c) => c.synergies.includes(SynergyName.PitFighter))
		.reduce((sum, c) => sum + c.range, 0);

	expect(rangeSum).toEqual(4 + 1 + 1 + 2 + 1 + 4);
});

test("Sniper", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.Sniper);

	expect(synergies.length).toEqual(5);

	const costSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Sniper))
		.reduce((sum, c) => sum + c.cost, 0);

	expect(costSum).toEqual(5 + 3 + 1 + 4 + 2);

	const rangeSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Sniper))
		.reduce((sum, c) => sum + c.range, 0);

	expect(rangeSum).toEqual(4 + 4 + 4 + 4 + 4);
});

test("Dominator", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.Dominator);

	expect(synergies.length).toEqual(6);

	const costSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Dominator))
		.reduce((sum, c) => sum + c.cost, 0);

	expect(costSum).toEqual(3 + 3 + 4 + 5 + 4 + 2);

	const rangeSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Dominator))
		.reduce((sum, c) => sum + c.range, 0);

	expect(rangeSum).toEqual(1 + 4 + 1 + 1 + 4 + 4);
});

test("Emissary", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.Emissary);

	expect(synergies.length).toEqual(4);

	const costSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Emissary))
		.reduce((sum, c) => sum + c.cost, 0);

	expect(costSum).toEqual(4 + 4 + 3 + 2);

	const rangeSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Emissary))
		.reduce((sum, c) => sum + c.range, 0);

	expect(rangeSum).toEqual(1 + 1 + 4 + 4);
});

test("ChemBaron", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.ChemBaron);

	expect(synergies.length).toEqual(6);

	const costSum = champions
		.filter((c) => c.synergies.includes(SynergyName.ChemBaron))
		.reduce((sum, c) => sum + c.cost, 0);

	expect(costSum).toEqual(2 + 3 + 5 + 4 + 1 + 3);

	const rangeSum = champions
		.filter((c) => c.synergies.includes(SynergyName.ChemBaron))
		.reduce((sum, c) => sum + c.range, 0);

	expect(rangeSum).toEqual(4 + 1 + 1 + 4 + 1 + 1);
});

test("Scrap", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.Scrap);

	expect(synergies.length).toEqual(7);

	const costSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Scrap))
		.reduce((sum, c) => sum + c.cost, 0);

	expect(costSum).toEqual(4 + 4 + 3 + 1 + 5 + 1 + 2);

	const rangeSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Scrap))
		.reduce((sum, c) => sum + c.range, 0);

	expect(rangeSum).toEqual(4 + 1 + 1 + 4 + 1 + 1 + 4);
});
