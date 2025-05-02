import { Languages, Reputation } from '../index';
import { expectStringEnum } from '../testingHelpers';

describe('Global enums', () => {
    it('Languages should be a string-based enum', () => {
        expectStringEnum(Languages);
    });
    it('Reputation should be a string-based enum', () => {
        expectStringEnum(Reputation);
    });
});
