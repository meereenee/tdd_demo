const add = (...numbers) => numbers.reduce((acc, cur) => acc + cur, 0);

module.exports = {
    add
};