const path = require('path');

function fromSource(to) {
  return path.resolve(__dirname, 'src', to);
}

module.exports = {
  sassOptions: {
    includePaths: [fromSource('styles')],
  },
};
