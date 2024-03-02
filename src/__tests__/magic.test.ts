import {
    School,
    SpellCoreComponent,
    SpellDescriptor,
    SpellSaveEffect,
    StandardRange,
    SubSchool,
} from '../Magic';
import { testStringEnum } from './helpers';

describe('Magic-related enums', () => {
    it('School should be a string-based enum', () => {
        testStringEnum(School);
    });
    it('SubSchool should be a string-based enum', () => {
        testStringEnum(SubSchool);
    });
    it('SpellDescriptor should be a string-based enum', () => {
        testStringEnum(SpellDescriptor);
    });
    it('SpellCoreComponent should be a string-based enum', () => {
        testStringEnum(SpellCoreComponent);
    });
    it('StandardRange should be a string-based enum', () => {
        testStringEnum(StandardRange);
    });
    it('SpellSaveEffect should be a string-based enum', () => {
        testStringEnum(SpellSaveEffect);
    });
});
