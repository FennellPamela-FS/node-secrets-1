// 1. hard coded secret
const hardCodedSECRET = "1 Hard coded secret completed!";     // application secret to make code run

const http = require("http");
const SECRET = "127.0.0.1";     // application secret to make code run
const port = 3000;

// console.log(SECRET);
// console.log(hardCodedSECRET);

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(hardCodedSECRET);
});

server.listen(port, SECRET, () => { })



