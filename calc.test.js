const sum1 = require('./calc');
const subtract = require('./calc')


test('Check if numbers are added', () => {
    expect(sum1(4, 4)).toBe(8)

})

test('check if numbers are subtracted', () => {
    expect(subtract(4, 4)).toBe(0)
})


