import { AssetType } from '../Asset';
import { expectStringEnum } from '../testingHelpers';

describe('Asset-related enums', () => {
    it('AssetType should be a string-based enum', () => {
        expectStringEnum(AssetType);
    });
});
