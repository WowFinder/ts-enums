import * as Creature from '../Creature';
import { testStringEnum, testNumericEnum } from './helpers';

describe('Creature-related enums', () => {
    it('Alignment should be a string-based enum', () => {
        testStringEnum(Creature.Alignment);
    });
    it('AlignmentDescriptor should be a string-based enum', () => {
        testStringEnum(Creature.AlignmentDescriptor);
    });
    it('Size should be a numeric enum', () => {
        testNumericEnum(Creature.Size);
    });
    it('Skill should be a string-based enum', () => {
        testStringEnum(Creature.Skill);
    });
    it('StatKey should be a string-based enum', () => {
        testStringEnum(Creature.StatKey);
    });
});
