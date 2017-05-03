module.exports = blockWrapper;

function blockWrapper(block, context) {
    return 'with(' + (context || 'this') + '){\n' + (block || '') + '\n}';
}