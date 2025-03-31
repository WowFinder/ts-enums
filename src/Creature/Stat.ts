enum PhysicalStat {
    strength = 'strength',
    dexterity = 'dexterity',
    constitution = 'constitution',
}

enum MentalStat {
    intelligence = 'intelligence',
    wisdom = 'wisdom',
    charisma = 'charisma',
}

const Stat = {
    ...PhysicalStat,
    ...MentalStat,
} as const;

type Stat = (typeof Stat)[keyof typeof Stat];

enum StatGroup {
    physical = 'physical',
    mental = 'mental',
}

export { PhysicalStat, MentalStat, Stat, StatGroup };
