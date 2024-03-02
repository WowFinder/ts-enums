import { FlyManeuverability, ActionLength } from '../Action';
import { testStringEnum } from './helpers';
describe('Action-related enums', () => {
    it('FlyManeuverability should be a string-based enum', () => {
        testStringEnum(FlyManeuverability);
    });
    it('ActionLength should be a string-based enum', () => {
        testStringEnum(ActionLength);
    });
});
