import { FlyManeuverability, ActionLength } from '../Action';
import { expectStringEnum } from '../testingHelpers';
describe('Action-related enums', () => {
    it('FlyManeuverability should be a string-based enum', () => {
        expectStringEnum(FlyManeuverability);
    });
    it('ActionLength should be a string-based enum', () => {
        expectStringEnum(ActionLength);
    });
});
