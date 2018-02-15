const path = require('path');

const project_root = path.resolve( __dirname, '..' );

module.exports = {
  root: (pathParts) => {
    if (typeof pathParts === 'string') {
      pathParts = pathParts.split('/');
    }
    return path.join.apply(path, [project_root, ...pathParts]);
  }
}