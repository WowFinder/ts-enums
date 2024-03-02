import * as Action from '../Action';
import { testStringEnum } from './helpers';
describe('Action-related enums', () => {
    it('FlyManeuverability should be a string-based enum', () => {
        testStringEnum(Action.FlyManeuverability);
    });
    it('ActionLength should be a string-based enum', () => {
        testStringEnum(Action.ActionLength);
    });
});
