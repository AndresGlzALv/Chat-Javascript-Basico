const http = require('http');

const io = require('socket.io')(http);

module.exports=function(server){
    var sockets=io.listen(server);
    sockets.on('connection',function(socket){
    console.log('nuevo cliente conectado');

    socket.on('mensajeenviado',function(mensaje){
        sockets.emit('mensajeservidor',mensaje);
    });
     
});
}

