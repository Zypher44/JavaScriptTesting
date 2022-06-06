
const orderTotal = require('./order-total')

it('works', () => {
    expect(1).toBe(1)
})


it('Quantity', () => {
    expect(orderTotal({
        item: [
            { 'name': 'Dragon candy', price: 2, quantity: 3 }

        ]
    })).toBe(3)
})