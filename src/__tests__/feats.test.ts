import { CoreFeat } from '../Creature/Feat/core';

describe('CoreFeat', () => {
    const keys = Object.keys(CoreFeat);
    keys.sort();
    describe('should have the correct value for each key', () => {
        keys.forEach(key => {
            it(key, () => {
                expect(key).toEqual(CoreFeat[key as keyof typeof CoreFeat]);
            });
        });
    });
    it('should define exactly 449 entries', () => {
        expect(keys.length).toEqual(449);
    });
});
