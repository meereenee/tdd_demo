const add = (...numbers) => {
    return numbers
        .filter(Number)
        .reduce((acc, cur) => acc + +cur, 0);
};

const subtract = (...numbers) => {
    const [first, ...rest] = numbers;
    return (first || 0) - add(...rest);
};

module.exports = {
    add,
    subtract,
};