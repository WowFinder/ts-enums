import { CreatureType } from '../Type';
import { CreatureSubType } from '../SubType';

type NonHumanoidCreatureType = Exclude<CreatureType, CreatureType.humanoid>;
type MixedType = Capitalize<NonHumanoidCreatureType | CreatureSubType>;

const mixedTypeKeysCapitalized = [
    ...Object.keys(CreatureType).filter((type) => type !== 'humanoid'),
    ...Object.keys(CreatureSubType),
].map((type) => type.charAt(0).toUpperCase() + type.slice(1));

type AncientFoeKey = `ancientFoe${MixedType}`;
type DefensiveTrainingKey = `defensiveTraining${MixedType}`;
type HatredKey = `hatred${MixedType}`;

type CreatureTypeTraitKey = AncientFoeKey | DefensiveTrainingKey | HatredKey;

const CreatureTypeTrait = {
    ...mixedTypeKeysCapitalized.reduce(
        (acc, type) => {
            const ancientFoeKey = `ancientFoe${type}` as AncientFoeKey;
            acc[ancientFoeKey] = ancientFoeKey;
            const defensiveTrainingKey = `defensiveTraining${type}` as DefensiveTrainingKey;
            acc[defensiveTrainingKey] = defensiveTrainingKey;
            const hatredKey = `hatred${type}` as HatredKey;
            acc[hatredKey] = hatredKey;
            return acc;
        },
        {} as Record<CreatureTypeTraitKey, CreatureTypeTraitKey>,
    ),
} as const;

Object.freeze(CreatureTypeTrait);

type CreatureTypeTrait = keyof typeof CreatureTypeTrait;

export { CreatureTypeTrait };







