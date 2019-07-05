const {add} = require('./index');

describe('add function', () => {

    it('should add two numbers', () => {

        expect(add(4, 5)).toBe(9);

    });


    it('should add arbitrary number of numbers', () => {

        expect(add(4, 5, 6, 7)).toBe(0);

    });

});