import { LengthUnit, MassUnit, TimeUnit } from '../Units';
import { testStringEnum } from './helpers';

describe('Unit-related enums', () => {
    it('LengthUnit should be a string-based enum', () => {
        testStringEnum(LengthUnit);
    });
    it('MassUnit should be a string-based enum', () => {
        testStringEnum(MassUnit);
    });
    it('TimeUnit should be a string-based enum', () => {
        testStringEnum(TimeUnit);
    });
});
