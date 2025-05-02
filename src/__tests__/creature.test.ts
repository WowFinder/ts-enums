import {
    Alignment,
    AlignmentDescriptor,
    BreathingMedium,
    Size,
    Skill,
    Stat,
    StatGroup,
    Aura,
    ClassTier,
    FeatFlag,
    CreatureSubType,
    CreatureType,
    statsOrder,
} from '../Creature';
import { expectStringEnum, expectNumericEnum } from '../testingHelpers';

describe('Creature-related enums', () => {
    it('Alignment should be a string-based enum', () => {
        expectStringEnum(Alignment);
    });
    it('AlignmentDescriptor should be a string-based enum', () => {
        expectStringEnum(AlignmentDescriptor);
    });
    it('BreathingMedium should be a string-based enum', () => {
        expectStringEnum(BreathingMedium);
    });
    it('Size should be a numeric enum', () => {
        expectNumericEnum(Size);
    });
    it('Skill should be a string-based enum', () => {
        expectStringEnum(Skill);
    });
    it('StatKey should be a string-based enum', () => {
        expectStringEnum(Stat);
    });
    it('StatGroup should be a string-based enum', () => {
        expectStringEnum(StatGroup);
    });
    it('All keys of Stat should be in the statsOrder array', () => {
        const statKeys = Object.keys(Stat) as (keyof typeof Stat)[];
        for (const statKey of statKeys) {
            expect(statsOrder).toContain(statKey);
        }
    });
    describe('Class-related enums', () => {
        it('Aura should be a string-based enum', () => {
            expectStringEnum(Aura);
        });
        it('ClassTier should be a string-based enum', () => {
            expectStringEnum(ClassTier);
        });
        // Class features covered in ClassFeature.test.ts
    });
    describe('Feat-related enums', () => {
        it('FeatFlag should be a string-based enum', () => {
            expectStringEnum(FeatFlag);
        });
    });
    describe('Creature type and subtype enums', () => {
        it('CreatureSubType should be a string-based enum', () => {
            expectStringEnum(CreatureSubType);
        });
        it('CreatureType should be a string-based enum', () => {
            expectStringEnum(CreatureType);
        });
    });
});
