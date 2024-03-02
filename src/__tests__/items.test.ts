import * as Items from '../Item';
import { testStringEnum } from './helpers';

describe('Item-related enums', () => {
    it('Rarity should be a string-based enum', () => {
        testStringEnum(Items.Rarity);
    });
    it('GearSlot should be a string-based enum', () => {
        testStringEnum(Items.GearSlot);
    });
    describe('Armor-related enums', () => {
        it('ArmorBonusType should be a string-based enum', () => {
            testStringEnum(Items.ArmorBonusType);
        });
        it('ArmorFlags should be a string-based enum', () => {
            testStringEnum(Items.ArmorFlags);
        });
        it('ArmorType should be a string-based enum', () => {
            testStringEnum(Items.ArmorType);
        });
    });
    describe('Weapon-related enums', () => {
        it('SimpleWeaponProficiency should be a string-based enum', () => {
            testStringEnum(Items.SimpleWeaponProficiency);
        });
        it('MartialWeaponProficiency should be a string-based enum', () => {
            testStringEnum(Items.MartialWeaponProficiency);
        });
        it('ExoticWeaponProficiency should be a string-based enum', () => {
            testStringEnum(Items.ExoticWeaponProficiency);
        });
        it('WeaponProficiency should be a string-based enum', () => {
            testStringEnum(Items.WeaponProficiency);
        });
        it('WeaponFlags should be a string-based enum', () => {
            testStringEnum(Items.WeaponFlags);
        });
        it('WeaponGroup should be a string-based enum', () => {
            testStringEnum(Items.WeaponGroup);
        });
        it('WeaponRank should be a string-based enum', () => {
            testStringEnum(Items.WeaponRank);
        });
    });
});
