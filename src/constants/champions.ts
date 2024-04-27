import { Champion } from "../types/champion";
import { ChampionName } from "./champion-name";
import { SynergyName } from "./synergy-name";

const {
	Ghostly,
	Inkshadow,
	Bruiser,
	Fated,
	Arcanist,
	Umbral,
	Invoker,
	Porcelain,
	Warden,
	Fortune,
	Sniper,
	Dryad,
	Mythic,
	Trickshot,
	Behemoth,
	Duelist,
	Dragonlord,
	Sage,
	Storyweaver,
	Artist,
	Reaper,
	Heavenly,
	Lovers,
	Altruist,
	SpiritWalker,
	Great
} = SynergyName;

export const champions: Champion[] = [
	{
		name: ChampionName.Aatrox,
		synergies: [Ghostly, Inkshadow, Bruiser],
		cost: 2,
		range: 1
	},
	{
		name: ChampionName.Ahri,
		synergies: [Fated, Arcanist],
		cost: 1,
		range: 4
	},
	{
		name: ChampionName.Alune,
		synergies: [Umbral, Invoker],
		cost: 3,
		range: 4
	},
	{
		name: ChampionName.Amumu,
		synergies: [Porcelain, Warden],
		cost: 3,
		range: 1
	},
	{
		name: ChampionName.Annie,
		synergies: [Fortune, Invoker],
		cost: 4,
		range: 1
	},
	{
		name: ChampionName.Aphelios,
		synergies: [Fated, Sniper],
		cost: 3,
		range: 4
	},
	{
		name: ChampionName.Ashe,
		synergies: [Porcelain, Sniper],
		cost: 4,
		range: 4
	},
	{
		name: ChampionName.Azir,
		synergies: [Dryad, Invoker],
		cost: 5,
		range: 4
	},
	{
		name: ChampionName.Bard,
		synergies: [Mythic, Trickshot],
		cost: 3,
		range: 4
	},
	{
		name: ChampionName.Caitlyn,
		synergies: [Ghostly, Sniper],
		cost: 1,
		range: 4
	},
	{
		name: ChampionName.Chogath,
		synergies: [Behemoth, Mythic],
		cost: 1,
		range: 1
	},
	{
		name: ChampionName.Darius,
		synergies: [Umbral, Duelist],
		cost: 1,
		range: 1
	},
	{
		name: ChampionName.Diana,
		synergies: [Dragonlord, Sage],
		cost: 3,
		range: 1
	},
	{
		name: ChampionName.Galio,
		synergies: [Storyweaver, Bruiser],
		cost: 4,
		range: 1
	},
	{
		name: ChampionName.Garen,
		synergies: [Storyweaver, Warden],
		cost: 1,
		range: 1
	},
	{
		name: ChampionName.Gnar,
		synergies: [Dryad, Warden],
		cost: 2,
		range: 1
	},
	{
		name: ChampionName.Hwei,
		synergies: [Mythic, Artist],
		cost: 5,
		range: 4
	},
	{
		name: ChampionName.Illaoi,
		synergies: [Ghostly, Arcanist, Warden],
		cost: 3,
		range: 1
	},
	{
		name: ChampionName.Irelia,
		synergies: [Storyweaver, Duelist],
		cost: 5,
		range: 7
	},
	{
		name: ChampionName.Janna,
		synergies: [Dragonlord, Invoker],
		cost: 2,
		range: 4
	},
	{
		name: ChampionName.Jax,
		synergies: [Inkshadow, Warden],
		cost: 1,
		range: 1
	},
	{
		name: ChampionName.Kaisa,
		synergies: [Inkshadow, Trickshot],
		cost: 4,
		range: 4
	},
	{
		name: ChampionName.Kayn,
		synergies: [Ghostly, Reaper],
		cost: 4,
		range: 1
	},
	{
		name: ChampionName.Khazix,
		synergies: [Heavenly, Reaper],
		cost: 1,
		range: 1
	},
	{
		name: ChampionName.Kindred,
		synergies: [Dryad, Fated, Reaper],
		cost: 2,
		range: 4
	},
	{
		name: ChampionName.Kobuko,
		synergies: [Fortune, Bruiser],
		cost: 1,
		range: 1
	},
	{
		name: ChampionName.KogMaw,
		synergies: [Mythic, Invoker, Sniper],
		cost: 1,
		range: 3
	},
	{
		name: ChampionName.LeeSin,
		synergies: [Dragonlord, Duelist],
		cost: 4,
		range: 1
	},
	{
		name: ChampionName.Lillia,
		synergies: [Mythic, Invoker],
		cost: 4,
		range: 4
	},
	{
		name: ChampionName.Lissandra,
		synergies: [Porcelain, Arcanist],
		cost: 5,
		range: 3
	},
	{
		name: ChampionName.Lux,
		synergies: [Porcelain, Arcanist],
		cost: 2,
		range: 4
	},
	{
		name: ChampionName.Malphite,
		synergies: [Heavenly, Behemoth],
		cost: 1,
		range: 1
	},
	{
		name: ChampionName.Morgana,
		synergies: [Ghostly, Sage],
		cost: 4,
		range: 4
	},
	{
		name: ChampionName.Nautilus,
		synergies: [Mythic, Warden],
		cost: 4,
		range: 1
	},
	{
		name: ChampionName.Neeko,
		synergies: [Heavenly, Mythic, Arcanist],
		cost: 2,
		range: 1
	},
	{
		name: ChampionName.Ornn,
		synergies: [Dryad, Behemoth],
		cost: 4,
		range: 1
	},
	{
		name: ChampionName.Qiyana,
		synergies: [Heavenly, Duelist],
		cost: 2,
		range: 1
	},
	{
		name: ChampionName.Rakan,
		synergies: [Dragonlord, Lovers, Altruist],
		cost: 5,
		range: 2
	},
	{
		name: ChampionName.RekSai,
		synergies: [Dryad, Bruiser],
		cost: 1,
		range: 1
	},
	{
		name: ChampionName.Riven,
		synergies: [Storyweaver, Altruist, Bruiser],
		cost: 2,
		range: 1
	},
	{
		name: ChampionName.Senna,
		synergies: [Inkshadow, Sniper],
		cost: 2,
		range: 4
	},
	{
		name: ChampionName.Sett,
		synergies: [Fated, Umbral, Warden],
		cost: 5,
		range: 1
	},
	{
		name: ChampionName.Shen,
		synergies: [Ghostly, Behemoth],
		cost: 2,
		range: 1
	},
	{
		name: ChampionName.Sivir,
		synergies: [Storyweaver, Trickshot],
		cost: 1,
		range: 4
	},
	{
		name: ChampionName.Soraka,
		synergies: [Heavenly, Altruist],
		cost: 3,
		range: 4
	},
	{
		name: ChampionName.Sylas,
		synergies: [Umbral, Bruiser],
		cost: 4,
		range: 1
	},
	{
		name: ChampionName.Syndra,
		synergies: [Fated, Arcanist],
		cost: 4,
		range: 4
	},
	{
		name: ChampionName.TahmKench,
		synergies: [Mythic, Bruiser],
		cost: 3,
		range: 1
	},
	{
		name: ChampionName.Teemo,
		synergies: [Fortune, Trickshot],
		cost: 2,
		range: 4
	},
	{
		name: ChampionName.Thresh,
		synergies: [Fated, Behemoth],
		cost: 3,
		range: 2
	},
	{
		name: ChampionName.Tristana,
		synergies: [Fortune, Duelist],
		cost: 3,
		range: 4
	},
	{
		name: ChampionName.Udyr,
		synergies: [Inkshadow, Behemoth, SpiritWalker],
		cost: 5,
		range: 1
	},
	{
		name: ChampionName.Volibear,
		synergies: [Inkshadow, Duelist],
		cost: 3,
		range: 1
	},
	{
		name: ChampionName.Wukong,
		synergies: [Heavenly, Great, Sage],
		cost: 5,
		range: 1
	},
	{
		name: ChampionName.Xayah,
		synergies: [Dragonlord, Lovers, Trickshot],
		cost: 5,
		range: 4
	},
	{
		name: ChampionName.Yasuo,
		synergies: [Fated, Duelist],
		cost: 1,
		range: 1
	},
	{
		name: ChampionName.Yone,
		synergies: [Umbral, Reaper],
		cost: 2,
		range: 1
	},
	{
		name: ChampionName.Yorick,
		synergies: [Umbral, Behemoth],
		cost: 2,
		range: 1
	},
	{
		name: ChampionName.Zoe,
		synergies: [Fortune, Storyweaver, Arcanist],
		cost: 3,
		range: 4
	},
	{
		name: ChampionName.Zyra,
		synergies: [Storyweaver, Sage],
		cost: 2,
		range: 4
	}
];
