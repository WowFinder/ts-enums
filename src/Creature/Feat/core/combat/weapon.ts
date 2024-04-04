import { capitalizeFirstLetter } from '@wowfinder/ts-utils';
import {
    ExoticWeaponProficiency,
    MartialWeaponProficiency,
    SimpleWeaponProficiency,
} from 'Item/Gear/Weapon/Proficiency/index';

type CompoundKey<
    Prefix extends string,
    Keys extends string,
> = `${Prefix}${Capitalize<Keys>}`;

function compoundKey(prefix: string, key: string): string {
    return `${prefix}${capitalizeFirstLetter(key)}`;
}

type NonSimpleWeaponKey = MartialWeaponProficiency | ExoticWeaponProficiency;

type WeaponKey =
    | SimpleWeaponProficiency
    | MartialWeaponProficiency
    | ExoticWeaponProficiency;

const nonSimpleWeapons: Record<NonSimpleWeaponKey, NonSimpleWeaponKey> = {
    ...MartialWeaponProficiency,
    ...ExoticWeaponProficiency,
} as const;

const allWeapons: Record<WeaponKey, WeaponKey> = {
    ...SimpleWeaponProficiency,
    ...nonSimpleWeapons,
} as const;

const nonProficiencyPrefixes = {
    focus: 'weaponFocus',
    gFocus: 'greaterWeaponFocus',
    spec: 'weaponSpecialization',
    gSpec: 'greaterWeaponSpecialization',
} as const;

const prefixes = {
    prof: 'proficiency',
    ...nonProficiencyPrefixes,
} as const;

type WeaponFeatKeyPrefix = (typeof prefixes)[keyof typeof prefixes];

type ProficiencyWeaponFeatKeyPrefix = 'proficiency';
type NonProficiencyWeaponFeatKeyPrefix = Exclude<
    WeaponFeatKeyPrefix,
    ProficiencyWeaponFeatKeyPrefix
>;

type ProficiencySimpleWeaponFeatKey = CompoundKey<
    ProficiencyWeaponFeatKeyPrefix,
    'simpleWeapon'
>;

type ProficiencyNonSimpleWeaponFeatKey = CompoundKey<
    ProficiencyWeaponFeatKeyPrefix,
    NonSimpleWeaponKey
>;

type ProficiencyFeatKey =
    | ProficiencySimpleWeaponFeatKey
    | ProficiencyNonSimpleWeaponFeatKey;

type NonProficencyWeaponFeatKey = CompoundKey<
    NonProficiencyWeaponFeatKeyPrefix,
    WeaponKey
>;

type WeaponFeatKey = ProficiencyFeatKey | NonProficencyWeaponFeatKey;

const WeaponFeat: Record<WeaponFeatKey, WeaponFeatKey> = {
    proficiencySimpleWeapon: 'proficiencySimpleWeapon',
    ...{
        ...Object.keys(nonSimpleWeapons).reduce(
            (acc, key) => {
                const cKey = compoundKey(
                    prefixes.prof,
                    key,
                ) as keyof typeof acc;
                acc[cKey] = cKey;
                return acc;
            },
            {} as Record<
                ProficiencyNonSimpleWeaponFeatKey,
                ProficiencyNonSimpleWeaponFeatKey
            >,
        ),
    },
    ...{
        ...Object.keys(allWeapons).reduce(
            (acc, key) => {
                Object.values(nonProficiencyPrefixes).forEach(prefix => {
                    const cKey = compoundKey(prefix, key) as keyof typeof acc;
                    acc[cKey] = cKey;
                });
                return acc;
            },
            {} as Record<
                NonProficencyWeaponFeatKey,
                NonProficencyWeaponFeatKey
            >,
        ),
    },
};

type WeaponFeat = keyof typeof WeaponFeat;

export { WeaponFeat };
