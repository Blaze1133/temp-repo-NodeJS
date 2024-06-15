const {readFileSync,writeFileSync,readFile,writeFile} = require('fs');

const first = readFileSync('./contents/file1.txt','utf8');
const second = readFileSync('./contents/file2.txt','utf8');

console.log(first);
console.log(second);


writeFileSync('./contents/result.txt',`Inserting the data:  ${first} ${second}`);



readFile('./contents/file1.txt','utf8',(err,result) =>{
    if(err){
        console.error(err);
        return;
    }
    else{
        console.log(result);
    }
});

writeFile('./contents/result.txt','Writing data to the file',(err) =>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Data has been sucessfully written");
    }
})