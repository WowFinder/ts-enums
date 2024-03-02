import * as Magic from '../Magic';
import { testStringEnum } from './helpers';

describe('Magic-related enums', () => {
    it('School should be a string-based enum', () => {
        testStringEnum(Magic.School);
    });
    it('SubSchool should be a string-based enum', () => {
        testStringEnum(Magic.SubSchool);
    });
    it('SpellDescriptor should be a string-based enum', () => {
        testStringEnum(Magic.SpellDescriptor);
    });
    it('SpellCoreComponent should be a string-based enum', () => {
        testStringEnum(Magic.SpellCoreComponent);
    });
    it('StandardRange should be a string-based enum', () => {
        testStringEnum(Magic.StandardRange);
    });
    it('SpellSaveEffect should be a string-based enum', () => {
        testStringEnum(Magic.SpellSaveEffect);
    });
});
