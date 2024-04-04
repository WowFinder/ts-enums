import { CombatBaseFeat } from './base';
import { CombatDualWieldFeat } from './dual';
import { CombatMobilityFeat } from './mobility';
import { CombatPowerFeat } from './power';
import { CombatShieldFeat } from './shield';
import { CombatVitalStrikeFeat } from './vitalStrike';
import { WeaponFeat } from './weapon';

type CombatFeatKey =
    | CombatBaseFeat
    | CombatMobilityFeat
    | CombatPowerFeat
    | CombatVitalStrikeFeat
    | CombatShieldFeat
    | CombatDualWieldFeat
    | WeaponFeat;

const CombatFeat: Record<CombatFeatKey, CombatFeatKey> = {
    ...CombatBaseFeat,
    ...CombatMobilityFeat,
    ...CombatPowerFeat,
    ...CombatVitalStrikeFeat,
    ...CombatShieldFeat,
    ...CombatDualWieldFeat,
    ...WeaponFeat,
} as const;

export type CombatFeat = keyof typeof CombatFeat;

export { CombatFeat };
