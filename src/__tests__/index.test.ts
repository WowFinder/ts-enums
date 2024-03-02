import { Languages, Reputation } from '../index';
import { testStringEnum } from './helpers';

describe('Global enums', () => {
    it('Languages should be a string-based enum', () => {
        testStringEnum(Languages);
    });
    it('Reputation should be a string-based enum', () => {
        testStringEnum(Reputation);
    });
});
