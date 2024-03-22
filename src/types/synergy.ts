import { SynergyName } from "../constants/synergy-name";
import { SynergyLevel } from "../constants/synergy-level";

export interface Synergy {
	name: SynergyName;
	levels: Record<number, SynergyLevel>;
}
