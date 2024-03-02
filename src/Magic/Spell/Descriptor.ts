import { AlignmentDescriptor } from '../../Creature';
import { EnergyType } from '../../Damage';

enum ElementalDescriptor {
    air = 'air',
    earth = 'earth',
    fire = 'fire',
    water = 'water',
}

enum CelestialDescriptor {
    lunar = 'lunar',
    solar = 'solar',
    astral = 'astral',
}

enum BaseDescriptor {
    curse = 'curse',
    death = 'death',
    disease = 'disease',
    emotion = 'emotion',
    fear = 'fear',
    language = 'language',
    mind = 'mind',
    pain = 'pain',
    poison = 'poison', // Nature damage subtype?
}

const SpellDescriptor = {
    ...AlignmentDescriptor,
    ...BaseDescriptor,
    ...ElementalDescriptor,
    ...CelestialDescriptor,
    ...EnergyType,
    // Pending energy subtypes:
    // acid (nature)
    // electricity (nature)
    // force (arcane)
    // sonic (bludgeoning)
    // ...review as needed
};

type SpellDescriptor = keyof typeof SpellDescriptor;

export {
    ElementalDescriptor,
    CelestialDescriptor,
    BaseDescriptor,
    SpellDescriptor,
};
