import { BaseTrait } from './BaseTrait';
import { CreatureTypeTrait } from './CreatureTypeTrait';
import { SpellLikeTrait } from './SpellLikeTrait';
import { StatTrait } from './StatTrait';

const InnateTrait = {
    ...BaseTrait,
    ...CreatureTypeTrait,
    ...SpellLikeTrait,
    ...StatTrait,
} as const;

Object.freeze(InnateTrait);

type InnateTrait = keyof typeof InnateTrait;

export { InnateTrait };
