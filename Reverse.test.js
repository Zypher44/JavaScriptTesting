const reverseIt = require('./Reverse');

test('Check if String is reversed', () => {
    const s = 'String'
    expect(reverseIt(s)).toBe(s.split("").reverse().join(""))
});

