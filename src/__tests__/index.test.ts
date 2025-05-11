import { Languages, Reputation, Feature, ClassFeature, InnateTrait } from '../index';
import { expectStringEnum } from '../testingHelpers';

describe('Global enums', () => {
    it('Languages should be a string-based enum', () => {
        expectStringEnum(Languages);
    });
    it('Reputation should be a string-based enum', () => {
        expectStringEnum(Reputation);
    });
    it('Feature should be a string-based enum', () => {
        expectStringEnum(Feature);
    });
    it('The number of features should be equal to the sum of ClassFeature and InnateTrait', () => {
        // This also implies no key conflicts between ClassFeature and InnateTrait
        const featureKeys = Object.keys(Feature);
        const classFeatureKeys = Object.keys(ClassFeature);
        const innateTraitKeys = Object.keys(InnateTrait);
        expect(featureKeys.length).toBe(classFeatureKeys.length + innateTraitKeys.length);
        expect(featureKeys).toEqual([...classFeatureKeys, ...innateTraitKeys]);
    });
});
