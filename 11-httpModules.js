const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end("Welcome to your HomePage")
    }
    else if (res.url === '/about'){
        res.end("You are now accessing our About Page");
    }
    else{
        res.end(`<h1>Oops!</h1>
        <p>The page you are looking does not exist </p>
        <a href = "/">Back Home </a>`);
    }
});
server.listen(5000);