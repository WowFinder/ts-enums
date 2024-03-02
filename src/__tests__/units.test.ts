import * as Units from '../Units';
import { testStringEnum } from './helpers';

describe('Unit-related enums', () => {
    it('LengthUnit should be a string-based enum', () => {
        testStringEnum(Units.LengthUnit);
    });
    it('MassUnit should be a string-based enum', () => {
        testStringEnum(Units.MassUnit);
    });
    it('TimeUnit should be a string-based enum', () => {
        testStringEnum(Units.TimeUnit);
    });
});
