const EOL = require('os').EOL;

module.exports = function(entity, naming) {
  return [
    'module.exports = {',
    '  ',
    '}',
    ''
  ].join(EOL);
};
