const {add} = require('./index');

describe('add function', () => {

    it('should add arbitrary number of numbers', () => {

        expect(add(4, 5, 6, 7)).toBe(22);

    });

    it('should ignore falsy values', () => {

        expect(add(4, 5, 6, 7, null, undefined, '', NaN)).toBe(22);

    });

    it('should ignore all types that are not strings or numbers', () => {

        expect(add('1', 2, [5, 6], {a: 10, b: 50}, () => 22)).toBe(3);

    });


});