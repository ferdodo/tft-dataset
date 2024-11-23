import type { Synergy } from "../types/synergy";
import { SynergyLevel } from "./synergy-level";
import { SynergyName } from "./synergy-name";

const {
	Academy,
	Automata,
	BlackRose,
	ChemBaron,
	Conqueror,
	Emissary,
	Enforcer,
	Experiment,
	Family,
	Firelight,
	HighRoller,
	JunkerKing,
	Rebel,
	Scrap,
	Ambusher,
	Artillerist,
	Bruiser,
	Dominator,
	FormSwapper,
	PitFighter,
	Quickstriker,
	Sentinel,
	Sniper,
	Sorcerer,
	Visionary,
	Watcher,
} = SynergyName;

export const synergies: Synergy[] = [
	{
		name: Conqueror,
		levels: {
			2: SynergyLevel.Bronze,
			4: SynergyLevel.Silver,
			6: SynergyLevel.Gold,
			9: SynergyLevel.Diamond,
		},
	},
	{
		name: Emissary,
		levels: {
			1: SynergyLevel.Bronze,
			4: SynergyLevel.Gold,
		},
	},
	{
		name: Rebel,
		levels: {
			3: SynergyLevel.Bronze,
			5: SynergyLevel.Silver,
			7: SynergyLevel.Gold,
			10: SynergyLevel.Diamond,
		},
	},

	{
		name: Sorcerer,
		levels: {
			2: SynergyLevel.Bronze,
			4: SynergyLevel.Silver,
			6: SynergyLevel.Gold,
			8: SynergyLevel.Gold,
		},
	},
	{
		name: Academy,
		levels: {
			3: SynergyLevel.Bronze,
			4: SynergyLevel.Silver,
			5: SynergyLevel.Gold,
			6: SynergyLevel.Gold,
		},
	},
	{
		name: Automata,
		levels: {
			2: SynergyLevel.Bronze,
			4: SynergyLevel.Silver,
			6: SynergyLevel.Gold,
		},
	},
	{
		name: BlackRose,
		levels: {
			3: SynergyLevel.Bronze,
			4: SynergyLevel.Silver,
			5: SynergyLevel.Gold,
			7: SynergyLevel.Gold,
		},
	},
	{
		name: ChemBaron,
		levels: {
			3: SynergyLevel.Bronze,
			4: SynergyLevel.Silver,
			5: SynergyLevel.Silver,
			6: SynergyLevel.Silver,
			7: SynergyLevel.Gold,
		},
	},
	{
		name: Enforcer,
		levels: {
			2: SynergyLevel.Bronze,
			4: SynergyLevel.Silver,
			6: SynergyLevel.Silver,
			8: SynergyLevel.Gold,
			10: SynergyLevel.Diamond,
		},
	},
	{
		name: Experiment,
		levels: {
			3: SynergyLevel.Bronze,
			5: SynergyLevel.Silver,
			7: SynergyLevel.Gold,
		},
	},
	{
		name: Family,
		levels: {
			3: SynergyLevel.Bronze,
			4: SynergyLevel.Silver,
			5: SynergyLevel.Gold,
		},
	},
	{
		name: Firelight,
		levels: {
			2: SynergyLevel.Bronze,
			3: SynergyLevel.Silver,
			4: SynergyLevel.Gold,
		},
	},
	{
		name: HighRoller,
		levels: {
			1: SynergyLevel.Bronze,
		},
	},
	{
		name: JunkerKing,
		levels: {
			1: SynergyLevel.Bronze,
		},
	},
	{
		name: Scrap,
		levels: {
			2: SynergyLevel.Bronze,
			4: SynergyLevel.Silver,
			6: SynergyLevel.Gold,
			9: SynergyLevel.Diamond,
		},
	},
	{
		name: Ambusher,
		levels: {
			2: SynergyLevel.Bronze,
			3: SynergyLevel.Silver,
			4: SynergyLevel.Silver,
			5: SynergyLevel.Gold,
		},
	},
	{
		name: Artillerist,
		levels: {
			2: SynergyLevel.Bronze,
			4: SynergyLevel.Silver,
			6: SynergyLevel.Gold,
		},
	},
	{
		name: Bruiser,
		levels: {
			2: SynergyLevel.Bronze,
			4: SynergyLevel.Silver,
			6: SynergyLevel.Gold,
		},
	},
	{
		name: Dominator,
		levels: {
			2: SynergyLevel.Bronze,
			4: SynergyLevel.Silver,
			6: SynergyLevel.Gold,
		},
	},
	{
		name: FormSwapper,
		levels: {
			2: SynergyLevel.Bronze,
			4: SynergyLevel.Silver,
		},
	},
	{
		name: PitFighter,
		levels: {
			2: SynergyLevel.Bronze,
			4: SynergyLevel.Silver,
			6: SynergyLevel.Silver,
			8: SynergyLevel.Gold,
		},
	},
	{
		name: Quickstriker,
		levels: {
			2: SynergyLevel.Bronze,
			3: SynergyLevel.Silver,
			4: SynergyLevel.Gold,
		},
	},
	{
		name: Sentinel,
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
			4: SynergyLevel.Silver,
			6: SynergyLevel.Gold,
		},
	},
	{
		name: Sorcerer,
		levels: {
			2: SynergyLevel.Bronze,
			4: SynergyLevel.Silver,
			6: SynergyLevel.Silver,
			8: SynergyLevel.Gold,
		},
	},
	{
		name: Visionary,
		levels: {
			2: SynergyLevel.Bronze,
			4: SynergyLevel.Silver,
			6: SynergyLevel.Silver,
			8: SynergyLevel.Gold,
		},
	},
	{
		name: Watcher,
		levels: {
			2: SynergyLevel.Bronze,
			4: SynergyLevel.Silver,
			6: SynergyLevel.Gold,
		},
	},
];
