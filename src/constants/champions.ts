import type { Champion } from "../types/champion";
import { ChampionName } from "./champion-name";
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
} = SynergyName;

export const champions: Champion[] = [
	// Battle Academia
	{
		name: ChampionName.Caitlyn,
		synergies: [BattleAcademia],
		cost: 3,
		range: 4,
	},
	{
		name: ChampionName.Ezreal,
		synergies: [BattleAcademia],
		cost: 1,
		range: 4,
	},
	{
		name: ChampionName.Garen,
		synergies: [BattleAcademia],
		cost: 1,
		range: 1,
	},
	{
		name: ChampionName.Jayce,
		synergies: [BattleAcademia],
		cost: 3,
		range: 1,
	},
	{
		name: ChampionName.Katarina,
		synergies: [BattleAcademia],
		cost: 2,
		range: 1,
	},
	{
		name: ChampionName.Leona,
		synergies: [BattleAcademia],
		cost: 4,
		range: 1,
	},
	{
		name: ChampionName.Rakan,
		synergies: [BattleAcademia],
		cost: 2,
		range: 1,
	},
	{
		name: ChampionName.Yuumi,
		synergies: [BattleAcademia],
		cost: 4,
		range: 4,
	},
	// Crystal Gambit
	{
		name: ChampionName.Ashe,
		synergies: [CrystalGambit],
		cost: 4,
		range: 4,
	},
	{
		name: ChampionName.Janna,
		synergies: [CrystalGambit],
		cost: 2,
		range: 4,
	},
	{
		name: ChampionName.Swain,
		synergies: [CrystalGambit],
		cost: 3,
		range: 2,
	},
	{
		name: ChampionName.Syndra,
		synergies: [CrystalGambit],
		cost: 1,
		range: 4,
	},
	{
		name: ChampionName.Vi,
		synergies: [CrystalGambit],
		cost: 2,
		range: 1,
	},
	// Luchador
	{
		name: ChampionName.Braum,
		synergies: [Luchador, TheChamp],
		cost: 5,
		range: 1,
	},
	{
		name: ChampionName.DrMundo,
		synergies: [Luchador],
		cost: 2,
		range: 1,
	},
	{
		name: ChampionName.Gnar,
		synergies: [Luchador],
		cost: 1,
		range: 1,
	},
	{
		name: ChampionName.Volibear,
		synergies: [Luchador],
		cost: 4,
		range: 1,
	},
	// Mentor
	{
		name: ChampionName.Kobuko,
		synergies: [Mentor],
		cost: 2,
		range: 1,
	},
	{
		name: ChampionName.Ryze,
		synergies: [Mentor],
		cost: 4,
		range: 4,
	},
	{
		name: ChampionName.Udyr,
		synergies: [Mentor],
		cost: 3,
		range: 1,
	},
	{
		name: ChampionName.Yasuo,
		synergies: [Mentor],
		cost: 3,
		range: 1,
	},
	// Mighty Mech
	{
		name: ChampionName.Aatrox,
		synergies: [MightyMech],
		cost: 1,
		range: 1,
	},
	{
		name: ChampionName.Gangplank,
		synergies: [MightyMech],
		cost: 2,
		range: 1,
	},
	{
		name: ChampionName.JarvanIV,
		synergies: [MightyMech],
		cost: 4,
		range: 1,
	},
	{
		name: ChampionName.Karma,
		synergies: [MightyMech],
		cost: 4,
		range: 4,
	},
	{
		name: ChampionName.Lucian,
		synergies: [MightyMech],
		cost: 1,
		range: 4,
	},
	{
		name: ChampionName.Senna,
		synergies: [MightyMech],
		cost: 3,
		range: 4,
	},
	{
		name: ChampionName.Yone,
		synergies: [MightyMech],
		cost: 5,
		range: 1,
	},
	// Monster Trainer
	{
		name: ChampionName.Kogmaw,
		synergies: [MonsterTrainer],
		cost: 3,
		range: 4,
	},
	{
		name: ChampionName.Lulu,
		synergies: [MonsterTrainer],
		cost: 3,
		range: 4,
	},
	{
		name: ChampionName.Rammus,
		synergies: [MonsterTrainer],
		cost: 3,
		range: 1,
	},
	{
		name: ChampionName.Smolder,
		synergies: [MonsterTrainer],
		cost: 3,
		range: 4,
	},
	// Rogue Captain
	{
		name: ChampionName.TwistedFate,
		synergies: [RogueCaptain],
		cost: 5,
		range: 4,
	},
	// Soul Fighter
	{
		name: ChampionName.Gwen,
		synergies: [SoulFighter],
		cost: 5,
		range: 1,
	},
	{
		name: ChampionName.Kalista,
		synergies: [SoulFighter],
		cost: 1,
		range: 4,
	},
	{
		name: ChampionName.Lux,
		synergies: [SoulFighter],
		cost: 2,
		range: 4,
	},
	{
		name: ChampionName.Naafiri,
		synergies: [SoulFighter],
		cost: 1,
		range: 1,
	},
	{
		name: ChampionName.Samira,
		synergies: [SoulFighter],
		cost: 4,
		range: 1,
	},
	{
		name: ChampionName.Sett,
		synergies: [SoulFighter],
		cost: 4,
		range: 1,
	},
	{
		name: ChampionName.Viego,
		synergies: [SoulFighter],
		cost: 3,
		range: 1,
	},
	{
		name: ChampionName.XinZhao,
		synergies: [SoulFighter],
		cost: 2,
		range: 1,
	},
	// Stance Master
	{
		name: ChampionName.LeeSin,
		synergies: [StanceMaster],
		cost: 5,
		range: 1,
	},
	// Star Guardian
	{
		name: ChampionName.Ahri,
		synergies: [StarGuardian],
		cost: 3,
		range: 4,
	},
	{
		name: ChampionName.Jinx,
		synergies: [StarGuardian],
		cost: 4,
		range: 4,
	},
	{
		name: ChampionName.Neeko,
		synergies: [StarGuardian],
		cost: 3,
		range: 1,
	},
	{
		name: ChampionName.Poppy,
		synergies: [StarGuardian],
		cost: 4,
		range: 1,
	},
	{
		name: ChampionName.Rell,
		synergies: [StarGuardian],
		cost: 1,
		range: 1,
	},
	{
		name: ChampionName.Seraphine,
		synergies: [StarGuardian],
		cost: 5,
		range: 4,
	},
	{
		name: ChampionName.Xayah,
		synergies: [StarGuardian],
		cost: 2,
		range: 4,
	},
	// Supreme Cells
	{
		name: ChampionName.Akali,
		synergies: [SupremeCells],
		cost: 4,
		range: 1,
	},
	{
		name: ChampionName.Darius,
		synergies: [SupremeCells],
		cost: 3,
		range: 1,
	},
	{
		name: ChampionName.Kaisa,
		synergies: [SupremeCells],
		cost: 2,
		range: 4,
	},
	{
		name: ChampionName.Kennen,
		synergies: [SupremeCells],
		cost: 1,
		range: 4,
	},
	// The Crew
	{
		name: ChampionName.Malphite,
		synergies: [TheCrew],
		cost: 1,
		range: 1,
	},
	{
		name: ChampionName.Shen,
		synergies: [TheCrew],
		cost: 2,
		range: 1,
	},
	{
		name: ChampionName.Sivir,
		synergies: [TheCrew],
		cost: 1,
		range: 4,
	},
	{
		name: ChampionName.Ziggs,
		synergies: [TheCrew],
		cost: 3,
		range: 4,
	},
	// Wraith
	{
		name: ChampionName.Jhin,
		synergies: [Wraith],
		cost: 2,
		range: 4,
	},
	{
		name: ChampionName.KSante,
		synergies: [Wraith],
		cost: 4,
		range: 1,
	},
	{
		name: ChampionName.Kayle,
		synergies: [Wraith],
		cost: 1,
		range: 4,
	},
	{
		name: ChampionName.Malzahar,
		synergies: [Wraith],
		cost: 3,
		range: 4,
	},
	{
		name: ChampionName.Varus,
		synergies: [Wraith],
		cost: 5,
		range: 4,
	},
	{
		name: ChampionName.Zac,
		synergies: [Wraith],
		cost: 1,
		range: 1,
	},
	// Rosemother (Zyra est dans Crystal Gambit et Rosemother)
	{
		name: ChampionName.Zyra,
		synergies: [CrystalGambit, Rosemother],
		cost: 5,
		range: 4,
	},
];
