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
} from 'Item';
import { testStringEnum } from './helpers';

describe('Item-related enums', () => {
    it('Rarity should be a string-based enum', () => {
        testStringEnum(Rarity);
    });
    it('GearSlot should be a string-based enum', () => {
        testStringEnum(GearSlot);
    });
    describe('Armor-related enums', () => {
        it('ArmorBonusType should be a string-based enum', () => {
            testStringEnum(ArmorBonusType);
        });
        it('ArmorFlags should be a string-based enum', () => {
            testStringEnum(ArmorFlags);
        });
        it('ArmorType should be a string-based enum', () => {
            testStringEnum(ArmorType);
        });
    });
    describe('Weapon-related enums', () => {
        it('SimpleWeaponProficiency should be a string-based enum', () => {
            testStringEnum(SimpleWeaponProficiency);
        });
        it('MartialWeaponProficiency should be a string-based enum', () => {
            testStringEnum(MartialWeaponProficiency);
        });
        it('ExoticWeaponProficiency should be a string-based enum', () => {
            testStringEnum(ExoticWeaponProficiency);
        });
        it('WeaponProficiency should be a string-based enum', () => {
            testStringEnum(WeaponProficiency);
        });
        it('WeaponFlags should be a string-based enum', () => {
            testStringEnum(WeaponFlags);
        });
        it('WeaponGroup should be a string-based enum', () => {
            testStringEnum(WeaponGroup);
        });
        it('WeaponRank should be a string-based enum', () => {
            testStringEnum(WeaponRank);
        });
    });
});
