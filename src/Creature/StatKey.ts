enum PhysicalStatKey {
    STR = 'STR',
    DEX = 'DEX',
    CON = 'CON',
}

enum MentalStatKey {
    INT = 'INT',
    WIS = 'WIS',
    CHA = 'CHA',
}

const StatKey = {
    ...PhysicalStatKey,
    ...MentalStatKey,
} as const;

type StatKey = (typeof StatKey)[keyof typeof StatKey];

enum StatGroup {
    physical = 'physical',
    mental = 'mental',
}

export { PhysicalStatKey, MentalStatKey, StatKey, StatGroup };
