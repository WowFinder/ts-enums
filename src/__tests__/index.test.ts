import {
    Languages,
    Reputation,
    Feature,
    ClassFeature,
    InnateTrait,
} from '../index';
import { expectStringEnum } from '../testingHelpers';

describe('Global enums', () => {
    it('Languages should be a string-based enum', () => {
        expectStringEnum(Languages);
    });
    it('Reputation should be a string-based enum', () => {
        expectStringEnum(Reputation);
    });
    it('ClassFeature and InnateTrait must not have overlapping keys', () => {
        const classFeatureKeys = Object.keys(ClassFeature);
        const innateTraitKeys = Object.keys(InnateTrait);
        classFeatureKeys.forEach(key => {
            expect(innateTraitKeys).not.toContain(key);
        });
        innateTraitKeys.forEach(key => {
            expect(classFeatureKeys).not.toContain(key);
        });
    });
    it('Feature should be a string-based enum', () => {
        expectStringEnum(Feature);
    });
    it('The number of features should be equal to the sum of ClassFeature and InnateTrait', () => {
        const featureKeys = Object.keys(Feature);
        const classFeatureKeys = Object.keys(ClassFeature);
        const innateTraitKeys = Object.keys(InnateTrait);
        expect(featureKeys.length).toBe(
            classFeatureKeys.length + innateTraitKeys.length,
        );
    });
});
