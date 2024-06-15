const {createReadStream} = require('fs');

const readStream = createReadStream('./contents/bigFile.txt');

readStream.on('data',(result) =>{
    console.log(result.length);
})

readStream.on("error",(error)=>{
    console.log(error);
})