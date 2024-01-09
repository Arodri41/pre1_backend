import express from 'express';


const server = express()

const PORT = 8080;

const Ready = ()=> console.log("server ready on port" + PORT);

server.listen(PORT,Ready);
