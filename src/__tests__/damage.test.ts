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
import { expectContains, expectStringEnum } from './helpers';

describe('Damage-related enums', () => {
    it('PhysicalDamageType should be a string-based enum', () => {
        expectStringEnum(PhysicalDamageType);
    });
    it('EnergyType should be a string-based enum', () => {
        expectStringEnum(EnergyType);
    });
    it('SpecialDamageType should be a string-based enum', () => {
        expectStringEnum(SpecialDamageType);
    });
    it('DamageType should be a string-based enum', () => {
        expectStringEnum(DamageType);
    });
    it('SpecialDamageModifier should be a string-based enum', () => {
        expectStringEnum(SpecialDamageModifier);
    });
    it('DamageModifier should be a string-based enum', () => {
        expectStringEnum(DamageModifier);
        expectContains(DamageModifier, SpecialDamageModifier);
    });
    it('SpecialDamageRollMultiplier should be a string-based enum', () => {
        expectStringEnum(SpecialDamageRollMultiplier);
    });
    it('DamageRollMultiplier should be a string-based enum', () => {
        expectStringEnum(DamageRollMultiplier);
        expectContains(DamageRollMultiplier, SpecialDamageRollMultiplier);
    });
});
