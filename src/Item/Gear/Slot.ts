enum GearSlot {
    mainHand = 'mainHand',
    offHand = 'offHand',
    head = 'head',
    torso = 'torso',
    back = 'back',
    ear = 'ear',
    neck = 'neck',
    shoulders = 'shoulders', // Pair
    hands = 'hands', // Pair
    wrists = 'wrists', // Pair
    waist = 'waist',
    legs = 'legs', // Pair
    feet = 'feet', // Pair
    ring = 'ring', // Each
}

type Shape = { slot: GearSlot; qtty: number }[];

export { GearSlot, Shape };
