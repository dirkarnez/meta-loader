module.exports = function(source, map) {
    const evaluated = eval(source);
    return `module.exports = ${JSON.stringify(evaluated)}`;
}