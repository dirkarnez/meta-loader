module.exports = function(content, map, meta) {
    const evaluated = eval(source);
    return `module.exports = ${JSON.stringify(evaluated)}`;
}
