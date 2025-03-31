import * as ClassFeatures from '../Creature/Class/Feature';
import { expectContains, expectStringEnum } from './helpers';

describe('Class-specific feature collections', () => {
    it('BarbarianClassFeature should be a string-based enum', () => {
        expectStringEnum(ClassFeatures.BarbarianClassFeature);
    });
    it('BardClassFeature should be a string-based enum', () => {
        expectStringEnum(ClassFeatures.BardClassFeature);
    });
    it('ClericClassFeature should be a string-based enum', () => {
        expectStringEnum(ClassFeatures.ClericClassFeature);
    });
    it('DruidClassFeature should be a string-based enum', () => {
        expectStringEnum(ClassFeatures.DruidClassFeature);
    });
    it('FighterClassFeature should be a string-based enum', () => {
        expectStringEnum(ClassFeatures.FighterClassFeature);
    });
    it('MageClassFeature should be a string-based enum', () => {
        expectStringEnum(ClassFeatures.MageClassFeature);
    });
    it('MonkClassFeature should be a string-based enum', () => {
        expectStringEnum(ClassFeatures.MonkClassFeature);
    });
    it('OracleClassFeature should be a string-based enum', () => {
        expectStringEnum(ClassFeatures.OracleClassFeature);
    });
    it('RogueClassFeature should be a string-based enum', () => {
        expectStringEnum(ClassFeatures.RogueClassFeature);
    });
});
it('SharedClassFeature should be a string-based enum', () => {
    expectStringEnum(ClassFeatures.SharedClassFeature);
});

describe('ClassFeature', () => {
    it('ClassFeature should be a string-based enum-like object', () => {
        expectStringEnum(ClassFeatures.ClassFeature);
    });
    it('ClassFeature should contain all known class features', () => {
        expectContains(
            ClassFeatures.ClassFeature,
            ClassFeatures.BarbarianClassFeature,
            ClassFeatures.BardClassFeature,
            ClassFeatures.ClericClassFeature,
            ClassFeatures.DruidClassFeature,
            ClassFeatures.FighterClassFeature,
            ClassFeatures.MageClassFeature,
            ClassFeatures.MonkClassFeature,
            ClassFeatures.OracleClassFeature,
            ClassFeatures.RogueClassFeature,
            ClassFeatures.SharedClassFeature,
        );
    });
});
