const add = (...numbers) => {
    return numbers
        .filter(Number)
        .reduce((acc, cur) => acc + +cur, 0);
};

module.exports = {
    add
};