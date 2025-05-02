import { LengthUnit, MassUnit, TimeUnit } from '../Units';
import { expectStringEnum } from '../testingHelpers';

describe('Unit-related enums', () => {
    it('LengthUnit should be a string-based enum', () => {
        expectStringEnum(LengthUnit);
    });
    it('MassUnit should be a string-based enum', () => {
        expectStringEnum(MassUnit);
    });
    it('TimeUnit should be a string-based enum', () => {
        expectStringEnum(TimeUnit);
    });
});
