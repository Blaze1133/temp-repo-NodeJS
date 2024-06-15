console.log("first taks comepleted");
setTimeout(()=>{
    console.log("second task completed"),0
});
console.log("third task completed");


const http = require('http');
const server = http.createServer((req,res) =>{
    console.log('request event');
    res.end("hello world");
});

server.listen(5000, () =>{
    console.log("Listening to port 5000 .....");
})