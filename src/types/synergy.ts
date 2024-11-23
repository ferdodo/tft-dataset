import type { SynergyName } from "../constants/synergy-name";
import type { SynergyLevel } from "../constants/synergy-level";

export interface Synergy {
	name: SynergyName;
	levels: Record<number, SynergyLevel>;
}
