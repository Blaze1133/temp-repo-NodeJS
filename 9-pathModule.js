const path = require('path');
console.log(path.sep);

const fileName = path.basename('/node_module/1-basics.js');
console.log(fileName);

const dirName = path.dirname('/node_module/1-basics.js');
console.log(dirName);

const absolutePath = path.resolve(__dirname,'1-basics.js');
console.log(absolutePath);