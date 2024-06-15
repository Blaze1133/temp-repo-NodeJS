const _ = require('lodash');

const names = [1, [2, [3, [5]]]];
const flatnames = _.flattenDeep(names);

console.log(flatnames);