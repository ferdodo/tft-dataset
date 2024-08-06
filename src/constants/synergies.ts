import { SynergyLevel } from "./synergy-level";
import type { Synergy } from "../types/synergy";
import { SynergyName } from "./synergy-name";

const {
	Arcana,
	Chrono,
	Dragon,
	Druid,
	Eldritch,
	Faerie,
	Frost,
	Honeymancy,
	Portal,
	Pyro,
	Ravenous,
	Sugarcraft,
	Witchcraft,
	Ascendant,
	Bastion,
	BatQueen,
	BestFriends,
	Blaster,
	Hunter,
	Incantor,
	Mage,
	Multistriker,
	Preserver,
	Scholar,
	Shapeshifter,
	Vanguard,
	Warrior
} = SynergyName;

export const synergies: Synergy[] = [
	{
		name: Arcana,
		levels: {
			2: SynergyLevel.Bronze,
			4: SynergyLevel.Silver,
			6: SynergyLevel.Gold,
			8: SynergyLevel.Diamond
		}
	},
	{
		name: Chrono,
		levels: {
			2: SynergyLevel.Bronze,
			4: SynergyLevel.Silver,
			6: SynergyLevel.Gold
		}
	},
	{
		name: Dragon,
		levels: {
			2: SynergyLevel.Bronze,
			3: SynergyLevel.Silver
		}
	},
	{
		name: Druid,
		levels: {
			1: SynergyLevel.Bronze
		}
	},
	{
		name: Eldritch,
		levels: {
			3: SynergyLevel.Bronze,
			5: SynergyLevel.Silver,
			7: SynergyLevel.Gold,
			10: SynergyLevel.Diamond
		}
	},
	{
		name: Faerie,
		levels: {
			2: SynergyLevel.Bronze,
			4: SynergyLevel.Silver,
			6: SynergyLevel.Gold,
			9: SynergyLevel.Diamond
		}
	},
	{
		name: Frost,
		levels: {
			3: SynergyLevel.Bronze,
			5: SynergyLevel.Silver,
			7: SynergyLevel.Gold,
			9: SynergyLevel.Diamond
		}
	},
	{
		name: Honeymancy,
		levels: {
			3: SynergyLevel.Bronze,
			5: SynergyLevel.Silver,
			7: SynergyLevel.Gold
		}
	},
	{
		name: Portal,
		levels: {
			3: SynergyLevel.Bronze,
			6: SynergyLevel.Silver,
			8: SynergyLevel.Gold,
			10: SynergyLevel.Diamond
		}
	},
	{
		name: Pyro,
		levels: {
			2: SynergyLevel.Bronze,
			3: SynergyLevel.Silver,
			4: SynergyLevel.Gold,
			5: SynergyLevel.Diamond
		}
	},
	{
		name: Ravenous,
		levels: {
			1: SynergyLevel.Bronze
		}
	},
	{
		name: Sugarcraft,
		levels: {
			2: SynergyLevel.Bronze,
			4: SynergyLevel.Silver,
			6: SynergyLevel.Gold
		}
	},
	{
		name: Witchcraft,
		levels: {
			2: SynergyLevel.Bronze,
			4: SynergyLevel.Silver,
			6: SynergyLevel.Gold,
			8: SynergyLevel.Diamond
		}
	},
	{
		name: Ascendant,
		levels: {
			1: SynergyLevel.Bronze
		}
	},
	{
		name: Bastion,
		levels: {
			2: SynergyLevel.Bronze,
			4: SynergyLevel.Silver,
			6: SynergyLevel.Gold,
			8: SynergyLevel.Diamond
		}
	},
	{
		name: BatQueen,
		levels: {
			1: SynergyLevel.Bronze
		}
	},
	{
		name: BestFriends,
		levels: {
			1: SynergyLevel.Bronze
		}
	},
	{
		name: Blaster,
		levels: {
			2: SynergyLevel.Bronze,
			4: SynergyLevel.Silver,
			6: SynergyLevel.Gold
		}
	},
	{
		name: Hunter,
		levels: {
			2: SynergyLevel.Bronze,
			4: SynergyLevel.Silver,
			6: SynergyLevel.Gold
		}
	},
	{
		name: Incantor,
		levels: {
			2: SynergyLevel.Bronze,
			4: SynergyLevel.Silver
		}
	},
	{
		name: Mage,
		levels: {
			3: SynergyLevel.Bronze,
			5: SynergyLevel.Silver,
			7: SynergyLevel.Gold,
			9: SynergyLevel.Diamond
		}
	},
	{
		name: Multistriker,
		levels: {
			3: SynergyLevel.Bronze,
			5: SynergyLevel.Silver,
			7: SynergyLevel.Gold,
			9: SynergyLevel.Diamond
		}
	},
	{
		name: Preserver,
		levels: {
			2: SynergyLevel.Bronze,
			3: SynergyLevel.Silver,
			4: SynergyLevel.Gold,
			5: SynergyLevel.Diamond
		}
	},
	{
		name: Scholar,
		levels: {
			2: SynergyLevel.Bronze,
			4: SynergyLevel.Silver,
			6: SynergyLevel.Gold
		}
	},
	{
		name: Shapeshifter,
		levels: {
			2: SynergyLevel.Bronze,
			4: SynergyLevel.Silver,
			6: SynergyLevel.Gold,
			8: SynergyLevel.Diamond
		}
	},
	{
		name: Vanguard,
		levels: {
			2: SynergyLevel.Bronze,
			4: SynergyLevel.Silver,
			6: SynergyLevel.Gold
		}
	},
	{
		name: Warrior,
		levels: {
			2: SynergyLevel.Bronze,
			4: SynergyLevel.Silver,
			6: SynergyLevel.Gold
		}
	}
];
