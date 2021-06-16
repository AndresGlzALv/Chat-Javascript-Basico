$(function (){
    var socket=io();

    var mensaje = $('#texto-mensaje');
    var chat=$('#chat');

    mensaje.focus();


    $('#mensajes').submit(function(e){
        e.preventDefault();
        socket.emit('mensajeenviado',mensaje.val());
        mensaje.val('');
    });

    socket.on('mensajeservidor', function(mensaje){
        chat.append(mensaje+"<br/>");
    });
});