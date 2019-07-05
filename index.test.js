const {add} = require('./index');

describe('add function', () => {

    it('should add two numbers', () => {

        add(4, 5).toBe(9);

    });

});