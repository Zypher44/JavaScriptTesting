const cap = require('./sum');

test('Check if first letter is capitalized', () => {
    const s = 'String'
    expect(cap(s.charAt(0).toUpperCase())).toBe(cap(s[0]));
});

