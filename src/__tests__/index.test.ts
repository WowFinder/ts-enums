import * as Enums from '../index';
import { testStringEnum } from './helpers';

describe('Global enums', () => {
    it('Languages should be a string-based enum', () => {
        testStringEnum(Enums.Languages);
    });
    describe('Damage-related enums', () => {
        it('PhysicalDamageType should be a string-based enum', () => {
            testStringEnum(Enums.PhysicalDamageType);
        });
        it('EnergyType should be a string-based enum', () => {
            testStringEnum(Enums.EnergyType);
        });
        it('SpecialDamageType should be a string-based enum', () => {
            testStringEnum(Enums.SpecialDamageType);
        });
        it('DamageType should be a string-based enum', () => {
            testStringEnum(Enums.DamageType);
        });
    });
});
