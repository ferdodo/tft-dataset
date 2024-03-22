import { ChampionName } from "../constants/champion-name";
import { SynergyName } from "../constants/synergy-name";

export interface Champion {
	name: ChampionName;
	synergies: SynergyName[];
	cost: 1 | 2 | 3 | 4 | 5;
	range: number;
}
