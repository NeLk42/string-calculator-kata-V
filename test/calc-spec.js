var calc = require('../src/calc')

describe('String calculator add() method', function () {
    it('should return 0 if string is empty', function () {
        expect(calc.add()).toBe(0)
    })
})