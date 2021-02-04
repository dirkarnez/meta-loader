module.exports = function(content, map, meta) {
    return `module.exports = ${JSON.stringify(eval(content))}`;
}