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

export const champions: Champion[] = [
	// Battle Academia
	{
		name: ChampionName.Caitlyn,
		synergies: [BattleAcademia, Sniper],
		cost: 3,
		range: 4,
	},
	{
		name: ChampionName.Ezreal,
		synergies: [BattleAcademia, Prodigy],
		cost: 1,
		range: 4,
	},
	{
		name: ChampionName.Garen,
		synergies: [BattleAcademia, Bastion],
		cost: 1,
		range: 1,
	},
	{
		name: ChampionName.Jayce,
		synergies: [BattleAcademia, Heavyweight],
		cost: 3,
		range: 1,
	},
	{
		name: ChampionName.Katarina,
		synergies: [BattleAcademia, Executioner],
		cost: 2,
		range: 1,
	},
	{
		name: ChampionName.Leona,
		synergies: [BattleAcademia, Bastion],
		cost: 4,
		range: 1,
	},
	{
		name: ChampionName.Rakan,
		synergies: [BattleAcademia, Protector],
		cost: 2,
		range: 1,
	},
	{
		name: ChampionName.Yuumi,
		synergies: [BattleAcademia, Prodigy],
		cost: 4,
		range: 4,
	},
	// Crystal Gambit
	{
		name: ChampionName.Ashe,
		synergies: [CrystalGambit, Duelist],
		cost: 4,
		range: 4,
	},
	{
		name: ChampionName.Janna,
		synergies: [CrystalGambit, Protector, Strategist],
		cost: 2,
		range: 4,
	},
	{
		name: ChampionName.Swain,
		synergies: [CrystalGambit, Bastion, Sorcerer],
		cost: 3,
		range: 2,
	},
	{
		name: ChampionName.Syndra,
		synergies: [CrystalGambit, Prodigy],
		cost: 1,
		range: 4,
	},
	{
		name: ChampionName.Vi,
		synergies: [CrystalGambit, Juggernaut],
		cost: 2,
		range: 1,
	},
	// Luchador
	{
		name: ChampionName.Braum,
		synergies: [Luchador, TheChamp, Bastion],
		cost: 5,
		range: 1,
	},
	{
		name: ChampionName.DrMundo,
		synergies: [Luchador, Juggernaut],
		cost: 2,
		range: 1,
	},
	{
		name: ChampionName.Gnar,
		synergies: [Luchador, Sniper],
		cost: 1,
		range: 1,
	},
	{
		name: ChampionName.Volibear,
		synergies: [Luchador, Edgelord],
		cost: 4,
		range: 1,
	},
	// Mentor
	{
		name: ChampionName.Kobuko,
		synergies: [Mentor, Heavyweight],
		cost: 2,
		range: 1,
	},
	{
		name: ChampionName.Ryze,
		synergies: [Mentor, Executioner, Strategist],
		cost: 4,
		range: 4,
	},
	{
		name: ChampionName.Udyr,
		synergies: [Mentor, Duelist, Juggernaut],
		cost: 3,
		range: 1,
	},
	{
		name: ChampionName.Yasuo,
		synergies: [Mentor, Edgelord],
		cost: 3,
		range: 1,
	},
	// Mighty Mech
	{
		name: ChampionName.Aatrox,
		synergies: [MightyMech, Heavyweight, Juggernaut],
		cost: 1,
		range: 1,
	},
	{
		name: ChampionName.Gangplank,
		synergies: [MightyMech, Duelist],
		cost: 2,
		range: 1,
	},
	{
		name: ChampionName.JarvanIV,
		synergies: [MightyMech, Strategist],
		cost: 4,
		range: 1,
	},
	{
		name: ChampionName.Karma,
		synergies: [MightyMech, Sorcerer],
		cost: 4,
		range: 4,
	},
	{
		name: ChampionName.Lucian,
		synergies: [MightyMech, Sorcerer],
		cost: 1,
		range: 4,
	},
	{
		name: ChampionName.Senna,
		synergies: [MightyMech, Executioner],
		cost: 3,
		range: 4,
	},
	{
		name: ChampionName.Yone,
		synergies: [MightyMech, Edgelord],
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
		synergies: [SoulFighter, Sorcerer],
		cost: 5,
		range: 1,
	},
	{
		name: ChampionName.Kalista,
		synergies: [SoulFighter, Executioner],
		cost: 1,
		range: 4,
	},
	{
		name: ChampionName.Lux,
		synergies: [SoulFighter, Sorcerer],
		cost: 2,
		range: 4,
	},
	{
		name: ChampionName.Naafiri,
		synergies: [SoulFighter, Juggernaut],
		cost: 1,
		range: 1,
	},
	{
		name: ChampionName.Samira,
		synergies: [SoulFighter, Edgelord],
		cost: 4,
		range: 4,
	},
	{
		name: ChampionName.Sett,
		synergies: [SoulFighter, Juggernaut],
		cost: 4,
		range: 1,
	},
	{
		name: ChampionName.Viego,
		synergies: [SoulFighter, Duelist],
		cost: 3,
		range: 1,
	},
	{
		name: ChampionName.XinZhao,
		synergies: [SoulFighter, Bastion],
		cost: 2,
		range: 1,
	},
	// Stance Master
	{
		name: ChampionName.LeeSin,
		synergies: [StanceMaster, Duelist, Executioner, Juggernaut],
		cost: 5,
		range: 1,
	},
	// Star Guardian
	{
		name: ChampionName.Ahri,
		synergies: [StarGuardian, Sorcerer],
		cost: 3,
		range: 4,
	},
	{
		name: ChampionName.Jinx,
		synergies: [StarGuardian, Sniper],
		cost: 4,
		range: 4,
	},
	{
		name: ChampionName.Neeko,
		synergies: [StarGuardian, Protector],
		cost: 3,
		range: 1,
	},
	{
		name: ChampionName.Poppy,
		synergies: [StarGuardian, Heavyweight],
		cost: 4,
		range: 1,
	},
	{
		name: ChampionName.Rell,
		synergies: [StarGuardian, Bastion],
		cost: 1,
		range: 1,
	},
	{
		name: ChampionName.Seraphine,
		synergies: [StarGuardian, Prodigy],
		cost: 5,
		range: 4,
	},
	{
		name: ChampionName.Xayah,
		synergies: [StarGuardian, Edgelord],
		cost: 2,
		range: 4,
	},
	// Supreme Cells
	{
		name: ChampionName.Akali,
		synergies: [SupremeCells, Executioner],
		cost: 4,
		range: 1,
	},
	{
		name: ChampionName.Darius,
		synergies: [SupremeCells, Heavyweight],
		cost: 3,
		range: 1,
	},
	{
		name: ChampionName.Kaisa,
		synergies: [SupremeCells, Duelist],
		cost: 2,
		range: 4,
	},
	{
		name: ChampionName.Kennen,
		synergies: [SupremeCells, Protector, Sorcerer],
		cost: 1,
		range: 4,
	},
	// The Crew
	{
		name: ChampionName.Malphite,
		synergies: [TheCrew, Protector],
		cost: 1,
		range: 1,
	},
	{
		name: ChampionName.Shen,
		synergies: [TheCrew, Bastion, Edgelord],
		cost: 2,
		range: 1,
	},
	{
		name: ChampionName.Sivir,
		synergies: [TheCrew, Sniper],
		cost: 1,
		range: 4,
	},
	{
		name: ChampionName.Ziggs,
		synergies: [TheCrew, Strategist],
		cost: 3,
		range: 4,
	},
	// Wraith
	{
		name: ChampionName.Jhin,
		synergies: [Wraith, Sniper],
		cost: 2,
		range: 4,
	},
	{
		name: ChampionName.KSante,
		synergies: [Wraith, Protector],
		cost: 4,
		range: 1,
	},
	{
		name: ChampionName.Kayle,
		synergies: [Wraith, Duelist],
		cost: 1,
		range: 4,
	},
	{
		name: ChampionName.Malzahar,
		synergies: [Wraith, Prodigy],
		cost: 3,
		range: 4,
	},
	{
		name: ChampionName.Varus,
		synergies: [Wraith, Sniper],
		cost: 5,
		range: 4,
	},
	{
		name: ChampionName.Zac,
		synergies: [Wraith, Heavyweight],
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
