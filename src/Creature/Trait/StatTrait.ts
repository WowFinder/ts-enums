import { Stat } from '../Stat';

type AdvancedStatTraitKey = `advanced${Capitalize<Stat>}`;

const StatTrait = {
    ...Object.keys(Stat).reduce(
        (acc, stat) => {
            const key = `advanced${stat.charAt(0).toUpperCase()}${stat.slice(1)}` as AdvancedStatTraitKey;
            acc[key] = key;
            return acc;
        },
        {} as Record<AdvancedStatTraitKey, AdvancedStatTraitKey>,
    ),
} as const;

Object.freeze(StatTrait);

type StatTrait = keyof typeof StatTrait;

export { StatTrait };
