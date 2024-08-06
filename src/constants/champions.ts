import type { Champion } from "../types/champion";
import { ChampionName } from "./champion-name";
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

export const champions: Champion[] = [
	{
		name: ChampionName.Ashe,
		synergies: [Eldritch, Multistriker],
		cost: 1,
		range: 4
	},
	{
		name: ChampionName.Blitzcrank,
		synergies: [Honeymancy, Vanguard],
		cost: 1,
		range: 1
	},
	{
		name: ChampionName.Elise,
		synergies: [Eldritch, Shapeshifter],
		cost: 1,
		range: 1
	},
	{
		name: ChampionName.Jax,
		synergies: [Chrono, Multistriker],
		cost: 1,
		range: 1
	},
	{
		name: ChampionName.Jayce,
		synergies: [Portal, Shapeshifter],
		cost: 1,
		range: 1
	},
	{
		name: ChampionName.Lillia,
		synergies: [Faerie, Bastion],
		cost: 1,
		range: 4
	},
	{
		name: ChampionName.Nomsy,
		synergies: [Dragon, Hunter],
		cost: 1,
		range: 1
	},
	{
		name: ChampionName.Poppy,
		synergies: [Witchcraft, Bastion],
		cost: 1,
		range: 1
	},
	{
		name: ChampionName.Seraphine,
		synergies: [Faerie, Mage],
		cost: 1,
		range: 4
	},
	{
		name: ChampionName.Soraka,
		synergies: [Sugarcraft, Mage],
		cost: 1,
		range: 4
	},
	{
		name: ChampionName.Twitch,
		synergies: [Frost, Hunter],
		cost: 1,
		range: 4
	},
	{
		name: ChampionName.Warwick,
		synergies: [Frost, Vanguard],
		cost: 1,
		range: 1
	},
	{
		name: ChampionName.Ahri,
		synergies: [Arcana, Scholar],
		cost: 2,
		range: 4
	},
	{
		name: ChampionName.Akali,
		synergies: [Pyro, Warrior, Multistriker],
		cost: 2,
		range: 1
	},
	{
		name: ChampionName.Cassiopeia,
		synergies: [Witchcraft, Incantor],
		cost: 2,
		range: 4
	},
	{
		name: ChampionName.Galio,
		synergies: [Portal, Vanguard, Mage],
		cost: 2,
		range: 1
	},
	{
		name: ChampionName.Kassadin,
		synergies: [Portal, Multistriker],
		cost: 2,
		range: 1
	},
	{
		name: ChampionName.KogMaw,
		synergies: [Honeymancy, Hunter],
		cost: 2,
		range: 4
	},
	{
		name: ChampionName.Nilah,
		synergies: [Eldritch, Warrior],
		cost: 2,
		range: 1
	},
	{
		name: ChampionName.Nunu,
		synergies: [Honeymancy, Bastion],
		cost: 2,
		range: 1
	},
	{
		name: ChampionName.Rumble,
		synergies: [Sugarcraft, Vanguard, Blaster],
		cost: 2,
		range: 1
	},
	{
		name: ChampionName.Shyvana,
		synergies: [Dragon, Shapeshifter],
		cost: 2,
		range: 1
	},
	{
		name: ChampionName.Syndra,
		synergies: [Eldritch, Incantor],
		cost: 2,
		range: 4
	},
	{
		name: ChampionName.Tristana,
		synergies: [Faerie, Blaster],
		cost: 2,
		range: 4
	},
	{
		name: ChampionName.Bard,
		synergies: [Sugarcraft, Preserver, Scholar],
		cost: 3,
		range: 4
	},
	{
		name: ChampionName.Ezreal,
		synergies: [Portal, Blaster],
		cost: 3,
		range: 4
	},
	{
		name: ChampionName.Hecarim,
		synergies: [Arcana, Bastion, Multistriker],
		cost: 3,
		range: 1
	},
	{
		name: ChampionName.Hwei,
		synergies: [Frost, Blaster],
		cost: 3,
		range: 4
	},
	{
		name: ChampionName.Jinx,
		synergies: [Sugarcraft, Hunter],
		cost: 3,
		range: 4
	},
	{
		name: ChampionName.Mordekaiser,
		synergies: [Eldritch, Vanguard],
		cost: 3,
		range: 1
	},
	{
		name: ChampionName.Neeko,
		synergies: [Witchcraft, Shapeshifter],
		cost: 3,
		range: 1
	},
	{
		name: ChampionName.Shen,
		synergies: [Pyro, Bastion],
		cost: 3,
		range: 1
	},
	{
		name: ChampionName.Swain,
		synergies: [Frost, Shapeshifter],
		cost: 3,
		range: 1
	},
	{
		name: ChampionName.Veigar,
		synergies: [Honeymancy, Mage],
		cost: 3,
		range: 4
	},
	{
		name: ChampionName.Vex,
		synergies: [Chrono, Mage],
		cost: 3,
		range: 4
	},
	{
		name: ChampionName.Wukong,
		synergies: [Druid],
		cost: 3,
		range: 1
	},
	{
		name: ChampionName.Fiora,
		synergies: [Witchcraft, Warrior],
		cost: 4,
		range: 1
	},
	{
		name: ChampionName.Katarina,
		synergies: [Faerie, Warrior],
		cost: 3,
		range: 1
	},
	{
		name: ChampionName.Gwen,
		synergies: [Sugarcraft, Warrior],
		cost: 4,
		range: 1
	},
	{
		name: ChampionName.Kalista,
		synergies: [Faerie, Multistriker],
		cost: 4,
		range: 4
	},
	{
		name: ChampionName.Karma,
		synergies: [Chrono, Incantor],
		cost: 4,
		range: 4
	},
	{
		name: ChampionName.Nami,
		synergies: [Eldritch, Mage],
		cost: 4,
		range: 4
	},
	{
		name: ChampionName.Nasus,
		synergies: [Pyro, Shapeshifter],
		cost: 4,
		range: 1
	},
	{
		name: ChampionName.Olaf,
		synergies: [Frost, Hunter],
		cost: 4,
		range: 1
	},
	{
		name: ChampionName.Rakan,
		synergies: [Faerie, Preserver],
		cost: 4,
		range: 1
	},
	{
		name: ChampionName.Ryze,
		synergies: [Portal, Scholar],
		cost: 4,
		range: 4
	},
	{
		name: ChampionName.TahmKench,
		synergies: [Arcana, Vanguard],
		cost: 4,
		range: 1
	},
	{
		name: ChampionName.Taric,
		synergies: [Portal, Bastion],
		cost: 4,
		range: 1
	},
	{
		name: ChampionName.Briar,
		synergies: [Ravenous, Eldritch, Shapeshifter],
		cost: 5,
		range: 1
	},
	{
		name: ChampionName.Camille,
		synergies: [Chrono, Multistriker],
		cost: 5,
		range: 1
	},
	{
		name: ChampionName.Diana,
		synergies: [Frost, Bastion],
		cost: 5,
		range: 1
	},
	{
		name: ChampionName.Milio,
		synergies: [Faerie, Scholar],
		cost: 5,
		range: 4
	},
	{
		name: ChampionName.Morgana,
		synergies: [Witchcraft, BatQueen, Preserver],
		cost: 5,
		range: 4
	},
	{
		name: ChampionName.NorraAndYuumi,
		synergies: [Portal, BestFriends, Mage],
		cost: 5,
		range: 4
	},
	{
		name: ChampionName.Smolder,
		synergies: [Dragon, Blaster],
		cost: 5,
		range: 1
	},
	{
		name: ChampionName.Xerath,
		synergies: [Arcana, Ascendant],
		cost: 5,
		range: 4
	},
	{
		name: ChampionName.Zilean,
		synergies: [Chrono, Preserver, Frost],
		cost: 2,
		range: 4
	},
	{
		name: ChampionName.Zoe,
		synergies: [Witchcraft, Scholar, Portal],
		cost: 1,
		range: 4
	},
	{
		name: ChampionName.Ziggs,
		synergies: [Honeymancy, Incantor],
		cost: 1,
		range: 4
	},
	{
		name: ChampionName.Varus,
		synergies: [Pyro, Blaster],
		cost: 4,
		range: 4
	}
];
