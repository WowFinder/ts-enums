import {
    School,
    SpellCoreComponent,
    SpellDescriptor,
    SpellSaveEffect,
    StandardRange,
    SubSchool,
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
});
