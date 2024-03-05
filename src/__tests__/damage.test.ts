import {
    PhysicalDamageType,
    EnergyType,
    SpecialDamageType,
    DamageType,
    SpecialDamageModifier,
    DamageModifier,
    SpecialDamageRollMultiplier,
    DamageRollMultiplier,
} from '../Damage';
import { testStringEnum } from './helpers';

describe('Damage-related enums', () => {
    it('PhysicalDamageType should be a string-based enum', () => {
        testStringEnum(PhysicalDamageType);
    });
    it('EnergyType should be a string-based enum', () => {
        testStringEnum(EnergyType);
    });
    it('SpecialDamageType should be a string-based enum', () => {
        testStringEnum(SpecialDamageType);
    });
    it('DamageType should be a string-based enum', () => {
        testStringEnum(DamageType);
    });
    it('SpecialDamageModifier should be a string-based enum', () => {
        testStringEnum(SpecialDamageModifier);
    });
    it('DamageModifier should be a string-based enum', () => {
        testStringEnum(DamageModifier);
    });
    it('SpecialDamageRollMultiplier should be a string-based enum', () => {
        testStringEnum(SpecialDamageRollMultiplier);
    });
    it('DamageRollMultiplier should be a string-based enum', () => {
        testStringEnum(DamageRollMultiplier);
    });
});
