enum PhysicalDamageType {
    bludgeoning = 'bludgeoning',
    slashing = 'slashing',
    piercing = 'piercing',
}

enum EnergyType {
    arcane = 'arcane',
    fire = 'fire',
    cold = 'cold',
    nature = 'nature',
    shadow = 'shadow',
    holy = 'holy',
}

enum SpecialDamageType {
    psychic = 'psychic',
}

const DamageType = {
    ...PhysicalDamageType,
    ...EnergyType,
    ...SpecialDamageType,
};
type DamageType = PhysicalDamageType | EnergyType | SpecialDamageType;

enum SpecialDamageModifier {
    spellPower = 'spellPower',
    finesse = 'finesse',
}

enum SpecialDamageRollMultiplier {
    casterLevel = 'casterLevel',
    totalLevel = 'totalLevel',
}

export {
    DamageType,
    EnergyType,
    PhysicalDamageType,
    SpecialDamageModifier,
    SpecialDamageRollMultiplier,
    SpecialDamageType,
};
