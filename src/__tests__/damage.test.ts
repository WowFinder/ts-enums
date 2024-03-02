import {
    PhysicalDamageType,
    EnergyType,
    SpecialDamageType,
    DamageType,
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
});
