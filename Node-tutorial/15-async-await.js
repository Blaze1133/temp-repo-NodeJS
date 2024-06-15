const {readFile,writeFile} = require('fs').promises;


async function result(){
    const first = await readFile("./contents/file1.txt","utf8")
    const second = await readFile("./contents/file2.txt","utf8")
    
    console.log(first,second);
}

result();