import { AssetType } from '../Asset';
import { testStringEnum } from './helpers';

describe('Asset-related enums', () => {
    it('AssetType should be a string-based enum', () => {
        testStringEnum(AssetType);
    });
});
