function testStringEnum(enumObject: any, keys?: string[]): void {
    const enumKeys = keys ?? Object.keys(enumObject);
    enumKeys.forEach(key => {
        expect(typeof enumObject[key]).toBe('string');
        expect(enumObject[key]).toEqual(key);
    });
}

function testNumericEnum(enumObject: any, keys?: string[]): void {
    const enumKeys = keys ?? Object.keys(enumObject);
    enumKeys.forEach(key => {
        const keyAsNumber = parseInt(key);
        if (isNaN(keyAsNumber)) {
            expect(typeof enumObject[key]).toBe('number');
        } else {
            expect(enumObject[enumObject[key]]).toEqual(keyAsNumber);
        }
    });
}

export { testStringEnum, testNumericEnum };
