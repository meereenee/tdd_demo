const add = (...numbers) => {
    return numbers
        .filter(Number)
        .reduce((acc, cur) => acc + +cur, 0);
};

const subtract = (...numbers) => {
    const [first, ...rest] = numbers;
    return first - add(...rest);
};

module.exports = {
    add,
    subtract,
};