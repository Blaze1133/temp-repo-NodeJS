const {EventEmitter} = require('events');

const customEmitter =  new EventEmitter();

customEmitter.on('greet',(name)=>{
    console.log(`Hello Mr. ${name}`);
});

customEmitter.emit('greet',"Tej");

const http = require('http');

const server = http.createServer((req,res) =>{
    console.log("SERVER HAS STARTED");
    res.end("End of the request");
})
server.listen(5000);

server.on("close",()=>{
    console.log("server closed");
})
server.on('error',() =>{
    console.log("ERROR has occured");
});