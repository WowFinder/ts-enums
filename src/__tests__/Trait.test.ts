import * as Traits from '../Creature/Trait';

import {
    expectContains,
    expectEnumCount,
    expectStringEnum,
} from '../testingHelpers';

describe('Traits', () => {
    describe('BaseTrait', () => {
        it('BaseTrait should be a string-based enum', () => {
            expectStringEnum(Traits.BaseTrait);
        });
    });

    describe('CreatureTypeTrait', () => {
        it('CreatureTypeTrait should be a string-based enum', () => {
            expectStringEnum(Traits.CreatureTypeTrait);
        });
        it('CreatureTypeTrait should contain the correct number of traits', () => {
            expectEnumCount(Traits.CreatureTypeTrait, 32 * 3);
        });
    });

    describe('SpellLikeTrait', () => {
        it('SpellLikeTrait should be a string-based enum', () => {
            expectStringEnum(Traits.SpellLikeTrait);
        });
    });

    describe('StatTrait', () => {
        it('StatTrait should be a string-based enum', () => {
            expectStringEnum(Traits.StatTrait);
        });
        it('StatTrait should contain the correct number of traits', () => {
            expectEnumCount(Traits.StatTrait, 6);
        });
    });

    describe('InnateTrait wrapper', () => {
        it('InnateTrait should be a string-based enum-like object', () => {
            expectStringEnum(Traits.InnateTrait);
        });
        it('Trait should contain all known traits', () => {
            expectContains(
                Traits.InnateTrait,
                Traits.BaseTrait,
                Traits.CreatureTypeTrait,
                Traits.StatTrait,
            );
        });
    });
});
