const add = (...values) => {
    return values
        .filter(Number)
        .reduce((acc, cur) => acc + +cur, 0);
};

const subtract = (...values) => {
    const [first, ...rest] = values;
    return (+first || 0) - add(...rest);
};

module.exports = {
    add,
    subtract,
};