const http = require('http');
const express = require ('express');
const morgan = require('morgan');
const app = express();

const server=http.createServer(app);

app.set('port',3000);
app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));

server.listen(app.get('port'),function(){
    console.log('el servidor se ha iniciado');
});

require('./sockets')(server);