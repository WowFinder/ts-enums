import {
    School,
    SpellCoreComponent,
    SpellDescriptor,
    SpellSaveEffect,
    StandardRange,
    SubSchool,
    subSchoolParents,
} from '../Magic';
import { expectStringEnum } from './helpers';

describe('Magic-related enums', () => {
    it('School should be a string-based enum', () => {
        expectStringEnum(School);
    });
    it('SubSchool should be a string-based enum', () => {
        expectStringEnum(SubSchool);
    });
    it('SpellDescriptor should be a string-based enum', () => {
        expectStringEnum(SpellDescriptor);
    });
    it('SpellCoreComponent should be a string-based enum', () => {
        expectStringEnum(SpellCoreComponent);
    });
    it('StandardRange should be a string-based enum', () => {
        expectStringEnum(StandardRange);
    });
    it('SpellSaveEffect should be a string-based enum', () => {
        expectStringEnum(SpellSaveEffect);
    });
    it('subSchoolParents should be an exhaustive mapping from SubSchool to School', () => {
        for (const subSchool of Object.values(SubSchool)) {
            expect(subSchoolParents[subSchool]).toBeDefined();
            expect(School[subSchoolParents[subSchool]]).toBeDefined();
        }
    });
});
