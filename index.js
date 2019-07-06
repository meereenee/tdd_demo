const add = (...values) => {
    return values
        .filter(Number)
        .reduce((acc, cur) => acc + +cur, 0);
};

const subtract = (first, ...rest) => (+first || 0) - add(...rest);

module.exports = {
    add,
    subtract,
};