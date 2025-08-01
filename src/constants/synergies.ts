import type { Synergy } from "../types/synergy";
import { SynergyLevel } from "./synergy-level";
import { SynergyName } from "./synergy-name";

const {
	BattleAcademia,
	CrystalGambit,
	Luchador,
	Mentor,
	MightyMech,
	MonsterTrainer,
	RogueCaptain,
	Rosemother,
	SoulFighter,
	StanceMaster,
	StarGuardian,
	SupremeCells,
	TheChamp,
	TheCrew,
	Wraith,
	// TFT Classes
	Bastion,
	Duelist,
	Edgelord,
	Executioner,
	Heavyweight,
	Juggernaut,
	Prodigy,
	Protector,
	Sniper,
	Sorcerer,
	Strategist,
} = SynergyName;

export const synergies: Synergy[] = [
	{
		name: BattleAcademia,
		levels: {
			3: SynergyLevel.Bronze,
			5: SynergyLevel.Silver,
			7: SynergyLevel.Gold,
		},
	},
	{
		name: CrystalGambit,
		levels: {
			3: SynergyLevel.Bronze,
			5: SynergyLevel.Silver,
			7: SynergyLevel.Gold,
		},
	},
	{
		name: Luchador,
		levels: {
			2: SynergyLevel.Bronze,
			4: SynergyLevel.Silver,
		},
	},
	{
		name: Mentor,
		levels: {
			1: SynergyLevel.Bronze,
			4: SynergyLevel.Silver,
		},
	},
	{
		name: MightyMech,
		levels: {
			3: SynergyLevel.Bronze,
			5: SynergyLevel.Silver,
			7: SynergyLevel.Gold,
		},
	},
	{
		name: MonsterTrainer,
		levels: {
			1: SynergyLevel.Bronze,
		},
	},
	{
		name: RogueCaptain,
		levels: {
			1: SynergyLevel.Bronze,
		},
	},
	{
		name: Rosemother,
		levels: {
			1: SynergyLevel.Bronze,
		},
	},
	{
		name: SoulFighter,
		levels: {
			2: SynergyLevel.Bronze,
			4: SynergyLevel.Silver,
			6: SynergyLevel.Gold,
			8: SynergyLevel.Diamond,
		},
	},
	{
		name: StanceMaster,
		levels: {
			1: SynergyLevel.Bronze,
		},
	},
	{
		name: StarGuardian,
		levels: {
			2: SynergyLevel.Bronze,
			3: SynergyLevel.Silver,
			4: SynergyLevel.Gold,
			5: SynergyLevel.Gold,
			6: SynergyLevel.Gold,
			7: SynergyLevel.Gold,
			8: SynergyLevel.Gold,
		},
	},
	{
		name: SupremeCells,
		levels: {
			2: SynergyLevel.Bronze,
			3: SynergyLevel.Silver,
			4: SynergyLevel.Gold,
		},
	},
	{
		name: TheChamp,
		levels: {
			1: SynergyLevel.Bronze,
		},
	},
	{
		name: TheCrew,
		levels: {
			2: SynergyLevel.Bronze,
		},
	},
	{
		name: Wraith,
		levels: {
			2: SynergyLevel.Bronze,
			4: SynergyLevel.Silver,
			6: SynergyLevel.Gold,
		},
	},
	// TFT Classes
	{
		name: Bastion,
		levels: {
			2: SynergyLevel.Bronze,
			4: SynergyLevel.Silver,
			6: SynergyLevel.Gold,
		},
	},
	{
		name: Duelist,
		levels: {
			2: SynergyLevel.Bronze,
			4: SynergyLevel.Silver,
			6: SynergyLevel.Gold,
		},
	},
	{
		name: Edgelord,
		levels: {
			2: SynergyLevel.Bronze,
			4: SynergyLevel.Silver,
			6: SynergyLevel.Gold,
		},
	},
	{
		name: Executioner,
		levels: {
			2: SynergyLevel.Bronze,
			3: SynergyLevel.Silver,
			4: SynergyLevel.Gold,
			5: SynergyLevel.Gold,
		},
	},
	{
		name: Heavyweight,
		levels: {
			2: SynergyLevel.Bronze,
			4: SynergyLevel.Silver,
			6: SynergyLevel.Gold,
		},
	},
	{
		name: Juggernaut,
		levels: {
			2: SynergyLevel.Bronze,
			4: SynergyLevel.Silver,
			6: SynergyLevel.Gold,
		},
	},
	{
		name: Prodigy,
		levels: {
			2: SynergyLevel.Bronze,
			3: SynergyLevel.Silver,
			4: SynergyLevel.Gold,
			5: SynergyLevel.Gold,
		},
	},
	{
		name: Protector,
		levels: {
			2: SynergyLevel.Bronze,
			4: SynergyLevel.Silver,
			6: SynergyLevel.Gold,
		},
	},
	{
		name: Sniper,
		levels: {
			2: SynergyLevel.Bronze,
			3: SynergyLevel.Silver,
			4: SynergyLevel.Gold,
			5: SynergyLevel.Gold,
		},
	},
	{
		name: Sorcerer,
		levels: {
			2: SynergyLevel.Bronze,
			4: SynergyLevel.Silver,
			6: SynergyLevel.Gold,
		},
	},
	{
		name: Strategist,
		levels: {
			2: SynergyLevel.Bronze,
			3: SynergyLevel.Silver,
			4: SynergyLevel.Gold,
			5: SynergyLevel.Gold,
		},
	},
];
