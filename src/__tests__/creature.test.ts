import {
    Alignment,
    AlignmentDescriptor,
    Size,
    Skill,
    Stat,
    StatGroup,
    Aura,
    ClassTier,
    FeatFlag,
} from '../Creature';
import { testStringEnum, testNumericEnum } from './helpers';

describe('Creature-related enums', () => {
    it('Alignment should be a string-based enum', () => {
        testStringEnum(Alignment);
    });
    it('AlignmentDescriptor should be a string-based enum', () => {
        testStringEnum(AlignmentDescriptor);
    });
    it('Size should be a numeric enum', () => {
        testNumericEnum(Size);
    });
    it('Skill should be a string-based enum', () => {
        testStringEnum(Skill);
    });
    it('StatKey should be a string-based enum', () => {
        testStringEnum(Stat);
    });
    it('StatGroup should be a string-based enum', () => {
        testStringEnum(StatGroup);
    });
    describe('Class-related enums', () => {
        it('Aura should be a string-based enum', () => {
            testStringEnum(Aura);
        });
        it('ClassTier should be a string-based enum', () => {
            testStringEnum(ClassTier);
        });
    });
    describe('Feat-related enums', () => {
        it('FeatFlag should be a string-based enum', () => {
            testStringEnum(FeatFlag);
        });
    });
});
