import {
    ArmorBonusType,
    ArmorFlags,
    ArmorType,
    ExoticWeaponProficiency,
    GearSlot,
    MartialWeaponProficiency,
    Rarity,
    SimpleWeaponProficiency,
    WeaponFlags,
    WeaponGroup,
    WeaponProficiency,
    WeaponRank,
} from '../Item';
import { expectContains, expectStringEnum } from '../testingHelpers';

describe('Item-related enums', () => {
    it('Rarity should be a string-based enum', () => {
        expectStringEnum(Rarity);
    });
    it('GearSlot should be a string-based enum', () => {
        expectStringEnum(GearSlot);
    });
    describe('Armor-related enums', () => {
        it('ArmorBonusType should be a string-based enum', () => {
            expectStringEnum(ArmorBonusType);
        });
        it('ArmorFlags should be a string-based enum', () => {
            expectStringEnum(ArmorFlags);
        });
        it('ArmorType should be a string-based enum', () => {
            expectStringEnum(ArmorType);
        });
    });
    describe('Weapon-related enums', () => {
        it('SimpleWeaponProficiency should be a string-based enum', () => {
            expectStringEnum(SimpleWeaponProficiency);
        });
        it('MartialWeaponProficiency should be a string-based enum', () => {
            expectStringEnum(MartialWeaponProficiency);
        });
        it('ExoticWeaponProficiency should be a string-based enum', () => {
            expectStringEnum(ExoticWeaponProficiency);
        });
        it('WeaponProficiency should be a string-based enum-like object', () => {
            expectStringEnum(WeaponProficiency);
        });
        it('WeaponProficiency should contain all proficiency values (simple, martial, exotic)', () => {
            expectContains(
                WeaponProficiency,
                SimpleWeaponProficiency,
                MartialWeaponProficiency,
                ExoticWeaponProficiency,
            );
        });
        it('WeaponFlags should be a string-based enum', () => {
            expectStringEnum(WeaponFlags);
        });
        it('WeaponGroup should be a string-based enum', () => {
            expectStringEnum(WeaponGroup);
        });
        it('WeaponRank should be a string-based enum', () => {
            expectStringEnum(WeaponRank);
        });
    });
});
