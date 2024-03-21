import { School } from './School';
import { SubSchool } from './SubSchool';

const subSchoolParents: { [key in SubSchool]: School } = {
    void: School.universal,
    banish: School.abjuration,
    counter: School.enchantment,
    call: School.conjuration,
    celestial: School.conjuration,
    create: School.conjuration,
    heal: School.conjuration,
    summon: School.conjuration,
    teleport: School.conjuration,
    scry: School.divination,
    charm: School.enchantment,
    compel: School.enchantment,
    figment: School.illusion,
    glamer: School.illusion,
    phantom: School.illusion,
    shadow: School.illusion,
    enhancement: School.transmutation,
    polymorph: School.transmutation,
};

export { subSchoolParents };
