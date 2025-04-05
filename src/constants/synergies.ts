import type { Synergy } from "../types/synergy";
import { SynergyLevel } from "./synergy-level";
import { SynergyName } from "./synergy-name";

const {
	AnimaSquad,
	BoomBots,
	Cyberboss,
	Cypher,
	Divinicorp,
	Exotech,
	GodOfTheNet,
	GoldenOx,
	Nitro,
	Overlord,
	SoulKiller,
	StreetDemon,
	Syndicate,
	Virus,
	AMP,
	Bastion,
	Bruiser,
	Dynamo,
	Executioner,
	Marksman,
	Rapidfire,
	Slayer,
	Strategist,
	Techie,
	Vanguard,
} = SynergyName;

export const synergies: Synergy[] = [
	{
		name: AnimaSquad,
		levels: {
			3: SynergyLevel.Bronze,
			5: SynergyLevel.Silver,
			7: SynergyLevel.Gold,
			10: SynergyLevel.Diamond,
		},
	},
	{
		name: BoomBots,
		levels: {
			2: SynergyLevel.Bronze,
			4: SynergyLevel.Silver,
			6: SynergyLevel.Gold,
		},
	},
	{
		name: Cyberboss,
		levels: {
			2: SynergyLevel.Bronze,
			3: SynergyLevel.Silver,
			4: SynergyLevel.Gold,
		},
	},
	{
		name: Cypher,
		levels: {
			3: SynergyLevel.Bronze,
			4: SynergyLevel.Silver,
			5: SynergyLevel.Gold,
		},
	},
	{
		name: Divinicorp,
		levels: {
			1: SynergyLevel.Bronze,
			2: SynergyLevel.Silver,
			3: SynergyLevel.Silver,
			4: SynergyLevel.Gold,
			5: SynergyLevel.Gold,
			6: SynergyLevel.Gold,
			7: SynergyLevel.Diamond,
		},
	},
	{
		name: Exotech,
		levels: {
			3: SynergyLevel.Bronze,
			5: SynergyLevel.Silver,
			7: SynergyLevel.Gold,
			10: SynergyLevel.Diamond,
		},
	},
	{
		name: GodOfTheNet,
		levels: {
			1: SynergyLevel.Bronze,
		},
	},
	{
		name: GoldenOx,
		levels: {
			2: SynergyLevel.Bronze,
			4: SynergyLevel.Silver,
			6: SynergyLevel.Gold,
		},
	},
	{
		name: Nitro,
		levels: {
			3: SynergyLevel.Bronze,
			4: SynergyLevel.Gold,
		},
	},
	{
		name: Overlord,
		levels: {
			1: SynergyLevel.Bronze,
		},
	},
	{
		name: SoulKiller,
		levels: {
			1: SynergyLevel.Bronze,
		},
	},
	{
		name: StreetDemon,
		levels: {
			3: SynergyLevel.Bronze,
			5: SynergyLevel.Silver,
			7: SynergyLevel.Gold,
			10: SynergyLevel.Diamond,
		},
	},
	{
		name: Syndicate,
		levels: {
			3: SynergyLevel.Bronze,
			5: SynergyLevel.Silver,
			7: SynergyLevel.Gold,
		},
	},
	{
		name: Virus,
		levels: {
			1: SynergyLevel.Bronze,
		},
	},
	{
		name: AMP,
		levels: {
			2: SynergyLevel.Bronze,
			3: SynergyLevel.Silver,
			4: SynergyLevel.Gold,
			5: SynergyLevel.Gold,
		},
	},
	{
		name: Bastion,
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
		name: Dynamo,
		levels: {
			2: SynergyLevel.Bronze,
			3: SynergyLevel.Silver,
			4: SynergyLevel.Gold,
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
		name: Marksman,
		levels: {
			2: SynergyLevel.Bronze,
			4: SynergyLevel.Gold,
		},
	},
	{
		name: Rapidfire,
		levels: {
			2: SynergyLevel.Bronze,
			4: SynergyLevel.Silver,
			6: SynergyLevel.Gold,
		},
	},
	{
		name: Slayer,
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
	{
		name: Techie,
		levels: {
			2: SynergyLevel.Bronze,
			4: SynergyLevel.Silver,
			6: SynergyLevel.Gold,
			8: SynergyLevel.Diamond,
		},
	},
	{
		name: Vanguard,
		levels: {
			2: SynergyLevel.Bronze,
			4: SynergyLevel.Silver,
			6: SynergyLevel.Gold,
		},
	},
];
