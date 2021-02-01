module.exports = function(source, map) {
    console.log("DoesNotMetaPlugin says hello world!");
    
    return `module.exports = "${eval(source)}"`;
};