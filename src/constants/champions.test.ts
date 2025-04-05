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

	expect(rangeSum).toEqual(4 + 1 + 1 + 1 + 4 + 4 + 1 + 1);
});

test("Four costs", () => {
	const rangeSum = champions
		.filter((c) => c.cost === 4)
		.reduce((sum, c) => sum + c.range, 0);

	expect(rangeSum).toEqual(4 + 4 + 4 + 1 + 1 + 4 + 1 + 1 + 4 + 4 + 1 + 5 + 4);
});

test("Two costs", () => {
	const twoCosts = champions.filter((c) => c.cost === 2);
	expect(twoCosts.length).toEqual(13);

	const rangeSum = champions
		.filter((c) => c.cost === 2)
		.reduce((sum, c) => sum + c.range, 0);

	expect(rangeSum).toEqual(1 + 1 + 2 + 1 + 4 + 4 + 1 + 1 + 1 + 1 + 4 + 4 + 4);
});

test("Three costs", () => {
	const rangeSum = champions
		.filter((c) => c.cost === 3)
		.reduce((sum, c) => sum + c.range, 0);

	expect(rangeSum).toEqual(1 + 4 + 4 + 2 + 1 + 1 + 1 + 4 + 1 + 1 + 4 + 4 + 4);
});

test("One costs", () => {
	const oneCosts = champions.filter((c) => c.cost === 1);
	expect(oneCosts.length).toEqual(13);
});

test("AnimaSquad", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.AnimaSquad);

	expect(synergies.length).toEqual(8);

	const costSum = champions
		.filter((c) => c.synergies.includes(SynergyName.AnimaSquad))
		.reduce((sum, c) => sum + c.cost, 0);

	expect(costSum).toEqual(3 + 4 + 2 + 1 + 1 + 4 + 2 + 5);
});

test("BoomBots", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.BoomBots);

	expect(synergies.length).toEqual(5);

	const costSum = champions
		.filter((c) => c.synergies.includes(SynergyName.BoomBots))
		.reduce((sum, c) => sum + c.cost, 0);

	expect(costSum).toEqual(4 + 3 + 1 + 2 + 5);

	const rangeSum = champions
		.filter((c) => c.synergies.includes(SynergyName.BoomBots))
		.reduce((sum, c) => sum + c.range, 0);

	expect(rangeSum).toEqual(1 + 2 + 4 + 1 + 4);
});

test("Cypher", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.Cypher);

	expect(synergies.length).toEqual(5);

	const costSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Cypher))
		.reduce((sum, c) => sum + c.cost, 0);

	expect(costSum).toEqual(3 + 3 + 2 + 1 + 4);

	const rangeSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Cypher))
		.reduce((sum, c) => sum + c.range, 0);

	expect(rangeSum).toEqual(4 + 1 + 4 + 1 + 1);
});

test("Divinicorp", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.Divinicorp);

	expect(synergies.length).toEqual(6);

	const costSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Divinicorp))
		.reduce((sum, c) => sum + c.cost, 0);

	expect(costSum).toEqual(3 + 1 + 5 + 2 + 3 + 4);

	const rangeSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Divinicorp))
		.reduce((sum, c) => sum + c.range, 0);

	expect(rangeSum).toEqual(1 + 4 + 1 + 1 + 4 + 4);
});

test("Exotech", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.Exotech);

	expect(synergies.length).toEqual(7);

	const costSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Exotech))
		.reduce((sum, c) => sum + c.cost, 0);

	expect(costSum).toEqual(1 + 2 + 3 + 2 + 4 + 3 + 4);

	const rangeSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Exotech))
		.reduce((sum, c) => sum + c.range, 0);

	expect(rangeSum).toEqual(1 + 4 + 1 + 1 + 1 + 4 + 5);
});

test("Bastion", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.Bastion);

	expect(synergies.length).toEqual(7);

	const costSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Bastion))
		.reduce((sum, c) => sum + c.cost, 0);

	expect(costSum).toEqual(3 + 2 + 1 + 1 + 5 + 4 + 2);

	const rangeSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Bastion))
		.reduce((sum, c) => sum + c.range, 0);

	expect(rangeSum).toEqual(1 + 1 + 1 + 1 + 1 + 1 + 1);
});

test("Bruiser", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.Bruiser);

	expect(synergies.length).toEqual(7);

	const costSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Bruiser))
		.reduce((sum, c) => sum + c.cost, 0);

	expect(costSum).toEqual(1 + 4 + 2 + 1 + 3 + 5 + 3);

	const rangeSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Bruiser))
		.reduce((sum, c) => sum + c.range, 0);

	expect(rangeSum).toEqual(1 + 1 + 1 + 1 + 1 + 1 + 1);
});

test("Dynamo", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.Dynamo);

	expect(synergies.length).toEqual(5);

	const costSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Dynamo))
		.reduce((sum, c) => sum + c.cost, 0);

	expect(costSum).toEqual(5 + 3 + 2 + 4 + 1);

	const rangeSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Dynamo))
		.reduce((sum, c) => sum + c.range, 0);

	expect(rangeSum).toEqual(4 + 4 + 4 + 4 + 4);
});

test("Executioner", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.Executioner);

	expect(synergies.length).toEqual(5);

	const costSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Executioner))
		.reduce((sum, c) => sum + c.cost, 0);

	expect(costSum).toEqual(2 + 3 + 5 + 3 + 4);

	const rangeSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Executioner))
		.reduce((sum, c) => sum + c.range, 0);

	expect(rangeSum).toEqual(2 + 1 + 4 + 4 + 4);
});

test("Marksman", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.Marksman);

	expect(synergies.length).toEqual(5);

	const costSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Marksman))
		.reduce((sum, c) => sum + c.cost, 0);

	expect(costSum).toEqual(4 + 2 + 3 + 1 + 4);

	const rangeSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Marksman))
		.reduce((sum, c) => sum + c.range, 0);

	expect(rangeSum).toEqual(4 + 4 + 4 + 4 + 4);
});

test("Slayer", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.Slayer);

	expect(synergies.length).toEqual(6);

	const costSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Slayer))
		.reduce((sum, c) => sum + c.cost, 0);

	expect(costSum).toEqual(1 + 3 + 3 + 1 + 2 + 4);

	const rangeSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Slayer))
		.reduce((sum, c) => sum + c.range, 0);

	expect(rangeSum).toEqual(1 + 1 + 4 + 1 + 4 + 1);
});

test("Strategist", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.Strategist);

	expect(synergies.length).toEqual(5);

	const costSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Strategist))
		.reduce((sum, c) => sum + c.cost, 0);

	expect(costSum).toEqual(4 + 2 + 2 + 4 + 3);

	const rangeSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Strategist))
		.reduce((sum, c) => sum + c.range, 0);

	expect(rangeSum).toEqual(1 + 4 + 1 + 4 + 4);
});

test("Techie", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.Techie);

	expect(synergies.length).toEqual(8);

	const costSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Techie))
		.reduce((sum, c) => sum + c.cost, 0);

	expect(costSum).toEqual(4 + 3 + 3 + 1 + 2 + 2 + 5 + 1);

	const rangeSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Techie))
		.reduce((sum, c) => sum + c.range, 0);

	expect(rangeSum).toEqual(4 + 2 + 1 + 4 + 1 + 4 + 1 + 4);
});

test("Vanguard", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.Vanguard);

	expect(synergies.length).toEqual(7);

	const costSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Vanguard))
		.reduce((sum, c) => sum + c.cost, 0);

	expect(costSum).toEqual(3 + 3 + 4 + 2 + 2 + 1 + 1);

	const rangeSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Vanguard))
		.reduce((sum, c) => sum + c.range, 0);

	expect(rangeSum).toEqual(1 + 1 + 1 + 1 + 1 + 1 + 1);
});

test("GoldenOx", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.GoldenOx);

	expect(synergies.length).toEqual(6);

	const costSum = champions
		.filter((c) => c.synergies.includes(SynergyName.GoldenOx))
		.reduce((sum, c) => sum + c.cost, 0);

	expect(costSum).toEqual(1 + 4 + 4 + 2 + 3 + 5);

	const rangeSum = champions
		.filter((c) => c.synergies.includes(SynergyName.GoldenOx))
		.reduce((sum, c) => sum + c.range, 0);

	expect(rangeSum).toEqual(1 + 4 + 4 + 2 + 1 + 1);
});

test("GodOfTheNet", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.GodOfTheNet);

	expect(synergies.length).toEqual(1);

	const costSum = champions
		.filter((c) => c.synergies.includes(SynergyName.GodOfTheNet))
		.reduce((sum, c) => sum + c.cost, 0);

	expect(costSum).toEqual(5);

	const rangeSum = champions
		.filter((c) => c.synergies.includes(SynergyName.GodOfTheNet))
		.reduce((sum, c) => sum + c.range, 0);

	expect(rangeSum).toEqual(1);
});

test("Nitro", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.Nitro);

	expect(synergies.length).toEqual(4);

	const costSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Nitro))
		.reduce((sum, c) => sum + c.cost, 0);

	expect(costSum).toEqual(3 + 1 + 1 + 2);

	const rangeSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Nitro))
		.reduce((sum, c) => sum + c.range, 0);

	expect(rangeSum).toEqual(4 + 4 + 3 + 1);
});

test("AMP", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.AMP);

	expect(synergies.length).toEqual(5);

	const costSum = champions
		.filter((c) => c.synergies.includes(SynergyName.AMP))
		.reduce((sum, c) => sum + c.cost, 0);

	expect(costSum).toEqual(4 + 2 + 1 + 5 + 3);

	const rangeSum = champions
		.filter((c) => c.synergies.includes(SynergyName.AMP))
		.reduce((sum, c) => sum + c.range, 0);

	expect(rangeSum).toEqual(4 + 1 + 3 + 4 + 4);
});

test("Rapidfire", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.Rapidfire);

	expect(synergies.length).toEqual(5);

	const costSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Rapidfire))
		.reduce((sum, c) => sum + c.cost, 0);

	expect(costSum).toEqual(3 + 1 + 1 + 2 + 4);

	const rangeSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Rapidfire))
		.reduce((sum, c) => sum + c.range, 0);

	expect(rangeSum).toEqual(4 + 4 + 4 + 4 + 5);
});

test("Virus", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.Virus);

	expect(synergies.length).toEqual(1);

	const costSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Virus))
		.reduce((sum, c) => sum + c.cost, 0);

	expect(costSum).toEqual(5);

	const rangeSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Virus))
		.reduce((sum, c) => sum + c.range, 0);

	expect(rangeSum).toEqual(1);
});

test("SoulKiller", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.SoulKiller);

	expect(synergies.length).toEqual(1);

	const costSum = champions
		.filter((c) => c.synergies.includes(SynergyName.SoulKiller))
		.reduce((sum, c) => sum + c.cost, 0);

	expect(costSum).toEqual(5);

	const rangeSum = champions
		.filter((c) => c.synergies.includes(SynergyName.SoulKiller))
		.reduce((sum, c) => sum + c.range, 0);

	expect(rangeSum).toEqual(1);
});

test("Overlord", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.Overlord);

	expect(synergies.length).toEqual(1);

	const costSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Overlord))
		.reduce((sum, c) => sum + c.cost, 0);

	expect(costSum).toEqual(5);

	const rangeSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Overlord))
		.reduce((sum, c) => sum + c.range, 0);

	expect(rangeSum).toEqual(1);
});
