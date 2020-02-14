const port = 3003;

const bodyParser = require('body-parser')
const express    = require('express')
const server     = express();

// toda requisição que passar para o meu servidor vai passar para esse meedle urlencoded
server.use(bodyParser.urlencoded({ extended: true }));

// meddle json
server.use(bodyParser.json());

//fazer o servidor escultar a porta
server.listen(port, () => {
    console.log("backend is running on port ${port}.")
});

module.exports = server;