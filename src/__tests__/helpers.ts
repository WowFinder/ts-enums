function expectStringEnum(enumObject: any, keys?: string[]): void {
    const enumKeys = keys ?? Object.keys(enumObject);
    enumKeys.forEach(key => {
        expect(typeof enumObject[key]).toBe('string');
        expect(enumObject[key]).toEqual(key);
    });
}

function expectNumericEnum(enumObject: any, keys?: string[]): void {
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

function expectContains(parent: any, ...children: any[]): void {
    children.forEach(child => {
        Object.keys(child).forEach(key => {
            expect(parent[key]).toBeDefined();
            expect(parent[key]).toEqual(child[key]);
        });
    });
}

export { expectStringEnum, expectNumericEnum, expectContains };
