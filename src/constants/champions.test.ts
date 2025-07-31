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

	expect(rangeSum).toEqual(20);
});

test("Four costs", () => {
	const fourCosts = champions.filter((c) => c.cost === 4);
	expect(fourCosts.length).toEqual(13);

	const rangeSum = champions
		.filter((c) => c.cost === 4)
		.reduce((sum, c) => sum + c.range, 0);

	expect(rangeSum).toEqual(28);
});

test("Three costs", () => {
	const threeCosts = champions.filter((c) => c.cost === 3);
	expect(threeCosts.length).toEqual(16);

	const rangeSum = champions
		.filter((c) => c.cost === 3)
		.reduce((sum, c) => sum + c.range, 0);

	expect(rangeSum).toEqual(41);
});

test("Two costs", () => {
	const twoCosts = champions.filter((c) => c.cost === 2);
	expect(twoCosts.length).toEqual(13);

	const rangeSum = champions
		.filter((c) => c.cost === 2)
		.reduce((sum, c) => sum + c.range, 0);

	expect(rangeSum).toEqual(28);
});

test("One costs", () => {
	const oneCosts = champions.filter((c) => c.cost === 1);
	expect(oneCosts.length).toEqual(14);
});

test("Battle Academia", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.BattleAcademia);

	expect(synergies.length).toEqual(8);

	const costSum = champions
		.filter((c) => c.synergies.includes(SynergyName.BattleAcademia))
		.reduce((sum, c) => sum + c.cost, 0);

	expect(costSum).toEqual(3 + 1 + 1 + 3 + 2 + 4 + 2 + 4);
});

test("Crystal Gambit", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.CrystalGambit);

	expect(synergies.length).toEqual(6);

	const costSum = champions
		.filter((c) => c.synergies.includes(SynergyName.CrystalGambit))
		.reduce((sum, c) => sum + c.cost, 0);

	expect(costSum).toEqual(4 + 2 + 3 + 1 + 2 + 5);
});

test("Luchador", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.Luchador);

	expect(synergies.length).toEqual(4);

	const costSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Luchador))
		.reduce((sum, c) => sum + c.cost, 0);

	expect(costSum).toEqual(5 + 2 + 1 + 4);
});

test("Mentor", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.Mentor);

	expect(synergies.length).toEqual(4);

	const costSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Mentor))
		.reduce((sum, c) => sum + c.cost, 0);

	expect(costSum).toEqual(2 + 4 + 3 + 3);
});

test("Mighty Mech", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.MightyMech);

	expect(synergies.length).toEqual(7);

	const costSum = champions
		.filter((c) => c.synergies.includes(SynergyName.MightyMech))
		.reduce((sum, c) => sum + c.cost, 0);

	expect(costSum).toEqual(1 + 2 + 4 + 4 + 1 + 3 + 5);
});

test("Monster Trainer", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.MonsterTrainer);

	expect(synergies.length).toEqual(4);

	const costSum = champions
		.filter((c) => c.synergies.includes(SynergyName.MonsterTrainer))
		.reduce((sum, c) => sum + c.cost, 0);

	expect(costSum).toEqual(3 + 3 + 3 + 3);
});

test("Rogue Captain", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.RogueCaptain);

	expect(synergies.length).toEqual(1);

	const costSum = champions
		.filter((c) => c.synergies.includes(SynergyName.RogueCaptain))
		.reduce((sum, c) => sum + c.cost, 0);

	expect(costSum).toEqual(5);
});

test("Soul Fighter", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.SoulFighter);

	expect(synergies.length).toEqual(8);

	const costSum = champions
		.filter((c) => c.synergies.includes(SynergyName.SoulFighter))
		.reduce((sum, c) => sum + c.cost, 0);

	expect(costSum).toEqual(5 + 1 + 2 + 1 + 4 + 4 + 3 + 2);
});

test("Stance Master", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.StanceMaster);

	expect(synergies.length).toEqual(1);

	const costSum = champions
		.filter((c) => c.synergies.includes(SynergyName.StanceMaster))
		.reduce((sum, c) => sum + c.cost, 0);

	expect(costSum).toEqual(5);
});

test("Star Guardian", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.StarGuardian);

	expect(synergies.length).toEqual(7);

	const costSum = champions
		.filter((c) => c.synergies.includes(SynergyName.StarGuardian))
		.reduce((sum, c) => sum + c.cost, 0);

	expect(costSum).toEqual(3 + 4 + 3 + 4 + 1 + 5 + 2);
});

test("Supreme Cells", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.SupremeCells);

	expect(synergies.length).toEqual(4);

	const costSum = champions
		.filter((c) => c.synergies.includes(SynergyName.SupremeCells))
		.reduce((sum, c) => sum + c.cost, 0);

	expect(costSum).toEqual(4 + 3 + 2 + 1);
});

test("The Champ", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.TheChamp);

	expect(synergies.length).toEqual(1);

	const costSum = champions
		.filter((c) => c.synergies.includes(SynergyName.TheChamp))
		.reduce((sum, c) => sum + c.cost, 0);

	expect(costSum).toEqual(5);
});

test("The Crew", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.TheCrew);

	expect(synergies.length).toEqual(4);

	const costSum = champions
		.filter((c) => c.synergies.includes(SynergyName.TheCrew))
		.reduce((sum, c) => sum + c.cost, 0);

	expect(costSum).toEqual(1 + 2 + 1 + 3);
});

test("Wraith", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.Wraith);

	expect(synergies.length).toEqual(6);

	const costSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Wraith))
		.reduce((sum, c) => sum + c.cost, 0);

	expect(costSum).toEqual(2 + 4 + 1 + 3 + 5 + 1);
});

test("Rosemother", () => {
	const synergies = champions
		.flatMap((c) => c.synergies)
		.filter((synergyName) => synergyName === SynergyName.Rosemother);

	expect(synergies.length).toEqual(1);

	const costSum = champions
		.filter((c) => c.synergies.includes(SynergyName.Rosemother))
		.reduce((sum, c) => sum + c.cost, 0);

	expect(costSum).toEqual(5);
});
