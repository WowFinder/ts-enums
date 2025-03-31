import { ExoticWeaponProficiency } from './Exotic';
import { MartialWeaponProficiency } from './Martial';
import { SimpleWeaponProficiency } from './Simple';

const WeaponProficiency = {
    ...SimpleWeaponProficiency,
    ...MartialWeaponProficiency,
    ...ExoticWeaponProficiency,
};

type WeaponProficiency = keyof typeof WeaponProficiency;

export {
    WeaponProficiency,
    SimpleWeaponProficiency,
    MartialWeaponProficiency,
    ExoticWeaponProficiency,
};
